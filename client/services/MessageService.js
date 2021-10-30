export default class MessageService {
  constructor (options) {
    this.messageGateway = options.messageGateway
  }

  listenToMyNewMessages (userId, callback) {
    this.messageGateway.listenToMyNewMessages(userId, callback)
  }

  unlistenToMyNewMessages (userId) {}

  async sendToNewMessage ({ content, senderId, recipientId, type }) {
    return this.messageGateway.sendToNewMessage({
      content,
      senderId,
      recipientId,
      type
    })
  }

  async sendToFile ({ file, senderId, recipientId, type }) {
    return this.messageGateway.sendToFile({
      file,
      senderId,
      recipientId,
      type
    })
  }

  async getMyMessagesWithUser (
    userId,
    recipientId,
    level,
    limit = 15,
    page = 0,
    order = 'createdAt DESC'
  ) {
    const where = {
      or: [
        { senderId: userId, recipientId: recipientId },
        { senderId: recipientId, recipientId: userId }
      ]
    }
    const total = await this.messageGateway.count(where)
    const data = await this.messageGateway.find({
      where,
      limit: limit * level,
      order,
      skip: page * limit * level
    })
    return { messages: data.reverse(), totalPage: Math.ceil(total / limit) }
  }
}
