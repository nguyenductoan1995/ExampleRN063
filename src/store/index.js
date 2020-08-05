import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import Reactotron from 'reactotron-react-native'
import storage from '@react-native-community/async-storage'
import homeReducer from 'store/home/reducer'
import assignmentsActions from 'store/Assignments/actions'
import assignmentsReducer from 'store/Assignments/reducer'
import messageAction from 'store/Message/actions'
import messageStore from 'store/Message/reducer'
import createSaga from './middlewares'
import authReducer from './Authorisation/reducer'
import authAction from './Authorisation/actions'
// DashBoard
import dashBoardAction from './Dashboard/actions'
import dashboardReducer from './Dashboard/reducer'
// TimeSheets
import timeSheetsAction from './TimeSheets/actions'
import timeSheetsReducer from './TimeSheets/reducer'
// option
import optionAction from './OptionList/actions'
import optionReducer from './OptionList/reducer'
// Expenses
import expensesAction from './Expenses/actions'
import expensesStore from './Expenses/reducer'
// Payslips
import payslipsAction from './Payslips/actions'
import payslipsStore from './Payslips/reducer'
// Personal
import personalAction from './Personal/actions'
import personalStore from './Personal/reducer'
// Profile Personal
import profileAction from './Profile/actions'
import profileStore from './Profile/reducer'
// Messsage

import 'config/ReactotronConfig'


const config = {
  key: 'root',
  storage,
  blacklist: [
    'authStore',
    'homeStore',
    'dashBoardStore',
    'assignmentsStore',
    'timeSheetsStore',
    'expensesStore',
    'payslipsStore',
    'personalStore',
    'profileStore',
    'optionStore',
    'messageStore',
  ],
}

const authConfig = {
  key: 'authStore',
  storage,
  whitelist: ['AuthorisationData', 'LoginData'],
  blacklist: ['isLoading'],
}

const optionConfig = {
  key: 'optionStore',
  storage,
  whitelist: [
    'Country',
    'Title',
    'Gender',
    'MaritalStatus',
    'Assignments',
    'ExpenseType',
    'VATCodes',
    'MileageItem',
    'ExpenseItem',
  ],
  blacklist: ['isLoading'],
}

const createReducers = () => persistCombineReducers(config, {
  authStore: persistReducer(authConfig, authReducer),
  homeStore: homeReducer,
  dashBoardStore: dashboardReducer,
  assignmentsStore: assignmentsReducer,
  timeSheetsStore: timeSheetsReducer,
  optionStore: persistReducer(optionConfig, optionReducer),
  expensesStore,
  payslipsStore,
  personalStore,
  profileStore,
  messageStore,
})

const createMiddlewares = (sagaMiddleware) => {
  const middlewares = []

  // Saga Middleware
  if (sagaMiddleware) {
    middlewares.push(sagaMiddleware)
  }
  return applyMiddleware.apply({}, middlewares)
}
let store
const buildStore = (reducers, initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  if (__DEV__) {
    // eslint-disable-line
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      store = createStore(
        reducers,
        {},
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
          compose(
            applyMiddleware(sagaMiddleware),
            Reactotron.createEnhancer(),
          ),
        ),
      )
    } else {
      store = createStore(
        createReducers(reducers),
        {},
        compose(
          applyMiddleware(sagaMiddleware),
          Reactotron.createEnhancer(),
        ),
      )
    }
  } else {
    store = createStore(createReducers(reducers), initialState, compose(createMiddlewares(sagaMiddleware)))
  }

  const persistor = persistStore(store)
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(createReducers(reducers))
    })
  }
  store.reducers = createReducers(reducers)
  sagaMiddleware.run(createSaga())
  return { persistor, store }
}

export default buildStore()
export const actions = {
  ...authAction,
  ...dashBoardAction,
  ...assignmentsActions,
  ...timeSheetsAction,
  ...optionAction,
  ...expensesAction,
  ...payslipsAction,
  ...personalAction,
  ...profileAction,
  ...messageAction,
}
export const stores = store
export { default as effects } from './middlewares/effects'
