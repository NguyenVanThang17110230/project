import _ from 'lodash'
import loopbackPassport from 'loopback-component-passport'

module.exports = (app, config) => {
  const PassportConfigurator = loopbackPassport.PassportConfigurator
  const passportConfigurator = new PassportConfigurator(app)

  passportConfigurator.init()
  passportConfigurator.setupModels({
    userModel: app.models.user,
    userIdentityModel: app.models.UserIdentity,
    userCredentialModel: app.models.UserCredential
  })

  passportConfigurator.configureProvider('google-login', {
    provider: 'google',
    module: 'passport-google-oauth',
    strategy: 'OAuth2Strategy',
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: `${config.baseUrl}/auth/google/callback`,
    authPath: '/auth/google',
    callbackPath: '/auth/google/callback',
    successRedirect: '/',
    failureRedirect: '/login',
    scope: ['email', 'profile'],
    profileToUser: function (provider, profile, options) {
      return {
        name: profile.displayName,
        password: config.defaultPassword,
        usingDefaultPassword: true,
        avatar: _.get(profile, 'photos[0].value'),
        email: _.get(profile, 'emails[0].value')
      }
    }
  })
}
