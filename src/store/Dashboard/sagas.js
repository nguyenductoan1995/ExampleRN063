import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getDashboradSuccess, getDashboradFailure } from './actions'

function* syncDashboard(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getDashboardAPI, payload)
    yield put(getDashboradSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getDashboradFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* homeWatcher() {
  yield takeLatest(types.GET_DASHBOARD_REQUEST, syncDashboard)
}

export default [homeWatcher()]
