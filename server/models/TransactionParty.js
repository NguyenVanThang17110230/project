import { TransactionActivityType } from '../../common/models/Transaction'

export default TransactionParty => {
  TransactionParty.observe('after save', async ctx => {
    if (ctx.isNewInstance) {
      const { TransactionActivity } = TransactionParty.app.models

      const transactionParty = ctx.instance

      await TransactionActivity.create({
        transactionId: transactionParty.transactionId,
        actorId: transactionParty.userId,
        type: TransactionActivityType.PARTY_JOINED_TRANSACTION,
        role: transactionParty.role,
        partyId: transactionParty.id
      })

      await TransactionActivity.create({
        transactionId: transactionParty.transactionId,
        actorId: transactionParty.userId,
        type: TransactionActivityType.PROFILE_CREATED,
        role: transactionParty.role,
        partyId: transactionParty.id
      })
    }
  })

  TransactionParty.disableRemoteMethodByName(
    'prototype.__create__assignedActions'
  )
  TransactionParty.disableRemoteMethodByName(
    'prototype.__delete__assignedActions'
  )
  TransactionParty.disableRemoteMethodByName(
    'prototype.__count__assignedActions'
  )
  TransactionParty.disableRemoteMethodByName(
    'prototype.__findById__assignedActions'
  )
  TransactionParty.disableRemoteMethodByName(
    'prototype.__updateById__assignedActions'
  )
  TransactionParty.disableRemoteMethodByName(
    'prototype.__destroyById__assignedActions'
  )
  TransactionParty.disableRemoteMethodByName('prototype.__get__documents')
  TransactionParty.disableRemoteMethodByName('prototype.__create__documents')
  TransactionParty.disableRemoteMethodByName('prototype.__delete__documents')
  TransactionParty.disableRemoteMethodByName('prototype.__count__documents')
  TransactionParty.disableRemoteMethodByName('prototype.__findById__documents')
  TransactionParty.disableRemoteMethodByName(
    'prototype.__updateById__documents'
  )
  TransactionParty.disableRemoteMethodByName(
    'prototype.__destroyById__documents'
  )
  TransactionParty.disableRemoteMethodByName('createChangeStream')
  TransactionParty.disableRemoteMethodByName('count')
  TransactionParty.disableRemoteMethodByName('updateAll')
  TransactionParty.disableRemoteMethodByName('upsertWithWhere')
  TransactionParty.disableRemoteMethodByName('exists')
  TransactionParty.disableRemoteMethodByName('patchOrCreate')
  TransactionParty.disableRemoteMethodByName('replaceOrCreate')
  // TransactionParty.disableRemoteMethodByName('findById')
  TransactionParty.disableRemoteMethodByName('destroyById')
  TransactionParty.disableRemoteMethodByName('prototype.__get__transaction')
  TransactionParty.disableRemoteMethodByName('prototype.__get__user')
  TransactionParty.disableRemoteMethodByName('replaceById')
}
