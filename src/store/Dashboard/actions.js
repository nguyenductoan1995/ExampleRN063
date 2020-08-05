/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getDashborad = (payload, callback = () => {}) => ({
  type: types.GET_DASHBOARD_REQUEST,
  payload,
  callback,
})

export const getDashboradSuccess = createAction(types.GET_DASHBOARD_SUCCESS)
export const getDashboradFailure = createAction(types.GET_DASHBOARD_FAILURE)
