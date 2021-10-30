import { NotificationType } from '../../common/models/Notification'
import { getNotificationRole } from '../../common/view-models/Notification'
import _ from 'lodash'

export default function (Event) {
  Event.observe('after save', async (ctx, next) => {
    const creatorUserId = ctx.instance.creatorUserId
    const sharedUserIds = ctx.instance.sharedUserIds
    const transactionId = ctx.instance.transactionId
    const { Notification, Transaction, TransactionParty } = Event.app.models
    const transaction = await Transaction.findOne({
      where: { id: transactionId }
    })
    const creator = await TransactionParty.findOne({
      where: { transactionId: transactionId, userId: creatorUserId }
    })
    const address = `${transaction.address} ${transaction.city}`
    const value = `The new event has been added from "${getNotificationRole(
      creator.role
    )}" on ${address}`
    if (
      ctx.isNewInstance &&
      Array.isArray(sharedUserIds) &&
      sharedUserIds.length
    ) {
      let req = sharedUserIds.map(id => {
        try {
          // create notification for user, who have been share, except for creator
          if (!_.isEqual(creatorUserId, id)) {
            return Notification.createNew({
              userId: id,
              creatorId: creatorUserId,
              transactionId,
              type: NotificationType.CREATE_EVENT,
              data: { value, internalLink: '' }
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

  Event.observe('before delete', async (ctx, next) => {
    const { Notification } = Event.app.models
    const idEvent = await Event.findOne({
      where: { id: ctx.where.id }
    })
    const creatorUserId = ctx.options.accessToken.userId
    const sharedUserIds = idEvent.sharedUserIds

    if (Array.isArray(sharedUserIds) && sharedUserIds.length) {
      let req = sharedUserIds.map(id => {
        try {
          // create notification for user, who have been share, except for creator
          if (!_.isEqual(creatorUserId, id)) {
            return Notification.createNew({
              userId: id,
              creatorId: creatorUserId,
              type: NotificationType.DELETE_EVENT,
              data: { value: '', internalLink: '' }
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

  Event.disableRemoteMethodByName('replaceOrCreate')
  Event.disableRemoteMethodByName('prototype.patchAttributes')
  Event.disableRemoteMethodByName('findById')
  Event.disableRemoteMethodByName('exists')
  Event.disableRemoteMethodByName('replaceById')
  Event.disableRemoteMethodByName('prototype.__get__creator')
  Event.disableRemoteMethodByName('prototype.__get__transaction')

  Event.disableRemoteMethodByName('prototype.__get__sharedUsers')
  Event.disableRemoteMethodByName('prototype.__create__sharedUsers')
  Event.disableRemoteMethodByName('prototype.__delete__sharedUsers')
  Event.disableRemoteMethodByName('prototype.__count__sharedUsers')
  Event.disableRemoteMethodByName('prototype.__findById__sharedUsers')
  Event.disableRemoteMethodByName('prototype.__updateById__sharedUsers')
  Event.disableRemoteMethodByName('prototype.__destroyById__sharedUsers')

  Event.disableRemoteMethodByName('createChangeStream')
  Event.disableRemoteMethodByName('count')
  Event.disableRemoteMethodByName('findOne')
  Event.disableRemoteMethodByName('updateAll')
  Event.disableRemoteMethodByName('upsertWithWhere')
}
