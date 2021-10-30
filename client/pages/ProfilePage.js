import React, { Component } from 'react'
import toastr from 'toastr'
import userOnly from '../hocs/userOnly'
import authRedux from '../redux/authRedux'
import { isCoordinator, Rank } from '../../common/models/User'
import { commissionService, userService } from '../services'
import { Formik } from 'formik'
import Head from 'next/head'
import { Link } from '../../common/routes'
import PhoneInput from 'react-phone-input-2'
import { commissionType } from '../../common/models/CashBalance'

class ProfilePage extends Component {
  static async getInitialProps (ctx) {
    const user = ctx.store.getState().global.loginUser.data

    let _isCoordinator = isCoordinator(user)
    const role = await userService.getUserRole({ id: user.id })
    const cashType = _isCoordinator
      ? commissionType.TC_COMMISSION
      : commissionType.AGENT_COMMISSION
    const commissionTotal = await commissionService.countCommission({
      userId: user.id,
      type: cashType,
      isForThisYear: false
    })
    return {
      headerText: 'User Profile',
      isCoordinator: _isCoordinator,
      role: role,
      commissionTotal
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      view: 'About',
      currentUser: props.currentUser,
      isChangeAvatar: false,
      year: []
    }
  }
  // submit
  handleSubmit = async (values, action) => {
    const { setSubmitting } = action
    const { currentUser } = this.state
    try {
      const {
        firstName,
        lastName,
        day,
        month,
        year,
        gender,
        company,
        phone,
        location,
        bio,
        avatar
      } = values
      const dateOfBirth = day + '-' + month + '-' + year
      setSubmitting(true)
      await userService.updateInfoUser(currentUser.id, {
        firstName,
        lastName,
        dateOfBirth,
        gender,
        company,
        phone,
        location,
        bio
      })
      if (this.state.isChangeAvatar === true) {
        await this._updateUserAvatar(currentUser.id, avatar)
      }
      setSubmitting(false)
      this._fetchData()
      toastr.success('Success')
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
  // Change avatar
  _updateUserAvatar = async (userId, file) => {
    const { dispatch } = this.props
    try {
      await userService.updateUserAvatar(userId, file)
      const user = await userService.getUserFromId(userId)
      await dispatch(authRedux.updateUserrAvatar(user.avatar))
      this.setState({
        isChangeAvatar: false
      })
      //   toastr.success('Success')
    } catch (error) {
      this.setState({
        savingUserAvatar: false
      })
      toastr.error(error.message)
    }
  }
  _fetchData = async () => {
    const newUser = await userService.getUserFromId(this.state.currentUser.id)
    this.setState({
      currentUser: newUser
    })
  }
  // upload cover image
  _submitCoverImage = async coverImage => {
    const { currentUser } = this.state

    if (coverImage) {
      try {
        await userService.uploadCoverImageUser(currentUser.id, coverImage)
        this._fetchData()
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
  }

  // select tab view
  _selectedView = e => {
    let active = document.getElementsByClassName('current-i')
    ;[...active].forEach(acT => {
      acT.classList.remove('current-i')
    })
    e.currentTarget.className += ' current-i'
    this.setState({
      view: e.currentTarget.textContent
    })
  }
  // view card left
  _viewInfoLeft = () => {
    return (
      <div className='col-12 col-md-8'>
        <div className='th-top'>
          {this.state.currentUser.coverImage ? (
            <img src={this.state.currentUser.coverImage} alt='' />
          ) : (
            <img
              src='https://uploads-ssl.webflow.com/5fd97ed8cd0cf9c4c8e747de/5fd97ed93cbe53f54b630763_christian-perner-UKLIuV8rAks-unsplash.jpg'
              alt=''
            />
          )}
          <div className='th-square th-center'>
            <input
              type='file'
              accept="accept='image/*"
              className='input-image'
              onChange={event => {
                this._submitCoverImage(event.currentTarget.files[0])
              }}
            />
            <img src='/static/images/New/pencil.png' alt='' />
          </div>
        </div>
        <div className='th-bottom'>
          <div className='card-bottom'>
            <div className='th-menu'>
              <div className='row'>
                <div className='col-12 col-md-9 d-flex align-items-center flex-column flex-sm-row'>
                  <div className='box-avt'>
                    {this.state.currentUser.avatar ? (
                      <img
                        className='avatar-image'
                        src={this.state.currentUser.avatar}
                        alt=''
                      />
                    ) : (
                      <img
                        className='avatar-image'
                        src='/static/images/default-avatar.png'
                        alt=''
                      />
                    )}
                  </div>

                  <h5
                    className='profile-name profile-name__big pl-2'
                    style={{ WebkitBoxOrient: 'vertical' }}
                  >
                    {this.state.currentUser.firstName
                      ? this.state.currentUser.firstName.concat(
                        ' ',
                        this.state.currentUser.lastName
                      )
                      : this.state.currentUser.name}
                  </h5>
                </div>

                <div className='col-12 col-md-3 th-center flex-row-reverse'>
                  <Link route='/contact'>
                    <button className='button-link'>Contact</button>
                  </Link>
                </div>
              </div>

              <div className='gr-menu th-row'>
                <div className='me current-i' onClick={this._selectedView}>
                  About
                </div>
                <div className='me' onClick={this._selectedView}>
                  Edit profile
                </div>
                {/* <div className='me' onClick={this._selectedView}>
                  Friends
                </div> */}
              </div>
            </div>
            <div className='th-info mt-3'>
              {this.state.view === 'About' && <div>{this._viewAbout()}</div>}
              {this.state.view === 'Edit profile' && (
                <div>{this._viewEditProfile()}</div>
              )}
              {this.state.view === 'Friends' && <div>Friends</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
  // view rank agent
  _viewRole = user => {
    if (user.roles) {
      if (user.roles[0].name === 'coordinator') {
        return 'Transaction Coordinator'
      }
      if (user.roles[0].name === 'agent') {
        switch (user.rank) {
          case Rank.AGENT:
            return 'Agent'
          case Rank.EXECUTIVE_AGENT:
            return 'Executive Agent'
          case Rank.VICE_PRESIDENT:
            return 'Vice President'
          case Rank.PARTNER:
            return 'Agent'
          default:
            break
        }
      }
      if (user.roles[0].name === 'user') {
        return 'User'
      }
    }
  }
  // view tab about
  _viewAbout = () => {
    const { currentUser } = this.state
    if (currentUser.dateOfBirth) {
      var date = currentUser.dateOfBirth.split('-')
      var length = currentUser.dateOfBirth.split('-').length
      if (date[1] === '' || date[2] === '') {
        length--
      }
    }
    return (
      <>
        <div className='th-row'>
          <div className='col-6 th-pl-0'>
            <label className='th-title-up'>Phone</label>
            <p className='th-font-color'>{currentUser.phone || 'None'}</p>
          </div>
          <div className='col-6 th-pr-0 pl-2'>
            <label className='th-title-up'>date of birth</label>
            <p className='th-font-color'>
              {length && length === 3 ? currentUser.dateOfBirth : 'None'}
            </p>
          </div>
          <div className='col-12 col-sm-6 th-pl-0'>
            <label className='th-title-up'>email</label>
            <p className='th-font-color'>{currentUser.email}</p>
          </div>
          <div className='col-12 col-sm-6 th-pr-0 pl-0 pl-sm-2'>
            <label className='th-title-up'>location</label>
            <p className='th-font-color'>{currentUser.location || 'None'}</p>
          </div>
        </div>
        <div className='th-row'>
          <div className='col-12 th-pr-0 th-pl-0'>
            <label className='th-title-up'>position</label>
            <p className='th-font-color'>Link {this._viewRole(currentUser)}</p>
          </div>
        </div>
        <div className='th-row'>
          <div className='col-12 th-pr-0 th-pl-0'>
            <label className='th-title-up'>bio</label>
            <p className='th-font-color'>{currentUser.bio || 'None'}</p>
          </div>
        </div>
      </>
    )
  }
  // preview image
  _previewImage = image => {
    const img = document.querySelector('.avatar-image')
    if (image !== null) {
      const reader = new window.FileReader()
      reader.addEventListener('load', function () {
        const result = reader.result
        img.src = result
      })
      reader.readAsDataURL(image)
    }
    this.setState({
      isChangeAvatar: true
    })
  }
  // View edit profile
  _viewEditProfile = () => {
    const { currentUser } = this.state
    if (currentUser.dateOfBirth) {
      var day = currentUser.dateOfBirth.split('-')
    }
    if (!currentUser.firstName && currentUser.name) {
      var name = currentUser.name.split(' ')
    }

    const day1 = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
      <div className='w-form'>
        <Formik
          initialValues={{
            firstName: name ? name[0] : currentUser.firstName,
            lastName: name ? name[1] : currentUser.lastName,
            avatar: currentUser.avatar,
            coverImage: currentUser.coverImage,
            day: day ? day[0] : '',
            month: day ? day[1] : '',
            year: day ? day[2] : '',
            gender: currentUser.gender,
            company: currentUser.company,
            phone: currentUser.phone,
            location: currentUser.location,
            bio: currentUser.bio
          }}
          onSubmit={(values, action) => this.handleSubmit(values, action)}
          validate={values => {}}
        >
          {({
            values,
            isSubmitting,
            handleSubmit,
            handleChange,
            setFieldValue
          }) => (
            <form className='wf-form-profile' onSubmit={handleSubmit}>
              <div className='col-12 th-pl-0 mb-3'>
                <div className='custom-image'>
                  <input
                    type='file'
                    accept='image/*'
                    className='th-hidden check'
                    onChange={event => {
                      setFieldValue('avatar', event.currentTarget.files[0])
                      this._previewImage(event.currentTarget.files[0])
                    }}
                  />
                  <div className='gr-up'>
                    <img
                      src='/static/images/New/cloud.png'
                      alt=''
                      style={{
                        width: '25px',
                        height: '25px',
                        marginRight: '8px'
                      }}
                    />
                    <span className='th-color-blue th-font-w-5'>
                      Upload photo
                    </span>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Frist Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  placeholder='Add first name'
                  name='firstName'
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  name='lastName'
                  placeholder='Add last name'
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>
              <div className='form-group'>
                <label className='title-mini'>Date of Birth</label>
                <div className='row'>
                  <div className='col-12 col-md-4'>
                    <select
                      id='inputState'
                      className='form-control'
                      name='day'
                      onChange={handleChange}
                      value={values.day}
                    >
                      <option value=''>Day</option>
                      {day1.map((data, idx) => {
                        return (
                          <option value={data} key={idx}>
                            {data}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='col-12 col-md-4 mid-ver2'>
                    <select
                      id='inputState'
                      className='form-control'
                      name='month'
                      onChange={handleChange}
                      value={values.month}
                    >
                      <option value=''>Month</option>
                      {month.map((data, idx) => {
                        return (
                          <option value={data} key={idx}>
                            {data}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='col-12 col-md-4'>
                    <select
                      id='inputState'
                      className='form-control'
                      name='year'
                      onChange={handleChange}
                      value={values.year}
                    >
                      <option value=''>Year</option>
                      {this.state.year.map((data, idx) => {
                        return (
                          <option value={data} key={idx}>
                            {data}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Gender</label>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    id='gridRadios1'
                    onChange={() => setFieldValue('gender', 1)}
                    value={values.gender === 1}
                    defaultChecked={currentUser.gender === true}
                  />
                  <label className='form-check-label' htmlFor='gridRadios1'>
                    Male
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    id='gridRadios2'
                    onChange={() => setFieldValue('gender', 0)}
                    value={values.gender === 0}
                    defaultChecked={currentUser.gender === false}
                  />
                  <label className='form-check-label' htmlFor='gridRadios2'>
                    Female
                  </label>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Company Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  placeholder='Add company name'
                  name='company'
                  onChange={handleChange}
                  value={values.company}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Contact Email</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  placeholder='Add contact email'
                  name='email'
                  value={currentUser.email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Phone</label>
                <PhoneInput
                  country={'us'}
                  enableSearch
                  onChange={value => {
                    handleChange({
                      target: { name: 'phone', value }
                    })
                  }}
                  value={values.phone}
                  placeholder='Add phone'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Location</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  placeholder='Add location'
                  name='location'
                  onChange={handleChange}
                  value={values.location}
                />
              </div>
              <div className='form-group'>
                <label>Bio</label>
                <textarea
                  className='form-control'
                  placeholder='Add bio'
                  rows={3}
                  name='bio'
                  onChange={handleChange}
                  value={values.bio}
                />
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  className='btn btn-add-new mb-5 text-white th-button-save'
                  //   disabled={isSubmitting || !isValid}
                >
                  {isSubmitting && (
                    <span className='spinner-border spinner-border-sm mr-2' />
                  )}
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    )
  }

  // get year
  _getYear = date => {
    const data = new Date(date)
    const year = data.getFullYear(data)
    return year
  }
  componentDidMount () {
    this._randomYear()
  }
  _randomYear = () => {
    var arr = []
    for (let i = 1900; i <= 2021; i++) {
      arr = [...arr, i]
    }
    this.setState({
      year: arr
    })
  }
  // View card right
  _viewInfoRight = () => {
    const { commissionTotal } = this.props
    return (
      <div
        className='col-12 col-md-4'
        style={{ paddingLeft: '10px', paddingRight: '10px' }}
      >
        <div className='section-inner'>
          <div className='card-m'>
            <div className='avatar-p'>
              {this.state.currentUser.avatar ? (
                <img
                  className='image-pr'
                  src={this.state.currentUser.avatar}
                  alt=''
                />
              ) : (
                <img
                  className='image-pr'
                  src='/static/images/default-avatar.png'
                  alt=''
                />
              )}
            </div>
            <h5 className='profile-name text-center'>
              {this.state.currentUser.firstName
                ? this.state.currentUser.firstName.concat(
                  ' ',
                  this.state.currentUser.lastName
                )
                : this.state.currentUser.name}
            </h5>
            <div className='text-center th-22'>
              Link {this._viewRole(this.state.currentUser)}
            </div>
            <div className='profile-social text-center'>
              <a
                href='https://www.facebook.com/'
                className='social-link social-link--fb w-inline-block'
              />
              <a
                href='https://twitter.com'
                className='social-link social-link--twitter w-inline-block'
              />
              <a
                href='https://www.instagram.com/'
                className='social-link social-link--insta w-inline-block'
              />
            </div>
            <div className='row mx-0 th-card-x border-top'>
              <div className='text-center col-4 border-right px-0'>
                <div className='profile-card-col'>
                  <div className='profile-card-col-number'>
                    {this._getYear(this.state.currentUser.createdAt)}
                  </div>
                  <div className='hint'>Joined</div>
                </div>
              </div>
              <div className='text-center border-right col-4 px-0'>
                <div className='profile-card-col'>
                  <div className='profile-card-col-number'>
                    {commissionTotal.count}
                  </div>
                  <div className='hint'>Homes Sold</div>
                </div>
              </div>
              <div className='text-center col-4 px-0'>
                <div className='profile-card-col'>
                  <div className='profile-card-col-number'>0</div>
                  <div className='hint'>Agents Refered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-inner'>
          <div className='card no-padding' />
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className='box-main'>
        <Head>
          <title>Profiles</title>
        </Head>

        <div className='row'>
          {this._viewInfoLeft()}
          {this._viewInfoRight()}
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

export default userOnly(ProfilePage)
