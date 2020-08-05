import { put, takeLatest, call } from 'redux-saga/effects'
import { API } from 'service'
import { startLoading, endLoading } from 'store/middlewares/actions'
import { get } from 'lodash'
import * as types from './constants'
import { getExpensesSuccess, getExpensesFailure, getExpenseDetailSuccess, getExpenseDetailFailure, addExpensesSuccess, addExpensesFailure, editExpensesSuccess, editExpensesFailure } from './actions'

function* syncExpenses(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getExpensesAPI, payload)
    yield put(getExpensesSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getExpensesFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncExpenseDetail(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.getExpenseDetailAPI, payload)
    yield put(getExpenseDetailSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(getExpenseDetailFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.message') })
  }
}

function* syncAddExpenses(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.addExpenseAPI, payload)
    yield put(addExpensesSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(addExpensesFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') || get(err, 'response.data') })
  }
}

function* syncEditExpenses(action) {
  const {
    payload,
    callback,
  } = action
  yield put(startLoading())
  try {
    const res = yield call(API.editExpenseAPI, payload)
    yield put(editExpensesSuccess(res))
    callback({ success: true })
    yield put(endLoading())
  } catch (err) {
    yield put(editExpensesFailure(err))
    yield put(endLoading())
    callback({ success: false, errorMessage: get(err, 'response.data.Message') })
  }
}

function* assignmentsWatcher() {
  yield takeLatest(types.GET_EXPENSES_REQUEST, syncExpenses)
  yield takeLatest(types.GET_EXPENSE_DETAIL_REQUEST, syncExpenseDetail)
  yield takeLatest(types.ADD_EXPENSES_REQUEST, syncAddExpenses)
  yield takeLatest(types.EDIT_EXPENSES_REQUEST, syncEditExpenses)
}

export default [assignmentsWatcher()]
