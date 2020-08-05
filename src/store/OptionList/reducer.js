/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  Assignments: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ASSIGNMENT_LIST_REQUEST:
      return {
        ...state,
      }
    case types.GET_ASSIGNMENT_LIST_SUCCESS:
      const Assignments = get(action, 'payload.data.data')
      return {
        ...state,
        Assignments,
        isLoading: true }
    case types.GET_ASSIGNMENT_LIST_FAILURE:
      return {
        ...state,
      }
      // Option
    case types.GET_OPTION_LIST_REQUEST:
      return {
        ...state,
      }
    case types.GET_OPTION_LIST_SUCCESS:
      const type = get(action, 'payload.data.type')
      return {
        ...state,
        [type]: get(action, 'payload.data.data'),
        isLoading: true }
    case types.GET_OPTION_LIST_FAILURE:
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}
