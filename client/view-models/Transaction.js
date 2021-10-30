import {
  TransactionActivityType,
  DocumentActionStatus,
  DataAccessType,
  TransactionRole
} from '../../common/models/Transaction'

export const getTransactionFullAddress = transaction => {
  return `${transaction.address}`
}

const TRANSACTION_ACTIVITY_TYPE = {
  [TransactionActivityType.TRANSACTION_CREATE]: 'Transaction Created',
  [TransactionActivityType.PROFILE_CREATED]: 'Profile Created',
  [TransactionActivityType.PARTY_JOINED_TRANSACTION]:
    'Party Joined Transaction',
  [TransactionActivityType.INVITING_TO_PARTY]: 'Inviting To Party',
  [TransactionActivityType.UPLOADED_BY]: 'uploaded by',
  [TransactionActivityType.TRANSACTION_DELETE_BY_ADMIN]:
    'Transaction deleted by admin'
}

export const getTransactionActivity = type => {
  return TRANSACTION_ACTIVITY_TYPE[type]
}
// ===== ~ Count percent ~ =====
// “Actions”: A list of document actions assigned to this party
const _calculatorPercentageOfAssignedActions = assignedActions => {
  if (assignedActions.length === 0) {
    return 0
  }
  const actionsDone = assignedActions.filter(action => {
    return action.status === DocumentActionStatus.DONE
  })

  return actionsDone.length / assignedActions.length
}

// “Uploaded documents”: A list of documents uploaded in this party
const _calculatorPercentageOfDocument = actions => {
  if (actions.length === 0) {
    return 0
  }
  const actionsDone = actions.filter(action => {
    return action.status === DocumentActionStatus.DONE
  })
  return actionsDone.length / actions.length
}

export const calculatorPercentageOfParty = (documents, assignedActions) => {
  let completedDocumentCount = 0
  documents.forEach(document => {
    completedDocumentCount += _calculatorPercentageOfDocument(document.actions)
  })

  const percentCompleteDocuments = completedDocumentCount / documents.length
  const percentCompleteActions = _calculatorPercentageOfAssignedActions(
    assignedActions
  )
  // Not Uploaded files

  if (documents.length === 0) {
    return percentCompleteActions
  }
  // Not Actions
  if (percentCompleteActions === 0) {
    return percentCompleteDocuments
  }

  return (percentCompleteDocuments + percentCompleteActions) / 2
}

const _isInvited = (parties, invitations) => {
  const isNotInvition = parties.find(
    party =>
      party.role === TransactionRole.BUYER_AGENT ||
      party.role === TransactionRole.SELLER_AGENT ||
      party.role === TransactionRole.LEASING_AGENT ||
      party.role === TransactionRole.TRANSACTION_COORDINATOR
  )
  if (isNotInvition) {
    return invitations.length - parties.length + 1
  }
  return invitations.length - parties.length
}

export const calculatorPercentageOfTransaction = (parties, invitations) => {
  if (parties.length === 1) {
    return 0
  }

  // Because you do not manipulate the card "Leasing Agent"
  const isRoleLeasingAgent = parties.find(
    party => party.role === TransactionRole.LEASING_AGENT
  )
  if (isRoleLeasingAgent) {
    parties.shift()
    if (parties.length === 0) {
      return 0
    }
  }

  const percentParties = parties.map(party =>
    calculatorPercentageOfParty(party.documents, party.assignedActions)
  )

  const totalNumerator = percentParties.reduce((total, percent) => {
    return (total += percent)
  }, 0)

  const isInvited = _isInvited(parties, invitations)

  return totalNumerator / (parties.length + isInvited)
}

export const roundPercent = number => {
  return Math.floor(number * 100)
}

// ===== ~ Status of Document ~ =====
export const DOCUMENT_STATUS = {
  INCOMPLETE: 'Incomplete',
  COMPLETE: 'Complete'
}

const ACTION_STATUS = {
  UNVIEWED: 'Unviewed',
  UNSIGNED: 'Unsigned',
  RECEIVED: 'Received',
  VIEWED: 'Viewed',
  SIGNED: 'Signed'
}

export const canAddDocumentAction = (currentParty, document) => {
  if (currentParty.id === document.partyId) {
    return true
  }
  if (currentParty.id === document.creatorId) {
    return true
  }
  return false
}

// Have the right to complete "Document"
export const canCompleteDocument = (currentParty, document) => {
  if (document.actions.length === 0) {
    return false
  }
  if (currentParty.id === document.partyId) {
    return true
  }
  if (currentParty.id === document.creatorId) {
    return true
  }
  return false
}

// Have the right to complete "DocumetAction"
export const canCompleteDocumentAction = (currentParty, action) => {
  if (action.status === DocumentActionStatus.DONE) {
    return false
  }
  if (currentParty.id === action.assignedPartyId) {
    return true
  }
  return false
}

export const getStatusForDocumentAction = action => {
  if (action.status === DocumentActionStatus.TODO) {
    return DOCUMENT_STATUS.INCOMPLETE
  }
  return DOCUMENT_STATUS.COMPLETE
}

// Existing an element whose status is todo is not complete
export const getStatusForDocument = document => {
  if (document.actions.length === 0) {
    return DOCUMENT_STATUS.INCOMPLETE
  }

  const isTodo = document.actions.find(
    action => action.status === DocumentActionStatus.TODO
  )
  if (isTodo) {
    return DOCUMENT_STATUS.INCOMPLETE
  }
  return DOCUMENT_STATUS.COMPLETE
}

export const getActionStatusForDocumentAction = action => {
  if (action.status === DocumentActionStatus.TODO) {
    if (action.action === DataAccessType.SIGN_DOCUMENT) {
      return <div className='text-danger'>{ACTION_STATUS.UNSIGNED}</div>
    }
    return <div className='text-danger'>{ACTION_STATUS.UNVIEWED}</div>
  }

  // Case status of action is DONE
  if (action.action === DataAccessType.SIGN_DOCUMENT) {
    return <div className='text-success'>{ACTION_STATUS.SIGNED}</div>
  } else if (action.action === DataAccessType.VIEW_ONLY) {
    return <div className='text-success'>{ACTION_STATUS.VIEWED}</div>
  }
  return <div className='text-success'>{ACTION_STATUS.RECEIVED}</div>
}

// ===== ~ Party View ~ ===== ///
export const PARTY_VIEW = {
  MAIN: 'Main',
  ACTIONS_NEEDED: 'Actions Needed',
  MY_DOCUMENTS: 'My Documents',
  ENVELOPES: 'Envelopes',
  VIEW_DETAILS: 'View Details'
}

// ===== ~ Header Text ~ ===== //
export const HEADER_TEXT = {
  TRANSACTION_DOCUMENTS: 'Transaction Documents'
}

// ===== ~ Document Action ~ ===== //
export const ACTION_TYPE = {
  [DataAccessType.VIEW_ONLY]: 'View',
  [DataAccessType.REVIEW_DOCUMENT]: 'Review',
  [DataAccessType.SIGN_DOCUMENT]: 'Needs Signature'
}
