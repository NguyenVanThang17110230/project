import { isEmpty } from 'lodash'
import { TransactionRole } from '../../common/models/Transaction'
import { getFullName } from '../../common/view-models/TransactionParty'

export interface TransactionGateway {
  create(transaction: {
    address: string,
    imageURL: string,
    url: string,
    description: string,
    closingDate: Date,
    transactionType: string,
    transactionTypeStatus: string,
    status: string
  }): Promise<Object>;

  findById(id: string): Promise<Object>;
  updateById(id: string, data: Object): Promise<Object>;
  findByOwnerId(userId: string): Promise<Object>;
  createMainImage(id: string, file: Object): Promise<Object>;
  deleteImage(id: string): Promise<Object>;
  findByTransactionId(id: string): Promise<Object>;
  getTransactionVendor(id: string): Promise<Object>;
}

export interface TransactionDetailGateway {
  updateDetail(id: string, data: Object): Promise<Object>;
  createNewTransactionDetail(id: string, data: Object): Promise<Object>;
}

export interface TransactionActivityGateway {
  create(data: {
    actorId: string,
    type: string
  }): Promise<Object>;

  findAll(): Promise<Object>;
}

export interface TransactionInvitationGateway {
  create(data: {
    transactionId: string,
    role: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    access: string
  }): Promise<Object>;
}

export interface TransactionPartyGateway {
  updateById(id: string, data: Object): Promise<Object>;
  findByData(where: Object, data: Object): Promise<Object>;
  findMemberByTransactionId(id: string): Promise<Object>;
  getAllAgentParty(userId: string): Promise<Object>;
}

export interface DocumentGateway {
  create(data: {
    title: string,
    creatorId: string,
    documentUrl: string
  }): Promise<Object>;
  getByTransactionId(id: string): Promise<Object>;
  getAllDocumentVendor(transactionId: string): Promise<Object>;
}

export interface DocumentActionGateway {
  create(data: {
    action: string,
    documentId: string,
    assignedPartyId: string,
    creatorId: string
  }): Promise<Object>;
}

export interface UserGateway {}
// export default class UserService {
//   constructor(options :{
//     userGateway : UserGateway
//   })
// }

export default class TransactionService {
  constructor (options: {
    transactionGateway: TransactionGateway,
    transactionActivityGateway: TransactionActivityGateway,
    transactionInvitationGateway: TransactionInvitationGateway,
    transactionPartyGateway: TransactionPartyGateway,
    documentGateway: DocumentGateway,
    documentActionGateway: DocumentActionGateway,
    transactionDetailGateway: TransactionDetailGateway,
    userGateway: UserGateway
  }) {
    const {
      transactionGateway,
      transactionActivityGateway,
      transactionInvitationGateway,
      transactionPartyGateway,
      documentGateway,
      documentActionGateway,
      transactionDetailGateway,
      userGateway
    } = options
    this.transactionGateway = transactionGateway
    this.transactionDetailGateway = transactionDetailGateway
    this.transactionActivityGateway = transactionActivityGateway
    this.transactionInvitationGateway = transactionInvitationGateway
    this.transactionPartyGateway = transactionPartyGateway
    this.documentGateway = documentGateway
    this.documentActionGateway = documentActionGateway
    this.userGateway = userGateway
  }

  async createTransaction ({
    ownerId,
    address,
    imageURL,
    url,
    description,
    closingDate,
    transactionType,
    transactionTypeStatus,
    status
  }) {
    return this.transactionGateway.create({
      ownerId,
      address,
      imageURL,
      url,
      description,
      closingDate,
      transactionType,
      transactionTypeStatus,
      status
    })
  }
  async updateTransactionById (
    id,
    {
      address,
      transactionType,
      transactionTypeStatus,
      url,
      description,
      closingDate,
      status
    }
  ) {
    return this.transactionGateway.updateById(id, {
      address,
      transactionType,
      transactionTypeStatus,
      url,
      description,
      closingDate,
      status
    })
  }

  listenToMyDocumentAction (userId, callback) {
    this.documentActionGateway.listenToMyDocumentAction(userId, callback)
  }

  listenToMyDocumentActionAdd (userId, callback) {
    this.documentActionGateway.listenToMyDocumentActionAdd(userId, callback)
  }

