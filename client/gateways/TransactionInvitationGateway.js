export default class TransactionInvitationGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data: {
    transactionId: string,
    role: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    access: string
  }) {
    const resp = await this.restConnector.post(`/transactionInvitations`, data)
    return resp.data
  }

  async findById (id, options) {
    try {
      const url = options
        ? `/transactionInvitations/${id}?filter={"include":"${
          options.include
        }"}`
        : `/transactionInvitations/${id}`
      const resp = await this.restConnector.get(url)
      return resp.data
    } catch (e) {
      return null
    }
  }

  async getByTransactionId (transactionId) {
    const resp = await this.restConnector.get(
      `/transactionInvitations?filter={"where":{"transactionId":"${transactionId}"}}`
    )
    return resp.data
  }
}
