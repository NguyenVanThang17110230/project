import React from 'react'
import Head from 'next/head'
import _ from 'lodash'
import moment from 'moment'
import toastr from 'toastr'
import querystring from 'qs'
import userOnly from '../../hocs/userOnly'
import ReactTable from 'react-table'
import { Router } from '../../../common/routes'
import { userService, transactionService } from '../../services'
// import { getNotificationRole } from '../../../common/view-models/Notification'
// import { TransactionRole } from '../../../common/models/Transaction'
import { isCoordinator } from '../../../common/models/User'
import Role from '../../../common/models/Role'
import Error from 'next/error'
import CloseTransactionModal from '../../component/Transaction/CloseTransactionModal'
import { TransactionRole } from '../../../common/models/Transaction'

const DEFAULT_SEARCH_CRITERIA = {
  page: 0,
  pageSize: 10,
  filtered: [],
  sorted: [{ id: 'createdAt', desc: 'true' }]
}

class AgentsTransactions extends React.Component {
  static async getInitialProps (ctx) {
    const id = ctx.query.idAgent
    const user = await userService.getUserFromId(id)
    user.role = (user.roles.length > 0 && user.roles[0].name) || Role.USER
    return {
      headerText: "Agent's Transactions",
      toggleTimeline: false,
      user
    }
  }

  constructor (props) {
    super(props)
    // Parse querystring from browser URL to search criteria compatible with react-table
    const {
      sorted = DEFAULT_SEARCH_CRITERIA.sorted,
      pageSize = DEFAULT_SEARCH_CRITERIA.pageSize,
      page = DEFAULT_SEARCH_CRITERIA.page,
      filtered = DEFAULT_SEARCH_CRITERIA.filtered
    } = querystring.parse(props.router.query)
    sorted.forEach(sort => (sort.desc = sort.desc === 'true'))

    this.state = {
      toggleCashBalance: false,
      selectedTransactionId: null,
      total: 0,
      pages: 0,
      user: props.user,
      transactions: [],
      searchCriteria: {
        pageSize: parseInt(pageSize),
        page: parseInt(page),
        sorted,
        filtered
      },
      loading: false,
      transactionAgents: []
    }
    this._debouncedFetchData = _.debounce(this._fetchData, 200)
  }

  getNotificationRole = data => {
    switch (data) {
      case TransactionRole.BUYING_AGENT:
        return 'Buyer’s Agent'
      case TransactionRole.SELLER_AGENT:
        return 'Seller’s Agent'
      default:
        break
    }
  }

