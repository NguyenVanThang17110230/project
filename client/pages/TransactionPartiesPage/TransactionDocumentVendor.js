import React, { useRef, useState } from 'react'
import getConfig from 'next/config'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Document, Page } from 'react-pdf'
import PreviewModal from '../TransactionFilesPage/PreviewModal'

const { publicRuntimeConfig } = getConfig()
const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`

const ViewImage = ({ modal, toggle, data }) => {
  return (
    <Modal className='view-image-vendor' isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} />
      <ModalBody>
        <img src={`${data.uri}`} alt='' style={{ objectFit: 'cover' }} />
      </ModalBody>
    </Modal>
  )
}

const TransactionDocumentVendor = ({ listDocument }) => {
  const [document, setDocument] = useState(null)
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState(null)
  const toggle = () => setModal(!modal)
  const ViewImageMain = data => {
    setImage(data)
    setModal(true)
  }
  const pdfRef = useRef(null)
  const checkType = data => {
    if (data) {
      if (data.uri) {
        let type = data.uri.split('.').pop()
        switch (type) {
          case 'jpg':
            return 'image'
          case 'png':
            return 'image'
          case 'jpeg':
            return 'image'
          case 'gif':
            return 'image'
          case 'bmp':
            return 'image'
          case 'mp4':
            return 'video'
          case 'avi':
            return 'video'
          case 'm4v':
            return 'video'
          case 'mov':
            return 'video'
          case 'mpg':
            return 'video'
          case 'flv':
            return 'video'
          case 'wmv':
            return 'video'
          case 'pdf':
            return 'application'
          default:
            break
        }
      }
    }
  }
  const viewName = () => {
    const link = listDocument.map(x => x.linkDocument)
    if (link) {
      if (link.length > 0) {
        return link[0]
      }
    }
  }
  return (
    <>
      <div
        className='row ml-0 mr-0 h-auto'
        style={{ paddingLeft: '10px', paddingRight: '10px', marginTop: '30px' }}
      >
        <div className='card rounded shadow-sm p-4'>
          <h2 className='title font-weight-bold' style={{ fontSize: '26px' }}>
            Vendors
          </h2>
          <p className='mt-3 th-a th-color-blue'>{viewName()}</p>
          <div className='col-12 pl-0 pr-0'>
            <div className='row'>
              {listDocument.map((data, index) => {
                if (checkType(data) === 'image') {
                  return (
                    <div
                      className='col-12 col-md-4 col-xl-3 mb-3'
                      style={{ height: '360px' }}
                      key={index}
                      onClick={() => ViewImageMain(data)}
                    >
                      <img
                        src={`${data.uri}`}
                        alt=''
                        style={{
                          objectFit: 'cover',
                          cursor: 'pointer',
                          border: '1px solid rgba(0, 0, 0, 0.2)'
                        }}
                      />
                    </div>
                  )
                }
                if (checkType(data) === 'video') {
                  return (
                    <div
                      className='col-12 col-md-4 col-xl-3 mb-3'
                      style={{ height: '360px' }}
                      key={index}
                    >
                      <video
                        playsInline
                        controls
                        className='h-100 w-100'
                        style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}
                      >
                        <source src={`${data.uri}`} type='video/mp4' />
                      </video>
                    </div>
                  )
                }
                if (checkType(data) === 'application') {
                  return (
                    <div
                      className='col-12 col-md-4 col-xl-3 mb-3 pdf-set'
                      style={{ height: '360px' }}
                      key={index}
                    >
                      <div
                        ref={pdfRef}
                        className='u-clickable app-document-card'
                        onClick={() => setDocument(data)}
                      >
                        {pdfRef.current && (
                          <Document
                            file={`${API_BASE_URL}/documents/${
                              data.id
                            }/download`}
                          >
                            <Page
                              pageNumber={1}
                              width={pdfRef.current.clientWidth}
                            />
                          </Document>
                        )}
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {document && (
        <PreviewModal toggle={() => setDocument(null)} document={document} />
      )}
      {image && <ViewImage modal={modal} toggle={toggle} data={image} />}
    </>
  )
}

export default TransactionDocumentVendor
