export default TransactionCommission => {
  TransactionCommission.disableRemoteMethodByName('patchOrCreate')
  TransactionCommission.disableRemoteMethodByName('createChangeStream')
  TransactionCommission.disableRemoteMethodByName('updateAll')
  TransactionCommission.disableRemoteMethodByName('upsertWithWhere')
  TransactionCommission.disableRemoteMethodByName('exists')
  TransactionCommission.disableRemoteMethodByName('replaceOrCreate')
  TransactionCommission.disableRemoteMethodByName('findOne')
  TransactionCommission.disableRemoteMethodByName('replaceById')
  TransactionCommission.disableRemoteMethodByName('count')
  TransactionCommission.disableRemoteMethodByName(
    'prototype.__get__transaction'
  )
  TransactionCommission.disableRemoteMethodByName(
    'prototype.__get__coordinator'
  )
}
