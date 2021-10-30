import React from 'react'
import Head from 'next/head'
import toastr from 'toastr'
import userOnly from '../../hocs/userOnly'
// import { Rank } from '../../../common/models/User'
import { userService } from '../../services'
import { Router } from '../../../common/routes'
import Role from '../../../common/models/Role'
import { ErrorCode } from '../../errors/ValidationError'
import { Constraint } from '../../../common/models/User'
import Error from 'next/error'

class EditManageAgents extends React.Component {
  // static async getInitialProps(ctx) {
  //   return {
  //     headerText: 'Manage Agents'
  //     // activities,
  //     // parties: otherParties,
  //     // myParties,
  //     // partyId: ctx.query.partyId
  //   }
  // }
  static async getInitialProps (ctx) {
    // const userId = ctx.store.getState().global.loginUser.data.id
    // const {
    //   accessType,
    //   transactions,
    //   activities,
    //   percentOfTransactions
    // } = await _fetchTransactions(userId)

    return {
      // namePage: 'editAgent',
      headerText: 'Edit Agent',
      toggleTimeline: false
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        emailVerified: false,
        role: Role.USER,
        rank: '',
        cash: ''
      },
      saving: false
    }
  }

  async componentDidMount () {
    try {
      const id = Router.query.idAgent
      const user = await userService.getUserFromId(id)
      user.role = (user.roles.length > 0 && user.roles[0].name) || Role.USER
      this.setState({ user })
    } catch (error) {
      Router.pushRoute('/manage-agents')
    }
  }

  render () {
    const { user, saving } = this.state
    const { t, currentUser } = this.props

    if (currentUser.roles[0].name !== Role.COORDINATOR) {
      return <Error statusCode={404} />
    }

    return (
      <div className='box-main'>
        <Head>
          <title>Edit Agents</title>
        </Head>
        <section className='content'>
          <div className=''>
            <div className='card shadow-sm rounded'>
              <div className='card-header'>
                <span className='card-title'>Edit manage form</span>
              </div>
              <div className='card-body'>
                <section className='content'>
                  <form role='form' onSubmit={this._submit}>
                    <div className='form-group'>
                      <label htmlFor='name'>First name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='input-firstName'
                        placeholder='First name'
                        onChange={this._updateUserField('firstName')}
                        value={user.firstName}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='name'>Last name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='input-lastName'
                        placeholder='Last name'
                        onChange={this._updateUserField('lastName')}
                        value={user.lastName}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email'>{t('common:email')}</label>
                      <input
                        type='email'
                        className='form-control'
                        id='input-email'
                        placeholder={t('common:email')}
                        onChange={this._updateUserField('email')}
                        value={user.email}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='role'>{t('common:role')}</label>
                      <select
                        className='form-control'
                        id='role'
                        // onChange={this._updateUserField('role')}
                        value={user.role}
                        disabled
                      >
                        {Object.keys(Role).map(item => (
                          <option key={item} value={Role[item]}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='row mx-0'>
                      <div className='form-group col-12 col-md-6 pl-0 card-first'>
                        <label>Rank</label>
                        <input
                          className='form-control'
                          value={user.rank}
                          disabled
                        />
                      </div>
                      <div className='form-group col-12 col-md-6 pr-0 card-last'>
                        <label>Agent total commission gain</label>
                        <input
                          className='form-control'
                          value={user.cash}
                          disabled
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='form-check'>
                        <input
                          id='checkbox'
                          type='checkbox'
                          className='form-check-input'
                          checked={!!user.emailVerified}
                          onChange={this._updateUserField('emailVerified')}
                        />
                        <label className='form-check-label' htmlFor='checkbox'>
                          {t('admin:emailVerified')}
                        </label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='form-check'>
                        <input
                          id='isInactive'
                          type='checkbox'
                          className='form-check-input'
                          checked={!!user.isInactive}
                          onChange={this._updateUserField('isInactive')}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='isInactive'
                        >
                          {t('admin:isInactive')}
                        </label>
                      </div>
                    </div>
                    <button
                      className='btn btn-add-new text-white th-font-w-5'
                      disabled={saving}
                    >
                      {t('common:save')}
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  _submit = async e => {
    e.preventDefault()

    const { t } = this.props
    this.setState({ saving: true })
    try {
      await userService.updateUser(this.state.user)
      toastr.success(t('common:saved'))
    } catch (e) {
      toastr.error(this._getErrorMsg(e))
    } finally {
      this.setState({ saving: false })
    }
  }

  _updateUserField = field => e => {
    switch (e.target.type) {
      case 'checkbox': {
        this.setState({
          user: {
            ...this.state.user,
            [field]: !this.state.user[field]
          }
        })
        break
      }
      default: {
        this.setState({ user: { ...this.state.user, [field]: e.target.value } })
      }
    }
  }

  _getErrorMsg = e => {
    switch (e.name) {
      case 'ValidationError': {
        const key = Object.keys(e.details)[0]
        const type = e.details[key][0]

        switch (key) {
          case 'name': {
            switch (type) {
              case ErrorCode.REQUIRED: {
                return 'Name is required'
              }
              case ErrorCode.INVALID_LENGTH: {
                return `Name must be within ${
                  Constraint.name.MAX_LENGTH
                } characters`
              }
            }
            break
          }
          case 'email': {
            switch (type) {
              case ErrorCode.REQUIRED: {
                return 'Email is required'
              }
              case ErrorCode.INVALID_EMAIL: {
                return 'Email must be valid'
              }
              case ErrorCode.INVALID_LENGTH: {
                return `Email must be within ${
                  Constraint.email.MAX_LENGTH
                } characters`
              }
              case ErrorCode.EMAIL_EXISTED: {
                return 'Email already existed'
              }
            }
            break
          }
          case 'password': {
            switch (type) {
              case ErrorCode.INVALID_LENGTH: {
                return `Password must be within ${
                  Constraint.password.MIN_LENGTH
                } - ${Constraint.password.MAX_LENGTH} characters`
              }
            }
          }
        }
      }
    }
    return e.message
  }
}

export default userOnly(EditManageAgents)
