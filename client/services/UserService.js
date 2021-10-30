import BaseService from './BaseService'
import { validateUser } from '../validators/UserValidator'
import Role from '../../common/models/Role'

export type Query = {
  id?: string,
  name?: RegExp,
  email?: RegExp,
  emailVerified?: boolean
}

export interface IUserGateway {
  count(where: Query): Promise<number>;

  find({
    where: Query,
    skip: number,
    order: string,
    limit: number
  }): Promise<[Object]>;

  create(user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isInactive: boolean
  }): Promise<Object>;

  findById(
    id: string,
    filter: {
      where: Query,
      skip: number,
      order: string,
      limit: number,
      include: Query
    }
  ): Promise<Object>;

  updateById(
    id: string,
    {
      name: string,
      email: string,
      emailVerified: boolean,
      isInactive: boolean
    }
  ): Promise<Object>;

  updateInfoById(id: string, data: Object): Promise<Object>;

  updateUserAvatar(id: string, file: Object): Promise<Object>;

  deleteById(id: string): Promise<Object>;

  deleteAllRoles(id: string): Promise<void>;

  getUserRole(where: Object): Promise<Object>;

  uploadCoverImage(id: string, file: Object): Promise<Object>;

  getAllContact(id: string): Promise<Object>;

  findUserByEmail(email: string): Promise<Object>;

  getAllUser(): Promise<Object>;
}

export default class UserService extends BaseService {
  constructor (options: {
    userGateway: IUserGateway,
    roleGateway: Object,
    invitationGateway: Object
  }) {
    super(options)
    const { userGateway, roleGateway, invitationGateway } = options
    this.userGateway = userGateway
    this.roleGateway = roleGateway
    this.invitationGateway = invitationGateway
  }

  async getUsersForAdmin ({ where, skip, order = 'createdAt DESC', limit }) {
    const total = await this.userGateway.count(where)
    const users = await this.userGateway.find({
      where,
      skip,
      order,
      limit,
      include: 'roles'
    })
    return { total, users }
  }

  // async getUsersForTC ({ where }) {
  //   const total = await this.userGateway.count(where)
  //   const users = await this.userGateway.find({
  //     where
  //   })
  //   return { total, users }
  // }

  async getRolesForAdmin ({ where, skip, order, limit }) {
    return this.roleGateway.find({ where, skip, order, limit })
  }

  async createUser ({
    firstName,
    lastName,
    email,
    password,
    isInactive,
    role
  }) {
    validateUser({ firstName, lastName, email, password })

    const user = await this.userGateway.create({
      firstName,
      lastName,
      email,
      password,
      isInactive
    })

    const isReferredUser = await this.invitationGateway.findByEmail(email)

    if (isReferredUser) {
      await this.invitationGateway.acceptInvatation(isReferredUser.id)
    }
    // Assign role for user (if any) after creation. This can be implemented in back-end with new
    // remote method API instead of using default generated restful API
    if (user && role) {
      await this._setRoleForUser(user.id, role)
    }

    if (role === Role.AGENT) {
      await this.addRankAndCashForAgent(user.id, Role.AGENT)
    }
    if (role === Role.COORDINATOR) {
      await this.addRankAndCashForAgent(user.id, Role.COORDINATOR)
    }

    return user
  }

  async getAllUser () {
    return this.userGateway.getAllUser()
  }

  async getUserFromId (id) {
    return this.userGateway.findById(id)
  }

  async updateUser ({
    id,
    firstName,
    lastName,
    email,
    emailVerified,
    isInactive,
    role
  }) {
    validateUser({ firstName, lastName, email })

    // const user = await this.userGateway.findById(id)
    const user = await this.userGateway.updateById(id, {
      firstName,
      lastName,
      email,
      emailVerified,
      isInactive
    })

    if (user && role) {
      await this._setRoleForUser(id, role)
    }

    return user
  }
  async updateInfoUser (
    id,
    { firstName, lastName, dateOfBirth, gender, company, phone, location, bio }
  ) {
    return this.userGateway.updateInfoById(id, {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      company,
      phone,
      location,
      bio
    })
  }

  async deleteUserWithId (id) {
    return this.userGateway.deleteById(id)
  }
  async uploadCoverImageUser (id, file) {
    return this.userGateway.uploadCoverImage(id, file)
  }

  async count (where) {
    return this.userGateway.count(where)
  }

  async getMyMessagingParties () {
    return this.userGateway.getMyMessagingParties()
  }

  async updateUserAvatar (userId, file) {
    return this.userGateway.updateUserAvatarById(userId, file)
  }

  /**
   * This is the art of domain drive design. Although the back-end support 1 user having multiple roles.
   * The service is about implementing use case with the assumption that 1 user has 1 role.
   * @param userId
   * @param role
   * @return {Promise.<void>}
   */
  async _setRoleForUser (userId, role) {
    await this.userGateway.deleteAllRoles(userId)

    const roleData = await this.roleGateway.findOne({ where: { name: role } })
    await this.roleGateway.createPrincipal({
      roleId: roleData.id,
      principalId: userId
    })
  }

  async _setRoleForSignUpUser (userId, role) {
    const roleData = await this.roleGateway.findOne({ where: { name: role } })
    await this.roleGateway.createPrincipal({
      roleId: roleData.id,
      principalId: userId
    })
  }

  async sendMailToReferFriend (userId, email) {
    await this.invitationGateway.create({
      referrerId: userId,
      email
    })
  }

  async getInvitationById (id) {
    return this.invitationGateway.findById(id)
  }

  async getInvitationByEmail (email) {
    return this.invitationGateway.findByEmail(email)
  }

  async getReferredList (referrerId) {
    return this.invitationGateway.getReferredList(referrerId)
  }

  async deleteExistedInvitation (id) {
    return this.invitationGateway.deleteExistedInvitation(id)
  }

  async acceptInvatation (id) {
    await this.invitationGateway.acceptInvatation(id)
  }

  async getAllReferrer (userId) {
    return this.userGateway.getReferrer(userId)
  }

  async getUserRole (id) {
    return this.userGateway.getUserRole(id)
  }

  async getAllContact (id) {
    return this.userGateway.getAllContact(id)
  }

  async addRankAndCashForAgent (userId, role) {
    await this.userGateway.updateRankandCash(userId, {
      rank: role,
      cash: 0
    })
  }

  async updateRankAndCash (userId, rank, cash) {
    await this.userGateway.updateRankandCash(userId, { rank: rank, cash: cash })
  }

  async updateStatusNotification (userId, statusNotification) {
    await this.userGateway.updateStatusNotification(userId, {
      statusNotification: statusNotification
    })
  }

  async findUserByEmail (email) {
    return this.userGateway.findByEmail(email)
  }

  async getTransactionInfo ({ userId, where, skip, order, limit }) {
    return this.userGateway.getTransactionInfo({
      userId,
      where,
      skip,
      order,
      limit
    })
  }
}
