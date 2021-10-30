const Role = {
  ADMIN: 'admin',
  COORDINATOR: 'coordinator',
  AGENT: 'agent',
  USER: 'user'
}

export default Role

// There are cases when user have multiple role records, in that case we use this
// to decide the role with largest permission pool (the higher integer value the higher role position)
export const PriorityMap = {
  [Role.ADMIN]: 1,
  [Role.COORDINATOR]: 2,
  [Role.AGENT]: 3,
  [Role.USER]: 4
}
