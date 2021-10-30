import React, { Component } from 'react'
import { Formik } from 'formik'
import { Modal } from 'reactstrap'
import NumberFormat from 'react-number-format'
import _ from 'lodash'
import toastr from 'toastr'
import {
  transactionService,
  userService,
  commissionService
} from '../../services'
import { getRoleLabel } from '../../view-models/User'
import { isCoordinator } from '../../../common/models/User'
import {
  TRANSACTION_COST,
  ERRORS_AND_OMISSION,
  commissionType
} from '../../../common/models/CashBalance'

class CashBalanceModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allAgents: null
    }
  }
  render () {
    const {
      isShow,
      toggle,
      currentUser,
      selectedTransactionId,
      handleCloseTransaction
    } = this.props
    const {
      isEditting,
      totalCommission,
      regionalSplit,
      agentCommission,
      allAgents,
      referrers,
      referrers1,
      referrers2,
      numberOfAgents
    } = this.state

    return (
      <Modal isOpen={isShow} toggle={toggle} id='new-transaction-modal'>
        <div>
          <button
            type='button'
            className='close bg-transparent pt-3 px-3'
            data-dismiss='modal'
            onClick={toggle}
          >
            &times;
          </button>
        </div>
        {numberOfAgents === 1 && (
          <Formik
            initialValues={{
              totalCommission: totalCommission || null,
              agentCommission: agentCommission ? agentCommission[0].value : 0,
              agentSplit: agentCommission
                ? this._calculateAgentSplit(
                  agentCommission[0].value,
                  totalCommission
                )
                : 0.7,
              totalReferralCost: agentCommission
                ? this._calculateTotalReferralCost(
                  referrers,
                  agentCommission[0].value
                )
                : 0,
              regionalSplit: regionalSplit || 0
            }}
            onSubmit={async (values, action) => {
              const { setSubmitting } = action
              if (!values.totalCommission) {
                setSubmitting(true)
                toastr.error('Total commission can not be empty')
                setSubmitting(false)
                return
              }
              try {
                setSubmitting(true)
                if (isEditting) {
                  await this._deleteAllInfo()
                }
                // Save total commission, regional split
                let transactionCommission = commissionService.createTransactionCommission(
                  {
                    totalCommission: values.totalCommission,
                    regionalSplit: values.regionalSplit,
                    transactionId: selectedTransactionId,
                    coordinatorId: currentUser.id
                  }
                )

                // Save transaction cost
                let tcCommission = commissionService.createUserCommission({
                  cashType: commissionType.TC_COMMISSION,
                  value: TRANSACTION_COST,
                  userId: currentUser.id,
                  transactionId: selectedTransactionId
                })

                // Save agent commission
                let agentCommission = commissionService.createUserCommission({
                  cashType: commissionType.AGENT_COMMISSION,
                  value: values.agentCommission,
                  userId: allAgents[0].userId,
                  transactionId: selectedTransactionId
                })

                // Save Profit-Share
                let profitShare =
                  values.totalReferralCost > 0 &&
                  commissionService.createUserCommission({
                    cashType: commissionType.PROFIT_SHARE,
                    value: values.totalReferralCost,
                    userId: allAgents[0].userId,
                    transactionId: selectedTransactionId
                  })

                // Save Referral
                let referral = Promise.all(
                  referrers.map(async (referrer, index) => {
                    await commissionService.createUserCommission({
                      cashType: commissionType.REFERRAL,
                      value: this._calculateReferralCost(
                        index === 0,
                        (values.totalCommission || 0) * (1 - values.agentSplit)
                      ),
                      userId: referrer.id,
                      transactionId: selectedTransactionId
                    })
                  })
                )
                // Promise all
                await Promise.all([
                  transactionCommission,
                  tcCommission,
                  agentCommission,
                  profitShare,
                  referral
                ])
                handleCloseTransaction(selectedTransactionId)
                toggle()
              } catch (error) {
                console.error(error)
              }
              setSubmitting(false)
            }}
          >
            {({ values, isSubmitting, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className='modal-body px-5 mx-2'>
                  <div>
                    <h3 className='text-center font-weight-bold mb-5'>
                      Cash Balance
                    </h3>
                    <div className='row'>
                      <div className='col-12 text-center'>
                        <label className='h5 font-weight-bold text-muted'>
                          Total Commission
                        </label>
                        <div className='form-group col-12 col-md-6 mx-auto'>
                          <NumberFormat
                            readOnly={!isCoordinator(currentUser)}
                            placeholder='$ Enter Commission Amount'
                            thousandSeparator
                            autoFocus
                            prefix={'$ '}
                            className='form-control'
                            allowNegative={false}
                            value={values.totalCommission}
                            onValueChange={val => {
                              this._handleChangeOn1Agent(
                                val.floatValue,
                                values.agentSplit,
                                setFieldValue
                              )
                            }}
                          />
                          <p className='text-muted mb-5'>
                            <small>
                              Add the commission amount in full. Do not enter
                              the full sale above.
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className='col-6 px-4'>
                        <div>
                          <div className='form-row mb-5'>
                            <div className='col-8'>
                              <label className='h5 font-weight-bold text-muted'>
                                Agent's Commission
                              </label>
                              <NumberFormat
                                readOnly
                                thousandSeparator
                                prefix={'$ '}
                                className='form-control'
                                value={values.agentCommission}
                              />
                            </div>
                            <div className='col-4'>
                              <label className='h5 font-weight-bold text-muted'>
                                Agent's Split
                              </label>
                              <input
                                type='number'
                                min='0'
                                max='1'
                                step='0.1'
                                className='form-control'
                                value={values.agentSplit}
                                onChange={e => {
                                  let agentSplit = Number(e.target.value)
                                  if (this._countDecimals(agentSplit) > 1) {
                                    return
                                  }
                                  this._handleChangeOn1Agent(
                                    values.totalCommission,
                                    agentSplit,
                                    setFieldValue
                                  )
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <label className='h5 font-weight-bold text-muted'>
                          Total Referral Cost
                        </label>
                        <div className='form-group'>
                          <table
                            className='table rounded-pill m-0'
                            style={{ borderRadius: '100' }}
                          >
                            <thead className='bg-secondary border'>
                              <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Balance</th>
                              </tr>
                            </thead>
                            <tbody className='border'>
                              {this._renderReferrer(
                                referrers,
                                values.totalCommission,
                                values.agentSplit
                              )}
                            </tbody>
                          </table>
                          <p className='text-muted'>
                            <small>
                              {referrers.length <= 1
                                ? `${referrers.length} Degree`
                                : `${referrers.length} Degrees`}{' '}
                              of Referrals
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className='col-6 px-4'>
                        <label className='h5 font-weight-bold text-muted'>
                          Transaction Cost
                        </label>
                        <div className='form-group'>
                          <NumberFormat
                            readOnly
                            thousandSeparator
                            prefix={'$ '}
                            className='form-control'
                            value={TRANSACTION_COST}
                          />
                          <p className='text-muted'>
                            <small>Transaction Coordination Cost</small>
                          </p>
                        </div>

                        <label className='h5 font-weight-bold text-muted'>
                          Errors and Omission
                        </label>
                        <div className='form-group'>
                          <NumberFormat
                            readOnly
                            thousandSeparator
                            prefix={'$ '}
                            className='form-control'
                            value={ERRORS_AND_OMISSION}
                          />
                          <p className='text-muted'>
                            <small>Flat Rate Errors and Omission Cost</small>
                          </p>
                        </div>

                        <label className='h5 font-weight-bold text-muted'>
                          Regional Split
                        </label>
                        <div className='form-group'>
                          <NumberFormat
                            readOnly
                            thousandSeparator
                            prefix={'$ '}
                            className='form-control'
                            value={values.regionalSplit}
                          />
                          <p className='text-muted'>
                            <small>
                              Agents Commission (60% of Brokerage Profits)
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='text-center my-5'>
                    <button type='submit' className='btn text-white py-2 px-3'>
                      {isSubmitting && (
                        <span className='spinner-border spinner-border-sm mr-2' />
                      )}
                      Close Transaction
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        )}
        {numberOfAgents === 2 && (
          <Formik
            initialValues={{
              totalCommission: totalCommission || null,
              agentCommission1: agentCommission
                ? this._getAgentCommissionWhenEdit(
                  agentCommission,
                  allAgents[0].userId
                ).value
                : 0,
              ratio1: agentCommission
                ? this._getAgentCommissionWhenEdit(
                  agentCommission,
                  allAgents[0].userId
                ).ratio
                : 0.5,
              ratio2: agentCommission
                ? this._getAgentCommissionWhenEdit(
                  agentCommission,
                  allAgents[1].userId
                ).ratio
                : 0.5,
              agentCommission2: agentCommission
                ? this._getAgentCommissionWhenEdit(
                  agentCommission,
                  allAgents[1].userId
                ).value
                : 0,
              totalReferralCost1: agentCommission
                ? this._calculateTotalReferralCost(
                  referrers1,
                  this._getAgentCommissionWhenEdit(
                    agentCommission,
                    allAgents[0].userId
                  )
                )
                : 0,
              totalReferralCost2: agentCommission
                ? this._calculateTotalReferralCost(
                  referrers2,
                  this._getAgentCommissionWhenEdit(
                    agentCommission,
                    allAgents[1].userId
                  )
                )
                : 0,
              agentSplit1: agentCommission
                ? this._calculateAgentSplit(
                  this._getAgentCommissionWhenEdit(
                    agentCommission,
                    allAgents[0].userId
                  ).value,
                  totalCommission *
                      this._getAgentCommissionWhenEdit(
                        agentCommission,
                        allAgents[0].userId
                      ).ratio
                )
                : 0.9,
              agentSplit2: agentCommission
                ? this._calculateAgentSplit(
                  this._getAgentCommissionWhenEdit(
                    agentCommission,
                    allAgents[1].userId
                  ).value,
                  totalCommission *
                      this._getAgentCommissionWhenEdit(
                        agentCommission,
                        allAgents[1].userId
                      ).ratio
                )
                : 0.9,
              regionalSplit: regionalSplit || 0
            }}
            onSubmit={async (values, action) => {
              const { setSubmitting } = action
              if (!values.totalCommission) {
                setSubmitting(true)
                toastr.error('Total commission can not be empty')
                setSubmitting(false)
                return
              }
              try {
                setSubmitting(true)
                if (isEditting) {
                  await this._deleteAllInfo()
                }
                // Save total commission, regional split
                let transactionCommission = await commissionService.createTransactionCommission(
                  {
                    totalCommission: values.totalCommission,
                    regionalSplit: values.regionalSplit,
                    transactionId: selectedTransactionId,
                    coordinatorId: currentUser.id
                  }
                )

                // Save transaction cost
                let tcCommission1 = await commissionService.createUserCommission(
                  {
                    cashType: commissionType.TC_COMMISSION,
                    value: TRANSACTION_COST,
                    userId: currentUser.id,
                    transactionId: selectedTransactionId
                  }
                )

                let tcCommission2 = await commissionService.createUserCommission(
                  {
                    cashType: commissionType.TC_COMMISSION,
                    value: TRANSACTION_COST,
                    userId: currentUser.id,
                    transactionId: selectedTransactionId
                  }
                )

                // Save agent commission
                let agentCommission1 = await commissionService.createUserCommission(
                  {
                    cashType: commissionType.AGENT_COMMISSION,
                    value: values.agentCommission1,
                    userId: allAgents[0].userId,
                    transactionId: selectedTransactionId,
                    ratio: values.ratio1
                  }
                )

                let agentCommission2 = await commissionService.createUserCommission(
                  {
                    cashType: commissionType.AGENT_COMMISSION,
                    value: values.agentCommission2,
                    userId: allAgents[1].userId,
                    transactionId: selectedTransactionId,
                    ratio: values.ratio2
                  }
                )

                // Save Profit-Share
                let profitShare1 =
                  values.totalReferralCost1 > 0 &&
                  (await commissionService.createUserCommission({
                    cashType: commissionType.PROFIT_SHARE,
                    value: values.totalReferralCost1,
                    userId: allAgents[0].userId,
                    transactionId: selectedTransactionId
                  }))

                let profitShare2 =
                  values.totalReferralCost2 > 0 &&
                  (await commissionService.createUserCommission({
                    cashType: commissionType.PROFIT_SHARE,
                    value: values.totalReferralCost2,
                    userId: allAgents[1].userId,
                    transactionId: selectedTransactionId
                  }))

                // Save Referral
                let referral1 = await Promise.all(
                  referrers1.map(async (referrer, index) => {
                    await commissionService.createUserCommission({
                      cashType: commissionType.REFERRAL,
                      value: this._calculateReferralCost(
                        index === 0,
                        values.agentCommission1
                      ),
                      userId: referrer.id,
                      transactionId: selectedTransactionId
                    })
                  })
                )

                let referral2 = await Promise.all(
                  referrers2.map(async (referrer, index) => {
                    await commissionService.createUserCommission({
                      cashType: commissionType.REFERRAL,
                      value: this._calculateReferralCost(
                        index === 0,
                        values.agentCommission2
                      ),
                      userId: referrer.id,
                      transactionId: selectedTransactionId
                    })
                  })
                )
                // Promise all
                await Promise.all([
                  transactionCommission,
                  tcCommission1,
                  tcCommission2,
                  agentCommission1,
                  agentCommission2,
                  profitShare1,
                  profitShare2,
                  referral1,
                  referral2
                ])

                handleCloseTransaction(selectedTransactionId)
                toggle()
              } catch (error) {
                console.error(error)
              }
              setSubmitting(false)
            }}
          >
            {({ values, isSubmitting, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className='modal-body px-5 mx-2'>
                  <div>
                    <h3 className='text-center font-weight-bold mb-5'>
                      Cash Balance
                    </h3>
                    <div className='row'>
                      <div className='col-12 text-center'>
                        <label className='h5 font-weight-bold text-muted'>
                          Total Commission
                        </label>
                        <div className='form-group col-md-6 mx-auto'>
                          <NumberFormat
                            readOnly={!isCoordinator(currentUser)}
                            placeholder='$ Enter Commission Amount'
                            thousandSeparator
                            autoFocus
                            prefix={'$ '}
                            className='form-control'
                            allowNegative={false}
                            value={values.totalCommission}
                            onValueChange={val => {
                              this._handleChangeOn2Agents(
                                val.floatValue,
                                values.agentSplit1,
                                values.agentSplit2,
                                values.ratio1,
                                values.ratio2,
                                setFieldValue
                              )
                            }}
                          />
                          <p className='text-muted mb-5'>
                            <small>
                              Add the commission amount in full. Do not enter
                              the full sale above.
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className='col-12 px-4'>
                        <div className='form-row mb-5'>
                          <div className='col-6'>
                            <label className='h5 font-weight-bold text-muted'>
                              Agent's Commission (
                              {getRoleLabel(allAgents[0].role)})
                            </label>
                            <NumberFormat
                              readOnly
                              thousandSeparator
                              prefix={'$ '}
                              className='form-control'
                              value={values.agentCommission1}
                            />
                          </div>
                          <div className='col-3'>
                            <label className='h5 font-weight-bold text-muted'>
                              Agent's Split
                            </label>
                            <input
                              type='number'
                              min={0}
                              max={1}
                              step='0.1'
                              className='form-control'
                              value={values.agentSplit1}
                              onkeydown='false'
                              onChange={e => {
                                let agentSplit1 = Number(e.target.value)
                                if (this._countDecimals(agentSplit1) > 1) return
                                this._handleChangeOn2Agents(
                                  values.totalCommission,
                                  agentSplit1,
                                  values.agentSplit2,
                                  values.ratio1,
                                  values.ratio2,
                                  setFieldValue
                                )
                              }}
                            />
                          </div>
                          <div className='col-3'>
                            <label className='h5 font-weight-bold text-muted'>
                              Ratio
                            </label>
                            <input
                              type='number'
                              min={0}
                              max={1}
                              step='0.1'
                              className='form-control'
                              value={values.ratio1}
                              onkeydown='return false'
                              onChange={e => {
                                let ratio1 = Number(e.target.value)
                                let ratio2 = parseFloat((1 - ratio1).toFixed(1))
                                if (this._countDecimals(ratio1) > 1) return
                                this._handleChangeOn2Agents(
                                  values.totalCommission,
                                  values.agentSplit1,
                                  values.agentSplit2,
                                  ratio1,
                                  ratio2,
                                  setFieldValue
                                )
                              }}
                            />
                          </div>
                        </div>

                        <div className='form-row mb-5'>
                          <div className='col-6'>
                            <label className='h5 font-weight-bold text-muted'>
                              Agent's Commission (
                              {getRoleLabel(allAgents[1].role)})
                            </label>
                            <NumberFormat
                              readOnly
                              thousandSeparator
                              prefix={'$ '}
                              className='form-control'
                              value={values.agentCommission2}
                            />
                          </div>
                          <div className='col-3'>
                            <label className='h5 font-weight-bold text-muted'>
                              Agent's Split
                            </label>
                            <input
                              type='number'
                              min={0}
                              max={1}
                              step='0.1'
                              className='form-control'
                              value={values.agentSplit2}
                              onkeydown='return false'
                              onChange={e => {
                                let agentSplit2 = Number(e.target.value)
                                if (this._countDecimals(agentSplit2) > 1) return
                                this._handleChangeOn2Agents(
                                  values.totalCommission,
                                  values.agentSplit1,
                                  agentSplit2,
                                  values.ratio1,
                                  values.ratio2,
                                  setFieldValue
                                )
                              }}
                            />
                          </div>
                          <div className='col-3'>
                            <label className='h5 font-weight-bold text-muted'>
                              Ratio
                            </label>
                            <input
                              type='number'
                              min={0}
                              max={1}
                              step='0.1'
                              className='form-control'
                              value={values.ratio2}
                              onkeydown='return false'
                              onChange={e => {
                                let ratio2 = Number(e.target.value)
                                let ratio1 = parseFloat((1 - ratio2).toFixed(1))
                                if (this._countDecimals(ratio2) > 1) return
                                this._handleChangeOn2Agents(
                                  values.totalCommission,
                                  values.agentSplit1,
                                  values.agentSplit2,
                                  ratio1,
                                  ratio2,
                                  setFieldValue
                                )
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-6 px-4'>
                        <label className='h5 font-weight-bold text-muted'>
                          Referral Cost ({getRoleLabel(allAgents[0].role)})
                        </label>
                        <div className='form-group'>
                          <table className='table rounded-pill m-0'>
                            <thead className='bg-secondary border'>
                              <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Balance</th>
                              </tr>
                            </thead>
                            <tbody className='border'>
                              {this._renderReferrer(
                                referrers1,
                                values.totalCommission * values.ratio1,
                                values.agentSplit1
                              )}
                            </tbody>
                          </table>
                          <p className='text-muted'>
                            <small>
                              {referrers1.length <= 1
                                ? `${referrers1.length} Degree`
                                : `${referrers1.length} Degrees`}{' '}
                              of Referrals
                            </small>
                          </p>
                        </div>
                        <label className='h5 font-weight-bold text-muted'>
                          Referral Cost ({getRoleLabel(allAgents[1].role)})
                        </label>
                        <div className='form-group'>
                          <table className='table rounded-pill m-0'>
                            <thead className='bg-secondary border'>
                              <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Balance</th>
                              </tr>
                            </thead>
                            <tbody className='border'>
                              {this._renderReferrer(
                                referrers2,
                                values.totalCommission * values.ratio2,
                                values.agentSplit2
                              )}
                            </tbody>
                          </table>
                          <p className='text-muted mb-5'>
                            <small>
                              {referrers2.length <= 1
                                ? `${referrers2.length} Degree`
                                : `${referrers2.length} Degrees`}{' '}
                              of Referrals
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className='col-6 px-4'>
                        <label className='h5 font-weight-bold text-muted'>
                          Transaction Cost
                        </label>
                        <div className='form-group'>
                          <NumberFormat
                            readOnly
                            thousandSeparator
                            prefix={'$ '}
                            className='form-control'
                            value={TRANSACTION_COST}
                          />
                          <p className='text-muted mb-5'>
                            <small>Transaction Coordination Cost</small>
                          </p>
                        </div>

                        <label className='h5 font-weight-bold text-muted'>
                          Errors and Omission
                        </label>
                        <div className='form-group'>
                          <NumberFormat
                            readOnly
                            thousandSeparator
                            prefix={'$ '}
                            className='form-control'
                            value={ERRORS_AND_OMISSION}
                          />
                          <p className='text-muted mb-5'>
                            <small>Flat Rate Errors and Omission Cost</small>
                          </p>
                        </div>

                        <label className='h5 font-weight-bold text-muted'>
                          Regional Split
                        </label>
                        <div className='form-group'>
                          <NumberFormat
                            readOnly
                            thousandSeparator
                            prefix={'$ '}
                            className='form-control'
                            value={values.regionalSplit}
                          />
                          <p className='text-muted mb-5'>
                            <small>
                              Agents Commission (60% of Brokerage Profits)
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='text-center'>
                    <button type='submit' className='btn text-white px-5 mb-3'>
                      {isSubmitting && (
                        <span className='spinner-border spinner-border-sm mr-2' />
                      )}
                      Close Transaction
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        )}
      </Modal>
    )
  }

  _countDecimals = value => {
    if (Math.floor(value) === value) return 0
    return value.toString().split('.')[1].length || 0
  }

  _getAgentCommissionWhenEdit = (listUser, userId) => {
    return _.find(listUser, { userId })
  }

  _renderReferrer = (referrers, totalCommission, agentSplit) => {
    let restCommission = (totalCommission || 0) * (1 - agentSplit)
    if (referrers.length === 0) {
      return (
        <tr>
          <td colSpan='2' />
        </tr>
      )
    } else {
      return referrers.map(
        (referrer, index) =>
          index < 2 && (
            <tr key={index}>
              <td>{referrer.name}</td>
              <td>
                $ {this._calculateReferralCost(index === 0, restCommission)}
              </td>
            </tr>
          )
      )
    }
  }

  _handleChangeOn1Agent = (totalCommission, agentSplit, setValue) => {
    if (totalCommission < 0 || agentSplit > 1 || agentSplit < 0) return
    const { referrers } = this.state
    let _totalCommission = totalCommission || 0
    let restCommission = _totalCommission * (1 - agentSplit)
    let agentCommission = this._calculateAgentCommission(
      _totalCommission,
      agentSplit
    )
    let totalReferralCost = this._calculateTotalReferralCost(
      referrers,
      restCommission
    )
    let regionalSplit = this._calculateRegionalSplit(
      restCommission,
      totalReferralCost
    )
    setValue('totalReferralCost', totalReferralCost)
    setValue('totalCommission', totalCommission)
    setValue('agentSplit', agentSplit)
    setValue('agentCommission', agentCommission < 0 ? 0 : agentCommission)
    setValue('regionalSplit', regionalSplit)
  }

  _handleChangeOn2Agents = (
    totalCommission,
    agentSplit1,
    agentSplit2,
    ratio1,
    ratio2,
    setValue
  ) => {
    if (
      totalCommission < 0 ||
      ratio1 > 1 ||
      ratio2 < 0 ||
      agentSplit1 > 1 ||
      agentSplit1 < 0 ||
      agentSplit2 > 1 ||
      agentSplit2 < 0
    ) {
      return
    }
    let _totalCommission = totalCommission || 0
    const { referrers1, referrers2 } = this.state

    let agentCommission1 = this._calculateAgentCommission(
      totalCommission * ratio1,
      agentSplit1
    )
    let agentCommission2 = this._calculateAgentCommission(
      totalCommission * ratio2,
      agentSplit2
    )
    let totalReferralCost1 = this._calculateTotalReferralCost(
      referrers1,
      _totalCommission * ratio1 * (1 - agentSplit1)
    )
    let totalReferralCost2 = this._calculateTotalReferralCost(
      referrers2,
      _totalCommission * ratio2 * (1 - agentSplit2)
    )
    let regionalSplit1 = this._calculateRegionalSplit(
      _totalCommission * ratio1 * (1 - agentSplit1),
      totalReferralCost1
    )
    let regionalSplit2 = this._calculateRegionalSplit(
      _totalCommission * ratio2 * (1 - agentSplit2),
      totalReferralCost2
    )

    setValue('ratio1', ratio1)
    setValue('ratio2', ratio2)

    setValue('totalReferralCost1', totalReferralCost1)
    setValue('totalReferralCost2', totalReferralCost2)
    setValue('totalCommission', totalCommission)
    setValue('agentSplit1', agentSplit1)
    setValue('agentSplit2', agentSplit2)
    setValue('agentCommission1', agentCommission1 < 0 ? 0 : agentCommission1)
    setValue('agentCommission2', agentCommission2 < 0 ? 0 : agentCommission2)
    setValue('regionalSplit', regionalSplit1 + regionalSplit2)
  }

  _calculateAgentSplit = (agentCommission, totalCommission) => {
    return (
      (agentCommission + ERRORS_AND_OMISSION + TRANSACTION_COST) /
      totalCommission
    )
  }

  _calculateReferralCost = (isFirstReferral, restCommission) => {
    let tmp = parseFloat(
      (restCommission * (isFirstReferral ? 0.04 : 0.02)).toFixed(3)
    )
    return tmp
  }

  _calculateAgentCommission = (totalCommission, agentSplit) => {
    return totalCommission
      ? parseFloat(
        (
          totalCommission * agentSplit -
            TRANSACTION_COST -
            ERRORS_AND_OMISSION
        ).toFixed(1)
      )
      : 0
  }

  _calculateTotalReferralCost = (referrers, restCommission) => {
    let totalReferralCost = referrers.reduce((result, current, index) => {
      result = result + this._calculateReferralCost(index === 0, restCommission)
      return parseFloat(result.toFixed(3))
    }, 0)
    return totalReferralCost
  }

  _calculateRegionalSplit = (restCommission, totalReferralCost) => {
    return parseFloat(((restCommission - totalReferralCost) * 0.6).toFixed(4))
  }

  _deleteAllInfo = async () => {
    const { transactionCommission, allUserCommission } = this.state
    await commissionService.deleteTransactionCommission(
      transactionCommission.id
    )
    const promise = allUserCommission.map(async item => {
      await commissionService.deleteUserCommission(item.id)
    })
    await Promise.all(promise)
  }

  async componentDidMount () {
    const { selectedTransactionId } = this.props

    const transactionCommission = await commissionService.findByTransactionId(
      selectedTransactionId
    )

    if (transactionCommission) {
      const allUserCommission = await commissionService.getCommissionByTransaction(
        selectedTransactionId
      )
      const agentCommission = allUserCommission.filter(
        item => item.cashType === commissionType.AGENT_COMMISSION
      )
      this.setState({
        transactionCommission,
        allUserCommission,
        isEditting: true,
        agentCommission,
        totalCommission: transactionCommission.totalCommission,
        regionalSplit: transactionCommission.regionalSplit
      })
    }

    const allAgents = await transactionService.getAllAgents(
      selectedTransactionId
    )

    const promise = allAgents.transactionAgents.map(async item => {
      const referrer = await userService.getAllReferrer(item.userId)
      return referrer.referrers
    })

    const allReferrers = await Promise.all(promise)

    if (allAgents.transactionAgents.length >= 2) {
      this.setState({
        allAgents: allAgents.transactionAgents,
        numberOfAgents: allAgents.transactionAgents.length,
        referrers1: allReferrers[0] && allReferrers[0].slice(0, 2),
        referrers2: allReferrers[1] && allReferrers[1].slice(0, 2)
      })
    } else {
      this.setState({
        allAgents: allAgents.transactionAgents,
        numberOfAgents: allAgents.transactionAgents.length,
        referrers: allReferrers[0] && allReferrers[0].slice(0, 2)
      })
    }
  }
}

export default CashBalanceModal
