import React from 'react'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'
import CreateTaskModal from './CreatTaskModal'
import toastr from 'toastr'
import { taskService } from '../../services'
import Role from '../../../common/models/Role'

export default class Column extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: props.tasks,
      showCreateTasksModal: false,
      arayDeleteTasks: []
    }
  }

  async componentWillReceiveProps (nextProps) {
    const { currentUser, column } = nextProps

    const isActive = nextProps.viewType === 'Active'

    let tasks = []
    if (isActive) {
      // tasks = await taskService.getActiveTasks(currentUser.id, column.id)
      tasks = column.data.filter(item => item.isActive !== false)
    } else {
      tasks = await taskService.getArchiveTasks(currentUser.id, column.id)
      // tasks = column.data.filter(item => item.isActive === false)
    }

    this.setState({ tasks })
  }

  _showCreateTaskModal = () => {
    this.setState({
      showCreateTasksModal: true
    })
  }

  _deleteTasks = arrayTask => {
    if (confirm('Are you sure you wish to delete this tasks ?')) {
      try {
        const { refetchData, column, viewType } = this.props

        const promises = arrayTask.map(data => {
          return taskService.deleteTaskWithId(data.id)
        })
        Promise.all(promises).then(async () => {
          await refetchData(column.id, viewType)
          this.setState({ arayDeleteTasks: [] })
          toastr.success('Success')
        })
      } catch (error) {
        toastr.error(error)
      }
    }
  }

  render () {
    return (
      <div className='col-12 col-lg-4 col-sm-4'>
        <div className='card'>
          <div className='card-body pb-2'>
            <div className='d-flex no-block align-items-center'>
              <div>
                <h4 className='card-title m-b-0'>{this.props.column.title}</h4>
              </div>
              <div className='ml-auto'>
                {this.props.viewType === 'Active' && (
                  <button
                    className='pull-right btn text-white button-create'
                    data-toggle='modal'
                    data-target='#myModal'
                    onClick={() => {
                      this._showCreateTaskModal()
                    }}
                    style={{ transition: '0.3s' }}
                  >
                    <i className='fas fa-plus text-blue' />
                  </button>
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className='card-body pt-2'>
            <div className='overflow-auto' style={{ height: '300px' }}>
              <Droppable droppableId={this.props.column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    className='w-100 h-100 mb-0'
                  >
                    {this.state.tasks.map((task, index) => (
                      <Task
                        key={task.id}
                        task={task}
                        index={index}
                        transactions={this.props.transactions}
                        _handleChange={this._handleChange}
                        status={this.props.column.id}
                        column={this.props.column}
                        viewType={this.props.viewType}
                        refetchData={this.props.refetchData}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
        {this.state.showCreateTasksModal && (
          <CreateTaskModal
            transactions={this.props.transactions}
            droppableId={this.props.column.id}
            toggle={this._toggleModal}
            currentUser={this.props.currentUser}
            dataOfColum={this.props.column}
            viewType={this.props.viewType}
            refetchData={this.props.refetchData}
          />
        )}
      </div>
    )
  }
  _toggleModal = () => {
    this.setState({
      showCreateTasksModal: !this.state.showCreateTasksModal
    })
  }

  _handleChange = (e, datatask) => {
    // Check the login permission, only the TC can delete task
    if (this.props.currentUser.roles[0].name !== Role.COORDINATOR) {
      return
    }
    this.setState({
      handleChange: !this.state.handleChange
    })
    e.target.checked
      ? this.state.arayDeleteTasks.push(datatask)
      : this.state.arayDeleteTasks.pop(datatask)
  }
}
