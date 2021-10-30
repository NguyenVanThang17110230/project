export default class RoleGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async find ({ where, skip, order, limit }) {
    const resp = await this.restConnector.get(`/roles`, {
      params: {
        filter: { where, skip, order, limit }
      }
    })

    return resp.data
  }

  async findOne ({ where, skip, order, limit }) {
    const resp = await this.restConnector.get(`/Roles/findOne`, {
      params: {
        filter: { where, skip, order, limit }
      }
    })

    return resp.data
  }

  async findPrincipals (roleId, { where, skip, order, limit }) {
    const resp = await this.restConnector.get(`/Roles/${roleId}/principals`, {
      params: {
        filter: { where, skip, order, limit }
      }
    })
    return resp.data
  }

  async createPrincipal ({ roleId, principalId, principalType = 'USER' }) {
    const resp = await this.restConnector.post(`/Roles/${roleId}/principals`, {
      roleId,
      principalId,
      principalType
    })
    return resp.data
  }

  async deletePrincipal ({ roleId, id }) {
    const resp = await this.restConnector.delete(
      `/Roles/${roleId}/principals/${id}`
    )
    return resp.data
  }
}
