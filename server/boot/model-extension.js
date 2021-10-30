import RoleModel from '../../common/models/Role'

export default function (app) {
  const { Role } = app.models

  Role.createDefaultRoles = async function () {
    const promises = Object.keys(RoleModel).map(key =>
      Role.findOrCreate(
        { where: { name: RoleModel[key] } },
        { name: RoleModel[key] }
      )
    )
    return Promise.all(promises)
  }
}
