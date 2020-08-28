/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const login = createAction(types.LOGIN_REQUEST)

export const loginSuccess = createAction(types.LOGIN_SUCCESS)
export const loginFailure = createAction(types.LOGIN_SUCCESS)
// Logout
export const logout = (payload, callback = () => {}) => ({
  type: types.LOGOUT,
  payload,
  callback,
})
