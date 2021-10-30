export default class EventGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async create (event) {
    const { data } = await this.restConnector.post('/events', event)
    return data
  }
  async deleteById (id) {
    const { data } = await this.restConnector.delete(`/events/${id}`)
    return data
  }
  async find (where) {
    const filter = { where }
    const { data } = await this.restConnector.get(
      `/events?filter=${JSON.stringify(filter)}`
    )
    return data
  }
  async patch (event) {
    const { data } = await this.restConnector.patch('/events', event)
    return data
  }
}
