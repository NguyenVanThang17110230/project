require('@babel/register')()

const chromedriverPath = require('chromedriver').path
const seleniumServerPath = require('selenium-server').path

const disableInMemorySelenium =
  process.env.DISABLE_IN_MEMORY_SELENIUM === 'true'

module.exports = {
  src_folders: ['./features'],
  output_folder: '.test-report-e2e',
  globals_path: './globalModules.js',
  start_session: true,

  selenium: disableInMemorySelenium
    ? null
    : {
      start_process: true,
      server_path: seleniumServerPath,
      port: 4444,
      cli_args: {
        'webdriver.chrome.driver': chromedriverPath
      }
    },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: process.env.SELENIUM_HOST || '127.0.0.1',
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: '.test-report-e2e/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        marionette: true,
        chromeOptions: {
          args: ['headless']
        }
      }
    }
  },

  test_runner: 'mocha'
}
