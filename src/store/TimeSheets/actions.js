/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getTimeSheets = (payload, callback = () => {}) => ({
  type: types.GET_TIMESHEETS_REQUEST,
  payload,
  callback,
})

export const getTimeSheetsSuccess = createAction(types.GET_TIMESHEETS_SUCCESS)
export const getTimeSheetsFailure = createAction(types.GET_TIMESHEETS_FAILURE)
// Assignment Detail
export const getTimeSheetDetail = (payload, callback = () => {}) => ({
  type: types.GET_TIMESHEET_DETAIL_REQUEST,
  payload,
  callback,
})

export const getTimeSheetDetailSuccess = createAction(types.GET_TIMESHEET_DETAIL_SUCCESS)
export const getTimeSheetDetailFailure = createAction(types.GET_TIMESHEET_DETAIL_FAILURE)
// Add Time Sheets
export const addTimeSheets = (payload, callback = () => {}) => ({
  type: types.ADD_TIMESHEETS_REQUEST,
  payload,
  callback,
})

export const addTimeSheetsSuccess = createAction(types.ADD_TIMESHEETS_SUCCESS)
export const addTimeSheetsFailure = createAction(types.ADD_TIMESHEETS_FAILURE)
// Edit Time sheets
export const editTimeSheets = (payload, callback = () => {}) => ({
  type: types.EDIT_TIMESHEETS_REQUEST,
  payload,
  callback,
})

export const editTimeSheetsSuccess = createAction(types.EDIT_TIMESHEETS_SUCCESS)
export const editTimeSheetsFailure = createAction(types.EDIT_TIMESHEETS_FAILURE)
