import { put, takeLatest, call, select } from 'redux-saga/effects'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { API } from 'service'
import axios from 'axios'
import { get } from 'lodash'
import * as types from './constants'
import { loginSuccess, loginFailure } from './actions'

function* syncLogin({ payload }) {
  axios.defaults.headers.common['x-rapidapi-key'] = '00caedb47fmsh57c7d930ca62b74p11531bjsn108f00b50638'
  axios.defaults.headers.common.useQueryString = true
  const { params, cb = () => {} } = payload
  console.tron.log(params)
  yield put(startLoading())
  try {
    const res = yield call(API.loginAPI, params)
    yield put(loginSuccess(res))
    yield put(endLoading())
    cb({ success: true, data: res })
  } catch (err) {
    yield put(loginFailure(err))
    yield put(endLoading())
  }
}

function* employerWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, syncLogin)
}

export default [employerWatcher()]
