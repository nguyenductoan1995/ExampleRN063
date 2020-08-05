/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getOptionList = (payload, callback = () => {}) => ({
  type: types.GET_OPTION_LIST_REQUEST,
  payload,
  callback,
})

export const getOptionListSuccess = createAction(types.GET_OPTION_LIST_SUCCESS)
export const getOptionListFailure = createAction(types.GET_OPTION_LIST_FAILURE)
// Assignment
export const getAssignmentList = (payload, callback = () => {}) => ({
  type: types.GET_ASSIGNMENT_LIST_REQUEST,
  payload,
  callback,
})

export const getAssignmentListSuccess = createAction(types.GET_ASSIGNMENT_LIST_SUCCESS)
export const getAssignmentListFailure = createAction(types.GET_ASSIGNMENT_LIST_FAILURE)
// Agency
export const getAgencyList = (payload, callback = () => {}) => ({
  type: types.GET_AGENCY_LIST_REQUEST,
  payload,
  callback,
})

export const getAgencyListSuccess = createAction(types.GET_AGENCY_LIST_SUCCESS)
export const getAgencyListFailure = createAction(types.GET_AGENCY_LIST_FAILURE)
