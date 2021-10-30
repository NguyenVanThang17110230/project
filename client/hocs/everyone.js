import React from 'react'
import Head from 'next/head'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import { Link, Router } from '../../common/routes'
import { isAdmin, Languages } from '../../common/models/User'
import authRedux, { selector } from '../redux/authRedux'
import { withI18next } from './withI18next'
import { authService } from '../services/index'

const everyone = Content => {
  class Wrapper extends React.Component {
    static async getInitialProps (ctx) {
      const { req, store, isServer } = ctx

      if (isServer) {
        authService.setAccessToken(req.signedCookies.access_token)
        await store.dispatch(authRedux.getLoginUser())
      }

      const composedProps = Content.getInitialProps
        ? await Content.getInitialProps(ctx)
        : {}
      return composedProps
    }

    render () {
      return (
        <div>
          <Head>
            <title>LoopNext</title>
          </Head>
          {this._renderNavBar()}
          <Content {...this.props} />
          {this._renderFooter()}
        </div>
      )
    }

    _renderNavBar = () => {
      const { t, i18n, currentUser } = this.props

      return (
        <header className='app-navbar navbar navbar-expand navbar-dark'>
          <div className='navbar-nav-scroll'>
            <ul className='navbar-nav bd-navbar-nav'>
              <li className='nav-item'>
                <Link route='/'>
                  <a className='nav-link active'>{t('common:home')}</a>
                </Link>
              </li>
            </ul>
          </div>
          {currentUser ? (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item dropdown'>
                <UncontrolledDropdown>
                  <DropdownToggle id='btn-user-dropdown' tag='div'>
                    <div className='u-clickable image rounded-circle avatar'>
                      <img
                        src={
                          currentUser.avatar ||
                          '/static/images/default-avatar.png'
                        }
                        alt='Avatar'
                      />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>
                      {currentUser.name || currentUser.email}
                    </DropdownItem>
                    <DropdownItem divider />
                    <Link
                      route={
                        isAdmin(currentUser)
                          ? '/admin/my/settings'
                          : '/my/settings'
                      }
                    >
                      <a className='dropdown-item text-dark'>
                        {t('common:settings')}
                      </a>
                    </Link>
                    <DropdownItem divider />
                    <DropdownItem
                      onClick={this._logout}
                      className='u-clickable'
                    >
                      {t('common:logout')}
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          ) : (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link route='/login'>
                  <a className='nav-link active'>{t('common:login')}</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link route='/signup'>
                  <a className='nav-link active'>{t('common:signUp')}</a>
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag='a'
                    className='nav-link u-clickable'
                    caret
                  >
                    {i18n.language && i18n.language.toUpperCase()}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {Languages.map(lang => (
                      <DropdownItem
                        key={lang}
                        onClick={() => this._changeLanguage(lang)}
                      >
                        {lang.toUpperCase()}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          )}
        </header>
      )
    }

    _renderFooter = () => {
      return (
        <footer className='app-footer text-muted'>
          <div className='container-fluid p-3 p-md-5'>
            <ul className='bd-footer-links'>
              <li>
                <a href='https://gitlab.com/dayone-teams/int-boilerplates/int-loopnext'>
                  GitLab
                </a>
              </li>
              <li>
                <a href='https://www.dayoneteams.com' target='_blank'>
                  About
                </a>
              </li>
            </ul>
            <p>
              Designed and built with all the love in the world by&nbsp;
              <a href='http://www.dayoneteams.com' target='_blank'>
                DayOne Teams
              </a>
            </p>
          </div>
        </footer>
      )
    }

    _changeLanguage = lang => {
      this.props.i18n.changeLanguage(lang)
    }

    _logout = async () => {
      await this.props.dispatch(authRedux.logout())
      Router.replaceRoute('/login')
    }
  }

  return composedHoc(Wrapper)
}

const mapStateToProps = state => ({
  currentUser: selector.getLoginUser(state)
})
const composedHoc = compose(
  connect(mapStateToProps),
  withRouter,
  withI18next(['common'])
)

export default everyone
