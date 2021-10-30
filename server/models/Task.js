import { NotificationType } from '../../common/models/Notification'
import { getNotificationRole } from '../../common/view-models/Notification'
import _ from 'lodash'

export default function (Task) {
  Task.observe('after save', async (ctx, next) => {
    if (!ctx.isNewInstance) {
      return
    }
    const { Notification, Transaction, TransactionParty } = Task.app.models
    const creatorUserId = ctx.instance.creatorUserId
    const sharedUserIds = ctx.instance.sharedUserIds
    const transactionId = ctx.instance.transactionId
    const transaction = await Transaction.findOne({
      where: { id: transactionId }
    })
    const creator = await TransactionParty.findOne({
      where: { userId: creatorUserId, transactionId }
    })
    const address = `${transaction.address} ${transaction.city}`
    const internalLink = '/tasks'
    const value = `The new task added from "${getNotificationRole(
      creator.role
    )}" on ${address}`
    if (
      ctx.isNewInstance &&
      Array.isArray(sharedUserIds) &&
      sharedUserIds.length
    ) {
      let req = sharedUserIds.map(id => {
        try {
          // create a notification for user, who have been share, except for creator
          if (!_.isEqual(creatorUserId, id)) {
            return Notification.createNew({
              userId: id,
              creatorId: creatorUserId,
              transactionId,
              type: NotificationType.CREATE_TASK,
              data: { value, internalLink }
            })
          }
        } catch (e) {
          throw e
        }
      })
      Promise.all(req)
    }
    next()
  })

  Task.disableRemoteMethodByName('replaceOrCreate')
  // Task.disableRemoteMethodByName('prototype.patchAttributes')
  // Task.disableRemoteMethodByName('findById')
  Task.disableRemoteMethodByName('exists')
  Task.disableRemoteMethodByName('replaceById')
  Task.disableRemoteMethodByName('prototype.__get__creator')
  Task.disableRemoteMethodByName('prototype.__get__transaction')

  Task.disableRemoteMethodByName('prototype.__get__sharedUsers')
  Task.disableRemoteMethodByName('prototype.__create__sharedUsers')
  Task.disableRemoteMethodByName('prototype.__delete__sharedUsers')
  Task.disableRemoteMethodByName('prototype.__count__sharedUsers')
  Task.disableRemoteMethodByName('prototype.__findById__sharedUsers')
  Task.disableRemoteMethodByName('prototype.__updateById__sharedUsers')
  Task.disableRemoteMethodByName('prototype.__destroyById__sharedUsers')

  Task.disableRemoteMethodByName('createChangeStream')
  Task.disableRemoteMethodByName('count')
  Task.disableRemoteMethodByName('findOne')
  Task.disableRemoteMethodByName('updateAll')
  Task.disableRemoteMethodByName('upsertWithWhere')
}
