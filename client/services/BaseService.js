export default class BaseService {
  constructor ({ pubsubGateway }) {
    this.pubsubGateway = pubsubGateway
  }

  emit (eventType, data) {
    this.pubsubGateway.emit(eventType, data)
  }

  subscribe (eventType, handler) {
    this.pubsubGateway.subscribe(eventType, handler)
  }
}
