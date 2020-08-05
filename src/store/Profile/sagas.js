import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getProfilePersonalSuccess, getProfilePersonalFailure, updateProfilePersonalSuccess, updateProfilePersonalFailure, getBankDetailSuccess, getBankDetailFailure, updateBankDetailSuccess, updateBankDetailFailure, getHMRCDetailSuccess, getHMRCDetailFailure, getPayrollDetailSuccess, getPayrollDetailFailure, getAttachmentOrdersDetailSuccess, getAttachmentOrdersDetailFailure, getSMPSuccess, getSMPFailure, getSMPDetailSuccess, getSMPDetailFailure } from './actions'

function* syncGetProfilePersonal(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.ProfilePersonalAPI, payload)
    yield put(getProfilePersonalSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getProfilePersonalFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncUpdateProfilePersonal(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.UpdateProfilePersonalAPI, payload)
    yield put(updateProfilePersonalSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(updateProfilePersonalFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* syncBankDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getBankDetailAPI, payload)
    yield put(getBankDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getBankDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncUpdateBankDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.updateBankDetailAPI, payload)
    yield put(updateBankDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(updateBankDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* syncHMRCDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getHMRCDetailAPI, payload)
    yield put(getHMRCDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getHMRCDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncPayrollDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getPayrollDetailAPI, payload)
    yield put(getPayrollDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getPayrollDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncAttachmentOrdersDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getAttachmentOrdersDetailAPI, payload)
    yield put(getAttachmentOrdersDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getAttachmentOrdersDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* syncSMP(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getSMPAPI, payload)
    yield put(getSMPSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getSMPFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data') })
  }
}

function* syncSMPDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getSMPDetailAPI, payload)
    yield put(getSMPDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getSMPDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* Watcher() {
  yield takeLatest(types.GET_PROFILE_REQUEST, syncGetProfilePersonal)
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, syncUpdateProfilePersonal)
  yield takeLatest(types.GET_BANK_REQUEST, syncBankDetail)
  yield takeLatest(types.UPDATE_BANK_REQUEST, syncUpdateBankDetail)
  yield takeLatest(types.GET_HMRC_REQUEST, syncHMRCDetail)
  yield takeLatest(types.GET_PAYROLL_REQUEST, syncPayrollDetail)
  yield takeLatest(types.GET_ATTACHMENTORDERS_REQUEST, syncAttachmentOrdersDetail)
  yield takeLatest(types.GET_SMP_REQUEST, syncSMP)
  yield takeLatest(types.GET_SMP_DETAIL_REQUEST, syncSMPDetail)
}

export default [Watcher()]
