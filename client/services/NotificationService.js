import { NotificationType } from '../../common/models/Notification'
import _ from 'lodash'

export default class NotificationService {
  constructor (options) {
    this.notificationGateway = options.notificationGateway
  }

  async listenToMyNewNotifications (userId, callback) {
    this.notificationGateway.listenToMyNewNotification(userId, callback)
  }

  async deleteWithIdUserAndType (userId, types) {
    const data = await this.notificationGateway.findNotificationWithData(
      userId,
      types
    )
    return data.map(data => {
      this.notificationGateway.deleteById(data.id)
    })
  }

  async findNotificationWithData (userId, types) {
    return this.notificationGateway.findNotificationWithData(userId, types)
  }

  async findNotificationDocumentWhithId (userId) {
    const actionAddToUser = await this.notificationGateway.findNotificationWithData(
      userId,
      NotificationType.ACTION_ADD_TO_USER
    )
    const uploadDocument = await this.notificationGateway.findNotificationWithData(
      userId,
      NotificationType.UPLOAD_DOCUMENT
    )
    const arrayDocument = [...actionAddToUser, ...uploadDocument]
    const sortNotificationDocument = _.orderBy(
      arrayDocument,
      ['createdAt'],
      ['desc']
    )
    return sortNotificationDocument
  }

  async limitFindNotification (userId, types) {
    return this.notificationGateway.limitFindNotification(userId, types)
  }

  async setWatchedNotification (id) {
    return this.notificationGateway.setWatchedNotification(id)
  }

  async countWithData (userId, types) {
    return this.notificationGateway.countWithData(userId, types)
  }
  async getAllNotificationMessage (userId) {
    return this.notificationGateway.getAllNotificationMessage(userId)
  }
  async getAllNotificationNews (userId) {
    return this.notificationGateway.getAllNotificationNews(userId)
  }
  async getAllNotificationAssign (userId) {
    return this.notificationGateway.getAllNotificationAssign(userId)
  }
}
