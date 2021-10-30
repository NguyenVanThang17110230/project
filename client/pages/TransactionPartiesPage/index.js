import React, { Component } from 'react'
import _ from 'lodash'
import Error from 'next/error'
import moment from 'moment'
import Cookies from 'js-cookie'
import toastr from 'toastr'
import { Modal } from 'reactstrap'
import { Formik } from 'formik'
import Head from 'next/head'
import { transactionService, userService } from '../../services'
import InvitePartyModal from './InvitePartyModal'
import InformationInvitedModal from './InformationInvitedModal'
import {
  TransactionRole,
  TransactionAccessType,
  TransactionType,
  TransactionTypeStatus,
  TransactionStatus,
  MAX_FILE_SIZE
} from '../../../common/models/Transaction'
import { Link } from '../../../common/routes'
// import authRedux from '../../redux/authRedux'
import { getRoleLabel } from '../../view-models/User'
import {
  getTransactionFullAddress,
  getTransactionActivity,
  roundPercent,
  calculatorPercentageOfParty
} from '../../view-models/Transaction'
import userOnly from '../../hocs/userOnly'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import EditMemberModal from '../../component/Transaction/EditMemberModal'
import AddNewMemberModal from '../../component/Transaction/AddNewMemberModal'
import EditRoleAgentModal from '../../component/Transaction/EditRoleAgentModal'
import TransactionDocuments from './TransactionDocuments'
import TransactionEnvelopes from './TransactionEnvelopes'
import TransactionDocumentVendor from './TransactionDocumentVendor'
import TransactionDocumentActions from './TransactionDocumentActions'
import TransactionPartiesFileModal from '../../component/Transaction/TransactionPartiesFileModal'
import CloseTransactionModal from '../../component/Transaction/CloseTransactionModal'

const ROLES = [
  TransactionRole.BUYING_AGENT,
  TransactionRole.SELLER_AGENT,
  TransactionRole.BUYER,
  TransactionRole.SELLER,
  TransactionRole.TRANSACTION_COORDINATOR,
  TransactionRole.ESCROW,
  TransactionRole.TITLE,
  TransactionRole.LENDER,
  TransactionRole.HOME_INSPECTOR,
  TransactionRole.TERMITE
]

async function _fetchTransactionAndActivities (
  transactionId,
  currentLoginUserId
) {
  const {
    transaction,
    activitiesFull,
    detail
  } = await transactionService.getDetailedTransactionAndActivityById(
    transactionId
  )

  if (!transaction) {
    return { transaction: null }
  }
  if (!detail) {
    return { detail: null }
  }
  const partyTarget = transaction.parties.find(
    party => party.userId === currentLoginUserId
  )

  if (!partyTarget) {
    return { partyTarget: null }
  }

  const activities =
    partyTarget.access === TransactionAccessType.FULL
      ? activitiesFull
      : activitiesFull.filter(activity => activity.partyId === partyTarget.id)
  return {
    transaction,
    activities,
    partyTarget,
    detail,
    currentTransactionStatus: transaction.status
  }
}

class TransactionPartiesPage extends Component {
  static async getInitialProps (ctx) {
    const transactionId = ctx.query.idTransaction
    const currentUserId = ctx.store.getState().global.loginUser.data.id
    const {
      transaction,
      activities,
      partyTarget,
      detail,
      status
    } = await _fetchTransactionAndActivities(transactionId, currentUserId)

    return {
      transaction,
      partyTarget,
      headerText: 'Transaction Parties',
      activities,
      detail,
      subHeaderText:
        partyTarget &&
        transaction &&
        `for ${getTransactionFullAddress(transaction)}`,
      toggleTimeline: false,
      status
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentUser.avatar !== this.state.user.avatar) {
      this.setState({
        user: {
          ...this.state.user,
          avatar: nextProps.currentUser.avatar
        }
      })
    }
    this._reRenderDynamic()
  }

  constructor (props) {
    super(props)
    this.state = {
      transaction: props.transaction,
      activities: props.activities,
      isDisabled: true,
      toggleModal: false,
      addPartyModalData: null,
      isShowEditMemberModal: false,
      isShowEditRoleAgent: false,
      isShowPartiesFile: false,
      isShowMemberModal: false,
      isShowCloseTransactionModal: false,
      toggleModalUpdateMyProfile: false,
      toggleModalInfoTransactionParties: false,
      partyTarget: props.partyTarget,
      selectedView: 'Main',
      selectedViewParties: props.selectedViewParties,
      detail: props.detail,
      listDocument: [],
      documentAction: {},
      documentActionsByPartyId: [],
      dataUser: [],
      dataDocument: [],
      dataVendor: [],
      memberRole: '',
      partyNew: props.transaction.parties,
      user: props.currentUser,
      transactionAgents: [],
      isEditingPercentTransaction: false,
      isShowEditPercentTransaction: false,
      tempPercentTransaction: null,
      listEnvelopeDocument: [],
      dataUserAllUer: [],
      isShowTest: false
    }
  }

  _displayLoading = () => {
    const loading = document.getElementById('loadingTh')
    loading.classList.add('display')
  }

  _hiddenLoading = () => {
    const loading = document.getElementById('loadingTh')
    loading.classList.remove('display')
  }

  componentDidMount () {
    window.addEventListener('load', this._viewEditMemberByOwnerAgent())
    this._getDataUser()
  }

  _getDataUser = async () => {
    try {
      const data = await userService.getAllUser()
      this.setState({
        dataUserAllUer: data
      })
    } catch (e) {}
  }
  // display popup when owner transaction agent
  _viewEditMemberByOwnerAgent = () => {
    const { idTransaction } = this.props.query
    const id = Cookies.get('add_new_transaction')
    if (idTransaction === id) {
      this.setState({
        isShowEditRoleAgent: true
      })
    }
  }

  saveImage = async (imageURL, id) => {
    if (imageURL) {
      try {
        this._displayLoading()
        await transactionService.createMainImage(id, imageURL)
        const newTran = await transactionService.getTransactionsDetailByTransactionId(
          id
        )
        this.setState({
          transaction: newTran
        })
        toastr.success('Success')
        setTimeout(() => {
          this._hiddenLoading()
        }, 2000)
      } catch (e) {
        let msg
        switch (e.code) {
          default: {
            msg = e.message
          }
        }
        toastr.error(msg)
      }
    }
  }

  render () {
    const { currentUser } = this.props
    const {
      dataUser,
      isShowEditMemberModal,
      transaction,
      addPartyModalData,
      isShowEditRoleAgent,
      isShowPartiesFile,
      isShowMemberModal,
      isShowCloseTransactionModal,
      memberRole,
      transactionAgents,
      dataUserAllUer
    } = this.state
    const party = this.props.partyTarget
    if (!transaction) {
      return <Error statusCode={404} />
    }
    if (!party) {
      return <Error statusCode={404} />
    }

    return (
      <div className='box-main'>
        <Head>
          <title>Transaction Parties</title>
        </Head>
        <div
          className='row'
          style={{
            width: '100%',
            marginLeft: '0',
            marginRight: '0'
            // justifyContent: 'center'
          }}
        >
          {party.access === TransactionAccessType.FULL
            ? this._renderAllParties()
            : this._renderTransactionPartiesAllowedAccess()}
        </div>
        <footer className='footer-card' style={{ padding: '2rem 0' }}>
          <div className='footer-page'>
            <div className='footer-p1'>
              © Copyright Link Management Systems. All rights reserved
            </div>
            <div className='footer-p2'>Powered by Link Brokerages</div>
          </div>
        </footer>
        {isShowEditMemberModal && (
          <EditMemberModal
            isShowEditMemberModal={isShowEditMemberModal}
            dataUser={dataUser}
            toggleMemberModal={() =>
              this.setState({ isShowEditMemberModal: !isShowEditMemberModal })
            }
            realTimeEdit={() => {
              this._reloadDataMember()
            }}
          />
        )}
        {isShowEditRoleAgent && (
          <EditRoleAgentModal
            isShowEditRoleAgent={isShowEditRoleAgent}
            dataUser={this.state.partyTarget}
            toggleMemberModal={() => {
              this.setState({ isShowEditRoleAgent: !isShowEditRoleAgent })
              Cookies.remove('add_new_transaction')
            }}
            realTimeEdit={() => {
              this._reloadDataMember()
            }}
          />
        )}
        {isShowPartiesFile && (
          <TransactionPartiesFileModal
            isShowPartiesFile={isShowPartiesFile}
            dataDocument={this.state.dataDocument}
            toggleModal={() =>
              this.setState({ isShowPartiesFile: !isShowPartiesFile })
            }
          />
        )}
        {isShowMemberModal && (
          <AddNewMemberModal
            isShowMemberModal={isShowMemberModal}
            toggleMemberModal={() =>
              this.setState({ isShowMemberModal: !isShowMemberModal })
            }
            transactionId={transaction.id}
            memberRole={memberRole}
            fetchData={() => this._reRenderDynamic()}
            dataAllUser={dataUserAllUer}
          />
        )}
        <InvitePartyModal
          data={{ addPartyModalData, transaction }}
          onClose={this._closeInvitePartyModal}
          onSubmit={this._sendInvitation}
        />
        {this._renderModalUpdateMyProfile()}
        <InformationInvitedModal
          _CloseInfoTransactionParties={this._CloseInfoTransactionParties}
          toggleModalInfoTransactionParties={
            this.state.toggleModalInfoTransactionParties
          }
          _toggleModalInfoTransactionParties={
            this._toggleModalInfoTransactionParties
          }
          transaction={transaction}
        />
        {isShowCloseTransactionModal && (
          <CloseTransactionModal
            isShow={isShowCloseTransactionModal}
            toggle={() =>
              this.setState({
                isShowCloseTransactionModal: !isShowCloseTransactionModal
              })
            }
            transactionId={transaction.id}
            currentUserId={currentUser.id}
            transactionAgents={transactionAgents}
            refetchData={() => this._refetchDataDynamic()}
          />
        )}
      </div>
    )
  }

