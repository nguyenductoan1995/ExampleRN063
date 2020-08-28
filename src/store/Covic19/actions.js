/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions'
import * as types from './constants'

export const getCovic = createAction(types.GET_COVIC_REQUEST)

export const getCovicSuccess = createAction(types.GET_COVIC_SUCCESS)
export const getCovicFailure = createAction(types.GET_COVIC_FAILURE)
