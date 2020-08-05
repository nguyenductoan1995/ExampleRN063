import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getOptionListSuccess, getOptionListFailure, getAssignmentListSuccess, getAssignmentListFailure, getAgencyListSuccess, getAgencyListFailure } from './actions'

function* syncGetOptionList(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getOptionListAPI, payload)
    yield put(getOptionListSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getOptionListFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}
// Assignment
function* syncGetAssignmentList(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getAssignmentListAPI, payload)
    yield put(getAssignmentListSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getAssignmentListFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}
// Agency
function* syncGetAgencyList(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getAgencyListAPI, payload)
    yield put(getAgencyListSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getAgencyListFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* homeWatcher() {
  yield takeLatest(types.GET_OPTION_LIST_REQUEST, syncGetOptionList)
  yield takeLatest(types.GET_ASSIGNMENT_LIST_REQUEST, syncGetAssignmentList)
  yield takeLatest(types.GET_AGENCY_LIST_REQUEST, syncGetAgencyList)
}

export default [homeWatcher()]
