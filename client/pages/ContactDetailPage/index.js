import React, { Component } from 'react'
import Head from 'next/head'
import userOnly from '../../hocs/userOnly'
import { userService } from '../../services'

class ContactDetailPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    const { idUser } = this.props.query
    try {
      const user = await userService.getUserFromId(idUser)
      this.setState({
        user: user
      })
    } catch (e) {
      console.error('error')
    }
  }

  render () {
    const { user } = this.state
    return (
      <div className='container'>
        <Head>
          <title>Contact detail</title>
        </Head>
        <div className='th-main-contact'>
          <div className='col-12 mt-5 mb-2'>
            <div className='card p-4'>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div
                  className='rounded-circle mb-2'
                  style={{
                    width: '100px',
                    height: '100px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={
                      user.avatar
                        ? user.avatar
                        : '/static/images/default-avatar.png'
                    }
                    alt=''
                  />
                </div>
                <div className='th-font-w-5 th-size-3 mb-1'>
                  {user.firstName
                    ? user.firstName + ' ' + user.lastName
                    : user.name}
                </div>
                <div className='th-title-char mb-1'>
                  {user.company || 'None'}
                </div>
                <div className='th-label-item'>
                  {user.isInactive ? 'Inactive' : 'Active'}
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card p-4'>
              <div className='row'>
                <div className='col-6 mb-2'>
                  <div className='th-size-1 th-font-w-5'>Company</div>
                  <div className='th-title-char'>{user.company || 'None'}</div>
                </div>
                <div className='col-6 mb-2'>
                  <div className='th-size-1 th-font-w-5'>Email</div>
                  <div className='th-title-char'>{user.email || 'None'}</div>
                </div>
                <div className='col-6 mb-2'>
                  <div className='th-size-1 th-font-w-5'>Location</div>
                  <div className='th-title-char'>{user.location || 'None'}</div>
                </div>
                <div className='col-6 mb-2'>
                  <div className='th-size-1 th-font-w-5'>Phone</div>
                  <div className='th-title-char'>{user.phone || 'None'}</div>
                </div>
                <div className='d-flex justify-content-between col-12 mt-3 d-xs-block d-sm-none'>
                  <div className='col-6 pl-0'>
                    <a
                      href={`tel:${user.phone}`}
                      className='text-white text-decoration-none th-button-2'
                    >
                      Call
                    </a>
                  </div>
                  <div className='col-6 pr-0'>
                    <a
                      href={`sms:${user.phone}`}
                      className='text-white text-decoration-none th-button-2'
                    >
                      Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='footer-card' style={{ padding: '2rem 3rem' }}>
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

export default userOnly(ContactDetailPage)
