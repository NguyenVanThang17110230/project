import ApplicationError from './ApplicationError'

describe('constructor()', () => {
  it('should return error object with correct name and code', () => {
    const errorCode = 'SAMPLE_ERROR_CODE'
    const error = new ApplicationError(errorCode)
    expect(error.name).toBe(ApplicationError.name)
    expect(error.code).toBe(errorCode)
  })
})
