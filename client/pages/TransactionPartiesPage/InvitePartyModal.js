import React from 'react'
import { Modal } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
// import emailMask from 'text-mask-addons/dist/emailMask'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
  TransactionAccessType,
  TransactionRole
} from '../../../common/models/Transaction'
import { getRoleLabel } from '../../view-models/User'
import Role from '../../../common/models/Role'
import { userService } from '../../services'

export default class InvitePartyModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      validateEmail: true
    }
  }

  _onSubmit = async (values, action) => {
    const { setSubmitting } = action
    try {
      await this._checkEmail(values.email, this.props.data)
      if (this.state.validateEmail) {
        setSubmitting(true)
        const { firstName, lastName, email, phoneNumber, access } = values
        await this.props.onSubmit({
          firstName,
          lastName,
          email,
          phoneNumber,
          access
        })
        this.props.onClose()
        toastr.success('Success')
      } else {
        toastr.warning('Must have at least one link agent account')
        setSubmitting(false)
      }
    } catch (e) {
      let msg
      switch (e.code) {
        default: {
          msg = e.message
        }
      }
      toastr.error(msg)
      setSubmitting(false)
    }
  }

  render () {
    const { data, onClose } = this.props
    const role = getRoleLabel(data.addPartyModalData)
    return (
      <Modal isOpen={role} toggle={onClose} id='invite-party-modal'>
        <div className='modal-header modal-header--change'>
          <div className='text-center w-100'>
            <h5
              className='modal-title text-uppercase font-weight-bold'
              id='exampleModalLabel'
            >
              Add {role}
            </h5>
            <small>
              All parties added will receive an email with their temporary
              password. <br />
              You will be notified once the party has opened the site and logged
              in.
            </small>
          </div>
          <button
            type='button'
            className='close bg-transparent'
            data-dismiss='modal'
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            access:
              data.addPartyModalData === 'transaction-coordinator'
                ? TransactionAccessType.FULL
                : ''
          }}
          onSubmit={this._onSubmit}
          validate={values => {
            let error = {}
            const regEmail = new RegExp(
              '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' +
                '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
            )
            if (
              values.firstName === '' ||
              values.lastName === '' ||
              values.email === '' ||
              values.phoneNumber === ''
            ) {
              error.buyerDetails = `${role} details are required`
            } else if (!regEmail.test(values.email)) {
              error.buyerDetails = 'Please enter the correct email format'
            } else if (values.phoneNumber.length < 9) {
              error.buyerDetails = 'Please enter the full field'
            } else if (!values.access) {
              error.access = 'Access is required'
            }
            return error
          }}
        >
          {({
            values,
            isValid,
            errors,
            isSubmitting,
            handleSubmit,
            handleChange
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='modal-body px-5 mx-2'>
                <div>
                  <h4 className='text-center'>{role} Details </h4>
                  <div className='row pt-3'>
                    <div className='col-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='First Name'
                          name='firstName'
                          onChange={handleChange}
                          value={values.firstName}
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Last Name'
                          name='lastName'
                          onChange={handleChange}
                          value={values.lastName}
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <input
                          // mask={emailMask}
                          className='form-control'
                          placeholder='Email Address'
                          name='email'
                          onChange={handleChange}
                          value={values.email}
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <PhoneInput
                        country={'us'}
                        enableSearch
                        onChange={value => {
                          handleChange({
                            target: { name: 'phoneNumber', value }
                          })
                        }}
                        value={values.phoneNumber}
                        placeholder='Phone Number'
                        className='form-control'
                      />
                    </div>
                  </div>
                  {errors.buyerDetails && (
                    <div className='text-danger text-center'>
                      {errors.buyerDetails}
                    </div>
                  )}
                </div>

                <h4 className='text-center mt-3'>Access</h4>
                <div
                  className='row text-center mt-4'
                  name='access'
                  onChange={handleChange}
                  value={values.access}
                >
                  {data.addPartyModalData === 'transaction-coordinator' ? (
                    <div className='col-12 transaction-type'>
                      <label>
                        <i
                          className='fas fa-users fa-4x '
                          style={{ color: '#73C7FB' }}
                        />
                        <h5 className='py-3 font-weight-normal'>Full Access</h5>
                        <input
                          type='radio'
                          name='access'
                          value={TransactionAccessType.FULL}
                          checked
                        />
                        <div>
                          <small>
                            With Full Access the party will be able to view all
                            documents, upload documents, assign signors on
                            documents they uploaded, and message all other
                            parties involved.
                          </small>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div className='col-6 transaction-type'>
                        <label>
                          <i
                            className='fas fa-users fa-4x '
                            style={{ color: '#73C7FB' }}
                          />
                          <h5 className='py-3 font-weight-normal'>
                            Full Access
                          </h5>
                          <input
                            type='radio'
                            name='access'
                            value={TransactionAccessType.FULL}
                          />
                          <div>
                            <small>
                              With Full Access the party will be able to view
                              all documents, upload documents, assign signors on
                              documents they uploaded, and message all other
                              parties involved.
                            </small>
                          </div>
                        </label>
                      </div>
                      <div className='col-6 transaction-type'>
                        <label>
                          <img src='/static/images/transactions/new-lease.png' />
                          <h5 className='py-3  font-weight-normal'>
                            Upload Only
                          </h5>
                          <input
                            type='radio'
                            name='access'
                            value={TransactionAccessType.UPLOAD_ONLY}
                          />
                          <div>
                            <small>
                              With Upload Only the party will only be able to
                              upload documents via the email link they are sent.
                              They will not be able to view documents, assign
                              signors, or message and other parties.
                            </small>
                          </div>
                        </label>
                      </div>
                    </React.Fragment>
                  )}
                </div>
                {errors.access && (
                  <div className='text-danger text-center'>{errors.access}</div>
                )}
                <div className='text-center my-5'>
                  <button
                    disabled={!isValid || isSubmitting}
                    type='submit'
                    className='btn bg-info text-white py-2 px-5'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    Send Invite
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    )
  }

  _checkEmail = async (email, data) => {
    this.setState({ validateEmail: true }) // reset validateEmail
    const checknewEmail = await this._checkNewEmail(email, data)
    if (checknewEmail) {
      return
    } else if (
      data.addPartyModalData === TransactionRole.BUYER_AGENT ||
      data.addPartyModalData === TransactionRole.SELLER_AGENT
    ) {
      ;(await this._checkTransactionParty(email, data)) &&
        this._checkTransactionInvite(data)
      return
    }
    this.setState({ validateEmail: true })
  }
  _checkTransactionInvite = data => {
    data.transaction.invitations.map(data => {
      if (
        data.role === TransactionRole.BUYER_AGENT ||
        data.role === TransactionRole.SELLER_AGENT
      ) {
        this.setState({ validateEmail: false })
      } else {
        this.setState({ validateEmail: true })
      }
    })
  }
  _checkTransactionParty = async (email, data) => {
    data.transaction.parties.map(async data => {
      if (
        data.role === TransactionRole.BUYER_AGENT ||
        data.role === TransactionRole.SELLER_AGENT
      ) {
        try {
          const user = await userService.getUserRole({ id: data.userId })
          if (user[0].roles[0].name === Role.AGENT) {
            this.setState({ validateEmail: true })
            return false
          } else {
            this.setState({ validateEmail: false })
            return false
          }
        } catch (e) {
          this.setState({ validateEmail: false })
          return false
        }
      }
    })
    return true
  }

  _checkNewEmail = async (email, data) => {
    try {
      const findEmail = await userService.getUserRole({
        email: encodeURIComponent(email)
      })
      const roleEmail = findEmail[0].roles[0].name
      if (
        roleEmail === Role.AGENT ||
        (data.addPartyModalData === TransactionRole.TRANSACTION_COORDINATOR &&
          roleEmail === Role.COORDINATOR)
      ) {
        this.setState({ validateEmail: true })
        return true
      } else if (roleEmail === Role.ADMIN || roleEmail === Role.COORDINATOR) {
        this.setState({ validateEmail: false })
        return true
      }
      return false
    } catch (e) {
      return false
    }
  }
}
