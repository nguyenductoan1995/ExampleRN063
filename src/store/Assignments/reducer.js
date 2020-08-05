/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  AssignmentsData: [],
  AssignmentDetail: {},
  Rates: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ASSIGNMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_ASSIGNMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        AssignmentsData: get(action, 'payload.data', []),
      }
    case types.GET_ASSIGNMENTS_FAILURE:
      return { ...state, isLoading: false }
      // Assignment Detail
    case types.GET_ASSIGNMENT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        AssignmentDetail: {},
      }
    case types.GET_ASSIGNMENT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        AssignmentDetail: get(action, 'payload.data', []),
      }
    case types.GET_ASSIGNMENT_DETAIL_FAILURE:
      return { ...state, isLoading: false }
      // Rates
    case types.GET_RATES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_RATES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Rates: get(action, 'payload.data.Rates', []),
      }
    case types.GET_RATES_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
