import React, { Component } from 'react'
import Head from 'next/head'
import moment from 'moment'
import userOnly from '../../hocs/userOnly'
import { userService } from '../../services'
import { Link } from '../../../common/routes'
class Contact extends Component {
  static async getInitialProps (ctx) {
    const user = ctx.store.getState().global.loginUser.data
    return {
      headerText: 'Contacts',
      selectedSort: 'A-Z',
      user: user
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      dataContact: []
    }
  }
  componentDidMount () {
    this._getAllContact()
  }
  // get all contact user
  _getAllContact = async () => {
    const id = this.props.user.id
    try {
      const res = await userService.getAllContact(id)
      const data = res.data.user.user
      const dataLast = res.data.user.userLast
      const dataFirst = res.data.user.userFirst
      const index = data.map(x => x.id).indexOf(id)
      data.splice(index, 1)
      const index2 = dataLast.map(x => x.id).indexOf(id)
      dataLast.splice(index2, 1)
      const index3 = dataFirst.map(x => x.id).indexOf(id)
      dataFirst.splice(index3, 1)
      this.setState({
        dataUserLast: dataLast,
        dataUserFirst: dataFirst
      })
      this.viewAZ(data)
    } catch (e) {}
  }
  // select sort
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
        return this.viewAZ(this.state.dataAZ)
      case 'Name Z-A':
        sort = 'Z-A'
        return this.viewZA(this.state.dataAZ)
      case 'Newest':
        sort = 'Newest'
        return this.viewRecent()
      case 'Oldest':
        sort = 'Oldest'
        return this.viewOldest()
      default:
        break
    }
    this.setState({
      selectedSort: sort
    })
  }
  // view user contact
  _viewUserContact = () => {
    const { dataContact } = this.state
    if (dataContact && dataContact.length > 0) {
      return dataContact.map((data, idx) => {
        return (
          <div className='content' key={idx}>
            <div className='tab1'>
              <div className='cardArchived'>
                <div className='boxCard'>
                  <div className='people col-4'>
                    <Link route={`/contact/${data.id}`}>
                      <a className='people-link'>
                        <img
                          className='people-image'
                          src={
                            data.avatar
                              ? data.avatar
                              : '/static/images/default-avatar.png'
                          }
                          alt=''
                        />
                        <div className='people-profile'>
                          <h6>
                            {data.firstName
                              ? data.firstName + ' ' + data.lastName
                              : data.name}
                          </h6>
                          <div>{data.company || 'None'}</div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className='state-archived col-2'>
                    <div className='label-item'>
                      {data.isInactive ? 'Inactive' : 'Active'}
                    </div>
                  </div>
                  <div className='address col-2'>
                    <h6>{data.location || 'None'}</h6>
                  </div>
                  <div className='time-archived col-2'>
                    <div className='green'>
                      {moment(data.createdAt).format('ll')}
                    </div>
                  </div>
                  <div className='contact-archived col-2'>
                    <div className='contact-action'>
                      <Link route='/message'>
                        <a href='' />
                      </Link>
                      <Link>
                        <a href={`mailto:${data.email}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
  }
  // view name a->z
  viewAZ = dataContact => {
    if (dataContact) {
      const z = dataContact.sort((a, b) => {
        let x = ''
        let y = ''
        if (a.firstName && b.firstName) {
          x = a.firstName.toLowerCase()
          y = b.firstName.toLowerCase()
        } else if (a.name && b.name) {
          x = a.name.toLowerCase()
          y = b.name.toLowerCase()
        } else if (a.name && b.firstName) {
          x = a.name.toLowerCase()
          y = b.firstName.toLowerCase()
        } else if (a.firstName && b.name) {
          x = a.firstName.toLowerCase()
          y = b.name.toLowerCase()
        }
        if (x < y) return -1
        if (x > y) return 1
        return 0
      })
      this.setState({
        dataContact: z,
        dataAZ: z
      })
    }
  }
  // view name z->a
  viewZA = dataContact => {
    if (dataContact) {
      const z = dataContact.sort((a, b) => {
        let x = ''
        let y = ''
        if (a.firstName && b.firstName) {
          x = a.firstName.toLowerCase()
          y = b.firstName.toLowerCase()
        } else if (a.name && b.name) {
          x = a.name.toLowerCase()
          y = b.name.toLowerCase()
        } else if (a.name && b.firstName) {
          x = a.name.toLowerCase()
          y = b.firstName.toLowerCase()
        } else if (a.firstName && b.name) {
          x = a.firstName.toLowerCase()
          y = b.name.toLowerCase()
        }
        if (x > y) return -1
        if (x < y) return 1
        return 0
      })
      this.setState({
        dataContact: z
      })
    }
  }
  // view recent
  viewRecent = () => {
    this.setState({
      dataContact: this.state.dataUserLast
    })
  }
  // view oldest
  viewOldest = () => {
    this.setState({
      dataContact: this.state.dataUserFirst
    })
  }
  render () {
    return (
      <div className='box-main'>
        <Head>
          <title>Contact</title>
        </Head>
        <div className='demo-archived'>
          <div className='box-demo-archived'>
            <div className='box-sort'>
              <div className='typeSort activeB' onClick={this._selectSort}>
                Name A-Z
              </div>
              <div className='typeSort' onClick={this._selectSort}>
                Name Z-A
              </div>
              <div className='typeSort' onClick={this._selectSort}>
                Newest
              </div>
              <div className='typeSort' onClick={this._selectSort}>
                Oldest
              </div>
            </div>
            {this._viewUserContact()}
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
}

export default userOnly(Contact)
