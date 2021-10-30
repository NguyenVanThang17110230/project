import { chance, LONG_WAIT, SHORT_WAIT, URL } from '../helpers'

describe('Signup', function () {
  it('should sign up, auto login user with email and password then direct to homepage', function (browser) {
    const name = chance.name()
    const email = chance.email()
    const password = '123456'

    browser
      .url(`${URL}/signup`)
      .waitForElementVisible('body', LONG_WAIT)
      .setValue('input#input-name', name)
      .setValue('input#input-email', email)
      .setValue('input#input-password', password)
      .setValue('input#input-confirm-password', password)
      .submitForm('form')
      .waitForElementVisible('#btn-user-dropdown', SHORT_WAIT)
      .click('#btn-user-dropdown')
      .waitForElementVisible('.app-navbar .dropdown-header', SHORT_WAIT)
      .assert.containsText('.app-navbar .dropdown-header', name)
      .end()
  })
})
