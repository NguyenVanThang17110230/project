import React, { Component } from 'react'
import Head from 'next/head'
import toastr from 'toastr'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { Router } from '../../common/routes'
import { authService } from '../services'
import guestOnly from '../hocs/guestOnly'

class ResetNewPasswordPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      submitting: false
    }
  }

  render () {
    const { password, confirmPassword, submitting } = this.state
    const { t } = this.props
    return (
      <div>
        <Head>
          <title>{t('common:resetNewPassword')}</title>
        </Head>
        <div className='row login-page'>
          <div className='login-page_left col-lg-4 d-flex justify-content-center align-items-center'>
            <div className='container w-75 d-lg-block d-none'>
              <img
                className='img-left mb-5 '
                src='../static/images/New/new-link-white.png'
              />
              <div className=''>
                <div className='text-white'>
                  <div className='form-group '>
                    <h3>
                      <b>Welcome to Link!</b>
                    </h3>
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
          <div className='col-md-12 col-lg-8 login-page_right d-flex flex-column justify-content-center align-items-center'>
            <img
              className='img-right mt-5'
              src='../static/images/New/new-link.png'
              alt='icon-link'
            />
            <p className='text-center text-login font-dmsans mb-5'>
              {t('common:resetNewPassword')}
            </p>
            <form
              onSubmit={this._onSubmit}
              className='w-100 d-flex justify-content-center'
            >
              <div className='login-page_right__container '>
                <div>
                  <div className='form-group'>
                    <input
                      id='new-password'
                      type='password'
                      placeholder={t('common:newPassword')}
                      className='input form-control input-right'
                      value={password}
                      onChange={this._updateFormField('password')}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      id='default-password'
                      type='password'
                      className='input form-control input-right'
                      onChange={this._updateFormField('confirmPassword')}
                      placeholder={t('common:confirmPassword')}
                      value={confirmPassword}
                      required
                    />
                  </div>

                  <div className='form-group mt-4'>
                    <button
                      className='btn btn--primary text-white form-control input-right-button'
                      type='submit'
                      disabled={submitting}
                    >
                      {t('common:save')}
                    </button>
                  </div>
                  <div className='form-group text-center text-forgot-pass' />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <div className='row reset-new-password-page'>
          <div className='col-lg-6 hidden-md-down d-md-none d-lg-block reset-new-password-page_left'>
            <div className=' form__standalone sign-up-form'>
              <h4 className='my-4 text-white'>
                Resulting in a secure successful transaction
              </h4>
              <img src='/static/images/login_image1.png' />
            </div>
          </div>
          <div className='col-md-12 col-lg-6  reset-new-password-page_right pt-3'>
            <div className='reset-new-password-page_text text-center'>
              <img
                className='mt-5 mt-md-0'
                src='/static/icons/icon-link.png'
                alt='icon-link'
              />
              <div className='btn-header_container'>
                <Link route='/signup'>
                  <a className='btn btn-signup action text-white font-weight-bold'>
                    Sign up
                  </a>
                </Link>
                <Link route='/login'>
                  <a className='btn btn-signin non-action text-white font-weight-bold'>
                    Sign in
                  </a>
                </Link>
              </div>
            </div>
            <div className='sign-up-form form__standalone'>
              <div>
                <div className='card-body'>
                  <h1 className='h4 mb-5 font-weight-normal text-center text-white'> */}
        {/* ----------- */}
        {/* {t('common:reset-newPassword')} */}
        {/* Reset New Password
                  </h1>
                  <form
                    onSubmit={this._onSubmit}
                    className='floating-labels form-material-placeholder'
                  >
                    <div className='form-group my-4'>
                      <input
                        id='new-password'
                        type='password'
                        className='form-control' */}
        {/* --------- */}
        {/* // placeholder={t('common:newPassword')} */}

        {/* onChange={this._updateFormField('password')}
                        value={password}
                        required
                      />
                      <span className='bar' />
                      <label htmlFor='new-password'>NEW PASSWORD</label>
                    </div>
                    <div className='form-group my-4'>
                      <input
                        id='default-password'
                        type='password'
                        className='form-control' */}
        {/* ----------- */}
        {/* // placeholder={t('common:confirmPassword')} */}
        {/*
                        onChange={this._updateFormField('confirmPassword')}
                        value={confirmPassword}
                        required
                      />
                      <span className='bar' />
                      <label htmlFor='default-password'>CONFIRM PASSWORD</label>
                    </div>
                    <div className='text-center'>
                      <button
                        className='btn btn-confirm'
                        type='submit'
                        disabled={submitting}
                      >
                        {t('common:save')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* ----------------------------------------------- */}
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

    const { t } = this.props
    const { password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      return toastr.error(t('errNewPasswordNotMatch'))
    }

    try {
      this.setState({ submitting: true })
      const {
        access_token: accessToken,
        user_id: userId
      } = this.props.router.query
      await authService.setNewPassword(
        { newPassword: password, userId },
        accessToken
      )
      Router.replaceRoute('/login')
    } catch (e) {
      this.setState({ submitting: false })
      if (e.details) {
        toastr.error(t(`Password must have 6 characters`))
      } else {
        toastr.error(t(`common:errInvalidPassword`))
      }
    }
  }
}

export default compose(
  guestOnly,
  connect(),
  withRouter
)(ResetNewPasswordPage)
