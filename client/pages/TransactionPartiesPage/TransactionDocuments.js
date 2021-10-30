import React, { useRef, useState } from 'react'
import getConfig from 'next/config'
import { Document, Page } from 'react-pdf'
import PreviewModal from '../TransactionFilesPage/PreviewModal'
import { TransactionRole } from '../../../common/models/Transaction'

const { publicRuntimeConfig } = getConfig()
const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`

const TransactionDocuments = ({ listDocument }) => {
  const [document, setDocument] = useState(null)
  const pdfRef = useRef(null)

  return (
    <>
      {listDocument.map(
        (document, index) =>
          document.role !== TransactionRole.VENDORS && (
            <div key={`document-${index}`} className='col-md-4 mt-4'>
              <div className='card rounded shadow-sm h-100'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div
                    ref={pdfRef}
                    className='u-clickable app-document-card'
                    onClick={() => setDocument(document)}
                  >
                    {pdfRef.current && (
                      <Document
                        file={`${API_BASE_URL}/documents/${
                          document.id
                        }/download`}
                      >
                        <Page
                          pageNumber={1}
                          width={pdfRef.current.clientWidth}
                        />
                      </Document>
                    )}
                  </div>
                  <div className='mt-2'>
                    <h6 className='mb-2' style={{ fontWeight: 500 }}>
                      {document.title}
                    </h6>
                    {document.party && (
                      <>
                        <div className='app-badge app-badge--light'>
                          {document.party.name}
                        </div>
                        <div className='mt-3'>
                          <img
                            alt='avatar'
                            src={
                              document.party.avatar ||
                              '/static/images/default-avatar.png'
                            }
                            className='rounded-circle'
                            style={{ height: 30, width: 30 }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
      )}
      {document && (
        <PreviewModal toggle={() => setDocument(null)} document={document} />
      )}
    </>
  )
}

export default TransactionDocuments
