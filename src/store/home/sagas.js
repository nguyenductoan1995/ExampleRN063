import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getHomeSuccess, getHomeFailure } from './actions'

function* syncGetHome(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getHomeAPI, payload)
    yield put(getHomeSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getHomeFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* homeWatcher() {
  yield takeLatest(types.GET_HOME_REQUEST, syncGetHome)
}

export default [homeWatcher()]
