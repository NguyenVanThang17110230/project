import React, { Component } from 'react'
import Head from 'next/head'
import _ from 'lodash'
import moment from 'moment'
import Chart from 'chart.js/auto'
import {
  commissionService,
  userService,
  transactionService
} from '../../services'
import { commissionType } from '../../../common/models/CashBalance'
import {
  isCoordinator,
  isUser,
  Rank,
  Levels,
  CapLimit
} from '../../../common/models/User'
import userOnly from '../../hocs/userOnly'
import { TransactionStatus } from '../../../common/models/Transaction'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

class Dashboard extends Component {
  static async getInitialProps (ctx) {
    const user = ctx.store.getState().global.loginUser.data

    if (isUser(user)) {
      ctx.res.redirect('/my-transactions')
      ctx.res.end()
      return {}
    }

    let _isCoordinator = isCoordinator(user)
    const cashType = _isCoordinator
      ? commissionType.TC_COMMISSION
      : commissionType.AGENT_COMMISSION
    const commissionThisYear = await commissionService.countCommission({
      userId: user.id,
      type: cashType,
      isForThisYear: true
    })

    const commissionTotal = await commissionService.countCommission({
      userId: user.id,
      type: cashType,
      isForThisYear: false
    })

    const commissionPrevYear = await commissionService.countCommissionPrevYear({
      userId: user.id,
      type: cashType
    })

    const allCommission = await commissionService.getUserCommissionThisYear(
      user.id
    )
    const transactions = await transactionService.getTransactionsForUser()
    const dataTran = transactions.slice(0, 10)
    // Classify commission by cash type
    const tcCommission = allCommission.filter(
      commission => commission.cashType === commissionType.TC_COMMISSION
    )
    const agentCommission = allCommission.filter(
      commission => commission.cashType === commissionType.AGENT_COMMISSION
    )
    const referral = allCommission.filter(
      commission => commission.cashType === commissionType.REFERRAL
    )
    const profitShare = allCommission.filter(
      commission => commission.cashType === commissionType.PROFIT_SHARE
    )

    // Get referred agents who current user refer
    const referredList = await userService.getReferredList(user.id)

    // Get information for each referred agent
    const promise = referredList.map(async item =>
      userService.findUserByEmail(item.email)
    )
    const referredListInfo = await Promise.all(promise)

    // Managed transaction (TC only)
    const managedTransaction =
      _isCoordinator &&
      (await commissionService.getTransactionByCoordinator(user.id))

    // Get all agent with detail commission (show in Agent Dashboard)
    const allAgents = await commissionService.getAllAgentCommission()

    return {
      isCoordinator: _isCoordinator,
      commissionThisYear: commissionThisYear.count,
      commissionTotal: commissionTotal.count,
      commissionPrevYear: commissionPrevYear.count,
      allCommission,
      tcCommission,
      agentCommission,
      referral,
      profitShare,
      referredListInfo,
      managedTransaction,
      allAgents,
      headerText: 'Dashboard',
      dataTran
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      currentYear: new Date().getFullYear(),
      selectedMonth: 0,
      view: props.selectedViewDashboard,
      perCentMonth: 0,
      percentYear: 0
    }
  }

