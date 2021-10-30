import nodemailer from 'nodemailer'
import {
  ConfigurationId,
  DEFAULT_EMAIL_ADDRESS_VERIFICATION_MESSAGE,
  DEFAULT_RESET_PASSWORD_MESSAGE,
  DEFAULT_INVITATION_MESSAGE,
  DEFAULT_FRIEND_REFERRAL_MESSAGE,
  DEFAULT_ADD_ACTION_MESSAGE,
  SystemInitializationStatus,
  DEFAULT_USER_INVITATION
} from '../../common/models/Configuration'
import ResponseStatus from '../../common/application/ResponseStatus'
import { Containers as listBucket } from '../../common/models/Container'

const DefaultConfigs = {
  [ConfigurationId.MAIL_EMAIL_ADDRESS_VERIFICATION]: {
    id: ConfigurationId.MAIL_EMAIL_ADDRESS_VERIFICATION,
    data: {
      senderName: 'Link',
      senderEmail: 'noreply@loopnext.com',
      subject: 'Confirm your email address',
      enabled: false,
      message: DEFAULT_EMAIL_ADDRESS_VERIFICATION_MESSAGE
    }
  },
  [ConfigurationId.MAIL_RESET_PASSWORD]: {
    id: ConfigurationId.MAIL_RESET_PASSWORD,
    data: {
      senderName: 'Link',
      senderEmail: 'noreply@loopnext.com',
      subject: 'Reset password',
      enabled: true,
      message: DEFAULT_RESET_PASSWORD_MESSAGE
    }
  },
  [ConfigurationId.MAIL_INVITATION]: {
    id: ConfigurationId.MAIL_INVITATION,
    data: {
      senderName: 'Link',
      senderEmail: 'noreply@loopnext.com',
      subject: 'Join your link transaction!',
      enabled: true,
      message: DEFAULT_INVITATION_MESSAGE
    }
  },
  [ConfigurationId.MAIL_USER_INVITATION]: {
    id: ConfigurationId.MAIL_USER_INVITATION,
    data: {
      senderName: 'Link',
      senderEmail: 'noreply@loopnext.com',
      subject: 'Join your link user!',
      enabled: true,
      message: DEFAULT_USER_INVITATION
    }
  },
  [ConfigurationId.MAIL_FRIEND_REFERAL]: {
    id: ConfigurationId.MAIL_FRIEND_REFERAL,
    data: {
      senderName: 'Link',
      senderEmail: 'noreply@loopnext.com',
      subject: 'Join your link transaction!',
      enabled: true,
      message: DEFAULT_FRIEND_REFERRAL_MESSAGE
    }
  },
  [ConfigurationId.MAIL_ADD_ACTION]: {
    id: ConfigurationId.MAIL_ADD_ACTION,
    data: {
      senderName: 'Link',
      senderEmail: 'noreply@loopnext.com',
      subject: 'You have been assigned document',
      enabled: true,
      message: DEFAULT_ADD_ACTION_MESSAGE
    }
  },
  [ConfigurationId.MAIL_SMTP_SETTINGS]: {
    id: ConfigurationId.MAIL_SMTP_SETTINGS,
    data: {
      password: null,
      smtpHost: null,
      senderEmail: null,
      username: null,
      smtpPort: null
    }
  }
}

export default function (Configuration) {
  Configuration.validateSmtpSettings = async function (
    smtpHost,
    smtpPort,
    senderEmail,
    username,
    password
  ) {
    const nodeMailer = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      auth: {
        user: username,
        pass: password
      }
    })
    try {
      return await nodeMailer.verify()
    } catch (e) {
      return false
    }
  }

  Configuration.validateInitSystemPassword = async function (password, cb) {
    const systemConfig = await Configuration.findById(
      ConfigurationId.SYSTEM_INITIALIZATION
    )

    if (
      systemConfig &&
      systemConfig.status === SystemInitializationStatus.FINISHED
    ) {
      const err = new Error('System has been initialized already.')
      err.status = 400
      err.code = 'system_initialized'
      return cb(err)
    }

    return { isValid: password === process.env.SYSTEM_INIT_PASSWORD }
  }

  Configuration.initializeSystem = async function (password, admin) {
    const { Role, User } = Configuration.app.models

    const systemConfig = await Configuration.findById(
      ConfigurationId.SYSTEM_INITIALIZATION
    )

    if (
      systemConfig &&
      systemConfig.status === SystemInitializationStatus.FINISHED
    ) {
      const err = new Error('System has been initialized already.')
      err.status = 400
      err.code = 'system_initialized'
      throw err
    }

    if (password !== process.env.SYSTEM_INIT_PASSWORD) {
      const err = new Error('Incorrect password.')
      err.status = 400
      err.code = 'invalid_password'
      throw err
    }

    await Role.createDefaultRoles()

    // Create default app configs.
    await Configuration.createDefaultConfigs()

    // Create admin user.
    await User.createAdminUser(admin)

    // Mark that system has been initialized.
    await Configuration.findOrCreate(
      { where: { id: ConfigurationId.SYSTEM_INITIALIZATION } },
      {
        id: ConfigurationId.SYSTEM_INITIALIZATION,
        status: SystemInitializationStatus.FINISHED
      }
    )

    // Create bucket of storage
    if (process.env.STORAGE_PROVIDER !== 'gridfs') {
      for (const key in listBucket) {
        await _createContainer(listBucket[key])
      }
    }

    return { status: ResponseStatus.SUCCESS }
  }

  Configuration.createDefaultConfigs = async function () {
    const existingConfigs = await Configuration.find()
    const missingConfigs = Object.keys(DefaultConfigs)
      .filter(
        configId =>
          !existingConfigs.some(
            existingConfig => existingConfig.id === configId
          )
      )
      .map(id => DefaultConfigs[id])
    await Configuration.create(missingConfigs)
    return missingConfigs.length
  }

  async function _createContainer (container) {
    const { Container } = Configuration.app.models
    return new Promise(function (resolve, reject) {
      Container.createContainer({ name: container }, (err, data) => {
        if (err) {
          if (err.code === 'EEXIST') {
            resolve()
          } else {
            reject(err)
          }
        } else {
          resolve()
        }
      })
    })
  }
}

export function isValidSmtpSetting (smtpSettings) {
  return (
    smtpSettings &&
    smtpSettings.password &&
    smtpSettings.smtpHost &&
    smtpSettings.senderEmail &&
    smtpSettings.username &&
    smtpSettings.smtpPort
  )
}
