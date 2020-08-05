/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  dashBoardData: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DASHBOARD_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashBoardData: get(action, 'payload.data', null),
      }
    case types.GET_DASHBOARD_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
