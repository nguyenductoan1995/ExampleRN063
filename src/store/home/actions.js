/* eslint-disable import/prefer-default-export */
import * as types from './constants'

export const inputSearch = (payload, callback = () => {}) => ({
  type: types.INPUT_SEARCH,
  payload,
  callback,
})
