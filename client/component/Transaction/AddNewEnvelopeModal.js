import React, { useCallback, useEffect, useState } from 'react'
import { Modal } from 'reactstrap'
import { isEmpty, isEqual, uniqWith } from 'lodash'
import { Formik } from 'formik'
import toastr from 'toastr'
import Dropzone from 'react-dropzone'
import {
  DataAccessType,
  MEGABYTE,
  MAX_FILE_SIZE,
  FILE_TYPE,
  DocumentSpecies
} from '../../../common/models/Transaction'
import { transactionService } from '../../services'
import { getDataAccessType } from '../../../common/view-models/Transaction'

// ===== Select Input =====
const SelectInput = ({ label, name, onChange, value, options }) => {
  return (
    <div className='form-group'>
      {label && <label className='tittle-mini-ver'>{label}</label>}
      <select
        className='form-control'
        name={name}
        onChange={onChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={`option-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

// ===== Form =====
const Form = ({ partiesOfTransaction, toggle, currentParty }) => {
  const defaultRecipientOption = { value: '', label: 'Name' }
  const [files, setFiles] = useState(null)

  // ===== Dropdown to select document =====
  // Document options
  // const documentOptions = documentList.map(doc => ({
  //   value: doc.id,
  //   label: doc.title
  // }))

  // Action options
  const actionOptions = [
    {
      value: DataAccessType.VIEW_ONLY,
      label: getDataAccessType(DataAccessType.VIEW_ONLY)
    },
    {
      value: DataAccessType.REVIEW_DOCUMENT,
      label: getDataAccessType(DataAccessType.REVIEW_DOCUMENT)
    },
    {
      value: DataAccessType.SIGN_DOCUMENT,
      label: getDataAccessType(DataAccessType.SIGN_DOCUMENT)
    }
  ]

  const [recipientNumbers, setRecipientNumbers] = useState([1, 2, 3, 4])
  const [partyOptions, setPartyOptions] = useState([])
  const [signerInfo, setSignerInfo] = useState({})
  const [initialValues, setInitialValues] = useState({
    title: ''
  })

  useEffect(() => {
    let tempOptions = []
    let tempInfo = {}
    partiesOfTransaction.forEach(party => {
      // PartyOption
      tempOptions.push({
        value: party.id,
        label: party.name
      })

      // User info
      tempInfo[party.id] = {
        email: party.email,
        name: party.name,
        id: party.id
      }
    })
    setPartyOptions([defaultRecipientOption, ...tempOptions])
    setSignerInfo(tempInfo)

    // Initial values
    let tempInitialValues = {}
    recipientNumbers.forEach(index => {
      tempInitialValues[`recipient${index}`] = {
        party: defaultRecipientOption.value,
        action: actionOptions[0].value
      }
    })
    setInitialValues({ ...initialValues, ...tempInitialValues })
  }, [])

  const handleSubmit = async (values, action) => {
    const { setSubmitting } = action
    setSubmitting(true)

    try {
      // Upload document
      const newDocument = await transactionService.createFileDocument({
        file: files[0],
        title: values.title,
        role: currentParty.role,
        creatorId: currentParty.id,
        partyId: currentParty.id,
        transactionId: currentParty.transactionId,
        documentType: DocumentSpecies.ENVELOPE
      })

      if (newDocument) {
        // "Remove empty element" & "Filter by group"
        let signGroups = []
        let otherGroups = []
        let signers = []

        recipientNumbers.forEach(index => {
          const action = values[`recipient${index}`].action
          const assignedPartyId = values[`recipient${index}`].party
          if (action && !isEmpty(assignedPartyId)) {
            const actionData = {
              creatorId: currentParty.id,
              documentId: newDocument.id,
              action,
              assignedPartyId
            }

            if (action === DataAccessType.SIGN_DOCUMENT) {
              signGroups.push(actionData)
              signers.push(signerInfo[assignedPartyId])
            } else {
              otherGroups.push(actionData)
            }
          }
        })

        // Remove duplicate object from array
        otherGroups = uniqWith(otherGroups, isEqual)

        // Create action for otherGroups
        await transactionService.createDocumentsAction(otherGroups)

        // Create action for signGroups + Redirect docusign
        if (signers.length > 0) {
          // Remove duplicate object from array
          signGroups = uniqWith(signGroups, isEqual)
          signers = uniqWith(signers, isEqual)

          const res = await transactionService.getUriToSignDocument(
            newDocument.id,
            {
              signers,
              creatorId: currentParty.id
            }
          )

          if (res && res.url) {
            if (window) {
              window.open(res.url, '_blank')
            }
          }
        }
      }

      toggle()
      toastr.success('Success')
    } catch (e) {
      toastr.error(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleAddARecipient = values => {
    const index = recipientNumbers.length + 1
    // Add recipient numbers
    setRecipientNumbers([...recipientNumbers, index])

    // Update initialValues
    setInitialValues({
      ...values,
      [`recipient${index}`]: {
        party: defaultRecipientOption.value,
        action: actionOptions[0].value
      }
    })
  }

  const onDrop = useCallback(files => {
    setFiles(files)
  }, [setFiles])

  const fileTooLarge = () => {
    setFiles('large')
  }

  const renderUploadDocument = handleChange => {
    return (
      <div>
        <div className='form-group'>
          <label className='tittle-mini-ver'> Document information</label>
          <input
            className='form-control'
            placeholder='Type here'
            name='title'
            onChange={handleChange}
            maxLength={150}
          />
        </div>
        <div>
          <label className='tittle-mini-ver'>Upload</label>
          <div
            className='card transaction-card transaction-card--add text-center'
            style={{ backgroundColor: 'rgb(239 239 239)' }}
          >
            <div className='card-body p-2'>
              <div className='transaction-add d-flex justify-content-center align-items-center display-6 text-'>
                <Dropzone
                  accept={FILE_TYPE}
                  maxSizeBytes={MAX_FILE_SIZE}
                  onDrop={onDrop}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section className='container'>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <span className='w-100 u-clickable'>
                          <img
                            style={{
                              height: 60,
                              width: 'auto'
                            }}
                            src='/static/images/upload_document.png'
                          />
                        </span>
                      </div>
                      {files && files[0] && (
                        <div>
                          {files[0].size > MAX_FILE_SIZE ? (
                            <div>{fileTooLarge()}</div>
                          ) : (
                            <h5 className='list-unstyled'>{files[0].name}</h5>
                          )}
                        </div>
                      )}
                    </section>
                  )}
                </Dropzone>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const checkDisable = values => {
    if (isEmpty(values.title) || !files || files === 'large' || !files[0]) {
      return true
    }

    const recipientGroups = recipientNumbers.filter(
      index =>
        values[`recipient${index}`] &&
        values[`recipient${index}`].action &&
        values[`recipient${index}`].party
    )
    if (recipientGroups.length === 0) return true

    return false
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col'>
              {/* ===== Dropdown to select document ===== */}
              {/* <SelectInput
                label='File'
                name='file'
                onChange={handleChange}
                value={values.file}
                options={documentOptions}
              /> */}
              {renderUploadDocument(handleChange)}
            </div>
          </div>
          <div className='row'>
            {recipientNumbers.map(
              index =>
                values[`recipient${index}`] && (
                  <div
                    key={`recipient-${index}`}
                    className='col-12 col-md-6 col-lg-6'
                  >
                    <div className='form-group'>
                      <label className='tittle-mini-ver'>{`Recipient ${index}`}</label>
                      <SelectInput
                        name={`recipient${index}.party`}
                        onChange={handleChange}
                        value={values[`recipient${index}`].party}
                        options={partyOptions}
                      />
                      <SelectInput
                        name={`recipient${index}.action`}
                        onChange={handleChange}
                        value={values[`recipient${index}`].action}
                        options={actionOptions}
                      />
                    </div>
                  </div>
                )
            )}
          </div>
          <div>
            <button
              type='button'
              className='btn p-0 text--primary'
              style={{ letterSpacing: 'normal' }}
              onClick={() => handleAddARecipient(values)}
            >
              <i className='far fa-plus-square' />
              &nbsp; Add a Recipient
            </button>
          </div>
          <div className='text-danger text-center mt-3'>
            {files === 'large' && (
              <small>{`Only allows file size smaller than ${MEGABYTE} megabytes`}</small>
            )}
          </div>
          <div className='my-5 d-flex justify-content-center'>
            <button
              type='submit'
              className='btn btn-add-new text-white th-11 d-flex align-items-center'
              disabled={isSubmitting || !isValid || checkDisable(values)}
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
  )
}

const AddNewEnvelopeModal = ({
  isShow,
  toggle,
  partiesOfTransaction,
  currentParty
}) => {
  return (
    <Modal isOpen={isShow} toggle={toggle}>
      <div className='modal-header modal-header--change' id='bg-gr'>
        <div className='text-center w-100'>
          <h5 className=' modal-title new-add' id='exampleModalLabel'>
            Add New Envelope
          </h5>
        </div>
        <div>
          <button
            id='close-modal'
            type='button'
            className='close bg-transparent '
            data-dismiss='modal'
            onClick={() => toggle()}
          >
            &times;
          </button>
        </div>
      </div>
      <div className='modal-body px-5 mx-2' id='main-body-add-member'>
        <Form
          toggle={toggle}
          partiesOfTransaction={partiesOfTransaction}
          currentParty={currentParty}
        />
      </div>
    </Modal>
  )
}

export default AddNewEnvelopeModal
