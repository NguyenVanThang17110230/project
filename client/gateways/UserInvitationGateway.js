export default class UserInvitationGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async addNewInvitation ({ firstName, lastName, email, role }) {
    const resp = await this.restConnector.post(`/userInvitations`, {
      firstName,
      lastName,
      email,
      role
    })
    return resp.data
  }
  async getInvitationById (id) {
    const resp = await this.restConnector.get(`/userInvitations/${id}`)
    return resp.data
  }
}
