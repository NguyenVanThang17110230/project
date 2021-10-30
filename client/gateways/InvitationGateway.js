export default class InvitationGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data: { referrerId: string, email: string }) {
    const resp = await this.restConnector.post(`/invitations`, data)
    return resp.data
  }

  async findById (id) {
    try {
      const resp = await this.restConnector.get(`/invitations?filter={"where":{
        "id": "${id}","joined": ${false}}}`)
      return resp.data[0]
    } catch (e) {
      return null
    }
  }

  async findByEmail (email) {
    try {
      const filter = JSON.stringify({
        where: { email: encodeURIComponent(email) }
      })
      const resp = await this.restConnector.get(`/invitations?filter=${filter}`)
      return resp.data[0]
    } catch (e) {
      return null
    }
  }

  async acceptInvatation (id) {
    try {
      const resp = await this.restConnector.patch('/invitations', {
        id,
        joined: true
      })
      return resp.data
    } catch (e) {
      return null
    }
  }

  async getReferredList (referrerId) {
    try {
      const filter = JSON.stringify({
        where: { referrerId, joined: 'true' },
        include: 'user'
      })
      const resp = await this.restConnector.get(`/invitations?filter=${filter}`)
      return resp.data
    } catch (e) {
      return null
    }
  }

  async deleteExistedInvitation (id) {
    const resp = await this.restConnector.delete(`/invitations/${id}`)
    return resp.data
  }
}
