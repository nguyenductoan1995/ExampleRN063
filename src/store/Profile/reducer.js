/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  ProfilePersonal: [],
  BankDetail: {},
  HMRCDetail: {},
  PayrollDetail: {},
  AttachmentOrdersDetail: {},
  SMP: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ProfilePersonal: get(action, 'payload.data', []),
      }
    case types.GET_PROFILE_FAILURE:
      return { ...state, isLoading: false }
      // Bank detail
    case types.GET_BANK_REQUEST:
      return {
        ...state,
        isLoading: true,
        BankDetail: {},
      }
    case types.GET_BANK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        BankDetail: get(action, 'payload.data', {}),
      }
    case types.GET_BANK_FAILURE:
      return { ...state, isLoading: false, BankDetail: {} }
      // HMRC
    case types.GET_HMRC_REQUEST:
      return {
        ...state,
        isLoading: true,
        HMRCDetail: {},
      }
    case types.GET_HMRC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        HMRCDetail: get(action, 'payload.data', {}),
      }
    case types.GET_HMRC_FAILURE:
      return { ...state, isLoading: false, HMRCDetail: {} }
      // Payroll
    case types.GET_PAYROLL_REQUEST:
      return {
        ...state,
        isLoading: true,
        PayrollDetail: {},
      }
    case types.GET_PAYROLL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        PayrollDetail: get(action, 'payload.data', {}),
      }
    case types.GET_PAYROLL_FAILURE:
      return { ...state, isLoading: false, PayrollDetail: {} }
      // Attachment orders
    case types.GET_ATTACHMENTORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        AttachmentOrdersDetail: {},
      }
    case types.GET_ATTACHMENTORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        AttachmentOrdersDetail: get(action, 'payload.data', {}),
      }
    case types.GET_ATTACHMENTORDERS_FAILURE:
      return { ...state, isLoading: false, AttachmentOrdersDetail: {} }
      // SMP
    case types.GET_SMP_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_SMP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        SMP: get(action, 'payload.data', {}),
      }
    case types.GET_SMP_FAILURE:
      return { ...state, isLoading: false, SMP: [] }
    default:
      return {
        ...state,
      }
  }
}
