/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

// messgae
export const getMessage = (payload, callback = () => {}) => ({
  type: types.GET_MESSAGE_REQUEST,
  payload,
  callback,
})

export const getMessageSuccess = createAction(types.GET_MESSAGE_SUCCESS)
export const getMessageFailure = createAction(types.GET_MESSAGE_FAILURE)
// Get message Detail
export const getMessageDetail = (payload, callback = () => {}) => ({
  type: types.GET_MESSAGE_DETAIL_REQUEST,
  payload,
  callback,
})

export const getMessageDetailSuccess = createAction(types.GET_MESSAGE_DETAIL_SUCCESS)
export const getMessageDetailFailure = createAction(types.GET_MESSAGE_DETAIL_FAILURE)
// add message compose
export const addMessageCompose = (payload, callback = () => {}) => ({
  type: types.ADD_MESSAGE_COMPOSE_REQUEST,
  payload,
  callback,
})

export const addMessageComposeSuccess = createAction(types.ADD_MESSAGE_COMPOSE_SUCCESS)
export const addMessageComposeFailure = createAction(types.ADD_MESSAGE_COMPOSE_FAILURE)
// add Document
export const addMessageDocument = (payload, callback = () => {}) => ({
  type: types.ADD_MESSAGE_COMPOSE_DOCUMENT_REQUEST,
  payload,
  callback,
})

export const addMessageDocumentSuccess = createAction(types.ADD_MESSAGE_COMPOSE_DOCUMENT_SUCCESS)
export const addMessageDocumentFailure = createAction(types.ADD_MESSAGE_COMPOSE_DOCUMENT_FAILURE)
