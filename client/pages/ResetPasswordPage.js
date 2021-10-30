import React, { Component } from 'react'
import Head from 'next/head'
import toastr from 'toastr'
import { authService } from '../services'
import guestOnly from '../hocs/guestOnly'
import { ErrorCode } from '../errors/ValidationError'
import AuthService from '../services/AuthService'

class ResetPasswordPage extends Component {
  constructor (props) {
    super(props)
    this.state = { email: '', submitting: false }
  }
  // state = {
  //   submitting: false
  // }

  // fetchData = () => {
  //   this.setState({ submitting: true })
  //   setTimeout(() => {
  //     this.setState({ submitting: false })
  //   }, 2000)
  // }

  render () {
    const { email, submitting } = this.state
    const { t } = this.props
    // const { loading } = this.state
    return (
      <div>
        <Head>
          <title>{t('common:resetPassword')}</title>
        </Head>
        {/* text */}
        <div className='row login-page'>
          <div className='login-page_left d-sm-none d-md-flex col-md-4 col-lg-4 reset-password-page d-flex justify-content-center align-items-center'>
            <div className='container w-75'>
              <img
                className='img-left mb-5 '
                src='../static/images/New/new-link-white.png'
              />
              <div className=''>
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
                    <button
                      className='btn btn--primary learn-more-btn'
                      type='button'
                      // disabled={loading}
                    >
                      {t(`common:learnMore`)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-8 col-lg-8 login-page_right d-flex flex-column justify-content-center align-items-center'>
            <img
              className='img-right mt-5'
              src='../static/images/New/new-link.png'
            />
            <p className='text-center text-login font-dmsans mb-5'>
              {t(`common:passwordReset`)}
            </p>
            <div className='login-page_right__container quote-resetPassword '>
              Enter your{' '}
              <b>
                <strong>email address</strong>
              </b>{' '}
              that you used to register. We'll send you an email with a link to
              reset your password.
            </div>

            <div className='login-page_right__container '>
              <div>
                <form onSubmit={this._onSubmit}>
                  {!submitting ? (
                    <div className='form-group'>
                      <input
                        id='form-email'
                        className='input form-control input-right'
                        placeholder={t('common:enterYourEmail')}
                        onChange={this._updateFormField('email')}
                        value={email}
                        autoFocus
                        required
                      />
                    </div>
                  ) : (
                    <div className='success-massage'>
                      Thank you! Your submission has been received!
                    </div>
                  )}

                  {!submitting ? (
                    <div className='form-group mt-4'>
                      <button
                        type='submit'
                        className='btn btn--primary form-control input-right-button text-white '
                        role='status'
                        disabled={submitting}
                        //  onClick={this.fetchData}
                      >
                        {submitting && <span>please wait... </span>}
                        {!submitting && (
                          <span>{t('common:resetPassword')}</span>
                        )}
                      </button>
                    </div>
                  ) : (
                    ''
                  )}
                </form>
              </div>
            </div>
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
    const { email } = this.state
    try {
      await authService.sendResetPasswordEmail(email)
      toastr.success('Success')
      this.setState({
        submitting: true
      })
    } catch (e) {
      toastr.error(this._getErrMsg(e))
      this.setState({
        submitting: false
      })
    }
  }

  _getErrMsg = e => {
    switch (e.name) {
      case 'ValidationError': {
        const key = Object.keys(e.details)[0]
        const type = e.details[key][0]

        switch (type) {
          case ErrorCode.INVALID_EMAIL: {
            return 'Invalid email'
          }
          case ErrorCode.REQUIRED: {
            return 'Email is required'
          }
        }
        break
      }
      case 'ApplicationError': {
        if (e.code === AuthService.Error.EMAIL_NOT_FOUND) {
          return 'Email not found'
        }
      }
    }
    return e.message
  }
}

export default guestOnly(ResetPasswordPage)
