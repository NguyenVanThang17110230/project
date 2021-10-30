import { validateAvatarUpload, validateUser } from './UserValidator'
import ValidationError, { ErrorCode } from '../errors/ValidationError'
import { Constraint } from '../../common/models/User'

describe('validateUser()', () => {
  it('should throw ValidationError on for incorrect user name, email and password', () => {
    const invalidUser = {
      name: null,
      email: '1',
      password: '1'
    }
    const expectedError = new ValidationError({
      name: [ErrorCode.REQUIRED],
      email: [ErrorCode.INVALID_EMAIL],
      password: [ErrorCode.INVALID_LENGTH]
    })
    let caughtError
    try {
      validateUser(invalidUser)
    } catch (e) {
      caughtError = e
    }
    expect(caughtError.name).toEqual(expectedError.name)
    expect(caughtError.details).toEqual(expectedError.details)
  })

  it('should not throw error if user is valid', () => {
    const validUser = {
      name: 'User name',
      email: 'abc@gmail.com',
      password: '123456'
    }
    expect(() => validateUser(validUser)).not.toThrow()
  })
})

describe('validateAvatarUpload()', () => {
  it('should throw ValidationError if upload file is too large and file type is not supported', () => {
    const file = {
      size: Constraint.avatar.MAX_FILE_SIZE + 1,
      type: 'invalid_type'
    }
    const expectedError = new ValidationError([
      ErrorCode.INVALID_FILE_TYPE,
      ErrorCode.INVALID_FILE_SIZE
    ])
    let caughtError
    try {
      validateAvatarUpload(file)
    } catch (e) {
      caughtError = e
    }
    expect(caughtError.name).toEqual(expectedError.name)
    expect(caughtError.details).toEqual(expectedError.details)
  })

  it('should not throw error if upload file is valid', () => {
    const validFile = {
      size: Constraint.avatar.ALLOWED_FILE_TYPES,
      type: Constraint.avatar.ALLOWED_FILE_TYPES[0]
    }
    expect(() => validateUser(validFile)).not.toThrow()
  })
})
