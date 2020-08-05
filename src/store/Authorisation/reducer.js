/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  AuthorisationData: null,
  LoginData: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_AUTHORISATION_REQUEST:
      return { ...state }
    case types.GET_AUTHORISATION_SUCCESS:
      return {
        ...state,
        AuthorisationData: get(action, 'payload.data'),
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        LoginData: get(action, 'payload.data'),
      }
    case types.LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}
