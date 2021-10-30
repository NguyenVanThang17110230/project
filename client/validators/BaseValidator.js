import _ from 'lodash'
import validateJs from 'validate.js'
import ValidationError from '../errors/ValidationError'

export function validate (data, baseSpec) {
  const validationSpec = _.pick(baseSpec, Object.keys(data))
  const error = validateJs(data, validationSpec, { format: 'grouped' })
  if (error) {
    throw new ValidationError(error)
  }
}
