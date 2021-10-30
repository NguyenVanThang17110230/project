import React from 'react'
import classnames from 'classnames'
import { Router, Link } from '../../../../common/routes'
import authRedux from '../../../redux/authRedux'

const ROLE = {
  USER: 'user',
  COORDINATOR: 'coordinator'
}

const SideBarLayout = ({
  dispatch,
  currentUser,
  router,
  toggleSidebar,
  onClickNewAction
}) => {
  const { asPath } = router
  const role = currentUser.roles[0].name

  const isActive = path => {
    if (path === '/' && asPath === path) return true
    if (path !== '/' && asPath.startsWith(path)) return true
    return false
  }

  const logout = async () => {
    await dispatch(authRedux.logout())
    Router.replaceRoute('/login')
  }

  const menuItems = [
    role !== ROLE.USER && {
      link: '/',
      iconUri: '/static/images/New/dashboard-icon.png',
      title: 'Dashboard'
    },
    {
      link: '/my-transactions',
      iconUri: '/static/images/New/transaction.png',
      title: 'Transactions'
    },
    {
      link: 'https://www.idxbroker.com/',
      isNewTab: true,
      iconUri: '/static/images/New/IDX.png',
      title: 'IDX Broker'
    },
    role === ROLE.COORDINATOR && {
      link: '/manage-agents',
      iconUri: '/static/images/New/manager.png',
      title: 'Manage Agents'
    },
    {
      link: '/calendar',
      // handleClick: () =>
      //   onClickNewAction(
      //     currentUser.id,
      //     [NotificationType.CREATE_EVENT, NotificationType.DELETE_EVENT],
      //     'newEvent'
      //   ),
      iconUri: '/static/images/New/calendar.png',
      isDisplayNotify: true, // TODO
      title: 'Calendar'
    },
    role !== ROLE.USER && {
      link: '/tasks',
      // handleClick: () =>
      //   onClickNewAction(
      //     currentUser.id,
      //     [NotificationType.CREATE_TASK],
      //     'newTask'
      //   ),
      iconUri: '/static/images/New/task.png',
      isDisplayNotify: true, // TODO
      title: 'Tasks'
    },
    {
      link: '/message',
      // handleClick: () =>
      //   onClickNewAction(
      //     currentUser.id,
      //     [NotificationType.NEW_MESSAGE],
      //     'newMessage'
      //   ),
      iconUri: '/static/images/New/sms.png',
      isDisplayNotify: true, // TODO
      title: 'Inbox'
    },
    {
      link: 'https://www.linkbrokerages.com/terms-and-conditions',
      isNewTab: true,
      iconUri: '/static/images/New/Contact.png',
      title: 'Contact'
    },
    {
      iconUri: '/static/images/New/until.png',
      title: 'Utilities',
      subItems: [
        {
          link: '#',
          icon: 'far fa-id-card',
          title: 'User Profile'
        },
        {
          link: '#',
          icon: 'fas fa-users-cog',
          title: 'Account Settings'
        },
        {
          link: '#',
          icon: 'fas fa-money-bill',
          title: 'Payment'
        }
      ]
    }
  ]

  const footerMenuItems = [
    {
      link: '/',
      iconUri: '/static/images/New/help.png',
      title: 'Help'
    },
    {
      link: '/',
      handleClick: () => logout(),
      iconUri: '/static/images/New/logout.png',
      title: 'Logout'
    }
  ]

  return (
    <aside
      id='left-sidebar'
      className={`left-sidebar position-fixed ${
        !toggleSidebar
          ? 'd-none d-xs-none d-sm-none d-md-block d-lg-block'
          : 'd-block d-xs-block d-sm-block d-md-block d-lg-block left-sidebar--animation'
      }`}
    >
      <div className='scroll-sidebar-left no-block scroll-sidebar--scroll d-flex flex-column'>
        <nav
          className='sidebar-nav'
          style={{ overflowX: 'auto', height: '90%' }}
        >
          <ul id='sidebarnav' className='sidebarnav--fix'>
            <li className='nav-brand'>
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
            id='sidebarnav'
            className='sidebarnav--fix'
            style={{ marginTop: '15px' }}
          >
            {menuItems.map(
              item =>
                item &&
                (item.link ? (
                  <li className={classnames({ active: isActive(item.link) })}>
                    <Link route={item.link}>
                      <a
                        aria-expanded='false'
                        className='has-arrow'
                        target={item.isNewTab && '_blank'}
                        // onClick={() => item.handleClick && item.handleClick()}
                      >
                        <img className='th-7' src={item.iconUri} alt='' />
                        <span className='hide-menu'>
                          {item.title}
                          {/* TODO */}
                          {/* Calendar {item.isDisplayNotify && this._renderNewNotification(this.state.newEvent)} */}
                          {/* Tasks {this._renderNewNotification(this.state.newTask)} */}
                          {/* Inbox {this._renderNewNotification(this.state.newMessage)} */}
                        </span>
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className='drop-down-li'>
                    <div className='drop-down'>
                      <div className='drop-btn' style={{ marginLeft: '-12px' }}>
                        <img className='th-7' src={item.iconUri} alt='' />
                        <span className='hide-menu'>{item.title}</span>
                      </div>
                      <Link>
                        <div className='dropdown-content'>
                          {item.subItems.map(subItem => (
                            <a href={subItem.link} className='drop-content-a'>
                              <i className={subItem.icon} />
                              <span className='hide-menu ml-3'>
                                {subItem.title}
                              </span>
                            </a>
                          ))}
                        </div>
                      </Link>
                    </div>
                  </li>
                ))
            )}
          </ul>

          {role !== 'user' &&
            footerMenuItems.map(item => (
              <ul>
                <li
                  className='text-white mt-auto mx-auto position-absolute'
                  style={{
                    width: '100%',
                    top: '100%',
                    left: '50%',
                    msTransform: 'translate(50%,0)',
                    transform: 'translate(-50%,0)'
                  }}
                  onClick={() => item.handleClick && item.handleClick()}
                >
                  <Link route={item.link}>
                    <a aria-expanded='false' className='has-arrow bottom-help'>
                      <img className='th-7' src={item.iconUri} alt='' />
                      <span className='hide-menu'>{item.title}</span>
                    </a>
                  </Link>
                </li>
              </ul>
            ))}
        </nav>
      </div>
    </aside>
  )
}

export default SideBarLayout
