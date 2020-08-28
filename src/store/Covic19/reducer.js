/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  Covic: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_COVIC_REQUEST: {
      return {
        ...state,
      }
    }
    case types.GET_COVIC_SUCCESS: {
      return {
        ...state,
        Covic: get(action, 'payload.data'),
      }
    }
    case types.GET_COVIC_FAILURE: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}
