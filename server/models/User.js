import _ from 'lodash'
import moment from 'moment'
import nodemailer from 'nodemailer'
import winston from 'winston'
import { isAdmin } from '../../common/models/User'
import RoleModel from '../../common/models/Role'
import { ConfigurationId } from '../../common/models/Configuration'
import { isValidSmtpSetting } from './Configuration'
import config from '../config.local'
import NodeMailerEmailGateway from '../gateways/NodeMailerEmailGateway'
import uuidv4 from 'uuid/v4'
import path from 'path'
import s3 from '../gateways/s3'

const MAIL_TEMPLATE_INTERPOLATE = /%([\s\S]+?)%/g

const ErrorType = {
  ACCOUNT_INACTIVATED: 'ACCOUNT_INACTIVATED'
}

export default function (User) {
  User.on('resetPasswordRequest', async function (event) {
    const { Configuration } = User.app.models

    const resetPasswordMailSettings = await Configuration.findById(
      ConfigurationId.MAIL_RESET_PASSWORD
    )

    const url = `${config.baseUrl}/reset-new-password?access_token=${
      event.accessToken.id
    }&user_id=${event.user.id}`
    const html = _.template(resetPasswordMailSettings.data.message, {
      interpolate: MAIL_TEMPLATE_INTERPOLATE
    })({
      LINK: url,
      EMAIL: event.email
    })

    await _sendMail({
      to: event.email,
      from: `${resetPasswordMailSettings.data.senderName} <${
        resetPasswordMailSettings.data.senderEmail
      }>`,
      subject: resetPasswordMailSettings.data.subject,
      html
    })
  })

  User.beforeRemote('changePassword', async function (ctx) {
    const userId = ctx.args.id
    const user = await User.findById(userId)

    if (!ctx.args.oldPassword && user.usingDefaultPassword) {
      ctx.args.oldPassword = process.env.DEFAULT_PASSWORD
    }
  })

  User.afterRemote('changePassword', async function (ctx) {
    const userId = ctx.args.id
    await User.update({ id: userId }, { usingDefaultPassword: false })
  })

  User.beforeRemote('login', async function (ctx, accessToken) {
    const {
      req: {
        body: { email }
      }
    } = ctx
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (user && user.isInactive) {
      throw new Error(ErrorType.ACCOUNT_INACTIVATED)
    }
  })

  User.afterRemote('login', function (ctx, accessToken, next) {
    if (accessToken && accessToken.id) {
      ctx.res.cookie('access_token', accessToken.id, {
        signed: true,
        maxAge: accessToken.ttl * 1000 // access token ttl is second so need to
        // * 1000 to get milliseconds
      })
    }

    next()
  })

  User.afterRemote('create', async function (ctx, user) {
    if (user.emailVerified) return
    const isAdmin = await user.isAdmin()
    if (isAdmin) {
      return
    }

    try {
      await User._sendConfirmationEmail(user)
    } catch (e) {
      winston.warn(`Failed to send verification email to user ${user.id}`, e)
    }

    // assign signed up users to transactions if they were invited
    const { TransactionInvitation, TransactionParty } = User.app.models
    const transactionInvitations = await TransactionInvitation.find({
      where: { email: user.email }
    })
    const data = transactionInvitations.map(invitation => ({
      role: invitation.role,
      transactionId: invitation.transactionId,
      userId: user.id,
      firstName: invitation.firstName,
      lastName: invitation.lastName,
      email: invitation.email,
      phoneNumber: invitation.phoneNumber,
      access: invitation.access
    }))
    await TransactionParty.create(data)
  })

  // User.observe('after save', async function (ctx, next) {
  //   const { instance } = ctx
  //   if (instance.isInactive) {
  //     await User.app.models.AccessToken.destroyAll({
  //       userId: instance.id
  //     })
  //   }
  // })

  // Remove associated social login identity and role mapping (if any) when
  // user is deleted.
  User.observe('after delete', async function (ctx) {
    const { RoleMapping, UserIdentity, UserCommission } = User.app.models
    const userId = ctx.where.id

    await Promise.all([
      RoleMapping.remove({
        principalType: 'USER',
        principalId: userId
      }),
      UserIdentity.remove({ userId }),
      UserCommission.remove({ userId })
    ])
  })

  User.createAdminUser = async function ({ name, email, password }) {
    const { Role, RoleMapping } = User.app.models

    const admin = await User.create({ name, email, password })

    const adminRole = await Role.findOne({ where: { name: RoleModel.ADMIN } })
    await adminRole.principals.create({
      principalType: RoleMapping.USER,
      principalId: admin.id
    })

    return admin
  }

  User._sendConfirmationEmail = async function (user) {
    // Create nodeMail instance
    const mailSettings = await User.app.models.Configuration.find({
      where: {
        id: {
          inq: [
            ConfigurationId.MAIL_EMAIL_ADDRESS_VERIFICATION,
            ConfigurationId.MAIL_SMTP_SETTINGS
          ]
        }
      }
    })
    const {
      MAIL_EMAIL_ADDRESS_VERIFICATION: emailAddressVerificationConfig,
      MAIL_SMTP_SETTINGS: smtpSettingConfig
    } = _.keyBy(mailSettings, 'id')
    if (!emailAddressVerificationConfig.data.enabled) return
    if (!isValidSmtpSetting(smtpSettingConfig.data)) {
      return
    }
    const nodeMailer = nodemailer.createTransport({
      host: smtpSettingConfig.data.smtpHost,
      port: smtpSettingConfig.data.smtpPort,
      auth: {
        user: smtpSettingConfig.data.username,
        pass: smtpSettingConfig.data.password
      }
    })
    // Send verification email
    return user.verify({
      type: 'email',
      to: user.email,
      from: emailAddressVerificationConfig.data.senderEmail,
      subject: emailAddressVerificationConfig.data.subject,
      templateFn: (verifyOptions, cb) => {
        const { protocol, host, port } = verifyOptions
        const internalUrl = `${protocol}://${host}${
          port === 80 ? '' : `:${port}`
        }`
        const baseUrl = process.env.BASE_URL || internalUrl
        const verifyLink = verifyOptions.verifyHref.replace(
          internalUrl,
          baseUrl
        )
        const html = _.template(emailAddressVerificationConfig.data.message, {
          interpolate: MAIL_TEMPLATE_INTERPOLATE
        })({
          LINK: verifyLink
        })
        cb(null, html)
      },
      mailer: {
        send: function (...agrs) {
          return nodeMailer.sendMail(...agrs)
        }
      }
    })
  }

  User.prototype.isAdmin = async function () {
    const roles = _.isArray(this.roles) ? this.roles : await this.roles.find()
    return isAdmin({ roles })
  }

  async function _sendMail ({ to, from, subject, html }) {
    const { Configuration } = User.app.models

    const smtpSettings = await Configuration.findById(
      ConfigurationId.MAIL_SMTP_SETTINGS
    )
    const emailGateway = new NodeMailerEmailGateway({
      host: smtpSettings.data.smtpHost,
      port: smtpSettings.data.smtpPort,
      user: smtpSettings.data.username,
      pass: smtpSettings.data.password
    })

    return emailGateway.send({ to, from, subject, html })
  }

  User.prototype.getMyMessagingParties = async function () {
    const { TransactionParty, Message } = User.app.models

    const myFullAccessParties = await TransactionParty.find({
      where: { userId: this.id }
    })
    const transactionIds = myFullAccessParties.map(item => item.transactionId)

    const otherFullAccessParties = await TransactionParty.find({
      where: {
        transactionId: { inq: transactionIds },
        userId: { neq: this.id }
      },
      include: 'user'
    })

    const promiseFns = otherFullAccessParties.map(async party => {
      const myFullAccessParty = myFullAccessParties.find(
        myParty =>
          myParty.transactionId.toString() === party.transactionId.toString()
      )

      party.messages = await Message.find({
        where: {
          or: [
            {
              senderId: myFullAccessParty.id,
              recipientId: party.id
            },
            {
              senderId: party.id,
              recipientId: myFullAccessParty.id
            }
          ]
        },
        limit: 1,
        order: 'createdAt DESC'
      })
      return party
    })
    let otherParties = await Promise.all(promiseFns)
    otherParties = _.sortBy(otherParties, [
      party => {
        let lastMessage = _.last(party.messages)
        if (lastMessage) {
          return moment.duration(moment().diff(lastMessage.createdAt))
            ._milliseconds
        }
      }
    ])
    return {
      myParties: myFullAccessParties,
      otherParties
    }
  }

  User.prototype.updateAvatar = async function (req, res) {
    const file = req.files[0]
    const ext = path.extname(file.originalname)
    const uploadedFile = await s3
      .upload({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `avatars/${uuidv4()}${ext}`,
        Body: file.buffer,
        ACL: 'public-read'
      })
      .promise()
    await User.update(
      { id: this.id },
      {
        avatar: uploadedFile.Location
      }
    )
  }

  User.prototype.uploadCoverImage = async function (req, res) {
    const file = req.files[0]
    const ext = path.extname(file.originalname)
    const uploadedFile = await s3
      .upload({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `coverImages/${uuidv4()}${ext}`,
        Body: file.buffer,
        ACL: 'public-read'
      })
      .promise()
    await User.update(
      { id: this.id },
      {
        coverImage: uploadedFile.Location
      }
    )
  }

  async function findInvatation (email) {
    const { Invitation } = User.app.models
    const invitationInfo = await Invitation.findOne({
      where: { email }
    })
    return invitationInfo.referrerId
  }

  async function findReferrer (email, referrers = []) {
    try {
      const referrerId = await findInvatation(email)

      const { user } = User.app.models
      const referrer = await user.findOne({
        where: { id: referrerId }
      })
      referrers.push(referrer)
      return await findReferrer(referrer.email, referrers)
    } catch (error) {
      return referrers
    }
  }

  User.prototype.getAllReferrers = async function () {
    const referrers = await findReferrer(this.email)
    return { referrers }
  }

  User.prototype.getAllUserContact = async function () {
    const { TransactionParty } = User.app.models
    const transaction = await TransactionParty.find({
      where: {
        userId: this.id
      }
    })
    if (transaction.length > 0) {
      const transactionId = await transaction.map(item => item.transactionId)
      const transactionIdLast = transactionId[transactionId.length - 1]
      const transactionIdFirst = transactionId[0]
      const transactionParty = await TransactionParty.find({
        where: {
          transactionId: { inq: transactionId }
        }
      })
      const transactionPartyLast = await TransactionParty.find({
        where: {
          transactionId: transactionIdLast
        }
      })
      const transactionPartyFirst = await TransactionParty.find({
        where: {
          transactionId: transactionIdFirst
        }
      })
      const userId = await transactionParty.map(x => x.userId)
      const userIdLast = await transactionPartyLast.map(x => x.userId)

      const userIdFirst = await transactionPartyFirst.map(x => x.userId)

      const user = await User.find({
        where: {
          id: { inq: userId }
        }
      })
      const userLast = await User.find({
        where: {
          id: { inq: userIdLast }
        }
      })
      const userFirst = await User.find({
        where: {
          id: { inq: userIdFirst }
        }
      })
      return { user, userLast, userFirst }
    }
  }

  User.prototype.getTransactionInfo = async function (filter) {
    const parsedFilter = JSON.parse(filter)

    const { TransactionParty, Transaction } = User.app.models
    const transactionParty = await TransactionParty.find({
      where: {
        userId: this.id,
        or: [{ role: 'seller-agent' }, { role: 'buyer-agent' }]
      }
    })

    const promise = transactionParty.map(async party => {
      const transaction = await Transaction.findOne({
        where: {
          ...parsedFilter.where,
          id: party.transactionId
        },
        include: 'transactionCommission'
      })
      return Object.assign({}, transaction ? transaction.toJSON() : null, {
        party: party.role
      })
    })

    const transactions = await Promise.all(promise)
    const filteredTransaction = transactions.filter(transaction => {
      return transaction.id !== undefined
    })

    const ret = parsedFilter.limit
      ? _.slice(
        filteredTransaction,
        parsedFilter.skip,
        parsedFilter.skip + parsedFilter.limit
      )
      : filteredTransaction
    return _.reverse(ret)
  }
}
