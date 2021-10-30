import { commissionType } from '../../common/models/CashBalance'

// import { commissionType } from '../../common/models/CashBalance'
export default class UserCommissionGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data: {
    cashType: string,
    value: number,
    userId: string,
    transactionId: string,
    ratio: number
  }) {
    const resp = await this.restConnector.post(`/userCommissions`, data)
    return resp.data
  }

  async updateByTransactionIdUserId (transactionId, userId, data) {
    const filterOption = { where: { transactionId, userId } }
    const { data: original } = await this.restConnector.get(
      `/userCommissions?filter=${JSON.stringify(filterOption)}`
    )

    if (original[0]) {
      const resp = await this.restConnector.patch(
        `/userCommissions/${original[0].id}`,
        data
      )
      return resp.data
    }
  }

  async deleteById (id) {
    const { data } = await this.restConnector.delete(`/userCommissions/${id}`)
    return data
  }

  async getAllAgentCommission () {
    const filter = {
      include: ['transaction', 'user']
    }
    const resp = await this.restConnector.get(
      `/userCommissions?filter=${JSON.stringify(filter)}`
    )
    return resp.data
  }
  async getAllCommission () {
    const resp = await this.restConnector.get(`/userCommissions`)
    return resp.data
  }

  async countCommission ({ userId, type, isForThisYear }) {
    const currentYear = new Date().getFullYear()
    const filter = isForThisYear
      ? {
        userId,
        cashType: type,
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
      : {
        userId,
        cashType: type
      }
    const resp = await this.restConnector.get(
      `/userCommissions/count?where=${JSON.stringify(filter)}`
    )
    return resp.data
  }

  async countCommissionPrevYear ({ userId, type }) {
    const currentYear = new Date().getFullYear()
    let preYear = currentYear - 1
    const filter = {
      userId,
      cashType: type,
      and: [
        {
          updatedAt: {
            lte: new Date(preYear, 11, 31)
          }
        },
        {
          updatedAt: {
            gte: new Date(preYear, 0, 1)
          }
        }
      ]
    }
    const resp = await this.restConnector.get(
      `/userCommissions/count?where=${JSON.stringify(filter)}`
    )
    return resp.data
  }

  async getUserCommissionThisYear (userId) {
    const currentYear = new Date().getFullYear()
    const filter = {
      where: {
        userId,
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
    }
    const resp = await this.restConnector.get(
      `userCommissions?filter=${JSON.stringify(filter)}`
    )
    return resp.data
  }

  async getCommissionByTransaction (transactionId) {
    const filter = {
      where: {
        transactionId,
        cashType: commissionType.AGENT_COMMISSION
      }
    }
    const resp = await this.restConnector.get(
      `userCommissions?filter=${JSON.stringify(filter)}`
    )
    return resp.data
  }
}
