import React from 'react'
import Head from 'next/head'
import _ from 'lodash'
// import moment from 'moment'
import ReactTable from 'react-table'
import toastr from 'toastr'
import querystring from 'qs'
import userOnly from '../../hocs/userOnly'
import { userService } from '../../services'
import { Link, Router } from '../../../common/routes'
import { Rank } from '../../../common/models/User'
import Error from 'next/error'
import Role from '../../../common/models/Role'

const DEFAULT_SEARCH_CRITERIA = {
  page: 0,
  pageSize: 10,
  filtered: [],
  sorted: [{ id: 'createdAt', desc: 'true' }]
}

class ManageAgents extends React.Component {
  static async getInitialProps (ctx) {
    return {
      headerText: 'Manage Agents'
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
      total: 0,
      pages: 0,
      users: [],
      searchCriteria: {
        pageSize: parseInt(pageSize),
        page: parseInt(page),
        sorted,
        filtered
      },
      loading: false
    }
    this._debouncedFetchData = _.debounce(this._fetchData, 200)
  }

  render () {
    const { users, pages, loading, searchCriteria } = this.state
    const { page, pageSize, filtered, sorted } = searchCriteria
    const { t, currentUser } = this.props
    if (currentUser.roles[0].name !== Role.COORDINATOR) {
      return <Error statusCode={404} />
    }
    return (
      <div className='box-main'>
        <Head>
          <title>Manage Agents</title>
        </Head>
        <section className='content'>
          <div className=''>
            <div className='card shadow-sm rounded'>
              <div className='card-header'>
                <span className='card-title' style={{ fontSize: '1.25rem' }}>
                  Agents
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
                      data={users}
                      columns={[
                        {
                          Header: 'Agent ID',
                          accessor: 'id',
                          filterable: false
                        },
                        {
                          id: t('firstName'),
                          Header: t('First name'),
                          accessor: d =>
                            d.firstName ? `${d.firstName}` : `${d.name}`
                        },
                        {
                          id: t('lastName'),
                          Header: t('Last name'),
                          accessor: d => (d.lastName ? `${d.lastName}` : '')
                        },
                        {
                          Header: 'Agent Level',
                          accessor: 'rank',
                          sortable: false,
                          Cell: row =>
                            row.value === Rank.AGENT ? (
                              <span className='badge badge-danger text-capitalize'>
                                {Rank.AGENT}
                              </span>
                            ) : row.value === Rank.EXECUTIVE_AGENT ? (
                              <span className='badge badge-success text-capitalize'>
                                {Rank.EXECUTIVE_AGENT.replace(/-/g, ' ')}
                              </span>
                            ) : row.value === Rank.VICE_PRESIDENT ? (
                              <>
                                <span className='badge badge-warning text-capitalize'>
                                  {Rank.VICE_PRESIDENT.replace(/-/g, ' ')}
                                </span>
                                {row.original.cash >= 400000 && (
                                  <button
                                    type='button'
                                    className='btn'
                                    data-toggle='tooltip'
                                    title='Move up to PARTNER'
                                    onClick={() =>
                                      window.confirm(
                                        'Move up this Agent to Partner'
                                      ) &&
                                      this._moveUpToPartner(
                                        row.original.id,
                                        Rank.PARTNER,
                                        row.original.cash
                                      )
                                    }
                                  >
                                    <i className='fas fa-arrow-circle-up pull-right text-info' />
                                  </button>
                                )}
                              </>
                            ) : (
                              <span className='badge badge-info text-capitalize'>
                                {Rank.PARTNER}
                              </span>
                            ),
                          Filter: ({ filter, onChange }) => (
                            <select
                              onChange={event => onChange(event.target.value)}
                              className='form-control form-control-sm text-capitalize'
                              value={filter ? filter.value : 'all'}
                            >
                              <option value='all'>All</option>
                              <option value={`${Rank.AGENT}`}>{`${
                                Rank.AGENT
                              }`}</option>
                              <option
                                value={`${Rank.EXECUTIVE_AGENT}`}
                              >{`${Rank.EXECUTIVE_AGENT.replace(
                                  /-/g,
                                  ' '
                                )}`}</option>
                            </select>
                          )
                        },
                        {
                          Header: 'Agent total commission gain',
                          accessor: 'cash',
                          filterable: false
                        },
                        {
                          columns: [
                            {
                              Header: () => <span>{t('Actions')}</span>,
                              width: 100,
                              accessor: 'id',
                              sortable: false,
                              filterable: false,
                              Cell: props => (
                                <div className='text-center'>
                                  <Link
                                    route={`/manage-agents/${props.value}/edit`}
                                  >
                                    <a
                                      className='btn btn-sm btn-info '
                                      data-toggle='tooltip'
                                      title='Edit'
                                    >
                                      <i className='fa fa-edit' />
                                    </a>
                                  </Link>
                                  &nbsp;
                                  <Link
                                    route={`/manage-agents/${
                                      props.value
                                    }/agent-transactions`}
                                  >
                                    <a
                                      className='btn btn-sm btn-info '
                                      data-toggle='tooltip'
                                      title={`Agent's transactions`}
                                    >
                                      <i className='fa fa-share-alt' />
                                    </a>
                                  </Link>
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
              </div>
            </div>
          </div>
        </section>
        <footer className='footer-card' style={{ padding: '2rem 0rem' }}>
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

  _moveUpToPartner = async (id, rank, cash) => {
    const {
      sorted = DEFAULT_SEARCH_CRITERIA.sorted,
      pageSize = DEFAULT_SEARCH_CRITERIA.pageSize,
      page = DEFAULT_SEARCH_CRITERIA.page,
      filtered = DEFAULT_SEARCH_CRITERIA.filtered
    } = querystring.parse(this.props.router.query)
    sorted.forEach(sort => (sort.desc = sort.desc === 'true'))
    await userService.updateRankAndCash(id, rank, cash)
    toastr.success('Saved')
    this._fetchData({ pageSize, page, sorted, filtered })
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
    const where = filtered.reduce(
      (acc, val) => {
        switch (val.id) {
          case 'rank':
            if (val.value === Rank.AGENT) {
              acc[val.id] = Rank.AGENT
            } else if (val.value === Rank.VICE_PRESIDENT) {
              acc[val.id] = Rank.VICE_PRESIDENT
            } else if (val.value === Rank.EXECUTIVE_AGENT) {
              acc[val.id] = Rank.EXECUTIVE_AGENT
            } else if (val.value === Rank.PARTNER) {
              acc[val.id] = Rank.PARTNER
            }
            break
          case 'id': {
            acc[val.id] = val.value
            break
          }
          default: {
            acc[val.id] = { regexp: `/${val.value}/i` }
          }
        }
        return acc
      },
      { or: [{ rank: Rank.AGENT }, { rank: Rank.EXECUTIVE_AGENT }] }
    )
    const order =
      _.get(sorted, '[0].id', 'createdAt') +
      ` ${_.get(sorted, '[0].desc') ? 'desc' : 'asc'}`

    try {
      const { total, users } = await userService.getUsersForAdmin({
        where,
        skip: pageSize * page,
        order,
        limit: pageSize
      })
      const pages = Math.ceil(total / pageSize)
      // Show the last page if user intentionally hard-code the page value on browser URL to be very large
      const newState = { pages, users }
      if (page > pages - 1) {
        newState.searchCriteria = {
          ...this.state.searchCriteria,
          page: Math.max(0, pages - 1) // Avoid edge case when pages = 0 resulting in -1 value, should be at least 0
        }
      }
      this.setState(newState)

      // Persist search criteria to browser URL
      const pagePath = `/manage-agents?${querystring.stringify({
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

  _deleteUser = async id => {
    if (confirm('Are you sure you wish to delete this user?')) {
      try {
        this.setState({ loading: true })
        await userService.deleteUserWithId(id)
        await this._fetchData(this.state.searchCriteria)
      } catch (error) {
        toastr.error(error)
      } finally {
        this.setState({ loading: false })
      }
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
}

export default userOnly(ManageAgents)
