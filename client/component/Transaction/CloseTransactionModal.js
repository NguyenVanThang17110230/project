import React, { useEffect, useState } from 'react'
import { Modal } from 'reactstrap'
import moment from 'moment'
import NumberFormat from 'react-number-format'
import classnames from 'classnames'
import toastr from 'toastr'
import { transactionService, commissionService } from '../../services'
import { commissionType } from '../../../common/models/CashBalance'
import { TransactionRole } from '../../../common/models/Transaction'

const AGENT_SPLIT = 0.9
const TRANSACTION_COST = 350
const ERROR_AND_OMISSION = 40

const InputForm = ({
  label,
  isCenterLabel,
  isDisable,
  name,
  onChange,
  value,
  placeholder,
  description
}) => {
  return (
    <div className={classnames('form-group', { 'text-center': isCenterLabel })}>
      {label && (
        <label className='h5 font-weight-bold text-muted'>{label}</label>
      )}
      <NumberFormat
        thousandSeparator
        disabled={!!isDisable}
        className='form-control'
        name={name}
        onValueChange={onChange}
        value={value}
        placeholder={placeholder}
        prefix={'$ '}
        allowNegative={false}
      />
      <div className='text-muted'>
        <small>{description}</small>
      </div>
    </div>
  )
}

const PercentInputForm = ({ label, name, value, handleChange }) => {
  return (
    <div className='form-group'>
      {label && (
        <label className='h5 font-weight-bold text-muted'>{label}</label>
      )}
      <input
        type='number'
        className='form-control'
        min={0}
        max={1}
        step='0.1'
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

const CloseTransactionModal = ({
  isShow,
  toggle,
  transactionId,
  currentUserId,
  transactionAgents,
  refetchData
}) => {
  const isAgents = transactionAgents.length > 1
  const initValue = !isAgents
    ? { agentCommission: 0, agentSplit: AGENT_SPLIT }
    : {
      buyerAgentCommission: 0,
      sellerAgentCommission: 0,
      buyerAgentSplit: AGENT_SPLIT,
      sellerAgentSplit: AGENT_SPLIT,
      buyerRatio: 0.5,
      sellerRatio: 0.5
    }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [values, setValues] = useState({
    id: null,
    totalCommission: null,
    regionalSplit: 0,
    referralCost: 0,
    dateClosing: moment(Date.now()).format('YYYY-MM-DD'),
    ...initValue
  })

  const calcAgentSplit = (agentCommission, totalCommission, ratio) => {
    if (!isAgents) {
      // Agent Split = (Agent's commission + Transaction Cost + Errors and Omission)/Total Commission
      return parseFloat(
        (
          (agentCommission + TRANSACTION_COST + ERROR_AND_OMISSION) /
          totalCommission
        ).toFixed(1)
      )
    } else {
      // Agent's Commission (Seller's Agent) = (Total Commission * Ratio of Seller's Agent * Agent's Spilt of Seller's Agent) - (Transaction Cost + Errors and Omission)
      // Agent's Commission (Buyer's Agent) = (Total Commission * Ratio of Buyer's Agent * Agent's Spilt of Buyer's Agent) - (Transaction Cost + Errors and Omission)
      return parseFloat(
        (
          (agentCommission + TRANSACTION_COST + ERROR_AND_OMISSION) /
          (totalCommission * ratio)
        ).toFixed(1)
      )
    }
  }

  const calcAgentCommission = (totalCommission, agentSplit, ratio) => {
    if (!agentSplit || agentSplit <= 0) return 0

    let temp = 0
    // 1 Agent
    if (!isAgents) {
      // Agent's commission = (Total Commission * Agent Split) - (Transaction Cost + Errors and Omission)
      temp = Math.round(
        totalCommission * agentSplit - (TRANSACTION_COST + ERROR_AND_OMISSION)
      )
    } else {
      // 2 Agents
      // Agent's Commission (Seller's Agent) = (Total Commission * Ratio of Seller's Agent  * Agent's Spilt of Seller's Agent) - (Transaction Cost + Errors and Omission)
      // Agent's Commission (Buyer's Agent) = (Total Commission * Ratio of Buyer's Agent  * Agent's Spilt of Buyer's Agent) - (Transaction Cost + Errors and Omission)
      temp = Math.round(
        totalCommission * agentSplit * ratio -
          (TRANSACTION_COST + ERROR_AND_OMISSION)
      )
    }
    return temp > 0 ? temp : 0
  }
  // handle regional split(temporarily closed)
  const calcRegionalSplit = (
    totalCommission,
    agentCommission,
    referralCost,
    sellerAgentCommission,
    buyerAgentCommission
  ) => {
    let temp = 0
    // 1 Agent
    // if (!isAgents) {
    //   // Regional split = (Total commission - Agent's commission - Transaction cost - Errors and omission - Referral cost) * 0.6
    //   temp = Math.round(
    //     (totalCommission -
    //       agentCommission -
    //       TRANSACTION_COST -
    //       ERROR_AND_OMISSION -
    //       referralCost) *
    //       0.6
    //   )
    // } else {
    //   // 2 Agents
    //   // Regional Split = (Total Commission - Agent's Commission of Seller's Agent - Agent's Commission of Buyer's Agent - 2*Transaction Cost - 2*Errors and Omission - Referral Cost of Seller's Agent - Referral Cost of Buyer's Agent) * 0.6
    //   temp = Math.round(
    //     (totalCommission -
    //       sellerAgentCommission -
    //       buyerAgentCommission -
    //       2 * TRANSACTION_COST -
    //       2 * ERROR_AND_OMISSION -
    //       referralCost) *
    //       0.6
    //   )
    // }

    return temp > 0 ? temp : 0
  }

  const fetchData = async () => {
    const transactionCommission = await commissionService.findByTransactionId(
      transactionId
    )
    const userCommission = await commissionService.getCommissionByTransaction(
      transactionId
    )
    if (transactionCommission) {
      let tempData = {}
      // 1 Agent
      if (!isAgents) {
        // Regional split = (Total commission - Agent's commission - Transaction cost - Errors and omission - Referral cost) * 0.6
        // ==> Agent's commission =  Total commission - Regional split / 0.6 - Transaction cost - Errors and omission - Referral cost
        // const agentCommission =
        //   transactionCommission.totalCommission -
        //   transactionCommission.regionalSplit / 0.6 -
        //   TRANSACTION_COST -
        //   ERROR_AND_OMISSION -
        //   values.referralCost
        const agentCommission = userCommission[0].value

        tempData.agentSplit = calcAgentSplit(
          agentCommission,
          transactionCommission.totalCommission
        )
        tempData.agentCommission = agentCommission
      } else {
        // 2 Agents
        const allCommission = await commissionService.getCommissionByTransaction(
          transactionId
        )
        transactionAgents.forEach(party => {
          let item = allCommission.find(
            commission => commission.userId === party.userId
          )
          if (item) {
            let agentSplit = calcAgentSplit(
              item.value,
              transactionCommission.totalCommission,
              item.ratio
            )

            if (party.role === TransactionRole.SELLER_AGENT) {
              tempData.sellerAgentSplit = agentSplit
              tempData.sellerAgentCommission = item.value
              tempData.sellerRatio = item.ratio
            }
            if (party.role === TransactionRole.BUYING_AGENT) {
              tempData.buyerAgentSplit = agentSplit
              tempData.buyerAgentCommission = item.value
              tempData.buyerRatio = item.ratio
            }
          }
        })
      }
      setValues({
        ...values,
        ...tempData,
        id: transactionCommission.id,
        totalCommission: transactionCommission.totalCommission,
        regionalSplit: transactionCommission.regionalSplit,
        dateClosing: transactionCommission.dateClosing
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChangeTotalCommission = e => {
    const totalCommission = e.floatValue
    let tempData = {}
    let regionalSplit = values.regionalSplit

    // 1 Agent
    if (!isAgents) {
      const agentCommission = calcAgentCommission(
        totalCommission,
        values.agentSplit
      )
      regionalSplit = calcRegionalSplit(
        totalCommission,
        agentCommission,
        values.referralCost
      )
      tempData = { agentCommission }
    } else {
      // 2 Agents
      const sellerAgentCommission = calcAgentCommission(
        totalCommission,
        values.sellerAgentSplit,
        values.sellerRatio
      )
      const buyerAgentCommission = calcAgentCommission(
        totalCommission,
        values.buyerAgentSplit,
        values.buyerRatio
      )
      regionalSplit = calcRegionalSplit(
        totalCommission,
        null,
        values.referralCost,
        sellerAgentCommission,
        buyerAgentCommission
      )
      tempData = {
        sellerAgentCommission,
        buyerAgentCommission
      }
    }

    setValues({
      ...values,
      ...tempData,
      totalCommission,
      regionalSplit
    })
  }

  // 1 Agent
  const handleChangeAgentSplit = e => {
    const agentSplit = parseFloat(e.target.value > 1 ? 0 : e.target.value || 0)
    const agentCommission = calcAgentCommission(
      values.totalCommission,
      agentSplit
    )
    const regionalSplit = calcRegionalSplit(
      values.totalCommission,
      agentCommission,
      values.referralCost
    )
    setValues({
      ...values,
      agentSplit,
      agentCommission,
      regionalSplit
    })
  }

  // 2 Agents
  const handleChangeAgentSplit2Agent = (e, role) => {
    const agentSplit = parseFloat(e.target.value > 1 ? 0 : e.target.value || 0)
    let sellerAgentCommission = values.sellerAgentCommission
    let buyerAgentCommission = values.buyerAgentCommission
    let tempAgentSplit = {}
    if (role === 'seller') {
      sellerAgentCommission = calcAgentCommission(
        values.totalCommission,
        agentSplit,
        values.sellerRatio
      )
      tempAgentSplit = { sellerAgentSplit: agentSplit }
    } else if (role === 'buyer') {
      buyerAgentCommission = calcAgentCommission(
        values.totalCommission,
        agentSplit,
        values.sellerRatio
      )
      tempAgentSplit = { buyerAgentSplit: agentSplit }
    }
    const regionalSplit = calcRegionalSplit(
      values.totalCommission,
      null,
      values.referralCost,
      sellerAgentCommission,
      buyerAgentCommission
    )

    setValues({
      ...values,
      ...tempAgentSplit,
      sellerAgentCommission,
      buyerAgentCommission,
      regionalSplit
    })
  }

  const handleChangeRatio2Agent = (e, role) => {
    const ratio = parseFloat(e.target.value > 1 ? 0 : e.target.value || 0)
    let sellerAgentCommission = values.sellerAgentCommission
    let buyerAgentCommission = values.buyerAgentCommission
    let tempRatio = {}

    if (role === 'seller') {
      let buyerRatio = parseFloat((1 - ratio).toFixed(1))
      sellerAgentCommission = calcAgentCommission(
        values.totalCommission,
        values.sellerAgentSplit,
        ratio
      )
      buyerAgentCommission = calcAgentCommission(
        values.totalCommission,
        values.buyerAgentSplit,
        buyerRatio
      )
      tempRatio = { sellerRatio: ratio, buyerRatio }
    } else if (role === 'buyer') {
      let sellerRatio = parseFloat((1 - ratio).toFixed(1))
      buyerAgentCommission = calcAgentCommission(
        values.totalCommission,
        values.buyerAgentSplit,
        ratio
      )
      sellerAgentCommission = calcAgentCommission(
        values.totalCommission,
        values.sellerAgentSplit,
        sellerRatio
      )
      tempRatio = { buyerRatio: ratio, sellerRatio }
    }

    const regionalSplit = calcRegionalSplit(
      values.totalCommission,
      null,
      values.referralCost,
      sellerAgentCommission,
      buyerAgentCommission
    )

    setValues({
      ...values,
      ...tempRatio,
      sellerAgentCommission,
      buyerAgentCommission,
      regionalSplit
    })
  }

  const agentCommissionPromise = async () => {
    // 2 Agents
    if (isAgents) {
      return transactionAgents.map(async party => {
        let commission = 0

        let ratio = 0
        if (party.role === TransactionRole.BUYING_AGENT) {
          commission = values.buyerAgentCommission
          ratio = values.buyerRatio
        } else if (party.role === TransactionRole.SELLER_AGENT) {
          commission = values.sellerAgentCommission
          ratio = values.sellerRatio
        }

        return commissionService.createUserCommission({
          cashType: commissionType.AGENT_COMMISSION,
          value: commission,
          ratio,
          userId: party.userId,
          transactionId: party.transactionId
        })
      })
    } else {
      // 1 Agent
      const party = transactionAgents[0]
      return commissionService.createUserCommission({
        cashType: commissionType.AGENT_COMMISSION,
        value: values.agentCommission,
        userId: party.userId,
        transactionId: party.transactionId
      })
    }
  }

  const updateAgentCommissionPromise = async () => {
    // 2 Agents
    if (isAgents) {
      return transactionAgents.map(async party => {
        let commission = 0

        let ratio = 0
        if (party.role === TransactionRole.BUYING_AGENT) {
          commission = values.buyerAgentCommission
          ratio = values.buyerRatio
        } else if (party.role === TransactionRole.SELLER_AGENT) {
          commission = values.sellerAgentCommission
          ratio = values.sellerRatio
        }

        return commissionService.updateUserCommissionByTransactionIdUserId(
          party.transactionId,
          party.userId,
          {
            value: commission,
            ratio
          }
        )
      })
    } else {
      // 1 Agent
      const party = transactionAgents[0]

      return commissionService.updateUserCommissionByTransactionIdUserId(
        party.transactionId,
        party.userId,
        {
          value: values.agentCommission
        }
      )
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // Update transaction status -> Close
    try {
      setIsSubmitting(true)
      // ===== CREATE =====
      if (!values.id) {
        await Promise.all([
          // Close transaction
          transactionService.closeTransaction(transactionId),
          // Create transaction commission
          commissionService.createTransactionCommission({
            totalCommission: values.totalCommission,
            regionalSplit: values.regionalSplit,
            transactionId: transactionId,
            coordinatorId: currentUserId,
            dateClosing: values.dateClosing
          }),
          // Commission of TC
          commissionService.createUserCommission({
            cashType: commissionType.TC_COMMISSION,
            value: TRANSACTION_COST + values.regionalSplit,
            userId: currentUserId,
            transactionId: transactionId
          }),
          // Commission of Agent
          agentCommissionPromise()
        ])
        refetchData()
        toastr.success('Closed')
      } else {
        // ===== UPDATE =====
        await Promise.all([
          // Update transaction commission
          await commissionService.updateTransactionCommission(values.id, {
            totalCommission: values.totalCommission,
            regionalSplit: values.regionalSplit,
            coordinatorId: currentUserId,
            dateClosing: values.dateClosing
          }),
          // Update commission of TC
          commissionService.updateUserCommissionByTransactionIdUserId(
            transactionId,
            currentUserId,
            {
              value: TRANSACTION_COST + values.regionalSplit
            }
          ),
          // Update commission of Agent
          updateAgentCommissionPromise()
        ])
        refetchData()
        toastr.success('Updated')
      }
      toggle()
    } catch (e) {
      toastr.error(e.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderAgentCommission = () => {
    if (!isAgents) {
      return (
        <div className='col-xl-6 col-md-7'>
          <div className='row'>
            <div className='col-xl-8 col-md-7'>
              <InputForm
                label="Agent's Commission"
                name='agentCommission'
                value={values.agentCommission}
                isDisable
              />
            </div>
            <div className='col-xl-4 col-md-5'>
              <PercentInputForm
                label="Agent's Split"
                name='agentSplit'
                value={values.agentSplit}
                handleChange={e => handleChangeAgentSplit(e)}
              />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='col-12'>
          <div className='row'>
            <div className='col-xl-6 col-md-7'>
              <InputForm
                label="Agent's Commission (Seller's agent)"
                name='sellerAgentCommission'
                value={values.sellerAgentCommission}
                isDisable
              />
            </div>
            <div className='col-6 col-md-3'>
              <PercentInputForm
                label="Agent's Split"
                name='sellerAgentSplit'
                value={values.sellerAgentSplit}
                handleChange={e => handleChangeAgentSplit2Agent(e, 'seller')}
              />
            </div>
            <div className='col-xl-3 col-md-2 col-6'>
              <PercentInputForm
                label='Ratio'
                name='sellerRatio'
                value={values.sellerRatio}
                handleChange={e => handleChangeRatio2Agent(e, 'seller')}
              />
            </div>
            <div className='col-xl-6 col-md-7'>
              <InputForm
                label="Agent's Commission (Buyer's agent)"
                name='buyerAgentCommission'
                value={values.buyerAgentCommission}
                isDisable
              />
            </div>
            <div className='col-md-3 col-6'>
              <PercentInputForm
                label="Agent's Split"
                name='buyerAgentSplit'
                value={values.buyerAgentSplit}
                handleChange={e => handleChangeAgentSplit2Agent(e, 'buyer')}
              />
            </div>
            <div className='col-xl-3 col-md-2 col-6'>
              <PercentInputForm
                label='Ratio'
                name='buyerRatio'
                value={values.buyerRatio}
                handleChange={e => handleChangeRatio2Agent(e, 'buyer')}
              />
            </div>
          </div>
        </div>
      )
    }
  }

  const renderTransactionCost = () => {
    return (
      <InputForm
        label='Transaction Cost'
        name='transactionCost'
        value={TRANSACTION_COST}
        description='Transaction Coordination Cost'
        isDisable
      />
    )
  }

  return (
    <Modal isOpen={isShow} toggle={toggle} id='lg-modal'>
      <div className='modal-header modal-header--change' id='bg-gr'>
        <div className='text-center w-100'>
          <h5 className=' modal-title new-add' id='exampleModalLabel'>
            Cash Balance
          </h5>
        </div>
        <div>
          <button
            id='close-modal'
            type='button'
            className='close bg-transparent '
            data-dismiss='modal'
            onClick={() => toggle()}
          >
            &times;
          </button>
        </div>
      </div>
      <div className='modal-body' id='main-body-add-member'>
        <form onSubmit={handleSubmit}>
          <div className='px-5 box-close'>
            <div className='row px-3 my-4 d-flex justify-content-center'>
              <div className='col-12 col-md-6'>
                <InputForm
                  label='Total Commission'
                  name='totalCommission'
                  onChange={e => handleChangeTotalCommission(e)}
                  value={values.totalCommission}
                  placeholder='$ Enter Commission Amount'
                  description='Add the commission amount in full. Do not enter the full sale above.'
                />
              </div>
              <div className='col-12 col-md-6'>
                <div className='form-group'>
                  <label className='h5 font-weight-bold text-muted'>
                    Date of Closing
                  </label>
                  <input
                    name='dateClosing'
                    type='date'
                    className='form-control'
                    onChange={e =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    value={values.dateClosing}
                    placeholder='Add date of closing'
                  />
                </div>
              </div>
            </div>
            <div className='row px-3 body-close-tran'>
              {renderAgentCommission()}
              {!isAgents && (
                <div className='col-md-5 col-xl-6'>
                  {renderTransactionCost()}
                </div>
              )}
              <div className='col-xl-6 col-md-7'>
                <div className='form-group'>
                  <label className='h5 font-weight-bold text-muted'>
                    Total Referral Cost
                  </label>
                  <div className='form-group'>
                    <table className='table mb-0'>
                      <thead className='bg-secondary border'>
                        <tr>
                          <th scope='col'>Name</th>
                          <th scope='col'>Balance</th>
                        </tr>
                      </thead>
                      <tbody className='border'>
                        <tr>
                          <td />
                          <td />{' '}
                        </tr>
                      </tbody>
                    </table>
                    <div className='text-muted mb-5'>
                      <small>0 Degrees of Referrals</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-md-5'>
                {isAgents && renderTransactionCost()}
                <InputForm
                  label='Errors and Omission'
                  name='errorAndOmission'
                  value={ERROR_AND_OMISSION}
                  description='Flat Rate Errors and Omission Cost'
                  isDisable
                />
                <div className='form-group'>
                  <label className='h5 font-weight-bold text-muted'>
                    Regional Split
                  </label>

                  <input
                    className='form-control'
                    name='regionalSplit'
                    type='text'
                    value='N/A'
                    disabled
                  />
                  <div className='text-muted'>
                    <small>Agents Commission (60% of Brokerage Profits)</small>
                  </div>
                </div>
                {/* <InputForm
                  label='Regional Split'
                  name='regionalSplit'
                  value={values.regionalSplit}
                  description='Agents Commission (60% of Brokerage Profits)'
                  isDisable
                /> */}
              </div>
            </div>
            <div className='my-5 d-flex justify-content-center'>
              <button
                type='submit'
                className='btn btn-add-new text-white th-11 d-flex align-items-center'
                disabled={!values.totalCommission || isSubmitting}
              >
                {isSubmitting && (
                  <span className='spinner-border spinner-border-sm mr-2' />
                )}
                {!values.id ? 'Close Transaction' : 'Save'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CloseTransactionModal
