import { chance, launchPage, URL } from '../../helpers'

describe('Setup', function () {
  it('should let user setup the system and create first admin account', seleniumBrowser => {
    seleniumBrowser.perform(async done => {
      const systemInitPassword = process.env.SYSTEM_INIT_PASSWORD
      const firstAdmin = {
        name: chance.name(),
        email: chance.email(),
        password: '123456'
      }

      const { browser, page } = await launchPage(`${URL}/admin/setup`)
      await page.waitForSelector('.admin-setup-form')
      await page.type('#input-password', systemInitPassword)
      await page.click('button[type=submit]')
      await page.waitForSelector('.admin-first-account-form')
      await page.type('#input-name', firstAdmin.name)
      await page.type('#input-email', firstAdmin.email)
      await page.type('#input-password', firstAdmin.password)
      await page.type('#input-confirm-password', firstAdmin.password)
      await page.click('button[type=submit]')
      await page.waitForNavigation()

      seleniumBrowser.assert.equal(page.url(), `${URL}/admin`)

      await browser.close()

      done()
    })
  })
})
