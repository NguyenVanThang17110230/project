export default class NewsService {
  constructor (options) {
    this.newsGateway = options.newsGateway
  }
  // get all news
  async getAllNew () {
    return this.newsGateway.getAllNew()
  }
  // get news view
  async getViewNews () {
    return this.newsGateway.getViewNews()
  }
  // add new news
  async addNewNews ({ title, content, newsType, status, creatorId }) {
    return this.newsGateway.addNewNews({
      title,
      content,
      newsType,
      status,
      creatorId
    })
  }
  // edit news
  async editNewNews (id, { title, content, newsType, status }) {
    return this.newsGateway.editNewNews(id, {
      title,
      content,
      newsType,
      status
    })
  }
  // delete news
  async deleteNews (id) {
    return this.newsGateway.deleteNews(id)
  }
}
