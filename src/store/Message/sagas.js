import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getMessageSuccess, getMessageFailure, getMessageDetailSuccess, getMessageDetailFailure, addMessageComposeSuccess, addMessageComposeFailure, addMessageDocumentSuccess, addMessageDocumentFailure } from './actions'

function* syncMessage(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getMessageAPI, payload)
    yield put(getMessageSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getMessageFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncMessageDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getMessageDetailAPI, payload)
    yield put(getMessageDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getMessageDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncAddMessage(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.addMessageComposeAPI, payload)
    yield put(addMessageComposeSuccess(res))
    callback({ success: true })
  //  yield put(endLoading())
  } catch (err) {
    yield put(addMessageComposeFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* syncAddMessageDocument(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.addMessageDocumentAPI, payload)
    yield put(addMessageDocumentSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(addMessageDocumentFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') || get(err, 'response.data') })
  }
}

function* assignmentsWatcher() {
  yield takeLatest(types.GET_MESSAGE_REQUEST, syncMessage)
  yield takeLatest(types.GET_MESSAGE_DETAIL_REQUEST, syncMessageDetail)
  yield takeLatest(types.ADD_MESSAGE_COMPOSE_REQUEST, syncAddMessage)
  yield takeLatest(types.ADD_MESSAGE_COMPOSE_DOCUMENT_REQUEST, syncAddMessageDocument)
}

export default [assignmentsWatcher()]
