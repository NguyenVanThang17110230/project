import {
  TransactionStatus,
  TransactionTypeStatus
} from '../../common/models/Transaction'

export default class TransactionGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (data: {
    ownerId: string,
    address: string,
    imageURL: string,
    url: string,
    description: string,
    closingDate: Date,
    transactionType: string,
    transactionTypeStatus: string,
    status: string
  }) {
    const resp = await this.restConnector.post(`/transactions`, data)
    return resp.data
  }

  async findById (id, options) {
    try {
      const url = options
        ? `/transactions/${id}?filter={"include":${JSON.stringify(
          options.include
        )}}`
        : `/transactions/${id}`
      const resp = await this.restConnector.get(url)
      return resp.data
    } catch (e) {
      return null
    }
  }
  async updateById (
    id,
    {
      address,
      transactionType,
      transactionTypeStatus,
      url,
      description,
      closingDate,
      status
    }
  ) {
    const resp = await this.restConnector.patch(`/transactions/${id}`, {
      address,
      transactionType,
      transactionTypeStatus,
      url,
      description,
      closingDate,
      status
    })
    return resp.data
  }
  async deleteImageById (transactionId) {
    const resp = await this.restConnector.patch(
      `/transactions/${transactionId}`,
      {
        imageURL: ''
      }
    )
    return resp.data
  }

  async findByOwnerId (options) {
    const url = options
      ? `/users/me/joinedTransactions?filter={"order":"createdAt DESC","include":${JSON.stringify(
        options.include
      )}}`
      : `/users/me/joinedTransactions?filter={"order":"createdAt DESC","include":"parties"}`
    const resp = await this.restConnector.get(url)
    return resp.data
  }
  async findByTransactionId (id) {
    const resp = await this.restConnector.get(`/transactions/${id}`)
    return resp.data
  }

  async findByData ({ where, skip, order, limit, include }) {
    const filter = { where, skip, order, limit, include }
    const url = `/transactions?filter=${JSON.stringify(filter)}`
    const { data } = await this.restConnector.get(url)
    let res = data.filter(i => i.parties.length > 0)
    return res
  }

  async createMainImageById (transactionId, file) {
    const bodyFormData = new FormData()
    bodyFormData.append('file', file)
    return this.restConnector({
      url: `/transactions/${transactionId}/upload-main-image`,
      method: 'patch',
      data: bodyFormData,
      config: { Headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(resp => resp.data)
    // const url = `/transactions/${transactionId}/upload-main-image`
    // const resp = await this.restConnector.patch(url, file)
    // return resp.data
  }

  async getMyTransactions () {
    const resp = await this.restConnector.get(
      `/users/me/joinedTransactions?filter={"include":"parties", "order":"createdAt DESC"}`
    )
    return resp.data
  }

  async getAllTransaction () {
    const resp = await this.restConnector.get(`/transactions`)
    return resp.data
  }

  async archiveTransaction (id) {
    const resp = await this.restConnector.patch(`/transactions/${id}`, {
      transactionTypeStatus: TransactionTypeStatus.TTS_ARCHIVED,
      status: TransactionStatus.ARCHIVED
    })
    return resp.data
  }

  async closeTransaction (id) {
    const resp = await this.restConnector.patch(`/transactions/${id}`, {
      transactionTypeStatus: TransactionTypeStatus.TTS_CLOSE,
      status: TransactionStatus.CLOSED
    })
    return resp.data
  }

  async deleteTransactionById (id) {
    const resp = await this.restConnector.delete(`/transactions/${id}`)
    return resp.data
  }

  async getAllAgentsInTransaction (id) {
    const resp = await this.restConnector.get(`/transactions/${id}/agents`)
    return resp.data
  }

  async updateTransactionPercent (id, percent) {
    const resp = await this.restConnector.patch(`/transactions/${id}`, {
      percentComplete: percent
    })
    return resp.data
  }
}
