import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import { Formik, Field } from 'formik'
import DatePicker from 'react-datepicker'
import toastr from 'toastr'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import Calendar from '../../component/Calendar'
import { getRoleLabel } from '../../view-models/User'
import { getFullName } from '../../../common/view-models/TransactionParty'
import { transactionService, eventService } from '../../services'

export default class CreateEventModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: props.defaultDate || new Date(),
      detailedTransaction: null,
      listUserId: []
    }
  }

  _onSubmit = async (values, action) => {
    const { setSubmitting } = action
    // const updatedTime = values.time
    // const newDate = new Date(this.props.defaultDate)
    // updatedTime.setFullYear(newDate.getFullYear())
    // updatedTime.setMonth(newDate.getMonth())
    // updatedTime.setDate(newDate.getDate())
    try {
      setSubmitting(true)
      await eventService.create({
        title: values.title,
        description: values.description,
        transactionId: values.transactionId,
        time: values.time,
        sharedUserIds: this.state.listUserId,
        creatorUserId: this.props.currentUser.id
      })

      setSubmitting(false)
      this.props.refetchData()
      this.props.toggle()
      toastr.success('Success')
    } catch (e) {
      toastr.error(e.message)
      setSubmitting(false)
    }
  }

  render () {
    const { toggle } = this.props
    return (
      <Modal
        isOpen={toggle}
        toggle={toggle}
        id='new-event-modal'
        modalTransition={{ timeout: 0 }}
      >
        <div className='modal-header modal-header--change'>
          <div className='text-center w-100'>
            <h5 className='modal-title font-weight-bold' id='exampleModalLabel'>
              ADD NEW EVENT
            </h5>
            <small>
              All events added will be shared only with the parties chosen
              below.
            </small>
            <br />
            <small>
              Parties will be notified that a new event is in their calendar.
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
            time: this.props.defaultDate || new Date(),
            title: '',
            description: '',
            // transactionId: this.props.transactions[0]
            //   ? this.props.transactions[0].id
            //   : null,
            transactionId: '',
            sharedUserIds: ''
          }}
          onSubmit={this._onSubmit}
          validate={values => {
            let error = {}
            if (values.title === '') {
              error.title = 'Event Title is required'
            } else if (values.description === '') {
              error.description = 'Description is required'
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
                <div id='calendar'>
                  <div className='row'>
                    <div className='col-10'>
                      <Calendar
                        unselectAuto={false}
                        defaultView='dayGridMonth'
                        allDaySlot={false}
                        allDayDefault
                        dateClick={({ dateStr }) => {
                          const updatedTime = values.time
                          const newDate = new Date(dateStr.replace(/-/g, '/'))
                          updatedTime.setFullYear(newDate.getFullYear())
                          updatedTime.setMonth(newDate.getMonth())
                          updatedTime.setDate(newDate.getDate())
                          handleChange({ time: updatedTime })
                        }}
                        selectable
                        selectMirror
                        header={{
                          left: 'prev',
                          center: 'title',
                          right: 'next'
                        }}
                        myRef={async calendarRef => {
                          if (!calendarRef) {
                            return null
                          }
                          await calendarRef.getApi().gotoDate(this.state.time)
                          await calendarRef.getApi().select(this.state.time)
                        }}
                        height='auto'
                      />
                    </div>
                    <div className='col-2 pt-5 mt-4'>
                      <div className='text-center'>
                        <DatePicker
                          style={{ height: '100%' }}
                          selected={values.time}
                          onChange={newTime => {
                            const updatedTime = values.time
                            updatedTime.setHours(newTime.getHours())
                            updatedTime.setMinutes(newTime.getMinutes())
                            handleChange({ time: updatedTime })
                          }}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={30}
                          timeCaption='Time'
                          dateFormat='h:mm aa'
                          inline
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <div className='form-group'>
                    <h5 className='text-center'>Event Title</h5>
                    <input
                      className='form-control'
                      placeholder='Event Title'
                      name='title'
                      onChange={handleChange}
                      value={values.title}
                    />
                    {errors.title && (
                      <div className='text-danger text-center'>
                        {errors.title}
                      </div>
                    )}
                  </div>
                  <div className='form-group'>
                    <h5 className='text-center'>Description</h5>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        placeholder='Description'
                        name='description'
                        onChange={handleChange}
                        value={values.description}
                      />
                    </div>
                    {errors.description && (
                      <div className='text-danger text-center'>
                        {errors.description}
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
                </div>
                <div className='text-center my-5'>
                  <button
                    disabled={!isValid || isSubmitting}
                    type='submit'
                    className='btn text-white py-2 px-5 bg-info'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    ADD EVENT
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    )
  }

  componentDidMount () {}

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
