import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'
import Head from 'next/head'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import '../../../node_modules/react-calendar/dist/Calendar.css'
import { getRoleLabel } from '../../view-models/User'
import { eventService, taskService, transactionService } from '../../services'
import userOnly from '../../hocs/userOnly'
import Calendar from '../../component/Calendar'
import CreateEventModal from './CreateEventModal'
import EditEventModal from './EditEventModal'
import {
  getTransactionFullAddress,
  getTransactionActivity
} from '../../view-models/Transaction'

async function _getEventsForUser (userId) {
  const events = await eventService.getEventsForUser(userId)
  const tasks = await taskService.getAllTasksForUser(userId)
  return [...events, ...tasks]
}

class CalendarPage extends Component {
  static async getInitialProps (ctx) {
    const userId = ctx.store.getState().global.loginUser.data.id
    const {
      transactions,
      activities
    } = await transactionService.getMyTransactionsAndActivitiesForUser(userId)
    const events = await _getEventsForUser(userId)
    return { transactions, activities, events, headerText: 'Calendar' }
  }

  constructor (props) {
    super(props)
    this.state = {
      isSubmit: true,
      date: new Date(),
      events: props.events,
      showCreateEventModal: false,
      showEditEventModal: false,
      selectedEventId: null,
      toggleTimeline: false,
      loading: false
    }
  }

  _showCreateEventModal = defaultDate => {
    this.setState({
      showCreateEventModal: true,
      defaultDateForCreateEventModal: defaultDate
    })
  }
  _showEditEventModal = async data => {
    const detailedTransaction = await transactionService.getPartiesForTransaction(
      data.transactionId
    )

    this.setState({
      showEditEventModal: true,
      dataEdit: {
        event: data,
        detailedTransaction
      }

      // defaultDateForCreateEventModal: `${data.time}`,
    })
  }

  _deleteEvent = async id => {
    if (confirm('Are you sure you wish to delete this event ?')) {
      try {
        await eventService.deleteEventWithId(id)
        this.setState({ loading: true })
        this._refetchData()
      } catch (error) {
        // toastr.error(error)
      } finally {
        this.setState({ loading: false })
      }
    }
  }

  handleEvents = e => {
    this.setState({
      selectedEventId: e.event.id
    })
    this._scrollToEventInfo()
  }

  render () {
    return (
      <div className='box-main'>
        <Head>
          <title>Calendar</title>
        </Head>
        <div
          className='row m-0'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <div
            className='calendar-new'
            id='calendar'
            style={{
              overflow: 'unset',
              width: '100%'
            }}
          >
            <div className='box-calendar'>
              <Calendar
                defaultView='dayGridMonth'
                displayEventTime={false}
                dateClick={({ view, dayEl, dateStr }) => {
                  if (
                    view.dateProfileGenerator.viewSpec.type === 'timeGridWeek'
                  ) {
                    this._showCreateEventModal(new Date(dateStr))
                  } else {
                    this._showCreateEventModal(
                      new Date(dateStr.replace(/-/g, '/'))
                    )
                  }
                }}
                selectable
                selectMirror
                events={this.state.events.map(event => ({
                  title: _.truncate(event.title || event.taskName, {
                    length: 20
                  }),
                  date: event.time || event.deadline,
                  id: event.id,
                  classNames:
                    this.state.selectedEventId === event.id
                      ? ['fc-event', 'fc-event--selected']
                      : ['fc-event']
                }))}
                customButtons={{
                  myCustomButton: {
                    text: '+',
                    click: () => this._showCreateEventModal(new Date())
                  }
                }}
                eventClick={this.handleEvents}
                header={{
                  left: 'dayGridMonth,timeGridWeek',
                  center: 'prev,title,next',
                  right: 'myCustomButton'
                }}
                height='auto'
                eventLimit='true'
              />
              {this._renderSelectedEventInfo()}
              <div ref='event-info' />
            </div>
          </div>

          {/* display timeline */}
          {/* <div
            className={`timeline-sidebar ${
              this.state.toggleTimeline
                ? 'toggle-timeline col-xl-3 border-top d-md-block d-xl-block d-sm-block d-xs-block d-block '
                : 'col-xl-3 border-top d-md-none d-xl-block d-sm-none d-xs-none d-none '
            }`}
          >
            <div className='timeline-sidebar_wrapper'>
              <p className='p-2 mb-0'>Timeline</p>
              <div>{this._renderTimeline()}</div>
            </div>
          </div> */}
          {/* <div className='timeline-sidebar col-3 border-top'>
            <p>Timeline</p>
            {this._renderTimeline()}
          </div> */}
        </div>
        <footer className='footer-card' style={{ padding: '2rem 0rem' }}>
          <div className='footer-page'>
            <div className='footer-p1'>
              © Copyright Link Management Systems. All rights reserved
            </div>
            <div className='footer-p2'>Powered by Link Brokerages</div>
          </div>
        </footer>
        {/* {this._renderModalAddEventCalendar()} */}
        {/* {this.renderInfoEvent()} */}

        {this.state.showCreateEventModal && (
          <CreateEventModal
            defaultDate={this.state.defaultDateForCreateEventModal}
            transactions={this.props.transactions}
            toggle={this._toggleModal}
            currentUser={this.props.currentUser}
            refetchData={this._refetchData}
          />
        )}
        {this.state.showEditEventModal && (
          <EditEventModal
            defaultDate={new Date(this.state.dataEdit.event.time)}
            transactions={this.props.transactions}
            toggle={this._toggleEditModal}
            currentUser={this.props.currentUser}
            refetchData={this._refetchData}
            dataEdit={this.state.dataEdit}
          />
        )}
      </div>
    )
  }

