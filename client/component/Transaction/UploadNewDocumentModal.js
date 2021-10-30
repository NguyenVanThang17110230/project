import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import Dropzone from 'react-dropzone'
import { transactionService } from '../../services'
// import { TransactionRole } from '../../../common/models/Transaction'
import {
  MEGABYTE,
  MAX_FILE_SIZE,
  TYPE,
  FILE_TYPE
} from '../../../common/models/Transaction'
class UploadNewDocumentModal extends Component {
  constructor () {
    super()
    this.onDrop = file => {
      this.setState({ file })
    }
    this.state = {
      file: null
    }
  }

  render () {
    const { isShowUpdateNewDocumentModal, toggleMemberModal } = this.props
    const { file } = this.state

    return (
      <Modal isOpen={isShowUpdateNewDocumentModal} toggle={toggleMemberModal}>
        <div className='page-button-new'>
          <div
            className='form-add-member'
            // style={{ display: 'none' }}
          >
            <div className='modal-header modal-header--change' id='bg-gr'>
              <div className='text-center w-100'>
                <h5 className='modal-title new-add' id='exampleModalLabel'>
                  Upload New Document
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
                title: ''
              }}
              onSubmit={(values, action) => this.handleSubmit(values, action)}
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
                  <div className='d-flex justify-content-center'>
                    <div
                      className='modal-body px-5 mx-2'
                      id='main-body-add-member'
                    >
                      <div className='col-12'>
                        <div className='col-12'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Document information{' '}
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Type here'
                              name='title'
                              onChange={handleChange}
                              maxLength={150}
                              // value={values.information}
                            />
                            {errors.information && (
                              <small className='text-danger'>
                                {errors.information}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className=' col-12 '>
                          <label className='tittle-mini-ver'>Upload</label>
                          <div
                            className='card transaction-card transaction-card--add text-center'
                            style={{ backgroundColor: 'rgb(239 239 239)' }}
                          >
                            <div className='card-body p-2'>
                              <div className='transaction-add d-flex justify-content-center align-items-center display-6 text-'>
                                <Dropzone
                                  accept={FILE_TYPE}
                                  maxSizeBytes={MAX_FILE_SIZE}
                                  onDrop={this.onDrop}
                                >
                                  {({ getRootProps, getInputProps }) => (
                                    <section className='container'>
                                      <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <span className='w-100 u-clickable'>
                                          <img
                                            style={{
                                              height: 60,
                                              width: 'auto'
                                            }}
                                            src='/static/images/upload_document.png'
                                          />
                                        </span>
                                      </div>
                                      {file && file[0] && (
                                        <div>
                                          {file[0].size > MAX_FILE_SIZE ? (
                                            <div>{this._fileTooLarge()}</div>
                                          ) : (
                                            <h5 className='list-unstyled'>
                                              {file[0].name}
                                            </h5>
                                          )}
                                        </div>
                                      )}
                                    </section>
                                  )}
                                </Dropzone>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='text-danger text-center'>
                        {this._validate(file, values.title)}
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 d-flex justify-content-center'>
                    <button
                      disabled={
                        !!this._validate(file, values.title) ||
                        !isValid ||
                        isSubmitting
                      }
                      type='submit'
                      className='btn btn-add-new mb-5 text-white th-11 d-flex align-items-center'
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

  handleSubmit = async (values, action) => {
    const { setSubmitting } = action
    const {
      currentParty,
      transaction,
      toggleMemberModal,
      fetchData
    } = this.props

    try {
      setSubmitting(true)
      await transactionService.createFileDocument({
        file: this.state.file[0],
        title: values.title,
        role: currentParty.role,
        creatorId: currentParty.id,
        partyId: currentParty.id,
        transactionId: transaction.id
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

  _fileTooLarge = () => {
    this.setState({ file: 'large' })
  }

  _validate = (file, title) => {
    const errors = {}
    errors.title = 'Title document is required'
    errors.file = 'File is required'
    errors.size = `Only allows file size smaller than ${MEGABYTE} megabytes`
    errors.type = `Only allows file type is ${TYPE}`

    if (!file) {
      if (title !== '') {
        return errors.file
      }
    } else if (file === 'large') {
      return errors.size
    } else if (!file[0]) {
      return errors.type
    } else {
      if (title === '') {
        return errors.title
      }
    }

    return null
  }
}
export default UploadNewDocumentModal
