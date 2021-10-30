import React, { useEffect, useRef, useState } from 'react'
import { some, orderBy } from 'lodash'
import getConfig from 'next/config'
import { Document, Page } from 'react-pdf'
import classnames from 'classnames'
import PreviewModal from '../TransactionFilesPage/PreviewModal'
import { ACTION_TYPE } from '../../view-models/Transaction'
import {
  DataAccessType,
  DocumentActionStatus,
  DocumentSpecies
} from '../../../common/models/Transaction'

const { publicRuntimeConfig } = getConfig()
const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`

const TransactionEnvelopes = ({ documentAction, listDocument }) => {
  const pdfRef = useRef(null)
  const [document, setDocument] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    let temp = []
    listDocument.forEach(doc => {
      if (documentAction[doc.id] && documentAction[doc.id].length > 0) {
        let action = 'complete'
        let order = 4

        if (
          some(documentAction[doc.id], { status: DocumentActionStatus.TODO })
        ) {
          // ===== Sign -> Review -> View ===== //
          if (
            some(documentAction[doc.id], {
              action: DataAccessType.SIGN_DOCUMENT,
              status: DocumentActionStatus.TODO
            })
          ) {
            action = DataAccessType.SIGN_DOCUMENT
            order = 1
          } else if (
            some(documentAction[doc.id], {
              action: DataAccessType.REVIEW_DOCUMENT,
              status: DocumentActionStatus.TODO
            })
          ) {
            action = DataAccessType.REVIEW_DOCUMENT
            order = 2
          } else {
            action = DataAccessType.VIEW_ONLY
            order = 3
          }
        }

        const actionData = documentAction[doc.id].find(
          item => item.data && item.data.uri
        )

        const paths = doc.uri.split('/')
        temp.push({
          ...doc,
          documentType:
            paths[paths.length - 2] === 'envelopes' && DocumentSpecies.ENVELOPE,
          signId: actionData && actionData.id,
          action,
          order
        })
      }
    })

    setData(orderBy(temp, 'order', 'asc'))
  }, [documentAction, listDocument])

  const getLinkToDownload = document => {
    if (document.signId) {
      return `${API_BASE_URL}/documentActions/${document.signId}/download`
    }
    if (document.documentType === DocumentSpecies.ENVELOPE) {
      return `${API_BASE_URL}/documents/${document.id}/download-envelope`
    }
    return `${API_BASE_URL}/documents/${document.id}/download`
  }

  return (
    <>
      {data.map((document, index) => (
        <div key={`document-${index}`} className='col-md-4 mt-4'>
          <div className='card rounded shadow-sm h-100'>
            <div className='card-body d-flex flex-column justify-content-between pdf-set'>
              <div
                ref={pdfRef}
                className='u-clickable app-document-card'
                onClick={() => setDocument(document)}
              >
                {pdfRef.current && (
                  <Document file={getLinkToDownload(document)}>
                    <Page pageNumber={1} width={pdfRef.current.clientWidth} />
                  </Document>
                )}
              </div>
              <div>
                <button
                  type='button'
                  className={classnames(
                    'btn w-100 my-3',
                    {
                      'btn--light-red':
                        document.action === DataAccessType.SIGN_DOCUMENT
                    },
                    {
                      'btn--light-yellow':
                        document.action === DataAccessType.VIEW_ONLY ||
                        document.action === DataAccessType.REVIEW_DOCUMENT
                    },
                    { 'btn--light-green': document.action === 'complete' }
                  )}
                  style={{ borderRadius: 8 }}
                >
                  {ACTION_TYPE[document.action] || 'Complete'}
                </button>
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
      ))}
      {document && (
        <PreviewModal toggle={() => setDocument(null)} document={document} />
      )}
    </>
  )
}

export default TransactionEnvelopes
