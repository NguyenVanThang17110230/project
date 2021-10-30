import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import {
  TransactionRole,
  TransactionAccessType
} from '../../../common/models/Transaction'
import { transactionService } from '../../services'
import PhoneInput from 'react-phone-input-2'

class EditMemberModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      originalMember: null
    }
  }
  handleSubmit = async (values, action) => {
    const { setSubmitting } = action
    const { dataUser } = this.props
    try {
      const { firstName, lastName, role, phoneNumber, access } = values
      setSubmitting(true)
      await transactionService.updateTransactionPartyById(dataUser.id, {
        firstName,
        lastName,
        role,
        phoneNumber,
        access
      })
      setSubmitting(false)
      toastr.success('Success')
      this.props.toggleMemberModal()
      this.props.realTimeEdit()
    } catch (e) {
      let msg
      switch (e.code) {
        default: {
          msg = e.message
        }
      }
      toastr.error(msg)
      this.props.realTimeEdit()
      setSubmitting(false)
    }
  }

  render () {
    const { isShowEditMemberModal, toggleMemberModal, dataUser } = this.props
    return (
      <Modal isOpen={isShowEditMemberModal} toggle={toggleMemberModal}>
        <div className='page-button-new'>
          <div
            className='form-add-member'
            // style={{ display: 'none' }}
          >
            <div className='modal-header modal-header--change' id='bg-gr'>
              <div className='text-center w-100'>
                <h5 className='modal-title new-add' id='exampleModalLabel'>
                  Edit Member
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
                firstName: dataUser.firstName,
                lastName: dataUser.lastName,
                email: dataUser.email,
                role: dataUser.role,
                phoneNumber: dataUser.phoneNumber,
                access: dataUser.access
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
                handleChange
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='d-flex justify-content-center'>
                    <div
                      className='modal-body px-5 mx-2'
                      id='main-body-add-member'
                    >
                      <div className='row'>
                        <div className='col'>
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
                        <div className='col'>
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
                        <div className='col-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Email </label>
                            <input
                              type='mail'
                              className='form-control'
                              placeholder='Type here'
                              name='email'
                              onChange={handleChange}
                              value={values.email}
                              disabled
                            />
                            {errors.email && (
                              <small className='text-danger'>
                                {errors.email}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className='col-6'>
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
                      <div className='row'>
                        <div className='col-6'>
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
                        <div className='col-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Access</label>
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
                              <option value={TransactionAccessType.UPLOAD_ONLY}>
                                Upload Only
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 text-center'>
                    <button
                      type='submit'
                      className='btn btn-add-new mb-5 text-white th-11'
                      disabled={isSubmitting || !isValid}
                    >
                      {isSubmitting && (
                        <span className='spinner-border spinner-border-sm mr-2' />
                      )}
                      Save
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
export default EditMemberModal
