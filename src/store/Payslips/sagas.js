import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getPayslipsSuccess, getPayslipsFailure, downloadPayslipsSuccess, downloadPayslipsFailure } from './actions'

function* syncPayslips(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getPayslipsAPI, payload)
    yield put(getPayslipsSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getPayslipsFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncDownloadPayslips(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getExpenseDetailAPI, payload)
    yield put(downloadPayslipsSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(downloadPayslipsFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data') })
  }
}

function* Watcher() {
  yield takeLatest(types.GET_PAYSLIPS_REQUEST, syncPayslips)
  yield takeLatest(types.DOWNLOAD_PAYSLIP_REQUEST, syncDownloadPayslips)
}

export default [Watcher()]
