import ApplicationService from './ApplicationService'
import ApplicationGateway from '../gateways/ApplicationGateway'
import {
  ConfigurationId,
  SystemInitializationStatus
} from '../../common/models/Configuration'

jest.mock('../gateways/ApplicationGateway')

let applicationService, mockedApplicationGateway
beforeEach(() => {
  mockedApplicationGateway = new ApplicationGateway({})
  applicationService = new ApplicationService({
    applicationGateway: mockedApplicationGateway
  })
})

afterEach(() => {
  ApplicationGateway.mockClear()
})

describe('saveEmailAddressVerification()', () => {
  it('should call save data with correct id', async () => {
    await applicationService.saveEmailAddressVerification({})
    expect(mockedApplicationGateway.saveConfiguration).toHaveBeenCalledWith({
      id: ConfigurationId.MAIL_EMAIL_ADDRESS_VERIFICATION,
      data: {}
    })
  })
})

describe('saveResetPassword()', () => {
  it('should call save data with correct id', async () => {
    await applicationService.saveResetPassword({})
    expect(mockedApplicationGateway.saveConfiguration).toHaveBeenCalledWith({
      id: ConfigurationId.MAIL_RESET_PASSWORD,
      data: {}
    })
  })
})

describe('emailTransactionInvitation()', () => {
  it('should call save data with correct id', async () => {
    await applicationService.saveResetPassword({})
    expect(mockedApplicationGateway.saveConfiguration).toHaveBeenCalledWith({
      id: ConfigurationId.MAIL_INVITATION,
      data: {}
    })
  })
})

describe('emailDocumentAddAction()', () => {
  it('should call save data with correct id', async () => {
    await applicationService.saveResetPassword({})
    expect(mockedApplicationGateway.saveConfiguration).toHaveBeenCalledWith({
      id: ConfigurationId.MAIL_ADD_ACTION,
      data: {}
    })
  })
})

describe('saveSmtpSettings()', () => {
  it('should call save data with correct id', async () => {
    await applicationService.saveSmtpSettings({})
    expect(mockedApplicationGateway.saveConfiguration).toHaveBeenCalledWith({
      id: ConfigurationId.MAIL_SMTP_SETTINGS,
      data: {}
    })
  })
})

describe('getConfigurations()', () => {
  it('should get configuration data based on provided IDs', async () => {
    await applicationService.getConfigurations([
      ConfigurationId.MAIL_RESET_PASSWORD,
      ConfigurationId.MAIL_SMTP_SETTINGS,
      ConfigurationId.MAIL_INVITATION,
      ConfigurationId.MAIL_ADD_ACTION,
      ConfigurationId.MAIL_EMAIL_ADDRESS_VERIFICATION
    ])
    expect(mockedApplicationGateway.getConfigurations).toHaveBeenCalledWith([
      ConfigurationId.MAIL_RESET_PASSWORD,
      ConfigurationId.MAIL_INVITATION,
      ConfigurationId.MAIL_ADD_ACTION,
      ConfigurationId.MAIL_SMTP_SETTINGS,
      ConfigurationId.MAIL_EMAIL_ADDRESS_VERIFICATION
    ])
  })
})

describe('isValidSmtpEmailSettings()', () => {
  it('should call gateway method to validate smtp settings invalid', async () => {
    const invalidSmtpEmailSettings = {}
    await applicationService.isValidSmtpEmailSettings(invalidSmtpEmailSettings)
    expect(mockedApplicationGateway.verifySmtpEmailSettings).toHaveBeenCalled()
  })
})

describe('checkAppHasBeenSetup()', () => {
  it('should return true if system has been initialized', async () => {
    mockedApplicationGateway.getConfiguration = jest
      .fn()
      .mockImplementation(() => ({
        status: SystemInitializationStatus.FINISHED
      }))
    const result = await applicationService.checkAppHasBeenSetup()
    expect(result).toBe(true)
  })

  it('should return false if system has not been initialized', async () => {
    mockedApplicationGateway.getConfiguration = jest
      .fn()
      .mockImplementation(() => null)
    const result = await applicationService.checkAppHasBeenSetup()
    expect(result).toBe(false)
  })

  it('should return true if there is error happening (to be safe)', async () => {
    mockedApplicationGateway.getConfiguration = jest
      .fn()
      .mockImplementation(() => {
        throw new Error()
      })
    const result = await applicationService.checkAppHasBeenSetup()
    expect(result).toBe(true)
  })
})

describe('validateInitSystemPassword()', () => {
  it('should call gateway method to validate password', async () => {
    const password = 'password'
    await applicationService.validateInitSystemPassword(password)
    expect(
      mockedApplicationGateway.validateInitSystemPassword
    ).toHaveBeenCalledWith(password)
  })
})

describe('initializeSystem()', () => {
  it('should validate user and call gateway to initialize the system', async () => {
    const password = 'password'
    const admin = {
      name: 'Admin name',
      email: 'admin@gmail.com',
      password: '123456'
    }
    await applicationService.initializeSystem({ password, admin })
    expect(mockedApplicationGateway.initializeSystem).toHaveBeenCalledWith({
      password,
      admin
    })
  })
})
