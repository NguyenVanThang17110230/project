import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik } from 'formik'
import Dropzone from 'react-dropzone'
import toastr from 'toastr'
import { transactionService } from '../../services'
import {
  MEGABYTE,
  MAX_FILE_SIZE,
  TYPE,
  FILE_TYPE
} from '../../../common/models/Transaction'

class DocumentSignModal extends Component {
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
    const { toggle } = this.props
    const { file } = this.state

    return (
      <Modal isOpen={toggle} id='new-transaction-modal' toggle={toggle}>
        <div className='modal-header modal-header--change'>
          <div className='text-center w-100'>
            <h5 className='modal-title font-weight-bold' id='exampleModalLabel'>
              UPLOAD SIGNED DOCUMENT
            </h5>
            <small>
              The document should be the signed version of the previous
              document.
              <br />
              Either drop or upload the file below.
            </small>
          </div>
          <button
            type='button'
            className='close bg-transparent'
            data-dismiss='modal'
            onClick={toggle}
          >
            &times;
          </button>
        </div>
        <Formik onSubmit={this._onSubmit}>
          {({ values, isSubmitting, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className='modal-body px-5 mx-2'>
                <div>
                  {/* <h4 className='text-center'>DOCUMENT INFORMATION</h4> */}
                  <div className='row pt-3'>
                    {/* <div className='col-12'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='Document Title'
                          name='title'
                          onChange={handleChange}
                          value={values.documentTitle}
                          style={{ textAlign: 'center' }}
                        />
                      </div>
                    </div> */}
                    <div className=' col-12'>
                      <div className='card transaction-card transaction-card--add text-center'>
                        <div className='card-body pt-0'>
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
                                    <img
                                      style={{ cursor: 'pointer' }}
                                      src='/static/images/transactions/upload.png'
                                    />
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
                <div className='text-center my-5'>
                  <button
                    disabled={
                      !!this._validate(file, values.title) || isSubmitting
                    }
                    type='submit'
                    className='btn text-white py-2 px-5'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    UPLOAD
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    )
  }

  _onSubmit = async (values, action) => {
    const { setSubmitting } = action
    const { documentAction } = this.props
    const { file } = this.state

    try {
      setSubmitting(true)
      await transactionService.updateSignDocumentById(documentAction.id, {
        file: file[0]
      })

      setSubmitting(false)
      this.props.reRenderDynamic()
      this.props.toggle()
      toastr.success('Success')
    } catch (e) {
      toastr.error(e.message)
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

export default DocumentSignModal
