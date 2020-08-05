/* eslint-disable no-case-declarations */

import { get } from 'lodash'
import * as types from './constants'

const INITIAL_STATE = {
  isLoading: false,
  Message: [],
  MessageDetail: {},
  MessageBody: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_MESSAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Message: get(action, 'payload.data', []),
      }
    case types.GET_MESSAGE_FAILURE:
      return { ...state, isLoading: false, Message: [] }
      // Message Detail
    case types.GET_MESSAGE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        MessageDetail: {},
      }
    case types.GET_MESSAGE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        MessageDetail: get(action, 'payload.data', []),
      }
    case types.GET_MESSAGE_DETAIL_FAILURE:
      return { ...state, isLoading: false, MessageDetail: {} }
      //
    case types.ADD_MESSAGE_COMPOSE_REQUEST:
      return {
        ...state,
      }
    case types.ADD_MESSAGE_COMPOSE_SUCCESS:
      return {
        ...state,
        MessageBody: get(action, 'payload.data'),
      }
    case types.ADD_MESSAGE_COMPOSE_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}
