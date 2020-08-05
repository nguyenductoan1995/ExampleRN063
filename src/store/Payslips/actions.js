/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getPayslips = (payload, callback = () => {}) => ({
  type: types.GET_PAYSLIPS_REQUEST,
  payload,
  callback,
})

export const getPayslipsSuccess = createAction(types.GET_PAYSLIPS_SUCCESS)
export const getPayslipsFailure = createAction(types.GET_PAYSLIPS_FAILURE)
// Download
export const downloadPayslips = (payload, callback = () => {}) => ({
  type: types.DOWNLOAD_PAYSLIP_REQUEST,
  payload,
  callback,
})

export const downloadPayslipsSuccess = createAction(types.DOWNLOAD_PAYSLIP_SUCCESS)
export const downloadPayslipsFailure = createAction(types.DOWNLOAD_PAYSLIP_FAILURE)
