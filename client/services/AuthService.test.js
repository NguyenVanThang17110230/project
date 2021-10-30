import AuthService from './AuthService'
import ValidationError, { ErrorCode } from '../errors/ValidationError'
import AuthGateway from '../gateways/AuthGateway'
import UserGateway from '../gateways/UserGateway'
import StorageGateway from '../gateways/StorageGateway'
import PubsubGateway from '../gateways/PubsubGateway'
import * as PubsubConnector from '../connectors/PubsubConnector'
import { Constraint } from '../../common/models/User'

jest.mock('../gateways/AuthGateway')
jest.mock('../gateways/UserGateway')
jest.mock('../gateways/StorageGateway')

let authService, mockedAuthGateway, mockedUserGateway, mockedStorageGateway
const pubsubGateway = new PubsubGateway({
  pubsubConnector: PubsubConnector.create()
})

beforeEach(() => {
  mockedAuthGateway = new AuthGateway({})
  mockedUserGateway = new UserGateway({})
  mockedStorageGateway = new StorageGateway({})

  authService = new AuthService({
    pubsubGateway,
    userGateway: mockedUserGateway,
    authGateway: mockedAuthGateway,
    storageGateway: mockedStorageGateway
  })
})

afterEach(() => {
  AuthGateway.mockClear()
})

describe('loginWithEmail()', () => {
  it('should call AuthGateway to authenticate user', async () => {
    const email = 'test@gmail.com'
    const password = '123456'
    await authService.loginWithEmail({ email, password })
    expect(mockedAuthGateway.loginWithEmail).toHaveBeenCalled()
  })
})

describe('signupWithEmail()', () => {
  it('should throw error if username, email or password is invalid', async () => {
    const invalidName = ''
    const invalidEmail = 'validEmailgmail.com'
    const invalidPassword = '1'

    let thrownErr
    try {
      await authService.signupWithEmail({
        name: invalidName,
        email: invalidEmail,
        password: invalidPassword
      })
    } catch (e) {
      thrownErr = e
    }

    const expectedError = new ValidationError({
      name: [ErrorCode.REQUIRED],
      email: [ErrorCode.INVALID_EMAIL],
      password: [ErrorCode.INVALID_LENGTH]
    })
    expect(thrownErr).toEqual(expectedError)
  })

  it('should create new user, then login that new user and return the user object', async () => {
    const name = 'Valid name'
    const email = 'validEmail@gmail.com'
    const password = '123456'

    const expectedResult = { name, email }
    mockedAuthGateway.loginWithEmail = jest
      .fn()
      .mockImplementation(async () => expectedResult)
    const spyOnUserCreate = jest.spyOn(mockedUserGateway, 'create')

    const result = await authService.signupWithEmail({ name, email, password })
    expect(spyOnUserCreate).toHaveBeenCalled()
    expect(mockedAuthGateway.loginWithEmail).toHaveBeenCalled()
    expect(result).toEqual(expectedResult)
  })
})

describe('getLoginUser()', () => {
  it('should call AuthGateway to get and return logged in user', async () => {
    const expectedResult = {
      id: '5baa01d35f2f003ad54a5503',
      name: 'Hao Tang 2',
      preferredLanguage: 'en',
      email: 'haotang.io@gmail.com'
    }
    AuthGateway.mockImplementationOnce(() => ({
      getLoginUser: jest.fn().mockImplementation(async () => expectedResult)
    }))
    mockedAuthGateway = new AuthGateway({})
    authService = new AuthService({
      userGateway: mockedUserGateway,
      authGateway: mockedAuthGateway
    })
    const result = await authService.getLoginUser()
    expect(mockedAuthGateway.getLoginUser).toHaveBeenCalled()
    expect(result).toEqual(expectedResult)
  })
})

describe('logout()', () => {
  it('should call UserGateway to log out user', async () => {
    await authService.logout()
    expect(mockedAuthGateway.logout).toHaveBeenCalled()
  })
})

