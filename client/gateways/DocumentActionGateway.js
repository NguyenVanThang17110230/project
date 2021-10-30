import _filter from 'lodash/filter'
import { DocumentActionStatus } from '../../common/models/Transaction'

export default class DocumentActionGateway {
  constructor ({ restConnector, socketConnector }) {
    this.restConnector = restConnector
    this.socketConnector = socketConnector
  }

  listenToMyDocumentAction (userId, callback) {
    this.socketConnector.on(`documentAction:count:${userId}`, function (
      documentAction
    ) {
      callback(documentAction)
    })
  }

  listenToMyDocumentActionAdd (userId, callback) {
    this.socketConnector.on(`documentActionAdd:count:${userId}`, function (
      documentAction
    ) {
      callback(documentAction)
    })
  }

  async create (data: {
    action: string,
    documentId: string,
    assignedPartyId: string,
    creatorId: string
  }) {
    const resp = await this.restConnector.post(`/documentActions`, data)
    return resp.data
  }

  async bulkCreate (actions) {
    const promises = actions.map(action => {
      return this.restConnector
        .post(`/documentActions`, action)
        .then(resp => resp.data)
    })
    return Promise.all(promises)
  }

  async getByDocumentId (documentId) {
    const resp = await this.restConnector.get(
      `/documentActions?filter={"where":{"documentId":"${documentId}"}}`
    )
    return resp.data
  }

  async updateById (id, data) {
    const resp = await this.restConnector.patch(`/documentActions/${id}`, data)
    return resp.data
  }

  async makeDone (id) {
    const body = {
      status: DocumentActionStatus.DONE
    }
    const { data } = await this.restConnector.patch(
      `/documentActions/${id}`,
      body
    )
    return data
  }

  async getByPartyId (partyId) {
    const { data } = await this.restConnector.get(
      `/documentActions?filter={"where":{"assignedPartyId":"${partyId}"},"order":"updatedAt DESC"}`
    )
    return data
  }

  async countDocumentActionsByPartyId (partyId) {
    const { data } = await this.restConnector.get(
      `/documentActions?filter={"where":{"assignedPartyId":"${partyId}","status":"todo"},"order":"updatedAt DESC"}`
    )
    return data.length
  }

  async findByPartyId (partyId, where) {
    const filter = {
      where,
      include: 'document',
      order: 'updatedAt DESC'
    }

    const { data } = await this.restConnector.get(
      `/transactionParties/${partyId}/assignedActions?filter=${JSON.stringify(
        filter
      )}`
    )
    return data
  }

  async updateSignDocumentById (id, { file }) {
    const bodyFormData = new FormData()
    bodyFormData.set('file', file)

    return this.restConnector({
      url: `/documentActions/${id}/sign-document`,
      method: 'patch',
      data: bodyFormData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(resp => resp.data)
  }

  async checkDocumentExistEnvelope (documentId) {
    const filter = {
      where: { documentId },
      fields: { envelopeId: true }
    }

    const { data } = await this.restConnector.get(
      `/documentActions?filter=${JSON.stringify(filter)}`
    )

    return _filter(data, o => o.envelopeId).length > 0
  }
}
