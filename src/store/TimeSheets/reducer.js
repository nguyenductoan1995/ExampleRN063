/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  timeSheets: [],
  timeSheetDetail: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TIMESHEETS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_TIMESHEETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        timeSheets: get(action, 'payload.data', []),
      }
    case types.GET_TIMESHEETS_FAILURE:
      return { ...state, isLoading: false }
      // Assignment Detail
    case types.GET_TIMESHEET_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        timeSheetDetail: [],
      }
    case types.GET_TIMESHEET_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        timeSheetDetail: get(action, 'payload.data', []),
      }
    case types.GET_TIMESHEET_DETAIL_FAILURE:
      return { ...state, isLoading: false, timeSheetDetail: [] }
    default:
      return state
  }
}
