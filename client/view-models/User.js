import { TransactionRole } from '../../common/models/Transaction'

const ROLE_LABEL_MAPPING = {
  [TransactionRole.BUYING_AGENT]: 'Buyer’s Agent',
  [TransactionRole.BUYER]: 'Buyer',
  [TransactionRole.SELLER]: 'Seller',
  [TransactionRole.TRANSACTION_COORDINATOR]: 'Transaction Coordinator',
  [TransactionRole.ESCROW]: 'Escrow',
  [TransactionRole.TITLE]: 'Title',
  [TransactionRole.LENDER]: 'Lender',
  [TransactionRole.HOME_INSPECTOR]: 'Home Inspector',
  [TransactionRole.TERMITE]: 'Termite',
  [TransactionRole.VENDORS]: 'Vendors',
  [TransactionRole.SELLER_AGENT]: 'Seller’s Agent'
}

export const getRoleLabel = role => {
  return ROLE_LABEL_MAPPING[role]
}

export const PHONE_NUMBER_MASK = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]
