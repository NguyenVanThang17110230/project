import { NotificationType } from '../../common/models/Notification'

export default class NotificationGateway {
  constructor ({ restConnector, socketConnector }) {
    this.restConnector = restConnector
    this.socketConnector = socketConnector
  }

  listenToMyNewNotification (userId, callback) {
    this.socketConnector.on(`notifications:new:${userId}`, function (
      notification
    ) {
      callback(notification)
    })
  }

  async deleteById (id) {
    const { data } = await this.restConnector.delete(`/notifications/${id}`)
    return data
  }

  async findNotificationWithData (userId, types = []) {
    const type = types.map(item => ({ type: item }))
    const filter = {
      where: { userId, or: type }
    }
    try {
      const { data } = await this.restConnector.get(
        `/notifications?filter=${JSON.stringify(filter)}`
      )
      return data
    } catch (e) {
      return null
    }
  }

  async limitFindNotification (userId, types = []) {
    const type = types.map(item => ({ type: item }))
    const filter = {
      where: {
        userId,
        or: type
      },
      order: 'createdAt DESC',
      limit: 50
    }
    try {
      const { data } = await this.restConnector.get(
        `/notifications?filter=${JSON.stringify(filter)}`
      )
      return data
    } catch (e) {
      return null
    }
  }

  async countWithData (userId, types = []) {
    const type = types.map(item => ({ type: item }))

    const where = {
      userId,
      isRead: false,
      or: type
    }
    try {
      const { data } = await this.restConnector.get(
        `/notifications/count?where=${JSON.stringify(where)}`
      )

      return data.count
    } catch (e) {
      return null
    }
  }

  async getAllNotificationMessage (userId) {
    const filter = {
      where: {
        userId,
        isRead: false,
        type: NotificationType.NEW_MESSAGE
      },
      order: 'createdAt DESC'
    }
    const { data } = await this.restConnector.get(
      `/notifications?filter=${JSON.stringify(filter)}`
    )
    return data
  }

  async getAllNotificationNews (userId) {
    const filter = {
      where: {
        userId,
        type: NotificationType.NEW_NEWS
      },
      order: 'createdAt DESC'
    }
    const { data } = await this.restConnector.get(
      `/notifications?filter=${JSON.stringify(filter)}`
    )
    return data
  }

  async getAllNotificationAssign (userId) {
    const filter = {
      where: {
        userId,
        type: NotificationType.ACTION_ADD_TO_USER
      },
      order: 'createdAt DESC'
    }
    const { data } = await this.restConnector.get(
      `/notifications?filter=${JSON.stringify(filter)}`
    )
    return data
  }

  async setWatchedNotification (id) {
    const resp = await this.restConnector.patch(`/notifications/${id}`, {
      isRead: true
    })
    return resp.data
  }
}
