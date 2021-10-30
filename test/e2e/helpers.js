import Chance from 'chance'
import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, './e2e.env') })

export const LONG_WAIT = 10000
export const SHORT_WAIT = 5000
export const chance = Chance()
export const URL = process.env.BASE_URL

let _bootedApp

export function setBootedApp (app) {
  _bootedApp = app
}

export function getBootedApp () {
  return _bootedApp
}

export async function launchPage (url) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewport({ width: 1024, height: 768 })

  await page.goto(url)

  return { browser, page }
}

export async function createRandomAdminUser () {
  const name = chance.name()
  const email = chance.email()
  const password = '123456'

  const user = await _bootedApp.models.user.createAdminUser({
    name,
    email,
    password
  })

  return { user, password }
}
