import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import moment from 'moment'
import { taskService } from '../../services'
import toastr from 'toastr'
import EditTaskModal from './EditTaskModal'
import { Link } from '../../../common/routes'
export default class Task extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      handleChange: false,
      showEditTasksModal: false,
      arayDeleteTasks: [],
      arrayActiveTasks: []
    }
  }

  _showEditTaskModal = () => {
    this.setState({
      showEditTasksModal: true
    })
  }

  render () {
    const { task, index, viewType } = this.props
    // let classItem = 'list-group-item'
    let titleItem = ''
    if (this.state.handleChange) {
      // classItem += ' list-group-item-no-drop'
      titleItem = "Can't drag and drop the item has been chosen"
    }

    return (
      <Draggable
        key={task.id}
        draggableId={task.id}
        index={index}
        // isDragDisabled={
        //   this.state.handleChange
        // }
        isDragDisabled={viewType === 'Archived'}
      >
        {(provided, snapshot) => (
          <div
            data-role='task'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            title={titleItem}
          >
            <div
              className='card bg--light rounded fix-link'
              style={{ position: 'relative' }}
            >
              <Link route={`/my-transactions/${task.transactionId}`}>
                <div className='card-body task-card'>
                  <div>
                    <h6 className='card-title mb-1' style={{fontSize:'18px'}}>{task.taskName}</h6>
                    {task.transactionName && (
                      <div className='address-task'>{task.transactionName}</div>
                    )}
                    {task.deadline && (
                      <small className='text--gray'>
                        {moment(task.deadline).format('L')}
                      </small>
                    )}
                  </div>
                </div>
              </Link>
              <div className='task-card-fade'>
                <div className='task-card-action'>
                  {viewType === 'Active' && (
                    <>
                      <button
                        className='btn btn-sm text-white btn-info mr-1'
                        onClick={() => this._showEditTaskModal()}
                      >
                        <i className='fas fa-pencil-alt' />
                      </button>
                      <button
                        className='btn btn-sm text-white btn-warning mr-1'
                        onClick={() => this._archiveTasks()}
                      >
                        <i className='fas fa-archive ' />
                      </button>
                    </>
                  )}
                  <button
                    className='btn btn-sm text-white  btn-danger mr-1'
                    onClick={() => this._deleteTasks()}
                  >
                    <i className='far fa-trash-alt ' />
                  </button>
                </div>
              </div>
            </div>
            {this.state.showEditTasksModal && (
              <EditTaskModal
                taskId={this.props.task.id}
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
        )}
      </Draggable>
    )
  }

  _toggleModal = () => {
    this.setState({
      showEditTasksModal: !this.state.showEditTasksModal
    })
  }

  _archiveTasks = async () => {
    const { task, viewType, refetchData, column } = this.props
    try {
      await taskService.archiveTask(task.id)
      refetchData(column.id, viewType)
      toastr.success('Archived')
    } catch (error) {
      toastr.error(error)
    }
  }

  _deleteTasks = async () => {
    const { task, viewType, refetchData } = this.props
    if (confirm('Are you sure you wish to delete this tasks ?')) {
      try {
        await taskService.deleteTaskWithId(task.id)
        refetchData('toDo', viewType)
        toastr.success('Deleted')
      } catch (error) {
        toastr.error(error)
      }
    }
  }
}
