import { all } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'
import authSaga from 'store/Authorisation/sagas'
import dashBoardSaga from 'store/Dashboard/sagas'
import assignmentsSaga from 'store/Assignments/sagas'
import timeSheetsSaga from 'store/TimeSheets/sagas'
import optionSaga from 'store/OptionList/sagas'
import ExpensesSaga from 'store/Expenses/sagas'
import payslipsSaga from 'store/Payslips/sagas'
import personalSaga from 'store/Personal/sagas'
import ProfileSaga from 'store/Profile/sagas'
import messageSaga from 'store/Message/sagas'
import middlewareSagas from './sagas'

export default () => {
  function* rootSaga(): Saga {
    yield all([
      ...middlewareSagas,
      ...authSaga,
      ...dashBoardSaga,
      ...assignmentsSaga,
      ...timeSheetsSaga,
      ...optionSaga,
      ...ExpensesSaga,
      ...payslipsSaga,
      ...personalSaga,
      ...ProfileSaga,
      ...messageSaga,
    ])
  }
  return rootSaga
}
