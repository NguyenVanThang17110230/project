import _ from 'lodash'
import {
  ConfigurationId,
  SystemInitializationStatus
} from '../../common/models/Configuration'
import { validateUser } from '../validators/UserValidator'

export interface IApplicationGateway {
  saveConfiguration({ id: string, data: Object }): Promise<Object>;

  getConfigurations(keys: [String]): Promise<[Object]>;

  verifySmtpEmailSettings(settings: Object): Promise<boolean>;
}

export default class ApplicationService {
  constructor (options: { applicationGateway: IApplicationGateway }) {
    this.applicationGateway = options.applicationGateway
  }

  async saveEmailAddressVerification (data) {
    return this.applicationGateway.saveConfiguration({
      id: ConfigurationId.MAIL_EMAIL_ADDRESS_VERIFICATION,
      data
    })
  }

  async saveResetPassword (data) {
    return this.applicationGateway.saveConfiguration({
      id: ConfigurationId.MAIL_RESET_PASSWORD,
      data
    })
  }

  async emailTransactionInvitation (data) {
    return this.applicationGateway.saveConfiguration({
      id: ConfigurationId.MAIL_INVITATION,
      data
    })
  }

  async emailDocumentAddAction (data) {
    return this.applicationGateway.saveConfiguration({
      id: ConfigurationId.MAIL_ADD_ACTION,
      data
    })
  }

  async saveSmtpSettings (data) {
    return this.applicationGateway.saveConfiguration({
      id: ConfigurationId.MAIL_SMTP_SETTINGS,
      data
    })
  }

  async getConfigurations (keys) {
    return this.applicationGateway.getConfigurations(keys)
  }

  async isValidSmtpEmailSettings (settings) {
    return this.applicationGateway.verifySmtpEmailSettings(settings)
  }

  async checkAppHasBeenSetup () {
    try {
      const config = await this.applicationGateway.getConfiguration(
        ConfigurationId.SYSTEM_INITIALIZATION
      )
      return !!(config && config.status === SystemInitializationStatus.FINISHED)
    } catch (e) {
      return true
    }
  }

  async validateInitSystemPassword (password) {
    return this.applicationGateway.validateInitSystemPassword(password)
  }

  async initializeSystem ({ password, admin }) {
    validateUser(_.pick(admin, ['name', 'email', 'password']))
    return this.applicationGateway.initializeSystem({ password, admin })
  }
}