  _renderSelectedEventInfo = () => {
    const event = this.state.events.find(
      event => event.id === this.state.selectedEventId
    )

    if (!event) {
      return null
    }
    const transaction = this.props.transactions.find(
      item => item.id === event.transactionId
    )
    // return `${new Date(event.time).getDate()} ${getTransactionFullAddress(transaction)} ${moment(event.time).format('LT')}`
    return (
      <div className='row ml-0 p-3 mr-0 mb-2' id='eventCalendar'>
        <div className='col-10 row'>
          <div className='row col-12 col-sm-4 py-2'>
            <div className='col-2'>
              <div
                className='dayEvent text-white'
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {new Date(event.time || event.deadline).getDate()}
              </div>
            </div>
            <div className='col-10 cropText' style={{ whiteSpace: 'pre-wrap' }}>
              {event.title || event.taskName}
            </div>
          </div>
          {transaction && (
            <div className='col-12 col-sm-6 py-2'>
              <div className='row'>
                <div className='col-1 p-0 text-center'>
                  <i style={{ fontSize: '10px' }} className='fa fa-circle' />
                </div>
                <div
                  className='col-11 cropText'
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {getTransactionFullAddress(transaction)}
                </div>
              </div>
            </div>
          )}
          <div className='col-12 col-sm-2 py-2'>
            <div className='row'>
              <div className='col-1 p-0 text-center'>
                <i style={{ fontSize: '10px' }} className='fa fa-circle' />
              </div>
              <div className='col-11'>
                {moment(event.time || event.deadline).format('LT')}
              </div>
            </div>
          </div>
          {!event.taskName && (
            <div className='col-12'>
              <div className='row'>
                <div className='col-1 d-md-none d-sm-block p-0 text-center'>
                  <i style={{ fontSize: '10px' }} className='fa fa-circle' />
                </div>
                <div className='d-md-block d-sm-none d-none p-0 text-primary font-weight-bold'>
                  Description:
                </div>
                <div className='col-8 cropText'>{event.description}</div>
              </div>
            </div>
          )}
        </div>
        {!event.taskName ? (
          this._renderButtonUpdateAndDeleteEvent(event)
        ) : (
          <div className='col-2 py-2'>
            <div className='row'>
              <div className='col-1 p-0 text-center'>
                <i style={{ fontSize: '10px' }} className='fa fa-circle' />
              </div>
              <div className='col-11'>Task</div>
            </div>
          </div>
        )}
      </div>
    )
  }
  _renderButtonUpdateAndDeleteEvent = event => {
    if (
      this.props.currentUser.id === event.creatorUserId &&
      !this._isEventOfArchivedTransaction(event)
    ) {
      return (
        <div className='col-10 col-sm-2 d-flex row justify-content-end align-items-start'>
          <button
            className='btn mr-1'
            style={{ background: '#4a90e2', color: 'white' }}
            onClick={() => {
              this._showEditEventModal(event)
            }}
          >
            <i className='fa fa-edit' />
          </button>
          <button
            className='btn btn-danger'
            onClick={() => this._deleteEvent(this.state.selectedEventId)}
          >
            <i className='fa fa-trash' />
          </button>
        </div>
      )
    } else {
      return null
    }
  }

  _isEventOfArchivedTransaction = event => {
    const detailTransaction = this.props.transactions.find(transaction => {
      return transaction.id === event.transactionId
    })
    if (detailTransaction.status === 'archived') {
      return true
    } else {
      return false
    }
  }

  _scrollToEventInfo = () => {
    if (this.refs['event-info']) {
      this.refs['event-info'].scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
  }

  _renderTimeline = () => {
    let groupTimes = _.groupBy(this.props.activities, function (item) {
      return moment(item.createdAt).format('L')
    })
    let groupTimesArray = _.chain(groupTimes)
      .toPairs()
      .sort(function (a, b) {
        return b - a
      })
      .value()

    return groupTimesArray.map((activity, index) => (
      <React.Fragment key={index}>
        <p className='mt-3 ml-2'>{activity[0]}</p>
        {activity[1].map((itemTime, index) => (
          <div className='border-bottom p-0 row' key={index}>
            <div className='col-2 col-sm-1 col-md-1 col-xl-2  row align-items-center position-relative'>
              <div className='circle-timeline position-absolute timeline-sidebar_circle' />
            </div>
            <div className='col-10 col-sm-11 col-md-11 col-xl-10 text-left '>
              <div>
                <b>{getRoleLabel(itemTime.role)}</b>
              </div>
              <span className='card-text '>
                <b>{moment(itemTime.createdAt).format('LT')}</b>
              </span>
              <br />
              <span>{`${
                itemTime.data ? itemTime.data.title : ''
              } ${getTransactionActivity(itemTime.type)} ${
                itemTime.data ? getRoleLabel(itemTime.data.currentRole) : ''
              }`}</span>
            </div>
          </div>
        ))}
      </React.Fragment>
    ))
  }

  _toggleModal = () => {
    this.setState({
      showCreateEventModal: !this.state.showCreateEventModal
    })
  }
  _toggleEditModal = () => {
    this.setState({
      showEditEventModal: !this.state.showEditEventModal
    })
  }

  _refetchData = async () => {
    this.setState({
      events: await _getEventsForUser(this.props.currentUser.id)
    })
  }
}

export default userOnly(CalendarPage)
