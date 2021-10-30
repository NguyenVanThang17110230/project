import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import className from 'classnames'
import Dropzone from 'react-dropzone'
import getConfig from 'next/config'
import { Modal } from 'reactstrap'
import Head from 'next/head'
import { MAX_FILE_SIZE, MEGABYTE } from '../../../common/models/Transaction'
import { Link } from '../../../common/routes'
import { getFullName } from '../../../common/view-models/TransactionParty'
import { MessageType } from '../../../common/models/Message'
import { messageService, newsService, userService } from '../../services'
import userOnly from '../../hocs/userOnly'
import Role from '../../../common/models/Role'
import { NewsType } from '../../../common/models/News'

const { publicRuntimeConfig } = getConfig()
const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`

class MessagePage extends Component {
  static async getInitialProps (ctx) {
    const user = ctx.store.getState().global.loginUser.data
    const {
      myParties,
      otherParties
    } = await userService.getMyMessagingParties()
    let listNews = []
    if (
      user.roles[0].name === Role.AGENT ||
      user.roles[0].name === Role.COORDINATOR
    ) {
      listNews = await newsService.getViewNews()
    }
    if (listNews.length > 0) {
      listNews = listNews.filter(
        news =>
          new Date(news.publicDate).getTime() >=
          new Date(user.createdAt).getTime()
      )
    }
    return {
      headerText: 'Inbox',
      parties: otherParties,
      myParties,
      listNews,
      partyId: ctx.query.partyId ? ctx.query.partyId : ctx.query.newsId
    }
  }

  constructor (props) {
    super(props)
    this.onDrop = file => {
      this.setState({ file })
    }
    this.state = {
      messages: [],
      user: [],
      newMessage: '',
      chatWithPartyId: props.partyId
        ? props.partyId
        : props.parties[0]
          ? props.parties[0].id
          : null,
      recipientParty: null,
      parties: props.parties,
      keyword: '',
      toggleTimeline: false,
      toggleMessageBox: false,
      level: 1,
      totalPage: 0,
      isMore: false,
      file: null,
      isSending: false,
      toggleModalError: false,
      search: false,
      isViewInbox: true,
      listNews: props.listNews,
      currentNews: props.listNews[0]
    }
  }
  // Get all contact for user
  _getAllContact = async () => {
    const { currentUser } = this.props
    const res = await userService.getAllContact(currentUser.id)
    if (res.data.user) {
      const data = res.data.user.user
      const index = data.map(x => x.id).indexOf(currentUser.id)
      data.splice(index, 1)
      this.setState({
        user: data
      })
    }
  }
  // set search
  _getMessageSearch = async () => {
    await this.setState({
      search: true
    })
    await this._focusIn()
  }
  // focus search box
  _focusIn = () => {
    const test = document.getElementById('text-search')
    if (test) {
      test.focus()
    }
  }

  render () {
    const {
      recipientParty,
      newMessage,
      keyword,
      isMore,
      level,
      totalPage,
      file,
      isSending,
      search,
      isViewInbox,
      currentNews,
      parties
    } = this.state
    return (
      <div className='box-main'>
        <Head>
          <title>Messaging</title>
        </Head>
        <div className='row m-0'>
          <div
            className='card-border-top card-border-top_transaction w-100'
            id='message'
            style={{
              overflowY: 'hidden'
            }}
          >
            <div className='row message__row m-0'>
              <div className='col-12 col-md-6 col-xl-5 message__box pb-3 pl-0 pr-0'>
                <div className='d-flex justify-content-between align-items-center p-4 th-allMes'>
                  {isViewInbox ? (
                    <>
                      <h3 className='th-font-f-7 mb-0'>All Messages</h3>
                      {parties.length > 0 && (
                        <div
                          className='th-color-blue rounded th-new'
                          onClick={() => this._getMessageSearch()}
                        >
                          +
                        </div>
                      )}
                    </>
                  ) : (
                    <h3 className='th-font-f-7 mb-0'>All News</h3>
                  )}
                </div>
                <div className='d-flex th-new-mess border-bottom'>
                  <div
                    className={
                      isViewInbox
                        ? 'col-6 d-flex align-items-center justify-content-center flex-column th-left active-ch'
                        : 'col-6 d-flex align-items-center justify-content-center flex-column th-left'
                    }
                    style={{ padding: '11px 24px' }}
                    onClick={() => this.setState({ isViewInbox: true })}
                  >
                    <img
                      className=''
                      src='/static/images/New/new-mess.png'
                      style={{ width: '30px', height: '30px' }}
                    />
                    <span className='font-weight-bold'>Messages</span>
                  </div>
                  <div
                    className={
                      !isViewInbox
                        ? 'active-ch col-6 d-flex align-items-center justify-content-center flex-column th-right'
                        : 'col-6 d-flex align-items-center justify-content-center flex-column th-right'
                    }
                    style={{ padding: '11px 24px' }}
                    onClick={() => this.setState({ isViewInbox: false })}
                  >
                    <img
                      className=''
                      src='/static/images/New/new-noti.png'
                      style={{ width: '30px', height: '30px' }}
                    />
                    <span className='font-weight-bold'>News</span>
                  </div>
                </div>
                {isViewInbox ? (
                  <div
                    className={`${
                      this.state.toggleMessageBox
                        ? 'message_scroll--fix'
                        : 'message_scroll'
                    }`}
                  >
                    {/* <div className='message_scroll' id='style-scroll'> */}
                    {this._renderListMessaging()}
                  </div>
                ) : (
                  <div
                    className='message_scroll'
                    // style={{ fontSize: '20px' }}
                  >
                    {this._renderListNews()}
                  </div>
                )}
              </div>
              {isViewInbox ? (
                recipientParty !== null &&
                (search ? (
                  <div className='col-md-6 col-xl-7 col-12 message__content px-0 d-flex justify-content-between flex-column'>
                    <div
                      className='bg-light'
                      style={{
                        padding: '25px 16px',
                        borderBottom: '1px solid #eee'
                      }}
                    >
                      <h3 className='th-font-f-7 mb-0 th-search'>
                        To:
                        <input
                          id='text-search'
                          type='text'
                          placeholder='Enter name'
                          onChange={this._updateField('keyword')}
                          value={keyword}
                        />
                        <div className='card shadow-sm rounded box-search'>
                          {this._viewDataSearch()}
                        </div>
                      </h3>
                    </div>
                    <div className='th-box-chat'>
                      <div className='chat p-3' id='chat-box'>
                        <div className='text-center'>
                          {level < totalPage && (
                            <div
                              onClick={() => this._moreMessages()}
                              style={{ cursor: 'pointer' }}
                              className='text-black-50'
                            >
                              {isMore && (
                                <span className='spinner-border spinner-border-sm mr-2' />
                              )}
                              more...
                            </div>
                          )}
                        </div>
                        {this._renderMessages()}
                        <div className='text-right loading'>
                          {isSending && (
                            <span className='spinner-border spinner-border-sm mr-2 ' />
                          )}
                        </div>
                        <div ref='message' />
                      </div>
                    </div>
                    <div className='input-group message__text'>
                      <div className='gr-inbox'>
                        <input
                          type='text'
                          id='new-message'
                          className='form-control form-control--fix'
                          placeholder='Type a message here…'
                          onChange={this._updateField('newMessage')}
                          value={file && file[0] ? file[0].name : newMessage}
                          onKeyDown={this._handleKeyDown}
                        />
                        <div className='group-send-big'>
                          <Dropzone
                            // accept={FILE_TYPE}
                            maxSizeBytes={MAX_FILE_SIZE}
                            onDrop={this.onDrop}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <section className='mr-2'>
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />

                                  <span
                                    className='input-group-text'
                                    id='basic-addon1'
                                  >
                                    <i className='fa fa-paperclip' />
                                  </span>
                                </div>
                                {file &&
                                  file[0] &&
                                  (file[0].size > MAX_FILE_SIZE &&
                                    this._renderModalNoticeError())}
                              </section>
                            )}
                          </Dropzone>
                          <span
                            className='gr-send'
                            onClick={() => this._sendToNewMessage()}
                          >
                            <i className='fa fa-location-arrow fa--fix' />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='col-md-6 col-xl-7 col-12 message__content px-0 d-flex justify-content-between flex-column'>
                    <div
                      className='bg-light'
                      style={{
                        padding: '26px 16px',
                        borderBottom: '1px solid #eee'
                      }}
                    >
                      <h3 className='th-font-f-7 mb-0'>
                        {getFullName(recipientParty)}
                      </h3>
                    </div>
                    <div className='th-box-chat'>
                      <div className='chat p-3' id='style-scroll'>
                        <div className='text-center'>
                          {level < totalPage && (
                            <div
                              onClick={() => this._moreMessages()}
                              style={{ cursor: 'pointer' }}
                              className='text-black-50'
                            >
                              {isMore && (
                                <span className='spinner-border spinner-border-sm mr-2' />
                              )}
                              more...
                            </div>
                          )}
                        </div>
                        {this._renderMessages()}
                        <div className='text-right loading'>
                          {isSending && (
                            <span className='spinner-border spinner-border-sm mr-2 ' />
                          )}
                        </div>
                        <div ref='message' />
                      </div>
                    </div>
                    <div className='input-group message__text'>
                      <div className='gr-inbox'>
                        <input
                          type='text'
                          id='new-message'
                          className='form-control form-control--fix'
                          placeholder='Type a message here…'
                          onChange={this._updateField('newMessage')}
                          value={file && file[0] ? file[0].name : newMessage}
                          onKeyDown={this._handleKeyDown}
                        />
                        <div className='gr-send-big'>
                          <Dropzone
                            // accept={FILE_TYPE}
                            maxSizeBytes={MAX_FILE_SIZE}
                            onDrop={this.onDrop}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <section>
                                <div {...getRootProps()} className='h-100'>
                                  <input {...getInputProps()} />
                                  <span
                                    className='input-group-text'
                                    id='basic-addon1'
                                  >
                                    <i className='fa fa-paperclip' />
                                  </span>
                                </div>
                                {file &&
                                  file[0] &&
                                  (file[0].size > MAX_FILE_SIZE &&
                                    this._renderModalNoticeError())}
                              </section>
                            )}
                          </Dropzone>
                          <span
                            className='gr-send'
                            onClick={() => this._sendToNewMessage()}
                          >
                            <i className='fa fa-location-arrow fa--fix' />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : currentNews ? (
                <div
                  className='col-md-6 col-xl-7 col-12 message__content pd-0 pl-0 pr-0'
                  style={{ backgroundColor: '#fff' }}
                >
                  <div
                    className='bg-light th-allMes'
                    style={{ padding: '24px 16px' }}
                  >
                    <h3 className='th-font-f-7 mb-0'>{currentNews.title}</h3>
                  </div>
                  <div className='p-4 th-box-chat'>
                    <p>{currentNews.content}</p>
                  </div>
                </div>
              ) : (
                <div className='col-7 card shadow-sm rounded mb-0'>
                  <div
                    className='th-font-w-5'
                    style={{
                      paddingBottom: '35vh',
                      paddingTop: '35vh',
                      textAlign: 'center'
                    }}
                  >
                    No news
                  </div>
                </div>
              )}
            </div>
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
      </div>
    )
  }

  async componentDidMount () {
    const { level, listNews, chatWithPartyId } = this.state
    const { currentUser } = this.props
    if (this.state.chatWithPartyId) {
      const check = listNews.find(x => x.id === chatWithPartyId)
      if (check) {
        this.setState({
          isViewInbox: false,
          currentNews: check
        })
      }
      await this._refetchDynamicMessages(this.state.chatWithPartyId, level)
      this._scrollToLastMessage()
    }
    // setup real time when send sms
    messageService.listenToMyNewMessages(currentUser.id, message => {
      if (this.state.chatWithPartyId === message.senderId) {
        this.setState(
          {
            messages: [...this.state.messages, message]
          },
          this._scrollToLastMessage(),
          this._refetchDynamicMessages(this.state.chatWithPartyId, level)
        )
      } else {
        const newParties = [...this.state.parties]
        const party = newParties.find(party => party.id === message.senderId)

        party.messages.push(message)
        if (party.newMessage) {
          party.newMessage += 1
        } else {
          party.newMessage = 1
        }

        this.setState({ parties: newParties })
      }
    })
    this._getAllContact()
  }

  // componentWillUnmount () {
  //   messageService.unlistenToMyNewMessages(this.props.currentUser.id)
  // }

  // componentDidUpdate() {
  //   if (this.state.level === 1) {
  //     this._scrollToLastMessage()
  //   }
  // }

  _handleKeyDown = e => {
    if (e.key === 'Enter') {
      this._sendToNewMessage()
    }
  }

  _scrollToLastMessage = () => {
    const mes = document.getElementsByClassName('message')
    if (mes.length > 0) {
      document.addEventListener('load', this.scrollLast())
    }
  }
  scrollLast = () => {
    const check = document.getElementsByClassName('chat')
    if (check[0]) {
      check[0].scrollTop = check[0].scrollHeight
    }
  }

  _moreMessages = async () => {
    const { router } = this.props
    const { level, totalPage, chatWithPartyId } = this.state
    this.setState({ level: level + 1, isMore: true })

    if (level > totalPage) {
      return
    }

    // Because the variable 'level' has not been updated
    if (!router.query.partyId) {
      await this._refetchDynamicMessages(chatWithPartyId, this.state.level)
    } else {
      await this._refetchDynamicMessages(router.query.partyId, this.state.leve1)
    }

    this.setState({ isMore: false })
  }

  _updateField = field => e => this.setState({ [field]: e.target.value })

  _sendToNewMessage = async () => {
    const { recipientParty, newMessage, file } = this.state

    if (!recipientParty) {
      return
    }

    if (!file) {
      if (newMessage === '') {
        return
      }
    }

    this.setState({ isSending: true })

    const senderParty = this.props.myParties.find(
      party => party.transactionId === recipientParty.transactionId
    )

    if (file && file[0]) {
      const message = await messageService.sendToFile({
        file: file[0],
        senderId: senderParty.id,
        recipientId: recipientParty.id,
        type: MessageType.ATTACHMENT
      })
      this._setStateAfterSend(message, recipientParty)
    } else {
      const message = await messageService.sendToNewMessage({
        content: newMessage,
        senderId: senderParty.id,
        recipientId: recipientParty.id,
        type: MessageType.TEXT
      })
      this._setStateAfterSend(message, recipientParty)
      this._refetchDynamicMessages(senderParty.id, this.state.level)
    }
  }

  _setStateAfterSend = (message, recipientParty) => {
    const newParties = [...this.state.parties]
    const party = newParties.find(party => party.id === recipientParty.id)
    party.messages.push(message)

    this.setState({
      newMessage: '',
      file: null,
      messages: [...this.state.messages, message],
      parties: newParties,
      level: 1,
      isSending: false
    })
    this._scrollToLastMessage()
  }

  _refetchDynamicMessages = async (partyId, level) => {
    const recipientParty = this.state.parties.find(
      party => party.id === partyId
    )

    if (!recipientParty) {
      return
    }
    const senderParty = this.props.myParties.find(
      party => party.transactionId === recipientParty.transactionId
    )

    const { otherParties } = await userService.getMyMessagingParties()

    const { messages, totalPage } = await messageService.getMyMessagesWithUser(
      senderParty.id,
      partyId,
      level
    )
    this.setState({
      messages: messages,
      recipientParty,
      parties: otherParties,
      totalPage
    })
    this._scrollToLastMessage()
  }

  _toggleModalError = () => {
    this.setState({ file: null })
  }

  _renderModalNoticeError = () => {
    const { file } = this.state
    return (
      <Modal
        isOpen={file[0].size > MAX_FILE_SIZE}
        toggle={this._toggleModalError}
        id='modal-error'
      >
        <div className='modal-header header'>
          <b>The file you have selected is too large</b>
        </div>
        <div className='modal-body'>
          The file you have selected is too large. The maximum size is{' '}
          {MEGABYTE}MB.
        </div>
        <div className='modal-footer'>
          <button className='btn button' onClick={this._toggleModalError}>
            OK
          </button>
        </div>
      </Modal>
    )
  }

  _renderContentMessage = message => {
    if (message.type === MessageType.TEXT) {
      return <div className='message last'>{message.content}</div>
    }
    return (
      <div className='message last'>
        <u>{message.content}</u>
        <a
          href={`${API_BASE_URL}/messages/${message.id}/download`}
          target='_blank'
        >
          <i className='fas fa-arrow-circle-down ml-2' />
        </a>
      </div>
    )
  }

  _renderContentMessageSend = message => {
    const { messages, recipientParty } = this.state
    const data = messages.filter(data => data.recipientId !== recipientParty.id)
    if (data[data.length - 1].id === message.id) {
      if (message.type === MessageType.TEXT) {
        return (
          <div className='d-flex align-items-center w-100'>
            <div
              className='rounded-circle mr-2 overflow-hidden'
              style={{ width: '40px', height: '40px', flexShrink: '0' }}
            >
              <img src={this._getSrcAvt(message.senderId)} alt='' />
            </div>
            <div className='message last'>{message.content}</div>
          </div>
        )
      }
      return (
        <div className='d-flex align-items-center w-100'>
          <div
            className='rounded-circle mr-2 overflow-hidden'
            style={{ width: '40px', height: '40px', flexShrink: '0' }}
          >
            <img src={this._getSrcAvt(message.senderId)} alt='' />
          </div>
          <div className='message last'>
            <u>{message.content}</u>
            <a
              href={`${API_BASE_URL}/messages/${message.id}/download`}
              target='_blank'
            >
              <i className='fas fa-arrow-circle-down ml-2' />
            </a>
          </div>
        </div>
      )
    } else {
      if (message.type === MessageType.TEXT) {
        return (
          <div className='message last' style={{ marginLeft: '48px' }}>
            {message.content}
          </div>
        )
      }
      return (
        <div className='message last' style={{ marginLeft: '48px' }}>
          <u>{message.content}</u>
          <a
            href={`${API_BASE_URL}/messages/${message.id}/download`}
            target='_blank'
          >
            <i className='fas fa-arrow-circle-down ml-2' />
          </a>
        </div>
      )
    }
  }

  _getSrcAvt = senderId => {
    const { parties } = this.state
    if (parties.length > 0) {
      const data = parties.find(parties => parties.id === senderId)
      if (data) {
        return data.user.avatar
          ? data.user.avatar
          : '/static/images/default-avatar.png'
      }
    }
  }

  _renderMessages = () => {
    const { messages, recipientParty } = this.state
    if (messages) {
      return this.state.messages.map((message, index) => (
        <div key={index}>
          {message.recipientId === recipientParty.id ? (
            <div className='mine messages mt-1'>
              {this._renderContentMessage(message)}
            </div>
          ) : (
            <div className='yours messages mt-1'>
              {this._renderContentMessageSend(message)}
            </div>
          )}
        </div>
      ))
    }
  }

  _renderListMessaging = () => {
    const { parties } = this.state
    const data = parties.filter(party => party.messages.length > 0)
    if (parties.length > 0) {
      return data.map((party, index) => (
        <div className='message_child-scroll' key={index}>
          {this._renderCardMessaging(party)}
        </div>
      ))
    } else {
      return (
        <div
          className='card shadow-sm rounded p-4 th-font-w-5'
          style={{ fontSize: '20px' }}
        >
          You currently do not have parties
        </div>
      )
    }
  }

  _renderListNews = () => {
    const { listNews } = this.state
    if (listNews && listNews.length > 0) {
      return listNews.map((news, index) => (
        <div className='message_child-scroll' key={index}>
          {this._renderCardNews(news)}
        </div>
      ))
    } else {
      return (
        <div
          className='card shadow-sm rounded p-4 th-font-w-5'
          style={{ fontSize: '20px' }}
        >
          There are currently no new news
        </div>
      )
    }
  }

  _viewDataSearch = () => {
    const { keyword, parties } = this.state
    if (keyword !== '') {
      return parties.map((party, index) => (
        <div className='item-search' key={index}>
          {getFullName(party)
            .toLowerCase()
            .indexOf(keyword.toLowerCase().trim()) !== -1 &&
            this._renderSearch(party)}
        </div>
      ))
    }
  }

  _renderSearch = party => {
    return (
      <Link route={`/message?partyId=${party.id}`}>
        <div
          className='search-big'
          onClick={() => {
            this.setState({ level: 1, search: false, keyword: '' })
            this._refetchDynamicMessages(party.id, this.state.level)
          }}
        >
          <div className='search-left'>
            <img
              className='rounded-circle mr-2'
              src={
                party.user
                  ? party.user.avatar
                    ? party.user.avatar
                    : '/static/images/default-avatar.png'
                  : '/static/images/default-avatar.png'
              }
            />
          </div>
          <div className='search-right'>
            <h3>{getFullName(party)}</h3>
            <span>{party.email}</span>
          </div>
        </div>
      </Link>
    )
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.router.query.partyId) {
      if (nextProps.router.query.partyId !== this.state.chatWithPartyId) {
        this.setState({ chatWithPartyId: nextProps.router.query.partyId })
      }
    }
  }

  _renderCardMessaging = party => {
    if (party && party.messages && party.user) {
      const { router } = this.props
      const { recipientParty } = this.state
      const isRouter = recipientParty
        ? party.id === recipientParty.id
        : party.id === router.query.partyId
      const lastMessage = _.last(party.messages)
      return (
        <div
          className='shadow-sm message__list'
          style={{ cursor: 'pointer' }}
          onClick={() => {
            this.setState({ level: 1, keyword: '', search: false })
            this._refetchDynamicMessages(party.id, this.state.level)
          }}
        >
          <div className={isRouter ? 'message__item--action' : 'message__item'}>
            <div className='message__item-text row mx-0'>
              <img
                className='rounded-circle col-2 px-0'
                src={party.user.avatar || '/static/images/default-avatar.png'}
              />
              <div className='gr-text col-10 pr-0'>
                <div className='row mx-0'>
                  <h5
                    className='col-6 px-0 overflow-hidden th-font-w-5'
                    style={{ textOverflow: 'ellipsis' }}
                  >
                    {getFullName(party)}
                  </h5>
                  <span className='th-color-blue th-font-w-5 col-6 px-0 text-right'>
                    {lastMessage ? (
                      moment(lastMessage.createdAt).fromNow()
                    ) : (
                      <br />
                    )}
                  </span>
                </div>
                {lastMessage && (
                  <p
                    className={className('message__overflow th-font-w-5', {
                      'text-black-50': isRouter
                    })}
                  >
                    {lastMessage.content}
                  </p>
                )}
              </div>
            </div>

            {!isRouter && party.newMessage && (
              <div className='d-flex justify-content-end mt-5'>
                <div className='m-3 row message__item-time__new'>
                  <p className='message__item-new-message'>
                    {party.newMessage}
                  </p>
                </div>
              </div>
            )}
            {isRouter && delete party.newMessage}
          </div>
        </div>
      )
    }
  }
  _renderCardNews = news => {
    const { currentNews } = this.state
    let isCurrent = false
    if (currentNews.id === news.id) {
      isCurrent = true
    }
    return (
      <div
        className='shadow-sm message__list'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          this.setState({ currentNews: news })
        }}
      >
        <div className={isCurrent ? 'message__item--action' : 'message__item'}>
          <div className='message__item-text row mx-0'>
            {this._viewImageNews(news.newsType)}
            <div className='gr-text col-10 pr-0'>
              <div className='gr-top row mx-0'>
                <h5 className='col-6 px-0 overflow-hidden'>{news.title}</h5>
                <p className='message__item-time text-right col-6 pr-0'>
                  <span className='th-color-blue th-font-w-5'>
                    {moment(news.publicDate || news.createdAt).fromNow()}
                  </span>
                </p>
              </div>
              <p
                className={className('message__overflow th-font-w-5', {
                  'text-black-50': isCurrent
                })}
                style={{ width: '100%' }}
              >
                {news.content}
              </p>
            </div>
          </div>
        </div>
      </div>
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
              height: '50px',
              minWidth: '50px',
              maxWidth: '50px',
              backgroundColor: '#2F80ED'
            }}
          >
            <img
              className=''
              src='/static/images/New/type-eCom.png'
              style={{ width: '50%', height: '50%', minHeight: '50%' }}
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
              style={{ width: '50%', height: '50%', minHeight: '50%' }}
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
              style={{ width: '50%', height: '50%', minHeight: '50%' }}
            />
          </div>
        )
      default:
        break
    }
  }
}

export default userOnly(MessagePage)
