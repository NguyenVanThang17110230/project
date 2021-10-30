import UserService from './UserService'
import UserGateway from '../gateways/UserGateway'
import RoleGateway from '../gateways/RoleGateway'

jest.mock('../gateways/UserGateway')
jest.mock('../gateways/RoleGateway')

const TEST_USERS = [
  {
    id: '5baa01d35f2f003ad54a5503',
    name: 'Hao Tang 2',
    preferredLanguage: 'en',
    email: 'haotang.io@gmail.com',
    emailVerified: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5baa01d35f2f003ad54a5502',
    name: 'Hao Tang 3',
    preferredLanguage: 'en',
    email: 'haotang.io1@gmail.com',
    emailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

let userService, mockedUserGateway, mockedRoleGateway

beforeEach(() => {
  mockedUserGateway = new UserGateway()
  mockedRoleGateway = new RoleGateway()
  mockedRoleGateway.findOne = jest.fn().mockImplementation(() => {
    return { id: 'random_role_id' }
  })

  userService = new UserService({
    userGateway: mockedUserGateway,
    roleGateway: mockedRoleGateway
  })
})

afterEach(() => {
  RoleGateway.mockClear()
})

describe('getUsersForAdmin()', () => {
  it('should call UserGateway to get user list and total count', async () => {
    mockedUserGateway.addUsers(TEST_USERS)
    const result = await userService.getUsersForAdmin({})
    expect(result).toEqual({ total: TEST_USERS.length, users: TEST_USERS })
  })
})

describe('getRolesForAdmin()', () => {
  it('should call RoleGateway to get role list', async () => {
    await userService.getRolesForAdmin({})
    expect(mockedRoleGateway.find).toHaveBeenCalledTimes(1)
  })
})

describe('createUser()', () => {
  it('should create and return created user and store it in user collection', async () => {
    const data = {
      name: 'Hao Tang 2',
      email: 'haotang.io@gmail.com',
      password: '12345678'
    }
    const result = await userService.createUser({
      ...data,
      role: 'admin'
    })
    const count = await userService.count({})

    expect(result).toMatchObject(data)
    expect(count).toEqual(1)
    expect(mockedRoleGateway.findOne).toHaveBeenCalled()
    expect(mockedRoleGateway.createPrincipal).toHaveBeenCalled()
  })
})

describe('getUserFromId()', () => {
  it('should update user data with new information', async () => {
    mockedUserGateway.addUsers(TEST_USERS)
    const result = await userService.getUserFromId(TEST_USERS[0].id)
    const expected = TEST_USERS[0]
    expect(result).toEqual(expected)
  })
})

describe('updateUser()', () => {
  it('should update user data with new information', async () => {
    mockedUserGateway.addUsers(TEST_USERS)

    const newName = 'new username'
    const targetUser = TEST_USERS[0]
    const result = await userService.updateUser({
      ...targetUser,
      name: newName,
      role: 'admin'
    })

    const expectedResult = { ...targetUser, name: newName }
    expect(result).toEqual(expectedResult)
    expect(mockedRoleGateway.findOne).toHaveBeenCalled()
    expect(mockedRoleGateway.createPrincipal).toHaveBeenCalled()
  })
})

describe('deleteUserWithId()', () => {
  it('should remove user with provided id and return that removed user', async () => {
    mockedUserGateway.addUsers(TEST_USERS)
    const result = await userService.deleteUserWithId(TEST_USERS[0].id)
    const remaining = await userService.count(TEST_USERS[0].id)
    expect(result).toBe(TEST_USERS[0])
    expect(remaining).toBe(TEST_USERS.length - 1)
  })
})

describe('count()', () => {
  it('should return the number of users satisfying filter condition', async () => {
    mockedUserGateway.addUsers(TEST_USERS)
    const result = await userService.count({})
    expect(result).toBe(TEST_USERS.length)
  })
})
