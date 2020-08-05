/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getListCompanyPersonal = (payload, callback = () => {}) => ({
  type: types.GET_COMPANY_PERSONAL_REQUEST,
  payload,
  callback,
})

export const getListCompanyPersonalSuccess = createAction(types.GET_COMPANY_PERSONAL_SUCCESS)
export const getListCompanyPersonalFailure = createAction(types.GET_COMPANY_PERSONAL_FAILURE)
// Personal detail
export const getPersonalDetail = (payload, callback = () => {}) => ({
  type: types.GET_PERSONAL_DETAIL_REQUEST,
  payload,
  callback,
})

export const getPersonalDetailSuccess = createAction(types.GET_PERSONAL_DETAIL_SUCCESS)
export const getPersonalDetailFailure = createAction(types.GET_PERSONAL_DETAIL_FAILURE)
// add Documnet
export const addDocument = (payload, callback = () => {}) => ({
  type: types.ADD_DOCUMENT_REQUEST,
  payload,
  callback,
})

export const addDocumentSuccess = createAction(types.ADD_DOCUMENT_SUCCESS)
export const addDocumentFailure = createAction(types.ADD_DOCUMENT_FAILURE)
// Edit Data
export const editDocument = (payload, callback = () => {}) => ({
  type: types.EDIT_DOCUMENT_REQUEST,
  payload,
  callback,
})

export const editDocumentSuccess = createAction(types.EDIT_DOCUMENT_SUCCESS)
export const editDocumentFailure = createAction(types.EDIT_DOCUMENT_FAILURE)
// Company Detail
export const getCompanyDetail = (payload, callback = () => {}) => ({
  type: types.GET_COMPANY_DETAIL_REQUEST,
  payload,
  callback,
})

export const getCompanyDetailSuccess = createAction(types.GET_COMPANY_DETAIL_SUCCESS)
export const getCompanyDetailFailure = createAction(types.GET_COMPANY_DETAIL_FAILURE)
