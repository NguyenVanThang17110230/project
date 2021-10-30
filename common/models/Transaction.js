export const TransactionType = {
  NEW_PURCHASE: 'new-purchase',
  NEW_LISTING_FOR_SALE: 'new-listing-for-sale',
  NEW_LISTING_FOR_LEASE: 'new-listing-for-lease',
  NEW_LEASE: 'new-lease',
  NEW_REAL_ESTATE_OTHER: 'new-real-estate-other',
  NEW_OTHER: 'new-other'
}
// transaction type status
export const TransactionTypeStatus = {
  TTS_PRE_OFFER: 'pre-offer',
  TTS_UNDER_CONTRACT: 'under-contract',
  TTS_ESCROW: 'escrow',
  TTS_ESCROW_CLOSE: 'escrow-close',
  TTS_WITHDRAWN: 'withdrawn',
  TTS_SOLD: 'sold',
  TTS_TERMINATED: 'terminated',
  TTS_ARCHIVED: 'archived',
  TTS_PRE_LISTING: 'pre-listing',
  TTS_PRIVATE_LISTING: 'private-listing',
  TTS_ACTIVE_LISTING: 'active-listing',
  TTS_LEASED: 'leased',
  TTS_NEW: 'new',
  TTS_IN_PROCESS: 'in-process',
  TTS_DONE: 'done',
  TTS_CLOSE: 'close'
}

export const PropertyType = {
  RESIDENTIAL: 'residential',
  COMMERCIAL: 'commercial',
  INDUSTRIAL: 'industrial',
  VACANT_LAND: 'vacant-land',
  MULTIUNIT: 'multiunit',
  FARM_AND_RANCH: 'farm-and-ranch',
  CONDOMINIUM: 'condominium',
  MANUFACTURED_HOME: 'manufactured-home'
}

export const TransactionActivityType = {
  TRANSACTION_CREATE: 'transaction-create',
  INVITING_TO_PARTY: 'inviting-to-party',
  PROFILE_CREATED: 'profile-created',
  PARTY_JOINED_TRANSACTION: 'party-joined-transaction',
  UPLOADED_BY: 'uploaded-by',
  TRANSACTION_DELETE_BY_ADMIN: 'transaction-delete-by-admin'
}

export const TransactionAccessType = {
  FULL: 'full',
  UPLOAD_ONLY: 'upload-only',
  UPLOAD_VENDOR: 'upload-vendor'
}

export const TransactionRole = {
  BUYING_AGENT: 'buyer-agent',
  BUYER: 'buyer',
  SELLER: 'seller',
  TRANSACTION_COORDINATOR: 'transaction-coordinator',
  ESCROW: 'escrow',
  TITLE: 'title',
  LENDER: 'lender',
  HOME_INSPECTOR: 'home-inspector',
  TERMITE: 'termite',
  VENDORS: 'vendors',
  SELLER_AGENT: 'seller-agent'
}

export const DataAccessType = {
  SIGN_DOCUMENT: 'sign-document',
  VIEW_ONLY: 'view-only',
  // RECEIVE_COPY: 'receive-copy'
  REVIEW_DOCUMENT: 'review-document'
}

export const SigningMethod = {
  MANUAL: 'manual',
  DOCUSIGN: 'docusign'
}

export const TransactionStatus = {
  ACTIVE: 'active',
  CLOSED: 'closed',
  ARCHIVED: 'archived'
}

export const DocumentActionStatus = {
  TODO: 'todo',
  DONE: 'done'
}

export const EnvelopeStatus = {
  SENT: 'sent',
  COMPLETED: 'completed'
}

export const PercentCompleteTransaction = {
  PRE_OFFER: 5,
  UNDER_CONTRACT: 20,
  ESCROW: 40,
  ESCROW_CLOSE: 80,
  SOLD: 95,
  CLOSED: 100
}

// 2 megabytes
// export const MEGABYTE = 2
export const MEGABYTE = 1
export const MAX_FILE_SIZE = MEGABYTE * 1024 * 1024

// file type: pdf
export const TYPE = 'pdf'
export const FILE_TYPE = `application/${TYPE}`

// file type:
export const TYPE_IMG = 'image/jpeg'
export const FILE_IMG_TYPE = `application/${TYPE_IMG}`

export const DocumentSpecies = {
  ENVELOPE: 'envelope'
}

export const TaskNameForDocumentAction = {
  [DataAccessType.VIEW_ONLY]: 'View Document',
  [DataAccessType.REVIEW_DOCUMENT]: 'Review Document',
  [DataAccessType.SIGN_DOCUMENT]: 'Needs Signature'
}
