export default class EventService {
  constructor (options) {
    this.eventGateway = options.eventGateway
  }

  async create (event) {
    return this.eventGateway.create(event)
  }

  async deleteEventWithId (id) {
    return this.eventGateway.deleteById(id)
  }

  async updateEvent (event) {
    return this.eventGateway.patch(event)
  }

  async getEventsForUser (userId) {
    return this.eventGateway.find({
      or: [{ creatorUserId: userId }, { sharedUserIds: userId }]
    })
  }
}
