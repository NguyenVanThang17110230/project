import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {
  i18n
    .use(XHR)
    // .use(Cache)
    .use(LanguageDetector)
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init({
    fallbackLng: 'en',
    load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

    ns: ['common', 'admin', 'user'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    detection: {
      order: ['querystring', 'cookie'],
      lookupCookie: 'lng',
      lookupQuerystring: 'lng',
      caches: ['cookie']
    },
    backend: {
      loadPath: '/static/locales/{{lng}}/{{ns}}.json'
    }
  })
}

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = (req, namespaces) => {
  if (!namespaces) namespaces = i18n.options.defaultNS
  if (typeof namespaces === 'string') namespaces = [namespaces]

  req.i18n.toJSON = () => null // do not serialize i18next instance and send to client

  const initialI18nStore = {}
  // req.i18n.language = req.cookies.language
  // if (!req.i18n.languages.includes(req.cookies.language)) req.i18n.languages.push(req.cookies.language)
  req.i18n.languages.forEach(l => {
    initialI18nStore[l] = {}
    namespaces.forEach(ns => {
      initialI18nStore[l][ns] =
        (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
    })
  })

  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore,
    initialLanguage: req.i18n.language
  }
}

export default i18n
