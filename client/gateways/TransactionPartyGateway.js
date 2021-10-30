export default class TransactionPartyGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data) {
    const resp = await this.restConnector.post('/transactionParties', data)
    return resp.data
  }

  async findById (id) {
    const { data } = await this.restConnector.get(`/transactionParties/${id}`)
    return data
  }

  async updateById (id, data) {
    const resp = await this.restConnector.patch(
      `/transactionParties/${id}`,
      data
    )
    return resp.data
  }

  async findByTransactionId (transactionId) {
    const { data } = await this.restConnector.get(
      `/transactionParties?filter={"where":{"transactionId":"${transactionId}"}}`
    )
    return data
  }

  async getByTransactionIdAndUserId (transactionId, userId) {
    try {
      const resp = await this.restConnector.get(
        `/transactionParties/findOne?filter={"where":{"transactionId":"${transactionId}","userId":"${userId}"}}`
      )
      return resp.data
    } catch (e) {
      return null
    }
  }

  async getByTransactionId (transactionId, options) {
    const url = options
      ? `/transactionParties?filter={"where":{
          "transactionId": "${transactionId}"},"include":${JSON.stringify(
  options.include
)}
        }`
      : `/transactionParties?filter={"where":{
          "transactionId": "${transactionId}"}
        }`
    const resp = await this.restConnector.get(url)
    return resp.data
  }

  async findByData (where) {
    const resp = await this.restConnector.get(
      `/transactionParties?filter={"where":${JSON.stringify(where)}}`
    )
    return resp.data
  }
  // async findMemberByTransactionId(id){
  //   const resp = await this.restConnector.get(`/`)
  // }

  async getAgentTransaction (userId, where, skip, order, limit) {
    const filter = {
      where: {
        userId,
        or: [{ role: 'seller-agent' }, { role: 'buyer-agent' }]
      },
      include: {
        relation: 'transaction',
        scope: {
          where,
          include: {
            relation: 'transactionCommission'
          },
          order
        }
      },
      skip,
      limit
    }
    const resp = await this.restConnector.get(
      `/transactionParties?filter=${JSON.stringify(filter)}`
    )
    return resp.data
  }
}
