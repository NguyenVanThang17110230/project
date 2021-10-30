export default class RecipientGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data: { name: string, email: string, action: string }) {
    const resp = await this.restConnector.post(`/recipients`, data)
    return resp.data
  }
}
