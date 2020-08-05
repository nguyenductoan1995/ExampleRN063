import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from 'store'
import AppLoading from './src/AppLoading'

export default () => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <AppLoading />
    </PersistGate>
  </Provider>
)