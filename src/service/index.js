/* eslint-disable max-len */
import axios from 'axios'
import { prettifyEndpointAuth, API_ENDPOINTS, prettifyEndpoint } from 'config/endpoints'
import { get } from 'lodash'

export const loginAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.auth.login), { params })
export const getDashboardAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.dashBoard.Summary), { headers: params })
export const getAssignmentsAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Activity.Assignments), { headers: params })
export const getAssignmentDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Activity.Assignments}/${params.id}`), { headers: params })
export const getTimeSheetsAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Activity.TimeSheets), { headers: params })

export const API = {
  loginAPI,
}
