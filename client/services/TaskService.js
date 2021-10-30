export default class TaskService {
  constructor (options) {
    this.taskGateway = options.taskGateway
  }

  async create (task) {
    return this.taskGateway.create(task)
  }

  async deleteTaskWithId (id) {
    return this.taskGateway.deleteById(id)
  }

  async updateTask (task) {
    return this.taskGateway.patch(task)
  }

  async archiveTask (taskId) {
    return this.taskGateway.editTaskById(taskId, {
      isActive: false
    })
  }

  async getTaskById (id) {
    return this.taskGateway.findById(id)
  }

  async updateTaskById (id, task) {
    return this.taskGateway.editTaskById(id, task)
  }

  async getActiveTasks (userId, status) {
    return this.taskGateway.getTasksByIsActiveForUserId(userId, status, {
      neq: false
    })
  }

  async getArchiveTasks (userId, status) {
    return this.taskGateway.getTasksByIsActiveForUserId(userId, status, false)
  }

  async getTasksForUser (userId, status) {
    return this.taskGateway.find({
      status: status,
      or: [{ creatorUserId: userId }, { sharedUserIds: userId }]
    })
  }

  async getAllTasksForUser (userId) {
    return this.taskGateway.find({
      deadline: { gte: new Date(0) },
      or: [{ creatorUserId: userId }, { sharedUserIds: userId }]
    })
  }
}
