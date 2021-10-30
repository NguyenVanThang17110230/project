import axios from 'axios'
import Cookies from 'js-cookie'
import ApplicationError from '../errors/ApplicationError'

export function create ({ baseUrl }) {
  const instance = axios.create({ baseURL: baseUrl })

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (err) {
      if (err.message === 'Network Error') {
        err.code = ApplicationError.name
        err.message = 'errNetwork'
      }
      return Promise.reject(err)
    }
  )

  /**
   * On browser, restConnector (axios) doesn't need to care about access_token anymore as we hacked around to let server set
   * access_token to browser on successful login.
   * @param token
   */
  instance.setAccessToken = function (token) {
    if (token) {
      instance.defaults.headers['AccessToken'] = token
    } else {
      instance.removeAccessToken(token)
    }
  }

  instance.removeAccessToken = function () {
    delete instance.defaults.headers.AccessToken
    Cookies.remove('access_token')
  }

  return instance
}