  async createMainImage (transactionId, file) {
    return this.transactionGateway.createMainImageById(transactionId, file)
  }
  async deleteImage (transactionId) {
    return this.transactionGateway.deleteImageById(transactionId)
  }
  async createTransactionDetail (
    detailId,
    {
      yearBuilt,
      bedrooms,
      squareFootage,
      schoolDistrict,
      type,
      bathrooms,
      lotSize,
      country,
      streetNumber,
      streetName,
      unitNumber,
      city,
      state,
      postalCode,
      county,
      mlsNumber,
      taxId
    }
  ) {
    return this.transactionDetailGateway.updateDetail(detailId, {
      yearBuilt,
      bedrooms,
      squareFootage,
      schoolDistrict,
      type,
      bathrooms,
      lotSize,
      country,
      streetNumber,
      streetName,
      unitNumber,
      city,
      state,
      postalCode,
      county,
      mlsNumber,
      taxId
    })
  }
  async createNewTransactionDetail ({
    yearBuilt,
    bedrooms,
    squareFootage,
    schoolDistrict,
    type,
    bathrooms,
    lotSize,
    country,
    streetNumber,
    streetName,
    unitNumber,
    city,
    state,
    postalCode,
    county,
    mlsNumber,
    taxId
  }) {
    return this.transactionDetailGateway.createNewTransactionDetail({
      yearBuilt,
      bedrooms,
      squareFootage,
      schoolDistrict,
      type,
      bathrooms,
      lotSize,
      country,
      streetNumber,
      streetName,
      unitNumber,
      city,
      state,
      postalCode,
      county,
      mlsNumber,
      taxId
    })
  }

  async getTransactionsForUser () {
    return this.transactionGateway.findByOwnerId({
      include: [
        {
          parties: [{ documents: 'actions' }, 'assignedActions', 'user']
        },
        'invitations'
      ]
    })
  }

  async getTransactionsDetailByTransactionId (id) {
    return this.transactionGateway.findByTransactionId(id)
  }

  async getMemberPartiesByTransaction (id) {
    return this.transactionPartyGateway.getByTransactionId(id, {
      include: ['user', { documents: 'actions' }]
    })
  }

  async getDetailedTransactionAndActivityById (id) {
    const transaction = await this.transactionGateway.findById(id, {
      include: [
        {
          parties: [{ documents: 'actions' }, 'assignedActions', 'user']
        },
        'invitations'
      ]
    })
    const activitiesFull = await this.transactionActivityGateway.getByTransactionId(
      id
    )
    const detail = await this.transactionDetailGateway.getById(id)
    return { transaction, activitiesFull, detail }
  }
  async getTransactionVendor (id) {
    return this.transactionGateway.getTransactionVendor(id)
  }

  async getAllTransactionVer2 (userId) {
    return this.transactionGateway.findById(userId, {
      include: [
        {
          parties: [{ documents: 'actions' }, 'assignedActions', 'user']
        },
        'invitations'
      ]
    })
  }

  async getMyTransactionsAndActivitiesForUser (userId) {
    const transactions = await this.transactionGateway.getMyTransactions()
    const activities = await this.transactionActivityGateway.getByActorId(
      userId
    )
    return { transactions, activities }
  }

  async inviteParty ({
    transactionId,
    role,
    firstName,
    lastName,
    email,
    phoneNumber,
    access
  }) {
    return this.transactionInvitationGateway.create({
      transactionId,
      role,
      firstName,
      lastName,
      email,
      phoneNumber,
      access
    })
  }

  async getInvitationById (id) {
    return this.transactionInvitationGateway.findById(id)
  }

  async getDetailedTransactionInvitationById (id) {
    return this.transactionInvitationGateway.findById(id, {
      include: 'transaction'
    })
  }

  async updateTransactionPartyInfo (
    { userId, transactionId },
    { firstName, lastName, email, phoneNumber, company, licenseNumber }
  ) {
    const transactionParty = await this.transactionPartyGateway.getByTransactionIdAndUserId(
      transactionId,
      userId
    )

    if (transactionParty) {
      return this.transactionPartyGateway.updateById(transactionParty.id, {
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        licenseNumber
      })
    }
  }

  async updateTransactionPartyById (
    id,
    {
      firstName,
      lastName,
      email,
      role,
      phoneNumber,
      company,
      licenseNumber,
      access
    }
  ) {
    return this.transactionPartyGateway.updateById(id, {
      firstName,
      lastName,
      role,
      email,
      phoneNumber,
      company,
      licenseNumber,
      access
    })
  }

