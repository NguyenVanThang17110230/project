import { chance, createRandomAdminUser, launchPage, URL } from '../../helpers'

describe('User management', function () {
  it('should allow admin to create user', function (seleniumBrowser) {
    seleniumBrowser.perform(async done => {
      const {
        user: { email },
        password
      } = await createRandomAdminUser()

      const newUser = {
        name: chance.name(),
        email: chance.email()
      }

      const { browser, page } = await launchPage(`${URL}/admin/login`)

      await page.waitForSelector('form')
      await page.type('input#input-email', email)
      await page.type('input#input-password', password)
      await page.click('button[type=submit]')
      await page.waitForNavigation()

      page.goto(`${URL}/admin/users/create`)
      await page.waitForSelector('input#name')
      await page.type('input#name', newUser.name)
      await page.type('input#email', newUser.email)
      await page.type('input#password', '123456')
      await page.click('button[type=submit]')
      await page.waitForNavigation()
      await page.waitForSelector('#input-name')

      const createdUserName = await page
        .$('#input-name')
        .then(input => input.getProperty('value'))
        .then(valueHandle => valueHandle.jsonValue())
      const createdUserEmail = await page
        .$('#input-email')
        .then(input => input.getProperty('value'))
        .then(valueHandle => valueHandle.jsonValue())
      seleniumBrowser.assert.equal(createdUserName, newUser.name)
      seleniumBrowser.assert.equal(createdUserEmail, newUser.email)

      await browser.close()

      done()
    })
  })
})
