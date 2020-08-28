import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import Reactotron from 'reactotron-react-native'
import storage from '@react-native-community/async-storage'
import homeReducer from 'store/home/reducer'
import Covic19Action from 'store/Covic19/actions'
import Covic19Reducer from 'store/Covic19/reducer'
import AuthorisationAction from 'store/Authorisation/actions'
import AuthorisationReducer from 'store/Authorisation/reducer'
import createSaga from './middlewares'

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
  authStore: persistReducer(authConfig, AuthorisationReducer),
  Covic19Store: Covic19Reducer,
  homeStore: homeReducer,
  // optionStore: persistReducer(optionConfig, optionReducer),
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
  ...Covic19Action,
  ...AuthorisationAction,
}
export const stores = store
export { default as effects } from './middlewares/effects'
