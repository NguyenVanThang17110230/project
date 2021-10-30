import _ from 'lodash'
import path from 'path'
import uuidv4 from 'uuid/v4'
import s3 from '../gateways/s3'
import {
  TransactionActivityType,
  TransactionRole,
  TransactionAccessType,
  TransactionTypeStatus,
  PercentCompleteTransaction
} from '../../common/models/Transaction'

export default function (Transaction) {
  Transaction.observe('after save', async ctx => {
    if (!ctx.isNewInstance) {
      return
    }
    const {
      TransactionActivity,
      TransactionParty,
      user,
      TransactionDetail
    } = Transaction.app.models
    const ownerUser = await user.findById(ctx.options.accessToken.userId, {
      include: 'roles'
    })
    const transaction = ctx.instance
    const creator = ownerUser.toJSON().roles
    const roleUserTransaction = _.some(creator, { name: 'coordinator' })
    // assign role for transaction creator depending on created transaction type
    let role = ''
    // transactionType is properties of transaction.json
    if (roleUserTransaction) {
      role = TransactionRole.TRANSACTION_COORDINATOR
    }
    await TransactionActivity.create({
      transactionId: ctx.instance.id,
      actorId: ctx.options.accessToken.userId,
      type: TransactionActivityType.TRANSACTION_CREATE,
      role
    })

    const owner = await user.findOne({
      where: { id: ctx.options.accessToken.userId }
    })

    await TransactionParty.create({
      userId: ctx.options.accessToken.userId,
      role,
      access: TransactionAccessType.FULL,
      transactionId: ctx.instance.id,
      firstName: owner.firstName,
      lastName: owner.lastName,
      email: owner.email
    })
    await TransactionDetail.create({
      transactionId: ctx.instance.id
    })
    if (
      transaction.transactionTypeStatus === TransactionTypeStatus.TTS_PRE_OFFER
    ) {
      await Transaction.update(
        { id: transaction.id },
        { percentComplete: PercentCompleteTransaction.PRE_OFFER }
      )
    }
    if (
      transaction.transactionTypeStatus ===
      TransactionTypeStatus.TTS_UNDER_CONTRACT
    ) {
      await Transaction.update(
        { id: transaction.id },
        { percentComplete: PercentCompleteTransaction.UNDER_CONTRACT }
      )
    }
    if (
      transaction.transactionTypeStatus === TransactionTypeStatus.TTS_ESCROW
    ) {
      await Transaction.update(
        { id: transaction.id },
        { percentComplete: PercentCompleteTransaction.ESCROW }
      )
    }
    if (
      transaction.transactionTypeStatus ===
      TransactionTypeStatus.TTS_ESCROW_CLOSE
    ) {
      await Transaction.update(
        { id: transaction.id },
        { percentComplete: PercentCompleteTransaction.ESCROW_CLOSE }
      )
    }
    if (transaction.transactionTypeStatus === TransactionTypeStatus.TTS_SOLD) {
      await Transaction.update(
        { id: transaction.id },
        { percentComplete: PercentCompleteTransaction.SOLD }
      )
    }
    if (transaction.transactionTypeStatus === TransactionTypeStatus.TTS_CLOSE) {
      await Transaction.update(
        { id: transaction.id },
        { percentComplete: PercentCompleteTransaction.CLOSED }
      )
    }
  })

  Transaction.observe('before delete', async (ctx, next) => {
    const { TransactionActivity } = Transaction.app.models
    const transaction = await Transaction.findOne({
      where: { id: ctx.where.id }
    })

    await TransactionActivity.create({
      transactionId: ctx.where.id,
      actorId: transaction.ownerId,
      type: TransactionActivityType.TRANSACTION_DELETE_BY_ADMIN,
      role: 'admin'
    })

    next()
  })

  Transaction.observe('after delete', async function (ctx) {
    const {
      UserCommission,
      TransactionCommission,
      Event
    } = Transaction.app.models
    const transactionId = ctx.where.id

    await Promise.all([
      UserCommission.remove({ transactionId }),
      TransactionCommission.remove({ transactionId }),
      Event.remove({ transactionId })
    ])
  })

  Transaction.afterRemote('prototype.patchAttributes', async ctx => {
    if (ctx.instance) {
      const transaction = ctx.instance
      if (
        transaction.transactionTypeStatus ===
        TransactionTypeStatus.TTS_PRE_OFFER
      ) {
        await Transaction.update(
          { id: transaction.id },
          { percentComplete: PercentCompleteTransaction.PRE_OFFER }
        )
      }
      if (
        transaction.transactionTypeStatus ===
        TransactionTypeStatus.TTS_UNDER_CONTRACT
      ) {
        await Transaction.update(
          { id: transaction.id },
          { percentComplete: PercentCompleteTransaction.UNDER_CONTRACT }
        )
      }
      if (
        transaction.transactionTypeStatus === TransactionTypeStatus.TTS_ESCROW
      ) {
        await Transaction.update(
          { id: transaction.id },
          { percentComplete: PercentCompleteTransaction.ESCROW }
        )
      }
      if (
        transaction.transactionTypeStatus ===
        TransactionTypeStatus.TTS_ESCROW_CLOSE
      ) {
        await Transaction.update(
          { id: transaction.id },
          { percentComplete: PercentCompleteTransaction.ESCROW_CLOSE }
        )
      }
      if (
        transaction.transactionTypeStatus === TransactionTypeStatus.TTS_SOLD
      ) {
        await Transaction.update(
          { id: transaction.id },
          { percentComplete: PercentCompleteTransaction.SOLD }
        )
      }
      if (
        transaction.transactionTypeStatus === TransactionTypeStatus.TTS_CLOSE
      ) {
        await Transaction.update(
          { id: transaction.id },
          { percentComplete: PercentCompleteTransaction.CLOSED }
        )
      }
    }
  })

  Transaction.prototype.getAgentsOfTransaction = async function () {
    const { TransactionParty } = Transaction.app.models
    const transactionParties = await TransactionParty.find({
      where: {
        transactionId: this.id,
        or: [
          { role: TransactionRole.SELLER_AGENT },
          { role: TransactionRole.BUYING_AGENT }
        ]
      }
    })

    // ==== OLD LOGIC ====
    // const transactionParties = await TransactionParty.find({
    //   where: { transactionId: this.id },
    //   include: 'user'
    // })

    // const promise = transactionParties.map(async party => {
    //   const userWithRoles = await user.findOne({
    //     where: { id: party.userId },
    //     include: 'roles'
    //   })

    //   if (
    //     party.role === TransactionRole.BUYER_AGENT ||
    //     party.role === TransactionRole.SELLER_AGENT
    //   ) {
    //     if (_.some(userWithRoles.toJSON().roles, { name: Roles.AGENT })) {
    //       return party
    //     }
    //   }
    // })
    // const transactionAgents = await Promise.all(promise)
    // return _.filter(transactionAgents, e => e)
    return transactionParties
  }

  Transaction.prototype.getAllTransactionByAgent = async function (req, res) {
    const userId = req.body
    const { TransactionParty } = Transaction.app.models
    const transactionParty = await TransactionParty.find({
      where: {
        userId: userId,
        or: [
          { role: TransactionRole.SELLER_AGENT },
          { role: TransactionRole.BUYING_AGENT }
        ]
      },
      include: 'user'
    })
    return transactionParty
  }

  Transaction.prototype.uploadMainImage = async function (req, res) {
    const file = req.files[0]
    const ext = path.extname(file.originalname)
    const uploadedFile = await s3
      .upload({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `transactions/${uuidv4()}${ext}`,
        Body: file.buffer,
        ACL: 'public-read'
      })
      .promise()
    await Transaction.update(
      { id: this.id },
      {
        imageURL: uploadedFile.Location
      }
    )
  }

  Transaction.disableRemoteMethodByName('patchOrCreate') // Removes (PATCH) /transactions
  Transaction.disableRemoteMethodByName('prototype.__get__owner') // Removes (GET) /transactions/{id}/owner

  Transaction.disableRemoteMethodByName('prototype.__count__activities')
  Transaction.disableRemoteMethodByName('prototype.__create__activities')
  Transaction.disableRemoteMethodByName('prototype.__get__activities')
  Transaction.disableRemoteMethodByName('prototype.__delete__activities')
  Transaction.disableRemoteMethodByName('prototype.__findById__activities')
  Transaction.disableRemoteMethodByName('prototype.__updateById__activities')
  Transaction.disableRemoteMethodByName('prototype.__destroyById__activities')

  Transaction.disableRemoteMethodByName('prototype.__get__invitations')
  Transaction.disableRemoteMethodByName('prototype.__create__invitations')
  Transaction.disableRemoteMethodByName('prototype.__delete__invitations')
  Transaction.disableRemoteMethodByName('prototype.__count__invitations')
  Transaction.disableRemoteMethodByName('prototype.__findById__invitations')
  Transaction.disableRemoteMethodByName('prototype.__updateById__invitations')
  Transaction.disableRemoteMethodByName('prototype.__destroyById__invitations')

  Transaction.disableRemoteMethodByName('prototype.__get__parties')
  Transaction.disableRemoteMethodByName('prototype.__create__parties')
  Transaction.disableRemoteMethodByName('prototype.__delete__parties')
  Transaction.disableRemoteMethodByName('prototype.__count__parties')
  Transaction.disableRemoteMethodByName('prototype.__findById__parties')
  Transaction.disableRemoteMethodByName('prototype.__updateById__parties')
  Transaction.disableRemoteMethodByName('prototype.__destroyById__parties')

  Transaction.disableRemoteMethodByName('replaceOrCreate') // Removes (PUT) /transactions - (POST) /transactions/replaceOrCreate
  Transaction.disableRemoteMethodByName('createChangeStream') // Removes (GET) /transactions/change-stream - (POST) /transactions/change-stream
  Transaction.disableRemoteMethodByName('replaceById') // Removes (PUT) /transactions/{id} - (POST) /transactions/{id}/replace
  Transaction.disableRemoteMethodByName('exists') // Removes (HEAD) /transactions/{id} - (GET) /transactions/{id}/exists

  Transaction.disableRemoteMethodByName('updateAll') // Removes (POST) /transactions/update
  Transaction.disableRemoteMethodByName('upsertWithWhere') // Removes (POST) /transactions/upsertWithWhere
  Transaction.disableRemoteMethodByName('count') // Removes (GET) /transactions/count
}
