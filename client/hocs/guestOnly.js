import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'next/router'
import { Router } from '../../common/routes'
import { isAdmin } from '../../common/models/User'
import authRedux, { selector } from '../redux/authRedux'
import { withI18next } from './withI18next'
import { authService } from '../services/index'

const guestOnly = Content => {
  class GuestWrapper extends React.Component {
    static async getInitialProps ({
      req,
      res,
      pathname,
      query,
      asPath,
      store,
      isServer
    }) {
      if (isServer) {
        if (req.signedCookies.access_token) {
          authService.setAccessToken(req.signedCookies.access_token)
          const user = await store.dispatch(authRedux.getLoginUser())

          if (user) {
            res.redirect(isAdmin(user) ? '/admin' : '/my-transactions')
            res.end()
          }
        }
      } else {
        const user = selector.getLoginUser(store.getState())
        if (user) {
          Router.pushRoute(isAdmin(user) ? '/admin' : '/my-transactions')
        }
      }
      const initialProps = Content.getInitialProps
        ? await Content.getInitialProps({
          req,
          res,
          pathname,
          query,
          asPath,
          store,
          isServer
        })
        : {}

      return initialProps
    }

    render () {
      return <Content {...this.props} />
    }
  }

  return composedHoc(GuestWrapper)
}

const mapStateToProps = state => ({
  currentUser: selector.getLoginUser(state)
})
const composedHoc = compose(
  connect(mapStateToProps),
  withRouter,
  withI18next(['common'])
)

export default guestOnly
