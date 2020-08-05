/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getExpenses = (payload, callback = () => {}) => ({
  type: types.GET_EXPENSES_REQUEST,
  payload,
  callback,
})

export const getExpensesSuccess = createAction(types.GET_EXPENSES_SUCCESS)
export const getExpensesFailure = createAction(types.GET_EXPENSES_FAILURE)
// Expenses Detail
export const getExpenseDetail = (payload, callback = () => {}) => ({
  type: types.GET_EXPENSE_DETAIL_REQUEST,
  payload,
  callback,
})

export const getExpenseDetailSuccess = createAction(types.GET_EXPENSE_DETAIL_SUCCESS)
export const getExpenseDetailFailure = createAction(types.GET_EXPENSE_DETAIL_FAILURE)
// Add Expenses
export const addExpenses = (payload, callback = () => {}) => ({
  type: types.ADD_EXPENSES_REQUEST,
  payload,
  callback,
})

export const addExpensesSuccess = createAction(types.ADD_EXPENSES_SUCCESS)
export const addExpensesFailure = createAction(types.ADD_EXPENSES_FAILURE)
// Edit Expenses
export const editExpenses = (payload, callback = () => {}) => ({
  type: types.EDIT_EXPENSES_REQUEST,
  payload,
  callback,
})

export const editExpensesSuccess = createAction(types.EDIT_EXPENSES_SUCCESS)
export const editExpensesFailure = createAction(types.EDIT_EXPENSES_FAILURE)
