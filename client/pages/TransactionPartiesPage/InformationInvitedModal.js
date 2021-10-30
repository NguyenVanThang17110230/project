import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik } from 'formik'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default class InformationInvitedModal extends Component {
  render () {
    let {
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      licenseNumber,
      role
    } = this.props.toggleModalInfoTransactionParties || ''

    return (
      <Modal
        isOpen={this.props.toggleModalInfoTransactionParties}
        toggle={this.props._CloseInfoTransactionParties}
        id='create-transaction-party-profile-modal'
      >
        <div className='modal-header modal-header--change'>
          <div className='text-center w-100'>
            <h5 className='modal-title font-weight-bold' id='exampleModalLabel'>
              Transaction Party Information
            </h5>
            {/* <small>
              Once you enter your information below, you will be able to
              access the transaction you have been added to.
            </small> */}
          </div>
          <button
            type='button'
            className='close bg-transparent'
            data-dismiss='modal'
            onClick={this.props._CloseInfoTransactionParties}
          >
            &times;
          </button>
        </div>
        <Formik
          initialValues={{
            firstName: this.props.toggleModalInfoTransactionParties
              ? firstName
              : '',
            lastName: this.props.toggleModalInfoTransactionParties
              ? lastName
              : '',
            email: this.props.toggleModalInfoTransactionParties ? email : '',
            phoneNumber: this.props.toggleModalInfoTransactionParties
              ? phoneNumber
              : '',
            company: this.props.toggleModalInfoTransactionParties
              ? company
              : '',
            licenseNumber: this.props.toggleModalInfoTransactionParties
              ? licenseNumber
              : ''
          }}
          // onSubmit={this._onSubmitModalUpdateMyProfile}
          // validate={values => {
          //   let error = {}
          //   if (partyTarget.role !== 'seller' && partyTarget.role !== 'buyer') {
          //     if (
          //       values.firstName === '' ||
          //       values.lastName === '' ||
          //       values.email === '' ||
          //       values.phoneNumber.length < 14 ||
          //       values.company === '' ||
          //       values.licenseNumber === ''
          //     ) {
          //       error.details = `${partyTarget.role} details are required`
          //     }
          //   } else {
          //     if (
          //       values.firstName.length < 1 ||
          //       values.lastName.length < 1 ||
          //       values.email.length < 1 ||
          //       values.phoneNumber.length < 14
          //     ) {
          //       error.details = `${partyTarget.role} details are required`
          //     }
          //   }

          //   return error
          // }}
        >
          {({
            values,
            errors,
            isValid,
            isSubmitting,
            handleSubmit,
            handleChange
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='modal-body px-5 mx-2'>
                <div>
                  {/* <h4 className='text-center'>{getRoleLabel(welcomeInvitation.role)}</h4> */}
                  <div className='row pt-3'>
                    <div className='col-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='First Name'
                          name='firstName'
                          onChange={handleChange}
                          value={values.firstName}
                          disabled
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
                          disabled
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <input
                          disabled
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
                        disabled
                      />
                    </div>
                    {role !== 'seller' && role !== 'buyer' && (
                      <React.Fragment>
                        <div className='col-6'>
                          <div className='form-group'>
                            <input
                              disabled
                              className='form-control'
                              placeholder='Company'
                              name='company'
                              onChange={handleChange}
                              value={values.company}
                            />
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='form-group'>
                            <input
                              disabled
                              className='form-control'
                              placeholder='License Number'
                              name='licenseNumber'
                              onChange={handleChange}
                              value={values.licenseNumber}
                            />
                          </div>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                  {errors.details && (
                    <div className='text-danger text-center'>
                      {errors.details}
                    </div>
                  )}
                </div>
                {/* <div className='text-center my-5'>
                  <button
                    disabled={errors.details}
                    type='submit'
                    className='btn btn-info text-white py-2 px-5'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    Access Transaction
                  </button>
                </div> */}
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    )
  }
}
