import _ from 'lodash'
import { IStorageGateway } from '../services/AuthService'

export default class StorageGateway implements IStorageGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async upload (containerName, file) {
    let formData = new FormData()
    formData.append('file', file)
    const { data } = await this.restConnector.post(
      `/containers/${containerName}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    const uploadedFileData = _.get(data, 'result.files.file[0]') || data
    return this._getPublicFileLink(uploadedFileData)
  }

  /**
   * The response data format returned from S3, Google Cloud, Mongo GridFS, and file system
   * are very different.
   * This method is about getting correct file URL based on those different response format.
   * @param fileData
   * @return {string} file URL
   * @private
   */
  _getPublicFileLink (fileData) {
    if (fileData.providerResponse) {
      // AWS S3
      if (fileData.providerResponse.location) {
        return fileData.providerResponse.location
      }

      // Google Cloud Storage
      if (fileData.providerResponse.mediaLink) {
        return fileData.providerResponse.mediaLink
      }
    }

    // Mongo GridFs
    if (fileData._id) {
      return `/api/containers/${fileData.metadata.container}/download/${
        fileData._id
      }`
    }

    // File system
    return `/api/containers/${fileData.container}/download/${fileData.name}`
  }
}
