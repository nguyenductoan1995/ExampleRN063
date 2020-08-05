import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getAssignmentsSuccess, getAssignmentsFailure, getAssignmentDetailSuccess, getAssignmentDetailFailure, getRatesSuccess, getRatesFailure } from './actions'

function* syncAssignments(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getAssignmentsAPI, payload)
    yield put(getAssignmentsSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getAssignmentsFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncAssignmentDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getAssignmentDetailAPI, payload)
    yield put(getAssignmentDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getAssignmentDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data') })
  }
}

function* syncGetRates(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getRatesAPI, payload)
    yield put(getRatesSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getRatesFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}


function* assignmentsWatcher() {
  yield takeLatest(types.GET_ASSIGNMENTS_REQUEST, syncAssignments)
  yield takeLatest(types.GET_ASSIGNMENT_DETAIL_REQUEST, syncAssignmentDetail)
  yield takeLatest(types.GET_RATES_REQUEST, syncGetRates)
}

export default [assignmentsWatcher()]
