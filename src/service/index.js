/* eslint-disable max-len */
import axios from 'axios'
import { prettifyEndpointAuth, API_ENDPOINTS, prettifyEndpoint } from 'config/endpoints'
import { get } from 'lodash'


export const employerCode = (params) => axios.get(prettifyEndpointAuth(API_ENDPOINTS.auth.Employer), { headers: params })

export const loginAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.auth.login), { headers: params })
export const getDashboardAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.dashBoard.Summary), { headers: params })
export const getAssignmentsAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Activity.Assignments), { headers: params })
export const getAssignmentDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Activity.Assignments}/${params.id}`), { headers: params })
export const getTimeSheetsAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Activity.TimeSheets), { headers: params })
export const getTimeSheetDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Activity.TimeSheets}/${params.id}`), { headers: params })
export const getOptionListAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Options.option), { headers: params })
export const getAssignmentListAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Options.assignment), { headers: params })
export const getAgencyListAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Options.agency), { headers: params })
export const addTimeSheetAPI = (params) => axios.post(prettifyEndpoint(API_ENDPOINTS.Activity.addTimeSheet), params)
export const getRatesAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Activity.Rates}/${params.id}`), { headers: params })
export const editTimeSheetAPI = (params) => axios.put(prettifyEndpoint(`${API_ENDPOINTS.Activity.addTimeSheet}/${params.id}`), params)
export const getExpensesAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Activity.expenses), { headers: params })
export const getExpenseDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Activity.expenses}/${params.id}`), { headers: params })
export const addExpenseAPI = (params) => axios.post(prettifyEndpoint(API_ENDPOINTS.Activity.addExpense), params)
export const editExpenseAPI = (params) => axios.put(prettifyEndpoint(`${API_ENDPOINTS.Activity.addExpense}/${params.id}`), params)
export const getPayslipsAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Activity.payslips), { headers: params })
export const getListCompanyPersonalAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Document.companypersonal), params)
export const getPersonalDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Document.Document}/${params.id}`))
export const addDocumentAPI = (params) => axios.post(prettifyEndpoint(API_ENDPOINTS.Document.Document), params)
export const editDocumentAPI = (params) => axios.put(prettifyEndpoint(`${API_ENDPOINTS.Document.Document}/${params.id}`), params)
export const getCompanyDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Document.Company}/${params.id}`))
export const ProfilePersonalAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Profile.Personal), { headers: params })
export const UpdateProfilePersonalAPI = (params) => axios.put(prettifyEndpoint(API_ENDPOINTS.Profile.Personal), params)
export const getBankDetailAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Profile.Bank), { headers: params })
export const updateBankDetailAPI = (params) => axios.put(prettifyEndpoint(API_ENDPOINTS.Profile.Bank), params)
export const getHMRCDetailAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Profile.HMRC), { headers: params })
export const getPayrollDetailAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Profile.Payroll), { headers: params })
export const getAttachmentOrdersDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Profile.AttachmentOrders}/${params.id}`))
export const getSMPAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Profile.SMP), { headers: params })
export const getSMPDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Profile.SMP}/${params.id}`))
export const getMessageAPI = (params) => axios.get(prettifyEndpoint(API_ENDPOINTS.Message.Message), { headers: params })
export const getMessageDetailAPI = (params) => axios.get(prettifyEndpoint(`${API_ENDPOINTS.Message.Message}/${params.id}`))
export const addMessageComposeAPI = (params) => axios.post(prettifyEndpoint(API_ENDPOINTS.Message.Compose), params)
export const addMessageDocumentAPI = (params) => axios.post(prettifyEndpoint(`${API_ENDPOINTS.Message.Document}/${params.id}`), get(params, 'Attachments'))

export const API = {
  employerCode,
  loginAPI,
  getDashboardAPI,
  getAssignmentsAPI,
  getAssignmentDetailAPI,
  getTimeSheetsAPI,
  getTimeSheetDetailAPI,
  getOptionListAPI,
  getAssignmentListAPI,
  getAgencyListAPI,
  addTimeSheetAPI,
  getRatesAPI,
  editTimeSheetAPI,
  getExpensesAPI,
  getExpenseDetailAPI,
  addExpenseAPI,
  editExpenseAPI,
  getPayslipsAPI,
  getListCompanyPersonalAPI,
  getPersonalDetailAPI,
  addDocumentAPI,
  editDocumentAPI,
  getCompanyDetailAPI,
  ProfilePersonalAPI,
  UpdateProfilePersonalAPI,
  getBankDetailAPI,
  updateBankDetailAPI,
  getHMRCDetailAPI,
  getPayrollDetailAPI,
  getAttachmentOrdersDetailAPI,
  getSMPAPI,
  getSMPDetailAPI,
  getMessageAPI,
  getMessageDetailAPI,
  addMessageComposeAPI,
  addMessageDocumentAPI,
}
