/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getAssignments = (payload, callback = () => {}) => ({
  type: types.GET_ASSIGNMENTS_REQUEST,
  payload,
  callback,
})

export const getAssignmentsSuccess = createAction(types.GET_ASSIGNMENTS_SUCCESS)
export const getAssignmentsFailure = createAction(types.GET_ASSIGNMENTS_FAILURE)
// Assignment Detail
export const getAssignmentDetail = (payload, callback = () => {}) => ({
  type: types.GET_ASSIGNMENT_DETAIL_REQUEST,
  payload,
  callback,
})

export const getAssignmentDetailSuccess = createAction(types.GET_ASSIGNMENT_DETAIL_SUCCESS)
export const getAssignmentDetailFailure = createAction(types.GET_ASSIGNMENT_DETAIL_FAILURE)
// Get Rates
export const getRates = (payload, callback = () => {}) => ({
  type: types.GET_RATES_REQUEST,
  payload,
  callback,
})

export const getRatesSuccess = createAction(types.GET_RATES_SUCCESS)
export const getRatesFailure = createAction(types.GET_RATES_FAILURE)
