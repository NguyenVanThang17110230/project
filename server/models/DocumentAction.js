import _ from 'lodash'
import nodemailer from 'nodemailer'
import path from 'path'
import uuidv4 from 'uuid/v4'
// import * as docusign from 'docusign-esign'
import s3 from '../gateways/s3'
// import { setupDocusignApiClient } from '../gateways/docusign'
import { ConfigurationId } from '../../common/models/Configuration'
import { isValidSmtpSetting } from './Configuration'
import { getDataAccessType } from '../../common/view-models/Transaction'
import { NotificationType } from '../../common/models/Notification'
import { getAction } from '../../common/view-models/Notification'
import {
  DataAccessType,
  DocumentActionStatus,
  EnvelopeStatus,
  TaskNameForDocumentAction
} from '../../common/models/Transaction'
import { TaskStatus } from '../../common/models/Task'

const MAIL_TEMPLATE_INTERPOLATE = /%([\s\S]+?)%/g
const SIGN_FOLDER = 'envelopes'

export default DocumentAction => {
  // Upload sign document to S3
  const uploadSignDocument = async pdfString => {
    // TODO: Get document from Docusign
    // const { apiClient, accountId } = await setupDocusignApiClient()
    // const envelopeApi = new docusign.EnvelopesApi(apiClient)
    // const pdfString = await envelopeApi.getDocument(accountId, envelopeId, '1')

    // Upload file
    const bufferData = Buffer.from(pdfString, 'base64')
    return s3
      .upload({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `${SIGN_FOLDER}/${uuidv4()}-docusign.pdf`,
        Body: bufferData,
        ContentType: 'application/pdf'
      })
      .promise()
  }

  // Remove sign document from S3
  const removeSignDocument = async location => {
    return s3.deleteObject({
      Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
      Key: location
    })
  }

  // Update sign document for document action
  const signDocument = async (documentActionId, uri) => {
    await DocumentAction.update({ id: documentActionId }, { data: { uri } })
  }

  DocumentAction.observe('before save', (ctx, cb) => {
    if (ctx.isNewInstance) {
      switch (ctx.instance.action) {
        // case DataAccessType.RECEIVE_COPY: {
        //   ctx.instance.status = DocumentActionStatus.DONE
        //   break
        // }
        default: {
          ctx.instance.status = DocumentActionStatus.TODO
        }
      }
    }
    cb()
  })

  DocumentAction.observe('after save', async ctx => {
    // Send email when new action is assigned to user and apply HTML email template for new action assigned to user
    if (!ctx.isNewInstance) {
      return
    }
    const {
      TransactionParty,
      Notification,
      Document,
      Transaction,
      Task,
      User
    } = DocumentAction.app.models
    // add notification for user has been shared when have new document
    const assignedParty = await TransactionParty.findOne({
      where: { id: ctx.instance.assignedPartyId }
    })
    const creator = await TransactionParty.findOne({
      where: { id: ctx.instance.creatorId }
    })
    const transaction = await Transaction.findOne({
      where: { id: creator.transactionId }
    })
    const user = await User.findOne({
      where: { id: creator.userId }
    })
    if (assignedParty.userId + '' !== creator.userId + '') {
      const address = `${transaction.address}`
      const internalLink = `/my-transactions/${assignedParty.transactionId}`
      const image = `${user.avatar}`
      const action = `${ctx.instance.action}`
      const value = `${getAction(ctx.instance.action)} on ${address}`
      await Notification.createNew({
        userId: assignedParty.userId,
        creatorId: creator.userId,
        transactionId: creator.transactionId,
        type: NotificationType.ACTION_ADD_TO_USER,
        data: { value, internalLink, image, action }
      })
    }
    const mailSettings = await DocumentAction.app.models.Configuration.find({
      where: {
        id: {
          inq: [
            ConfigurationId.MAIL_ADD_ACTION,
            ConfigurationId.MAIL_SMTP_SETTINGS
          ]
        }
      }
    })

    const {
      MAIL_ADD_ACTION: mailAddActionConfig,
      MAIL_SMTP_SETTINGS: smtpSettingConfig
    } = _.keyBy(mailSettings, 'id')

    if (!isValidSmtpSetting(smtpSettingConfig.data)) {
      return
    }

    const nodeMailer = nodemailer.createTransport({
      host: smtpSettingConfig.data.smtpHost,
      port: smtpSettingConfig.data.smtpPort,
      auth: {
        user: smtpSettingConfig.data.username,
        pass: smtpSettingConfig.data.password
      }
    })

    const baseUrl = process.env.BASE_URL
    // const { TransactionParty, Document } = DocumentAction.app.models
    const documentAction = ctx.instance

    const transactionParty = await TransactionParty.findOne({
      where: { id: documentAction.assignedPartyId }
    })

    // Not send email if account or account's email doesn't exist.
    if (!transactionParty || !transactionParty.email) {
      return
    }

    const document = await Document.findOne({
      where: { id: documentAction.documentId }
    })
    var link = `${baseUrl}/my-transactions/${transaction.id}`

    const html = _.template(mailAddActionConfig.data.message, {
      interpolate: MAIL_TEMPLATE_INTERPOLATE
    })({
      LINK: link,
      DISPLAY_NAME: `${transactionParty.firstName}`,
      TITLE: document.title,
      ADDRESS: `${transaction.address}`,
      ACTION: getDataAccessType(documentAction.action)
    })

    try {
      await nodeMailer.sendMail({
        to: transactionParty.email,
        from: mailAddActionConfig.data.senderEmail,
        subject: mailAddActionConfig.data.subject,
        html
      })

      // add badges
      const { sockets } = DocumentAction.app.io
      const assignParty = await documentAction.assignedParty.get()
      sockets.emit(
        `documentActionAdd:count:${assignParty.userId}`,
        documentAction
      )

      // ===== Create 'todo' task
      await Task.create({
        taskName: TaskNameForDocumentAction[documentAction.action],
        transactionName: transaction.address,
        status: TaskStatus.TO_DO,
        creatorUserId: creator.userId,
        transactionId: creator.transactionId,
        sharedUserIds: [transactionParty.userId],
        documentActionId: documentAction.id
      })
    } catch (e) {
      console.error(e)
    }
  })

  DocumentAction.afterRemote('prototype.patchAttributes', async function (ctx) {
    const { Task } = DocumentAction.app.models
    if (ctx.instance) {
      const task = await Task.findOne({
        where: { documentActionId: ctx.instance.id }
      })
      if (task) {
        await Task.update({ id: task.id }, { status: TaskStatus.COMPLETE })
      }
      if (ctx.instance.status === 'done') {
        const documentAction = ctx.instance
        const { sockets } = DocumentAction.app.io
        const assignParty = await documentAction.assignedParty.get()
        sockets.emit(
          `documentAction:count:${assignParty.userId}`,
          documentAction
        )
      }
    }
  })

  // DocumentAction.prototype.uploadSignDocument = async function (req, res) {
  //   // Get document from Docusign
  //   const { apiClient, accountId } = await setupDocusignApiClient()
  //   const envelopeApi = new docusign.EnvelopesApi(apiClient)
  //   const pdfString = await envelopeApi.getDocument(
  //     accountId,
  //     this.envelopeId,
  //     '1'
  //   )

  //   // Upload file
  //   const buffer = new Buffer.from(pdfString, 'binary')
  //   const uploadedFile = await s3
  //     .upload({
  //       Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
  //       Key: `${S3_FOLDER}/${uuidv4()}-docusign.pdf`,
  //       Body: buffer,
  //       ContentType: 'application/pdf'
  //     })
  //     .promise()

  //   // Update sign link
  //   const uploadSignDocument = await DocumentAction.update(
  //     { id: this.id },
  //     { data: { uri: uploadedFile.Location } }
  //   )
  //   res.json(uploadSignDocument)
  // }

  DocumentAction.prototype.downloadSignDocument = function (req, res) {
    if (this.data.uri) {
      const name = path.basename(this.data.uri)
      const stream = s3
        .getObject({
          Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
          Key: `${SIGN_FOLDER}/${name}`
        })
        .createReadStream()
      res.attachment(name)
      stream.pipe(res)
    }
  }

  DocumentAction.hook = async function (req, res) {
    try {
      const { Task } = DocumentAction.app.models
      const { envelopeId, recipients, envelopeDocuments } = req.body
      const { signers } = recipients

      if (!signers[0].note) res.status(200).end()
      const data = JSON.parse(signers[0].note)

      // Need to be signed in order
      for (let signer of signers) {
        // STATUS = sent => Create action (It's your turn to sign)
        if (signer.status === EnvelopeStatus.SENT) {
          await DocumentAction.create({
            creatorId: data.creatorId,
            documentId: data.documentId,
            action: DataAccessType.SIGN_DOCUMENT,
            assignedPartyId: signer.clientUserId,
            envelopeId
          })

          // TODO: Sent email (embed link to sign)
        }

        // STATUS = completed =>
        // Case 1: You just signed the document
        // Case 2: List status again
        if (signer.status === EnvelopeStatus.COMPLETED) {
          // === Update sign document ===
          // Just sign action have envelopeId
          const actionList = await DocumentAction.find({
            where: {
              creatorId: data.creatorId,
              documentId: data.documentId,
              envelopeId
            }
          })

          if (actionList.length > 0 && envelopeDocuments[0].PDFBytes) {
            // Step 1: Temp location + Upload file
            const temLocation = actionList[0].data && actionList[0].data.uri
            const file = await uploadSignDocument(envelopeDocuments[0].PDFBytes)

            // Step 2: Update sign link
            for (const item of actionList) {
              await signDocument(item.id, file.Location)
            }

            // Step 3: Remove old sign document
            if (temLocation) {
              const temp = temLocation.split('/')
              removeSignDocument(`${SIGN_FOLDER}/${temp[temp.length - 1]}`)
            }
          }

          // Change TODO to COMPLETED
          const action = await DocumentAction.findOne({
            where: {
              creatorId: data.creatorId,
              documentId: data.documentId,
              action: DataAccessType.SIGN_DOCUMENT,
              assignedPartyId: signer.clientUserId,
              envelopeId,
              status: DocumentActionStatus.TODO
            }
          })

          if (action) {
            await DocumentAction.update(
              { id: action.id },
              { status: DocumentActionStatus.DONE }
            )
            const { sockets } = DocumentAction.app.io
            const assignParty = await action.assignedParty.get()
            await sockets.emit(
              `documentAction:count:${assignParty.userId}`,
              action
            )

            const task = await Task.findOne({
              where: { documentActionId: action.id }
            })
            if (task) {
              await Task.update(
                { id: task.id },
                { status: TaskStatus.COMPLETE }
              )
            }
          }
        }
      }

      res.status(200).end()
    } catch (e) {
      console.error({ e })
    }
  }

  DocumentAction.disableRemoteMethodByName('patchOrCreate')
  DocumentAction.disableRemoteMethodByName('replaceOrCreate')
  DocumentAction.disableRemoteMethodByName('findById')
  DocumentAction.disableRemoteMethodByName('exists')
  DocumentAction.disableRemoteMethodByName('destroyById')
  DocumentAction.disableRemoteMethodByName('createChangeStream')
  DocumentAction.disableRemoteMethodByName('count')
  DocumentAction.disableRemoteMethodByName('updateAll')
  DocumentAction.disableRemoteMethodByName('upsertWithWhere')
  DocumentAction.disableRemoteMethodByName('findOne')
  DocumentAction.disableRemoteMethodByName('replaceById')
  DocumentAction.disableRemoteMethodByName('prototype.__get__creator')
  DocumentAction.disableRemoteMethodByName('prototype.__get__assignedParty')
  DocumentAction.disableRemoteMethodByName('prototype.__get__document')
}
