import {
  DataAccessType,
  TransactionRole
} from '../../common/models/Transaction'
import { NotificationType } from '../../common/models/Notification'

const NOTIFICATION_ROLE = {
  [TransactionRole.LEASING_AGENT]: "Leasing's Agent",
  [TransactionRole.SELLER]: 'Seller',
  [TransactionRole.BUYER]: 'Buyer',
  [TransactionRole.BUYER_AGENT]: "Buyer's Agent",
  [TransactionRole.SELLER_AGENT]: "Seller's Agent",
  [TransactionRole.ESCROW]: 'Escrow',
  [TransactionRole.TITLE]: 'Title',
  [TransactionRole.TERMITE]: 'Termite',
  [TransactionRole.HOME_INSPECTOR]: 'Home Inspector',
  [TransactionRole.LENDER]: 'Lender',
  [TransactionRole.TRANSACTION_COORDINATOR]: 'Transaction Coordinator'
}

const NOTIFICATION_TITLE = {
  [NotificationType.CREATE_EVENT]: 'Create Event',
  [NotificationType.DELETE_EVENT]: 'Delete Event',
  [NotificationType.NEW_MESSAGE]: 'New Message',
  [NotificationType.UPLOAD_DOCUMENT]: 'New Document',
  [NotificationType.ACTION_ADD_TO_USER]: 'Action Added',
  [NotificationType.CREATE_TASK]: 'New Task'
}

export const NOTIFICATION_ACTON = {
  [DataAccessType.SIGN_DOCUMENT]: 'Sign document',
  [DataAccessType.VIEW_ONLY]: 'View only',
  [DataAccessType.REVIEW_DOCUMENT]: 'Review document'
}

export const getNotificationRole = type => {
  return NOTIFICATION_ROLE[type]
}

export const getAction = type => {
  return NOTIFICATION_ACTON[type]
}

export const getNotificationTitle = type => {
  return NOTIFICATION_TITLE[type]
}
