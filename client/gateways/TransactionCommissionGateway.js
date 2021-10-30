export default class TransactionCommissionGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data: {
    totalCommission: number,
    regionalSplit: number,
    transactionId: string,
    coordinatorId: string
  }) {
    const resp = await this.restConnector.post(`/transactionCommissions`, data)
    return resp.data
  }

  async deleteById (id) {
    const { data } = await this.restConnector.delete(
      `/transactionCommissions/${id}`
    )
    return data
  }

  async findByTransactionId (transactionId) {
    const filter = {
      where: {
        transactionId
      }
    }
    const resp = await this.restConnector.get(
      `/transactionCommissions?filter=${JSON.stringify(filter)}`
    )
    return resp.data[0]
  }

  async getAllTransactionCommission () {
    const resp = await this.restConnector.get(`/transactionCommissions`)
    return resp.data
  }

  async findByCoordinator (coordinatorId) {
    let filter

    const currentYear = new Date().getFullYear()
    filter = {
      where: { coordinatorId },
      include: 'transaction',
      and: [
        {
          updatedAt: {
            lte: new Date(currentYear, 11, 31)
          }
        },
        {
          updatedAt: {
            gte: new Date(currentYear, 0, 1)
          }
        }
      ]
    }

    const resp = await this.restConnector.get(
      `/transactionCommissions?filter=${JSON.stringify(filter)}`
    )
    return resp.data
  }

  async updateById (id, data) {
    const resp = await this.restConnector.patch(
      `/transactionCommissions/${id}`,
      data
    )
    return resp.data
  }
}
