import ValidationError from './ValidationError'

describe('constructor()', () => {
  it('should return error object with correct name and details', () => {
    const details = {
      name: ['REQUIRED'],
      email: ['INVALID_EMAIL']
    }
    const error = new ValidationError(details)
    expect(error.name).toBe(ValidationError.name)
    expect(error.details).toBe(details)
  })
})
