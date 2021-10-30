import { commissionType } from '../../common/models/CashBalance'
import Role from '../../common/models/Role'
import { CapLimit, Rank } from '../../common/models/User'
export default UserCommission => {
  UserCommission.afterRemote('create', async function (ctx, userCommission) {
    if (userCommission.cashType !== commissionType.PROFIT_SHARE) {
      const { user } = UserCommission.app.models
      const currentUser = await user.findOne({
        where: { id: userCommission.userId }
      })

      const allCommissions = await UserCommission.find({
        where: { userId: userCommission.userId }
      })

      const newCash = allCommissions.reduce((result, current) => {
        if (current.cashType === commissionType.PROFIT_SHARE) return result
        else {
          result = result + current.value
          return result
        }
      }, 0)
      if (currentUser.rank === Role.COORDINATOR) {
        await user.update({ id: currentUser.id }, { cash: newCash })
      } else {
        if (newCash >= CapLimit.AGENT) {
          await user.update(
            { id: currentUser.id },
            { cash: newCash, rank: Rank.EXECUTIVE_AGENT }
          )
        } else {
          await user.update(
            { id: currentUser.id },
            { cash: newCash, rank: Rank.AGENT }
          )
        }
      }
    }
  })
  UserCommission.afterRemote('prototype.patchAttributes', async ctx => {
    const { user } = UserCommission.app.models
    const commission = ctx.instance
    const cash = await UserCommission.find({
      where: { userId: commission.userId }
    })
    const currentUser = await user.findOne({
      where: { id: commission.userId }
    })
    if (cash.length > 0) {
      const value = cash.map(x => x.value).reduce((x, y) => x + y, 0)
      if (
        currentUser.rank === Rank.AGENT ||
        currentUser.rank === Rank.EXECUTIVE_AGENT
      ) {
        if (value >= CapLimit.AGENT) {
          await user.update(
            { id: commission.userId },
            { cash: value, rank: Rank.EXECUTIVE_AGENT }
          )
        } else {
          await user.update(
            { id: commission.userId },
            { cash: value, rank: Rank.AGENT }
          )
        }
      }
    }
  })

  UserCommission.disableRemoteMethodByName('patchOrCreate')
  UserCommission.disableRemoteMethodByName('createChangeStream')
  UserCommission.disableRemoteMethodByName('updateAll')
  UserCommission.disableRemoteMethodByName('upsertWithWhere')
  UserCommission.disableRemoteMethodByName('exists')
  UserCommission.disableRemoteMethodByName('replaceOrCreate')
  UserCommission.disableRemoteMethodByName('findOne')
  UserCommission.disableRemoteMethodByName('replaceById')
  UserCommission.disableRemoteMethodByName('prototype.__get__transaction')
  UserCommission.disableRemoteMethodByName('prototype.__get__user')
}
