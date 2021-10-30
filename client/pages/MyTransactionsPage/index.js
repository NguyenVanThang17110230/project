import React, { useState, Component, useMemo } from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import toastr from 'toastr'
import moment from 'moment'
import _ from 'lodash'
import Head from 'next/head'
import { Link } from '../../../common/routes'
import { commissionService, transactionService } from '../../services'
import {
  TransactionAccessType,
  TransactionStatus
} from '../../../common/models/Transaction'
import userOnly from '../../hocs/userOnly'
import { getTransactionActivity } from '../../view-models/Transaction'
import { getRoleLabel } from '../../view-models/User'
import { isCoordinator } from '../../../common/models/User'
import CashBalanceModal from '../../component/CashBalance'
import AddNewTransactionModal from '../../component/Transaction/AddNewTransactionModal'
import authRedux from '../../redux/authRedux'

async function _fetchTransactions (userId) {
  const transactions = await transactionService.getTransactionsForUser()
  const accessType = await Promise.all(
    transactions.map(async item => {
      const { access } = await transactionService.getTransactionPartyByUserId(
        item.id,
        userId
      )
      return access
    })
  )

  const promise = transactions.map(transaction => {
    return {
      transactionId: transaction.id,
      percent: transaction.percentComplete || 0
    }
  })
  const percentOfTransactions = await Promise.all(promise)

  return {
    accessType,
    transactions,
    percentOfTransactions
  }
}