describe('sendResetPasswordEmail()', () => {
  it('should call UserGateway send reset password email', async () => {
    const email = 'test@gmail.com'
    await authService.sendResetPasswordEmail(email)
    expect(mockedAuthGateway.sendResetPasswordEmail).toHaveBeenCalledWith(email)
  })
})

describe('updateAccountInfo()', () => {
  it('should call UserGateway update user account info', async () => {
    const name = 'test user name'
    const email = 'test@gmail.com'
    const preferredLanguage = 'en'
    await authService.updateAccountInfo({ name, email, preferredLanguage })
    expect(mockedAuthGateway.updateAccountInfo).toHaveBeenCalledWith({
      name,
      email,
      preferredLanguage
    })
  })
})

describe('updatePassword()', () => {
  it('should call UserGateway to update user password', async () => {
    const oldPassword = 'test user name'
    const newPassword = 'test@gmail.com'
    await authService.updatePassword({ oldPassword, newPassword })
    expect(mockedAuthGateway.updatePassword).toHaveBeenCalledWith({
      oldPassword,
      newPassword
    })
  })

  it('should reject invalid password', async () => {
    const oldPassword = 'test user name'
    const invalidPassword = '1'
    try {
      await authService.updatePassword({
        oldPassword,
        newPassword: invalidPassword
      })
    } catch (e) {
      expect(e).toEqual(
        new ValidationError({ password: ErrorCode.INVALID_LENGTH })
      )
    }
    expect(mockedAuthGateway.updatePassword).not.toHaveBeenCalled()
  })
})

describe('setNewPassword()', () => {
  it('should call UserGateway to set user password', async () => {
    const userId = 'test userId'
    const newPassword = 'test@gmail.com'
    const accessToken = 'test access token'
    await authService.setNewPassword({ userId, newPassword }, accessToken)
    expect(mockedAuthGateway.setNewPassword).toHaveBeenCalledWith(
      { userId, newPassword },
      accessToken
    )
  })

  it('should reject invalid password', async () => {
    const userId = 'test userId'
    const invalidPassword = '1'
    const accessToken = 'test access token'
    try {
      await authService.setNewPassword(
        { userId, newPassword: invalidPassword },
        accessToken
      )
    } catch (e) {
      expect(e).toEqual(new ValidationError(ErrorCode.INVALID_LENGTH))
    }
    expect(mockedAuthGateway.setNewPassword).not.toHaveBeenCalled()
  })
})

describe('uploadAvatar()', () => {
  it('should throw error if file is too large or file type is invalid', async () => {
    let thrownError
    try {
      await authService.uploadAvatar({
        size: Constraint.avatar.MAX_FILE_SIZE + 1,
        type: 'invalid_type'
      })
    } catch (e) {
      thrownError = e
    }
    expect(thrownError.name).toBe(ValidationError.name)
    expect(thrownError.details).toEqual([
      ErrorCode.INVALID_FILE_TYPE,
      ErrorCode.INVALID_FILE_SIZE
    ])
  })

  it('should upload file and update user info if file is valid', async () => {
    const mockedUploadedFileUrl = 'https://google.com/test.img'
    mockedStorageGateway.upload = jest
      .fn()
      .mockImplementation(async () => mockedUploadedFileUrl)

    await authService.uploadAvatar({
      size: Constraint.avatar.MAX_FILE_SIZE,
      type: Constraint.avatar.ALLOWED_FILE_TYPES[0]
    })
    expect(mockedStorageGateway.upload).toHaveBeenCalled()
    expect(mockedAuthGateway.updateAvatar).toHaveBeenCalledWith(
      mockedUploadedFileUrl
    )
  })
})

describe('setAccessToken()', () => {
  it('should set access token to AuthGateway', async () => {
    const accessToken = 'random_token_id'
    authService.setAccessToken(accessToken)
    expect(mockedAuthGateway.setAccessToken).toHaveBeenCalledWith(accessToken)
  })
})