  // async getTransactionParty ({findTransactionParties, where, skip, order, limit}) {
  //   const arrayTransactionParties = await this.transactionPartyGateway.findByData(
  //     findTransactionParties
  //   )
  //   let arrayTransaction =[]
  //   arrayTransactionParties.map( async transaction => {
  //     where.id = transaction.transactionId
  //     const dataTransaction = await this.transactionGateway.findByData({where, skip, order, limit})
  //     if (dataTransaction !== null) {
  //       arrayTransaction.push(dataTransaction)
  //     }
  //   })
  //   // const temp = await Promise.all(arrayTransaction)
  //   console.log('arrayTransaction',arrayTransaction);

  //   return arrayTransaction
  // }

  async getTransactions ({ where, skip, order, limit, include }) {
    return this.transactionGateway.findByData({
      where,
      skip,
      order,
      limit,
      include
    })
  }

  async getDetailedDocumentByPartyId (idParty) {
    return this.documentGateway.getByPartyId(idParty, {
      include: 'actions'
    })
  }

  async getDocumentsAndPartyByTransactionId (transactionId) {
    const documents = await this.documentGateway.getByTransactionId(
      transactionId
    )

    const result = []
    for (const doc of documents) {
      let partyDetail = null

      // Vendor: not have creatorId
      if (doc.creatorId) {
        // Normal document: Save in 'documents' folder
        const temp = doc.uri.split('/')
        if (temp[temp.length - 2] === 'documents') {
          const party = await this.transactionPartyGateway.findById(
            doc.creatorId
          )
          const user = await this.userGateway.findById(party.userId)

          let name = getFullName(party)
          if (isEmpty(name)) {
            name = user.name || getFullName(user)
          }

          partyDetail = {
            name,
            email: party.email,
            avatar: user.avatar
          }

          result.push({ ...doc, party: partyDetail })
        }
      }
    }

    return result
  }

  async getEnvelopeDocumentsAndPartyByTransactionId (transactionId) {
    const documents = await this.documentGateway.getByTransactionId(
      transactionId
    )

    const result = []

    for (const doc of documents) {
      let partyDetail = null

      // Vendor: not have creatorId
      if (doc.creatorId) {
        // Envelope document: Save in 'documents' folder
        const temp = doc.uri.split('/')
        if (temp[temp.length - 2] === 'envelopes') {
          const party = await this.transactionPartyGateway.findById(
            doc.creatorId
          )
          const user = await this.userGateway.findById(party.userId)

          let name = getFullName(party)
          if (isEmpty(name)) {
            name = user.name || getFullName(user)
          }

          partyDetail = {
            name,
            email: party.email,
            avatar: user.avatar
          }

          result.push({ ...doc, party: partyDetail })
        }
      }
    }
    return result
  }

  async getDocumentsAndPartyByPartyId (partyId) {
    const documents = await this.documentGateway.findByPartyId(partyId)
    const promise = documents.map(async doc => {
      const party = await this.transactionPartyGateway.findById(doc.creatorId)
      const user = await this.userGateway.findById(party.userId)

      let name = getFullName(party)
      if (isEmpty(name)) {
        name = user.name || getFullName(user)
      }

      return {
        ...doc,
        party: {
          name,
          email: party.email,
          avatar: user.avatar
        }
      }
    })
    return Promise.all(promise)
  }

  async getDocumentsByPartyId (partyId) {
    return this.documentGateway.findByPartyId(partyId)
  }

  async getDocumentsByTransactionId (transactionId) {
    const documents = await this.documentGateway.getByTransactionId(
      transactionId
    )

    let result = []
    for (const doc of documents) {
      const isExist = await this.documentActionGateway.checkDocumentExistEnvelope(
        doc.id
      )

      // Cannot create envelop with document of vendors
      if (!isExist && doc.role !== TransactionRole.VENDORS) {
        result.push(doc)
      }
    }

    return result
  }

  async createFileDocument ({
    file,
    title,
    role,
    creatorId,
    partyId,
    transactionId,
    url,
    documentType
  }) {
    return this.documentGateway.create({
      file,
      title,
      role,
      creatorId,
      partyId,
      transactionId,
      url,
      documentType
    })
  }

  async createDocumentAction ({
    action,
    documentId,
    assignedPartyId,
    creatorId
  }) {
    return this.documentActionGateway.create({
      action,
      documentId,
      assignedPartyId,
      creatorId
    })
  }

  async createDocumentsAction (arrayAction) {
    return this.documentActionGateway.bulkCreate(arrayAction)
  }

  async getActivitiesByActorId (actorId) {
    return this.transactionActivityGateway.getByActorId(actorId)
  }

  async getActivitiesByPartyId (partyId) {
    return this.transactionActivityGateway.getByPartyId(partyId)
  }
  async getDocumentActionByDocumentId (documentId) {
    return this.documentActionGateway.getByDocumentId(documentId)
  }
  async getAllDocumentVendorByTransactionId (transactionId) {
    return this.documentGateway.getAllDocumentVendor(transactionId)
  }

