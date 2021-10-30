import _ from 'lodash'
import Role, { PriorityMap } from './Role'

export const Constraint = {
  email: {
    MAX_LENGTH: 256
  },
  name: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256
  },
  password: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 50
  },
  avatar: {
    ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png'],
    MAX_FILE_SIZE: 1024 * 1024 // 2MB
    // MAX_FILE_SIZE: 2 * 1024 * 1024 // 2MB
  }
}

export const Rank = {
  AGENT: 'agent',
  EXECUTIVE_AGENT: 'executive-agent',
  COORDINATOR: 'transaction-coordinator'
}

export const Levels = ['AGENT', 'EXECUTIVE_AGENT']

export const CapLimit = {
  AGENT: 400000
  // EXECUTIVE_AGENT: 800000
}

export const Languages = ['en', 'vn']

export function isAdmin (user) {
  return !!user.roles && user.roles.some(role => role.name === Role.ADMIN)
}

export function isCoordinator (user) {
  return !!user.roles && user.roles.some(role => role.name === Role.COORDINATOR)
}

export function isUser (user) {
  return !!user.roles && user.roles.some(role => role.name === Role.USER)
}

export function getRole (user) {
  if (_.isEmpty(user.roles)) {
    return Role.USER
  }

  const role = _.minBy(user.roles, role => PriorityMap[role.name])

  return role.name
}
