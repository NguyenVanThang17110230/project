import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import { transactionService } from '../../services'
import {
  TransactionRole,
  TransactionAccessType
} from '../../../common/models/Transaction'
import PhoneInput from 'react-phone-input-2'
class AddNewMemberModal extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleSubmit = async (values, action) => {
    const { setSubmitting } = action
    const { transactionId, toggleMemberModal, fetchData } = this.props
    if (!transactionId) {
      toastr.error('')
    } else {
      try {
        let myAccess
        if (values.role === TransactionRole.VENDORS) {
          myAccess = TransactionAccessType.UPLOAD_VENDOR
        } else {
          myAccess = values.access
        }
        setSubmitting(true)
        await transactionService.createTransactionParty({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          access: myAccess,
          role: values.role,
          transactionId
        })
        toggleMemberModal()
        fetchData()
        toastr.success('Success')
      } catch (e) {
        toastr.error(e.message)
      } finally {
        setSubmitting(false)
      }
    }
  }

  _displayFirstNameAndLastNameByMail = data => {
    const { dataAllUser } = this.props
    const dataSe = dataAllUser.filter(x => x.email === data)
    if (dataSe && dataSe[0]) {
      if (dataSe[0].firstName && dataSe[0].lastName) {
        return [dataSe[0].firstName, dataSe[0].lastName]
      } else {
        if (dataSe[0].firstName) {
          return dataSe[0].firstName
        }
        if (dataSe[0].lastName) {
          return dataSe[0].lastName
        } else {
          if (dataSe[0].name) {
            const name = dataSe[0].name.split(' ')
            return [name[0], name[1]]
          }
        }
      }
    } else {
      return null
    }
  }
  _displayPhoneNumberByMail = data => {
    const { dataAllUser } = this.props
    const dataSe = dataAllUser.filter(x => x.email === data)
    if (dataSe && dataSe[0]) {
      if (dataSe[0].phone) {
        return dataSe[0].phone
      }
    }
  }

  render () {
    const { isShowMemberModal, toggleMemberModal, memberRole } = this.props
    return (
      <Modal isOpen={isShowMemberModal} toggle={toggleMemberModal}>
        <div className='page-button-new'>
          <div
            className='form-add-member'
            // style={{ display: 'none' }}
          >
            <div className='modal-header modal-header--change' id='bg-gr'>
              <div className='text-center w-100'>
                <h5 className='modal-title new-add' id='exampleModalLabel'>
                  Add New Member
                </h5>
              </div>
              <div>
                <button
                  id='close-modal'
                  type='button'
                  className='close bg-transparent '
                  data-dismiss='modal'
                  onClick={() => toggleMemberModal()}
                >
                  &times;
                </button>
              </div>
            </div>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                role: memberRole || TransactionRole.SELLER_AGENT,
                phoneNumber: '',
                access: TransactionAccessType.FULL
              }}
              onSubmit={(values, action) => this.handleSubmit(values, action)}
              validate={values => {
                let error = {}
                if (values.firstName === '') {
                  error.firstName = 'First name is required'
                } else if (values.lastName === '') {
                  error.lastName = 'Last name is required'
                } else if (values.email === '') {
                  error.email = 'Email is required'
                }
                return error
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                isSubmitting,
                handleSubmit,
                handleChange,
                setFieldValue
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='d-flex justify-content-center'>
                    <div
                      className='modal-body px-5 mx-2'
                      id='main-body-add-member'
                    >
                      <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Email </label>
                            <input
                              type='mail'
                              className='form-control'
                              placeholder='Type here'
                              name='email'
                              onChange={event => {
                                setFieldValue(
                                  'email',
                                  event.currentTarget.value
                                )
                                if (event.currentTarget.value !== '') {
                                  const dataView = this._displayFirstNameAndLastNameByMail(
                                    event.currentTarget.value
                                  )
                                  const phone = this._displayPhoneNumberByMail(
                                    event.currentTarget.value
                                  )
                                  if (dataView) {
                                    if (dataView[0]) {
                                      setFieldValue('firstName', dataView[0])
                                    }
                                    if (dataView[1]) {
                                      setFieldValue('lastName', dataView[1])
                                    }
                                  } else {
                                    setFieldValue('firstName', '')
                                    setFieldValue('lastName', '')
                                  }

                                  if (phone) {
                                    setFieldValue('phoneNumber', phone)
                                  } else {
                                    setFieldValue('phoneNumber', '')
                                  }
                                }
                              }}
                              value={values.email}
                            />
                            {errors.email && (
                              <small className='text-danger'>
                                {errors.email}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Phone Number{' '}
                            </label>
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
                      </div>
                      <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6'>
                          <div className='form-group '>
                            <label className='tittle-mini-ver'>
                              First Name
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Type here'
                              onChange={handleChange}
                              value={values.firstName}
                              name='firstName'
                            />
                            {errors.firstName && (
                              <small className='text-danger'>
                                {errors.firstName}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                          <div className='form-group '>
                            <label className='tittle-mini-ver'>Last Name</label>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Type here'
                              name='lastName'
                              onChange={handleChange}
                              value={values.lastName}
                            />
                            {errors.lastName && (
                              <small className='text-danger'>
                                {errors.lastName}
                              </small>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Role</label>
                            <select
                              id='role'
                              className='form-control'
                              name='role'
                              onChange={handleChange}
                              value={values.role}
                            >
                              <option value={TransactionRole.SELLER_AGENT}>
                                Seller’s Agent
                              </option>
                              <option value={TransactionRole.BUYING_AGENT}>
                                Buyer’s Agent
                              </option>
                              <option value={TransactionRole.BUYER}>
                                Buyer
                              </option>
                              <option value={TransactionRole.SELLER}>
                                Seller
                              </option>
                              <option
                                value={TransactionRole.TRANSACTION_COORDINATOR}
                              >
                                Transaction Coordinator
                              </option>
                              <option value={TransactionRole.ESCROW}>
                                Escrow
                              </option>
                              <option value={TransactionRole.TITLE}>
                                Title
                              </option>
                              <option value={TransactionRole.LENDER}>
                                Lender
                              </option>
                              <option value={TransactionRole.HOME_INSPECTOR}>
                                Home Inspector
                              </option>
                              <option value={TransactionRole.TERMITE}>
                                Termite
                              </option>
                              <option value={TransactionRole.VENDORS}>
                                Vendors
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Access</label>
                            {values.role !== TransactionRole.VENDORS ? (
                              <select
                                id='access'
                                className='form-control'
                                name='access'
                                onChange={handleChange}
                                value={values.access}
                              >
                                <option value={TransactionAccessType.FULL}>
                                  Full Access
                                </option>
                                <option
                                  value={TransactionAccessType.UPLOAD_ONLY}
                                >
                                  Upload Only
                                </option>
                              </select>
                            ) : (
                              <select
                                id='access'
                                className='form-control'
                                name='access'
                                onChange={handleChange}
                                value={TransactionAccessType.UPLOAD_VENDOR}
                              >
                                <option
                                  value={TransactionAccessType.UPLOAD_VENDOR}
                                >
                                  Vendor upload
                                </option>
                              </select>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 d-flex justify-content-center'>
                    <button
                      type='submit'
                      className='btn btn-add-new mb-5 text-white th-11 d-flex align-items-center'
                      disabled={isSubmitting || !isValid}
                    >
                      {isSubmitting && (
                        <span className='spinner-border spinner-border-sm mr-2' />
                      )}
                      Add Member
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    )
  }
}

export default AddNewMemberModal
