import React from 'react'
import Head from 'next/head'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { Link, Router } from '../../common/routes'
import { isAdmin } from '../../common/models/User'
import authRedux, { selector as authSelector } from '../redux/authRedux'
import uiStateRedux, {
  selector as uiStateSelector
} from '../redux/uiStateRedux'
import { withI18next } from './withI18next'
import { authService } from '../services/index'

const adminOnly = Content => {
  class AdminWrapper extends React.Component {
    static async getInitialProps (ctx) {
      const { req, res, store, isServer } = ctx
      const composedProps = Content.getInitialProps
        ? await Content.getInitialProps(ctx)
        : {}

      if (isServer) {
        authService.setAccessToken(req.signedCookies.access_token)
        const user = await store.dispatch(authRedux.getLoginUser())

        if (!user || !isAdmin(user)) {
          res.redirect('/admin/login')
          res.end()
        }

        // Mark the page as rendered from server so we can do some custom logic on client side.
        composedProps.renderedFromServer = true
      } else {
        const user = authSelector.getLoginUser(store.getState())
        if (!user || !isAdmin(user)) {
          Router.pushRoute('/admin/login')
        }
      }

      return composedProps
    }

    async componentDidMount () {
      // Fetch UI state info that stored in localStorage.
      // E.g: sidebar show/hide status.
      if (this.props.renderedFromServer) {
        this.props.dispatch(uiStateRedux.fetchAdminSideBarStatus())
      }
    }

    render () {
      const { currentUser, showSideBar } = this.props

      if (!currentUser) return null

      const sideBarClass =
        'sidebar-mini ' + `${showSideBar ? 'sidebar-open' : 'sidebar-collapse'}`

      return (
        <div className={sideBarClass}>
          <Head>
            <title>Admin - Home</title>
            <link rel='stylesheet' href='/static/css/admin-lte3.min.css' />
            <link
              rel='stylesheet'
              href='https://unpkg.com/react-table@6.8.6/react-table.css'
            />
            <link
              href='https://unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css'
              rel='stylesheet'
            />
            <link
              rel='stylesheet'
              href='//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css'
            />
            <script
              src='https://code.jquery.com/jquery-3.3.1.min.js'
              integrity='sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8='
              crossOrigin='anonymous'
            />
          </Head>
          <div className='wrapper'>
            {this._renderNavBar()}
            {this._renderSideBar()}
            <Content {...this.props} />
            {/* {this._renderFooter()} */}
            <div id='sidebar-overlay' onClick={this._toggleSideBar} />
          </div>
        </div>
      )
    }

    _renderNavBar = () => {
      const { currentUser, t } = this.props

      return (
        <nav className='main-header navbar navbar-expand bg-white navbar-light border-bottom'>
          {/* Left navbar links */}
          <ul className='navbar-nav'>
            <li className='nav-item' onClick={this._toggleSideBar}>
              <a className='u-clickable nav-link' data-widget='pushmenu'>
                <i className='fa fa-bars' />
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className='navbar-nav ml-auto'>
            {/* User dropdown menu */}
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
                  <DropdownItem id='lbUserName' header>
                    {currentUser.name || currentUser.email}
                  </DropdownItem>
                  <DropdownItem divider />
                  <Link route='/admin/my/settings'>
                    <a className='dropdown-item text-dark'>
                      {t('common:settings')}
                    </a>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem
                    id='btn-logout'
                    onClick={this._logout}
                    className='u-clickable'
                  >
                    {t('common:logout')}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
          </ul>
        </nav>
      )
    }

    _renderSideBar = () => {
      const { t } = this.props
      return (
        <aside className='main-sidebar sidebar-dark-primary elevation-4'>
          {/* Brand Logo */}
          <Link route='/admin'>
            <a className='brand-link'>
              <img
                src='/static/icons/favicon.png'
                alt='Logo'
                className='brand-image img-circle'
              />
              <span className='brand-text font-weight-light'>
                Administration
              </span>
            </a>
          </Link>
          {/* Sidebar */}
          <div className='sidebar'>
            {/* Sidebar Menu */}
            <nav className='mt-2'>
              <ul
                className='nav nav-pills nav-sidebar flex-column'
                data-widget='treeview'
                role='menu'
                data-accordion='false'
              >
                <li className='nav-item' />
                {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                <li className='nav-header'>{t('admin:management')}</li>
                <li className='nav-item'>
                  <Link route='/admin'>
                    <a
                      className={`nav-link ${this._sideBarStatusClass(
                        '/admin'
                      )}`}
                    >
                      <i className='nav-icon fa fa-th' />
                      <p>{t('admin:dashboard')}</p>
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link route='/admin/users'>
                    <a
                      id='link-user-management'
                      className={`nav-link ${this._sideBarStatusClass(
                        '/admin/users'
                      )}`}
                    >
                      <i className='nav-icon fa fa-users' />
                      <p>{t('admin:userManagement')}</p>
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link route='/admin/transactions'>
                    <a
                      id='link-user-management'
                      className={`nav-link ${this._sideBarStatusClass(
                        '/admin/transactions'
                      )}`}
                    >
                      <i className='nav-icon fa fa-file-signature' />
                      <p>Transaction Management</p>
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link route='/admin/news'>
                    <a
                      id='link-user-management'
                      className={`nav-link ${this._sideBarStatusClass(
                        '/admin/news'
                      )}`}
                    >
                      <i className='nav-icon fas fa-newspaper' />
                      <p>News Management</p>
                    </a>
                  </Link>
                </li>
                <li className='nav-header'>{t('admin:configuration')}</li>
                <li className='nav-item'>
                  <Link route='/admin/configurations/email'>
                    <a
                      className={`nav-link ${this._sideBarStatusClass(
                        '/admin/configurations/email'
                      )}`}
                    >
                      <i className='nav-icon fa fa-envelope' />
                      <p>{t('admin:emailSettings')}</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      )
    }

    _renderFooter = () => {
      const { t } = this.props
      return (
        <footer className='main-footer'>
          <strong>
            {t('copyRight')}&nbsp;©&nbsp;{`${new Date().getFullYear()} `}
            <a href='http://www.dayoneteams.com' target='_blank'>
              DayOne Teams
            </a>
            .
          </strong>
          &nbsp;{t('allRightsReserved')}.
        </footer>
      )
    }

    _toggleSideBar = () => {
      this.props.dispatch(uiStateRedux.toggleAdminSideBar())
    }

    _sideBarStatusClass = path =>
      this.props.router.asPath === path ? 'active' : ''

    _logout = async () => {
      await this.props.dispatch(authRedux.logout())
      Router.replaceRoute('/admin/login')
    }
  }

  return composedHoc(AdminWrapper)
}

const mapStateToProps = state => ({
  currentUser: authSelector.getLoginUser(state),
  showSideBar: uiStateSelector.showAdminSideBar(state)
})
const composedHoc = compose(
  connect(mapStateToProps),
  withRouter,
  withI18next(['admin', 'common'])
)

export default adminOnly
