/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  Expenses: [],
  ExpenseDetail: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_EXPENSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_EXPENSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Expenses: get(action, 'payload.data', []),
      }
    case types.GET_EXPENSES_FAILURE:
      return { ...state, isLoading: false }
      // Assignment Detail
    case types.GET_EXPENSE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        ExpenseDetail: [],
      }
    case types.GET_EXPENSE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ExpenseDetail: get(action, 'payload.data', []),
      }
    case types.GET_EXPENSE_DETAIL_FAILURE:
      return { ...state, isLoading: false, ExpenseDetail: [] }
    default:
      return state
  }
}
