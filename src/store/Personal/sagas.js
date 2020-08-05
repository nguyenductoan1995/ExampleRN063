import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getListCompanyPersonalSuccess, getListCompanyPersonalFailure, getPersonalDetailSuccess, getPersonalDetailFailure, addDocumentSuccess, addDocumentFailure, editDocumentSuccess, editDocumentFailure, getCompanyDetailSuccess, getCompanyDetailFailure } from './actions'

function* syncListCompanyPersonal(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getListCompanyPersonalAPI, payload)
    yield put(getListCompanyPersonalSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getListCompanyPersonalFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncPersonalDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getPersonalDetailAPI, payload)
    yield put(getPersonalDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getPersonalDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncAddDocument(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.addDocumentAPI, payload)
    yield put(addDocumentSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(addDocumentFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data') })
  }
}

function* syncEditDocument(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.editDocumentAPI, payload)
    yield put(editDocumentSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(editDocumentFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data') })
  }
}

function* syncCompanyDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getCompanyDetailAPI, payload)
    yield put(getCompanyDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getCompanyDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}


function* Watcher() {
  yield takeLatest(types.GET_COMPANY_PERSONAL_REQUEST, syncListCompanyPersonal)
  yield takeLatest(types.GET_PERSONAL_DETAIL_REQUEST, syncPersonalDetail)
  yield takeLatest(types.ADD_DOCUMENT_REQUEST, syncAddDocument)
  yield takeLatest(types.EDIT_DOCUMENT_REQUEST, syncEditDocument)
  yield takeLatest(types.GET_COMPANY_DETAIL_REQUEST, syncCompanyDetail)
}

export default [Watcher()]
