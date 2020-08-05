import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getTimeSheetsFailure, getTimeSheetsSuccess, getTimeSheetDetailSuccess, getTimeSheetDetailFailure, addTimeSheetsSuccess, addTimeSheetsFailure, editTimeSheetsSuccess, editTimeSheetsFailure } from './actions'

function* syncTimeSheets(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getTimeSheetsAPI, payload)
    yield put(getTimeSheetsSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getTimeSheetsFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncTimeSheetDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getTimeSheetDetailAPI, payload)
    yield put(getTimeSheetDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getTimeSheetDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data') })
  }
}

function* syncAddTimeSheets(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.addTimeSheetAPI, payload)
    yield put(addTimeSheetsSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(addTimeSheetsFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* syncEditTimeSheets(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.editTimeSheetAPI, payload)
    yield put(editTimeSheetsSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(editTimeSheetsFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* assignmentsWatcher() {
  yield takeLatest(types.GET_TIMESHEETS_REQUEST, syncTimeSheets)
  yield takeLatest(types.GET_TIMESHEET_DETAIL_REQUEST, syncTimeSheetDetail)
  yield takeLatest(types.ADD_TIMESHEETS_REQUEST, syncAddTimeSheets)
  yield takeLatest(types.EDIT_TIMESHEETS_REQUEST, syncEditTimeSheets)
}

export default [assignmentsWatcher()]
