import { IUserGateway } from './UserService'
import { userService } from './'
import BaseService from './BaseService'
import { validateAvatarUpload, validateUser } from '../validators/UserValidator'
import { Containers } from '../../common/models/Container'
import { Rank } from '../../common/models/User'
import Role from '../../common/models/Role'

export interface IAuthGateway {
  loginWithEmail({ email: string, password: string }): Promise<Object>;

  getLoginUser(): Promise<Object>;

  logout(): Promise<void>;

  sendResetPasswordEmail(email: string): Promise<void>;

  updateAccountInfo({
    name: string,
    email: string,
    preferredLanguage: string
  }): Promise<void>;

  updatePassword({
    oldPassword: string,
    newPassword: string
  }): Promise<void>;

  setNewPassword(
    { userId: string, newPassword: string },
    accessToken: string
  ): Promise<void>;
}

export interface IStorageGateway {
  getOrCreateContainer(name: string): Promise<Object>;

  upload(containerName: string, file: Object): Promise<Object>;
}

export default class AuthService extends BaseService {
  static Error = {
    LOGIN_FAILED: 'LOGIN_FAILED',
    EMAIL_NOT_FOUND: 'EMAIL_NOT_FOUND',
    INVALID_CURRENT_PASSWORD: 'INVALID_CURRENT_PASSWORD',
    INVALID_EMAIL: 'INVALID_EMAIL',
    ACCOUNT_INACTIVATED: 'ACCOUNT_INACTIVATED'
  }

  static Event = {
    USER_LOGIN: 'USER_LOGIN',
    USER_SIGNUP: 'USER_SIGNUP',
    USER_LOGOUT: 'USER_LOGOUT'
  }

  constructor (options: {
    pubsubGateway: Object,
    userGateway: IUserGateway,
    roleGateway: Object,
    authGateway: IAuthGateway,
    storageGateway: IStorageGateway
  }) {
    super(options)
    this.userGateway = options.userGateway
    this.roleGateway = options.roleGateway
    this.authGateway = options.authGateway
    this.storageGateway = options.storageGateway
  }

  async loginWithEmail ({ email, password }) {
    const user = await this.authGateway.loginWithEmail({ email, password })
    this.emit(AuthService.Event.USER_LOGIN, { type: 'email', user })
    return user
  }

  async getLoginUser () {
    return this.authGateway.getLoginUser()
  }

  async signupWithEmail ({ firstName, lastName, email, password, role }) {
    validateUser({ firstName, lastName, email, password })

    let user
    if (role === Role.AGENT) {
      user = await this.userGateway.create({
        firstName,
        lastName,
        email,
        password,
        rank: Rank.AGENT,
        cash: 0
      })
    } else {
      user = await this.userGateway.create({
        firstName,
        lastName,
        email,
        password
      })
    }

    await userService._setRoleForSignUpUser(user.id, role)

    this.emit(AuthService.Event.USER_SIGNUP, { type: 'email', user })

    return this.loginWithEmail({ email, password })
  }

  async logout () {
    await this.authGateway.logout()
    this.emit(AuthService.Event.USER_LOGOUT)
  }

  async sendResetPasswordEmail (email) {
    validateUser({ email })
    return this.authGateway.sendResetPasswordEmail(email)
  }

  async updateAccountInfo ({ name, email, preferredLanguage }) {
    validateUser({ name, email })
    await this.authGateway.updateAccountInfo({ name, email, preferredLanguage })
  }

  async updatePassword ({ oldPassword, newPassword }) {
    validateUser({ password: newPassword })
    await this.authGateway.updatePassword({ oldPassword, newPassword })
  }

  async setNewPassword ({ userId, newPassword }, accessToken) {
    validateUser({ password: newPassword })
    await this.authGateway.setNewPassword({ userId, newPassword }, accessToken)
  }

  async uploadAvatar (file) {
    validateAvatarUpload(file)

    const avatarUrl = await this.storageGateway.upload(Containers.AVATAR, file)
    return this.authGateway.updateAvatar(avatarUrl)
  }

  setAccessToken (accessToken) {
    this.authGateway.setAccessToken(accessToken)
  }
}
