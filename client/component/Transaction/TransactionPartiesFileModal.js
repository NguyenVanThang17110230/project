import React, { Component, useRef } from 'react'
import { Modal } from 'reactstrap'
import { Document, Page } from 'react-pdf'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`
const TransactionDocument = ({ dataDocument }) => {
  const pdfRef = useRef(null)

  const getLinkToDownload = document => {
    const paths = document.uri.split('/')
    const folder = paths[paths.length - 2]
    if (folder === 'documents') {
      return `${API_BASE_URL}/documents/${document.id}/download`
    } else if (folder === 'envelopes') {
      return `${API_BASE_URL}/documents/${document.id}/download-envelope`
    } else {
      return `${API_BASE_URL}/documentActions/${document.id}/download`
    }
  }

  return (
    <>
      {dataDocument.map((document, index) => (
        <div key={`document-${index}`} className='col-md-4 mt-4'>
          <div className='card rounded shadow-sm h-100'>
            <div className='card-body d-flex flex-column justify-content-between'>
              <div
                ref={pdfRef}
                className='u-clickable'
                style={{ cursor: 'default' }}
              >
                {pdfRef.current && (
                  <Document file={getLinkToDownload(document)}>
                    <Page pageNumber={1} width={pdfRef.current.clientWidth} />
                  </Document>
                )}
              </div>
              <div className='mt-2'>
                <h6 className='mb-2' style={{ fontWeight: 500 }}>
                  {document.title}
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
class TransactionPartiesFileModal extends Component {
  render () {
    const { isShowPartiesFile, toggleModal, dataDocument } = this.props
    return (
      <Modal isOpen={isShowPartiesFile} toggle={toggleModal}>
        <div className='page-button-new' style={{ backgroundColor: '#f6f7f9' }}>
          <div className='form-add-member'>
            <div className='modal-header modal-header--change' id='bg-gr'>
              <div className='text-center w-100'>
                <h5 className='modal-title new-add' id='exampleModalLabel'>
                  Files
                </h5>
              </div>
              <div>
                <button
                  id='close-modal'
                  type='button'
                  className='close bg-transparent'
                  data-dismiss='modal'
                  onClick={() => toggleModal()}
                >
                  &times;
                </button>
              </div>
            </div>
            {dataDocument.length > 0 ? (
              <div className='container mt-2 mb-4'>
                <div className='row'>
                  <TransactionDocument dataDocument={dataDocument} />
                </div>
              </div>
            ) : (
              <div className='container mt-3 mb-3' style={{ fontSize: '20px' }}>
                No documents
              </div>
            )}
          </div>
        </div>
      </Modal>
    )
  }
}

export default TransactionPartiesFileModal
