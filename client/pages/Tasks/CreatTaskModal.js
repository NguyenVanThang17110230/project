import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik, Field } from 'formik'
import toastr from 'toastr'
import moment from 'moment'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import { getRoleLabel } from '../../view-models/User'
import { getFullName } from '../../../common/view-models/TransactionParty'
import { transactionService, taskService } from '../../services'

export default class CreateTaskModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      detailedTransaction: null,
      listUserId: []
    }
  }

  _onSubmit = async (values, action) => {
    const { setSubmitting } = action
    const { detailedTransaction } = this.state
    try {
      setSubmitting(true)
      await taskService.create({
        taskName: values.taskName,
        transactionName: detailedTransaction.address || '',
        deadline: values.deadline,
        transactionId: values.transactionId,
        status: this.props.dataOfColum.id,
        sharedUserIds: this.state.listUserId,
        creatorUserId: this.props.currentUser.id
      })

      setSubmitting(false)
      await this.props.refetchData(
        this.props.dataOfColum.id,
        this.props.viewType
      )

      this.props.toggle()
      toastr.success('Success')
    } catch (e) {
      toastr.error(e.message)
      setSubmitting(false)
    }
  }

  render () {
    const { toggle, dataOfColum } = this.props
    return (
      <Modal
        isOpen={toggle}
        toggle={toggle}
        id='new-task-modal'
        modalTransition={{ timeout: 0 }}
      >
        <div className='modal-header modal-header--change'>
          <div className='text-center w-100'>
            <h5 className='modal-title font-weight-bold' id='exampleModalLabel'>
              {`Add ${dataOfColum.title} Task`}
            </h5>
            <small>
              All tasks added will be shared only with the parties chosen below.
            </small>
            <br />
            <small>
              Parties will be notified that a new task is in their tasks page.
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
            taskName: '',
            transactionId: '',
            sharedUserIds: ''
          }}
          onSubmit={this._onSubmit}
          validate={values => {
            let error = {}
            if (values.taskName === '') {
              error.taskName = 'Task Name is required'
            } else if (values.transactionId === '') {
              error.transaction = 'Transaction is required'
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
                <div className='mt-4'>
                  <div className='form-group'>
                    <h5 className='text-center'>Task Name</h5>
                    <input
                      className='form-control'
                      placeholder='Task Name'
                      name='taskName'
                      onChange={handleChange}
                      value={values.taskName}
                      maxLength='150'
                    />
                    {errors.taskName && (
                      <div className='text-danger text-center'>
                        {errors.taskName}
                      </div>
                    )}
                  </div>
                  <div className='form-group'>
                    <h5 className='text-center'>Share With</h5>
                    <Field
                      component='select'
                      name='transactionId'
                      className='form-control'
                      onChange={async e => {
                        handleChange(e)
                        await this._getDetailedTransaction(e.target.value)
                      }}
                    >
                      <option selected hidden>
                        Transactions
                      </option>
                      {this._renderSelectTransaction()}
                    </Field>
                    {errors.transaction && (
                      <div className='text-danger text-center'>
                        {errors.transaction}
                      </div>
                    )}

                    <div className='form-group mt-3'>
                      <div
                        id='shared-user-id'
                        className='row container m-auto'
                        name='sharedUserIds'
                        onChange={e => {
                          handleChange(e)
                          this._updateListUserId(e)
                        }}
                      >
                        {this._renderPartiesForTransaction(handleChange)}
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <h5 className='text-center'>Deadline</h5>
                    <input
                      className='form-control'
                      type='datetime-local'
                      defaultValue={new Date()}
                      min={new Date()}
                      name='deadline'
                      onChange={handleChange}
                      value={moment(values.deadline).format('YYYY-MM-DDTHH:mm')}
                    />
                  </div>
                </div>
                <div className='text-center my-5'>
                  <button
                    disabled={!isValid || isSubmitting}
                    type='submit'
                    className='btn text-white py-2 px-5 bg-info btn-green'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    Add new task
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    )
  }

  _renderSelectTransaction = () => {
    const { transactions } = this.props

    return transactions.map(
      (transaction, index) =>
        !(transaction.status === 'archived') && (
          <option key={index} value={transaction.id}>
            {transaction.address}
          </option>
        )
    )
  }

  _getDetailedTransaction = async transactionId => {
    const detailedTransaction = await transactionService.getPartiesForTransaction(
      transactionId
    )
    this.setState({ detailedTransaction, listUserId: [] })
    const checklist = document.getElementsByClassName('check-box-list')
    if (checklist) {
      for (let i = 0; i < checklist.length; i++) {
        checklist[i].checked = false
      }
    }
  }

  _updateListUserId = e => {
    let newArray = [...new Set([...this.state.listUserId, e.target.value])]
    if (e.target.checked) {
      this.setState({ listUserId: newArray })
    } else {
      const index = this.state.listUserId.findIndex(
        item => item === e.target.value
      )
      this.state.listUserId.splice(index, 1)
      this.setState({ listUserId: this.state.listUserId })
    }
  }

  _renderPartiesForTransaction = () => {
    const { detailedTransaction } = this.state
    if (detailedTransaction) {
      return this.state.detailedTransaction.parties.map((party, index) => (
        <div key={index} className='col-12 col-md-6'>
          <label>
            <input
              onChange={this.handleChange}
              name='partyId'
              type='checkbox'
              className='check-box-list'
              value={party.userId}
            />
            &ensp;
            <small>{getRoleLabel(party.role)}</small>
            &nbsp;
            <small>({getFullName(party)})</small>
          </label>
        </div>
      ))
    }
  }
}
