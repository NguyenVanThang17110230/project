import { validateUser } from '../validators/UserValidator'

export default class UserInvitationService {
  constructor (options) {
    this.userInvitationGateway = options.userInvitationGateway
  }

  async addNewInvitation ({ firstName, lastName, email, role }) {
    validateUser({ firstName, lastName, email })
    return this.userInvitationGateway.addNewInvitation({
      firstName,
      lastName,
      email,
      role
    })
  }
  async getInvitationById (id) {
    return this.userInvitationGateway.getInvitationById(id)
  }
}
