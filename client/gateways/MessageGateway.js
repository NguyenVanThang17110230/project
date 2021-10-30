export default class MessageGateway {
  constructor ({ restConnector, socketConnector }) {
    this.restConnector = restConnector
    this.socketConnector = socketConnector
  }

  listenToMyNewMessages (userId, callback) {
    this.socketConnector.on(`messages:new:${userId}`, function (message) {
      callback(message)
    })
  }

  async sendToNewMessage ({ content, senderId, recipientId, type }) {
    const { data } = await this.restConnector.post('/messages', {
      content,
      senderId,
      recipientId,
      type
    })
    return data
  }

  async sendToFile ({ file, senderId, recipientId, type }) {
    const bodyFormData = new FormData()
    bodyFormData.set('file', file)
    bodyFormData.set('senderId', senderId)
    bodyFormData.set('recipientId', recipientId)
    bodyFormData.set('type', type)

    return this.restConnector({
      url: '/messages/create-new',
      method: 'post',
      data: bodyFormData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(resp => resp.data)
  }

  async find ({ where, order, limit, skip }) {
    const filter = { where, order, limit, skip }
    try {
      const { data } = await this.restConnector.get(
        `/messages?filter=${JSON.stringify(filter)}`
      )
      return data
    } catch (e) {
      return null
    }
  }

  async count (where = {}) {
    const { data } = await this.restConnector.get(
      `/messages/count?where=${JSON.stringify(where)}`
    )
    return data.count
  }
}
