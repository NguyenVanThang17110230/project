import dotenv from 'dotenv'
import loopback from 'loopback'
import boot from 'loopback-boot'
import fs from 'fs'
import { promisify } from 'util'
import winston from 'winston'
import path from 'path'
import next from 'next'
import i18nextMiddleware from 'i18next-express-middleware'
import i18nNodeFsBackend from 'i18next-node-fs-backend'
import cookieParser from 'cookie-parser'
import socketIo from 'socket.io'
// import socketIoAuth from 'socketio-auth'
import 'loopback-component-passport' // Need to import this before loopback boot to ensure necessary models are ready to be used
import multer from 'multer'
import routes from '../common/routes'
import i18n from '../common/i18n'

const app = loopback()

function _setupI18n () {
  return new Promise(resolve => {
    i18n
      .use(i18nNodeFsBackend)
      .use(i18nextMiddleware.LanguageDetector)
      .init(
        {
          fallbackLng: 'en',
          preload: ['en', 'vn'], // preload all languages
          ns: ['common', 'admin', 'user'], // need to preload all the namespaces
          backend: {
            loadPath: path.join(
              __dirname,
              '../client/static/locales/{{lng}}/{{ns}}.json'
            )
          }
        },
        () => {
          app.use(i18nextMiddleware.handle(i18n))
          resolve()
        }
      )
  })
}

async function _setupNext () {
  const nextInstance = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: path.join(__dirname, '../client')
  })

  await nextInstance.prepare()

  const handle = routes.getRequestHandler(nextInstance)

  app.get('*', (req, res, next) => {
    if (req.url.indexOf('/api') === 0) return next()

    handle(req, res, next)
  })
}

async function _setupUploadDirectory () {
  const uploadDir = process.env.STORAGE_FS_ROOT
  if (!fs.existsSync(uploadDir)) {
    await promisify(fs.mkdir)(uploadDir, { recursive: true })
  }
}

app.boot = async function (envVarFilePath) {
  const mode = process.env.NODE_ENV || 'development'
  winston.info(`Starting server with ${mode} mode`)

  // Middleware configuration.
  app.use(cookieParser(process.env.COOKIE_SECRET))
  app.use(
    loopback.token({
      model: app.models.AccessToken,
      headers: ['AccessToken'],
      cookies: ['access_token'],
      currentUserLiteral: 'me' // Enable /api/users/me api shorthand syntax
    })
  )
  app.use(multer().any())

  // Prepare upload folder if use file system as file storage.
  if (process.env.STORAGE_PROVIDER === 'filesystem') {
    await _setupUploadDirectory()
  }

  // Bootstrap the application, configure models, datasources and middleware.
  // Sub-apps like REST API are mounted via boot scripts.
  boot(app, __dirname)

  await _setupI18n()
  await _setupNext()

  return new Promise(async (resolve, reject) => {
    app.io = socketIo(
      app.listen(() => {
        const baseUrl = process.env.BASE_URL

        winston.info(`Web server listening at: ${baseUrl}`)

        const apiExplorer = app.get('loopback-component-explorer')
        if (apiExplorer) {
          winston.info(
            `Browse your REST API at ${baseUrl}${apiExplorer.mountPath}`
          )
        }

        resolve(app)
      })
    )

    app.io.on('connection', function (socket) {
      socket.on('disconnect', function () {})

      // client send data
      // socket.on('messages:new', async message => {
      //   // server send data
      //   // socket.emit(`messages:new:${userId}`, message)
      //   // io.in(`${message.senderId}${message.recipientId}`).emit(
      //   //   'message',
      //   //   'cool game'
      //   // )
      //   // app.io.emit('chat', message)

      //   const { TransactionParty } = app.models

      //   socket.emit(`messages:new:${party.userId}`, message)
      // })
    })
  })
}

// Start app if user run `node server/server.js`.
if (require.main === module) {
  // Load environment variable from .env file.
  dotenv.config()

  app.boot()

  // socketIoAuth(app.io, {
  //   authenticate: function (socket, value, callback) {
  //       var AccessToken = app.models.AccessToken;
  //       //get credentials sent by the client
  //       var token = AccessToken.find({
  //         where:{
  //           and: [{ userId: value.userId }, { id: value.id }]
  //         }
  //       }, function(err, tokenDetail){
  //         if (err) throw err;
  //         if(tokenDetail.length){
  //           callback(null, true);
  //         } else {
  //           callback(null, false);
  //         }
  //       }); //find function..
  //     } //authenticate function..
  // });
}

module.exports = app