  _viewPercentTransaction = () => {
    const { transaction } = this.state
    if (transaction && transaction.parties && transaction.invitations) {
      return transaction.percentComplete || 0
    }
  }

  _toggleModalInfoTransactionParties = role => {
    const transactionParty = this.state.transaction.parties.find(
      role1 => role1.role === role
    )
    this.setState({
      toggleModalInfoTransactionParties: transactionParty
    })
  }

  _CloseInfoTransactionParties = role => {
    this.setState({
      toggleModalInfoTransactionParties: false
    })
  }

  _showInvitePartyModal = role => {
    this.setState({
      addPartyModalData: role
    })
  }

  _closeInvitePartyModal = () => {
    this.setState({
      addPartyModalData: null
    })
  }

  _toggleModal = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
    })
  }

  _sendInvitation = async ({
    firstName,
    lastName,
    email,
    phoneNumber,
    access
  }) => {
    try {
      await transactionService.inviteParty({
        transactionId: this.state.transaction.id,
        role: this.state.addPartyModalData,
        firstName,
        lastName,
        email,
        phoneNumber,
        access
      })

      toastr.success('Party has been invited')
      // reload data to fetch new transaction information
    } catch (e) {
      toastr.error(e.message)
    }
  }

  _refetchDataDynamic = async () => {
    const { transaction } = await _fetchTransactionAndActivities(
      this.state.transaction.id,
      this.props.currentUser.id
    )

    this.setState({ transaction })
  }

  // view modal document
  _getDataFile = data => {
    this.setState({
      isShowPartiesFile: true,
      dataDocument: data
    })
  }
  // test
  _renderButtonFile = role => {
    const { partyNew } = this.state
    const { currentTransactionStatus } = this.props
    if (currentTransactionStatus === TransactionStatus.CLOSED) {
      return <div />
    }

    const partyJoined = partyNew.find(party => party.role === role)
    if (partyJoined) {
      return (
        <button
          className='files'
          onClick={() => this._getDataFile(partyJoined.documents)}
        >
          Files
        </button>
      )
    } else {
      return (
        <button className='files files__dis' disabled>
          {' '}
          Files{' '}
        </button>
      )
    }
  }

  _getDataEditMemberMain = data => {
    const { partyNew } = this.state
    const user = partyNew.find(party => party.userId === data)
    if (user) {
      this.setState({
        toggleModalUpdateMyProfile: true,
        partyTarget: user
      })
    }
  }

  _setAddMember = role => {
    const { transaction } = this.state
    if (transaction.status !== TransactionStatus.ARCHIVED) {
      this.setState({
        isShowMemberModal: true,
        memberRole: role
      })
    }
  }

  _renderButtonProfile = role => {
    const { transaction, partyNew } = this.state
    const { status } = transaction
    const { invitations } = this.props.transaction
    const { currentTransactionStatus } = this.props
    if (currentTransactionStatus === TransactionStatus.CLOSED) {
      return <div />
    }

    const partyJoined = partyNew.find(party => party.role === role)
    if (partyJoined) {
      return (
        <button
          className='profiles'
          onClick={() => this._getDataEditMemberMain(partyJoined.userId)}
        >
          Profile
        </button>
      )
    }
    const partyInvited = invitations.find(
      invitation => invitation.role === role
    )
    if (partyInvited) {
      return (
        <button
          className='profiles'
          onClick={() => !status && this._toggleModalUpdateMyProfile}
        >
          Profile
        </button>
      )
    }
    return (
      <button className='profiles' onClick={() => this._setAddMember(role)}>
        Add member
      </button>
    )
  }

  _renderCardBodyTest = role => {
    const { partyNew } = this.state
    const partyJoined = partyNew.find(party => party.role === role)

    if (partyJoined) {
      return (
        <div className='no-padding'>
          <div className='percent'>
            <div
              data-progress={this._percentOfParty(role)}
              className='th-17 d-flex justify-content-center align-items-center display-6 text-white'
              style={{
                '&::after': {
                  backgroundImage:
                    'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                }
              }}
            />
          </div>
          <h6 className='role-content'>{getRoleLabel(role)}</h6>
        </div>
      )
    }
    return (
      <div className='no-padding'>
        <div className='percent'>
          <div
            data-progress={this._percentOfParty(role)}
            className='th-17 d-flex justify-content-center align-items-center display-6 text-white'
            style={{
              '&::after': {
                backgroundImage:
                  'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
              }
            }}
          />
        </div>
        <h6 className='role-content'>{getRoleLabel(role)}</h6>
      </div>
    )
  }
  _renderTransactionPartiesFullName = role => {
    const { partyNew } = this.state
    const user = partyNew.find(party => party.role === role)
    if (user) {
      if (user.firstName) {
        return <div className='name1'>{user.firstName}</div>
      } else {
        if (user.user.name) {
          return <div className='name1'>{user.user.name}</div>
        }
      }
    } else {
      return <div className='name1'>Empty</div>
    }
  }
  //
  _renderAvatarTransaction = role => {
    const { partyNew } = this.state
    const partyJoined = partyNew.filter(party => party.role === role)
    if (partyJoined && partyJoined.length === 0) {
      return (
        <img
          className='avt-role'
          src={'/static/images/default-avatar.png'}
          alt='Avatar'
        />
      )
    } else {
      return partyJoined.map((partyJoined, index) => {
        if (partyJoined.user) {
          return (
            <img
              key={index}
              className='avt-role'
              src={
                partyJoined.user.avatar || '/static/images/default-avatar.png'
              }
              alt='Avatar'
            />
          )
        }
      })
    }
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

  _reloadDataMember = async () => {
    const { query } = this.props

    try {
      const newMem = await transactionService.getMemberPartiesByTransaction(
        query.idTransaction
      )
      this.setState({
        partyNew: newMem
      })
    } catch (e) {
      console.error('error')
    }
  }
  //
  _renderPartiesMemberInfo = () => {
    const { partyNew, partyTarget, transaction } = this.state
    return partyNew.map((user, index) => (
      <tr key={index}>
        <td scope='row'>{this._viewName(user)}</td>
        <td>{user.email}</td>
        <td>{this._viewRole(user.role)}</td>
        <td>
          {partyTarget.role === TransactionRole.TRANSACTION_COORDINATOR &&
            transaction.status !== TransactionStatus.ARCHIVED &&
            transaction.status !== TransactionStatus.CLOSED && (
            <button
              className='btn'
              type='button'
              style={{
                padding: '0'
              }}
              onClick={() => this._getDataEditMember(user)}
            >
              <i className='far fa-edit' />
            </button>
          )}
        </td>
      </tr>
    ))
  }
  // view fullName
  _viewName = user => {
    if (user) {
      if (user.firstName && user.lastName) {
        return user.firstName.concat(' ', user.lastName)
      } else if (user.firstName || user.lastName) {
        return user.firstName || user.lastName
      } else {
        if (user.user) {
          if (user.user.firstName && user.user.lastName) {
            return user.user.firstName.concat(' ', user.user.lastName)
          } else if (user.user.firstName || user.user.lastName) {
            return user.user.firstName || user.user.lastName
          } else {
            if (user.user.name) {
              return user.user.name
            } else {
              return 'None'
            }
          }
        }
      }
    }
  }

  _viewRole = role => {
    switch (role) {
      case 'buyer-agent':
        return 'Buyer’s Agent'
      case 'listing-agent':
        return 'Listing agent'
      case 'buyer':
        return 'Buyer'
      case 'seller':
        return 'Seller'
      case 'transaction-coordinator':
        return 'Transaction coordinator'
      case 'escrow':
        return 'Escrow'
      case 'title':
        return 'Title'
      case 'lender':
        return 'Lender'
      case 'home-inspector':
        return 'Home inspector'
      case 'termite':
        return 'Termite'
      case 'vendors':
        return 'Vendors'
      case 'seller-agent':
        return 'Seller’s Agent'
      default:
        break
    }
  }

  _getDataEditMember = user => {
    this.setState({
      isShowEditMemberModal: true,
      dataUser: user
    })
  }

  _onSubmitDetail = async (values, action) => {
    const { setSubmitting } = action
    try {
      const {
        yearBuilt,
        bedrooms,
        squareFootage,
        schoolDistrict,
        type,
        bathrooms,
        lotSize,
        country,
        streetNumber,
        streetName,
        unitNumber,
        city,
        state,
        postalCode,
        county,
        mlsNumber,
        taxId,
        address,
        transactionType,
        transactionTypeStatus,
        url,
        description,
        closingDate
      } = values

      let statusT = ''
      if (transactionType === '') {
        statusT = ''
      } else {
        statusT = transactionTypeStatus
      }
      let status = ''
      if (statusT === TransactionTypeStatus.TTS_ARCHIVED) {
        status = TransactionTypeStatus.TTS_ARCHIVED
      } else {
        status = this.state.transaction.status
      }
      setSubmitting(true)
      await transactionService.updateTransactionById(
        this.props.transaction.id,
        {
          address,
          transactionType,
          transactionTypeStatus: statusT,
          url,
          description,
          closingDate,
          status: status
        }
      )
      if (this.props.detail[0] && this.props.detail[0].id) {
        await transactionService.createTransactionDetail(
          this.props.detail[0].id,
          {
            yearBuilt,
            bedrooms,
            squareFootage,
            schoolDistrict,
            type,
            bathrooms,
            lotSize,
            country,
            streetNumber,
            streetName,
            unitNumber,
            city,
            state,
            postalCode,
            county,
            mlsNumber,
            taxId
          }
        )
      } else {
        await transactionService.createNewTransactionDetail({
          yearBuilt,
          bedrooms,
          squareFootage,
          schoolDistrict,
          type,
          bathrooms,
          lotSize,
          country,
          streetNumber,
          streetName,
          unitNumber,
          city,
          state,
          postalCode,
          county,
          mlsNumber,
          taxId
        })
      }

      // this.setState({
      //   detail: [...detail,newTransactionDetail],

      // })
      setSubmitting(false)
      toastr.success('Success')
      this._fetchTransaction()
    } catch (e) {
      let msg
      switch (e.code) {
        default: {
          msg = e.message
        }
      }
      toastr.error(msg)
      setSubmitting(false)
    }
  }
  deleteImage = async id => {
    try {
      await transactionService.deleteImage(id)
      const newTran = await transactionService.getTransactionsDetailByTransactionId(
        id
      )
      this.setState({
        transaction: newTran
      })
      toastr.success('Success')
    } catch (e) {
      let msg
      switch (e.code) {
        default: {
          msg = e.message
        }
      }
      toastr.error(msg)
    }
  }
  _previewImage = image => {
    const img = document.querySelector('.new-image')
    if (image !== null) {
      const reader = new window.FileReader()
      reader.addEventListener('load', function () {
        img.classList.add('hide-ne')
      })
      reader.readAsDataURL(image)
    }
  }
  _viewDate = date => {
    const a = new Date(date)
    const b = new Date(0)
    if (a.getTime() !== b.getTime()) {
      var d = new Date(date)
      var month = '' + (d.getMonth() + 1)
      var day = '' + d.getDate()
      var year = d.getFullYear()
      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day
      return [year, month, day].join('-')
    } else {
      return ''
    }
  }

  handleChangeTransactionTypeStatus = async (e, callback) => {
    // Open "Close Transaction Modal"
    if (e.target.value === TransactionTypeStatus.TTS_CLOSE) {
      // Check number of agents
      const transactionAgents = await transactionService.getAllAgents(
        this.props.transaction.id
      )
      // Can't close without agent
      if (transactionAgents.length === 0) {
        toastr.error('Nead at least 1 Link Agent to close this transaction!')
      } else {
        // HandleChange of Formik
        callback(e)
        this.setState({ isShowCloseTransactionModal: true, transactionAgents })
      }
    } else {
      // Normal update
      callback(e)
    }
  }

  handleEditPercentTransaction = async () => {
    const {
      isShowEditPercentTransaction,
      tempPercentTransaction,
      transaction
    } = this.state
    try {
      if (!tempPercentTransaction) {
        // Init values
        this.setState({
          tempPercentTransaction: this._viewPercentTransaction()
        })
      } else {
        // Editing
        this.setState({ isEditingPercentTransaction: true })
        await transactionService.updateTransactionPercent(
          transaction.id,
          tempPercentTransaction
        )
        await this._refetchDataDynamic()
        this.setState({
          tempPercentTransaction: null,
          isEditingPercentTransaction: false
        })
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.setState({
        isShowEditPercentTransaction: !isShowEditPercentTransaction
      })
    }
  }

  // For TC: can edit
  _renderTransactionPercentCircle = () => {
    const {
      isShowEditPercentTransaction,
      isEditingPercentTransaction,
      tempPercentTransaction
    } = this.state

    return (
      <div
        style={{ position: 'relative' }}
        className='transaction-percent-input'
      >
        <div className='d-flex justify-content-center align-items-center'>
          <div className='percent'>
            <div
              data-progress={this._viewPercentTransaction()}
              className='th-17 th-per-d d-flex justify-content-center align-items-center display-6 text-white'
            />
          </div>
          {isShowEditPercentTransaction && (
            <input
              type='number'
              min='0'
              max='100'
              value={tempPercentTransaction}
              disabled={isEditingPercentTransaction}
              onChange={e => {
                const value = e.target.value
                this.setState({
                  tempPercentTransaction: parseInt(
                    value < 0 ? 0 : value > 100 ? 100 : e.target.value || 0
                  )
                })
              }}
              autoFocus
            />
          )}
        </div>
        {this.setViewButtonEdit()}
      </div>
    )
  }

  setViewButtonEdit = () => {
    const {
      transaction,
      isEditingPercentTransaction,
      isShowEditPercentTransaction
    } = this.state
    if (
      transaction.transactionTypeStatus !==
        TransactionTypeStatus.TTS_PRE_OFFER &&
      transaction.transactionTypeStatus !==
        TransactionTypeStatus.TTS_UNDER_CONTRACT &&
      transaction.transactionTypeStatus !== TransactionTypeStatus.TTS_ESCROW &&
      transaction.transactionTypeStatus !==
        TransactionTypeStatus.TTS_ESCROW_CLOSE &&
      transaction.transactionTypeStatus !== TransactionTypeStatus.TTS_SOLD &&
      transaction.transactionTypeStatus !== TransactionTypeStatus.TTS_CLOSE
    ) {
      return (
        <button
          type='button'
          className='btn p-0'
          onClick={() => this.handleEditPercentTransaction()}
          style={{ position: 'absolute', top: 2, right: 5 }}
        >
          <div className='app-fade app-fade--circle app-fade--black'>
            {isEditingPercentTransaction ? (
              <span className='spinner-border spinner-border-sm text-white' />
            ) : isShowEditPercentTransaction ? (
              <i class='fas fa-check fa-sm' />
            ) : (
              <i className='far fa-edit fa-sm' />
            )}
          </div>
        </button>
      )
    }
  }

  // render all parties
  _renderAllParties = () => {
    const {
      transaction,
      listDocument,
      listEnvelopeDocument,
      documentAction,
      documentActionsByPartyId,
      partyTarget,
      dataVendor,
      isSubmit,
      isShowEditPercentTransaction
    } = this.state
    const { currentParty, detail, currentTransactionStatus } = this.props

    if (this.props.selectedViewParties === 'View Details') {
      if (
        partyTarget.role === TransactionRole.TRANSACTION_COORDINATOR &&
        transaction.status !== TransactionStatus.ARCHIVED &&
        transaction.status !== TransactionStatus.CLOSED
      ) {
        return (
          <>
            <div
              className='card-details'
              onClick={() =>
                isShowEditPercentTransaction &&
                this.setState({ isShowEditPercentTransaction: false })
              }
            >
              <div className='box-card-details'>
                <div className='head-details'>
                  <div className='boc-detail'>
                    <div className='image-detail'>
                      <div className='percent-detail mr-2'>
                        {this._renderTransactionPercentCircle()}
                      </div>
                      <div className='name-address-title'>
                        {transaction.address}
                      </div>
                    </div>
                  </div>
                </div>
                <Formik
                  initialValues={{
                    address: transaction.address,
                    transactionType: transaction.transactionType,
                    transactionTypeStatus: transaction.transactionTypeStatus,
                    url: transaction.url,
                    description: transaction.description,
                    closingDate: transaction.closingDate,
                    role: '',
                    imageURL: '',
                    yearBuilt: detail[0] ? detail[0].yearBuilt : '',
                    bedrooms: detail[0] ? detail[0].bedrooms : '',
                    squareFootage: detail[0] ? detail[0].squareFootage : '',
                    schoolDistrict: detail[0] ? detail[0].schoolDistrict : '',
                    type: detail[0] ? detail[0].type : '',
                    bathrooms: detail[0] ? detail[0].bathrooms : '',
                    lotSize: detail[0] ? detail[0].lotSize : '',
                    country: detail[0] ? detail[0].country : '',
                    streetNumber: detail[0] ? detail[0].streetNumber : '',
                    streetName: detail[0] ? detail[0].streetName : '',
                    unitNumber: detail[0] ? detail[0].unitNumber : '',
                    city: detail[0] ? detail[0].city : '',
                    state: detail[0] ? detail[0].state : '',
                    postalCode: detail[0] ? detail[0].postalCode : '',
                    county: detail[0] ? detail[0].county : '',
                    mlsNumber: detail[0] ? detail[0].mlsNumber : '',
                    taxId: detail[0] ? detail[0].taxId : ''
                  }}
                  onSubmit={this._onSubmitDetail}
                >
                  {({
                    values,
                    error,
                    handleChange,
                    isSubmitting,
                    handleSubmit,
                    setFieldValue,
                    isValid
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className='row mt-4 border-bottom pb-3'>
                        <div className='col-12'>
                          {transaction.imageURL ? (
                            <div className='main-image-details'>
                              <img src={`${transaction.imageURL}`} alt='' />
                              <div
                                onClick={() => this.deleteImage(transaction.id)}
                                className='delete-image'
                              >
                                <span />
                              </div>
                            </div>
                          ) : (
                            <div
                              className='image-upload-wrap mb-4'
                              style={{ height: '56px' }}
                            >
                              <input
                                className='form-control new-image'
                                placeholder='Type Here'
                                name='imageURL'
                                type='file'
                                accept='image/*'
                                onChange={event => {
                                  setFieldValue(
                                    'imageURL',
                                    event.currentTarget.files[0]
                                  )
                                  if (event.currentTarget.files[0] !== null) {
                                    if (
                                      event.currentTarget.files[0].size <
                                      MAX_FILE_SIZE
                                    ) {
                                      this.saveImage(
                                        event.currentTarget.files[0],
                                        transaction.id
                                      )
                                    } else {
                                      toastr.warning(
                                        'The file you have selected is too large'
                                      )
                                    }
                                  }
                                }}
                              />
                              <div className='drag-text'>
                                <h3>Upload a photo</h3>
                              </div>
                            </div>
                          )}
                          <div id='loadingTh' />
                        </div>
                        <div className='col-12'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Transaction Name
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Type Here'
                                name='address'
                                type='text'
                                onChange={handleChange}
                                value={values.address}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Transaction Type
                            </label>
                            <select
                              className='custom-select mr-sm-2 form-control'
                              id='text-select'
                              onChange={handleChange}
                              value={values.transactionType}
                              name='transactionType'
                            >
                              <option value=''>None</option>
                              <option value={TransactionType.NEW_PURCHASE}>
                                Purchase
                              </option>
                              <option
                                value={TransactionType.NEW_LISTING_FOR_SALE}
                              >
                                Listing for sale
                              </option>
                              <option
                                value={TransactionType.NEW_LISTING_FOR_LEASE}
                              >
                                Listing for lease
                              </option>
                              <option value={TransactionType.NEW_LEASE}>
                                Lease
                              </option>
                              <option
                                value={TransactionType.NEW_REAL_ESTATE_OTHER}
                              >
                                Real estate other
                              </option>
                              <option value={TransactionType.NEW_OTHER}>
                                Other
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className='col-12 col-md-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Transaction Status
                            </label>
                            {values.transactionType === 'new-purchase' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_OFFER}
                                >
                                  Pre-offer
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW}
                                >
                                  Escrow
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW_CLOSE}
                                >
                                  Escrow close
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option value={TransactionTypeStatus.TTS_SOLD}>
                                  Sold
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                                <option value={TransactionTypeStatus.TTS_CLOSE}>
                                  Close
                                </option>
                              </select>
                            )}
                            {values.transactionType ===
                              'new-listing-for-sale' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_LISTING}
                                >
                                  Pre-listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_PRIVATE_LISTING
                                  }
                                >
                                  Private listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_ACTIVE_LISTING
                                  }
                                >
                                  Active listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW}
                                >
                                  Escrow
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW_CLOSE}
                                >
                                  Escrow close
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option value={TransactionTypeStatus.TTS_SOLD}>
                                  Sold
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                                <option value={TransactionTypeStatus.TTS_CLOSE}>
                                  Close
                                </option>
                              </select>
                            )}
                            {values.transactionType ===
                              'new-listing-for-lease' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_LISTING}
                                >
                                  Pre-listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_PRIVATE_LISTING
                                  }
                                >
                                  Private listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_ACTIVE_LISTING
                                  }
                                >
                                  Active listing
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_LEASED}
                                >
                                  Leased
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                                <option value={TransactionTypeStatus.TTS_CLOSE}>
                                  Close
                                </option>
                              </select>
                            )}
                            {values.transactionType === 'new-lease' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option
                                  value={TransactionTypeStatus.TTS_PRE_OFFER}
                                >
                                  Pre-offer
                                </option>
                                <option
                                  value={
                                    TransactionTypeStatus.TTS_UNDER_CONTRACT
                                  }
                                >
                                  Under contract
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_LEASED}
                                >
                                  Leased
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                                <option value={TransactionTypeStatus.TTS_CLOSE}>
                                  Close
                                </option>
                              </select>
                            )}
                            {values.transactionType ===
                              'new-real-estate-other' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option value={TransactionTypeStatus.TTS_NEW}>
                                  New
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_IN_PROCESS}
                                >
                                  In-process
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW}
                                >
                                  Escrow
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ESCROW_CLOSE}
                                >
                                  Escrow close
                                </option>
                                <option value={TransactionTypeStatus.TTS_DONE}>
                                  Done
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                                <option value={TransactionTypeStatus.TTS_CLOSE}>
                                  Close
                                </option>
                              </select>
                            )}
                            {values.transactionType === 'new-other' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                                <option value={TransactionTypeStatus.TTS_NEW}>
                                  New
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_IN_PROCESS}
                                >
                                  In-process
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_WITHDRAWN}
                                >
                                  Withdrawn
                                </option>
                                <option value={TransactionTypeStatus.TTS_DONE}>
                                  Done
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_TERMINATED}
                                >
                                  Terminated
                                </option>
                                <option
                                  value={TransactionTypeStatus.TTS_ARCHIVED}
                                >
                                  Archived
                                </option>
                                <option value={TransactionTypeStatus.TTS_CLOSE}>
                                  Close
                                </option>
                              </select>
                            )}
                            {values.transactionType === '' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value=''>None</option>
                              </select>
                            )}
                            {values.transactionType === 'close' && (
                              <select
                                className='custom-select mr-sm-2 form-control'
                                id='inlineFormCustomSelect2'
                                onChange={e =>
                                  this.handleChangeTransactionTypeStatus(
                                    e,
                                    handleChange
                                  )
                                }
                                value={values.transactionTypeStatus}
                                name='transactionTypeStatus'
                              >
                                <option value='close'>Close</option>
                              </select>
                            )}
                          </div>
                        </div>
                        <div className='col-12 col-md-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Expected Closing Date
                            </label>
                            <input
                              className='form-control'
                              type='date'
                              id='example-date-input'
                              name='closingDate'
                              onChange={handleChange}
                              value={this._viewDate(values.closingDate)}
                            />
                          </div>
                        </div>
                        <div className='col-12 col-md-6'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>URL</label>
                            <input
                              className='form-control'
                              placeholder='Add URL'
                              name='url'
                              type='text'
                              onChange={handleChange}
                              value={values.url}
                            />
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Description
                            </label>
                            <textarea
                              className='form-control'
                              placeholder='Add Description'
                              rows={3}
                              name='description'
                              onChange={handleChange}
                              value={values.description}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='row pt-5 border-bottom pb-3'>
                        <div className='col-12 col-md-6'>
                          <h4 className='text-left tittle-mini'>PEOPLE</h4>
                        </div>
                        <div className='table-responsive'>
                          <table className='table table-borderless'>
                            <thead>
                              <tr>
                                <th scope='col'>Full Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Role</th>
                                <th scope='col' />
                              </tr>
                            </thead>
                            <tbody>{this._renderPartiesMemberInfo()}</tbody>
                          </table>
                        </div>
                      </div>
                      <div className='row pt-5 border-bottom pb-3'>
                        <div className='col-12'>
                          <h4 className='text-left tittle-mini'>PROPERTY</h4>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Year Built
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add year built'
                                name='yearBuilt'
                                type='text'
                                onChange={handleChange}
                                value={values.yearBuilt}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Bedrooms</label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add bedrooms'
                                name='bedrooms'
                                type='text'
                                onChange={handleChange}
                                value={values.bedrooms}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Square Footage
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add square footage'
                                name='squareFootage'
                                type='text'
                                onChange={handleChange}
                                value={values.squareFootage}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              School District
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add school district'
                                name='schoolDistrict'
                                type='text'
                                onChange={handleChange}
                                value={values.schoolDistrict}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Type</label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add type'
                                name='type'
                                type='text'
                                onChange={handleChange}
                                value={values.type}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Bathrooms</label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add bathrooms'
                                name='bathrooms'
                                type='text'
                                onChange={handleChange}
                                value={values.bathrooms}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Lot Size</label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add lot size'
                                name='lotSize'
                                type='text'
                                onChange={handleChange}
                                value={values.lotSize}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='row pt-5 pb-3'
                        style={{
                          paddingTop: '2rem'
                        }}
                      >
                        <div className='col-12'>
                          <h4 className='text-left tittle-mini'>
                            PROPERTY ADDRESS
                          </h4>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>Country</label>
                            <input
                              className='form-control'
                              placeholder='Add country'
                              type='text'
                              onChange={handleChange}
                              value={values.country}
                              name='country'
                            />
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Street Number
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add street number'
                                name='streetNumber'
                                type='text'
                                onChange={handleChange}
                                value={values.streetNumber}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Street Name
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add street name'
                                name='streetName'
                                type='text'
                                onChange={handleChange}
                                value={values.streetName}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Unit Number
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add unit number'
                                name='unitNumber'
                                type='text'
                                onChange={handleChange}
                                value={values.unitNumber}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>City</label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add city'
                                name='city'
                                type='text'
                                onChange={handleChange}
                                value={values.city}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              State/Prov
                            </label>
                            <input
                              className='form-control'
                              placeholder='Add state/prov'
                              type='text'
                              onChange={handleChange}
                              value={values.state}
                              name='state'
                            />
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              ZIP/Postal Code
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add zip/postal code'
                                name='postalCode'
                                type='text'
                                onChange={handleChange}
                                value={values.postalCode}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>County</label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add county'
                                name='county'
                                type='text'
                                onChange={handleChange}
                                value={values.county}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              MLS Number
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add MLS number'
                                name='mlsNumber'
                                type='text'
                                onChange={handleChange}
                                value={values.mlsNumber}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                          <div className='form-group'>
                            <label className='tittle-mini-ver'>
                              Parcel/TaxID
                            </label>
                            <div className='transaction-pro'>
                              <input
                                className='form-control'
                                placeholder='Add parcel/tax ID'
                                name='taxId'
                                type='text'
                                onChange={handleChange}
                                value={values.taxId}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row pt-3'>
                        <div className='form-group'>
                          <div
                            className='btn-save'
                            style={{
                              marginLeft: '10px'
                            }}
                          >
                            <button
                              disabled={
                                isSubmit ||
                                currentTransactionStatus ===
                                  TransactionStatus.CLOSED ||
                                isSubmitting
                              }
                              type='submit'
                              className='btn text-white py-2 px-5'
                              style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                height: '100%'
                              }}
                            >
                              {isSubmitting && (
                                <span className='spinner-border spinner-border-sm mr-2' />
                              )}
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </>
        )
      } else {
        return (
          <>
            <div className='card-details'>
              <div className='box-card-details'>
                <div className='head-details'>
                  <div className='boc-detail'>
                    <div className='image-detail'>
                      <div className='percent pr-2'>
                        <div
                          data-progress={this._viewPercentTransaction()}
                          className='th-17 th-per-d d-flex justify-content-center align-items-center display-6 text-white'
                          style={{
                            '&::after': {
                              backgroundImage:
                                'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                            }
                          }}
                        />
                      </div>
                      <div className='name-address-title'>
                        {transaction.address || 'None'}
                      </div>
                    </div>
                  </div>
                </div>

                <form>
                  <div className='row mt-4 border-bottom pb-3'>
                    <div className='col-12'>
                      {transaction.imageURL ? (
                        <div className='main-image-details'>
                          <img src={`${transaction.imageURL}`} alt='' />
                        </div>
                      ) : (
                        <div
                          className='image-upload-wrap mb-4'
                          style={{ height: '56px' }}
                        >
                          <div className='drag-text'>
                            <h3>Upload a photo</h3>
                          </div>
                        </div>
                      )}
                      <div id='loadingTh' />
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>
                          Transaction Name
                        </label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Type Here'
                            type='text'
                            defaultValue={transaction.address || 'None'}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>
                          Transaction Type
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          id='example-date-input'
                          defaultValue={this._viewTransactionType(
                            transaction.transactionType
                          )}
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>
                          Transaction Status
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          id='example-date-input'
                          defaultValue={this._viewTransactionStatus(
                            transaction.transactionTypeStatus
                          )}
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>
                          Expected Closing Date
                        </label>
                        <input
                          className='form-control'
                          type='date'
                          id='example-date-input'
                          defaultValue={this._viewDate(transaction.closingDate)}
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>URL</label>
                        <input
                          className='form-control'
                          placeholder='Add URL'
                          name='url'
                          type='text'
                          defaultValue={transaction.url || 'None'}
                        />
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Description</label>
                        <textarea
                          className='form-control'
                          placeholder='Add Description'
                          rows={3}
                          defaultValue={transaction.description || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row pt-5 border-bottom pb-3'>
                    <div className='col-12'>
                      <h4 className='text-left tittle-mini'>PEOPLE</h4>
                    </div>
                    <table className='table table-borderless'>
                      <thead>
                        <tr>
                          <th scope='col'>Full Name</th>
                          <th scope='col'>Email</th>
                          <th scope='col'>Role</th>
                        </tr>
                      </thead>
                      <tbody>{this._renderPartiesMemberInfo()}</tbody>
                    </table>
                  </div>
                  <div className='row pt-5 border-bottom pb-3'>
                    <div className='col-12'>
                      <h4 className='text-left tittle-mini'>PROPERTY</h4>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Year Built</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add year built'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].yearBuilt
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Bedrooms</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add bedrooms'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].bedrooms
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>
                          Square Footage
                        </label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add square footage'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].squareFootage
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>
                          School District
                        </label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add school district'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].schoolDistrict
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Type</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add type'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].type
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Bathrooms</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add bathrooms'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].bathrooms
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Lot Size</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add lot size'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].lotSize
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='row pt-5 pb-3'
                    style={{
                      paddingTop: '2rem'
                    }}
                  >
                    <div className='col-12'>
                      <h4 className='text-left tittle-mini'>
                        PROPERTY ADDRESS
                      </h4>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Country</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add country'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].country
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Street Number</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add street number'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].streetNumber
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Street Name</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add street name'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].streetName
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Unit Number</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add unit number'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].unitNumber
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>City</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add city'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].city
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>State/Prov</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add state/prov'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].state
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>
                          ZIP/Postal Code
                        </label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add zip/postal code'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].postalCode
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>County</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add county'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].county
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>MLS Number</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add MLS number'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].mlsNumber
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Parcel/TaxID</label>
                        <div className='transaction-pro'>
                          <input
                            className='form-control'
                            placeholder='Add parcel/tax ID'
                            type='text'
                            defaultValue={
                              detail
                                ? detail[0]
                                  ? detail[0].taxId
                                  : 'None'
                                : 'None'
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )
      }
    }

    if (
      this.props.selectedViewParties === 'Actions Needed' &&
      listEnvelopeDocument.length > 0
    ) {
      return (
        <TransactionDocumentActions
          currentParty={currentParty}
          documentActions={documentActionsByPartyId}
          listDocument={listEnvelopeDocument}
          reFetchData={() => this._fetchDocumentsAndActions()}
          transactionStatus={currentTransactionStatus}
        />
      )
    }

    if (this.props.selectedViewParties === 'My Documents') {
      return (
        <>
          <TransactionDocuments listDocument={listDocument} />
          {dataVendor && dataVendor.length > 0 ? (
            <TransactionDocumentVendor listDocument={dataVendor} />
          ) : (
            <></>
          )}
        </>
      )
    }

    if (this.props.selectedViewParties === 'Envelopes') {
      return (
        <TransactionEnvelopes
          documentAction={documentAction}
          listDocument={listEnvelopeDocument}
        />
      )
    }

    if (this.props.selectedViewParties === 'Main') {
      const { transaction } = this.state
      return (
        <>
          <div className='card-des-big'>
            <div className='info-description'>
              <div className='info-left'>
                <div className='card-info-left'>
                  <div className='bo-image'>
                    {transaction.imageURL !== '' ? (
                      <img
                        src={`${transaction.imageURL}`}
                        alt=''
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <img
                        src='/static/images/image-default.png'
                        alt=''
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div className='description'>
                    <div className='up-des'>
                      <div className='address-x'>
                        <h4 className='name-des'>{transaction.address}</h4>
                      </div>
                      <a href={`${transaction.url}`} className='link-des'>
                        {transaction.url}
                      </a>
                    </div>
                    <div className='down-des'>
                      <p>{transaction.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='info-right'>
                <div className='info-percents'>
                  <div className='cap-per'>Property to Close</div>
                  <div className='percent'>
                    <div
                      data-progress={this._viewPercentTransaction()}
                      className='th-17  d-flex justify-content-center align-items-center display-6 text-white'
                      style={{
                        '&::after': {
                          backgroundImage:
                            'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                        }
                      }}
                    />
                  </div>
                </div>
                <div className='info-ch'>
                  <div className='type-ch'>
                    <label className='type-ch-l'>Type</label>
                    <p>
                      {this._viewTransactionType(transaction.transactionType)}
                    </p>
                  </div>
                  <div className='status-ch'>
                    <label className='status-ch-l'>Status</label>
                    <p>
                      {this._viewTransactionStatus(
                        transaction.transactionTypeStatus
                      )}
                    </p>
                  </div>
                  <div className='create-ch'>
                    <label className='create-ch-l'>Expected Closing Date</label>
                    <p>
                      {moment(transaction.closingDate).format('ll') ===
                      'Jan 1, 1970'
                        ? 'None'
                        : moment(transaction.closingDate).format('ll')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className='pt-h5'>Parties</h5>
          <div className='row'>{this._testPartiesView()}</div>
        </>
      )
    }
  }
  // render parties member
  _renderTransactionPartiesAllowedAccess = () => {
    const {
      transaction,
      listDocument,
      listEnvelopeDocument,
      documentAction,
      documentActionsByPartyId
    } = this.state
    const { currentParty, currentTransactionStatus } = this.props
    const role = this.props.partyTarget.role

    if (this.props.selectedViewParties === 'Main') {
      return (
        <>
          <div className='card-des-big'>
            <div className='info-description'>
              <div className='info-left'>
                <div className='card-info-left'>
                  <div className='bo-image'>
                    {transaction.imageURL !== '' ? (
                      <img src={`${transaction.imageURL}`} alt='' />
                    ) : (
                      <img src='/static/images/image-default.png' alt='' />
                    )}
                  </div>
                  <div className='description'>
                    <div className='up-des'>
                      <div className='address-x'>
                        <h4 className='name-des'>{transaction.address}</h4>
                      </div>
                      <a href={`${transaction.url}`} className='link-des'>
                        {transaction.url}
                      </a>
                    </div>
                    <div className='down-des'>
                      <p>{transaction.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='info-right'>
                <div className='info-percents'>
                  <div className='cap-per'>Property to Close</div>
                  <div className='percent'>
                    <div
                      data-progress={this._viewPercentTransaction()}
                      className='th-17 d-flex justify-content-center align-items-center display-6 text-white'
                      style={{
                        '&::after': {
                          backgroundImage:
                            'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                        }
                      }}
                    />
                  </div>
                </div>
                <div className='info-ch'>
                  <div className='type-ch'>
                    <label className='type-ch-l'>Type</label>
                    <p>
                      {this._viewTransactionType(transaction.transactionType)}
                    </p>
                  </div>
                  <div className='status-ch'>
                    <label className='status-ch-l'>Status</label>
                    <p>
                      {this._viewTransactionStatus(
                        transaction.transactionTypeStatus
                      )}
                    </p>
                  </div>
                  <div className='create-ch'>
                    <label className='create-ch-l'>Expected Closing Date</label>
                    <p>
                      {moment(transaction.closingDate).format('ll') ===
                      'Jan 1, 1970'
                        ? 'None'
                        : moment(transaction.closingDate).format('ll')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className='pt-h5'>Parties</h5>
          <div className='tha-6'>
            <div className='cardParties'>
              <div className='cardParties-box'>
                <div className='project-content'>
                  {this._renderCardBodyTest(role)}
                  <div className='project-role-name'>
                    {this._renderTransactionPartiesFullName(role)}
                  </div>
                  <div className='project-avt'>
                    {this._renderAvatarTransaction(role)}
                  </div>
                  {this._renderButtonFile(role)}
                  {this._renderButtonProfile(role)}
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
    if (this.props.selectedViewParties === 'Actions Needed') {
      return (
        <TransactionDocumentActions
          currentParty={currentParty}
          documentActions={documentActionsByPartyId}
          listDocument={listEnvelopeDocument}
          reFetchData={() => this._fetchDocumentsAndActions()}
          transactionStatus={currentTransactionStatus}
        />
      )
    }
    if (this.props.selectedViewParties === 'My Documents') {
      return <TransactionDocuments listDocument={listDocument} />
    }
    if (this.props.selectedViewParties === 'Envelopes') {
      return (
        <TransactionEnvelopes
          documentAction={documentAction}
          listDocument={listEnvelopeDocument}
        />
      )
    }
    if (this.props.selectedViewParties === 'View Details') {
      const { transaction } = this.state
      const { detail } = this.props
      return (
        <>
          <div className='card-details'>
            <div className='box-card-details'>
              <div className='head-details'>
                <div className='boc-detail'>
                  <div className='image-detail'>
                    <div className='percent pr-2'>
                      <div
                        data-progress={this._viewPercentTransaction()}
                        className='th-17 th-per-d d-flex justify-content-center align-items-center display-6 text-white'
                        style={{
                          '&::after': {
                            backgroundImage:
                              'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                          }
                        }}
                      />
                    </div>

                    <div className='name-address-title'>
                      {transaction.address || 'None'}
                    </div>
                  </div>
                </div>
              </div>

              <form>
                <div className='row mt-4 border-bottom pb-3'>
                  <div className='col-12'>
                    {transaction.imageURL ? (
                      <div className='main-image-details'>
                        <img src={`${transaction.imageURL}`} alt='' />
                      </div>
                    ) : (
                      <div
                        className='image-upload-wrap mb-4'
                        style={{ height: '56px' }}
                      >
                        <div className='drag-text'>
                          <h3>Upload a photo</h3>
                        </div>
                      </div>
                    )}
                    <div id='loadingTh' />
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>
                        Transaction Name
                      </label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Type Here'
                          type='text'
                          value={transaction.address || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>
                        Transaction Type
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        id='example-date-input'
                        value={this._viewTransactionType(
                          transaction.transactionType
                        )}
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>
                        Transaction Status
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        id='example-date-input'
                        value={this._viewTransactionStatus(
                          transaction.transactionTypeStatus
                        )}
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>
                        Expected Closing Date
                      </label>
                      <input
                        className='form-control'
                        type='date'
                        id='example-date-input'
                        defaultValue={this._viewDate(transaction.closingDate)}
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>URL</label>
                      <input
                        className='form-control'
                        placeholder='Add URL'
                        name='url'
                        type='text'
                        value={transaction.url || 'None'}
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Description</label>
                      <textarea
                        className='form-control'
                        placeholder='Add Description'
                        rows={3}
                        value={transaction.description || 'None'}
                      />
                    </div>
                  </div>
                </div>
                <div className='row pt-5 border-bottom pb-3'>
                  <div className='col-12'>
                    <h4 className='text-left tittle-mini'>PEOPLE</h4>
                  </div>
                  <table className='table table-borderless'>
                    <thead>
                      <tr>
                        <th scope='col'>Full Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Role</th>
                      </tr>
                    </thead>
                    <tbody>{this._renderPartiesMemberInfo()}</tbody>
                  </table>
                </div>
                <div className='row pt-5 border-bottom pb-3'>
                  <div className='col-12'>
                    <h4 className='text-left tittle-mini'>PROPERTY</h4>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Year Built</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add year built'
                          type='text'
                          value={detail[0].yearBuilt || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Bedrooms</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add bedrooms'
                          type='text'
                          value={detail[0].bedrooms || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Square Footage</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add square footage'
                          type='text'
                          value={detail[0].squareFootage || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>School District</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add school district'
                          type='text'
                          value={detail[0].schoolDistrict || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Type</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add type'
                          type='text'
                          value={detail[0].type || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Bathrooms</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add bathrooms'
                          type='text'
                          value={detail[0].bathrooms || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Lot Size</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add lot size'
                          type='text'
                          value={detail[0].lotSize || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='row pt-5 pb-3'
                  style={{
                    paddingTop: '2rem'
                  }}
                >
                  <div className='col-12'>
                    <h4 className='text-left tittle-mini'>PROPERTY ADDRESS</h4>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Country</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add country'
                          type='text'
                          value={detail[0].country || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Street Number</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add street number'
                          type='text'
                          value={detail[0].streetNumber || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Street Name</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add street name'
                          type='text'
                          value={detail[0].streetName || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Unit Number</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add unit number'
                          type='text'
                          value={detail[0].unitNumber || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>City</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add city'
                          type='text'
                          value={detail[0].city || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>State/Prov</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add state/prov'
                          type='text'
                          value={detail[0].state || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>ZIP/Postal Code</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add zip/postal code'
                          type='text'
                          value={detail[0].postalCode || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>County</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add county'
                          type='text'
                          value={detail[0].county || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>MLS Number</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add MLS number'
                          type='text'
                          value={detail[0].mlsNumber || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>Parcel/TaxID</label>
                      <div className='transaction-pro'>
                        <input
                          className='form-control'
                          placeholder='Add parcel/tax ID'
                          type='text'
                          value={detail[0].taxId || 'None'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )
    }
  }
  // view transaction type
  _viewTransactionType = transactionType => {
    switch (transactionType) {
      case '':
        return 'None'
      case 'new-purchase':
        return 'Purchase'
      case 'new-listing-for-sale':
        return 'Listing for sale'
      case 'new-listing-for-lease':
        return 'Listing for lease'
      case 'new-lease':
        return 'Lease'
      case 'new-real-estate-other':
        return 'Real estate other'
      case 'new-other':
        return 'Other'
      default:
    }
  }
  // view transaction type status
  _viewTransactionStatus = transaction => {
    if (transaction) {
      switch (transaction) {
        case '':
          return 'None'
        case TransactionTypeStatus.TTS_PRE_OFFER:
          return 'Pre-offer'
        case TransactionTypeStatus.TTS_UNDER_CONTRACT:
          return 'Under contract'
        case TransactionTypeStatus.TTS_ESCROW:
          return 'Escrow'
        case TransactionTypeStatus.TTS_ESCROW_CLOSE:
          return 'Escrow close'
        case TransactionTypeStatus.TTS_WITHDRAWN:
          return 'Withdrawn'
        case TransactionTypeStatus.TTS_SOLD:
          return 'Sold'
        case TransactionTypeStatus.TTS_TERMINATED:
          return 'Terminated'
        case TransactionTypeStatus.TTS_ARCHIVED:
          return 'Archived'
        case TransactionTypeStatus.TTS_PRE_LISTING:
          return 'Pre-listing'
        case TransactionTypeStatus.TTS_PRIVATE_LISTING:
          return 'Private Listing'
        case TransactionTypeStatus.TTS_ACTIVE_LISTING:
          return 'Active Listing'
        case TransactionTypeStatus.TTS_LEASED:
          return 'Leased'
        case TransactionTypeStatus.TTS_NEW:
          return 'New'
        case TransactionTypeStatus.TTS_IN_PROCESS:
          return 'In process'
        case TransactionTypeStatus.TTS_DONE:
          return 'Done'
        case TransactionTypeStatus.TTS_CLOSE:
          return 'Close'
        default:
          break
      }
    } else {
      return 'None'
    }
  }
  //
  _testPartiesView = () => {
    return ROLES.map((role, index) => (
      <div className='cardParties' key={index}>
        <div className='cardParties-box'>
          <div className='project-content'>
            {this._renderCardBodyTest(role)}
            <div className='project-role-name'>
              {this._renderTransactionPartiesFullName(role)}
            </div>
            <div className='project-avt'>
              {this._renderAvatarTransaction(role)}
            </div>
            {this._renderButtonFile(role)}
            {this._renderButtonProfile(role)}
          </div>
        </div>
      </div>
    ))
  }

  // end test
  _percentOfParty = role => {
    const {
      transaction: { parties }
    } = this.props
    const matchedParty = parties.find(item => item.role === role)

    if (!matchedParty) {
      return 0
    }

    return roundPercent(
      calculatorPercentageOfParty(
        matchedParty.documents,
        matchedParty.assignedActions
      )
    )
  }

  _renderCardBody = role => {
    const { transaction } = this.state
    const { parties } = this.state.transaction
    const partyJoined = parties.find(party => party.role === role)
    if (partyJoined) {
      return (
        <Link
          route={`/my-transactions/${transaction.id}/parties/${
            partyJoined.id
          }/files`}
        >
          <div
            className='card-body py-0 border-bottom'
            style={{ cursor: 'pointer' }}
          >
            <div
              data-progress={this._percentOfParty(role)}
              className='progress-circle d-flex justify-content-center align-items-center display-6 text-white'
              style={{
                '&::after': {
                  backgroundImage:
                    'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
                }
              }}
            />
            <h4 className='card-title'>{getRoleLabel(role)}</h4>
          </div>
        </Link>
      )
    }

    return (
      <div className='card-body py-0 border-bottom'>
        <div
          data-progress={this._percentOfParty(role)}
          className='progress-circle d-flex justify-content-center align-items-center display-6 text-white'
          style={{
            '&::after': {
              backgroundImage:
                'linear-gradient(90deg, #ddd 50%, transparent 50%, transparent), linear-gradient(180deg, #0083ff 50%, #ddd 50%, #ddd)'
            }
          }}
        />
        <h4 className='card-title'>{getRoleLabel(role)}</h4>
      </div>
    )
  }

  _fetchDocumentsAndActions = async () => {
    // Need for "Document" feature
    const { currentParty, transaction } = this.props
    const [
      listDocument,
      listEnvelopeDocument,
      documentActionsByPartyId
    ] = await Promise.all([
      transactionService.getDocumentsAndPartyByTransactionId(transaction.id),
      transactionService.getEnvelopeDocumentsAndPartyByTransactionId(
        transaction.id
      ),
      transactionService.getDocumentActionsByPartyId(currentParty.id)
    ])

    let documentAction = {}
    for (const doc of listEnvelopeDocument) {
      const actions = await transactionService.getDocumentActionsByDocumentId(
        doc.id
      )
      documentAction[doc.id] = actions
    }

    this.setState({
      listDocument,
      listEnvelopeDocument,
      documentActionsByPartyId,
      documentAction
    })

    return {
      listDocument,
      documentActionsByPartyId,
      documentAction
    }
  }

  _fetchTransaction = async () => {
    const {
      transaction
    } = await transactionService.getDetailedTransactionAndActivityById(
      this.props.transaction.id
    )
    this.setState({
      transaction
    })
  }

  _reRenderDynamic = async () => {
    const {
      transaction
    } = await transactionService.getDetailedTransactionAndActivityById(
      this.props.transaction.id
    )

    const newMem = await transactionService.getMemberPartiesByTransaction(
      this.props.transaction.id
    )
    const dataVendor = await transactionService.getAllDocumentVendorByTransactionId(
      this.props.transaction.id
    )
    this.setState({
      partyNew: newMem,
      transaction,
      dataVendor
    })

    await this._fetchDocumentsAndActions()
  }

  _renderIconEdit = role => {
    const { partyNew } = this.state
    const partyJoined = partyNew.find(party => party.role === role)
    if (partyJoined) {
      if (partyJoined.userId === this.props.currentUser.id) {
        return (
          <button className='btn text-muted invisible'>
            <i className='fas fa-info invisible ' />
          </button>
        )
      }
      return (
        <button
          className='btn text-muted '
          onClick={() => this._toggleModalInfoTransactionParties(role)}
        >
          <i className='fas fa-info ' />
        </button>
      )
    } else {
      return (
        <button
          className='btn text-muted invisible'
          onClick={() => this._toggleModalInfoTransactionParties(role)}
        >
          <i className='fas fa-info' />
        </button>
      )
    }
  }

  _renderActionButton = role => {
    const { transaction } = this.state
    const { invitations, parties, status } = transaction

    const partyJoined = parties.find(party => party.role === role)
    if (partyJoined) {
      if (partyJoined.userId === this.props.currentUser.id) {
        return (
          <button
            className='btn text-info'
            onClick={() => !status && this._toggleModalUpdateMyProfile}
          >
            My Profile
          </button>
        )
      }

      if (partyJoined.access === TransactionAccessType.UPLOAD_ONLY) {
        return <a className='btn text-dark disabled'>Message</a>
      }

      return (
        <Link route={`/message?partyId=${partyJoined.id}`}>
          <a className='text-info btn'>Message</a>
        </Link>
      )
    }

    const partyInvited = invitations.find(
      invitation => invitation.role === role
    )
    if (partyInvited) {
      return (
        <button disabled className='btn text-info'>
          Invited
        </button>
      )
    }

    return (
      <button
        className='btn text-info'
        onClick={() => this._showInvitePartyModal(role, transaction)}
        disabled={!!status}
      >
        Invite
      </button>
    )
  }

  _renderActivityTimeline = () => {
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
            <div className='col-2 col-sm-1 col-md-1 col-xl-2 row align-items-center position-relative'>
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

  _onSubmitModalUpdateMyProfile = async (values, action) => {
    const { partyTarget } = this.state
    const { setSubmitting } = action

    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        licenseNumber
      } = values

      setSubmitting(true)

      await transactionService.updateTransactionPartyById(partyTarget.id, {
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        licenseNumber
      })
      setSubmitting(false)
      toastr.success('Success')

      this._reloadDataMember()

      this._toggleModalUpdateMyProfile()
    } catch (e) {
      toastr.error(e.message)
      setSubmitting(false)
    }
  }

  _toggleModalUpdateMyProfile = () =>
    this.setState({
      toggleModalUpdateMyProfile: !this.state.toggleModalUpdateMyProfile
    })

  _renderModalUpdateMyProfile = () => {
    const { partyTarget, transaction } = this.state
    return (
      <Modal
        isOpen={this.state.toggleModalUpdateMyProfile || false}
        toggle={this._toggleModalUpdateMyProfile}
        id='create-transaction-party-profile-modal'
      >
        <div className='modal-header modal-header--change' id='bg-gr'>
          <div className='text-center w-100'>
            <h5 className='modal-title new-add' id='exampleModalLabel'>
              Transaction Profile
            </h5>
          </div>
          <button
            type='button'
            className='close bg-transparent'
            data-dismiss='modal'
            onClick={this._toggleModalUpdateMyProfile}
          >
            &times;
          </button>
        </div>
        <Formik
          initialValues={{
            firstName: partyTarget.firstName || '',
            lastName: partyTarget.lastName || '',
            email: partyTarget.email || '',
            phoneNumber: partyTarget.phoneNumber || '',
            company: partyTarget.company || '',
            licenseNumber: partyTarget.licenseNumber || ''
          }}
          onSubmit={this._onSubmitModalUpdateMyProfile}
          validate={values => {
            let error = {}
            if (partyTarget.role !== 'seller' && partyTarget.role !== 'buyer') {
              if (
                values.firstName === '' ||
                values.lastName === '' ||
                values.email === '' ||
                values.phoneNumber.length < 9 ||
                values.company === ''
              ) {
                error.details = `${getRoleLabel(
                  partyTarget.role
                )} details are required`
              }
            } else {
              if (
                values.firstName.length < 1 ||
                values.lastName.length < 1 ||
                values.email.length < 1 ||
                values.phoneNumber.length < 9
              ) {
                error.details = `${getRoleLabel(
                  partyTarget.role
                )} details are required`
              }
            }
            return error
          }}
        >
          {({
            values,
            errors,
            isValid,
            isSubmitting,
            handleSubmit,
            handleChange
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='modal-body px-5 mx-2' id='main-body-add-member'>
                <div>
                  {/* <h4 className='text-center'>{getRoleLabel(welcomeInvitation.role)}</h4> */}
                  <div className='row pt-3'>
                    <div className='col-12 col-md-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>First Name</label>
                        <input
                          className='form-control'
                          placeholder='First Name'
                          name='firstName'
                          onChange={handleChange}
                          value={values.firstName}
                          autoFocus
                        />
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Last Name</label>
                        <input
                          className='form-control'
                          placeholder='Last Name'
                          name='lastName'
                          onChange={handleChange}
                          value={values.lastName}
                        />
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Email</label>
                        <input
                          disabled
                          className='form-control'
                          placeholder='Email Address'
                          name='email'
                          onChange={handleChange}
                          value={values.email}
                        />
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Phone Number</label>
                        <PhoneInput
                          country={'us'}
                          enableSearch
                          onChange={value => {
                            handleChange({
                              target: { name: 'phoneNumber', value }
                            })
                          }}
                          value={values.phoneNumber}
                          placeholder='Phone Number'
                          className='form-control'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className='form-group'>
                        <label className='tittle-mini-ver'>Company</label>
                        <input
                          className='form-control'
                          placeholder='Company'
                          name='company'
                          onChange={handleChange}
                          value={values.company}
                        />
                      </div>
                    </div>
                    {partyTarget.access === TransactionAccessType.FULL ? (
                      <div className='col-12 col-md-6'>
                        <div className='form-group'>
                          <label className='tittle-mini-ver'>
                            License Number
                          </label>
                          <input
                            className='form-control'
                            placeholder='License Number'
                            name='licenseNumber'
                            onChange={handleChange}
                            value={values.licenseNumber}
                          />
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {errors.details && (
                    <div className='text-danger text-center'>
                      {errors.details}
                    </div>
                  )}
                </div>
                <div className='text-center my-5'>
                  <button
                    disabled={
                      !isValid ||
                      errors.details ||
                      transaction.status === TransactionStatus.ARCHIVED ||
                      transaction.status === TransactionStatus.CLOSED
                    }
                    type='submit'
                    className='btn btn-add-new text-white py-2 px-5'
                  >
                    {isSubmitting && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    )
  }
}

export default userOnly(TransactionPartiesPage)
