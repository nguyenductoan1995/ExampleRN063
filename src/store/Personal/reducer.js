/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  Personal: [],
  Company: [],
  PersonalDetail: {},
  CompanyDetail: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_COMPANY_PERSONAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_COMPANY_PERSONAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Personal: get(action, 'payload.data.Personal', []),
        Company: get(action, 'payload.data.Company', []),
      }
    case types.GET_COMPANY_PERSONAL_FAILURE:
      return { ...state, isLoading: false }
      // Personal Detail
    case types.GET_PERSONAL_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        PersonalDetail: {},
      }
    case types.GET_PERSONAL_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        PersonalDetail: get(action, 'payload.data', {}),
      }
    case types.GET_PERSONAL_DETAIL_FAILURE:
      return { ...state, isLoading: false, PersonalDetail: {} }
      // Company detail
    case types.GET_COMPANY_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        CompanyDetail: {},
      }
    case types.GET_COMPANY_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        CompanyDetail: get(action, 'payload.data', {}),
      }
    case types.GET_COMPANY_DETAIL_FAILURE:
      return { ...state, isLoading: false, CompanyDetail: {} }
    default:
      return {
        ...state,
      }
  }
}
