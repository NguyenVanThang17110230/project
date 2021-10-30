import { NotificationType } from '../../common/models/Notification'
import { getAction } from '../../common/view-models/Notification'

export default Notification => {
  Notification.observe('after save', async ctx => {
    if (ctx.isNewInstance) {
      if (ctx.isNewInstance) {
        const notification = ctx.instance
        const { sockets } = Notification.app.io
        sockets.emit(`notifications:new:${notification.userId}`, notification)
        const { TransactionParty, Transaction } = Notification.app.models
        const party = await TransactionParty.findOne({
          where: {
            transactionId: notification.transactionId,
            userId: notification.userId
          },
          include: 'user'
        })
        const user = party.user().phone
        const transaction = await Transaction.findOne({
          where: { id: notification.transactionId }
        })
        //
        if (party.user().statusNotification !== false) {
          const client = require('twilio')(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
          )
          if (notification.type !== NotificationType.NEW_NEWS) {
            if (party.phoneNumber !== undefined) {
              if (notification.type === NotificationType.CREATE_TASK) {
                await client.messages
                  .create({
                    body: `You have been shared a task on ${
                      transaction.address
                    }. Check it out!`,
                    from: `${process.env.TWILIO_PHONE_NUMBER}`, // This is phone number of your Twilio account, when you change phone number, you need change 'TWILIO_PHONE_NUMBER' on the ecosystem.json
                    to: `${party.phoneNumber.replace(/\s+/gi, '')}`
                  })
                  .catch(error => console.error(error))
              }
              if (notification.type === NotificationType.ACTION_ADD_TO_USER) {
                await client.messages
                  .create({
                    body: `You have been assigned ${getAction(
                      notification.data.action
                    )} on ${transaction.address}. Check it out!`,
                    from: `${process.env.TWILIO_PHONE_NUMBER}`, // This is phone number of your Twilio account, when you change phone number, you need change 'TWILIO_PHONE_NUMBER' on the ecosystem.json
                    to: `${party.phoneNumber.replace(/\s+/gi, '')}`
                  })
                  .catch(error => console.error(error))
              }
            }
          } else {
            if (user) {
              await client.messages
                .create({
                  body: `You have news from the company. Check it out!`,
                  from: `${process.env.TWILIO_PHONE_NUMBER}`, // This is phone number of your Twilio account, when you change phone number, you need change 'TWILIO_PHONE_NUMBER' on the ecosystem.json
                  to: `${user.replace(/\s+/gi, '')}`
                })
                .catch(error => console.error(error))
            }
          }
        }
      }
    }
  })

  Notification.createNew = ({
    userId,
    creatorId,
    transactionId,
    type,
    data
  }) => {
    Notification.create({
      userId,
      creatorId,
      transactionId,
      type,
      data,
      isRead: false
    })
  }

  Notification.disableRemoteMethodByName('patchOrCreate')
  Notification.disableRemoteMethodByName('createChangeStream')
  Notification.disableRemoteMethodByName('updateAll')
  Notification.disableRemoteMethodByName('upsertWithWhere')
  Notification.disableRemoteMethodByName('exists')
  Notification.disableRemoteMethodByName('replaceOrCreate')
  Notification.disableRemoteMethodByName('findOne')
  Notification.disableRemoteMethodByName('replaceById')
  Notification.disableRemoteMethodByName('prototype.__get__transaction')
  Notification.disableRemoteMethodByName('prototype.__get__creator')
  Notification.disableRemoteMethodByName('prototype.__get__user')
}