  async updateDocumentActionById (
    id,
    { action, status, documentId, assignedPartyId, creatorId }
  ) {
    return this.documentActionGateway.updateById(id, {
      action,
      status,
      documentId,
      assignedPartyId,
      creatorId
    })
  }

  async getDocumentByTransactionId (id) {
    return this.documentGateway.getByTransactionId(id)
  }

  async getAllAgentParty (userId) {
    return this.transactionPartyGateway.getAllAgentParty(userId)
  }

  async getDocumentById (id) {
    return this.documentGateway.getById(id, {
      include: 'actions'
    })
  }

  async getDetailedDocumentsForParties (parties) {
    const documents = parties.map(async party => {
      return this.documentGateway.getByPartyId(party.id, {
        include: 'actions'
      })
    })
    return Promise.all(documents)
  }

  async getDocumentActionsAssignedToParty (partyId, where) {
    return this.documentActionGateway.findByPartyId(partyId, where)
  }

  async getDocumentActionsByPartyId (partyId) {
    return this.documentActionGateway.getByPartyId(partyId)
  }

  async countDocumentActionsByPartyId (partyId) {
    return this.documentActionGateway.countDocumentActionsByPartyId(partyId)
  }

  async getDocumentActionsByDocumentId (documentId) {
    return this.documentActionGateway.getByDocumentId(documentId)
  }

  async getTransactionPartyByUserId (transactionId, userId) {
    return this.transactionPartyGateway.getByTransactionIdAndUserId(
      transactionId,
      userId
    )
  }

  async getPartiesForTransaction (id) {
    return this.transactionGateway.findById(id, {
      include: 'parties'
    })
  }

  async getAllTransaction () {
    return this.transactionGateway.getAllTransaction()
  }

  async deleteTransactionById (id) {
    return this.transactionGateway.deleteTransactionById(id)
  }

  async updateSignDocumentById (documentActionId, { file }) {
    return this.documentActionGateway.updateSignDocumentById(documentActionId, {
      file
    })
  }

  async archiveTransaction (id) {
    return this.transactionGateway.archiveTransaction(id)
  }

  async closeTransaction (id) {
    return this.transactionGateway.closeTransaction(id)
  }

  async getTransactionWithUserRoles (id) {
    return this.transactionGateway.getTransactionWithUserRoles(id)
  }

  async getAllAgents (id) {
    return this.transactionGateway.getAllAgentsInTransaction(id)
  }

  async getAgentTransaction (userId, where, skip, order, limit) {
    return this.transactionPartyGateway.getAgentTransaction(
      userId,
      where,
      skip,
      order,
      limit
    )
  }

  async getUriToSignDocument (id, { signers, creatorId }) {
    return this.documentGateway.getUriToSignDocument(id, { signers, creatorId })
  }

  async getSignLink (documentId, envelopeId, party) {
    let name = getFullName(party)
    if (isEmpty(name)) {
      const user = await this.userGateway.findById(party.userId)
      name = user.name || getFullName(user)
    }
    return this.documentGateway.getSignLink(documentId, {
      envelopeId,
      partyId: party.id,
      email: party.email,
      name
    })
  }

  async createTransactionParty (data) {
    const user = await this.userGateway.findByEmail(data.email)
    // 1. email(not user) -> invite
    if (!user) {
      return this.transactionInvitationGateway.create(data)
    }
    // 2. email: (user) -> transaction party
    return this.transactionPartyGateway.create({ ...data, userId: user.id })
  }

  async getPartyByTransactionIdAndUserId (transactionId, userId) {
    return this.transactionPartyGateway.getByTransactionIdAndUserId(
      transactionId,
      userId
    )
  }

  async getPartiesByTransactionId (transactionId) {
    const parties = await this.transactionPartyGateway.findByTransactionId(
      transactionId
    )
    const promise = parties.map(async party => {
      let name = getFullName(party)
      if (isEmpty(name)) {
        const user = await this.userGateway.findById(party.userId)
        name = user.name || getFullName(user)
      }
      return {
        ...party,
        name
      }
    })
    return Promise.all(promise)
  }

  async makeDoneDocumentAction (actionId) {
    return this.documentActionGateway.makeDone(actionId)
  }

  async updateTransactionPercent (transactionId, percent) {
    return this.transactionGateway.updateTransactionPercent(
      transactionId,
      percent
    )
  }
}
