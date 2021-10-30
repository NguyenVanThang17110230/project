import fs from 'fs'
import * as docusign from 'docusign-esign'

export const setupDocusignApiClient = async () => {
  const clientId = process.env.DOCUSIGN_CLIENT_ID
  const userApiKey = process.env.DOCUSIGN_IMPERSONATED_USER_GUID
  const scope = 'impersonation signature openid'
  // const scope =
  // 'impersonation extended signature openid click.manage click.send permission_read identity_provider_read datafeeds dtr.rooms.read dtr.rooms.write dtr.documents.read dtr.documents.write dtr.profile.read dtr.profile.write dtr.company.read dtr.company.write room_forms'
  const privateKey = fs.readFileSync('server/docusign-config/private.key')

  // create new api client
  const apiClient = new docusign.ApiClient()
  apiClient.setBasePath(`${process.env.DOCUSIGN_BASE_PATH}/restapi`)
  apiClient.setOAuthBasePath(process.env.DOCUSIGN_OAUTH_BASE_PATH)

  const userTokenResp = await apiClient.requestJWTUserToken(
    clientId,
    userApiKey,
    scope.split(' '),
    privateKey,
    360000
  )

  const userToken = userTokenResp.body.access_token
  const info = await apiClient.getUserInfo(userToken)
  const { baseUri, accountId } = info.accounts[0]

  apiClient.setBasePath(baseUri + '/restapi')
  apiClient.addDefaultHeader('Authorization', 'Bearer ' + userToken)

  return { apiClient, baseUri, accountId }
}
