import _ from 'lodash'
import { IUserGateway, Query } from '../../services/UserService'

/**
 * In-memory implementation of UserGatewayInterface used for testing purpose.
 */
export default class UserGateway implements IUserGateway {
  constructor () {
    this._users = []
  }

  addUsers (users) {
    this._users = this._users.concat(users)
  }

  async count (where: Query = {}): Promise<number> {
    const { id, name, email, emailVerified } = where
    return _(this._users)
      .filter(u => !id || u.id === id)
      .filter(
        u => !_.isBoolean(emailVerified) || u.emailVerified === emailVerified
      )
      .filter(u => !name || new RegExp(name).test(u.name))
      .filter(u => !email || new RegExp(email).test(u.email))
      .value().length
  }

  async find (options: {
    where: Object,
    skip: number,
    order: string,
    limit: number
  }): Promise<[Object]> {
    const { where = {}, skip = 0, limit = 10 } = options
    const { id, name, email, emailVerified } = where
    return _(this._users)
      .filter(u => !id || u.id === id)
      .filter(
        u => !_.isBoolean(emailVerified) || u.emailVerified === emailVerified
      )
      .filter(u => !name || new RegExp(name).test(u.name))
      .filter(u => !email || new RegExp(email).test(u.email))
      .value()
      .splice(skip * limit, limit)
    // TODO: Handle order
  }

  async create (data: {
    name: string,
    email: string,
    password: string
  }): Promise<Object> {
    const newUser = { ...data, createdAt: new Date(), id: 'asdfsdafsdaf' }
    this._users.push(newUser)
    return newUser
  }

  async findById (id: string): Promise<Object> {
    return this._users.find(u => u.id === id)
  }

  async updateById (
    id: string,
    attr: { name: string, email: string, emailVerified: boolean }
  ): Promise<Object> {
    const index = this._users.findIndex(u => u.id === id)
    this._users[index] = { ...this._users[index], ...attr }
    return this._users[index]
  }

  async deleteById (id: string): Promise<Object> {
    const removed = _.remove(this._users, { id })
    return removed[0]
  }

  deleteAllRoles (id: string): Promise<Object> {
    // Dummy method, does not need implementation
  }
}
