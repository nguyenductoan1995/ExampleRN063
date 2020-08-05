/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  field: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INPUT_SEARCH:
      const field = get(action, 'payload')
      return {
        ...state,
        field,
        isLoading: true }
    default:
      return state
  }
}
