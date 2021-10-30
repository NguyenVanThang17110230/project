import React, { Component } from 'react'
import Error from 'next/error'
import Head from 'next/head'
import moment from 'moment'
import _ from 'lodash'
import { Popover, PopoverBody } from 'reactstrap'
import ActionModal from './ActionModal'
import DocumentModal from './DocumentModal'
import PreviewModal from './PreviewModal'
import { transactionService } from '../../services'
import {
  TransactionAccessType,
  DocumentActionStatus,
  TransactionRole,
  DataAccessType
} from '../../../common/models/Transaction'
import { getRoleLabel } from '../../view-models/User'
import {
  DOCUMENT_STATUS,
  getTransactionActivity,
  getStatusForDocumentAction,
  getStatusForDocument,
  getActionStatusForDocumentAction,
  canCompleteDocumentAction,
  canCompleteDocument,
  canAddDocumentAction
} from '../../view-models/Transaction'
import userOnly from '../../hocs/userOnly'
import DocumentSignModal from './DocumentSignModal'

class TransactionFiles extends Component {
  static async getInitialProps (ctx) {
    const {
      transaction,
      activitiesFull
    } = await transactionService.getDetailedTransactionAndActivityById(
      ctx.query.idTransaction
    )
    if (!transaction) {
      return { transaction: null }
    }

    const idParty = ctx.query.idParty
    const partyTarget = transaction.parties.find(party => party.id === idParty)
    if (!partyTarget) {
      return { partyTarget: null }
    }

    const listDocument = await transactionService.getDetailedDocumentByPartyId(
      idParty
    )

    // A list of document actions assigned to this party
    const documentActions = await transactionService.getDocumentActionsAssignedToParty(
      idParty
    )

    const completeDocuments = await transactionService.getDocumentActionsAssignedToParty(
      idParty,
      { status: 'done' }
    )

    // Get party for current user
    const currentUserId = ctx.store.getState().global.loginUser.data.id
    const currentParty = await transactionService.getTransactionPartyByUserId(
      ctx.query.idTransaction,
      currentUserId
    )
    if (!currentParty) {
      return { currentParty: null }
    }

    // Get title of the party selected for header
    const activitiesUploadOnly = await transactionService.getActivitiesByPartyId(
      currentParty.id
    )

    let titleParty = ''
    if (partyTarget) {
      if (partyTarget.role === TransactionRole.LEASING_AGENT) {
        titleParty = ''
      } else {
        titleParty = getRoleLabel(partyTarget.role)
      }
    }

    return {
      transaction,
      idParty,
      currentParty,
      partyTarget,
      listDocument,
      documentActions,
      completeDocuments,
      activitiesFull,
      activitiesUploadOnly,
      headerText: 'Progress',
      subHeaderText: `${titleParty}`
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      isDisabled: true,
      toggleActionModal: false,
      toggleDocumentModal: false,
      togglePreviewModal: false,
      toggleSignModal: false,
      listDocument: props.listDocument,
      documentActions: props.documentActions,
      completeDocuments: props.completeDocuments,
      documentStatus: false,
      documentId: null,
      activitiesFull: props.activitiesFull,
      activitiesUploadOnly: props.activitiesUploadOnly,
      documentCurrent: [],
      documentIdSelected: null,
      documentActionIdSelected: null,
      updatingAction: false,
      updatingDocument: false,
      user: {
        ...props.currentUser
      }
    }
  }

