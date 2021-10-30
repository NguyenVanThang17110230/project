export default class CommissionService {
  constructor (options) {
    this.transactionCommissionGateway = options.transactionCommissionGateway
    this.userCommissionGateway = options.userCommissionGateway
  }

  async createTransactionCommission (data) {
    return this.transactionCommissionGateway.create(data)
  }

  async updateTransactionCommission (id, data) {
    return this.transactionCommissionGateway.updateById(id, data)
  }

  async updateUserCommissionByTransactionIdUserId (
    transactionId,
    userId,
    data
  ) {
    return this.userCommissionGateway.updateByTransactionIdUserId(
      transactionId,
      userId,
      data
    )
  }

  async deleteUserCommission (id) {
    await this.userCommissionGateway.deleteById(id)
  }

  async deleteTransactionCommission (id) {
    await this.transactionCommissionGateway.deleteById(id)
  }

  async getTransactionByCoordinator (coordinatorId) {
    return this.transactionCommissionGateway.findByCoordinator(coordinatorId)
  }

  async findByTransactionId (transactionId) {
    return this.transactionCommissionGateway.findByTransactionId(transactionId)
  }

  async createUserCommission (data) {
    return this.userCommissionGateway.create(data)
  }

  async countCommission ({ userId, type, isForThisYear }) {
    return this.userCommissionGateway.countCommission({
      userId,
      type,
      isForThisYear
    })
  }

  async countCommissionPrevYear ({ userId, type }) {
    return this.userCommissionGateway.countCommissionPrevYear({
      userId,
      type
    })
  }

  async getUserCommissionThisYear (userId) {
    return this.userCommissionGateway.getUserCommissionThisYear(userId)
  }

  async getCommissionByTransaction (transactionId) {
    return this.userCommissionGateway.getCommissionByTransaction(transactionId)
  }

  async getAllCommission () {
    return this.userCommissionGateway.getAllCommission()
  }

  async getAllTransactionCommission () {
    return this.transactionCommissionGateway.getAllTransactionCommission()
  }

  async getAllAgentCommission () {
    return this.userCommissionGateway.getAllAgentCommission()
  }
}
