import EventEmitter from 'events'

export function create () {
  return new EventEmitter()
}
