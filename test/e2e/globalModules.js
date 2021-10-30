import MongoMemoryServer from 'mongodb-memory-server'
import app from '../../server/server'
import { setBootedApp } from './helpers'

const disableInMemoryMongoDb = process.env.DISABLE_IN_MEMORY_MONGODB === 'true'

let _mongod

module.exports = {
  async before (done) {
    if (!disableInMemoryMongoDb) {
      _mongod = new MongoMemoryServer({
        instance: {
          port: parseInt(process.env.DB_PORT),
          dbName: process.env.DB_NAME
        }
      })
    }

    setTimeout(async () => {
      const bootedApp = await app.boot()

      const { Role, Configuration } = bootedApp.models
      await Role.createDefaultRoles()
      await Configuration.createDefaultConfigs()

      // Set booted app instance to helper so it can use to provide other
      // reusable methods based on that app instance.
      setBootedApp(bootedApp)

      done()
    }, 2000)
  },

  after (done) {
    if (!disableInMemoryMongoDb) {
      _mongod.stop()
    }

    process.exit()
  }
}
