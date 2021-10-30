import { createRandomAdminUser, launchPage, URL } from '../../helpers'

describe('Authentication', function () {
  it('should let admin login with correct email and password then logout', seleniumBrowser => {
    seleniumBrowser.perform(async done => {
      const {
        user: { email },
        password
      } = await createRandomAdminUser()

      const { browser, page } = await launchPage(`${URL}/admin/login`)
      await page.waitForSelector('input#input-email')
      await page.type('input#input-email', email)
      await page.type('input#input-password', password)
      await page.click('button[type=submit]')
      await page.waitForSelector('#btn-user-dropdown')
      await page.click('#btn-user-dropdown')
      await page.waitForSelector('#btn-logout')
      await page.click('#btn-logout')
      await page.waitForNavigation()

      const url = page.url()
      seleniumBrowser.assert.equal(url, `${URL}/admin/login`)

      await browser.close()

      done()
    })
  })
})
