export default class PubsubGateway {
  constructor ({ pubsubConnector }) {
    this.pubsubConnector = pubsubConnector
  }

  emit (eventName, data) {
    this.pubsubConnector.emit(eventName, data)
  }

  subscribe (eventName, handler) {
    this.pubsubConnector.on(eventName, handler)
  }
}
