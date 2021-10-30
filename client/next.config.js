const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const result = withSass(withCss())
// const result = withCss()

result.publicRuntimeConfig = {
  BASE_URL: process.env.BASE_URL
}

module.exports = result
