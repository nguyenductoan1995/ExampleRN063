import { takeEvery } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'
import Loading from 'screens/Global/Loading'
import { START_LOADING, END_LOADING } from './constants'

function* onLoadingStart() {
  yield Loading.show()
}

function* onLoadingEnd() {
  yield Loading.hide()
}

function* watchStartLoading(): Saga {
  yield takeEvery(START_LOADING, onLoadingStart)
}

function* watchEndLoading(): Saga {
  yield takeEvery(END_LOADING, onLoadingEnd)
}

export default [watchStartLoading(), watchEndLoading()]
