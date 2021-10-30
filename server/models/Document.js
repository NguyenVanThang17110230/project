import uuidv4 from 'uuid/v4'
import path from 'path'
import * as docusign from 'docusign-esign'
import s3 from '../gateways/s3'
import { setupDocusignApiClient } from '../gateways/docusign'
import { NotificationType } from '../../common/models/Notification'
import {
  DocumentSpecies,
  TransactionActivityType
} from '../../common/models/Transaction'
import { getNotificationRole } from '../../common/view-models/Notification'

const S3_FOLDER = 'documents'
const SIGN_FOLDER = 'envelopes'

export default function (Document) {
  Document.observe('after save', async ctx => {
    const { Notification, TransactionParty, Transaction } = Document.app.models
    if (ctx.isNewInstance) {
      const party = await TransactionParty.findOne({
        where: { id: ctx.instance.partyId }
      })
      const creator = await TransactionParty.findOne({
        where: { id: ctx.instance.creatorId }
      })
      const transaction = await Transaction.findOne({
        where: { id: creator.transactionId }
      })
      if (party.userId + '' !== creator.userId + '') {
        const address = `${transaction.address} ${transaction.city}`
        const internalLink = `/my-transactions/${party.transactionId}/parties/${
          party.id
        }/files`
        const value = `New document uploaded from "${getNotificationRole(
          creator.role
        )}" on ${address}`
        await Notification.createNew({
          userId: party.userId,
          creatorId: creator.userId,
          transactionId: creator.transactionId,
          type: NotificationType.UPLOAD_DOCUMENT,
          data: { value, internalLink }
        })
      }
    }
  })

  Document.prototype.uploadToDocusign = async function (req, res) {
    const name = path.basename(this.uri)
    const file = await s3
      .getObject({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `${SIGN_FOLDER}/${name}`
      })
      .promise()

    const buffer = Buffer.from(file.Body)
    const base64String = buffer.toString('base64')

    try {
      // auth
      const { apiClient, accountId } = await setupDocusignApiClient()

      // Assign signer
      const signers = req.body.signers.map((singer, index) => {
        const order = (index + 1).toString()
        return docusign.Signer.constructFromObject({
          email: singer.email,
          name: singer.name,
          clientUserId: singer.id,
          recipientId: order,
          routingOrder: order,
          note: JSON.stringify({
            documentId: this.id,
            creatorId: req.body.creatorId
          })
        })
      })

      let recipients = docusign.Recipients.constructFromObject({ signers })

      // create envelop from document
      const envelopeApi = new docusign.EnvelopesApi(apiClient)

      const envelope = await envelopeApi.createEnvelope(accountId, {
        envelopeDefinition: {
          emailSubject: 'Please sign this envelope',
          documents: [{ documentId: 1, documentBase64: base64String, name }],
          recipients
          // status: 'sent'
        }
      })

      // create embed link
      const editView = await envelopeApi.createEditView(
        accountId,
        envelope.envelopeId
      )

      res.json({ url: editView.url, envelope, base64String })
    } catch (e) {
      console.error(e)
    }
  }

  Document.prototype.sign = async function (req, res) {
    const { email, name, partyId, envelopeId } = req.body
    try {
      // auth
      const { apiClient, baseUri, accountId } = await setupDocusignApiClient()

      // Create the recipient view definition
      const viewRequest = new docusign.RecipientViewRequest()
      viewRequest.returnUrl = baseUri + '?state=123'
      viewRequest.authenticationMethod = 'none'
      viewRequest.email = email
      viewRequest.userName = name
      viewRequest.clientUserId = partyId

      // Create the recipient view and begin the signing ceremony
      const envelopeApi = new docusign.EnvelopesApi(apiClient)
      const recipientView = await envelopeApi.createRecipientView(
        accountId,
        envelopeId,
        { recipientViewRequest: viewRequest }
      )

      res.json({ url: recipientView.url })
    } catch (e) {
      console.error(e)
    }
  }

  Document.createNew = async function (req, res) {
    const file = req.files[0]
    let uploadedFile = ''
    if (file) {
      const ext = path.extname(file.originalname)
      let keyPath = `documents/${uuidv4()}${ext}`
      if (
        req.body.documentType &&
        req.body.documentType === DocumentSpecies.ENVELOPE
      ) {
        keyPath = `envelopes/${uuidv4()}${ext}`
      }

      uploadedFile = await s3
        .upload({
          Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
          Key: keyPath,
          Body: file.buffer,
          ACL: 'public-read'
        })
        .promise()
    }

    if (req.body.role !== 'vendors') {
      const createdDocument = await Document.create({
        uri: uploadedFile.Location,
        title: req.body.title,
        role: req.body.role,
        partyId: req.body.partyId,
        transactionId: req.body.transactionId,
        creatorId: req.body.creatorId
      })
      res.json(createdDocument)
    } else {
      if (!req.body.url) {
        const createdDocument = await Document.create({
          uri: uploadedFile.Location,
          role: req.body.role,
          transactionId: req.body.transactionId
        })
        res.json(createdDocument)
      } else {
        const createdDocument = await Document.create({
          uri: uploadedFile.Location,
          linkDocument: req.body.url,
          role: req.body.role,
          transactionId: req.body.transactionId
        })
        res.json(createdDocument)
      }
    }
    // create activity when upload file
    if (req.body.role !== 'vendors') {
      const { TransactionActivity, TransactionParty } = Document.app.models
      const currentDocument = req.body
      const currentParty = await TransactionParty.findOne({
        where: { id: currentDocument.partyId }
      })
      TransactionActivity.create({
        transactionId: currentDocument.transactionId,
        actorId: currentDocument.creatorId,
        type: TransactionActivityType.UPLOADED_BY,
        role: currentParty.role,
        data: {
          currentRole: currentDocument.role,
          title: currentDocument.title
        },
        partyId: currentParty.id
      })
    }
  }

  Document.prototype.download = function (req, res) {
    const name = path.basename(this.uri)
    const stream = s3
      .getObject({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `${S3_FOLDER}/${name}`
      })
      .createReadStream()
    res.attachment(name)
    stream.pipe(res)
  }

  Document.prototype.downloadEnvelop = function (req, res) {
    const name = path.basename(this.uri)
    const stream = s3
      .getObject({
        Bucket: process.env.STORAGE_AWS_BUCKET_DOCUMENTS,
        Key: `${SIGN_FOLDER}/${name}`
      })
      .createReadStream()
    res.attachment(name)
    stream.pipe(res)
  }

  Document.disableRemoteMethodByName('patchOrCreate')
  Document.disableRemoteMethodByName('replaceOrCreate')
  Document.disableRemoteMethodByName('create')
  Document.disableRemoteMethodByName('prototype.patchAttributes')
  Document.disableRemoteMethodByName('exists')
  Document.disableRemoteMethodByName('replaceById')
  Document.disableRemoteMethodByName('destroyById')

  Document.disableRemoteMethodByName('prototype.__get__actions')
  Document.disableRemoteMethodByName('prototype.__create__actions')
  Document.disableRemoteMethodByName('prototype.__delete__actions')
  Document.disableRemoteMethodByName('prototype.__count__actions')
  Document.disableRemoteMethodByName('prototype.__findById__actions')
  Document.disableRemoteMethodByName('prototype.__updateById__actions')
  Document.disableRemoteMethodByName('prototype.__destroyById__actions')

  Document.disableRemoteMethodByName('prototype.__get__creator')
  Document.disableRemoteMethodByName('prototype.__get__party')
  Document.disableRemoteMethodByName('prototype.__get__transaction')

  Document.disableRemoteMethodByName('createChangeStream')
  Document.disableRemoteMethodByName('count')
  Document.disableRemoteMethodByName('findOne')
  Document.disableRemoteMethodByName('updateAll')
  Document.disableRemoteMethodByName('upsertWithWhere')
}
