export default class NewsGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async getAllNew () {
    const resp = await this.restConnector.get(`/news`)
    return resp.data
  }

  async getViewNews () {
    const resp = await this.restConnector.get(
      `/news?filter={"where":{"status":true},"order":"createdAt DESC"}`
    )
    return resp.data
  }

  async addNewNews ({ title, content, newsType, status, creatorId }) {
    const resp = await this.restConnector.post(`/news`, {
      title,
      content,
      newsType,
      status,
      creatorId
    })
    return resp.data
  }

  async editNewNews (id, { title, content, newsType, status }) {
    const resp = await this.restConnector.patch(`/news/${id}`, {
      title,
      content,
      newsType,
      status
    })
    return resp.data
  }

  async deleteNews (id) {
    const resp = await this.restConnector.delete(`/news/${id}`)
    return resp.data
  }
}