  render () {
    const { transaction, currentParty, partyTarget, subHeaderText } = this.props
    const {
      toggleDocumentModal,
      toggleActionModal,
      togglePreviewModal,
      toggleSignModal,
      documentId,
      documentStatus
    } = this.state

    if (!transaction) {
      return <Error statusCode={404} />
    }
    if (!partyTarget) {
      return <Error statusCode={404} />
    }
    if (!currentParty) {
      return <Error statusCode={404} />
    }
    if (subHeaderText === '') {
      return <Error statusCode={404} />
    }

    const transactionParties =
      transaction.parties.filter(item => {
        return item.email
      }) || []

    return (
      <div className='box-main' id='transaction-files'>
        <Head>
          <title>Transaction Files</title>
        </Head>
        <div className='row m-0'>
          <div
            className='col-12 col-xs-12 col-sm-12 col-md-12 col-xl-9 card-border-top card-border-top_grey media-pr-0'
            style={{
              // overflow: 'unset',
              paddingRight: '2rem'
            }}
          >
            <h4 className='py-4'>Uploaded files</h4>
            <div>
              <div className='row'>
                {this._renderDocuments()}
                {transaction.status ? (
                  ''
                ) : (
                  <div className='col-md-6 col-lg-6 col-xl-4'>
                    <div className='card transaction-card transaction-card--add text-center mx-auto'>
                      <div
                        className='card-body pt-0'
                        onClick={this._toggleDocumentModal}
                      >
                        <div className='transaction-add d-flex justify-content-center align-items-center display-6 text-'>
                          +
                        </div>
                        <h5 className='mt-2'>Add New Document </h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h4 className='py-4'>Actions</h4>
            <div>
              <div className='row'>{this._renderDocumentActions()}</div>
            </div>
            <h4 className='py-4'>Complete Documents</h4>
            <div>
              <div className='row'>{this._renderCompleteDocuments()}</div>
            </div>
          </div>
          <div
            onClick={() =>
              this.setState({ toggleTimeline: !this.state.toggleTimeline })
            }
            className='mr-3 d-md-block d-xl-none'
            style={{
              position: 'fixed',
              zIndex: '20000',
              top: '23px',
              right: '0',
              color: '#FFF',
              cursor: 'pointer'
            }}
          >
            <i className='fa fa-sliders-h' />
          </div>
          <div
            className={`timeline-sidebar ${
              this.state.toggleTimeline
                ? 'toggle-timeline col-xl-3 border-top d-md-block d-xl-block d-sm-block d-xs-block d-block '
                : 'col-xl-3 border-top d-md-none d-xl-block d-sm-none d-xs-none d-none '
            }`}
          >
            <div className='timeline-sidebar_wrapper'>
              <p className='p-2 mb-0'>Timeline</p>
              <div>
                {currentParty.access === TransactionAccessType.FULL
                  ? this._renderTimelineFull()
                  : this._renderTimelineUploadOnly()}
              </div>
            </div>
          </div>
          {/* <div className='timeline-sidebar col-3 border-top'>
            <p>Timeline</p>
            {currentParty.access === TransactionAccessType.FULL
              ? this._renderTimelineFull()
              : this._renderTimelineUploadOnly()}
          </div> */}
        </div>
        <footer className='footer-card' style={{ padding: '2rem 0' }}>
          <div className='footer-page'>
            <div className='footer-p1'>
              © Copyright Link Management Systems. All rights reserved
            </div>
            <div className='footer-p2'>Powered by Link Brokerages</div>
          </div>
        </footer>
        {toggleDocumentModal && (
          <DocumentModal
            toggle={this._toggleDocumentModal}
            currentParty={currentParty}
            idParty={this.props.idParty}
            transaction={this.props.transaction}
            reRenderDynamic={this._reRenderDynamic}
          />
        )}
        {toggleActionModal && (
          <ActionModal
            toggle={this._toggleActionModal}
            transactionParties={transactionParties}
            documentId={documentId}
            currentParty={currentParty}
            documentCurrent={this.state.documentCurrent}
            reRenderDynamic={this._reRenderDynamic}
          />
        )}
        {togglePreviewModal && (
          <PreviewModal
            toggle={this._togglePreviewModal}
            documentId={documentId}
            documentStatus={documentStatus}
          />
        )}
        {toggleSignModal && (
          <DocumentSignModal
            toggle={this._toggleSignModal}
            documentAction={this.state.action}
            reRenderDynamic={this._reRenderDynamic}
          />
        )}
      </div>
    )
  }

  _toggleSignModal = action => {
    this.setState({
      toggleSignModal: !this.state.toggleSignModal,
      action
    })
  }

  _toggleDocumentModal = () => {
    this.setState({
      toggleDocumentModal: !this.state.toggleDocumentModal
    })
  }

  _toggleActionModal = async documentId => {
    const documentCurrent = await transactionService.getDocumentActionByDocumentId(
      documentId
    )
    this.setState({
      toggleActionModal: !this.state.toggleActionModal,
      documentId: documentId,
      documentCurrent: documentCurrent
    })
  }

  _togglePreviewModal = documentId => {
    this.setState({
      togglePreviewModal: !this.state.togglePreviewModal,
      documentId: documentId,
      documentStatus: false
    })
  }

  _togglePreviewModalComplete = documentId => {
    this.setState({
      togglePreviewModal: !this.state.togglePreviewModal,
      documentId: documentId,
      documentStatus: true
    })
  }

  _reRenderDynamic = async () => {
    const {
      activitiesFull
    } = await transactionService.getDetailedTransactionAndActivityById(
      this.props.transaction.id
    )
    const activitiesUploadOnly = await transactionService.getActivitiesByPartyId(
      this.props.currentParty.id
    )

    const listDocument = await transactionService.getDetailedDocumentByPartyId(
      this.props.idParty
    )

    const documentActions = await transactionService.getDocumentActionsAssignedToParty(
      this.props.idParty
    )

    const completeDocuments = await transactionService.getDocumentActionsAssignedToParty(
      this.props.idParty,
      { status: 'done' }
    )

    this.setState({
      listDocument,
      documentActions,
      completeDocuments,
      activitiesFull,
      activitiesUploadOnly
    })
  }

  // ========= ~  “Uploaded documents”: A list of documents uploaded in this party ~ ========= //
  componentWillReceiveProps (nextProps) {
    this._reRenderDynamic()
  }
  _renderDocuments = () => {
    const { listDocument } = this.state
    return listDocument.map((item, index) => (
      <div className='col-md-6 col-lg-6 col-xl-4 pb-2 mb-2' key={index}>
        <div className='card transaction-card text-center m-auto'>
          <div className='card-header p-0 text-right bg-white'>
            <button className='btn text-muted invisible'>
              <i className='fas fa-user-edit' />
            </button>
          </div>
          <div
            className='card-body py-0 border-bottom'
            style={{ cursor: 'pointer' }}
            onClick={() => this._togglePreviewModal(item.id)}
          >
            <img src='/static/images/transactions/image-pdf.png' />
            <h4 className='card-title'>{item.title}</h4>
          </div>
          <div className=' p-0 row'>
            <div className='col-1'>
              {/* <div className="circle-timeline"></div> */}
            </div>
            <div className='col-2 row align-items-center position-relative'>
              <div className='circle-timeline position-absolute' />
            </div>
            <div className='col-9 border-left text-left py-4 pl-3 pr-2 eclipsis_file'>
              <span className='card-text'>
                <b>{moment(item.createdAt).format('LT')}</b>&nbsp;
                {moment(item.createdAt).format('ll')}
              </span>
              <br />
              <small>Uploaded by {getRoleLabel(item.role)}</small>
            </div>
          </div>
          <div className='border-top'>
            {this._renderButtonFooterForDocument(item)}
          </div>
        </div>
      </div>
    ))
  }

  _renderButtonFooterForDocument = document => {
    const isStatusDocument = getStatusForDocument(document)
    if (isStatusDocument === DOCUMENT_STATUS.COMPLETE) {
      return (
        <React.Fragment>
          <div className='py-3 px-5 text-success'>{isStatusDocument}</div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <div className='row'>
          {this._renderPopoverDocumentComplete(document)}
          {canAddDocumentAction(this.props.currentParty, document) ? (
            <div
              className='col-6 py-3 text-success border-left'
              style={{ cursor: 'pointer' }}
              onClick={() =>
                this.props.transaction.status
                  ? ''
                  : this._toggleActionModal(document.id)
              }
            >
              Add Action
            </div>
          ) : (
            <div className='col-6 py-3 text-muted border-left'>Add Action</div>
          )}
        </div>
      </React.Fragment>
    )
  }

  _renderPopoverDocumentComplete = document => {
    const { documentIdSelected, updatingDocument } = this.state
    const isComplete = canCompleteDocument(this.props.currentParty, document)
    if (!isComplete) {
      return (
        <React.Fragment>
          <div className='col-6 py-3 pl-3 text-muted'>
            {getStatusForDocument(document)}
          </div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <div
          className='col-6 py-3 pl-3'
          id={`incomplete_${document.id}`}
          style={{ cursor: 'pointer' }}
          onClick={() =>
            this.props.transaction.status
              ? ''
              : this.setState({
                documentIdSelected: document.id
              })
          }
        >
          {getStatusForDocument(document)}
        </div>
        <Popover
          placement='bottom'
          target={`incomplete_${document.id}`}
          isOpen={documentIdSelected === document.id}
          trigger='legacy'
          toggle={() => {
            this.setState({
              documentIdSelected: null
            })
          }}
        >
          <PopoverBody>
            <div className='input-group'>
              <div className='input-group-append'>
                <button
                  className='btn btn-info text-white'
                  type='button'
                  onClick={() => this._completeForDocument(document.id)}
                >
                  {updatingDocument && (
                    <span className='spinner-border spinner-border-sm mr-2' />
                  )}
                  Mark as complete
                </button>
              </div>
            </div>
          </PopoverBody>
        </Popover>
      </React.Fragment>
    )
  }

  _completeForDocument = async documentId => {
    this.setState({ updatingDocument: true })
    const document = await transactionService.getDocumentById(documentId)
    document.actions.map(async action => {
      await transactionService.updateDocumentActionById(action.id, {
        action: action.action,
        status: DocumentActionStatus.DONE,
        documentId: action.documentId,
        assignedPartyId: action.assignedPartyId,
        creatorId: action.creatorId
      })
    })
    this._reRenderDynamic()

    this.setState({
      documentIdSelected: null,
      updatingDocument: false
    })
  }

  // ========= ~  “Actions”: A list of document actions assigned to this party ~ ========= //
  _renderDocumentActions = () => {
    const { documentActions } = this.state
    if (documentActions.length === 0) {
      return
    }

    return documentActions.map((item, index) => (
      <div className='col-md-6 col-lg-6 col-xl-4 pb-2 mb-2' key={index}>
        <div className='card transaction-card text-center m-auto'>
          <div className='card-header p-0 text-right bg-white'>
            <button className='btn text-muted invisible'>
              <i className='fas fa-user-edit' />
            </button>
          </div>
          <div
            className='card-body py-0 border-bottom'
            style={{ cursor: 'pointer' }}
            onClick={() => this._togglePreviewModal(item.document.id)}
          >
            <img src='/static/images/transactions/image-pdf.png' />
            <h4 className='card-title'>{item.document.title}</h4>
          </div>
          <div className='p-0 row'>
            <div className='col-1'>
              {/* <div className="circle-timeline"></div> */}
            </div>
            <div className='col-2 row align-items-center position-relative'>
              <div className='circle-timeline position-absolute' />
            </div>
            <div className='col-9 border-left text-left py-4 pl-3 pr-2 eclipsis_file'>
              <span className='card-text'>
                <b>{moment(item.document.createdAt).format('LT')}</b>&nbsp;
                {moment(item.document.createdAt).format('ll')}
              </span>
              <br />
              <small>Uploaded by {getRoleLabel(item.document.role)}</small>
            </div>
          </div>
          <div className='border-top'>
            <div className='row'>
              {this._renderPopoverDocumentActionComplete(item)}
              <div className='col-6 py-3 border-left'>
                {getActionStatusForDocumentAction(item)}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  _renderCompleteDocuments = () => {
    const { completeDocuments } = this.state
    if (completeDocuments.length === 0) {
      return
    }

    return completeDocuments.map((item, index) => (
      <div className='col-md-6 col-lg-6 col-xl-4 pb-2 mb-2' key={index}>
        <div className='card transaction-card text-center m-auto'>
          <div className='card-header p-0 text-right bg-white'>
            <button className='btn text-muted invisible'>
              <i className='fas fa-user-edit' />
            </button>
          </div>
          <div
            className='card-body py-0 border-bottom'
            style={{ cursor: 'pointer' }}
            onClick={() => this._togglePreviewModalComplete(item.id)}
          >
            <img src='/static/images/transactions/image-pdf.png' />
            <h4 className='card-title'>{item.document.title}</h4>
          </div>
          <div className='p-0 row'>
            <div className='col-1'>
              {/* <div className="circle-timeline"></div> */}
            </div>
            <div className='col-2 row align-items-center position-relative'>
              <div className='circle-timeline position-absolute' />
            </div>
            <div className='col-9 border-left text-left py-4 pl-3 pr-2 eclipsis_file'>
              <span className='card-text'>
                <b>{moment(item.document.createdAt).format('LT')}</b>&nbsp;
                {moment(item.document.createdAt).format('ll')}
              </span>
              <br />
              <small>Uploaded by {getRoleLabel(item.document.role)}</small>
            </div>
          </div>
          <div className='border-top'>
            <React.Fragment>
              <div className='py-3 px-5 text-success'>
                {DOCUMENT_STATUS.COMPLETE}
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    ))
  }

  _renderPopoverDocumentActionComplete = action => {
    const { documentActionIdSelected, updatingAction } = this.state
    const isComplete = canCompleteDocumentAction(
      this.props.currentParty,
      action
    )
    if (!isComplete) {
      return (
        <React.Fragment>
          <div className='col-6 py-3 pl-3 text-muted'>
            {getStatusForDocumentAction(action)}
          </div>
        </React.Fragment>
      )
    }
    if (action.action === DataAccessType.SIGN_DOCUMENT) {
      return (
        <React.Fragment>
          <div
            className='col-6 py-3 pl-3'
            id={`incomplete_${action.id}`}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              !this.props.transaction.status &&
              this.setState({
                documentActionIdSelected: action.id
              })
            }
          >
            {getStatusForDocumentAction(action)}
          </div>
          <Popover
            placement='bottom'
            target={`incomplete_${action.id}`}
            isOpen={documentActionIdSelected === action.id}
            trigger='legacy'
            toggle={() => {
              this.setState({
                documentActionIdSelected: null
              })
            }}
          >
            <PopoverBody>
              <div className='input-group'>
                <div className='input-group-append'>
                  <button
                    className='btn btn-info text-white'
                    type='button'
                    onClick={async () => {
                      this.setState({
                        documentActionIdSelected: null
                      })
                      // this._toggleSignModal(action)
                      if (action.documentId) {
                        try {
                          const res = await transactionService.getUriToSignDocument(
                            action.documentId
                          )
                          if (res && res.url) {
                            if (window) {
                              window.open(res.url, '_blank')
                            }
                          }
                        } catch (e) {
                          console.error(e)
                        }
                      }
                    }}
                  >
                    {updatingAction && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    Upload to complete
                  </button>
                </div>
              </div>
            </PopoverBody>
          </Popover>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <div
          className='col-6 py-3 pl-3'
          id={`incomplete_${action.id}`}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            this.setState({
              documentActionIdSelected: action.id
            })
          }}
        >
          {getStatusForDocumentAction(action)}
        </div>
        <Popover
          placement='bottom'
          target={`incomplete_${action.id}`}
          isOpen={documentActionIdSelected === action.id}
          trigger='legacy'
          toggle={() => {
            this.setState({
              documentActionIdSelected: null
            })
          }}
        >
          <PopoverBody>
            <div className='input-group'>
              <div className='input-group-append'>
                <button
                  className='btn btn-info text-white'
                  type='button'
                  onClick={() => this._completeForDocumentAction(action)}
                >
                  {updatingAction && (
                    <span className='spinner-border spinner-border-sm mr-2' />
                  )}
                  Mark as complete
                </button>
              </div>
            </div>
          </PopoverBody>
        </Popover>
      </React.Fragment>
    )
  }
  _completeForDocumentAction = async action => {
    this.setState({ updatingAction: true })
    await transactionService.updateDocumentActionById(action.id, {
      action: action.action,
      status: DocumentActionStatus.DONE,
      documentId: action.documentId,
      assignedPartyId: action.assignedPartyId,
      creatorId: action.creatorId
    })

    this._reRenderDynamic()
    this.setState({
      documentActionIdSelected: null,
      updatingAction: false
    })
  }

  // ========= ~  Timeline ~ ========= //
  _renderTimelineUploadOnly = () => {
    let groupTimes = _.groupBy(this.state.activitiesUploadOnly, function (
      item
    ) {
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
            <div className='col-10 col-sm-11 col-md-11 col-xl-10  text-left '>
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

  _renderTimelineFull = () => {
    let groupTimes = _.groupBy(this.state.activitiesFull, function (item) {
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
}

export default userOnly(TransactionFiles)
