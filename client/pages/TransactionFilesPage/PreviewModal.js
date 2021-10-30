import React from 'react'
import _ from 'lodash'
import { Modal } from 'reactstrap'
import { Document, Page } from 'react-pdf'
import toastr from 'toastr'
import getConfig from 'next/config'
import { DocumentSpecies } from '../../../common/models/Transaction'

const { publicRuntimeConfig } = getConfig()
const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`

export default class PreviewModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
      width: 0,
      isAgree: false,
      isSubmitting: false
    }
  }

  onConfirm = async () => {
    const { handleConfirm, toggle } = this.props
    try {
      this.setState({ isSubmitting: true })
      await handleConfirm()
      toastr.success('Success')
      toggle()
    } catch (e) {
      toastr.error(e.message)
    } finally {
      this.setState({ isSubmitting: false })
    }
  }

  getLinkToDownload = document => {
    if (document.signId) {
      return `${API_BASE_URL}/documentActions/${document.signId}/download`
    }
    if (document.documentType === DocumentSpecies.ENVELOPE) {
      return `${API_BASE_URL}/documents/${document.id}/download-envelope`
    }
    return `${API_BASE_URL}/documents/${document.id}/download`
  }

  render () {
    const { toggle, document, actionId } = this.props
    const { isAgree, isSubmitting } = this.state

    return (
      <Modal isOpen={!!document} id='new-transaction-modal' toggle={toggle}>
        <div className='modal-header'>
          <div>
            <a
              type='button'
              href={this.getLinkToDownload(document)}
              target='_blank'
              className='btn btn-sm btn-add-new text-white ml-2'
            >
              <i className='fas fa-download' />
            </a>
          </div>
          <div className='h4'>Preview document</div>
          <div>
            <button
              type='button'
              className='close bg-transparent'
              data-dismiss='modal'
              onClick={toggle}
            >
              &times;
            </button>
          </div>
        </div>
        <div className='modal-body'>
          <div className='text-center'>
            <h3>
              <b>{document.title || ''}</b>
            </h3>
          </div>
          <div ref={that => (this.refsDoc = that)}>
            <Document
              // file={
              //   this.props.documentStatus
              //     ? `${API_BASE_URL}/documentActions/${
              //       this.props.documentId
              //     }/download`
              //     : `${API_BASE_URL}/documents/${this.props.documentId}/download`
              // }

              file={this.getLinkToDownload(document)}
              onLoadSuccess={this._onDocumentLoadSuccess}
            >
              {_.range(this.state.numPages).map(pageNumber => (
                <Page
                  key={`page_${pageNumber + 1}`}
                  pageNumber={pageNumber + 1}
                  width={this.state.width}
                />
              ))}
            </Document>
            {/* <p>
            Page {this.state.pageNumber} of {this.state.numPages}
          </p> */}
          </div>

          {/* ===== Confirmed read ===== */}
          {actionId && (
            <div className='modal-footer'>
              <div className='form-check text-left'>
                <input
                  type='checkbox'
                  id='previewed'
                  className='form-check-input'
                  value={isAgree}
                  onChange={() => this.setState({ isAgree: !isAgree })}
                />
                <label htmlFor='previewed' className='form-check-label'>
                  Agree with the content of this document
                </label>
              </div>
              <div>
                <button
                  type='button'
                  className='btn btn-add-new text-white'
                  disabled={!isAgree || isSubmitting}
                  onClick={() => this.onConfirm()}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    )
  }

  _onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages,
      width: this.refsDoc.offsetWidth
    })
  }
}
