/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

// Profile personal
export const getProfilePersonal = (payload, callback = () => {}) => ({
  type: types.GET_PROFILE_REQUEST,
  payload,
  callback,
})

export const getProfilePersonalSuccess = createAction(types.GET_PROFILE_SUCCESS)
export const getProfilePersonalFailure = createAction(types.GET_PROFILE_FAILURE)
// Update Profile
export const updateProfilePersonal = (payload, callback = () => {}) => ({
  type: types.UPDATE_PROFILE_REQUEST,
  payload,
  callback,
})

export const updateProfilePersonalSuccess = createAction(types.UPDATE_PROFILE_SUCCESS)
export const updateProfilePersonalFailure = createAction(types.UPDATE_PROFILE_FAILURE)
// Bank Detail
export const getBankDetail = (payload, callback = () => {}) => ({
  type: types.GET_BANK_REQUEST,
  payload,
  callback,
})

export const getBankDetailSuccess = createAction(types.GET_BANK_SUCCESS)
export const getBankDetailFailure = createAction(types.GET_BANK_FAILURE)
// Update Bank Detail
export const updateBankDetail = (payload, callback = () => {}) => ({
  type: types.UPDATE_BANK_REQUEST,
  payload,
  callback,
})

export const updateBankDetailSuccess = createAction(types.UPDATE_BANK_SUCCESS)
export const updateBankDetailFailure = createAction(types.UPDATE_BANK_FAILURE)
// get HMRC
export const getHMRCDetail = (payload, callback = () => {}) => ({
  type: types.GET_HMRC_REQUEST,
  payload,
  callback,
})

export const getHMRCDetailSuccess = createAction(types.GET_HMRC_SUCCESS)
export const getHMRCDetailFailure = createAction(types.GET_HMRC_FAILURE)
// get Payroll
export const getPayrollDetail = (payload, callback = () => {}) => ({
  type: types.GET_PAYROLL_REQUEST,
  payload,
  callback,
})

export const getPayrollDetailSuccess = createAction(types.GET_PAYROLL_SUCCESS)
export const getPayrollDetailFailure = createAction(types.GET_PAYROLL_FAILURE)
// AttachmentOrderDetail
export const getAttachmentOrdersDetail = (payload, callback = () => {}) => ({
  type: types.GET_ATTACHMENTORDERS_REQUEST,
  payload,
  callback,
})

export const getAttachmentOrdersDetailSuccess = createAction(types.GET_ATTACHMENTORDERS_SUCCESS)
export const getAttachmentOrdersDetailFailure = createAction(types.GET_ATTACHMENTORDERS_FAILURE)
// get SMP
export const getSMP = (payload, callback = () => {}) => ({
  type: types.GET_SMP_REQUEST,
  payload,
  callback,
})

export const getSMPSuccess = createAction(types.GET_SMP_SUCCESS)
export const getSMPFailure = createAction(types.GET_SMP_FAILURE)
// get SMP Detail
export const getSMPDetail = (payload, callback = () => {}) => ({
  type: types.GET_SMP_DETAIL_REQUEST,
  payload,
  callback,
})

export const getSMPDetailSuccess = createAction(types.GET_SMP_DETAIL_SUCCESS)
export const getSMPDetailFailure = createAction(types.GET_SMP_DETAIL_FAILURE)
