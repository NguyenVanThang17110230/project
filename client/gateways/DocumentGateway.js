export default class DocumentGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async findByPartyId (idParty) {
    const { data } = await this.restConnector.get(
      `/documents?filter={"where":{
        "partyId": "${idParty}"},
        "order":"createdAt DESC"
      }`
    )
    return data
  }

  async getByPartyId (idParty, options) {
    const resp = await this.restConnector.get(
      `/documents?filter={"where":{
        "partyId": "${idParty}"},
        "order":"createdAt DESC", 
        "include":"${options.include}"
      }`
    )
    return resp.data
  }

  async create ({
    file,
    title,
    role,
    creatorId,
    partyId,
    transactionId,
    url,
    documentType
  }) {
    if (file) {
      let bodyFormData = new FormData()
      if (documentType) bodyFormData.set('documentType', documentType)
      bodyFormData.set('title', title)
      bodyFormData.set('role', role)
      bodyFormData.set('creatorId', creatorId)
      bodyFormData.set('partyId', partyId)
      bodyFormData.set('transactionId', transactionId)
      bodyFormData.set('url', url)
      bodyFormData.append('file', file)
      return this.restConnector({
        url: '/documents/create-new',
        method: 'post',
        data: bodyFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(resp => resp.data)
    } else {
      let bodyFormData = new FormData()
      if (documentType) bodyFormData.set('documentType', documentType)
      bodyFormData.set('title', title)
      bodyFormData.set('role', role)
      bodyFormData.set('creatorId', creatorId)
      bodyFormData.set('partyId', partyId)
      bodyFormData.set('transactionId', transactionId)
      bodyFormData.set('url', url)
      bodyFormData.append('file', file)
      return this.restConnector({
        url: '/documents/create-new',
        method: 'post',
        data: bodyFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(resp => resp.data)
    }
  }

  async getById (id, options) {
    const resp = await this.restConnector.get(
      `/documents/${id}?filter={"include":"${options.include}"}`
    )
    return resp.data
  }
  async getByTransactionId (id) {
    const resp = await this.restConnector.get(
      `/documents?filter={"where":{"transactionId":"${id}"},"order":"createdAt DESC"}`
    )
    return resp.data
  }
  async getAllDocumentVendor (transactionId) {
    const resp = await this.restConnector.get(
      `/documents?filter={"where":{"transactionId":"${transactionId}","role":"vendors"},"order":"createdAt DESC"}`
    )
    return resp.data
  }

  // async getUriToSignDocument (id) {
  //   const resp = await this.restConnector.post(`documents/${id}/sign`)
  //   return resp.data
  // }

  async getUriToSignDocument (id, { signers, creatorId }) {
    const { data } = await this.restConnector.post(
      `documents/${id}/upload-to-docusign`,
      { signers, creatorId }
    )
    return data
  }

  async getSignLink (documentId, body) {
    const { data } = await this.restConnector.post(
      `documents/${documentId}/sign`,
      body
    )
    return data
  }
}
