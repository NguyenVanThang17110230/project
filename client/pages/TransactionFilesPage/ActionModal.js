import React from 'react'
import { Modal } from 'reactstrap'
import { Formik, Field } from 'formik'
import toastr from 'toastr'
import { DataAccessType } from '../../../common/models/Transaction'
import { transactionService } from '../../services'

const INDEX = [1, 2, 3, 4]

class FormRecipient extends React.Component {
  render () {
    const {
      handleChange,
      number,
      transactionParties,
      chosenUserOnly
    } = this.props
    return (
      <div className='col-6 pt-3'>
        <div className='form-group'>
          <Field
            component='select'
            name={`name${number}`}
            className='form-control'
            onChange={e => {
              handleChange(e)
              this.props.chosenUsers(e)
            }}
          >
            {/* <option value='' disabled selected hidden> */}
            <option value='' selected>
              Name of Receipents {number}
            </option>
            {transactionParties.map(item => {
              let chosenIdUser = true
              let chosenUserRecipient = true
              this.props.documentCurrent.map(document => {
                if (document.assignedPartyId === item.id) {
                  chosenUserRecipient = false
                }
              })
              Object.values(chosenUserOnly).map(user => {
                if (user === item.id) {
                  chosenIdUser = false
                }
              })
              return (
                <option
                  className={
                    chosenIdUser && chosenUserRecipient ? 'd-block' : 'd-none'
                  }
                  name={`name`}
                  value={item.id}
                >
                  {`${item.firstName} ${item.lastName ? item.lastName : ''}`}
                </option>
              )
            })}
          </Field>
        </div>
        <div className='form-group'>
          <Field
            component='select'
            name={`action${number}`}
            className='form-control'
            onChange={handleChange}
          >
            {/* <option value='' disabled selected hidden> */}
            <option value='' selected>
              Action
            </option>
            <option
              name={`action${number}`}
              value={DataAccessType.SIGN_DOCUMENT}
            >
              Sign Document
            </option>
            <option name={`action${number}`} value={DataAccessType.VIEW_ONLY}>
              View Only
            </option>
            <option
              name={`action${number}`}
              value={DataAccessType.REVIEW_DOCUMENT}
            >
              Receive Copy
            </option>
          </Field>
        </div>
      </div>
    )
  }
}

export default class FileModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chosenUsers: {},
      documentCurrent: []
    }
  }
  chosenUsers = e => {
    this.setState({
      chosenUsers: {
        ...this.state.chosenUsers,
        [e.target.name]: e.target.value
      }
    })
  }

  render () {
    const { toggle } = this.props
    return (
      <Modal isOpen={toggle} id='new-transaction-modal' toggle={toggle}>
        <div className='modal-header modal-header--change'>
          <div className='text-center w-100'>
            <h5
              className='modal-title font-weight-bold mt-2'
              id='exampleModalLabel'
            >
              ADD ACTION FOR PARTIES
            </h5>
            <small>
              All parties who have an action set will be notified via email.
              <br />
              All actions performed by parties will show on the same document.
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
        <Formik
          initialValues={{
            name1: '',
            name2: '',
            name3: '',
            name4: '',
            action1: '',
            action2: '',
            action3: '',
            action4: ''
          }}
          onSubmit={this._onSubmit}
          validate={values => {
            let error = {}
            if (
              (values.action1 !== '' && values.name1 === '') ||
              (values.action2 !== '' && values.name2 === '') ||
              (values.action3 !== '' && values.name3 === '') ||
              (values.action4 !== '' && values.name4 === '')
            ) {
              error.action = 'Please enter the full field in a group'
            } else if (
              (values.action1 === '' && values.name1 !== '') ||
              (values.action2 === '' && values.name2 !== '') ||
              (values.action3 === '' && values.name3 !== '') ||
              (values.action4 === '' && values.name4 !== '')
            ) {
              error.action = 'Please enter the full field in a group'
            }
            return error
          }}
        >
          {({
            values,
            errors,
            isSubmitting,
            handleSubmit,
            handleChange,
            isValid
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='modal-body px-5 mx-2'>
                <h4 className='text-center'>Recipients</h4>
                <div className='row pt-3'>
                  {INDEX.map(number => (
                    <FormRecipient
                      index={number}
                      handleChange={handleChange}
                      values={values}
                      errors={errors}
                      number={number}
                      transactionParties={this.props.transactionParties}
                      chosenUsers={this.chosenUsers}
                      chosenUserOnly={this.state.chosenUsers}
                      documentCurrent={this.props.documentCurrent}
                    />
                  ))}
                </div>
                {errors.action && (
                  <div className='text-danger text-center'>{errors.action}</div>
                )}
                <div className='text-center my-5'>
                  <button
                    disabled={!isValid}
                    type='submit'
                    className='btn text-white py-2 px-5'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    Send Action
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
    const valuesGroup = [
      {
        action: values.action1,
        documentId: this.props.documentId,
        assignedPartyId: values.name1,
        creatorId: this.props.currentParty.id
      },
      {
        action: values.action2,
        documentId: this.props.documentId,
        assignedPartyId: values.name2,
        creatorId: this.props.currentParty.id
      },
      {
        action: values.action3,
        documentId: this.props.documentId,
        assignedPartyId: values.name3,
        creatorId: this.props.currentParty.id
      },
      {
        action: values.action4,
        documentId: this.props.documentId,
        assignedPartyId: values.name4,
        creatorId: this.props.currentParty.id
      }
    ].filter(item => item[Object.keys(item)[0]].length)
    try {
      setSubmitting(true)
      await transactionService.createDocumentsAction(valuesGroup)

      setSubmitting(false)
      this.props.reRenderDynamic()
      this.props.toggle()
      toastr.success('Success')
    } catch (e) {
      toastr.error(e.message)
      setSubmitting(false)
    }
  }
}