const PaginationComponent = ({ data, viewActive, view }) => {
  // const [dataPage, setDataPage] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)

  const [pageNumberLimit] = useState(3)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  let dataSet = data
  if (view === 'In Progress') {
    dataSet = dataSet.filter(
      x =>
        x.status !== TransactionStatus.CLOSED &&
        x.status !== TransactionStatus.ARCHIVED
    )
  }
  if (view === 'Archived') {
    dataSet = dataSet.filter(x => x.status === TransactionStatus.ARCHIVED)
  }
  if (view === 'Complete') {
    dataSet = dataSet.filter(x => x.status === TransactionStatus.CLOSED)
  }

  const handleClick = dataSet => {
    setCurrentPage(Number(dataSet.target.id))
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(dataSet.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = useMemo(() => {
    return currentPage * itemsPerPage
  }, [currentPage])
  const indexFirstItem = useMemo(() => {
    return indexOfLastItem - itemsPerPage
  }, [indexOfLastItem])

  const currentItems = useMemo(() => {
    return dataSet.slice(indexFirstItem, indexOfLastItem)
  }, [indexFirstItem, indexOfLastItem, dataSet])

  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={dataSet => handleClick(dataSet)}
          className={currentPage === number ? 'active' : null}
          style={{ marginLeft: '0.2rem', cursor: 'pointer' }}
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handelPrevBtn = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={handleNextBtn} style={{ cursor: 'pointer' }}>
        &hellip;
      </li>
    )
  }
  let pageDecrementBtn = null
  if (currentPage > 3) {
    pageDecrementBtn = (
      <li onClick={handelPrevBtn} style={{ cursor: 'pointer' }}>
        &hellip;
      </li>
    )
  }

  return (
    <>
      <div
        className='row new-box-transaction'
        style={{
          width: '100%'
        }}
      >
        {viewActive(currentItems)}
      </div>
      {currentItems.length > 0 ? (
        <ul className='pageNumbers pt-4'>
          <li className='' style={{ border: 'none' }}>
            <button
              className=''
              onClick={() => handelPrevBtn()}
              disabled={currentPage === pages[0]}
            >
              <i className='fas fa-angle-left mr-2' />
              Previous
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li className='ml-1' style={{ border: 'none' }}>
            <button
              onClick={() => handleNextBtn()}
              disabled={currentPage === pages[pages.length - 1]}
            >
              Next
              <i className='fas fa-angle-right ml-2' />
            </button>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  )
}

class MyTransactionsPage extends Component {
  static async getInitialProps (ctx) {
    return {
      headerText: 'Transactions'
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedView: 'In Progress',
      selectedSort: 'A-Z',
      isArchivedView: false,
      isSubmit: true,
      selectedTransactionId: null,
      toggleModal: false,
      toggleCashBalance: false,
      accessType: [],
      transactions: [],
      activities: [],
      percentOfTransactions: [],
      percent: 0,
      pageNumber: 0,
      setPageNumber: 0,
      srcImage: null,
      createMainImage: false,
      file: null,
      isToggleModalNewTransaction: false,
      setTransaction: 0,
      dataTransactionCommission: []
    }
  }

  componentDidMount () {
    this.setState({ setTransaction: 1 })
    this._fetchData()
    this._getAllCompleteCommission()
    this.setState({ setTransaction: 0 })
  }

  _fetchData = async () => {
    const {
      accessType,
      transactions,
      percentOfTransactions
    } = await _fetchTransactions(this.props.currentUser.id)
    this.setState({
      accessType: accessType,
      transactions: transactions,
      percentOfTransactions: percentOfTransactions,
      setTransaction: 1
    })
  }

  _getAllCompleteCommission = async () => {
    const data = await commissionService.getAllTransactionCommission()

    this.setState({
      dataTransactionCommission: data
    })
  }

  render () {
    const { isToggleModalNewTransaction } = this.state
    return (
      <div className='box-main'>
        <Head>
          <title>Transactions</title>
        </Head>
        <div className='row m-0'>
          <div
            className='abc'
            style={{
              width: '100%'
            }}
          >
            {this._renderTransactions()}
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
        {this.state.toggleCashBalance && (
          <CashBalanceModal
            toggle={this._toggleCashBalance}
            currentUser={this.props.currentUser}
            selectedTransactionId={this.state.selectedTransactionId}
            handleCloseTransaction={this._closeTransaction}
          />
        )}
        {isToggleModalNewTransaction && (
          <AddNewTransactionModal
            currentUser={this.props.currentUser}
            isToggleModalNewTransaction={isToggleModalNewTransaction}
            toggleMemberModal={() =>
              this.setState({
                isToggleModalNewTransaction: !isToggleModalNewTransaction
              })
            }
          />
        )}
      </div>
    )
  }

  _previewImage = image => {
    const img = document.querySelector('.new-image')
    const pre = document.querySelector('.preview-image')
    const preI = document.querySelector('.view-input')

    // const inp = document.querySelector("image-update");

    if (image !== null) {
      const reader = new window.FileReader()
      reader.addEventListener('load', function () {
        const result = reader.result
        img.classList.add('hide-ne')
        pre.src = result
        preI.src = result
      })
      reader.readAsDataURL(image)
    }
  }
  _viewAvatar = party => {
    const { currentUser } = this.props
    if (party) {
      if (party.length === 0) {
        return (
          <img
            className='demo-image'
            src={
              currentUser.avatar
                ? currentUser.avatar
                : '/static/images/default-avatar.png'
            }
            alt=''
          />
        )
      } else {
        return party.map((party, index) => (
          <img
            key={index}
            className='demo-image'
            src={
              party.user
                ? party.user.avatar
                  ? party.user.avatar
                  : '/static/images/default-avatar.png'
                : '/static/images/default-avatar.png'
            }
            alt=''
          />
        ))
      }
    }
  }

  _toggleCashBalance = () => {
    this.setState({
      toggleCashBalance: !this.state.toggleCashBalance
    })
  }
  _handleCreateMainImage = async e => {
    if (!e.target.files.length) return
    // const { t } = this.props
    const src = URL.createObjectURL(e.target.files[0])
    this.setState({
      srcImage: src,
      createMainImage: true,
      file: e.target.files[0]
    })
  }

  _renderHeaderButton = (index, transaction) => {
    if (
      this.state.accessType[index] === TransactionAccessType.FULL &&
      !transaction.status
    ) {
      return (
        <UncontrolledDropdown>
          <DropdownToggle tag='a' className='nav-link mr-3 p-0'>
            <i className='fa fa-angle-down' />
          </DropdownToggle>
          <DropdownMenu className='p-0' right>
            <DropdownItem
              className='border-bottom'
              onClick={() => this._archiveTransaction(transaction.id)}
            >
              <i className='fas fa-ban mr-3' />
              Archive
            </DropdownItem>

            {isCoordinator(this.props.currentUser) && (
              <DropdownItem
                onClick={async () => {
                  if (isCoordinator(this.props.currentUser)) {
                    const allAgents = await transactionService.getAllAgents(
                      transaction.id
                    )
                    if (allAgents.transactionAgents.length === 0) {
                      toastr.error(
                        'Nead at least 1 Link Agent to close this transaction!'
                      )
                    } else {
                      this.setState({
                        toggleCashBalance: !this.state.toggleCashBalance,
                        selectedTransactionId: transaction.id
                      })
                    }
                  }
                }}
              >
                <i className='far fa-times-circle mr-3' />
                Close
              </DropdownItem>
            )}
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    } else return <button className='btn text-muted' disabled />
  }

  _percentOfTransaction = transactionId => {
    const percentOfTransaction = this.state.percentOfTransactions.find(
      item => item.transactionId === transactionId
    )
    if (percentOfTransaction) {
      return percentOfTransaction.percent
    }
    return 0
  }
  _viewStatus = transactionId => {
    switch (transactionId) {
      case 'pre-offer':
        return 'Pre-offer'
      case 'under-contract':
        return 'Under contract'
      case 'sold':
        return 'Sold'
      case 'terminated':
        return 'Terminated'
      case 'withdrawn':
        return 'Withdrawn'
      case 'archived':
        return 'Archived'
      case 'pre-listing':
        return 'Pre-listing'
      case 'active-listing':
        return 'Active listing'
      case 'private-listing':
        return 'Private listing'
      case 'leased':
        return 'Leased'
      case 'new':
        return 'New'
      case 'in-process':
        return 'In-process'
      case 'done':
        return 'Done'
      default:
    }
  }

  _renderTimeline = () => {
    let groupTimes = _.groupBy(this.state.activities, function (item) {
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
              <span>
                {`${
                  itemTime.data ? itemTime.data.title : ''
                } ${getTransactionActivity(itemTime.type)} ${
                  itemTime.data ? getRoleLabel(itemTime.data.currentRole) : ''
                }`}
              </span>
            </div>
          </div>
        ))}
      </React.Fragment>
    ))
  }

  _toggleModal = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
      // toggleModal: true
    })
  }

  _selectView = e => {
    this.setState({
      isArchivedView: e.currentTarget.textContent === 'Archived',
      selectedView: e.currentTarget.textContent
    })
  }
  _selectSort = e => {
    let sort = ''
    let active = document.getElementsByClassName('activeB')
    ;[...active].forEach(acT => {
      acT.classList.remove('activeB')
    })
    e.currentTarget.className += ' activeB'
    switch (e.currentTarget.textContent) {
      case 'Name A-Z':
        sort = 'A-Z'
        break
      case 'Name Z-A':
        sort = 'Z-A'
        break
      case 'Recent':
        sort = 'Recent'
        break
      case 'Oldest':
        sort = 'Oldest'
        break
      default:
        break
    }
    this.setState({
      selectedSort: sort
    })
  }
  _archiveTransaction = async transactionId => {
    await transactionService.archiveTransaction(transactionId)
    toastr.success('Archived')
    const {
      accessType,
      transactions,

      percentOfTransactions
    } = await _fetchTransactions(this.props.currentUser.id)

    this.setState({
      accessType,
      transactions,

      percentOfTransactions
    })
  }

  _closeTransaction = async transactionId => {
    await transactionService.closeTransaction(transactionId)
    toastr.success('Closed')
    const {
      accessType,
      transactions,
      percentOfTransactions
    } = await _fetchTransactions(this.props.currentUser.id)

    this.setState({
      accessType,
      transactions,
      percentOfTransactions
    })
  }

  _getClosingDate = transactionId => {
    const { dataTransactionCommission } = this.state
    const data = dataTransactionCommission.find(
      commission => commission.transactionId === transactionId
    )
    if (data) {
      return data.dateClosing || data.createdAt
    }
  }

  _renderTransactions = () => {
    if (this.props.selectedView === 'Complete') {
      return (
        <>
          {this.state.setTransaction === 1 ? (
            <PaginationComponent
              data={this.state.transactions}
              view='Complete'
              viewActive={currentItems => this._viewComplete(currentItems)}
            />
          ) : (
            <div>Load data</div>
          )}
          <br />
        </>
      )
    }
    if (this.props.selectedView === 'Archived') {
      return (
        <>
          {this.state.setTransaction === 1 ? (
            <PaginationComponent
              data={this.state.transactions}
              view='Archived'
              viewActive={currentItems => this._viewArchived(currentItems)}
            />
          ) : (
            <div>Load data</div>
          )}
          <br />
        </>
      )
    }
    if (this.props.selectedView === 'In Progress') {
      return (
        <>
          {this.state.setTransaction === 1 ? (
            <PaginationComponent
              data={this.state.transactions}
              view='In Progress'
              viewActive={currentItems => this._viewActive(currentItems)}
            />
          ) : (
            <div>Load data</div>
          )}
          <br />
        </>
      )
    }
  }
  _viewArchived = currentItems =>
    currentItems.map((transaction, index) => {
      if (transaction.status === TransactionStatus.ARCHIVED) {
        return (
          <div className='demo' key={index}>
            <div className='box-demo'>
              <div className='percent'>
                <div
                  data-progress={this._percentOfTransaction(transaction.id)}
                  className='th-17 d-flex justify-content-center align-items-center display-6 text-white'
                  style={{
                    '&::after': {
                      backgroundImage:
                        'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                    }
                  }}
                />
              </div>
              <p className='demo-title'>{transaction.address}</p>
              <a className='demo-link' href={`${transaction.url}`}>
                {transaction.url}
              </a>
              <div className='state-demo'>
                {moment(transaction.closingDate).format('ll') === 'Jan 1, 1970'
                  ? 'None'
                  : moment(transaction.closingDate).format('ll')}
              </div>
              <div className='demo-des'>{transaction.description}</div>
              <Link route={`/my-transactions/${transaction.id}`}>
                <div className='demo-button-view'>View Project</div>
              </Link>
            </div>
          </div>
        )
      }
    })

  _viewActive = currentItems => {
    if (currentItems.length > 0) {
      return currentItems.map((transaction, index) => {
        if (
          transaction.status !== TransactionStatus.CLOSED &&
          transaction.status !== TransactionStatus.ARCHIVED
        ) {
          return (
            <div className='demo' key={index}>
              <div className='box-demo'>
                <div className='percent'>
                  <div
                    data-progress={this._percentOfTransaction(transaction.id)}
                    className='th-17 d-flex justify-content-center align-items-center display-6 text-white'
                    style={{
                      '&::after': {
                        backgroundImage:
                          'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                      }
                    }}
                  />
                </div>
                <p className='demo-title'>{transaction.address}</p>
                <a className='demo-link' href={`${transaction.url}`}>
                  {transaction.url}
                </a>
                <div className='state-demo'>
                  {this._viewStatus(transaction.transactionTypeStatus)}
                </div>
                <div className='demo-des'>{transaction.description}</div>
                <div className='demo-image-parties'>
                  {this._viewAvatar(transaction.parties)}
                </div>

                <Link route={`/my-transactions/${transaction.id}`}>
                  <div className='demo-button-view'>View Project</div>
                </Link>
              </div>
            </div>
          )
        }
      })
    } else {
      return (
        <>
          {this.props.currentUser.roles[0].name !== 'user' ? (
            <div
              className='demo-2'
              onClick={() => {
                this.setState({ isToggleModalNewTransaction: true })
              }}
            >
              <div className='box-demo2'>
                <div>+</div>
                <h4>New Transaction</h4>
              </div>
            </div>
          ) : null}
        </>
      )
    }
  }
  _viewComplete = currentItems => {
    if (currentItems.length > 0) {
      return currentItems.map((transaction, index) => (
        <div className='demo' key={index}>
          <div className='box-demo'>
            <div className='percent'>
              <div
                data-progress={this._percentOfTransaction(transaction.id)}
                className='th-17 d-flex justify-content-center align-items-center display-6 text-white'
                style={{
                  '&::after': {
                    backgroundImage:
                      'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                  }
                }}
              />
            </div>
            <p className='demo-title'>{transaction.address}</p>
            <a className='demo-link' href={`${transaction.url}`}>
              {transaction.url}
            </a>
            <div className='state-demo'>
              {moment(this._getClosingDate(transaction.id)).format('ll')}
            </div>
            <div className='demo-des'>{transaction.description}</div>
            <Link route={`/my-transactions/${transaction.id}`}>
              <div
                className='demo-button-view'
                onClick={async () => {
                  const { dispatch } = this.props
                  setTimeout(async () => {
                    await dispatch(
                      authRedux.updateTest({ data: 'In Progress' })
                    )
                  }, 2000)
                }}
              >
                View Project
              </div>
            </Link>
          </div>
        </div>
      ))
    } else {
      return <div style={{ height: '510px' }} />
    }
  }
}

// test

export default userOnly(MyTransactionsPage)
