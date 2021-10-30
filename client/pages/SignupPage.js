import React, { Component } from 'react'
import Head from 'next/head'
import { compose } from 'redux'
import { connect } from 'react-redux'
import toastr from 'toastr'
import Error from 'next/error'
import Cookies from 'js-cookie'
import { Link, Router } from '../../common/routes'

import authRedux from '../redux/authRedux'
import guestOnly from '../hocs/guestOnly'
import { isAdmin, Constraint, isUser } from '../../common/models/User'
import Roles from '../../common/models/Role'
import { ErrorCode } from '../errors/ValidationError'
import {
  transactionService,
  userInvitationService,
  userService
} from '../services'

class SignupPage extends Component {
  static async getInitialProps ({ query }) {
    const invitationId = query.invitationId
    const referId = query.referId
    const userInvitationId = query.userInvitationId
    const invitation = invitationId
      ? await transactionService.getInvitationById(invitationId)
      : referId
        ? await userService.getInvitationById(referId)
        : await userInvitationService.getInvitationById(userInvitationId)

    if (!invitation) {
      return {}
    }

    return { invitation, userInvitationId }
  }

  constructor (props) {
    super(props)
    const { invitation } = this.props
    this.state = invitation
      ? {
        firstName: invitation.firstName,
        lastName: invitation.lastName,
        email: invitation.email,
        isInactive: false,
        password: '',
        confirmPassword: '',
        loading: false
      }
      : {}
  }

  render () {
    if (!this.props.invitation) {
      return <Error statusCode={404} />
    }

    const {
      firstName,
      lastName,
      email,
      password,
      loading,
      confirmPassword
    } = this.state
    const { t } = this.props

    return (
      <div>
        <Head>
          <title>{t('common:signUp')}</title>
        </Head>
        <div className='row login-page'>
          <div className='login-page_left d-sm-none d-md-flex col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
            <div className='container w-75'>
              <img
                className='img-left mb-5 '
                src='../static/images/New/new-link-white.png'
              />
              <div className='link-welcome'>
                <div className='text-white'>
                  <div className='form-group '>
                    <h3 className='th-font-w-5'>Welcome to Link!</h3>
                    <div className='paragraph-login'>
                      A cloud-based, full-service brokerage offering all the
                      perks of a standard brokerage without the large splits or
                      hidden fees.
                    </div>
                  </div>
                  <div className='form-group'>
                    <Link route='https://www.linkbrokerages.com/join-as-an-agent'>
                      <a target='_blank'>
                        <button
                          className='btn btn--primary learn-more-btn'
                          type='button'
                        >
                          {t(`common:learnMore`)}
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-8 col-lg-8 login-page_right d-flex flex-column justify-content-center align-items-center'>
            <img
              className='img-right mt-5'
              src='../static/images/New/new-link.png'
              alt='icon-link'
            />
            <p className='text-center text-login font-dmsans mb-5'>
              {t(`common:signUpToYourDashboard`)}
            </p>
            <form
              onSubmit={this._onSubmit}
              className='w-100 d-flex justify-content-center'
            >
              <div className='login-page_right__container'>
                <div>
                  <div className='row'>
                    <div className='form-group mb-4 col-6'>
                      <input
                        id='form-name'
                        className='form-control form-control-line'
                        placeholder={t('common:firstName')}
                        onChange={this._updateFormField('firstName')}
                        value={firstName}
                        required
                        autoFocus
                      />
                    </div>
                    <div className='form-group mb-4 col-6'>
                      <input
                        id='form-name'
                        className='form-control form-control-line'
                        placeholder={t('common:lastName')}
                        onChange={this._updateFormField('lastName')}
                        value={lastName}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className='form-group mb-4'>
                    <input
                      id='form-email'
                      type='email'
                      placeholder={t('common:enterYourEmail')}
                      className='form-control form-control-line'
                      value={email}
                    />
                  </div>
                  <div className='form-group mb-4'>
                    <input
                      id='form-password'
                      type='password'
                      className='form-control form-control-line'
                      placeholder={t('common:password')}
                      onChange={this._updateFormField('password')}
                      value={password}
                      required
                    />
                  </div>
                  <div className='form-group mb-4'>
                    <input
                      id='confirm-password'
                      type='password'
                      className='form-control form-control-line'
                      placeholder={t('common:confirmPassword')}
                      onChange={this._updateFormField('confirmPassword')}
                      value={confirmPassword}
                      required
                    />
                  </div>
                  <div className='form-group mb-4 text-center'>
                    <button
                      className='btn btn--primary form-control input-right-button text-white th-15'
                      type='submit'
                      disabled={loading}
                    >
                      {t('common:signUp')}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    $('.floating-labels .form-control')
      .on('focus blur', function (e) {
        $(this)
          .parents('.form-group')
          .toggleClass('focused', e.type === 'focus' || this.value.length > 0)
      })
      .trigger('blur')
  }

  _updateFormField = field => e => this.setState({ [field]: e.target.value })

  _onSubmit = async e => {
    e.preventDefault()

    const { dispatch, userInvitationId, invitation } = this.props
    const { firstName, lastName, email, password, confirmPassword } = this.state

    this.setState({ loading: true })
    if (confirmPassword === password) {
      try {
        // const confirmNavigate = confirm('Do you want to login page?')
        // if (confirmNavigate) {
        //   await authService.signupWithEmail({ name, email, password })
        //   Router.replaceRoute('/login')
        // } else {

        const user = await dispatch(
          authRedux.signupWithEmail({
            firstName,
            lastName,
            email,
            password,
            role: userInvitationId ? invitation.role : Roles.USER
          })
        )
        if (this.props.invitation.referrerId) {
          await userService.acceptInvatation(this.props.invitation.id)
        }

        if (userInvitationId) {
          const nextPage = isAdmin(user)
            ? '/admin'
            : isUser(user)
              ? '/my-transactions'
              : '/'
          Router.replaceRoute(nextPage)
        } else {
          const nextPage = isAdmin(user) ? '/admin' : '/my-transactions'
          !this.props.invitation.referrerId &&
            Cookies.set('welcome_invitation_id', this.props.invitation.id)
          Router.replaceRoute(nextPage)
        }

        // }
      } catch (e) {
        this.setState({ loading: false })
        toastr.error(this._getErrorMsg(e))
      }
    } else {
      toastr.error('Please check your password!')
      this.setState({ loading: false })
    }
  }

  _getErrorMsg = e => {
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
          case 'password': {
            switch (type) {
              case ErrorCode.INVALID_LENGTH: {
                return `Password must be within ${
                  Constraint.password.MIN_LENGTH
                } - ${Constraint.password.MAX_LENGTH} characters`
              }
            }
          }
        }
      }
    }
    return e.message
  }
}

export default compose(
  guestOnly,
  connect()
)(SignupPage)
