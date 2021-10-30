export default class TransactionActivityGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  // Get all activities of current user
  async getByActorId (actorId) {
    const resp = await this.restConnector.get(
      `/transactionActivities?filter={"where":{"actorId":{"like":"${actorId}"}},"order":"createdAt DESC"}`
    )
    return resp.data
  }

  // Get all activities of current transaction (full-access)
  async getByTransactionId (transactionId) {
    const resp = await this.restConnector.get(
      `/transactionActivities?filter={"where":{"transactionId":"${transactionId}"},"order":"createdAt DESC"}`
    )
    return resp.data
  }

  // Get all activities of current party (upload-only)
  async getByPartyId (partyId) {
    const resp = await this.restConnector.get(
      `/transactionActivities?filter={"where":{"partyId":"${partyId}"},"order":"createdAt DESC"}`
    )
    return resp.data
  }
}
