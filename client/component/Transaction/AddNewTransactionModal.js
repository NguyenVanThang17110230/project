import React, { Component } from 'react'
import { Formik } from 'formik'
import { Modal } from 'reactstrap'
import toastr from 'toastr'
import Cookies from 'js-cookie'
import { Router } from '../../../common/routes'
import { transactionService } from '../../services'
import {
  MAX_FILE_SIZE,
  TransactionType,
  TransactionTypeStatus
} from '../../../common/models/Transaction'

class AddNewTransactionModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSubmit: true,
      setView: 0,
      src: ''
    }
  }

  //
  _onSubmit = async (values, action) => {
    const { setSubmitting } = action
    try {
      const {
        address,
        imageURL,
        url,
        description,
        closingDateV,
        transactionType,
        transactionTypeStatus,
        status
      } = values
      var closingDate
      if (!closingDateV) {
        closingDate = new Date(0)
      } else {
        closingDate = closingDateV
      }

      setSubmitting(true)
      const newTransaction = await transactionService.createTransaction({
        ownerId: this.props.currentUser.id,
        address,
        imageURL,
        url,
        description,
        closingDate,
        transactionType,
        transactionTypeStatus,
        status
      })
      if (imageURL) {
        await transactionService.createMainImage(newTransaction.id, imageURL)
      }
      setSubmitting(false)
      toastr.success('Success')
      if (this.props.currentUser.roles[0].name === 'agent') {
        Cookies.set('add_new_transaction', newTransaction.id)
      }
      this.props.toggleMemberModal()
      Router.pushRoute(`/my-transactions/${newTransaction.id}`)
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
  //
  _nextNew = () => {
    var view = document.getElementsByClassName('second-new-all')
    var active = document.getElementsByClassName('activeNew')
    var blue = document.getElementsByClassName('name-test')
    var blueNext = document.getElementsByClassName('details-test')
    var blue2 = document.getElementsByClassName('finish-test')
    var blueNext2 = document.getElementsByClassName('details-test')
    ;[...active].forEach(acT => {
      acT.classList.remove('activeNew')
    })
    view[0].classList.add('activeNew')
    blue[0].classList.add('activeBl')
    blueNext[0].classList.add('activeBlN')
    blue2[0].classList.remove('activeBlN_f')
    blueNext2[0].classList.remove('activeBl_f')
  }
  _nextFinal = () => {
    var view = document.getElementsByClassName('final-new-all')
    var active = document.getElementsByClassName('activeNew')
    var blue = document.getElementsByClassName('details-test')
    var blueNext = document.getElementsByClassName('finish-test')
    ;[...active].forEach(acT => {
      acT.classList.remove('activeNew')
    })
    view[0].classList.add('activeNew')
    blue[0].classList.add('activeBl_f')
    blueNext[0].classList.add('activeBlN_f')
  }
  _backFirst = () => {
    var view = document.getElementsByClassName('first-new-all')
    var active = document.getElementsByClassName('activeNew')
    var blue = document.getElementsByClassName('name-test')
    var blueNext = document.getElementsByClassName('details-test')
    ;[...active].forEach(acT => {
      acT.classList.remove('activeNew')
    })
    view[0].classList.add('activeNew')
    blue[0].classList.remove('activeBl')
    blueNext[0].classList.remove('activeBlN')
  }
  //
  _previewImage = image => {
    const img = document.querySelector('.new-image')
    const preI = document.querySelector('.view-input')
    let self = this
    if (image) {
      const reader = new window.FileReader()
      reader.addEventListener('load', function () {
        const result = reader.result
        img.classList.add('hide-ne')
        if (preI) {
          preI.src = result
        }
        self.setState({
          src: result
        })
      })
      reader.readAsDataURL(image)
    }
  }
  //
  render () {
    const { isToggleModalNewTransaction, toggleMemberModal } = this.props
    const { setView } = this.state
    return (
      <div>
        <Modal
          isOpen={isToggleModalNewTransaction}
          toggle={toggleMemberModal}
          id='new-transaction-modal'
        >
          <div className='modal-header modal-header--change' id='bg-gr'>
            <div className='text-center w-100'>
              <h5 className='modal-title new-add' id='exampleModalLabel'>
                Add New Transaction
              </h5>
              <div className='test-circle'>
                <div className='name-test'>
                  <div className='name-one'>1</div>
                  <h4>Name</h4>
                </div>
                <div className='details-test'>
                  <div className='details-two'>2</div>
                  <h4>Details</h4>
                </div>
                <div className='finish-test'>
                  <div className='finish-three'>3</div>
                  <h4>Finish</h4>
                </div>
              </div>
            </div>
            <button
              type='button'
              className='close bg-transparent close-new'
              data-dismiss='modal'
              onClick={toggleMemberModal}
              // onClick = {this._hideM}
            >
              &times;
            </button>
          </div>
          <Formik
            initialValues={{
              address: '',
              imageURL: '',
              url: '',
              description: '',
              closingDateV: '',
              transactionType: '',
              transactionTypeStatus: '',
              status: 'active'
            }}
            onSubmit={this._onSubmit}
            validate={values => {
              let error = {}
              // error.start = 'Address is required'
              if (values.imageURL && values.imageURL.size > MAX_FILE_SIZE) {
                error.imageURL = 'The file you have selected is too large'
              }
              // if (values.address !== '') {
              //   this.setState({
              //     isSubmit: false
              //   })
              // }
              return error
            }}
          >
            {({
              values,
              errors,
              isSubmitting,
              handleSubmit,
              handleChange,
              setFieldValue,
              touched,
              isValid
            }) => (
              <form onSubmit={handleSubmit}>
                <div className='modal-body px-5 mx-2' id='main-body'>
                  {setView === 0 && (
                    <div className='first-new-all activeNew'>
                      <h4
                        className='text-left tittle-mini'
                        style={{ marginLeft: '10px' }}
                      >
                        Property Address
                      </h4>
                      <div className='first-new'>
                        <div className=' row pt-3' style={{ width: '100%' }}>
                          <div className='col-12'>
                            <div className='form-group'>
                              <input
                                className='form-control is-invalidval'
                                placeholder='Type Here'
                                name='address'
                                onChange={handleChange}
                                value={values.address}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={async () => {
                            await this.setState({ setView: 1 })
                            await this._nextNew()
                          }}
                          className='btn-next next-two'
                        >
                          Next
                        </div>
                      </div>

                      {errors && !values.address ? (
                        <div className='text-danger text-center'>
                          Address is required
                        </div>
                      ) : (
                        <div className='text-danger text-center'>
                          {errors.address}
                        </div>
                      )}
                    </div>
                  )}
                  {setView === 1 && (
                    <div className='second-new-all'>
                      <h4 className='text-left tittle-mini'>
                        Property Details
                      </h4>
                      <div className='second-new'>
                        <div className='row pt-3'>
                          <div className='col-12'>
                            <div className='form-group'>
                              <label className='tittle-mini-ver'>
                                Main Image
                              </label>
                              <div className='image-upload-wrap'>
                                <input
                                  className='form-control new-image'
                                  placeholder='Type Here'
                                  name='imageURL'
                                  type='file'
                                  accept='image/*'
                                  onChange={event => {
                                    setFieldValue(
                                      'imageURL',
                                      event.currentTarget.files[0]
                                    )
                                    this._previewImage(
                                      event.currentTarget.files[0]
                                    )
                                  }}
                                />
                                <div className='drag-text'>
                                  <h3>Add image</h3>
                                </div>
                                <img
                                  className='view-input'
                                  src='#'
                                  alt=''
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className='col-12'>
                            <div className='form-group'>
                              <label className='tittle-mini-ver'>URL</label>
                              <input
                                className='form-control'
                                placeholder='Add URL'
                                name='url'
                                type='text'
                                onChange={handleChange}
                                value={values.url}
                              />
                            </div>
                          </div>
                          <div className='col-12'>
                            <div className='form-group'>
                              <label className='tittle-mini-ver'>
                                Description
                              </label>
                              <textarea
                                className='form-control'
                                placeholder='Add Description'
                                rows={3}
                                name='description'
                                onChange={handleChange}
                                value={values.description}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='prev-next'>
                        <div
                          onClick={async () => {
                            await this.setState({ setView: 0 })
                            await this._backFirst()
                          }}
                          className='btn-prev'
                        >
                          Back
                        </div>
                        <div
                          onClick={async () => {
                            await this.setState({ setView: 2 })
                            await this._nextFinal()
                          }}
                          className='btn-next next-three'
                        >
                          Next
                        </div>
                      </div>
                      {errors && values.imageURL && (
                        <div className='text-danger text-center'>
                          {errors.imageURL}
                        </div>
                      )}
                    </div>
                  )}
                  {setView === 2 && (
                    <div className='final-new-all'>
                      <h4 className='text-left mt-3 tittle-mini'>
                        {values.address}
                      </h4>
                      <div className='row pt-2'>
                        <div className='col-12'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Main Image
                            </label>
                            <div className='main-image-view'>
                              <div className='image-new'>
                                <img
                                  className='preview-image'
                                  src={
                                    this.state.src
                                      ? this.state.src
                                      : '/static/images/image-default.png'
                                  }
                                  alt=''
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Expected Closing Date
                            </label>
                            <input
                              className='form-control'
                              type='date'
                              defaultValue='2011-08-19'
                              id='example-date-input'
                              name='closingDateV'
                              onChange={handleChange}
                              value={values.closingDateV}
                            />
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Transaction Type
                            </label>
                            <select
                              className='custom-select mr-sm-2'
                              id='text-select'
                              onChange={handleChange}
                              value={values.transactionType}
                              name='transactionType'
                            >
                              <option value=''>None</option>
                              <option value={TransactionType.NEW_PURCHASE}>
                                Purchase
                              </option>
                              <option
                                value={TransactionType.NEW_LISTING_FOR_SALE}
                              >
                                Listing for sale
                              </option>
                              <option
                                value={TransactionType.NEW_LISTING_FOR_LEASE}
                              >
                                Listing for lease
                              </option>
                              <option value={TransactionType.NEW_LEASE}>
                                Lease
                              </option>
                              <option
                                value={TransactionType.NEW_REAL_ESTATE_OTHER}
                              >
                                Real estate other
                              </option>
                              <option value={TransactionType.NEW_OTHER}>
                                Other
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Transaction type
                            </label>
                            {values.transactionType === 'new-purchase' && (
                              <select
                                className='custom-select mr-sm-2'
                                id='inlineFormCustomSelect2'
                                onChange={handleChange}
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_OFFER}
                                >
                                  Pre-offer
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW}
                                >
                                  Escrow
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW_CLOSE}
                                >
                                  Escrow close
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option value={TransactionTypeStatus.TTS_SOLD}>
                                  Sold
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                              </select>
                            )}
                            {values.transactionType ===
                              'new-listing-for-sale' && (
                              <select
                                className='custom-select mr-sm-2'
                                id='inlineFormCustomSelect2'
                                onChange={handleChange}
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_LISTING}
                                >
                                  Pre-listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_PRIVATE_LISTING
                                  }
                                >
                                  Private listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_ACTIVE_LISTING
                                  }
                                >
                                  Active listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW}
                                >
                                  Escrow
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW_CLOSE}
                                >
                                  Escrow close
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option value={TransactionTypeStatus.TTS_SOLD}>
                                  Sold
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                              </select>
                            )}
                            {values.transactionType ===
                              'new-listing-for-lease' && (
                              <select
                                className='custom-select mr-sm-2'
                                id='inlineFormCustomSelect2'
                                onChange={handleChange}
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_LISTING}
                                >
                                  Pre-listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_PRIVATE_LISTING
                                  }
                                >
                                  Private listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_ACTIVE_LISTING
                                  }
                                >
                                  Active listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_LEASED}
                                >
                                  Leased
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                              </select>
                            )}
                            {values.transactionType === 'new-lease' && (
                              <select
                                className='custom-select mr-sm-2'
                                id='inlineFormCustomSelect2'
                                onChange={handleChange}
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_OFFER}
                                >
                                  Pre-offer
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_LEASED}
                                >
                                  Leased
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                              </select>
                            )}
                            {values.transactionType ===
                              'new-real-estate-other' && (
                              <select
                                className='custom-select mr-sm-2'
                                id='inlineFormCustomSelect2'
                                onChange={handleChange}
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option value={TransactionTypeStatus.TTS_NEW}>
                                  New
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_IN_PROCESS}
                                >
                                  In-process
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW}
                                >
                                  Escrow
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW_CLOSE}
                                >
                                  Escrow close
                                </option>
                                <option value={TransactionTypeStatus.TTS_DONE}>
                                  Done
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                              </select>
                            )}
                            {values.transactionType === 'new-other' && (
                              <select
                                className='custom-select mr-sm-2'
                                id='inlineFormCustomSelect2'
                                onChange={handleChange}
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option value={TransactionTypeStatus.TTS_NEW}>
                                  New
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_IN_PROCESS}
                                >
                                  In-process
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option value={TransactionTypeStatus.TTS_DONE}>
                                  Done
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                              </select>
                            )}
                            {values.transactionType === '' && (
                              <select
                                className='custom-select mr-sm-2'
                                id='inlineFormCustomSelect2'
                                onChange={handleChange}
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                              </select>
                            )}
                          </div>
                        </div>
                        <div className='prev-next'>
                          <div
                            onClick={async () => {
                              await this.setState({ setView: 1 })
                              await this._nextNew()
                            }}
                            className='btn-prev'
                          >
                            Back
                          </div>
                          <div className='btn-save'>
                            <button
                              disabled={isSubmitting || !isValid}
                              type='submit'
                              className='btn text-white p-0'
                              style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'none'
                              }}
                            >
                              {isSubmitting && (
                                <span className='spinner-border spinner-border-sm mr-2' />
                              )}
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                      {errors.transactionType && (
                        <div className='text-danger text-center'>
                          {errors.transactionType}
                        </div>
                      )}
                      {errors.transactionTypeStatus && (
                        <div className='text-danger text-center'>
                          {errors.transactionTypeStatus}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </Modal>
      </div>
    )
  }
}

export default AddNewTransactionModal
