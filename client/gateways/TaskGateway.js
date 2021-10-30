export default class TaskGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (task) {
    const { data } = await this.restConnector.post('/tasks', task)
    return data
  }
  async deleteById (id) {
    const { data } = await this.restConnector.delete(`/tasks/${id}`)
    return data
  }
  async find (where) {
    const filter = {
      where,
      include: 'sharedUsers',
      order: 'createdAt DESC'
    }
    const { data } = await this.restConnector.get(
      `/tasks?filter=${JSON.stringify(filter)}`
    )
    return data
  }
  async editTaskById (id, task) {
    const { data } = await this.restConnector.patch(`/tasks/${id}`, task)
    return data
  }

  async findById (id) {
    const { data } = await this.restConnector.get(`/tasks/${id}`)
    return data
  }

  async getTasksByIsActiveForUserId (userId, status, isActive) {
    const filter = {
      where: {
        isActive,
        status,
        or: [{ creatorUserId: userId }, { sharedUserIds: userId }]
      },
      order: 'createdAt DESC'
    }
    const { data } = await this.restConnector.get(
      `/tasks?filter=${JSON.stringify(filter)}`
    )
    return data
  }

  async patch (task) {
    const { data } = await this.restConnector.patch('/tasks', task)
    return data
  }
}
