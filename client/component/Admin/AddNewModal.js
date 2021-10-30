import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik, Field } from 'formik'
import toastr from 'toastr'
import { NewsType } from '../../../common/models/News'
import { newsService } from '../../services'
class AddNewModal extends Component {
  handleSubmit = async (values, action) => {
    const { setSubmitting } = action
    const { toggleAddNewsModal, realtimeData, creatorId } = this.props
    try {
      setSubmitting(true)
      await newsService.addNewNews({
        title: values.title,
        content: values.content,
        newsType: values.newsType,
        status: values.status,
        creatorId: creatorId
      })
      setSubmitting(false)
      toastr.success('Success')
      toggleAddNewsModal()
      realtimeData()
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
    const { isShowAddNewsModal, toggleAddNewsModal } = this.props
    return (
      <Modal isOpen={isShowAddNewsModal} toggle={toggleAddNewsModal}>
        <div className=''>
          <div className='modal-header modal-header--change' id='bg-gr'>
            <div className='text-center w-100'>
              <h5 className='modal-title new-add' id='exampleModalLabel'>
                Add New News
              </h5>
            </div>
            <div>
              <button
                id='close-modal'
                type='button'
                className='close bg-transparent '
                data-dismiss='modal'
                onClick={() => toggleAddNewsModal()}
              >
                &times;
              </button>
            </div>
          </div>
          <Formik
            initialValues={{
              title: '',
              content: '',
              status: false,
              newsType: NewsType.E_COMMERCE
            }}
            onSubmit={(values, action) => this.handleSubmit(values, action)}
            validate={values => {
              let error = {}
              if (values.title === '') {
                error.title = 'Title is required'
              } else if (values.content === '') {
                error.content = 'Content is required'
              } else if (values.newsType === '') {
                error.newsType = 'News type is required'
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
                <div className='row m-0 p-2'>
                  {/* <div className='card shadow-sm rounded w-100 p-2'> */}
                  <div className='col-12'>
                    <div className='form-group '>
                      <label className='tittle-mini-ver'>Title</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Type here'
                        onChange={handleChange}
                        value={values.title}
                        name='title'
                      />
                      {errors.title && (
                        <small className='text-danger'>{errors.title}</small>
                      )}
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group '>
                      <label className='tittle-mini-ver'>Content</label>
                      <textarea
                        className='form-control'
                        placeholder='Type here'
                        id='exampleFormControlTextarea1'
                        rows={5}
                        defaultValue={''}
                        onChange={handleChange}
                        value={values.content}
                        name='content'
                      />
                      {errors.content && (
                        <small className='text-danger'>{errors.content}</small>
                      )}
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group '>
                      <label className='tittle-mini-ver'>Type</label>
                      <select
                        id='newsType'
                        className='form-control'
                        name='newsType'
                        onChange={handleChange}
                        value={values.newsType}
                      >
                        <option value={NewsType.E_COMMERCE}>eCommerce</option>
                        <option value={NewsType.REAL_ESTATE}>
                          Real estate
                        </option>
                        <option value={NewsType.OTHERS}>Others</option>
                      </select>
                      {errors.newsType && (
                        <small className='text-danger'>{errors.newsType}</small>
                      )}
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group '>
                      {/* <label className='tittle-mini-ver'>Content</label> */}
                      <label className='check-pin'>
                        <Field type='checkbox' name='status' />
                        Is published
                      </label>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <div className='d-flex justify-content-center'>
                  <button
                    type='submit'
                    className='btn btn-add-new mb-5 text-white th-11 d-flex align-items-center'
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    Add News
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    )
  }
}

export default AddNewModal
