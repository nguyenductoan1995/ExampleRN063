/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  Payslips: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PAYSLIPS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_PAYSLIPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Payslips: get(action, 'payload.data', []),
      }
    case types.GET_PAYSLIPS_FAILURE:
      return { ...state, isLoading: false }
      // Down load
    case types.DOWNLOAD_PAYSLIP_REQUEST:
      return {
        ...state,
        isLoading: true,
        Payslip: [],
      }
    case types.DOWNLOAD_PAYSLIP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Payslip: get(action, 'payload.data', []),
      }
    case types.DOWNLOAD_PAYSLIP_FAILURE:
      return { ...state, isLoading: false, Payslip: [] }
    default:
      return state
  }
}