  render () {
    const { transactions, user, pages, loading, searchCriteria } = this.state
    const { page, pageSize, filtered, sorted } = searchCriteria
    const { t, currentUser } = this.props
    if (currentUser.roles[0].name !== Role.COORDINATOR) {
      return <Error statusCode={404} />
    }
    return (
      <div className='box-main'>
        <Head>
          <title>Agents transactions</title>
        </Head>
        <section className='content'>
          <div className=''>
            <div className='card shadow-sm rounded'>
              <div className='card-header'>
                <span className='card-title' style={{ fontSize: '1.25rem' }}>
                  {`Agents - ${user.firstName.concat(' ', user.lastName)}`}
                </span>
                <div className='card-tools'>
                  <button
                    type='button'
                    className='btn btn-secondary mr-2'
                    onClick={() =>
                      this.setState({ searchCriteria: DEFAULT_SEARCH_CRITERIA })
                    }
                  >
                    {t('admin:clearSearch')}
                  </button>
                </div>
              </div>
              <div className='card-body'>
                <section className='content'>
                  <div className='card'>
                    <ReactTable
                      data={transactions}
                      columns={[
                        {
                          Header: 'Address',
                          accessor: 'address',
                          sortable: false
                        },
                        {
                          Header: 'Transaction Type',
                          accessor: 'transactionType',
                          sortable: false,
                          Cell: props => (
                            <div>
                              {props.value && props.value.replace(/-/g, ' ')}
                            </div>
                          )
                        },
                        {
                          Header: 'Transaction Status',
                          accessor: 'transactionTypeStatus',
                          sortable: false,
                          Cell: props => (
                            <div>
                              {props.value && props.value.replace(/-/g, ' ')}
                            </div>
                          )
                        },
                        {
                          Header: 'Status',
                          accessor: 'status',
                          sortable: false,
                          filterable: false
                        },
                        {
                          Header: 'Party',
                          accessor: 'party',
                          sortable: false,
                          filterable: false,
                          Cell: row => {
                            switch (row.value) {
                              case TransactionRole.BUYING_AGENT:
                                return (
                                  <span className='badge badge-info'>
                                    {this.getNotificationRole(
                                      TransactionRole.BUYING_AGENT
                                    )}
                                  </span>
                                )
                              case TransactionRole.SELLER_AGENT:
                                return (
                                  <span className='badge badge-danger'>
                                    {this.getNotificationRole(
                                      TransactionRole.SELLER_AGENT
                                    )}
                                  </span>
                                )
                            }
                          }
                        },
                        {
                          Header: 'Date of Opening',
                          accessor: 'createdAt',
                          filterable: false,
                          sortable: false,
                          Cell: props => (
                            <div>
                              {props.value &&
                                moment(props.value).format('MM/DD/YYYY')}
                            </div>
                          )
                        },
                        {
                          Header: 'Date of Closing',
                          accessor: 'transactionCommission.dateClosing',
                          filterable: false,
                          sortable: false,
                          Cell: props => (
                            <div>
                              {props.value &&
                                moment(props.value).format('MM/DD/YYYY')}
                            </div>
                          )
                        },
                        {
                          columns: [
                            {
                              Header: () => <span>Actions</span>,
                              width: 100,
                              accessor: 'id',
                              sortable: false,
                              filterable: false,
                              Cell: props => (
                                <div className='text-center'>
                                  {/* <button className='btn btn-sm btn-success '>
                                    <i className='fa fa-eye' />
                                  </button>
                                  &nbsp; */}
                                  <button
                                    className='btn btn-sm btn-info '
                                    data-toggle='tooltip'
                                    title='Close transaction'
                                    onClick={async () => {
                                      if (
                                        isCoordinator(this.props.currentUser)
                                      ) {
                                        const transactionAgents = await transactionService.getAllAgents(
                                          props.value
                                        )
                                        if (transactionAgents.length === 0) {
                                          toastr.error(
                                            'Nead at least 1 Link Agent to close this transaction!'
                                          )
                                        } else {
                                          this.setState({
                                            toggleCashBalance: !this.state
                                              .toggleCashBalance,
                                            selectedTransactionId: props.value,
                                            transactionAgents
                                          })
                                        }
                                      }
                                    }}
                                  >
                                    <i className='fa fa-edit' />
                                  </button>
                                </div>
                              )
                            }
                          ]
                        }
                      ]}
                      filterable
                      manual
                      onFetchData={this._debouncedFetchData}
                      pageSize={pageSize}
                      sorted={sorted}
                      page={page}
                      filtered={filtered}
                      onPageChange={this._updateSearchCriteria('page')}
                      onPageSizeChange={this._updateSearchCriteria('pageSize')}
                      onSortedChange={this._updateSearchCriteria('sorted')}
                      onFilteredChange={this._updateSearchCriteria('filtered')}
                      loading={loading}
                      pages={pages}
                      className='-striped -highlight'
                    />
                  </div>
                </section>
                {this.state.toggleCashBalance && (
                  <CloseTransactionModal
                    isShow={this.state.toggleCashBalance}
                    toggle={this._toggleCashBalance}
                    transactionId={this.state.selectedTransactionId}
                    currentUserId={this.props.currentUser.id}
                    transactionAgents={this.state.transactionAgents}
                    refetchData={() => this._fetchData}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  /**
   * Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
   * You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
   * @param state
   * @return {Promise.<void>}
   * @private
   */
  _fetchData = async ({
    pageSize = DEFAULT_SEARCH_CRITERIA.pageSize,
    page = DEFAULT_SEARCH_CRITERIA.page,
    sorted = DEFAULT_SEARCH_CRITERIA.sorted,
    filtered = DEFAULT_SEARCH_CRITERIA.filtered
  }) => {
    this.setState({ loading: true })

    // Convert react-table search criteria into value that service can understand
    const where = filtered.reduce((acc, val) => {
      switch (val.id) {
        case 'id': {
          acc[val.id] = val.value
          break
        }
        default: {
          acc[val.id] = { regexp: `/${val.value}/i` }
        }
      }
      return acc
    }, {})

    const order =
      _.get(sorted, '[0].id', 'createdAt') +
      ` ${_.get(sorted, '[0].desc') ? 'desc' : 'asc'}`

    try {
      const transactions = await userService.getTransactionInfo({
        userId: this.state.user.id,
        where,
        skip: pageSize * page,
        order,
        limit: pageSize
      })
      const countedTransaction = await userService.getTransactionInfo({
        userId: this.state.user.id,
        where
      })
      const total = countedTransaction.length
      const pages = Math.ceil(total / pageSize)
      // Show the last page if user intentionally hard-code the page value on browser URL to be very large
      const newState = { pages, transactions }
      if (page > pages - 1) {
        newState.searchCriteria = {
          ...this.state.searchCriteria,
          page: Math.max(0, pages - 1) // Avoid edge case when pages = 0 resulting in -1 value, should be at least 0
        }
      }
      this.setState(newState)
      // Persist search criteria to browser URL
      const pagePath = `/manage-agents/${
        this.state.user.id
      }/agent-transactions?${querystring.stringify({
        pageSize,
        page,
        sorted,
        filtered
      })}`
      Router.replaceRoute(pagePath)
    } catch (e) {
      toastr.error(e.message)
    } finally {
      this.setState({ loading: false })
    }
  }
  _updateSearchCriteria = key => value => {
    this.setState({
      searchCriteria: {
        ...this.state.searchCriteria,
        [key]: value
      }
    })
  }

  _toggleCashBalance = () => {
    this.setState({
      toggleCashBalance: !this.state.toggleCashBalance
    })
  }

  _closeTransaction = async transactionId => {
    const {
      sorted = DEFAULT_SEARCH_CRITERIA.sorted,
      pageSize = DEFAULT_SEARCH_CRITERIA.pageSize,
      page = DEFAULT_SEARCH_CRITERIA.page,
      filtered = DEFAULT_SEARCH_CRITERIA.filtered
    } = querystring.parse(this.props.router.query)
    sorted.forEach(sort => (sort.desc = sort.desc === 'true'))
    await transactionService.closeTransaction(transactionId)
    toastr.success('Saved')
    await this._fetchData({ pageSize, page, sorted, filtered })
  }
}

export default userOnly(AgentsTransactions)
