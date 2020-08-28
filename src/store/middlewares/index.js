import { all } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'
import Covic19Saga from 'store/Covic19/sagas'
import AuthorizationSaga from 'store/Authorisation/sagas'
import middlewareSagas from './sagas'

export default () => {
  function* rootSaga(): Saga {
    yield all([
      ...middlewareSagas,
      ...Covic19Saga,
      ...AuthorizationSaga,
    ])
  }
  return rootSaga
}