  // view rank
  _viewRank = () => {
    const { isCoordinator, currentUser } = this.props
    return (
      <div className='view-rank-db'>
        <div className='d-flex  align-items-center view-rank-db'>
          <div>
            {isCoordinator ? (
              <img
                style={{
                  maxWidth: '80px',
                  maxHeight: '100px'
                }}
                src='static/images/rank/tc.png'
              />
            ) : (
              <img
                className='image-rank'
                src={`/static/images/rank/${currentUser.rank}.png`}
              />
            )}
          </div>
          <div>
            <div className='text-muted'>RANK</div>
            {isCoordinator ? (
              <h3>LINK TC</h3>
            ) : (
              <h3>LINK&nbsp;{this._toUppercase(currentUser.rank, ' ')}</h3>
            )}
          </div>
        </div>
      </div>
    )
  }
  // view up rank
  _viewRankUp = () => {
    const { currentUser } = this.props
    return (
      <div className='col-md-3 view-rank-up-db'>
        <div className='d-flex flex-column'>
          <div className='col-md-12'>
            <div className='d-flex align-items-center'>
              <div className='th-square-2'>
                <img src={`/static/images/New/chevron-up.png`} />
              </div>

              <h6 className='text-dark text-uppercase th-font-weight mb-0'>
                {this._findNextLevel()
                  ? `RANK UP - ${this._findNextLevel().replace(/-/g, ' ')}`
                  : 'MAX LEVEL'}
              </h6>
            </div>
          </div>
          <div className='col-md-12 mb-1'>
            <div className='ml-auto'>
              <div className='counter th-color-link th-font-weight th-size-2 text-right'>
                ${currentUser.cash.toLocaleString()}
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='progress'>
              <div
                className='progress-bar th-bg-link'
                role='progressbar'
                style={{
                  width: `${this._getPercentage()}%`,
                  // width:'10px',
                  height: '6px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view sold year
  _viewSoleYear = () => {
    const { isCoordinator, commissionThisYear } = this.props
    return (
      <div className='view-sold-year-db'>
        <div className='d-flex flex-column'>
          <div className='col-md-12'>
            <div className='d-flex align-items-center'>
              <div className='th-square-2'>
                <img src={`/static/images/New/home.png`} />
              </div>
              <h6 className='text-dark th-font-weight mb-0'>
                {isCoordinator
                  ? 'PROPERTIES MANAGED THIS YEAR'
                  : 'PROPERTIES SOLD THIS YEAR'}
              </h6>
            </div>
          </div>
          <div className='col-md-12 mb-1'>
            <div className='ml-auto'>
              <div className='counter th-color-link th-font-weight th-size-2 text-right'>
                {commissionThisYear}
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='progress'>
            <div
              className='progress-bar th-bg-link'
              role='progressbar'
              style={{
                height: '6px'
              }}
            />
          </div>
        </div>
      </div>
    )
  }
  // view sold total
  _viewSoldTotal = () => {
    const { isCoordinator, commissionTotal } = this.props
    return (
      <div className='view-sold-total-db'>
        <div className='d-flex flex-column view-sold-total-db'>
          <div className='col-md-12'>
            <div className='d-flex align-items-center'>
              <div className='th-square-2'>
                <img src={`/static/images/New/home.png`} />
              </div>
              <h6 className='text-dark th-font-weight mb-0'>
                {isCoordinator
                  ? 'PROPERTIES MANAGED TOTAL'
                  : 'PROPERTIES SOLD TOTAL'}
              </h6>
            </div>
          </div>
          <div className='col-md-12 mb-1'>
            <div className='ml-auto'>
              <div className='counter th-color-link th-font-weight th-size-2 text-right'>
                {commissionTotal}
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='progress'>
              <div
                className='progress-bar th-bg-link'
                role='progressbar'
                style={{
                  height: '6px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  _viewBarChar = () => {
    return (
      <div className='col-lg-8 col-md-8 col-xs-12 mt-4 pl-0 bar-char-db'>
        <div className='card h-100 shadow-sm rounded'>
          <div className='card-body'>
            <div className='d-flex m-b-40 align-items-center no-block'>
              <h5 className='card-title'>Total Commission</h5>
            </div>
            <canvas id='myChart' />
          </div>
        </div>
      </div>
    )
  }

  // view percent
  _viewPercent = () => {
    const { isCoordinator } = this.props
    const {
      totalTcCommission,
      totalAgentCommission,
      totalReferalCost,
      totalProfitShare
    } = this._calculateCommissionPerType()
    let total
    if (isCoordinator) {
      total = totalTcCommission + totalReferalCost + totalProfitShare
      let perTc = (totalTcCommission / total) * 100
      let perRe = (totalReferalCost / total) * 100
      let perSh = (totalProfitShare / total) * 100
      return [perTc, perRe, perSh]
    } else {
      total = totalAgentCommission + totalReferalCost + totalProfitShare
      let perAg = (totalAgentCommission / total) * 100
      let perRe = (totalReferalCost / total) * 100
      let perSh = (totalProfitShare / total) * 100
      return [perAg, perRe, perSh]
    }
  }
  // view donut char
  _viewDonutChar = () => {
    const { currentYear } = this.state
    const { isCoordinator } = this.props
    const data = this._viewPercent()
    const {
      totalTcCommission,
      totalAgentCommission,
      totalReferalCost,
      totalProfitShare
    } = this._calculateCommissionPerType()
    return (
      <div className='col-lg-4 col-md-4 col-xs-12 mt-4 pr-0 donut-chart-db'>
        <div className='card w-auto shadow-sm rounded h-100'>
          <div className='card-body h-100'>
            <div className='h-100 d-flex justify-content-between flex-column'>
              <h4 className='th-font-weight th-size-3'>{currentYear} Income</h4>
              <div className='th-chart'>
                {isCoordinator ? (
                  totalTcCommission === 0 &&
                  totalProfitShare === 0 &&
                  totalReferalCost === 0 ? (
                    <div
                        className='text-center'
                        style={{
                          position: 'absolute',
                          top: '40%',
                          left: '50%',
                          transform: 'translate(-50%,-50%)',
                          fontSize: '15px'
                        }}
                      >
                      No data
                      </div>
                    ) : null
                ) : totalAgentCommission === 0 &&
                  totalProfitShare === 0 &&
                  totalReferalCost === 0 ? (
                    <div
                      className='text-center'
                      style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        fontSize: '15px'
                      }}
                    >
                    No data
                    </div>
                  ) : null}
                <canvas id='incomeChart' />
              </div>
              <ul className='list-inline flex-column d-flex justify-content-around w-100 mt-0 mb-0 list-donut-chart'>
                <li>
                  <div className='d-flex justify-content-between pt-1 pb-1 mb-1'>
                    <h5 className='th-title-char'>
                      <i
                        className='fa fa-circle mr-2'
                        style={{ color: '#325ae7' }}
                      />
                      Properties
                    </h5>
                    <span className='th-title-char text-right'>
                      {data[0] ? data[0].toFixed(2) : 0}%
                    </span>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-between pt-1 pb-1 mb-1'>
                    <h5 className='th-title-char'>
                      <i
                        className='fa fa-circle mr-2'
                        style={{ color: '#5dd2c1' }}
                      />
                      Referrals
                    </h5>
                    <span className='th-title-char text-right'>
                      {data[1] ? data[1].toFixed(2) : 0}%
                    </span>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-between pt-1 pb-1 mb-1'>
                    <h5 className='th-title-char'>
                      <i
                        className='fa fa-circle mr-2'
                        style={{ color: '#f6f7f9' }}
                      />
                      Revenue Share
                    </h5>
                    <span className='th-title-char text-right'>
                      {data[2] ? data[2].toFixed(2) : 0}%
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view current transaction
  _viewCurrentTransaction = () => {
    return (
      <div className='row mt-4 table-current'>
        <div className='col-12'>
          <div className='card shadow-sm rounded'>
            <div className='card-body'>
              <h4 className='th-font-w-5 th-size-3 mb-5'>
                Current / Recent Transactions
              </h4>
              <div className='table-responsive'>
                <table className='table'>
                  <thead className='thead-light'>
                    <tr>
                      <th>Property</th>
                      <th>Client</th>
                      <th>Expected Completion Date</th>
                      <th>Status</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody className='body-half-screen'>
                    {this._renderAllSaleSection()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view line char real estate
  _viewLineCharRealEstate = () => {
    return (
      <div className='col-12 pl-0 pr-0'>
        <div className='card w-auto shadow-sm rounded'>
          <div className='card-body'>
            <div className='d-flex m-b-40 align-items-center no-block'>
              <h5 className='th-font-weight th-size-3'>Property Commission</h5>
            </div>
            <div id='realEstate' className='w-100' />
          </div>
        </div>
      </div>
    )
  }
  // view mid real
  _viewMidReal = () => {
    const { isCoordinator, commissionThisYear, commissionTotal } = this.props
    const { perCentMonth, percentYear } = this.state
    return (
      <div
        className='row ml-0 mr-0 d-flex h-100 p-0 w-100'
        style={{ marginBottom: '20px' }}
      >
        <div className='col-12 col-md-4 col-lg-4 pl-0 card-first'>
          <div className='card w-100 h-100 shadow-sm rounded'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='th-font-weight' style={{ fontSize: '18px' }}>
                  {isCoordinator
                    ? 'Properties Managed Total'
                    : 'Total Properties Sold'}
                </h5>
                <div style={{ height: '30px', width: '30px' }}>
                  <img src={`/static/images/New/sold.png`} />
                </div>
              </div>
              <div className='d-flex mt-3 mb-4'>
                <h5 className='th-font-w-5 th-size-3'>{commissionTotal}</h5>
                <div style={{ width: '20px', height: '20px' }}>
                  <img src={`/static/images/New/up.png`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-4 card-mid'>
          <div className='card w-100 h-100 shadow-sm rounded'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='th-font-weight' style={{ fontSize: '18px' }}>
                  {isCoordinator
                    ? 'Properties Managed This Year'
                    : 'Properties Sold This Year'}
                </h5>
                <div style={{ height: '30px', width: '30px' }}>
                  <img src={`/static/images/New/sold.png`} />
                </div>
              </div>
              <div className='d-flex mt-3 mb-1'>
                <h5 className='th-font-w-5 th-size-3'>{commissionThisYear}</h5>
                {percentYear !== 0 && (
                  <div style={{ width: '20px', height: '20px' }}>
                    <img
                      src={
                        percentYear > 0
                          ? `/static/images/New/up.png`
                          : `/static/images/New/down.png`
                      }
                    />
                  </div>
                )}
              </div>
              {percentYear !== 0 && (
                <div className='text-left'>
                  <span
                    style={{ color: perCentMonth > 0 ? '#31ba7e' : '#f64f59' }}
                  >
                    {percentYear}%{' '}
                    <span style={{ color: '#808292' }}>From Last Year</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-4 pr-0 card-last'>
          <div className='card w-100 h-100 shadow-sm rounded'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='th-font-weight' style={{ fontSize: '18px' }}>
                  {isCoordinator
                    ? 'Total Commission'
                    : 'Total Commission Earned'}
                </h5>
                <div style={{ height: '30px', width: '30px' }}>
                  <img src={`/static/images/New/Total-Commission.png`} />
                </div>
              </div>
              <div className='d-flex mt-3'>
                <h5 className='counter th-font-w-5 th-size-3'>
                  ${this._getTotalMoneyMonth().toLocaleString()}
                </h5>
                {perCentMonth !== 0 && (
                  <div style={{ width: '20px', height: '20px' }}>
                    <img
                      src={
                        perCentMonth > 0
                          ? `/static/images/New/up.png`
                          : `/static/images/New/down.png`
                      }
                    />
                  </div>
                )}
              </div>
              {perCentMonth !== 0 && (
                <div className='text-left'>
                  <span
                    style={{ color: perCentMonth > 0 ? '#31ba7e' : '#f64f59' }}
                  >
                    {perCentMonth.toFixed(2)}%{' '}
                    <span style={{ color: '#808292' }}>From Last Month</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view table real
  _viewTableReal = () => {
    return (
      <div className='col-12 table-current pl-0 pr-0'>
        <div className='card w-100 shadow-sm rounded'>
          <div className='card-body'>
            <h4 className='th-font-w-5 th-size-3 mb-4'>Expected Commission</h4>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <th>Property Name</th>
                  <th>Client</th>
                  <th>Completion Date</th>
                  <th>Commission</th>
                </thead>
                <tbody>{this._viewDataReal()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view line char referral
  _viewLineCharReferral = () => {
    return (
      <div className='col-12 pl-0 pr-0'>
        <div className='card w-auto shadow-sm rounded'>
          <div className='card-body'>
            <div className='d-flex m-b-40 align-items-center no-block'>
              <h5 className='th-font-weight th-size-3'>Referral Commission</h5>
            </div>
            <div id='referral' className='w-100' />
          </div>
        </div>
      </div>
    )
  }
  // view mid referral
  _viewMidReferral = () => {
    return (
      <div
        className='row d-flex h-100 ml-0 mr-0'
        style={{ padding: '0', marginBottom: '20px' }}
      >
        <div className='col-12 col-md-4 col-lg-4 pl-0 card-first'>
          <div className='card w-100 h-100 shadow-sm rounded'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='th-font-weight' style={{ fontSize: '18px' }}>
                  Total Agents Referred
                </h5>
                <div style={{ height: '30px', width: '30px' }}>
                  <img
                    src={`/static/images/New/Total Commission from Referrals.png`}
                  />
                </div>
              </div>
              <div className='d-flex mt-3 mb-4'>
                <h5 className='th-font-w-5 th-size-3'>0</h5>
                {/* <div style={{ width: '20px', height: '20px' }}>
                  <img src={`/static/images/New/up.png`} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-4 card-mid'>
          <div className='card w-100 h-100 shadow-sm rounded'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='th-font-weight' style={{ fontSize: '18px' }}>
                  Agents Referred This Year
                </h5>
                <div style={{ height: '30px', width: '30px' }}>
                  <img
                    src={`/static/images/New/Total Commission from Referrals.png`}
                  />
                </div>
              </div>
              <div className='d-flex mt-3 mb-1'>
                <h5 className='th-font-w-5 th-size-3'>0</h5>
                {/* <div style={{ width: '20px', height: '20px' }}>
                  <img src={`/static/images/New/down.png`} />
                </div> */}
              </div>
              <div className='text-left'>
                {/* <span style={{ color: '#f64f59' }}>
                  -1.2% <span style={{ color: '#808292' }}>From last year</span>
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 col-lg-4 pr-0 card-last'>
          <div className='card w-100 h-100 shadow-sm rounded'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='th-font-weight' style={{ fontSize: '18px' }}>
                  Total Commission Earned
                </h5>
                <div style={{ height: '30px', width: '30px' }}>
                  <img src={`/static/images/New/Total-Commission.png`} />
                </div>
              </div>
              <div className='d-flex mt-3'>
                <h5 className='th-font-w-5 th-size-3'>$0</h5>
                {/* <div style={{ width: '20px', height: '20px' }}>
                  <img src={`/static/images/New/up.png`} />
                </div> */}
              </div>
              <div className='text-left'>
                {/* <span style={{ color: '#31ba7e' }}>
                  +12.21%{' '}
                  <span style={{ color: '#808292' }}>From Last Month</span>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view table referral
  _viewTableReferral = () => {
    return (
      <div className='col-12 pr-0 pl-0 table-current'>
        <div className='card w-100 shadow-sm rounded'>
          <div className='card-body'>
            <h4 className='th-font-w-5 th-size-3 mb-4'>
              Expected Referral Commission
            </h4>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Properties</th>
                    <th>Expected Closing Date</th>
                    <th>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan='4' className='text-center'>
                      No data
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view main
  _viewMain = () => {
    const { isCoordinator } = this.props
    if (this.state.view === 'Main') {
      return (
        <>
          <div className='card-group mb-0'>
            <div className='card shadow-sm rounded'>
              <div className='card-body'>
                <div className='row p-2'>
                  {isCoordinator ? (
                    <div className='col-md-4'>{this._viewRank()}</div>
                  ) : (
                    <div className='col-md-3'>{this._viewRank()}</div>
                  )}
                  {isCoordinator ? <></> : this._viewRankUp()}
                  {isCoordinator ? (
                    <div className='col-md-4'>{this._viewSoleYear()}</div>
                  ) : (
                    <div className='col-md-3'>{this._viewSoleYear()}</div>
                  )}
                  {isCoordinator ? (
                    <div className='col-md-4'>{this._viewSoldTotal()}</div>
                  ) : (
                    <div className='col-md-3'>{this._viewSoldTotal()}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='row w-100 ml-0 mr-0'>
            {this._viewBarChar()}
            {this._viewDonutChar()}
          </div>
          {this._viewCurrentTransaction()}
        </>
      )
    }
    if (this.state.view === 'Real Estate') {
      return (
        <div className='w-100'>
          <div className='row w-100 ml-0 mr-0'>
            {this._viewLineCharRealEstate()}
            {this._viewMidReal()}
            {this._viewTableReal()}
          </div>
        </div>
      )
    }
    if (this.state.view === 'Closed Transactions') {
      return (
        <div className='w-100'>
          <div className='row w-100 ml-0 mr-0'>
            {this._viewLineCharRealEstate()}
            {this._viewMidReal()}
            {this._viewTableReal()}
          </div>
        </div>
      )
    }
    if (this.state.view === 'Referrals') {
      return (
        <section>
          <div className='abc'>
            {this._viewLineCharReferral()}
            {this._viewMidReferral()}
            {this._viewTableReferral()}
          </div>
        </section>
      )
    }
  }
  render () {
    return (
      <div className='box-main'>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className='mt-4'>{this._viewMain()}</div>
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

  _renderCommissionPerMonth = () => {
    const { allCommission } = this.props
    const { currentYear, selectedMonth } = this.state

    const commissionPerMonth = allCommission
      .filter(
        commission =>
          new Date(commission.updatedAt) >=
            new Date(currentYear, selectedMonth, 1) &&
          new Date(commission.updatedAt) <=
            new Date(currentYear, selectedMonth + 1, 0)
      )
      .map((commission, index) => {
        let styledBadge = ''
        switch (commission.cashType) {
          case commissionType.AGENT_COMMISSION:
            styledBadge = 'danger'
            break
          case commissionType.REFERRAL:
            styledBadge = 'warning'
            break
          case commissionType.PROFIT_SHARE:
            styledBadge = 'info'
            break
          case commissionType.TC_COMMISSION:
            styledBadge = 'danger'
            break
        }
        return (
          <tr className='text-center' key={index}>
            <td>{index + 1}</td>
            <td>{moment(commission.updatedAt).format('MMM DD YYYY')}</td>
            <td>
              <span
                className={`badge badge-${styledBadge} badge-pill text-uppercase`}
              >
                {commission.cashType.replace(/-/g, ' ')}
              </span>
            </td>

            <td>
              <span className={`text-${styledBadge}`}>
                ${commission.value.toLocaleString()}
              </span>
            </td>
          </tr>
        )
      })

    if (commissionPerMonth.length === 0) {
      return (
        <tr>
          <td colSpan='4' className='text-center'>
            No data
          </td>
        </tr>
      )
    } else return commissionPerMonth
  }

  _renderPercent = transaction => {
    if (transaction && transaction.parties && transaction.invitations) {
      const data = transaction.percentComplete || 0
      return (
        <div
          className='d-flex align-items-center justify-content-center flex-column'
          style={{ width: '200px' }}
        >
          <span>{data}%</span>
          <div className='w-100'>
            <div className='progress'>
              <div
                className='progress-bar th-bg-link'
                role='progressbar'
                style={{
                  width: `${data}%`,
                  // width:'10px',
                  height: '6px'
                }}
              />
            </div>
          </div>
        </div>
      )
    }
  }

  _renderAllSaleSection = () => {
    const { dataTran, currentUser } = this.props
    // const data = allAgents.filter(x => x.userId === currentUser.id)
    if (dataTran.length === 0) {
      return (
        <tr>
          <td colSpan='4' className='text-center'>
            No data
          </td>
        </tr>
      )
    } else {
      return dataTran.map((transaction, index) => {
        const user = transaction.parties.find(x => x.userId === currentUser.id)
        if (user) {
          return (
            <tr key={index}>
              <td>
                {transaction.city && transaction.state && transaction.apn
                  ? `${transaction.address}, ${transaction.city}, ${
                    transaction.state
                  }, ${transaction.apn}`
                  : transaction.address}
              </td>
              <td>
                {user.firstName
                  ? user.lastName
                    ? user.firstName.concat(' ', user.lastName)
                    : user.firstName
                  : user.user.name}
              </td>
              <td>
                {moment(transaction.closingDate).format('ll') === 'Jan 1, 1970'
                  ? 'None'
                  : moment(transaction.closingDate).format('ll')}
              </td>
              <td>{this.viewStatus(transaction.status)}</td>
              <td>{this._renderPercent(transaction)}</td>
            </tr>
          )
        }
      })
    }
  }
  _viewDataReal = () => {
    const { allAgents, currentUser } = this.props
    const data = allAgents.filter(x => x.userId === currentUser.id)
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan='4' className='text-center'>
            No data
          </td>
        </tr>
      )
    } else {
      return data.reverse().map((item, index) => {
        const { user, transaction } = item
        if (user) {
          return (
            <tr key={index}>
              <td>
                {transaction.city && transaction.state && transaction.apn
                  ? `${transaction.address}, ${transaction.city}, ${
                    transaction.state
                  }, ${transaction.apn}`
                  : transaction.address}
              </td>
              <td>
                {user.firstName
                  ? user.lastName
                    ? user.firstName.concat(' ', user.lastName)
                    : user.firstName
                  : user.name}
              </td>
              <td>{moment(item.updatedAt).format('ll')}</td>
              <td>${item.value}</td>
            </tr>
          )
        }
      })
    }
  }

  viewStatus = status => {
    switch (status) {
      case TransactionStatus.ARCHIVED:
        return <div className='th-status th-status--th-archived'>Archived</div>
      case TransactionStatus.CLOSED:
        return <div className='th-status th-status--th-close'>Complete</div>
      case TransactionStatus.ACTIVE:
        return <div className='th-status th-status--th-active'>Active</div>
      case '':
        return <div className='th-status th-status--th-none'>None</div>
      default:
        break
    }
  }

  _calculateMonthlyCommission = () => {
    const { selectedMonth, currentYear } = this.state
    const {
      agentCommission,
      referral,
      tcCommission,
      isCoordinator
    } = this.props
    const commission = isCoordinator ? tcCommission : agentCommission
    return [...commission, ...referral].reduce((result, current) => {
      if (
        new Date(current.updatedAt) >=
          new Date(currentYear, selectedMonth, 1) &&
        new Date(current.updatedAt) <=
          new Date(currentYear, selectedMonth + 1, 0)
      ) {
        result = result + current.value
      }
      return parseFloat(result.toFixed(2))
    }, 0)
  }

  _toUppercase = (str, replaceChar) => {
    return str.replace(/-/g, replaceChar).toUpperCase()
  }

  _findNextLevel = () => {
    const { currentUser } = this.props
    const indexOfNextLevel =
      Levels.indexOf(this._toUppercase(currentUser.rank, '_')) + 1
    return Rank[Levels[indexOfNextLevel]]
  }

  _getPercentage = () => {
    const { currentUser } = this.props
    if (currentUser.rank === Rank.EXECUTIVE_AGENT) {
      return 100
    } else {
      return (
        (currentUser.cash /
          CapLimit[this._toUppercase(currentUser.rank, '_')]) *
        100
      )
    }
  }

  _getTotalMoneyMonth = () => {
    const { allCommission } = this.props
    if (allCommission && allCommission.length > 0) {
      const day = new Date()
      const month = day.getMonth()
      const total = allCommission
        .filter(
          commission => new Date(commission.updatedAt).getMonth() === month
        )
        .map(commission => commission.value)
        .reduce((result, current) => result + current, 0)
      return total
    } else {
      return 0
    }
  }

  _checkPercent = () => {
    const { allCommission } = this.props
    if (allCommission && allCommission.length > 0) {
      const day = new Date()
      const month = day.getMonth()
      let year = day.getFullYear()
      let prevMonth = month - 1
      if (prevMonth < 0) {
        prevMonth = 11
        year = year - 1
      }
      const total = allCommission
        .filter(
          commission => new Date(commission.updatedAt).getMonth() === month
        )
        .map(commission => commission.value)
        .reduce((result, current) => result + current, 0)
      const totalPrev = allCommission
        .filter(
          commission =>
            new Date(commission.updatedAt).getMonth() === prevMonth &&
            new Date(commission.updatedAt).getFullYear() === year
        )
        .map(commission => commission.value)
        .reduce((result, current) => result + current, 0)
      if (total > 0 && totalPrev > 0) {
        let percent = ((total - totalPrev) / totalPrev) * 100
        this.setState({
          perCentMonth: percent
        })
      } else {
        this.setState({
          perCentMonth: 0
        })
      }
    }
  }

  _checkPercentYear = () => {
    const { commissionThisYear, commissionPrevYear } = this.props
    if ((commissionThisYear > 0, commissionPrevYear > 0)) {
      let data =
        ((commissionThisYear - commissionPrevYear) / commissionPrevYear) * 100
      this.setState({
        percentYear: data
      })
    } else {
      this.setState({
        percentYear: 0
      })
    }
  }

  _calculateCommissionPerMonth = () => {
    const { allAgents, currentUser } = this.props
    return MONTHS.map((month, index) => {
      let ret = allAgents
        .filter(
          commission =>
            (commission.cashType === commissionType.AGENT_COMMISSION ||
              commission.cashType === commissionType.TC_COMMISSION) &&
            new Date(commission.updatedAt).getMonth() === index
        )
        .map(commission => {
          if (commission.userId === currentUser.id) {
            return {
              month: MONTHS[index],
              total: commission.value,
              unique: commission.value
            }
          } else {
            return {
              month: MONTHS[index],
              total: commission.value,
              unique: 0
            }
          }
        })
        .reduce((result, current) => {
          result.month = current.month
          result.total = (result.total || 0) + current.total
          result.unique = (result.unique || 0) + current.unique
          return result
        }, {})

      if (_.isEmpty(ret)) {
        return { month: MONTHS[index], total: 0, unique: 0 }
      } else {
        return ret
      }
    })
  }

  _calculateCountTransactionCommission = () => {
    const { allCommission } = this.props
    return MONTHS.map((month, index) => {
      let ret = allCommission
        .filter(
          commission =>
            (commission.cashType === commissionType.AGENT_COMMISSION ||
              commission.cashType === commissionType.TC_COMMISSION) &&
            new Date(commission.updatedAt).getMonth() === index
        )
        .map(commission => {
          return {
            month: MONTHS[index],
            total: commission.value
          }
        })
        .reduce((result, current) => {
          result.month = current.month
          result.total = (result.total || 0) + current.total
          return result
        }, {})

      if (_.isEmpty(ret)) {
        return { month: MONTHS[index], total: 0 }
      } else {
        return ret
      }
    })
  }

  _calculateRegionalSpitPerMonth = () => {
    const { managedTransaction } = this.props
    return MONTHS.map((month, index) => {
      let ret = managedTransaction
        .filter(
          commission => new Date(commission.updatedAt).getMonth() === index
        )
        .map(commission => {
          return {
            month: MONTHS[index],
            total: commission.regionalSplit
          }
        })
        .reduce((result, current) => {
          result.month = current.month
          result.total = parseFloat(
            ((result.total || 0) + current.total).toFixed(3)
          )
          return result
        }, {})

      if (_.isEmpty(ret)) {
        return { month: MONTHS[index], total: 0 }
      } else {
        return ret
      }
    })
  }

  _calculateCommissionPerType = () => {
    const { tcCommission, agentCommission, referral, profitShare } = this.props
    return {
      totalTcCommission: this._sumCommissionPerType(tcCommission),
      totalAgentCommission: this._sumCommissionPerType(agentCommission),
      totalReferalCost: this._sumCommissionPerType(referral),
      totalProfitShare: this._sumCommissionPerType(profitShare)
    }
  }

  _sumCommissionPerType = commissionType => {
    return commissionType.reduce((result, current) => {
      result = result + current.value
      return result
    }, 0)
  }

  componentDidUpdate (nextProps) {
    if (nextProps.selectedViewDashboard !== this.state.view) {
      if (this.state.view === 'Main') {
        // bar char
        const ctx = document.getElementById('myChart').getContext('2d')
        const donutChar = document.getElementById('incomeChart')
        Chart.defaults.scale.ticks.beginAtZero = true
        const { isCoordinator } = this.props
        const commissionPerMonth = this._calculateCommissionPerMonth()
        const total = commissionPerMonth.map(x => {
          return x.total
        })
        const unique = commissionPerMonth.map(x => {
          return x.unique
        })
        const {
          totalTcCommission,
          totalAgentCommission,
          totalReferalCost,
          totalProfitShare
        } = this._calculateCommissionPerType()
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: MONTHS,
            datasets: [
              {
                label: 'Your commission',
                data: unique,
                backgroundColor: '#c6d3f4'
              },
              {
                label: 'Average commission',
                data: total,
                backgroundColor: '#325ae7'
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  display: true
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  font: {
                    size: 14
                  }
                }
              }
            }
          }
        })
        const newChar = new Chart(donutChar, {
          type: 'doughnut',
          data: {
            labels: ['Revenue Share', 'Properties', 'Referrals'],
            datasets: [
              {
                label: 'Points',
                backgroundColor: ['#f6f7f9', '#325ae7', '#5dd2c1'],
                data: [
                  totalProfitShare,
                  isCoordinator ? totalTcCommission : totalAgentCommission,
                  totalReferalCost
                ]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            animation: {
              animateScale: true
            },
            plugins: {
              legend: {
                display: false,
                position: 'bottom',
                labels: {
                  font: {
                    size: 14
                  }
                }
              }
            }
          }
        })
      }
      if (this.state.view === 'Real Estate') {
        // tess line char
        const data = this._calculateCountTransactionCommission()
        Morris.Area({
          element: 'realEstate',
          data: data,
          xkey: 'month',
          ykeys: ['total'],
          labels: ['Total'],
          pointSize: 3,
          pointFillColors: ['#fff'],
          pointStrokeColors: ['#325ae7'],
          fillOpacity: 0.2,
          parseTime: false,
          behaveLikeLine: true,
          gridLineColor: ['#ecf0fd'],
          lineWidth: 2,
          smooth: false,
          hideHover: 'auto',
          lineColors: ['#325ae7'],
          resize: true
        })
      }
      if (this.state.view === 'Closed Transactions') {
        const data = this._calculateCountTransactionCommission()
        Morris.Area({
          element: 'realEstate',
          data: data,
          xkey: 'month',
          ykeys: ['total'],
          labels: ['Total'],
          pointSize: 3,
          pointFillColors: ['#fff'],
          pointStrokeColors: ['#325ae7'],
          fillOpacity: 0.2,
          parseTime: false,
          behaveLikeLine: true,
          gridLineColor: ['#ecf0fd'],
          lineWidth: 2,
          smooth: false,
          hideHover: 'auto',
          lineColors: ['#325ae7'],
          resize: true
        })
      }
      if (this.state.view === 'Referrals') {
        Morris.Area({
          element: 'referral',
          data: [
            { month: 'Jan', total: 0 },
            { month: 'Feb', total: 0 },
            { month: 'Mar', total: 0 },
            { month: 'Apr', total: 0 },
            { month: 'May', total: 0 },
            { month: 'Jun', total: 0 },
            { month: 'Jul', total: 0 },
            { month: 'Aug', total: 0 },
            { month: 'Sep', total: 0 },
            { month: 'Oct', total: 0 },
            { month: 'Nov', total: 0 },
            { month: 'Dec', total: 0 }
          ],
          xkey: 'month',
          ykeys: ['total'],
          labels: ['Total'],
          pointSize: 3,
          pointFillColors: ['#fff'],
          pointStrokeColors: ['#325ae7'],
          fillOpacity: 0.2,
          parseTime: false,
          behaveLikeLine: true,
          gridLineColor: ['#ecf0fd'],
          lineWidth: 2,
          smooth: false,
          hideHover: 'auto',
          lineColors: ['#325ae7'],
          resize: true
        })
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedViewDashboard !== this.state.view) {
      this.setState({
        view: nextProps.selectedViewDashboard
      })
    }
  }

  componentDidMount () {
    this._checkPercent()
    const { isCoordinator } = this.props
    const commissionPerMonth = this._calculateCommissionPerMonth()
    const total = commissionPerMonth.map(x => {
      return x.total
    })
    const unique = commissionPerMonth.map(x => {
      return x.unique
    })
    const {
      totalTcCommission,
      totalAgentCommission,
      totalReferalCost,
      totalProfitShare
    } = this._calculateCommissionPerType()
    // const regionalSplitPerMonth =
    // isCoordinator && this._calculateRegionalSpitPerMonth()
    if (this.state.view === 'Main') {
      const ctx = document.getElementById('myChart').getContext('2d')
      const donutChar = document.getElementById('incomeChart')
      Chart.defaults.scale.ticks.beginAtZero = true
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: MONTHS,
          datasets: [
            {
              label: 'Your commission',
              data: unique,
              backgroundColor: '#c6d3f4'
            },
            {
              label: 'Average commission',
              data: total,
              backgroundColor: '#325ae7'
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: true
              }
            },
            x: {
              beginAtZero: true,
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              padding: '100px',
              labels: {
                font: {
                  size: 14
                }
              }
            }
          }
        }
      })
      const newChar = new Chart(donutChar, {
        type: 'doughnut',
        data: {
          labels: ['Revenue Share', 'Properties', 'Referrals'],
          datasets: [
            {
              label: 'Points',
              backgroundColor: ['#f6f7f9', '#325ae7', '#5dd2c1'],
              data: [
                totalProfitShare,
                isCoordinator ? totalTcCommission : totalAgentCommission,
                totalReferalCost
              ]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          animation: {
            animateScale: true
          },
          plugins: {
            legend: {
              display: false,
              position: 'bottom',
              labels: {
                font: {
                  size: 14
                }
              }
            }
          }
        }
      })
    }
  }
}
export default userOnly(Dashboard)
