import React, { Component } from 'react'
import userOnly from '../../hocs/userOnly'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './column'
import Head from 'next/head'
import { transactionService, taskService } from '../../services'
import { TaskStatus } from '../../../common/models/Task'
import toastr from 'toastr'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

async function _getTasks (userId, status, isActive) {
  if (isActive) {
    return taskService.getActiveTasks(userId, status)
  }
  return taskService.getArchiveTasks(userId, status)
}

class index extends Component {
  static async getInitialProps (ctx) {
    const userId = ctx.store.getState().global.loginUser.data.id
    const {
      transactions
    } = await transactionService.getMyTransactionsAndActivitiesForUser(userId)
    const isActive = true
    const tasksToDo = await _getTasks(userId, TaskStatus.TO_DO, isActive)
    const tasksInProgress = await _getTasks(
      userId,
      TaskStatus.IN_PROGRESS,
      isActive
    )
    const tasksComplete = await _getTasks(userId, TaskStatus.COMPLETE, isActive)
    return {
      transactions,
      tasksToDo,
      tasksInProgress,
      tasksComplete,
      headerText: 'Tasks'
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedView: 'Active',
      initialData: {
        columns: {
          toDo: {
            id: 'toDo',
            title: 'To-Do',
            data: props.tasksToDo
          },
          inProgress: {
            id: 'inProgress',
            title: 'In Progress',
            data: props.tasksInProgress
          },
          complete: {
            id: 'complete',
            title: 'Complete',
            data: props.tasksComplete
          }
        },
        // Facilitate reordering of the columns
        columnOrder: ['toDo', 'inProgress', 'complete']
      },
      isSubmit: true,
      showCreateEventModal: false,
      loading: false
    }
  }
  columnOrder = {
    toDo: 'toDo',
    inProgress: 'inProgress',
    complete: 'complete'
  }

  getList = id => this.state.initialData.columns[this.columnOrder[id]]

  _onDragEnd = result => {
    const { source, destination } = result
    // dropped outside the list
    if (!destination) {
      return
    }
    if (source.droppableId === destination.droppableId) {
      this._reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )
    } else {
      this._move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      )
    }
  }

  _updateSelectedView = async viewType => {
    this.setState({ selectedView: viewType })
  }

  render () {
    // Check the login permission on the task page
    const { selectedView } = this.state
    return (
      <div className='box-main'>
        <Head>
          <title>Tasks </title>
        </Head>
        <div className='row m-0'>
          <UncontrolledDropdown className='col-12 feature-archived text-right'>
            <DropdownToggle className='btn button-archive px-4 '>
              {selectedView}&nbsp;&nbsp;
              <i className='fa fa-angle-down' />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => this._updateSelectedView('Active')}>
                Active
              </DropdownItem>
              <DropdownItem
                onClick={() => this._updateSelectedView('Archived')}
              >
                Archived
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className='col-12 pl-0 pr-0'>
            <div className='row '>
              <DragDropContext onDragEnd={this._onDragEnd}>
                {this.state.initialData.columnOrder.map(columnName => {
                  const column = this.state.initialData.columns[columnName]
                  const tasks = column.data
                  // render the column of task
                  return (
                    <Column
                      key={column.id}
                      viewType={selectedView}
                      column={column}
                      tasks={tasks}
                      transactions={this.props.transactions}
                      currentUser={this.props.currentUser}
                      refetchData={this._refetchDataByStatus}
                    />
                  )
                })}
              </DragDropContext>
            </div>
          </div>
        </div>
        <footer className='footer-card' style={{ padding: '2rem 0' }}>
          <div className='footer-page'>
            <div className='footer-p1'>
              © Copyright Link Management Systems. All rights reserved
            </div>
            <div className='footer-p2'>Powered by Link Brokerages</div>
          </div>
        </footer>
      </div>
    )
  }

  _refetchDataByStatus = async (status, viewType) => {
    try {
      // const isActive = viewType === 'Active'
      const isActive = true
      const data = await _getTasks(this.props.currentUser.id, status, isActive)
      this.setState({
        initialData: {
          ...this.state.initialData,
          columns: {
            ...this.state.initialData.columns,
            [status]: {
              ...this.state.initialData.columns[status],
              data
            }
          }
        }
      })
    } catch (e) {
      toastr.error(e.message)
    }
  }

  _reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list.data)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    this.setState({
      initialData: {
        ...this.state.initialData,
        columns: {
          ...this.state.initialData.columns,
          [list.id]: {
            ...this.state.initialData.columns[list.id],
            data: result
          }
        }
      }
    })
  }

  _move = async (
    source,
    destination,
    droppableSource,
    droppableDestination
  ) => {
    const sourceClone = Array.from(source.data)
    const destClone = Array.from(destination.data)
    const [removed] = sourceClone.splice(droppableSource.index, 1)
    destClone.splice(droppableDestination.index, 0, removed)
    const newStart = {
      ...source,
      data: sourceClone
    }
    const newFinish = {
      ...destination,
      data: destClone
    }
    const newState = {
      ...this.state.initialData,
      columns: {
        ...this.state.initialData.columns,
        [droppableSource.droppableId]: newStart,
        [droppableDestination.droppableId]: newFinish
      }
    }
    this.setState({ initialData: newState })
    try {
      await taskService.updateTask({
        ...removed,
        status: `${droppableDestination.droppableId}`
      })
      toastr.success('Success')
    } catch (e) {
      toastr.error(e.message)
    }
  }
}
export default userOnly(index)
