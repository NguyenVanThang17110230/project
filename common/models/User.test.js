import { getRole, isAdmin } from './User'
import Role from './Role'

describe('isAdmin()', () => {
  it('should return false when user role is empty', () => {
    expect(isAdmin({})).toBe(false)
    expect(isAdmin({ roles: null })).toBe(false)
    expect(isAdmin({ roles: [] })).toBe(false)
  })

  it('should return true when user role is admin', () => {
    expect(isAdmin({ roles: [{ name: Role.ADMIN }] })).toBe(true)
  })
})

describe('getRole()', () => {
  it('should return role "user" by default if there is no role record', () => {
    expect(getRole({ name: 'user name' })).toBe(Role.USER)
    expect(getRole({ name: 'user name', roles: [] })).toBe(Role.USER)
  })

  it('should return role "admin" if user has "admin" role record', () => {
    const user = { name: 'user name', roles: [{ name: Role.ADMIN }] }
    expect(getRole(user)).toBe(Role.ADMIN)
  })

  it('should return role "admin" if user has both "admin" & "user" role records', () => {
    const user = {
      name: 'user name',
      roles: [{ name: Role.USER }, { name: Role.ADMIN }]
    }
    expect(getRole(user)).toBe(Role.ADMIN)
  })
})
