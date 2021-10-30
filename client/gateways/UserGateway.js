import _ from 'lodash'
import { IUserGateway } from '../services/UserService'
import ValidationError, { ErrorCode } from '../errors/ValidationError'

export default class UserGateway implements IUserGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isInactive: boolean,
    rank: string,
    cash: number
  }) {
    try {
      const resp = await this.restConnector.post(`/users`, data)
      return resp.data
    } catch (e) {
      const errResp = _.get(e, 'response.data.error', e)
      switch (errResp.name) {
        case 'ValidationError': {
          if (_.get(errResp, 'details.codes.email[0]') === 'uniqueness') {
            throw new ValidationError({ email: [ErrorCode.EMAIL_EXISTED] })
          }
        }
      }
      throw e
    }
  }

  async find ({ where, skip, limit, order, include }) {
    const filter = { where, skip, limit, order, include }
    const url = `/users?filter=${JSON.stringify(filter)}`
    const resp = await this.restConnector.get(url)
    return resp.data
  }

  async findById (id) {
    const resp = await this.restConnector.get(
      `/users/${id}?filter={"include":"roles"}`
    )
    return resp.data
  }

  async count (where = {}) {
    const resp = await this.restConnector.get(
      `/users/count?where=${JSON.stringify(where)}`
    )
    return resp.data.count
  }

  async updateUserAvatarById (userId, file) {
    const bodyFormData = new FormData()
    bodyFormData.append('file', file)
    return this.restConnector({
      url: `/users/${userId}/update-avatar`,
      method: 'patch',
      data: bodyFormData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(resp => resp.data)
  }

  async updateById (
    id,
    { firstName, lastName, email, emailVerified, isInactive, cash, rank }
  ) {
    try {
      const resp = await this.restConnector.patch(`/users/${id}`, {
        firstName,
        lastName,
        email,
        emailVerified,
        isInactive,
        cash,
        rank
      })
      return resp.data
    } catch (e) {
      const errResp = _.get(e, 'response.data.error', e)
      switch (errResp.name) {
        case 'ValidationError': {
          if (_.get(errResp, 'details.codes.email[0]') === 'uniqueness') {
            throw new ValidationError({ email: [ErrorCode.EMAIL_EXISTED] })
          }
        }
      }
      throw e
    }
  }
  async updateInfoById (
    id,
    { firstName, lastName, dateOfBirth, gender, company, phone, location, bio }
  ) {
    const resp = await this.restConnector.patch(`/users/${id}`, {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      company,
      phone,
      location,
      bio
    })
    return resp.data
  }

  async uploadCoverImage (id, file) {
    const bodyFormData = new FormData()
    bodyFormData.append('file', file)
    return this.restConnector({
      url: `/users/${id}/upload-cover-image`,
      method: 'patch',
      data: bodyFormData,
      config: { Headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(resp => resp.data)
  }

  async updateRankandCash (id, { rank, cash }) {
    try {
      const resp = await this.restConnector.patch(`/users/${id}`, {
        rank,
        cash
      })
      return resp.data
    } catch (e) {
      console.error(e)
    }
  }

  async updateStatusNotification (id, { statusNotification }) {
    try {
      const resp = await this.restConnector.patch(`/users/${id}`, {
        statusNotification
      })
      return resp.data
    } catch (e) {
      console.error(e)
    }
  }

  async deleteById (id) {
    const resp = await this.restConnector.delete(`/users/${id}`)
    return resp.data
  }

  async deleteAllRoles (id) {
    await this.restConnector.delete(`/users/${id}/roles`)
  }

  async getMyMessagingParties () {
    const { data } = await this.restConnector.get(
      `/users/me/my-messaging-parties`
    )
    return data
  }

  async getAllUser () {
    const resp = await this.restConnector.get(`/users`)
    return resp.data
  }

  async getReferrer (userId) {
    const { data } = await this.restConnector.get(
      `/users/${userId}/get-all-referrers`
    )
    return data
  }

  async getUserRole (where) {
    const filter = {
      where,
      include: {
        relation: 'roles',
        scope: {
          fields: ['id', 'name']
        }
      }
    }
    const resp = await this.restConnector.get(
      `/users?filter=${JSON.stringify(filter)}`
    )
    return resp.data
  }

  async getAllContact (id) {
    const resp = await this.restConnector.get(`/users/${id}/get-all-contact`)
    return resp
  }

  async findByEmail (email) {
    const filter = JSON.stringify({
      where: { email: encodeURIComponent(email) }
    })
    const resp = await this.restConnector.get(`/users?filter=${filter}`)
    return resp.data[0]
  }

  async getTransactionInfo ({ userId, where, skip, order, limit }) {
    const filter = { where, skip, order, limit }
    const resp = await this.restConnector.get(
      `/users/${userId}/get-agent-transactions?filter=${JSON.stringify(filter)}`
    )
    return resp.data.transactions
  }

  // test
  async getByUserId (id) {
    const resp = await this.restConnector.get(
      `/users?filter={"where":{
        "id": "${id}"}
      }`
    )
    return resp.data
  }
}
