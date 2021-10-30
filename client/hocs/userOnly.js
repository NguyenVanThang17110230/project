import React, { Fragment } from 'react'
import Head from 'next/head'
import moment from 'moment'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal
} from 'reactstrap'
import { Formik } from 'formik'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Cookies from 'js-cookie'
import toastr from 'toastr'
import classNames from 'classnames'
import { Router, Link } from '../../common/routes'
import { isAdmin } from '../../common/models/User'
import {
  TransactionAccessType,
  TransactionStatus
} from '../../common/models/Transaction'
import { getRoleLabel } from '../view-models/User'
import authRedux, { selector } from '../redux/authRedux'
import { withI18next } from './withI18next'
import {
  userService,
  authService,
  transactionService,
  notificationService
} from '../services'
import { NotificationType } from '../../common/models/Notification'
import { getNotificationTitle } from '../../common/view-models/Notification'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import AddNewMemberModal from '../component/Transaction/AddNewMemberModal'
import UploadNewDocumentModal from '../component/Transaction/UploadNewDocumentModal'
import AddNewTransactionModal from '../component/Transaction/AddNewTransactionModal'
import AddNewEnvelopeModal from '../component/Transaction/AddNewEnvelopeModal'
import { NewsType } from '../../common/models/News'
const userOnly = Content => {
  const TranslatableContent = withI18next(['user', 'common'])(Content)
  class UserWrapper extends React.Component {
    static async getInitialProps ({
      req,
      res,
      pathname,
      query,
      asPath,
      store,
      isServer
    }) {
      if (isServer) {
        authService.setAccessToken(req.signedCookies.access_token)
        const user = await store.dispatch(authRedux.getLoginUser())
        if (!user) {
          res.redirect('/login')
          res.end()
        } else if (isAdmin(user)) {
          res.redirect('/admin')
          res.end()
        }
      } else {
        const user = selector.getLoginUser(store.getState())
        if (!user || isAdmin(user)) Router.pushRoute('/login')
      }

      const initialProps = Content.getInitialProps
        ? await Content.getInitialProps({
          req,
          res,
          pathname,
          query,
          asPath,
          store,
          isServer
        })
        : {}

      const welcomeInvitationId = isServer
        ? req.cookies['welcome_invitation_id']
        : Cookies.get('welcome_invitation_id')
      if (welcomeInvitationId) {
        const invitation = await transactionService.getDetailedTransactionInvitationById(
          welcomeInvitationId
        )
        if (invitation) {
          initialProps.welcomeInvitation = invitation
        }

        if (!isServer) {
          Cookies.remove('welcome_invitation_id')
        }
      }

      const user = await store.dispatch(authRedux.getLoginUser())

      if (user && query.idTransaction) {
        const currentParty = await transactionService.getPartyByTransactionIdAndUserId(
          query.idTransaction.toString(),
          user.id
        )
        initialProps.currentParty = currentParty
      }
      initialProps.query = query

      return initialProps
    }

    constructor (props) {
      super(props)
      this._getIntercom()
      this.state = {
        isToggleModalWelcome: !!props.welcomeInvitation,
        isToggleModalInfo: false,
        isToggleReferModal: false,
        isToggleEnvelop: false,
        toggleSidebar: false,
        newMessage: 0,
        newEvent: 0,
        selectedView: 'In Progress',
        selectedViewParties: 'Main',
        selectedViewDashboard: 'Main',
        isToggleModalNewTransaction: false,
        isShowMemberModal: false,
        isShowUpdateNewDocumentModal: false,
        newTask: 0,
        countDocumentAction: 0,
        newNotification: 0,
        notification: [],
        listMessage: [],
        statusNotification:
          props.currentUser.statusNotification === undefined
            ? true
            : props.currentUser.statusNotification,
        documentList: [],
        partiesOfTransaction: [],
        dataAllUser: [],
        isViewNews: true,
        listNews: [],
        listAssign: [],
        listMess: []
      }
    }

    render () {
      const { t, currentUser, query, currentParty } = this.props
      const {
        isShowMemberModal,
        isToggleEnvelop,
        isShowUpdateNewDocumentModal,
        isToggleModalNewTransaction,
        documentList,
        partiesOfTransaction,
        dataAllUser
      } = this.state
      if (!currentUser) return null
      return (
        <div id='userOnly' className='fixed-layout main-wrapper'>
          <Head>
            <title>{t('common:home')}</title>
            <link
              rel='stylesheet'
              href='https://unpkg.com/react-table@6.8.6/react-table.css'
            />
            <link
              href='https://unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css'
              rel='stylesheet'
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/lhbxmtx3';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`
              }}
            />
          </Head>
          {this._renderSideBar()}
          {this._renderNavBar()}
          {this._renderModalReferralFriend()}

          <main className='page-wrapper'>
            <div
              className='container-fluid'
              style={{
                marginLeft: '0px',
                paddingLeft: '0px',
                paddingRight: '0px'
              }}
            >
              <div className='row page-title'>
                <div
                  className='col-md-12 align-self-center'
                  style={{ paddingLeft: '0', paddingRight: '0' }}
                >
                  <h4
                    className='text-themecolor'
                    style={{ marginBottom: '0px' }}
                  >
                    {this._renderPageHeaderText()}
                  </h4>
                </div>
              </div>
              <TranslatableContent {...this.props} />
            </div>
          </main>
          {isShowMemberModal && (
            <AddNewMemberModal
              isShowMemberModal={isShowMemberModal}
              toggleMemberModal={() =>
                this.setState({ isShowMemberModal: !isShowMemberModal })
              }
              transactionId={query.idTransaction}
              fetchData={() => this._fetchDocumentsAndParties()}
              dataAllUser={dataAllUser}
            />
          )}

          {isShowUpdateNewDocumentModal && (
            <UploadNewDocumentModal
              currentParty={currentParty}
              idParty={this.props.idParty}
              transaction={this.props.transaction}
              fetchData={() => this._fetchDocumentsAndParties()}
              isShowUpdateNewDocumentModal={isShowUpdateNewDocumentModal}
              toggleMemberModal={() =>
                this.setState({
                  isShowUpdateNewDocumentModal: !isShowUpdateNewDocumentModal
                })
              }
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
          {isToggleEnvelop && (
            <AddNewEnvelopeModal
              isShow={isToggleEnvelop}
              toggle={() =>
                this.setState({ isToggleEnvelop: !isToggleEnvelop })
              }
              documentList={documentList}
              partiesOfTransaction={partiesOfTransaction}
              currentParty={currentParty}
            />
          )}
        </div>
      )
    }

    _getIntercom = () => {
      if (typeof window !== 'undefined') {
        if (window.Intercom) {
          window.Intercom('boot', {
            app_id: 'lhbxmtx3',
            name: `${this.props.currentUser.firstName}`,
            email: `${this.props.currentUser.email}`,
            user_id: `${this.props.currentUser.id}`,
            created_at: `${Math.round(
              new Date(this.props.currentUser.createdAt).getTime() / 1000
            )}`
          })
        }
      }
    }

    _getDataUser = async () => {
      try {
        const data = await userService.getAllUser()
        this.setState({
          dataAllUser: data
        })
      } catch (e) {}
    }

    _countDocumentAction = async () => {
      const { currentParty } = this.props
      let countDocumentAction = 0
      if (currentParty && currentParty.id) {
        countDocumentAction = await transactionService.countDocumentActionsByPartyId(
          currentParty.id
        )
      }
      this.setState({
        countDocumentAction: countDocumentAction
      })
    }

    async componentDidMount () {
      const { currentUser } = this.props
      // window.addEventListener('load', this._getIntercom())
      this._fetchRedux()
      this._getDataUser()
      this._countDocumentAction()
      const coutNewEvent = await notificationService.countWithData(
        currentUser.id,
        [NotificationType.CREATE_EVENT]
      )
      this._getMessage()
      this._getNews()
      this._getAssign()
      const coutNewMessage = await notificationService.countWithData(
        currentUser.id,
        [NotificationType.NEW_MESSAGE]
      )
      const coutTasks = await notificationService.countWithData(
        currentUser.id,
        [NotificationType.CREATE_TASK]
      )
      const coutNewNotification = await notificationService.countWithData(
        currentUser.id,
        [
          NotificationType.ACTION_ADD_TO_USER,
          NotificationType.NEW_NEWS
          // NotificationType.CREATE_TASK
        ]
      )
      const getNotificationDocument = await notificationService.limitFindNotification(
        currentUser.id,
        [
          NotificationType.ACTION_ADD_TO_USER,
          NotificationType.UPLOAD_DOCUMENT
          // NotificationType.CREATE_TASK
        ]
      )
      this.setState({ notification: getNotificationDocument })
      this.setState({
        newMessage: coutNewMessage,
        newEvent: coutNewEvent,
        newNotification: coutNewNotification,
        newTask: coutTasks
      })
      notificationService.listenToMyNewNotifications(
        currentUser.id,
        notification => {
          if (notification.type === NotificationType.CREATE_EVENT) {
            this.setState({ newEvent: this.state.newEvent + 1 })
          } else if (notification.type === NotificationType.DELETE_EVENT) {
            this.setState({ newEvent: this.state.newEvent + 1 })
          } else if (notification.type === NotificationType.NEW_MESSAGE) {
            this._setMessageNewRealTime(notification)
            this.setState({
              newMessage: this.state.newMessage + 1
            })
          } else if (notification.type === NotificationType.CREATE_TASK) {
            this.setState({ newTask: this.state.newTask + 1 })
          } else if (notification.type === NotificationType.NEW_NEWS) {
            this.setState({
              newNotification: this.state.newNotification + 1,
              listNews: [notification, ...this.state.listNews]
            })
          } else {
            let arrayAssign = this.state.listAssign
            arrayAssign.unshift(notification)
            this.setState({
              listAssign: arrayAssign,
              newNotification: this.state.newNotification + 1
            })
          }
        }
      )
      transactionService.listenToMyDocumentAction(currentUser.id, () => {
        this.setState({
          countDocumentAction: this.state.countDocumentAction - 1
        })
      })

      transactionService.listenToMyDocumentActionAdd(currentUser.id, () => {
        this.setState({
          countDocumentAction: this.state.countDocumentAction + 1
        })
      })

      await this._fetchDocumentsAndParties()
    }

    _getMessage = async () => {
      const { currentUser } = this.props
      try {
        const newMessageContent = await notificationService.getAllNotificationMessage(
          currentUser.id
        )
        var setObj = new Set()
        var result = newMessageContent.reduce((mes, item) => {
          if (!setObj.has(item.data.internalLink)) {
            setObj.add(item.data.internalLink, item)
            mes.push(item)
          }
          return mes
        }, [])
        this.setState({
          listMessage: result,
          listMess: newMessageContent
        })
      } catch (e) {}
    }

    _getNews = async () => {
      const { currentUser } = this.props
      try {
        const newNews = await notificationService.getAllNotificationNews(
          currentUser.id
        )
        this.setState({
          listNews: newNews
        })
      } catch (e) {}
    }

    _getAssign = async () => {
      const { currentUser } = this.props
      try {
        const assign = await notificationService.getAllNotificationAssign(
          currentUser.id
        )
        this.setState({
          listAssign: assign
        })
      } catch (e) {}
    }

    _setMessageNewRealTime = data => {
      const { listMessage } = this.state
      const newMes = [data, ...listMessage]
      if (newMes.length > 0) {
        var setObj = new Set()
        var result = newMes.reduce((mes, item) => {
          if (!setObj.has(item.data.internalLink)) {
            setObj.add(item.data.internalLink, item)
            mes.push(item)
          }
          return mes
        }, [])
        this.setState({
          listMessage: result
        })
      }
    }

    _fetchRedux = async () => {
      const { dispatch } = this.props
      await dispatch(authRedux.updateParties({ data: 'Main' }))
      await dispatch(authRedux.updateDashboard({ data: 'Main' }))
      await dispatch(authRedux.updateTest({ data: 'In Progress' }))
    }

    _fetchDocumentsAndParties = async () => {
      const { query, currentParty } = this.props

      // Need for "Document" feature
      if (currentParty) {
        const documentList = await transactionService.getDocumentsByTransactionId(
          query.idTransaction.toString()
        )
        const partiesOfTransaction = await transactionService.getPartiesByTransactionId(
          query.idTransaction.toString()
        )

        this.setState({ documentList, partiesOfTransaction })
      }
    }

    _renderSideBar = () => {
      const { currentUser } = this.props
      const role = currentUser.roles[0].name
      return (
        <aside id='left-sidebar' className='left-sidebar position-fixed'>
          <div className='scroll-sidebar-left no-block scroll-sidebar--scroll d-flex flex-column'>
            <nav
              className='sidebar-nav'
              style={{ overflowX: 'auto', height: '90%' }}
            >
              <ul
                id='sidebarnav'
                className='sidebarnav--fix d-md-none d-lg-block d-none'
              >
                <li className='nav-brand my-0'>
                  <a
                    className='text-center th-10'
                    style={{
                      borderBottom: '1px solid #e4e4e42d'
                    }}
                  >
                    <img
                      src='/static/images/New/new-link-white.png'
                      alt='homepage'
                      className='light-logo'
                      height='40'
                      style={{
                        width: '45%'
                      }}
                    />
                  </a>
                </li>
              </ul>
              <ul
                id='sideBar-menu'
                className='sidebarnav--fix'
                style={{ marginTop: '15px' }}
              >
                {/* li className='nav-small-cap'>--- GENERAL</li> */}

                {role !== 'user' && (
                  <li
                    className={this.props.router.asPath === '/' ? 'active' : ''}
                  >
                    <Link route='/'>
                      <a aria-expanded='false' className='has-arrow'>
                        <img
                          className='th-7'
                          src='../../static/images/New/dashboard-icon.png'
                          alt=''
                        />
                        <span className='hide-menu'>Dashboard</span>
                      </a>
                    </Link>
                  </li>
                )}
                <li
                  className={
                    this.props.router.asPath.startsWith('/my-transactions')
                      ? 'active'
                      : ''
                  }
                >
                  <Link route='/my-transactions'>
                    <a
                      className={classNames('has-arrow', {
                        active: this.props.router.asPath.startsWith(
                          '/my-transactions'
                        )
                      })}
                      aria-expanded='false'
                    >
                      <img
                        className='th-7'
                        src='../../static/images/New/transaction.png'
                        alt=''
                      />
                      <span className='hide-menu'>
                        {/* {t(`common:myTransactions`)} */}
                        Transactions
                      </span>
                    </a>
                  </Link>
                </li>
                {role !== 'user' && (
                  <li>
                    <Link route='https://www.linkhomesla.com'>
                      <a target='_blank' className='has-arrow'>
                        <img
                          className='th-7 th-7--new'
                          src='../../static/images/New/new-br.png'
                          alt=''
                        />
                        <span className='hide-menu'>CINC</span>
                      </a>
                    </Link>
                  </li>
                )}
                {role === 'coordinator' && (
                  <li
                    className={
                      this.props.router.asPath.startsWith('/manage-agents')
                        ? 'active'
                        : ''
                    }
                  >
                    <Link route='/manage-agents'>
                      <a
                        className={classNames('has-arrow', {
                          active: this.props.router.asPath.startsWith(
                            '/manage-agents'
                          )
                        })}
                        aria-expanded='false'
                      >
                        <img
                          className='th-7'
                          src='../../static/images/New/manager.png'
                          alt=''
                          style={{
                            marginRight: '22px',
                            width: '18px',
                            height: '18px'
                          }}
                        />
                        <span className='hide-menu'>Manage Agents</span>
                      </a>
                    </Link>
                  </li>
                )}
                <li className={`${this._sideBarStatusClass('/calendar')}`}>
                  <Link route='/calendar'>
                    <a
                      className={`has-arrow ${this._sideBarStatusClass(
                        '/calendar'
                      )}`}
                      aria-expanded='false'
                      onClick={() => {
                        this._onClickNewAction(
                          currentUser.id,
                          [
                            NotificationType.CREATE_EVENT,
                            NotificationType.DELETE_EVENT
                          ],
                          'newEvent'
                        )
                      }}
                    >
                      <img
                        className='th-7'
                        src='../../static/images/New/calendar-2.png'
                        alt=''
                        style={{
                          marginRight: '22px',
                          width: '18px',
                          height: '18px'
                        }}
                      />
                      <span className='hide-menu'>
                        Calendar
                        {/* {this._renderNewNotification(this.state.newEvent)} */}
                      </span>
                    </a>
                  </Link>
                </li>

                <li
                  className={
                    this.props.router.asPath.startsWith('/tasks')
                      ? 'active'
                      : ''
                  }
                >
                  <Link route='/tasks'>
                    <a
                      className={`has-arrow ${this._sideBarStatusClass(
                        '/tasks'
                      )}`}
                      aria-expanded='false'
                      onClick={() => {
                        this._onClickNewAction(
                          currentUser.id,
                          [NotificationType.CREATE_TASK],
                          'newTask'
                        )
                      }}
                    >
                      <img
                        className='th-7 th-7--new'
                        src='../../static/images/New/task.png'
                        alt=''
                      />
                      <span className='hide-menu'>
                        Tasks
                        {/* {this._renderNewNotification(this.state.newTask)} */}
                      </span>
                    </a>
                  </Link>
                </li>

                <li className={`${this._sideBarStatusClass('/message')}`}>
                  <Link route='/message'>
                    <a
                      className={`has-arrow ${this._sideBarStatusClass(
                        '/message'
                      )}`}
                      aria-expanded='false'
                      onClick={() => {
                        this._onClickNewAction(
                          currentUser.id,
                          [NotificationType.NEW_MESSAGE],
                          'newMessage'
                        )
                      }}
                    >
                      <img
                        className='th-7 th-7--new'
                        src='../../static/images/New/sms.png'
                        alt=''
                      />
                      <span className='hide-menu'>
                        Inbox
                        {/* {this._renderNewNotification(this.state.newMessage)} */}
                      </span>
                    </a>
                  </Link>
                </li>
                <li
                  className={
                    this.props.router.asPath.startsWith('/contact')
                      ? 'active'
                      : ''
                  }
                >
                  <Link route='/contact'>
                    <a
                      className={classNames('has-arrow', {
                        active: this.props.router.asPath.startsWith('/contact')
                      })}
                      aria-expanded='false'
                    >
                      <img
                        className='th-7 th-7--new'
                        src='../../static/images/New/Contact.png'
                        alt=''
                      />
                      <span className='hide-menu'>Contact</span>
                    </a>
                  </Link>
                </li>
              </ul>

              {/* <ul>
                <button
                  onClick={() => this.setState({ isToggleReferModal: true })}
                  className='button-refer text-white py-2 mt-auto mx-auto text-uppercase position-absolute'
                  style={{
                    top: '100%',
                    left: '50%',
                    msTransform: 'translate(50%,0)',
                    transform: 'translate(-50%,0)'
                  }}
                >
                  Refer a friend
                </button>
              </ul> */}
            </nav>
          </div>
        </aside>
      )
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

      this.setState({
        activitiesFull,
        activitiesUploadOnly
      })
    }

    _onClickNewAction = (id, types = [], role) => {
      switch (role) {
        case 'newEvent':
          this.setState({ newEvent: 0 })
          break
        case 'newMessage':
          this.setState({ newMessage: 0 })
          break
        case 'newTask':
          this.setState({ newTask: 0 })
          break
        default:
          break
      }
      return notificationService.deleteWithIdUserAndType(id, types)
    }

    _renderNewNotification = value => {
      if (this.state.statusNotification && value !== 0) {
        return (
          <span className='badge badge-pill badge-cyan ml-auto'>{value}</span>
        )
      } else {
        return null
      }
    }

    _sideBarStatusClass = path =>
      this.props.router.asPath.startsWith(path) ? 'active' : ''

    _renderNavBar = () => {
      const { currentUser } = this.props
      // const role = currentUser.roles[0].name
      const { welcomeInvitation } = this.props
      const { isViewNews, listNews, listMessage, listAssign } = this.state
      return (
        <header id='topbar' className='topbar'>
          <nav className='navbar top-navbar navbar-expand-md '>
            <div className='navbar-collapse th-18'>
              <ul className='navbar-nav mr-auto'>
                <li
                  className='nav-item'
                  onClick={() => this._setWithSideBarAnimation()}
                >
                  <a className='nav-link text-white ' href='javascript:void(0)'>
                    <img
                      src='/static/images/New/header-menu.svg'
                      style={{ width: '25px', height: '25px' }}
                    />
                  </a>
                </li>
              </ul>
              <ul className='navbar-nav my-lg-0 d-flex align-items-center '>
                <li className='nav-item dropdown'>
                  <UncontrolledDropdown>
                    <DropdownToggle caret tag='a' className='mr-3'>
                      <img
                        src='/static/images/New/inbox-no.png'
                        style={{ width: '25px', height: '25px' }}
                      />
                      {this._renderCoutNewNotification(listMessage.length)}
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      style={{
                        right: '20px',
                        minWidth: '200px',
                        paddingTop: '0'
                      }}
                      className='not-news'
                    >
                      <DropdownItem
                        header
                        className='text-left font-14 text-dark border-bottom'
                        style={{
                          padding: '10px 20px'
                        }}
                      >
                        Inbox
                      </DropdownItem>
                      {listMessage.length > 0 ? (
                        <div
                          style={{
                            right: '0',
                            overflowY: 'scroll',
                            maxHeight: '50vh',
                            minWidth: '360px'
                          }}
                          className='not-mess'
                        >
                          {listMessage.map((data, index) =>
                            this._renderNotificationMessages(data, index)
                          )}
                        </div>
                      ) : (
                        <div
                          style={{
                            right: '0',
                            overflowY: 'scroll',
                            maxHeight: '50vh',
                            minWidth: '360px',
                            padding: '10px 20px'
                          }}
                          className='not-mess'
                        >
                          No messages
                        </div>
                      )}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li className='nav-item dropdown'>
                  <UncontrolledDropdown>
                    <DropdownToggle caret tag='a' className='mr-3'>
                      <img
                        src='/static/images/New/new-notification.png'
                        style={{ width: '25px', height: '25px' }}
                      />
                      {this._renderCoutAssignNotification(
                        this.state.newNotification
                      )}
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      style={{
                        right: '20px',
                        minWidth: '200px',
                        paddingTop: '0'
                      }}
                      className='not-news'
                    >
                      <div className='d-flex th-new-mess'>
                        <div
                          className={
                            isViewNews
                              ? 'col-6 d-flex align-items-center justify-content-center flex-column p-2 th-left active-ch'
                              : 'col-6 d-flex align-items-center justify-content-center flex-column p-2 th-left border-bottom'
                          }
                          onClick={() => this.setState({ isViewNews: true })}
                        >
                          <img
                            className=''
                            src='/static/images/New/new-no.png'
                            style={{ width: '30px', height: '30px' }}
                          />
                          <span
                            className='th-font-w-5'
                            style={{ fontSize: '12px' }}
                          >
                            Notifications
                          </span>
                        </div>
                        <div
                          className={
                            !isViewNews
                              ? 'active-ch col-6 d-flex align-items-center justify-content-center flex-column p-2 th-right'
                              : 'col-6 d-flex align-items-center justify-content-center flex-column p-2 th-right border-bottom'
                          }
                          onClick={() => {
                            this.setState({ isViewNews: false })
                          }}
                        >
                          <img
                            className=''
                            src='/static/images/New/new-noti.png'
                            style={{ width: '30px', height: '30px' }}
                          />
                          <span
                            className='th-font-w-5'
                            style={{ fontSize: '12px' }}
                          >
                            News
                          </span>
                        </div>
                      </div>
                      {isViewNews ? (
                        <div>
                          <DropdownItem
                            header
                            className='text-left font-14 text-dark border-bottom th-font-w-5'
                            style={{
                              padding: '10px 20px'
                            }}
                          >
                            Notifications
                          </DropdownItem>
                          {listAssign.length > 0 ? (
                            <div
                              style={{
                                right: '0',
                                overflowY: 'scroll',
                                maxHeight: '50vh',
                                minWidth: '360px'
                              }}
                              className='not-mess'
                            >
                              {listAssign.map((data, index) =>
                                this._renderNotificationAssign(data, index)
                              )}
                            </div>
                          ) : (
                            <div
                              style={{
                                right: '0',
                                overflowY: 'scroll',
                                maxHeight: '50vh',
                                minWidth: '360px',
                                padding: '10px 20px'
                              }}
                              className='not-mess'
                            >
                              No notifications
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <DropdownItem
                            header
                            className='text-left font-14 text-dark border-bottom th-font-w-5'
                            style={{
                              padding: '10px 20px'
                            }}
                          >
                            News
                          </DropdownItem>
                          {listNews.length > 0 ? (
                            <div
                              style={{
                                right: '0',
                                overflowY: 'scroll',
                                maxHeight: '50vh',
                                minWidth: '360px'
                              }}
                              className='not-mess'
                            >
                              {listNews.map((data, index) =>
                                this._renderNotificationNews(data, index)
                              )}
                            </div>
                          ) : (
                            <div
                              style={{
                                padding: '10px 20px',
                                right: '0',
                                overflowY: 'scroll',
                                maxHeight: '50vh',
                                minWidth: '360px'
                              }}
                            >
                              No news
                            </div>
                          )}
                        </div>
                      )}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li>
                  <UncontrolledDropdown>
                    <DropdownToggle className='th-19'>
                      <img
                        src={
                          !currentUser.avatar
                            ? '/static/images/default-avatar.png'
                            : currentUser.avatar
                        }
                        alt='user-img'
                        className='img-circle'
                        style={{
                          height: '40px',
                          width: '40px',
                          objectFit: 'cover',
                          border: '2px solid #80808036'
                        }}
                      />
                    </DropdownToggle>
                    <DropdownMenu className='th-20 th-pd-0' right>
                      <DropdownItem className='th-pd-0'>
                        <Link route='/my-profiles'>
                          <a
                            href='javascript:void(0)'
                            aria-expanded='false'
                            className='th-21'
                          >
                            <div className='th-container'>
                              <img
                                src='/static/images/New/new-profile.png'
                                alt=''
                              />
                              <div className='hint-big'>Profile</div>
                              <div className='hint'>Public profile</div>
                            </div>
                          </a>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className='th-pd-0'>
                        <Link route='/my-settings'>
                          <a
                            href='javascript:void(0)'
                            aria-expanded='false'
                            className='th-21'
                          >
                            <div className='th-container'>
                              <img
                                src='/static/images/New/new-sitting.png'
                                alt=''
                              />
                              <div className='hint-big'>Settings</div>
                              <div className='hint'>Account settings</div>
                            </div>
                          </a>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className='th-pd-0'>
                        <Link route='https://intercom.help/link-brokerages/en/'>
                          <a target='_blank' className='th-21'>
                            <div className='th-container'>
                              <img
                                src='/static/images/New/support.png'
                                alt=''
                              />
                              <div className='hint-big'>Support</div>
                              <div className='hint'>Help center</div>
                            </div>
                          </a>
                        </Link>
                      </DropdownItem>
                      <DropdownItem
                        disabled
                        className='th-pd-0 border-top border-bottom'
                      >
                        <div
                          className='th-color-blue d-flex justify-content-between'
                          style={{ padding: '17px 20px' }}
                        >
                          <span className='th-font-w-5'>
                            Turn on Notifications
                          </span>
                          <span className='custom-switch'>
                            <input
                              type='checkbox'
                              className='custom-control-input new-cus'
                              id='customSwitches'
                              checked={this.state.statusNotification}
                              onChange={() => this._changeStatusNotification()}
                              readOnly
                            />
                            <label
                              className='custom-control-label new-lab'
                              htmlFor='customSwitches'
                            />
                          </span>
                        </div>
                      </DropdownItem>
                      <DropdownItem
                        className='th-pd-0'
                        style={{ height: '64px' }}
                        onClick={this._logout}
                      >
                        <a
                          href='javascript:void(0)'
                          aria-expanded='false'
                          className='th-21'
                        >
                          <div className='th-container'>
                            <img
                              src='/static/images/New/new-logout.png'
                              alt=''
                            />
                            <div className='hint-big'>Logout</div>
                          </div>
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              </ul>
            </div>
          </nav>
          {this._renderModalWelcome()}
          {welcomeInvitation && this._renderModalInfo()}
          {/* {this._renderModalAddEventCalendar()} */}
        </header>
      )
    }

    _setWithSideBarAnimation = () => {
      const data = document.getElementById('left-sidebar')
      if (data) {
        data.classList.toggle('animation-display')
      }
    }

    _renderCoutNewNotification = value => {
      if (this.state.statusNotification && value !== 0) {
        return <div className='notificationBell_new'>{value}</div>
      } else {
        return null
      }
    }

    _renderCoutAssignNotification = value => {
      if (this.state.statusNotification && value !== 0) {
        return <div className='notificationBell_new'>{value}</div>
      } else {
        return null
      }
    }
    _changeStatusNotification = () => {
      if (this.state.newNotification !== 0) {
        let req = this.state.notification.map((item, index) => {
          try {
            if (index < this.state.newNotification) {
              return notificationService.setWatchedNotification(item.id)
            }
          } catch (e) {
            throw e
          }
          this.setState({ newNotification: 0 })
        })
        Promise.all(req)
      }
    }

    _changeStatus = async message => {
      const { listMess } = this.state
      const data = listMess.filter(x => x.senderId === message.senderId)
      if (data && data.length > 0) {
        let req = data.map((item, index) => {
          try {
            if (index < data.length) {
              notificationService.setWatchedNotification(item.id)
              this._getMessage()
            }
          } catch (e) {
            throw e
          }
        })
        Promise.all(req)
      }
    }

    _changeStatusNotificationNews = async news => {
      if (news && news.isRead === false) {
        try {
          await notificationService.setWatchedNotification(news.id)
          this._getNews()
        } catch (e) {
          throw e
        }
      }
    }

    _changeStatusNotificationAssign = async assign => {
      if (assign && assign.isRead === false) {
        try {
          await notificationService.setWatchedNotification(assign.id)
          this._getAssign()
        } catch (e) {
          throw e
        }
      }
    }

    _renderNotification = (data, index) => {
      return (
        <DropdownItem key={index}>
          <Link route={data.data.internalLink}>
            <div className='font-12 p-2'>
              <div className='d-flex justify-content-between'>
                <div className='font-weight-bold text-capitalize font-14'>
                  {getNotificationTitle(data.type)}
                </div>
                <div className='ml-5 text-right '>
                  {`${moment(data.createdAt).format('MMM Do YY')}`}
                </div>
              </div>
              <div style={{ whiteSpace: 'normal', textAlign: 'left' }}>
                {data.data.value}
              </div>
            </div>
          </Link>
        </DropdownItem>
      )
    }

    _viewImageNews = data => {
      switch (data) {
        case NewsType.E_COMMERCE:
          return (
            <div
              className='rounded-circle d-flex align-items-center justify-content-center col-2 px-0'
              style={{
                width: '50px',
                minWidth: '50px',
                maxWidth: '50px',
                height: '50px',
                backgroundColor: '#2F80ED'
              }}
            >
              <img
                className=''
                src='/static/images/New/type-eCom.png'
                style={{ width: '50%', height: '50%' }}
              />
            </div>
          )
        case NewsType.REAL_ESTATE:
          return (
            <div
              className='rounded-circle d-flex align-items-center justify-content-center col-2 px-0'
              style={{
                width: '50px',
                height: '50px',
                minWidth: '50px',
                maxWidth: '50px',
                backgroundColor: '#446AEB'
              }}
            >
              <img
                className=''
                src='/static/images/New/type-real.png'
                style={{ width: '50%', height: '50%' }}
              />
            </div>
          )
        case NewsType.OTHERS:
          return (
            <div
              className='rounded-circle d-flex align-items-center justify-content-center col-2 px-0'
              style={{
                width: '50px',
                height: '50px',
                minWidth: '50px',
                maxWidth: '50px',
                backgroundColor: '#DFDFDF'
              }}
            >
              <img
                className=''
                src='/static/images/New/type-order.png'
                style={{ width: '50%', height: '50%' }}
              />
            </div>
          )
        default:
          break
      }
    }

    _renderNotificationMessages = (data, index) => {
      return (
        <DropdownItem key={index} style={{ maxWidth: '360px' }}>
          <Link route={`/message?partyId=${data.data.internalLink}`}>
            <div
              className='font-12 message__list'
              onClick={() => {
                this._changeStatus(data)
              }}
            >
              <div className='message__item-new'>
                <div className='message__item-text row mx-0'>
                  <div className='col-2 px-0'>
                    <img
                      className='rounded-circle mr-2'
                      src={
                        data.data.avatar !== 'null'
                          ? data.data.avatar
                          : '/static/images/default-avatar.png'
                      }
                    />
                  </div>

                  <div className='gr-text col-10 px-0'>
                    <div className='gr-top'>
                      <h5>{data.data.fullName}</h5>
                      <p className='message__item-time text-right'>
                        <span className='th-color-blue th-font-w-5'>
                          {`${moment(data.createdAt).fromNow()}`}
                        </span>
                      </p>
                    </div>

                    <p className='message__overflow th-font-w-5 text-black-50 test'>
                      {data.data.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* </a> */}
          </Link>
        </DropdownItem>
      )
    }

    _renderNotificationNews = (data, index) => {
      return (
        <DropdownItem key={index} style={{ maxWidth: '360px' }}>
          <Link route={`/message?newsId=${data.data.internalLink}`}>
            <div
              className='font-12 message__list'
              onClick={() => this._changeStatusNotificationNews(data)}
            >
              <div className='message__item-new'>
                <div className='message__item-text row mx-0'>
                  {this._viewImageNews(data.data.type)}
                  <div className='gr-text col-10 pr-0'>
                    <div className='gr-top row mx-0'>
                      <h5
                        className={
                          data.isRead === false
                            ? 'col-6 px-0 th-flow'
                            : 'col-6 px-0 text-black-50 th-flow'
                        }
                      >
                        {data.data.title}
                      </h5>
                      <p className='message__item-time text-right w-100 col-6 pr-0'>
                        <span
                          className={
                            data.isRead === false
                              ? 'th-color-blue th-font-w-5'
                              : 'text-black-50 th-font-w-5'
                          }
                        >
                          {`${moment(data.createdAt).fromNow()}`}
                        </span>
                      </p>
                    </div>

                    <p
                      className={
                        data.isRead === false
                          ? 'message__overflow th-font-w-5 test w-100'
                          : 'message__overflow th-font-w-5 text-black-50 test w-100'
                      }
                    >
                      {data.data.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* </a> */}
          </Link>
        </DropdownItem>
      )
    }

    _renderNotificationAssign = (data, index) => {
      return (
        <DropdownItem key={index} style={{ maxWidth: '360px' }}>
          <Link route={`${data.data.internalLink}`}>
            <div
              className='font-12 message__list'
              onClick={() => {
                this._changeStatusNotificationAssign(data)
              }}
            >
              <div className='message__item-new'>
                <div className='message__item-text'>
                  <img
                    className='rounded-circle mr-2'
                    src={
                      data.data.image !== 'undefined'
                        ? data.data.image
                        : '/static/images/default-avatar.png'
                    }
                  />
                  <div className='gr-text' style={{ width: '82%' }}>
                    <div className='gr-top'>
                      <h5
                        style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis'
                        }}
                        className={
                          data.isRead === false ? null : 'text-black-50'
                        }
                      >
                        {data.data.value}
                      </h5>
                    </div>
                    <p className='message__overflow th-font-w-5 text-black-50 test'>
                      <span
                        className={
                          data.isRead === false
                            ? 'th-color-blue th-font-w-5'
                            : 'text-black-50 th-font-w-5'
                        }
                      >
                        {`${moment(data.createdAt).fromNow()}`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* </a> */}
          </Link>
        </DropdownItem>
      )
    }

    _renderPageHeaderText = () => {
      const {
        isCoordinator,
        partyTarget,
        currentTransactionStatus
      } = this.props
      const { selectedViewParties } = this.state

      return (
        <div className='col-new' style={{ width: '100%' }}>
          {this.props.headerText === 'Edit Agent' && (
            <div className='bt bt--calendar title-task mt-4 mb-4 d-flex align-items-center'>
              <Link route={`/manage-agents`}>
                <span
                  className='mr-3'
                  style={{ cursor: 'pointer', fontSize: '20px' }}
                >
                  <i className='fas fa-arrow-left' />
                </span>
              </Link>
              {this.props.headerText}
            </div>
          )}
          {this.props.headerText === "Agent's Transactions" && (
            <div className='bt bt--calendar title-task mt-4 mb-4 d-flex align-items-center'>
              <Link route={`/manage-agents`}>
                <span
                  className='mr-3'
                  style={{ cursor: 'pointer', fontSize: '20px' }}
                >
                  <i className='fas fa-arrow-left' />
                </span>
              </Link>
              {this.props.headerText}
            </div>
          )}
          {this.props.headerText === 'Transactions' && (
            <div className='main-layout-header'>
              <div className='main-layout-wrapper'>
                <div className='page-heading'>
                  <div className='page-heading-button'>
                    <h2>{this.props.headerText}</h2>
                    {this.props.currentUser.roles[0].name === 'user' ? null : (
                      <div className='page-button-new'>
                        <a
                          onClick={() => {
                            this.setState({ isToggleModalNewTransaction: true })
                          }}
                          href='#'
                        >
                          New Transaction
                        </a>
                      </div>
                    )}
                  </div>
                  <p id='titleTr' className='title-trs'>
                    Active property transaction folder.
                  </p>
                </div>
                <div className='page-tab'>
                  <div className='page-tab-menu'>
                    <div
                      id='a'
                      className='page-icon current'
                      onClick={this._selectView}
                    >
                      In Progress
                    </div>
                    <div className='page-icon' onClick={this._selectView}>
                      Complete
                    </div>
                    <div className='page-icon' onClick={this._selectView}>
                      Archived
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {this.props.headerText === 'Calendar' && (
            <div className='bt bt--calendar title-task mt-4 mb-4'>
              {this.props.headerText}
            </div>
          )}
          {this.props.headerText === 'Manage Agents' && (
            <div className='bt bt--calendar title-task mt-4 mb-4'>
              {this.props.headerText}
            </div>
          )}
          {this.props.headerText === 'Tasks' && (
            <div className='bt title-task mt-4 mb-4'>
              {this.props.headerText}
            </div>
          )}
          {this.props.headerText === 'User Profile' && (
            <div className='main-layout-header'>
              <div className='main-layout-wrapper'>
                <div
                  className='page-heading'
                  style={{ paddingBottom: '24px', marginBottom: '0px' }}
                >
                  <h2
                    style={{
                      fontWeight: '500',
                      fontSize: '34px'
                    }}
                  >
                    {this.props.headerText}
                  </h2>
                </div>
              </div>
            </div>
          )}
          {this.props.headerText === 'Inbox' && (
            <div className='bt title-task mt-4 mb-4'>
              {this.props.headerText}
              <p className='title-trs-v2'>Inbox, notifications, messages</p>
            </div>
          )}
          {this.props.headerText === 'Contacts' && (
            <div className='bt bt--contact title-task mb-4 mt-4'>
              {this.props.headerText}
            </div>
          )}
          {this.props.headerText === 'Dashboard' && (
            <div className='main-layout-header'>
              <div className='main-layout-wrapper'>
                <div className='page-heading'>
                  <div className='page-heading-button'>
                    <h2>{this.props.headerText}</h2>
                  </div>
                </div>
                <div className='page-tab'>
                  <div className='page-tab-menu'>
                    <div
                      id='a'
                      className='page-icon current'
                      onClick={this._selectViewDashboard}
                    >
                      Main
                    </div>
                    {isCoordinator ? (
                      <div
                        className='page-icon page-icon--dashboard'
                        onClick={this._selectViewDashboard}
                      >
                        Closed Transactions
                      </div>
                    ) : (
                      <div
                        className='page-icon page-icon--dashboard'
                        onClick={this._selectViewDashboard}
                      >
                        Real Estate
                      </div>
                    )}

                    <div
                      className='page-icon page-icon--dashboard'
                      onClick={this._selectViewDashboard}
                    >
                      Referrals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {this.props.headerText === 'Transaction' && (
            <div className='bt title-task'>{this.props.headerText}</div>
          )} */}
          {this.props.headerText === 'Transaction Parties' && (
            // <div className='bt title-task'>{this.props.headerText}</div>
            <div className='main-layout-header'>
              <div className='main-layout-wrapper'>
                <div className='page-heading'>
                  <div className='page-heading-button'>
                    <h2>Transactions</h2>
                    <div className='page-button-new'>
                      {selectedViewParties === 'Main' &&
                        partyTarget.access === 'full' &&
                        currentTransactionStatus !==
                          TransactionStatus.ARCHIVED &&
                        currentTransactionStatus !==
                          TransactionStatus.CLOSED && (
                          <button
                          className='btn-transaction w-100'
                          data-toggle='modal'
                          data-target='#myModal'
                          onClick={() => {
                            this.setState({
                              isShowMemberModal: true
                            })
                          }}
                          style={{ transition: '0.3s' }}
                        >
                            Add New Member
                        </button>
                      )}
                      {selectedViewParties === 'My Documents' &&
                        currentTransactionStatus !==
                          TransactionStatus.ARCHIVED &&
                        currentTransactionStatus !==
                          TransactionStatus.CLOSED && (
                          <button
                          className='btn-transaction w-100'
                          data-toggle='modal'
                          data-target='#myModal'
                          onClick={() => {
                            this.setState({
                              isShowUpdateNewDocumentModal: true
                            })
                          }}
                          style={{ transition: '0.3s' }}
                        >
                            Upload document
                        </button>
                      )}
                      {selectedViewParties === 'Envelopes' &&
                        partyTarget.access === 'full' &&
                        currentTransactionStatus !==
                          TransactionStatus.ARCHIVED &&
                        currentTransactionStatus !==
                          TransactionStatus.CLOSED && (
                          <button
                          className='btn-transaction w-100'
                          data-toggle='modal'
                          data-target='#myModal'
                          onClick={() => {
                            this.setState({
                              isToggleEnvelop: true
                            })
                          }}
                          style={{ transition: '0.3s' }}
                        >
                            New Envelope
                        </button>
                      )}
                      {selectedViewParties === 'View Details' &&
                        partyTarget.access === 'full' &&
                        currentTransactionStatus !==
                          TransactionStatus.ARCHIVED &&
                        currentTransactionStatus !==
                          TransactionStatus.CLOSED && (
                          <button
                          className='btn-transaction w-100'
                          data-toggle='modal'
                          data-target='#myModal'
                          onClick={() => {
                            this.setState({
                              isShowMemberModal: true
                            })
                          }}
                          style={{ transition: '0.3s' }}
                        >
                            Add New Member
                        </button>
                      )}
                    </div>

                    {/* <div className='page-button-new'>
                      {this.state.selectedView === 'Main' && (
                        <a href='#'>Add New Member</a>
                      )}
                      {this.state.selectedView === 'In progress' && (
                        <a href='#'>Add New Member</a>
                      )}
                      {this.state.selectedView === 'My Documents' && (
                        <a href='#'>Upload Document</a>
                      )}
                      {this.state.selectedView === 'Envelops' && (
                        <a href='#'>New Envelope</a>
                      )}
                    </div> */}
                  </div>
                  <div className='group-back'>
                    {this.props.subHeaderText &&
                      (this.props.currentParty ? (
                        <Link route={`/my-transactions`}>
                          <span
                            className='mr-3'
                            style={{ cursor: 'pointer' }}
                            onClick={async () => {
                              const { dispatch } = this.props
                              setTimeout(async () => {
                                await dispatch(
                                  authRedux.updateParties({ data: 'Main' })
                                )
                              }, 2000)
                            }}
                          >
                            <i className='fas fa-chevron-left' />
                            Back
                          </span>
                        </Link>
                      ) : (
                        <Link route='/my-transactions'>
                          <span className='mr-3' style={{ cursor: 'pointer' }}>
                            <i className='fas fa-chevron-left' />
                            Back
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
                <div className='page-tab'>
                  <div className='page-tab-menu' style={{ width: '140%' }}>
                    <div
                      id='a'
                      className='page-icon page-icon--parties current'
                      onClick={this._selectViewParties}
                    >
                      Main
                    </div>

                    <div style={{ display: 'initial', position: 'relative' }}>
                      <div
                        className='page-icon page-icon--parties x'
                        style={{ position: 'relative' }}
                        onClick={this._selectViewParties}
                      >
                        Actions Needed
                      </div>
                      {this.state.countDocumentAction > 0 && (
                        <span
                          className='d-flex align-items-center justify-content-center'
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '15px',
                            width: '24px',
                            height: '18px',
                            borderRadius: '41px',
                            backgroundColor: '#446aeb',
                            color: '#fff',
                            fontSize: '10px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          +{this.state.countDocumentAction}
                        </span>
                      )}
                    </div>

                    <div
                      className='page-icon page-icon--parties'
                      onClick={this._selectViewParties}
                    >
                      My Documents
                    </div>
                    <div
                      className='page-icon page-icon--parties'
                      onClick={this._selectViewParties}
                    >
                      Envelopes
                    </div>
                    <div
                      className='page-icon page-icon--parties'
                      onClick={this._selectViewParties}
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {this.props.subHeaderText && (
            <h5 className='ml-1 text-truncate'>{this.props.subHeaderText}</h5>
          )} */}
        </div>
      )
    }

    _selectView = async e => {
      let active = document.getElementsByClassName('current')
      let title = document.getElementById('titleTr')
      ;[...active].forEach(acT => {
        acT.classList.remove('current')
      })
      e.currentTarget.className += ' current'
      switch (e.currentTarget.textContent) {
        case 'In Progress':
          title.innerHTML = 'Active property transaction folder.'
          break
        case 'Complete':
          title.innerHTML = 'Complete transaction list.'
          break
        case 'Archived':
          title.innerHTML = 'Archived transaction list.'
          break

        default:
          break
      }
      this.setState({
        selectedView: e.currentTarget.textContent
      })

      const { dispatch } = this.props
      await dispatch(
        authRedux.updateTest({ data: e.currentTarget.textContent })
      )
    }
    // view parties
    _selectViewParties = async e => {
      let active = document.getElementsByClassName('current')
      ;[...active].forEach(acT => {
        acT.classList.remove('current')
      })
      e.currentTarget.className += ' current'
      this.setState({
        selectedViewParties: e.currentTarget.textContent
      })
      const { dispatch } = this.props
      await dispatch(
        authRedux.updateParties({ data: e.currentTarget.textContent })
      )
    }
    _toggleModal = async () => {
      this.setState({
        isToggleModalNewTransaction: this.state.isToggleModalNewTransaction
      })
      const { dispatch } = this.props
      await dispatch(
        authRedux.updateNew({ data: this.state.isToggleModalNewTransaction })
      )
    }
    // view dashboard
    _selectViewDashboard = async e => {
      let active = document.getElementsByClassName('current')
      ;[...active].forEach(acT => {
        acT.classList.remove('current')
      })
      e.currentTarget.className += ' current'
      this.setState({
        selectedViewDashboard: e.currentTarget.textContent
      })
      const { dispatch } = this.props
      await dispatch(
        authRedux.updateDashboard({ data: e.currentTarget.textContent })
      )
    }
    _toggleModal = async () => {
      this.setState({
        isToggleModalNewTransaction: this.state.isToggleModalNewTransaction
      })
      const { dispatch } = this.props
      await dispatch(
        authRedux.updateNew({ data: this.state.isToggleModalNewTransaction })
      )
    }

    _logout = async () => {
      await this.props.dispatch(authRedux.logout())
      Router.replaceRoute('/login')
      // await location.reload()
      if (window.Intercom) {
        window.Intercom('shutdown')
      }
    }

    _renderModalReferralFriend = () => {
      const { currentUser } = this.props
      return (
        <Modal
          isOpen={this.state.isToggleReferModal}
          toggle={() => this.setState({ isToggleReferModal: false })}
          id='invite-party-modal'
        >
          <div className='modal-header modal-header--change'>
            <div className='text-center w-100'>
              <h5
                className='modal-title text-uppercase font-weight-bold'
                id='exampleModalLabel'
              >
                Refer a friend
              </h5>
              <small>Invite friends to Link application</small>
            </div>
            <button
              type='button'
              className='close bg-transparent'
              data-dismiss='modal'
              onClick={() => this.setState({ isToggleReferModal: false })}
            >
              &times;
            </button>
          </div>
          <Formik
            initialValues={{
              email: ''
            }}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true)
              const existedEmail = await userService.findUserByEmail(
                values.email
              )
              if (!existedEmail) {
                const invitedEmail = await userService.getInvitationByEmail(
                  values.email
                )
                if (invitedEmail) {
                  await userService.deleteExistedInvitation(invitedEmail.id)
                }
                userService.sendMailToReferFriend(currentUser.id, values.email)
                actions.setSubmitting(false)
                this.setState({ isToggleReferModal: false })
                toastr.success('Sended successfully!')
              } else {
                toastr.warning('Already have user with this email!')
                actions.setSubmitting(false)
              }
            }}
            validate={values => {
              let error = {}
              const regEmail = new RegExp(
                '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' +
                  '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
              )
              if (values.email === '') {
                error.referError = `Email is required`
              } else if (!regEmail.test(values.email)) {
                error.referError = 'Please enter the correct email format'
              }

              return error
            }}
          >
            {({
              values,
              isValid,
              errors,
              isSubmitting,
              handleSubmit,
              handleChange
            }) => (
              <form onSubmit={handleSubmit}>
                <div className='modal-body px-5 mx-2'>
                  <div>
                    <div className='row pt-3'>
                      <div className='col-12'>
                        <div className='form-group'>
                          <input
                            className='form-control'
                            placeholder='Email Address'
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {errors.referError && (
                    <div className='text-danger text-center'>
                      {errors.referError}
                    </div>
                  )}
                  <div className='text-center my-5'>
                    <button
                      disabled={!isValid || isSubmitting}
                      type='submit'
                      className='btn bg-info text-white px-5'
                    >
                      {isSubmitting && (
                        <span className='spinner-border spinner-border-sm mr-2' />
                      )}
                      Send Invite
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </Modal>
      )
    }

    _renderModalWelcome = () => {
      const { welcomeInvitation } = this.props
      if (!this.state.isToggleModalWelcome || !welcomeInvitation) {
        return null
      }

      return (
        <Modal isOpen={this.state.isToggleModalWelcome}>
          <div className='modal-header modal-header--change border-top-0'>
            <div className='text-center w-100 '>
              <h1 className='modal-title text-info mb-3'>Welcome to Link</h1>
              <p>
                {`You has been added as the "${getRoleLabel(
                  welcomeInvitation.role
                )}" for the transaction: ${this._getTransactionFullAddress(
                  welcomeInvitation.transaction
                )}`}
              </p>
              {welcomeInvitation.access === TransactionAccessType.FULL ? (
                <p>
                  Once your account is created, you will have full access to all
                  documents and parties that are relevant to this transaction.
                  <br />
                  <br />
                  With Full Access you will be able to view all documents,
                  upload documents, <br />
                  assign signors on documents you upload, and message all other
                  parties <br />
                  involved.
                </p>
              ) : (
                <p>
                  Once your account is created, you will have “Upload Only”
                  capabilities for this transaction.
                  <br />
                  <br />
                  With “Upload Only” you will be able to upload all documents
                  relevant to this transaction. All parties will be notified
                  once you upload any documents.
                </p>
              )}
              <p>
                To finish create your profile and access the transaction press
                continue below.
              </p>
            </div>
            {/* <button
              type='button'
              className='close bg-transparent'
              data-dismiss='modal'
              // onClick={this._toggleModal}
            >
              &times;
            </button> */}
          </div>
          <div className='modal-body border-top-0 text-center'>
            <button
              className='btn btn-info text-white py-2 px-5'
              onClick={this._showPartyInfoForm}
            >
              Continue
            </button>
          </div>
        </Modal>
      )
    }

    _showPartyInfoForm = () => {
      this.setState({
        isToggleModalWelcome: false,
        isToggleModalInfo: true
      })
    }

    _onSubmitModalInfo = async (values, action) => {
      const { currentUser, welcomeInvitation } = this.props
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

        await transactionService.updateTransactionPartyInfo(
          {
            userId: currentUser.id,
            transactionId: welcomeInvitation.transactionId
          },
          {
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            licenseNumber
          }
        )

        setSubmitting(false)
        toastr.success('Your transaction profile has been updated')
        this.setState({ isToggleModalInfo: false })
      } catch (e) {
        toastr.error(e.message)
        setSubmitting(false)
      }
    }

    _renderModalInfo = () => {
      const { welcomeInvitation, currentUser } = this.props

      return (
        <Modal
          isOpen={this.state.isToggleModalInfo}
          toggle={() => this.setState({ isToggleModalInfo: false })}
          id='create-transaction-party-profile-modal'
          className='th-16'
        >
          <div className='modal-header modal-header--change' id='bg-gr'>
            <div className='text-center w-100'>
              <h5 className='modal-title new-add' id='exampleModalLabel'>
                Add Your Information
              </h5>
            </div>
            <button
              type='button'
              className='close bg-transparent'
              data-dismiss='modal'
              onClick={() => this.setState({ isToggleModalInfo: false })}
            >
              &times;
            </button>
          </div>
          <Formik
            initialValues={{
              firstName: currentUser.firstName,
              lastName: currentUser.lastName,
              email: currentUser.email,
              phoneNumber: welcomeInvitation.phoneNumber,
              company: '',
              licenseNumber: ''
            }}
            onSubmit={this._onSubmitModalInfo}
            validate={values => {
              let error = {}
              if (
                welcomeInvitation.role !== 'seller' &&
                welcomeInvitation.role !== 'buyer'
              ) {
                if (
                  values.firstName === '' ||
                  values.lastName === '' ||
                  values.email === '' ||
                  values.phoneNumber.length < 9 ||
                  values.company === ''
                ) {
                  error.details = `${getRoleLabel(
                    welcomeInvitation.role
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
                    welcomeInvitation.role
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
                <div className='modal-body px-sm-5 mx-2'>
                  <div>
                    <h4 className='text-center'>
                      {getRoleLabel(welcomeInvitation.role)}
                    </h4>
                    <div className='row pt-3'>
                      <div className='col-12 col-sm-6'>
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
                      <div className='col-12 col-sm-6'>
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
                      <div className='col-12 col-sm-6'>
                        <div className='form-group'>
                          <label className='tittle-mini-ver'>Email </label>
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
                      <div className='col-12 col-sm-6'>
                        <div className='form-group'>
                          <label className='tittle-mini-ver'>
                            Phone Number{' '}
                          </label>
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
                      {welcomeInvitation.role !== 'seller' &&
                        welcomeInvitation.role !== 'buyer' && (
                        <Fragment>
                          <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                              <label className='tittle-mini-ver'>
                                  Company
                              </label>
                              <input
                                className='form-control'
                                placeholder='Company'
                                name='company'
                                onChange={handleChange}
                                value={values.company}
                              />
                            </div>
                          </div>
                          {welcomeInvitation.access ===
                            TransactionAccessType.FULL ? (
                              <div className='col-12 col-sm-6'>
                                <div className='form-group'>
                                  <label className='tittle-mini-ver'>
                                    License Number{' '}
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
                        </Fragment>
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
                      disabled={errors.details}
                      type='submit'
                      className='btn btn-info text-white py-2 px-5'
                    >
                      {isSubmitting && (
                        <span className='spinner-border spinner-border-sm mr-2' />
                      )}
                      Access Transaction
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </Modal>
      )
    }

    _getTransactionFullAddress = transaction => {
      return `${transaction.address}`
    }

    _changeStatusNotification = async () => {
      try {
        const status = !this.state.statusNotification
        await userService.updateStatusNotification(
          this.props.currentUser.id,
          status
        )
        await this.props.dispatch(authRedux.updateStatusNotifi(status))
        this.setState({
          statusNotification: status
        })
      } catch (error) {
        toastr.error(error)
      }
    }
  }

  const mapStateToProps = state => ({
    currentUser: selector.getLoginUser(state),
    selectedView: selector.getTest(state),
    selectedViewParties: selector.getViewParties(state),
    selectedViewDashboard: selector.getViewDashboard(state),
    isToggleModalNewTransaction: selector.getNewTransaction(state)
  })
  return compose(
    connect(mapStateToProps),
    withRouter,
    withI18next(['user', 'common'])
  )(UserWrapper)
}

export default userOnly
