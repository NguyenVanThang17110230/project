import ValidationError, {
  ErrorCode as ValidationErrorCode
} from '../errors/ValidationError'
import { Constraint } from '../../common/models/User'
import { validate } from './BaseValidator'

const Spec = {
  email: {
    presence: {
      message: `^${ValidationErrorCode.REQUIRED}`,
      allowEmpty: false
    },
    email: { message: `^${ValidationErrorCode.INVALID_EMAIL}` },
    length: {
      maximum: Constraint.email.MAX_LENGTH,
      message: `^${ValidationErrorCode.INVALID_LENGTH}`
    }
  },
  password: {
    presence: {
      message: `^${ValidationErrorCode.REQUIRED}`,
      allowEmpty: false
    },
    length: {
      minimum: Constraint.password.MIN_LENGTH,
      maximum: Constraint.password.MAX_LENGTH,
      message: `^${ValidationErrorCode.INVALID_LENGTH}`
    }
  },
  firstName: {
    presence: {
      message: `^${ValidationErrorCode.REQUIRED}`,
      allowEmpty: false
    },
    length: {
      minimum: Constraint.name.MIN_LENGTH,
      maximum: Constraint.name.MAX_LENGTH,
      message: `^${ValidationErrorCode.INVALID_LENGTH}`
    }
  },
  lastName: {
    presence: {
      message: `^${ValidationErrorCode.REQUIRED}`,
      allowEmpty: false
    },
    length: {
      minimum: Constraint.name.MIN_LENGTH,
      maximum: Constraint.name.MAX_LENGTH,
      message: `^${ValidationErrorCode.INVALID_LENGTH}`
    }
  }
}

export function validateUser (userData) {
  validate(userData, Spec)
}

export function validateAvatarUpload (file) {
  const errorCodes = []

  if (!Constraint.avatar.ALLOWED_FILE_TYPES.includes(file.type)) {
    errorCodes.push(ValidationErrorCode.INVALID_FILE_TYPE)
  }

  if (file.size > Constraint.avatar.MAX_FILE_SIZE) {
    errorCodes.push(ValidationErrorCode.INVALID_FILE_SIZE)
  }

  if (errorCodes.length) {
    throw new ValidationError(errorCodes)
  }
}
