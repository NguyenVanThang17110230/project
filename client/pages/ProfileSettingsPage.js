import React, { Fragment } from 'react'
import Head from 'next/head'
import toastr from 'toastr'
import userOnly from '../hocs/userOnly'
import authRedux from '../redux/authRedux'
import { Constraint } from '../../common/models/User'
import { ErrorCode } from '../errors/ValidationError'
import AuthService from '../services/AuthService'
import { userService } from '../services'

class ProfileSettingsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        ...props.currentUser
      },
      changeUserAvatar: false,
      savingUserInfo: false,
      savingPassword: false,
      savingUserAvatar: false,
      srcAvatar: null,
      file: null
    }
    this._handleChangeAvatar = this._handleChangeAvatar.bind(this)
    this._updateUserAvatar = this._updateUserAvatar.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentUser.avatar !== this.state.user.avatar) {
      this.setState({
        user: {
          ...this.state.user,
          avatar: nextProps.currentUser.avatar
        }
      })
    }
  }

  render () {
    const { user, savingPassword } = this.state
    const { t, currentUser } = this.props
    return (
      <div className='box-main'>
        <Head>
          <title>{t('common:mySettings')}</title>
        </Head>
        <section className='content'>
          <div className='container-fluid'>
            <Fragment>
              <div className='row pt-5 d-flex justify-content-center align-items-center'>
                <div className='col-md-8 col-lg-8 col-xl-5'>
                  <div className='card p-3'>
                    <div className='card-header text-left bg-white'>
                      <h4 className='card-title th-size-3'>
                        {t('common:changePassword')}
                      </h4>
                    </div>
                    <div className='card-body'>
                      <section className='content'>
                        <form
                          className='no-shadow'
                          role='form'
                          onSubmit={this._changePassword}
                        >
                          {!currentUser.usingDefaultPassword && (
                            <div className='form-group'>
                              <label
                                className='tittle-mini-ver'
                                htmlFor='currentPassword'
                              >
                                {t('common:currentPassword')}
                              </label>
                              <input
                                type='password'
                                id='currentPassword'
                                className='form-control'
                                placeholder={t('common:currentPassword')}
                                onChange={this._updateUserField('oldPassword')}
                                value={user.oldPassword}
                              />
                            </div>
                          )}
                          <div className='form-group'>
                            <label
                              className='tittle-mini-ver'
                              htmlFor='newPassword'
                            >
                              {t('common:newPassword')}
                            </label>
                            <input
                              type='password'
                              id='newPassword'
                              className='form-control'
                              placeholder={t('common:newPassword')}
                              onChange={this._updateUserField('newPassword')}
                              value={user.newPassword}
                            />
                          </div>
                          <div className='form-group'>
                            <label
                              className='tittle-mini-ver'
                              htmlFor='confirmPassword'
                            >
                              {t('common:confirmPassword')}
                            </label>
                            <input
                              type='password'
                              id='confirmPassword'
                              className='form-control'
                              placeholder={t('common:confirmPassword')}
                              onChange={this._updateUserField(
                                'confirmPassword'
                              )}
                              value={user.confirmPassword}
                            />
                          </div>
                          <div className='text-left'>
                            <button
                              type='submit'
                              className='btn btn-save text-white w-auto pl-5 pr-5'
                              disabled={savingPassword}
                            >
                              Update password
                            </button>
                          </div>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
        </section>
        <footer className='footer-card' style={{ padding: '2rem 0' }}>
          <div className='footer-page'>
            <div className='footer-p1'>
              © Copyright Link Management Systems. All rights reserved
            </div>
            <div className='footer-p2'>Powered by Link Brokerages</div>
          </div>
        </footer>
      </div>
    )
  }

  onDrop = file => {
    this.setState({ file })
  }

  _saveAccountInfo = async e => {
    e.preventDefault()

    const { t } = this.props

    this.setState({ savingUserInfo: true })

    try {
      await this.props.dispatch(authRedux.updateAccountInfo(this.state.user))
      this.props.i18n.changeLanguage(this.state.user.preferredLanguage)
      toastr.success(t('common:saved'))
    } catch (e) {
      toastr.error(this._getUserUpdateErrorMsg(e))
    } finally {
      this.setState({ savingUserInfo: false })
    }
  }

  _changePassword = async e => {
    e.preventDefault()

    const { t, dispatch } = this.props

    try {
      const { oldPassword, newPassword, confirmPassword } = this.state.user

      if (newPassword !== confirmPassword) {
        return toastr.error(t('common:errNewPasswordNotMatch'))
      }

      this.setState({ savingPassword: true })
      await dispatch(authRedux.updatePassword(oldPassword, newPassword))
      toastr.success(t('common:saved'))
    } catch (e) {
      toastr.error(this._getChangePasswordErrorMsg(e))
    } finally {
      this.setState({ savingPassword: false })
    }
  }

  _updateUserField = field => e =>
    this.setState({ user: { ...this.state.user, [field]: e.target.value } })

  // _handleChangeAvatar = async e => {
  //   if (!e.target.files.length) return
  //   const { t } = this.props
  //   try {
  //     await this.props.dispatch(authRedux.updateAvatar(e.target.files[0]))
  //     toastr.success(t('common:saved'))
  //   } catch (e) {
  //     toastr.error(this._getChangeAvatarErrorMsg(e))
  //   }
  // }

  _getChangePasswordErrorMsg = e => {
    switch (e.name) {
      case 'ValidationError': {
        const key = Object.keys(e.details)[0]
        const type = e.details[key][0]
        switch (type) {
          case ErrorCode.INVALID_LENGTH: {
            return `Password must be within ${
              Constraint.password.MIN_LENGTH
            } - ${Constraint.password.MAX_LENGTH} characters`
          }
          case ErrorCode.REQUIRED: {
            return 'Password is required'
          }
        }
        break
      }
      case 'ApplicationError': {
        if (e.code === AuthService.Error.INVALID_CURRENT_PASSWORD) {
          return 'Current password is incorrect'
        }
      }
    }
    return e.message
  }

  _getChangeAvatarErrorMsg = e => {
    const { t } = this.props
    switch (e.name) {
      case 'ValidationError': {
        switch (e.details[0]) {
          case ErrorCode.INVALID_FILE_TYPE: {
            const allowType = Constraint.avatar.ALLOWED_FILE_TYPES.join(
              ', '
            ).replace(new RegExp('image/', 'g'), '')
            return t('common:errInvalidFileType', { allowType })
          }
          case ErrorCode.INVALID_FILE_SIZE: {
            return t('common:errInvalidFileSize', {
              maxSize: Constraint.avatar.MAX_FILE_SIZE / Math.pow(1024, 2)
            })
          }
        }
      }
    }
    return e.message
  }

  _getUserUpdateErrorMsg = e => {
    switch (e.name) {
      case 'ValidationError': {
        const key = Object.keys(e.details)[0]
        const type = e.details[key][0]

        switch (key) {
          case 'name': {
            switch (type) {
              case ErrorCode.REQUIRED: {
                return 'Name is required'
              }
              case ErrorCode.INVALID_LENGTH: {
                return `Name must be within ${
                  Constraint.name.MAX_LENGTH
                } characters`
              }
            }
            break
          }
          case 'email': {
            switch (type) {
              case ErrorCode.REQUIRED: {
                return 'Email is required'
              }
              case ErrorCode.INVALID_EMAIL: {
                return 'Email must be valid'
              }
              case ErrorCode.INVALID_LENGTH: {
                return `Email must be within ${
                  Constraint.email.MAX_LENGTH
                } characters`
              }
              case ErrorCode.EMAIL_EXISTED: {
                return 'Email already existed'
              }
            }
            break
          }
        }
      }
    }
    return e.message
  }

  _handleChangeAvatar = async e => {
    if (!e.target.files.length) return
    // const { t } = this.props
    const src = URL.createObjectURL(e.target.files[0])
    this.setState({
      srcAvatar: src,
      changeUserAvatar: true,
      file: e.target.files[0]
    })
    // try {
    //   await this.props.dispatch(authRedux.updateAvatar(e.target.files[0]))
    //   toastr.success(t('common:saved'))
    // } catch (e) {
    //   toastr.error(this._getChangeAvatarErrorMsg(e))
    // }
  }

  _getChangeAvatarErrorMsg = e => {
    const { t } = this.props
    switch (e.name) {
      case 'ValidationError': {
        switch (e.details[0]) {
          case ErrorCode.INVALID_FILE_TYPE: {
            const allowType = Constraint.avatar.ALLOWED_FILE_TYPES.join(
              ', '
            ).replace(new RegExp('image/', 'g'), '')
            return t('common:errInvalidFileType', { allowType })
          }
          case ErrorCode.INVALID_FILE_SIZE: {
            return t('common:errInvalidFileSize', {
              maxSize: Constraint.avatar.MAX_FILE_SIZE / Math.pow(1024, 2)
            })
          }
        }
      }
    }
    return e.message
  }

  _onSubmit = async (values, action) => {
    const { setSubmitting } = action
    // const {documentAction} = this.props
    // const { file } = this.state
    try {
      setSubmitting(true)
      // await transactionService.updateSignDocumentById(documentAction.id, {
      //   file: file[0]
      // })
      setSubmitting(false)
      this.props.reRenderDynamic()
      this.props.toggle()
      toastr.success('Success')
    } catch (e) {
      toastr.error(e.message)
      setSubmitting(false)
    }
  }

  _updateUserAvatar = async (userId, file) => {
    const { dispatch } = this.props
    try {
      this.setState({ savingUserAvatar: true })
      await userService.updateUserAvatar(userId, file)
      const user = await userService.getUserFromId(userId)
      await dispatch(authRedux.updateUserrAvatar(user.avatar))
      this.setState({
        changeUserAvatar: false,
        savingUserAvatar: false
      })
      toastr.success('Success')
    } catch (error) {
      this.setState({
        savingUserAvatar: false
      })
      toastr.error(error.message)
    }
  }
}

export default userOnly(ProfileSettingsPage)
