import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import axios from 'axios'
import * as types from './constants'
import { getCovicSuccess, getCovicFailure } from './actions'

function* syncGetCovic({ payload }) {
  axios.defaults.headers.common['x-rapidapi-key'] = '00caedb47fmsh57c7d930ca62b74p11531bjsn108f00b50638'
  axios.defaults.headers.common.useQueryString = true
  const { params, cb = () => {} } = payload
  yield put(startLoading())
  try {
    const res = yield call(API.loginAPI, params)
    yield put(getCovicSuccess(res))
    cb({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getCovicFailure(err))
    yield put(endLoading())
    cb({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* assignmentsWatcher() {
  yield takeLatest(types.GET_COVIC_REQUEST, syncGetCovic)
}

export default [assignmentsWatcher()]
