/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getAuthorisation = (payload, callback = () => {}) => ({
  type: types.GET_AUTHORISATION_REQUEST,
  payload,
  callback,
})

export const getAuthorisationSuccess = createAction(types.GET_AUTHORISATION_SUCCESS)
export const getAuthorisationFailure = createAction(types.GET_AUTHORISATION_FAILURE)
// Login
export const login = (payload, callback = () => {}) => ({
  type: types.LOGIN_REQUEST,
  payload,
  callback,
})

export const loginSuccess = createAction(types.LOGIN_SUCCESS)
export const loginFailure = createAction(types.LOGIN_SUCCESS)
// Logout
export const logout = (payload, callback = () => {}) => ({
  type: types.LOGOUT,
  payload,
  callback,
})
