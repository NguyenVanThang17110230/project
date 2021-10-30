import _ from 'lodash'
import moment from 'moment-timezone/builds/moment-timezone-with-data'
import nodemailer from 'nodemailer'
import {
  TransactionActivityType,
  TransactionRole
} from '../../common/models/Transaction'
import { ConfigurationId, Timezone } from '../../common/models/Configuration'
import { isValidSmtpSetting } from './Configuration'

const MAIL_TEMPLATE_INTERPOLATE = /%%([\s\S]+?)%%/g

export default TransactionInvitation => {
  TransactionInvitation.observe('after save', async ctx => {
    if (ctx.isNewInstance) {
      const {
        user,
        TransactionParty,
        TransactionActivity,
        Transaction
      } = TransactionInvitation.app.models
      const transactionInvitation = ctx.instance

      const existingUser = await user.findOne({
        where: { email: transactionInvitation.email }
      })

      if (existingUser) {
        await TransactionParty.create({
          role: transactionInvitation.role,
          transactionId: transactionInvitation.transactionId,
          userId: existingUser.id,
          firstName: transactionInvitation.firstName,
          lastName: transactionInvitation.lastName,
          email: transactionInvitation.email,
          phoneNumber: transactionInvitation.phoneNumber,
          access: transactionInvitation.access
        })
      } else {
        await TransactionActivity.create({
          transactionId: transactionInvitation.transactionId,
          actorId: ctx.options.accessToken.userId,
          type: TransactionActivityType.INVITING_TO_PARTY,
          role: transactionInvitation.role
        })

        // const fullName = `${transactionInvitation.firstName} ${
        //   transactionInvitation.lastName
        // }`
        const invitation = ctx.instance
        const transaction = await Transaction.findById(invitation.transactionId)
        const party = await TransactionParty.findOne({
          where: {
            userId: ctx.options.accessToken.userId,
            transactionId: transaction.id
          }
        })
        const userSend = await user.findById(ctx.options.accessToken.userId)
        const transactionAddress = `${transaction.address}`
        let name
        if (party.firstName && party.lastName) {
          name = `${party.firstName + ' ' + party.lastName}`
        } else if (party.firstName || party.lastName) {
          name = `${party.firstName || party.lastName}`
        } else {
          if (userSend) {
            if (userSend.name) {
              name = `${userSend.name}`
            }
          }
        }
        await _sendMail(
          transactionInvitation.email,
          transactionInvitation.id,
          transactionAddress,
          invitation.role,
          name
        )
      }
    }
  })

  async function _sendMail (to, invitationId, transactionAddress, role, name) {
    const mailSettings = await TransactionInvitation.app.models.Configuration.find(
      {
        where: {
          id: {
            inq: [
              ConfigurationId.MAIL_INVITATION,
              ConfigurationId.MAIL_SMTP_SETTINGS
            ]
          }
        }
      }
    )

    const {
      MAIL_INVITATION: mailInvitationConfig,
      MAIL_SMTP_SETTINGS: smtpSettingConfig
    } = _.keyBy(mailSettings, 'id')

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

    const createdDate = moment.tz(new Date(), Timezone.LOS_ANGELES)

    const baseUrl = process.env.BASE_URL
    var link = `${baseUrl}/signup?invitationId=${invitationId}`
    if (role === TransactionRole.VENDORS) {
      link = `${baseUrl}/vendor?invitationId=${invitationId}`
    }
    const html = _.template(mailInvitationConfig.data.message, {
      interpolate: MAIL_TEMPLATE_INTERPOLATE
    })({
      LINK: link,
      IMAGE_LOGO: `${baseUrl}/static/images/email/new-link-white.png`,
      TRANSACTION_ADDRESS: transactionAddress,
      ROLE: `${role.replace(/-/g, ' ')}`,
      NAME: name,
      DAY: `${createdDate.format('DD')}`,
      MONTH: `${createdDate.format('MMMM')}`,
      YEAR: `${createdDate.format('YYYY')}`
    })

    try {
      await nodeMailer.sendMail({
        to,
        from: mailInvitationConfig.data.senderEmail,
        subject: mailInvitationConfig.data.subject,
        html
      })
    } catch (e) {
      console.error(e)
    }
  }

  TransactionInvitation.disableRemoteMethodByName('patchOrCreate')
  TransactionInvitation.disableRemoteMethodByName('replaceOrCreate')
  TransactionInvitation.disableRemoteMethodByName('exists')
  TransactionInvitation.disableRemoteMethodByName('destroyById')
  TransactionInvitation.disableRemoteMethodByName(
    'prototype.__get__transaction'
  )
  TransactionInvitation.disableRemoteMethodByName('createChangeStream')
  TransactionInvitation.disableRemoteMethodByName('count')
  TransactionInvitation.disableRemoteMethodByName('findOne')
  TransactionInvitation.disableRemoteMethodByName('updateAll')
  TransactionInvitation.disableRemoteMethodByName('upsertWithWhere')
  TransactionInvitation.disableRemoteMethodByName('replaceById')
  TransactionInvitation.disableRemoteMethodByName('prototype.patchAttributes')
}
