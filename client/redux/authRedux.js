import _ from 'lodash'
import globalRedux from './globalRedux'
import uiStateRedux from './uiStateRedux'
import { isAdmin } from '../../common/models/User'
// import { stat } from 'fs/promises'

const actionCreators = {}

actionCreators.getLoginUser = () => async (
  dispatch,
  getState,
  { authService }
) => {
  const user = await authService.getLoginUser()
  dispatch(actionCreators.fetchLoginUserSuccess(user))
  return user
}

actionCreators.loginWithEmail = ({ email, password }) => async (
  dispatch,
  getState,
  { authService }
) => {
  const user = await authService.loginWithEmail({ email, password })
  dispatch(actionCreators.fetchLoginUserSuccess(user))

  if (isAdmin(user)) {
    dispatch(uiStateRedux.fetchAdminSideBarStatus())
  }

  return user
}

actionCreators.signupWithEmail = ({
  firstName,
  lastName,
  email,
  password,
  role
}) => async (dispatch, getState, { authService }) => {
  const user = await authService.signupWithEmail({
    firstName,
    lastName,
    email,
    password,
    role
  })
  dispatch(actionCreators.fetchLoginUserSuccess(user))

  if (isAdmin(user)) {
    dispatch(uiStateRedux.fetchAdminSideBarStatus())
  }

  return user
}

actionCreators.logout = () => async (dispatch, getState, { authService }) => {
  await authService.logout()
  dispatch(actionCreators.fetchLoginUserSuccess(null))
}

actionCreators.updateAccountInfo = ({
  name,
  email,
  preferredLanguage
}) => async (dispatch, getState, { authService }) => {
  await authService.updateAccountInfo({ name, email, preferredLanguage })
  dispatch(
    actionCreators.updateLoginUserSuccess({
      name,
      email,
      preferredLanguage
    })
  )
}

actionCreators.updateAvatar = file => async (
  dispatch,
  getState,
  { authService }
) => {
  const user = await authService.uploadAvatar(file)
  dispatch(
    actionCreators.updateLoginUserSuccess({
      avatar: user.avatar
    })
  )
}
actionCreators.createMainImage = file => async (
  dispatch,
  getState,
  { transactionService }
) => {
  const transaction = await transactionService.uploadAvatar(file)
  dispatch(
    actionCreators.updateLoginUserSuccess({
      imageURL: transaction.imageURL
    })
  )
}

actionCreators.updateUserrAvatar = avatar => async (
  dispatch,
  getState,
  { authService }
) => {
  dispatch(actionCreators.updateLoginUserSuccess({ avatar: avatar }))
}

actionCreators.updatePassword = (oldPassword, newPassword) => async (
  dispatch,
  getState,
  { authService }
) => {
  await authService.updatePassword({ oldPassword, newPassword })
}

actionCreators.updateStatusNotifi = statusNotification => async (
  dispatch,
  getState,
  { authService }
) => {
  dispatch(
    actionCreators.updateLoginUserSuccess({
      statusNotification: statusNotification
    })
  )
}

actionCreators.fetchLoginUserSuccess = user =>
  globalRedux.fetchSuccess({ id: 'loginUser', data: user })

actionCreators.updateLoginUserSuccess = data => (dispatch, getState) => {
  const newUserInfo = {
    ...getState().global.loginUser.data,
    ...data
  }
  dispatch(actionCreators.fetchLoginUserSuccess(newUserInfo))
}

//, Test

actionCreators.fetchTestSuccess = data =>
  globalRedux.fetchSuccess({ id: 'test', data })

actionCreators.updateTest = ({ data }) => async dispatch => {
  dispatch(actionCreators.fetchTestSuccess(data))

  return data
}

actionCreators.getTest = () => async dispatch => {
  dispatch(actionCreators.fetchTestSuccess())
  // return 'kkkk'
}

// parties view
actionCreators.fetchPartiesSuccess = data =>
  globalRedux.fetchSuccess({ id: 'parties', data })

actionCreators.updateParties = ({ data }) => async dispatch => {
  dispatch(actionCreators.fetchPartiesSuccess(data))

  return data
}

actionCreators.getViewParties = () => async dispatch => {
  dispatch(actionCreators.fetchPartiesSuccess())
  // return 'kkkk'
}
// new transaction

actionCreators.fetchTransSuccess = data =>
  globalRedux.fetchSuccess({ id: 'isToggleNew', data })

actionCreators.updateNew = ({ data }) => async dispatch => {
  dispatch(actionCreators.fetchTransSuccess(data))

  return data
}

actionCreators.getNewTransaction = () => async dispatch => {
  dispatch(actionCreators.fetchTransSuccess())
  // return 'kkkk'
}
// dashboard
actionCreators.fetchDashboardSuccess = data =>
  globalRedux.fetchSuccess({ id: 'dashboard', data })

actionCreators.updateDashboard = ({ data }) => async dispatch => {
  dispatch(actionCreators.fetchDashboardSuccess(data))

  return data
}

actionCreators.getViewDashboard = () => async dispatch => {
  dispatch(actionCreators.fetchDashboardSuccess())
  // return 'kkkk'
}
// end
export default actionCreators

export const selector = {
  getLoginUser: state => _.get(state, 'global.loginUser.data'),
  getTest: state => _.get(state, 'global.test.data'),
  getNewTransaction: state => _.get(state, 'global.isToggleNew.data'),
  getViewParties: state => _.get(state, 'global.parties.data'),
  getViewDashboard: state => _.get(state, 'global.dashboard.data')
}
