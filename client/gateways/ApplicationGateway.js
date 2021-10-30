import _ from 'lodash'
import { IApplicationGateway } from '../services/ApplicationService'
import ResponseStatus from '../../common/application/ResponseStatus'

export default class ApplicationGateway implements IApplicationGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async getConfigurations (keys: [String]): Promise<[Object]> {
    try {
      const filter = { where: { id: { inq: keys } } }
      const resp = await this.restConnector.get(
        `/configurations?filter=${JSON.stringify(filter)}`
      )
      return resp.data
    } catch (e) {
      return []
    }
  }

  async getConfiguration (key: String): Promise<Object> {
    try {
      const resp = await this.restConnector.get(`/configurations/${key}`)
      return resp.data
    } catch (e) {
      const configNotFound =
        _.get(e, 'response.status') === 404 &&
        _.get(e, 'response.data.error.code') === 'MODEL_NOT_FOUND'

      // Return null instead of throwing 404 error if config not found.
      if (configNotFound) {
        return null
      }

      throw e
    }
  }

  async verifySmtpEmailSettings (settings: Object) {
    try {
      const resp = await this.restConnector.post(
        '/configurations/validate-smtp-settings',
        settings
      )
      return resp.data.isValid
    } catch (e) {
      const errorCode = _.get(e, 'response.data.error.statusCode')
      if (errorCode === 400) {
        return false
      }
      throw e
    }
  }

  async saveConfiguration ({ id, data }) {
    await this.restConnector.post(`/configurations/replaceOrCreate`, {
      id,
      data
    })
  }

  async validateInitSystemPassword (password) {
    try {
      const { data } = await this.restConnector.post(
        '/configurations/validate-init-system-password',
        { password }
      )
      return data.isValid
    } catch (e) {
      const msg = _.get(e, 'response.data.error.message')
      if (msg === 'password is a required argument') {
        return false
      }
      throw e
    }
  }

  async initializeSystem ({ password, admin }) {
    const { data } = await this.restConnector.post(
      '/configurations/initialize-system',
      { password, admin }
    )
    return data.status === ResponseStatus.SUCCESS
  }
}
