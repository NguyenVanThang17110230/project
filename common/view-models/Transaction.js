import { DataAccessType } from '../models/Transaction'

const DATA_ACCESS_TYPE = {
  [DataAccessType.SIGN_DOCUMENT]: 'Sign Document',
  [DataAccessType.VIEW_ONLY]: 'View Only',
  // [DataAccessType.RECEIVE_COPY]: 'Receive Copy'
  [DataAccessType.REVIEW_DOCUMENT]: 'Review Document'
}

export const getDataAccessType = access => {
  return DATA_ACCESS_TYPE[access]
}
