import { ALLOW_FILE_TYPES, MAX_FILE_SIZE } from '../common/models/Container'

function _getStorageConfig (provider) {
  const config = {
    allowedContentTypes: ALLOW_FILE_TYPES,
    maxFileSize: MAX_FILE_SIZE
  }

  switch (provider) {
    case 'amazon':
      return {
        connector: 'loopback-component-storage',
        provider,
        key: process.env.STORAGE_AWS_KEY,
        keyId: process.env.STORAGE_AWS_KEY_ID,
        nameConflict: process.env.STORAGE_NAME_CONFLICT,
        ...config
      }
    case 'google':
      return {
        connector: 'loopback-component-storage',
        provider,
        keyFilename: process.env.STORAGE_GOOGLE_KEY_FILE_NAME,
        projectId: process.env.STORAGE_GOOGLE_PROJECT_ID,
        ...config
      }
    case 'filesystem':
      return {
        connector: 'loopback-component-storage',
        provider: provider,
        root: process.env.STORAGE_FS_ROOT,
        nameConflict: process.env.STORAGE_NAME_CONFLICT,
        ...config
      }
    case 'gridfs':
      return {
        connector: 'loopback-component-storage-gridfs',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      }
  }
}

module.exports = {
  storage: _getStorageConfig(process.env.STORAGE_PROVIDER)
}
