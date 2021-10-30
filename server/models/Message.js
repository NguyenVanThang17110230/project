import s3 from '../gateways/s3'
import { NotificationType } from '../../common/models/Notification'

const S3_FOLDER = 'messages'

export default Message => {
  Message.observe('after save', async ctx => {
    const { Notification, TransactionParty, User } = Message.app.models
    if (ctx.isNewInstance) {
      const message = ctx.instance
      if (ctx.isNewInstance) {
        const party = await TransactionParty.findOne({
          where: { id: message.recipientId }
        })
        const creatorId = await TransactionParty.findOne({
          where: { id: message.senderId }
        })
        const user = await User.findOne({
          where: { id: creatorId.userId }
        })
        const idInbox = `${message.senderId}`
        const value = `${message.content}`
        const fullName = `${creatorId.firstName.concat(
          ' ',
          creatorId.lastName
        )}`
        const avatar = `${user.avatar ? user.avatar : null}`
        await Notification.createNew({
          userId: party.userId,
          creatorId: creatorId.userId,
          transactionId: party.transactionId,
          type: NotificationType.NEW_MESSAGE,
          data: { value, internalLink: idInbox, fullName, avatar }
        })
      }
      const recipientParty = await message.recipient.get()

      const { sockets } = Message.app.io
      sockets.emit(`messages:new:${recipientParty.userId}`, message)
    }
  })
  // upload file on the amazon
  Message.createNew = async function (req, res) {
    const file = req.files[0]
    const message = await Message.create({
      content: file.originalname,
      senderId: req.body.senderId,
      recipientId: req.body.recipientId,
      type: req.body.type
    })
    await s3
      .upload({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `${S3_FOLDER}/${message.id}`,
        Body: file.buffer
      })
      .promise()

    res.json(message)
  }

  Message.prototype.download = function (req, res) {
    const stream = s3
      .getObject({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `${S3_FOLDER}/${this.id}`
      })
      .createReadStream()
    res.attachment(this.content)
    stream.pipe(res)
  }

  Message.disableRemoteMethodByName('patchOrCreate')
  Message.disableRemoteMethodByName('destroyById')
  Message.disableRemoteMethodByName('replaceById')
  Message.disableRemoteMethodByName('exists')
  Message.disableRemoteMethodByName('findById')
  Message.disableRemoteMethodByName('prototype.patchAttributes')
  Message.disableRemoteMethodByName('replaceOrCreate')
  Message.disableRemoteMethodByName('prototype.__get__sender')
  Message.disableRemoteMethodByName('prototype.__get__recipient')
  Message.disableRemoteMethodByName('createChangeStream')
  Message.disableRemoteMethodByName('findOne')
  Message.disableRemoteMethodByName('updateAll')
  Message.disableRemoteMethodByName('upsertWithWhere')
}
