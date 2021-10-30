import React, { Component } from 'react'
import Head from 'next/head'
import { compose } from 'redux'
import { connect } from 'react-redux'
import toastr from 'toastr'
import { Link, Router } from '../../common/routes'
import authRedux from '../redux/authRedux'
import { isAdmin, isUser } from '../../common/models/User'
import guestOnly from '../hocs/guestOnly'
import AuthService from '../services/AuthService'

class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = { email: '', password: '', loading: false }
  }

  static displayName = 'RememberMe'

  state = {
    email: '',
    password: '',
    isChecked: false
  }

  render () {
    const { email, password, loading } = this.state
    // const { loading } = this.state
    const { t } = this.props
    return (
      <div>
        <Head>
          <title>{t('common:signIn')}</title>
          <script src='../static/js/elite/custom.min.js' />
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
              {t(`common:signInToYourDashboard`)}
            </p>
            <form
              onSubmit={this._onSubmit}
              className='w-100 d-flex justify-content-center'
            >
              <div className='login-page_right__container '>
                <div>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder={t(`common:enterYourEmail`)}
                      className='input form-control input-right'
                      onChange={this._updateFormField('email')}
                      value={email}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      placeholder={t(`common:enterYourPassword`)}
                      className='input form-control input-right'
                      onChange={this._updateFormField('password')}
                      value={password}
                    />
                  </div>
                  <div className='form-check'>
                    <input
                      type='checkbox'
                      className='form-check-input '
                      id='remember-me'
                      onChange={this._updateFormField}
                    />
                    <label
                      className='form-check-label check-box-login remember-input'
                      htmlFor='remember-me'
                    >
                      {t(`common:rememberMe`)}
                    </label>
                  </div>
                  <div className='form-group mt-4'>
                    <button
                      type='submit'
                      className='btn btn--primary form-control input-right-button text-white'
                      disabled={loading}
                      onClick={this.loginSubmit}
                    >
                      {t('login')}
                    </button>
                  </div>
                  <div className='form-group text-center text-forgot-pass'>
                    <Link route='/reset-password'>
                      <a className='text--blue text-forgot-password text-bold-forget-pass'>
                        {t(`common:forgotYourPassword`)}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>

            {/* <div className='login-page_right__container '>
              <div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder={t(`common:enterYourEmail`)}
                    className='input form-control input-right'
                    onChange={this._updateFormField('email')}
                    value={email}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    placeholder={t(`common:enterYourPassword`)}
                    className='input form-control input-right'
                    onChange={this._updateFormField('password')}
                    value={password}
                  />
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input '
                    id='remember-me'
                    onChange={this._updateFormField}
                  />
                  <label
                    className='form-check-label check-box-login remember-input'
                    htmlFor='remember-me'
                  >
                    {t(`common:rememberMe`)}
                  </label>
                </div>
                <div className='form-group mt-4'>
                  <button
                    type='submit'
                    className='btn btn--primary form-control input-right-button'
                    disabled={loading}
                  >
                    {t('login')}
                  </button>
                </div>
                <div className='form-group text-center text-forgot-pass'>
                  <Link route='/reset-password'>
                    <a className='text--blue text-forgot-password text-bold-forget-pass'>
                      {t(`common:forgotYourPassword`)}
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
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

    if (localStorage.checkbox && localStorage.checkbox !== '') {
      this.setState({
        isChecked: true,
        email: localStorage.username,
        password: localStorage.password
      })
    }
  }

  loginSubmit = () => {
    const { email, password, isChecked } = this.state
    if (isChecked && email !== '') {
      localStorage.username = email
      localStorage.password = password
      localStorage.checkbox = isChecked
    }

    // here call the API to signup/login
  }

  _updateFormField = field => e => this.setState({ [field]: e.target.value })

  _onSubmit = async e => {
    e.preventDefault()

    const { dispatch, i18n } = this.props
    const { email, password } = this.state

    try {
      this.setState({ loading: true })
      const user = await dispatch(authRedux.loginWithEmail({ email, password }))
      i18n.changeLanguage(user.preferredLanguage || 'en')
      const nextPage = isAdmin(user)
        ? '/admin'
        : isUser(user)
          ? '/my-transactions'
          : '/'
      await Router.replaceRoute(nextPage)
      // await location.reload()
    } catch (e) {
      this.setState({ loading: false })
      toastr.error(this._getErrorMsg(e))
    }
  }

  _getErrorMsg = e => {
    const { t } = this.props
    switch (e.name) {
      case 'ApplicationError': {
        switch (e.code) {
          case AuthService.Error.LOGIN_FAILED: {
            return t('common:errInvalidEmailOrPassword')
          }
          case AuthService.Error.ACCOUNT_INACTIVATED: {
            return 'This account has been deactivated. Please contact admin for further information.'
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
)(LoginPage)
