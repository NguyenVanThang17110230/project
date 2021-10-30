import React, { useEffect, useRef, useState } from 'react'
import getConfig from 'next/config'
import { Document, Page } from 'react-pdf'
import PreviewModal from '../TransactionFilesPage/PreviewModal'
import { ACTION_TYPE } from '../../view-models/Transaction'
import {
  DataAccessType,
  DocumentActionStatus,
  DocumentSpecies,
  TransactionStatus
} from '../../../common/models/Transaction'
import { transactionService } from '../../services'

const { publicRuntimeConfig } = getConfig()
const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`

const TransactionDocumentActions = ({
  documentActions,
  listDocument,
  currentParty,
  reFetchData,
  transactionStatus
}) => {
  const pdfRef = useRef(null)
  const [documentActionList, setDocumentActionList] = useState(documentActions)
  const [document, setDocument] = useState(null)
  const [actionId, setActionId] = useState(null)
  const [actionHandling, setActionHandling] = useState(null)
  const [data, setData] = useState([])

  const fetchData = actions => {
    let documentInfo = {}
    listDocument.forEach(doc => {
      documentInfo[doc.id] = doc
    })

    let temp = []
    actions.forEach(item => {
      if (documentInfo[item.documentId]) {
        const paths = documentInfo[item.documentId].uri.split('/')
        temp.push({
          ...item,
          document: {
            ...documentInfo[item.documentId],
            documentType:
              paths[paths.length - 2] === 'envelopes' &&
              DocumentSpecies.ENVELOPE
          }
        })
      }
    })

    setData(temp)
  }

  useEffect(() => {
    fetchData(documentActionList)
  }, [])

  const handleSign = async item => {
    const res = await transactionService.getSignLink(
      item.documentId,
      item.envelopeId,
      currentParty
    )
    if (res && res.url) {
      if (window) {
        window.open(res.url, '_blank')
      }
    }
  }

  const handleConfirm = async actionId => {
    await transactionService.makeDoneDocumentAction(actionId)
    const { documentActionsByPartyId } = await reFetchData()
    fetchData(documentActionsByPartyId)
    setDocumentActionList(documentActionsByPartyId)
  }

  const handleClick = async item => {
    setActionHandling(item.id)
    switch (item.action) {
      case DataAccessType.VIEW_ONLY:
        setDocument(item.document)
        setActionId(item.id)
        break

      case DataAccessType.REVIEW_DOCUMENT:
        setDocument(item.document)
        setActionId(item.id)
        break

      case DataAccessType.SIGN_DOCUMENT:
        item.envelopeId && (await handleSign(item))
        break
    }
    setActionHandling(null)
  }

  const buttonInfo = item => {
    if (item.status === DocumentActionStatus.TODO) {
      switch (item.action) {
        case DataAccessType.SIGN_DOCUMENT:
          return {
            classnames: 'btn--red',
            label: ACTION_TYPE[item.action]
          }
        default:
          return {
            classnames: 'btn--yellow',
            label: ACTION_TYPE[item.action]
          }
      }
    }

    if (item.status === DocumentActionStatus.DONE) {
      switch (item.action) {
        case DataAccessType.SIGN_DOCUMENT:
          return {
            classnames: 'btn--light-red',
            label: 'Signed'
          }
        default:
          return {
            classnames: 'btn--light-yellow',
            label: ACTION_TYPE[item.action] + 'ed'
          }
      }
    }
  }

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
      {data.map((item, index) => {
        const button = buttonInfo(item)
        return (
          <div key={`document-${index}`} className='col-md-4 mt-4'>
            <div className='card rounded shadow-sm h-100'>
              <div className='card-body d-flex flex-column justify-content-between'>
                <div
                  ref={pdfRef}
                  className='u-clickable app-document-card'
                  onClick={() => setDocument(item.document)}
                >
                  {pdfRef.current && (
                    <Document file={getLinkToDownload(item.document)}>
                      <Page pageNumber={1} width={pdfRef.current.clientWidth} />
                    </Document>
                  )}
                </div>
                <div>
                  <button
                    type='button'
                    className={`btn w-100 my-3 ${button.classnames}`}
                    style={{ borderRadius: 8 }}
                    disabled={
                      actionHandling === item.id ||
                      transactionStatus === TransactionStatus.CLOSED
                    }
                    onClick={() =>
                      item.status === DocumentActionStatus.TODO &&
                      handleClick(item)
                    }
                  >
                    {actionHandling === item.id && (
                      <span className='spinner-border spinner-border-sm mr-2' />
                    )}
                    {button.label}
                  </button>
                  <h6 className='mb-2' style={{ fontWeight: 500 }}>
                    {item.document.title}
                  </h6>
                  {item.document.party && (
                    <>
                      <div className='app-badge app-badge--light'>
                        {item.document.party.name}
                      </div>
                      <div className='mt-3'>
                        <img
                          alt='avatar'
                          src={
                            item.document.party.avatar ||
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
      })}
      {document && (
        <PreviewModal
          toggle={() => {
            setDocument(null)
            setActionId(null)
          }}
          document={document}
          actionId={actionId}
          handleConfirm={() => handleConfirm(actionId)}
        />
      )}
    </>
  )
}

export default TransactionDocumentActions
