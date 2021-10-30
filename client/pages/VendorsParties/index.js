import React, { Component } from 'react'
import { transactionService } from '../../services'
import toastr from 'toastr'
import Slider from 'react-slick'
import { MAX_FILE_SIZE } from '../../../common/models/Transaction'
class VendorsParties extends Component {
  constructor (props) {
    super(props)
    this.state = {
      file: [],
      dataDocument: [],
      linkDocument: '',
      dataInvitation: [],
      src: '',
      isSubmitFile: false,
      dataTransaction: [],
      settings: {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  }

  componentDidMount () {
    this._getDataByInvitationId()
  }
  // componentDidUpdate(prevState){
  //     if(prevState.file !== this.state.file){
  //         if(this.state.file.length > 0){
  //             this._viewImage()
  //         }
  //     }
  // }
  _getDataByInvitationId = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const invitationId = urlParams.get('invitationId')
    const dataInvitation = await transactionService.getInvitationById(
      invitationId
    )
    const dataTransaction = await transactionService.getTransactionsDetailByTransactionId(
      dataInvitation.transactionId
    )
    const dataDocument = await transactionService.getAllDocumentVendorByTransactionId(
      dataInvitation.transactionId
    )
    if (dataInvitation) {
      this.setState({
        dataInvitation,
        dataDocument,
        dataTransaction
      })
    }
  }

  _setStep1 = () => {
    const step1 = document.getElementById('c-step1')
    const step2 = document.getElementById('c-step2')
    const textStep1 = document.getElementById('text-step-1')
    const textStep2 = document.getElementById('text-step-2')
    step1.classList.remove('current-c')
    step2.classList.add('current-c')
    textStep1.classList.remove('current-v')
    textStep2.classList.add('current-v')
    textStep1.classList.add('current-final')
  }

  _setStep2 = () => {
    const step2 = document.getElementById('c-step2')
    const step3 = document.getElementById('c-step3')
    const textStep2 = document.getElementById('text-step-2')
    const textStep3 = document.getElementById('text-step-3')
    step2.classList.remove('current-c')
    step3.classList.add('current-c')
    textStep2.classList.remove('current-v')
    textStep3.classList.add('current-v')
    textStep2.classList.add('current-final')
  }

  _setStep3 = () => {
    const step3 = document.getElementById('c-step3')
    const step4 = document.getElementById('c-step4')
    const textStep3 = document.getElementById('text-step-3')
    const textStep4 = document.getElementById('text-step-4')
    step3.classList.remove('current-c')
    step4.classList.add('current-c')
    textStep3.classList.remove('current-v')
    textStep4.classList.add('current-v')
    textStep3.classList.add('current-final')
  }

  _setStep4 = () => {
    const step4 = document.getElementById('c-step4')
    const step3 = document.getElementById('c-step3')
    const textStep4 = document.getElementById('text-step-4')
    const textStep3 = document.getElementById('text-step-3')
    step4.classList.remove('current-c')
    step3.classList.add('current-c')
    textStep4.classList.remove('current-v')
    textStep3.classList.remove('current-final')
    textStep3.classList.add('current-v')
  }

  _setStep5 = () => {
    const step4 = document.getElementById('c-step4')
    const step5 = document.getElementById('c-step5')
    const textStep4 = document.getElementById('text-step-4')
    step4.classList.remove('current-c')
    step5.classList.add('current-c')
    textStep4.classList.add('current-final')
    textStep4.classList.add('current-v')
  }

  _checkTypeFile = file => {
    const type = file.type.split('/', 1)
    switch (type[0]) {
      case 'image':
        return 'image'
      case 'application':
        return 'application'
      case 'video':
        return 'video'
      default:
        break
    }
  }

  _viewImage = image => {
    if (image) {
      const result = URL.createObjectURL(image)
      return (
        <img
          className='preview-image-vendor'
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #80808029',
            objectFit: 'cover'
          }}
          src={result}
          alt=''
        />
      )
    }
  }

  _viewVideo = video => {
    if (video) {
      const result = URL.createObjectURL(video)
      return (
        <video
          className='preview-video'
          src={result}
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #80808029'
          }}
        />
      )
    }
  }

  _viewPdf = pdf => {
    if (pdf) {
      return (
        <img
          className='view-pdf'
          src='../../static/images/pdf-icon.png'
          alt=''
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #80808029'
          }}
        />
      )
    }
  }

  _updateFormField = field => e => this.setState({ [field]: e.target.value })
  handleChangeFile = field => event => {
    const dataFile = [...event.target.files]
    let dataSuc = []
    dataFile.map((data, index) => {
      if (index < dataFile.length) {
        if (data.size > MAX_FILE_SIZE) {
          toastr.error(`${data.name} has exceeded the allowed size`)
        } else {
          dataSuc.push(data)
        }
      }
    })
    this.setState({ [field]: [...this.state.file, ...dataSuc] })
  }

  _onDeleteByIndex = index => {
    const files = [...this.state.file]
    files.splice(index, 1)
    this.setState({
      file: files
    })
  }

  _isUploadFile = () => {
    const submit = document.getElementById('submitVendor')
    if (submit) {
      submit.disabled = true
    }
  }

  _uploadFile = async e => {
    e.preventDefault()
    const { dataInvitation, file, linkDocument } = this.state
    if (file.length < 1 && linkDocument === '') {
      toastr.warning('Please enter the link or select the file')
    } else {
      if (file && file.length > 0) {
        this._isUploadFile()
        for (const value of file) {
          try {
            await transactionService.createFileDocument({
              file: value,
              role: dataInvitation.role,
              transactionId: dataInvitation.transactionId,
              url: linkDocument
            })
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
        await this.setState({
          isSubmitFile: false
        })
        await toastr.success('Success')
        await this._setStep5()
      } else {
        try {
          await transactionService.createFileDocument({
            role: dataInvitation.role,
            transactionId: dataInvitation.transactionId,
            url: linkDocument
          })
          toastr.success('Success')
          this._setStep5()
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
  }
  _viewName = () => {
    const { dataInvitation } = this.state
    if (dataInvitation) {
      if (dataInvitation.firstName && dataInvitation.lastName) {
        return dataInvitation.firstName.concat(' ', dataInvitation.lastName)
      }
    }
  }

  render () {
    const { dataTransaction, isSubmitFile } = this.state
    return (
      <div>
        <div className='row vendor-page'>
          <div className='vendor-page_left col-sm-4 d-flex justify-content-center align-items-center p-4'>
            <div className='w-100 ml-2 mr-2'>
              <img
                className='img-left mb-5'
                src='../static/images/New/new-link-white.png'
              />
              {this.state.dataDocument.length === 0 ? (
                <div className='vvv text-white'>
                  <div id='text-step-1' className='step1 d-flex current-v'>
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='name-v th-font-w-5'>Step 1</h6>
                      <span className='content th-font-w-4'>Welcome</span>
                    </div>
                  </div>
                  <div id='text-step-2' className='step2 d-flex'>
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='th-font-w-5'>Step 2</h6>
                      <span className='content th-font-w-4'>
                        Confirm Property
                      </span>
                    </div>
                  </div>
                  <div id='text-step-3' className='step3 d-flex'>
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='th-font-w-5'>Step 3</h6>
                      <span className='content th-font-w-4'>
                        Upload Documents
                      </span>
                    </div>
                  </div>
                  <div id='text-step-4' className='step4 d-flex'>
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='th-font-w-5'>Step 4</h6>
                      <span className='content th-font-w-4'>
                        Review and Confirm
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='vvv text-white'>
                  <div id='text-step-1' className='step1 d-flex current-final'>
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='name-v th-font-w-5'>Step 1</h6>
                      <span className='content th-font-w-4'>Welcome</span>
                    </div>
                  </div>
                  <div id='text-step-2' className='step2 d-flex current-final'>
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='th-font-w-5'>Step 2</h6>
                      <span className='content th-font-w-4'>
                        Confirm Property
                      </span>
                    </div>
                  </div>
                  <div id='text-step-3' className='step3 d-flex current-final'>
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='th-font-w-5'>Step 3</h6>
                      <span className='content th-font-w-4'>
                        Upload Documents
                      </span>
                    </div>
                  </div>
                  <div
                    id='text-step-4'
                    className='step4 d-flex current-v current-final'
                  >
                    <div className='th-circle-sec'>
                      <i class='fa fa-check' aria-hidden='true' />
                    </div>
                    <div className='ml-3'>
                      <h6 className='th-font-w-5'>Step 4</h6>
                      <span className='content th-font-w-4'>
                        Review and Confirm
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='vendor-page_right col-sm-8'>
            {this.state.dataDocument.length === 0 ? (
              <form
                className='no-shadow'
                role='form'
                onSubmit={this._uploadFile}
              >
                <div
                  id='c-step1'
                  className='d-flex align-items-center justify-content-center w-100 h-100 flex-column page-big-1 current-c'
                >
                  <img
                    className='logo'
                    src='../static/images/New/new-link.png'
                  />
                  <div className='card mt-4 text-center step-cart'>
                    <h3 className='th-font-w-5 mb-5'>
                      Welcome {this._viewName()}
                    </h3>
                    <p className='mb-5 th-font-w-4'>
                      Confirm your property and upload your files.
                    </p>
                    <div
                      className='btn btn-add-new text-white th-font-w-5 mb-3'
                      onClick={() => this._setStep1()}
                    >
                      Continue
                    </div>
                  </div>
                </div>
                <div
                  id='c-step2'
                  className='d-flex align-items-center justify-content-center w-100 h-100 flex-column page-big-2'
                >
                  <img
                    className='logo'
                    src='../static/images/New/new-link.png'
                  />
                  <div className='card mt-4 text-center step-cart'>
                    <h3 className='th-font-w-5 mb-2'>Confirm Property</h3>
                    <p className='mb-3 th-font-w-4'>
                      Below are the properties associated with your email.
                      Please confirm the property you will be uploading the
                      documents for
                    </p>
                    <div
                      className='card'
                      style={{ boxShadow: '0 1px 5px 0 #ebedf0' }}
                    >
                      <img
                        src={
                          dataTransaction.imageURL !== ''
                            ? dataTransaction.imageURL
                            : '/static/images/image-default.png'
                        }
                        style={{ maxHeight: '165px', objectFit: 'cover' }}
                      />
                      <p className='mt-2 text-body'>
                        {dataTransaction.address}
                      </p>
                    </div>
                    <div
                      className='btn btn-add-new text-white th-font-w-5 mb-3'
                      onClick={() => this._setStep2()}
                    >
                      Continue
                    </div>
                  </div>
                </div>
                <div
                  id='c-step3'
                  className='d-flex align-items-center justify-content-center w-100 h-100 flex-column page-big-3'
                >
                  <img
                    className='logo'
                    src='../static/images/New/new-link.png'
                  />
                  <div className='card mt-4 text-center step-cart'>
                    <h3 className='th-font-w-5 mb-2'>Upload Documents</h3>
                    <p className='mb-3 th-font-w-4'>
                      Upload your documents or add your data link here below.
                      (Google Drive/Dropbox/Matterport)
                    </p>
                    <div className='form-group text-left mt-3 mb-2'>
                      <label className='tittle-mini-ver'>Web Link</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Type link here'
                        name='linkDocument'
                        onChange={this._updateFormField('linkDocument')}
                      />
                    </div>
                    <div className='upload-vendor'>
                      <input
                        className='file-up'
                        type='file'
                        name='file'
                        onChange={this.handleChangeFile('file')}
                        multiple
                      />
                      <h3 className='title-up'>Upload Files Here</h3>
                    </div>
                    <div className='slide-vendor'>
                      <Slider {...this.state.settings}>
                        {this.state.file.length > 0 &&
                          this.state.file.map((data, index) => {
                            if (this._checkTypeFile(data) === 'image') {
                              return (
                                <div
                                  className='slide-min'
                                  key={index}
                                  style={{ minHeight: '90px' }}
                                >
                                  {this._viewImage(data)}
                                  <div
                                    className='th-rou'
                                    onClick={() => this._onDeleteByIndex(index)}
                                  >
                                    x
                                  </div>
                                </div>
                              )
                            }
                            if (this._checkTypeFile(data) === 'application') {
                              return (
                                <div className='slide-min' key={index}>
                                  {this._viewPdf(data)}
                                  <div
                                    className='th-rou'
                                    onClick={() => this._onDeleteByIndex(index)}
                                  >
                                    x
                                  </div>
                                </div>
                              )
                            }
                            if (this._checkTypeFile(data) === 'video') {
                              return (
                                <div
                                  className='slide-min'
                                  key={index}
                                  style={{ minHeight: '90px' }}
                                >
                                  {this._viewVideo(data)}
                                  <div
                                    className='th-rou'
                                    onClick={() => this._onDeleteByIndex(index)}
                                  >
                                    x
                                  </div>
                                  <div className='play-ven'>
                                    <i class='fa fa-play' aria-hidden='true' />
                                  </div>
                                </div>
                              )
                            }
                          })}
                      </Slider>
                    </div>
                    <div
                      className='btn btn-add-new text-white th-font-w-5 mb-3'
                      onClick={() => this._setStep3()}
                    >
                      Continue
                    </div>
                  </div>
                </div>
                <div
                  id='c-step4'
                  className='d-flex align-items-center justify-content-center w-100 h-100 flex-column page-big-4'
                >
                  <img
                    className='logo'
                    src='../static/images/New/new-link.png'
                  />
                  <div className='card mt-4 text-center step-cart'>
                    <h3 className='th-font-w-5 mb-4'>Review and Confirm</h3>
                    <div className='slide-vendor'>
                      <Slider {...this.state.settings}>
                        {this.state.file.length > 0 &&
                          this.state.file.map((data, index) => {
                            if (this._checkTypeFile(data) === 'image') {
                              return (
                                <div
                                  className='slide-min'
                                  key={index}
                                  style={{ minHeight: '90px' }}
                                >
                                  {this._viewImage(data)}
                                </div>
                              )
                            }
                            if (this._checkTypeFile(data) === 'application') {
                              return (
                                <div className='slide-min' key={index}>
                                  {this._viewPdf(data)}
                                </div>
                              )
                            }
                            if (this._checkTypeFile(data) === 'video') {
                              return (
                                <div
                                  className='slide-min'
                                  key={index}
                                  style={{ minHeight: '90px' }}
                                >
                                  {this._viewVideo(data)}
                                  <div className='play-ven'>
                                    <i class='fa fa-play' aria-hidden='true' />
                                  </div>
                                </div>
                              )
                            }
                          })}
                      </Slider>
                    </div>
                    <div
                      className='btn btn-add-new btn-edit text-white th-font-w-5 mb-3'
                      onClick={() => this._setStep4()}
                    >
                      Edit
                    </div>
                    <button
                      id='submitVendor'
                      type='submit'
                      className='btn btn-add-new text-white th-font-w-5 mb-3'
                      onClick={() => this.setState({ isSubmitFile: true })}
                    >
                      {isSubmitFile ? (
                        <span className='spinner-border spinner-border-sm text-white mr-2' />
                      ) : null}
                      Upload
                    </button>
                  </div>
                </div>
                <div
                  id='c-step5'
                  className='d-flex align-items-center justify-content-center w-100 h-100 flex-column page-big-5'
                >
                  <img
                    className='logo'
                    src='../static/images/New/new-link.png'
                  />
                  <div
                    className='card mt-4 text-center step-cart'
                    style={{ width: '500px' }}
                  >
                    <h3 className='th-font-w-5 mb-4'>Thank you!</h3>
                    <p className='mb-5 th-font-w-4'>
                      Your submission was received.
                    </p>
                  </div>
                </div>
              </form>
            ) : (
              <div
                id='c-step5'
                className='d-flex align-items-center justify-content-center w-100 h-100 flex-column page-big-5 current-c'
              >
                <img className='logo' src='../static/images/New/new-link.png' />
                <div
                  className='card mt-4 text-center step-cart'
                  style={{ width: '500px' }}
                >
                  <h3 className='th-font-w-5 mb-4'>Thank you!</h3>
                  <p className='mb-5 th-font-w-4'>
                    Your submission was received.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default VendorsParties
