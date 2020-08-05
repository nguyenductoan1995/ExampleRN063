import { put, takeLatest, call, select } from 'redux-saga/effects'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { API } from 'service'
import axios from 'axios'
import { get } from 'lodash'
import * as types from './constants'
import { getAuthorisationSuccess, getAuthorisationFailure, loginSuccess, loginFailure } from './actions'

function* syncEmployerCode(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.employerCode, payload)
    yield put(getAuthorisationSuccess(res))
    callback({ success: true })
    yield put(endLoading())
    axios.defaults.headers.common.BearerToken = get(payload, 'BearerToken', '2206793d-9a41-4c3d-b62e-d9c768d88749')
    axios.defaults.headers.common.ClientID = get(res, 'data.apiclientid')
    axios.defaults.headers.common.ClientSecret = get(res, 'data.apiclientsecret')
  } catch (err) {
    yield put(getAuthorisationFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncLogin(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.loginAPI, payload)
    yield put(loginSuccess(res))
    callback({ success: true })
    yield put(endLoading())
    axios.defaults.headers.common.CompanyID = get(res, 'data.CompanyID')
    axios.defaults.headers.common.ContractorID = get(res, 'data.ContractorID')
  } catch (err) {
    yield put(loginFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* employerWatcher() {
  yield takeLatest(types.GET_AUTHORISATION_REQUEST, syncEmployerCode)
  yield takeLatest(types.LOGIN_REQUEST, syncLogin)
}

export default [employerWatcher()]
