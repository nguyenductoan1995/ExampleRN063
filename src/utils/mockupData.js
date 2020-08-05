import { lock, faq, rewards, referrals, logout } from 'assets/images'

export const P45List = [
  {
    id: 1,
    name: 'Not Applicable',
  },
  {
    id: 2,
    name: 'A - This is the first Job since the start of this tax year',
  },
  {
    id: 3,
    name: 'B - This is currently the only job',
  },
  {
    id: 4,
    name: 'C - Have another Job or Pension',
  },
]

export const DetailInfo = [
  { name: 'Personal Details' },
  { name: 'Bank Details' },
  { name: 'HMRC Details' },
  { name: 'Payroll Details' },
]

export const OnboardingList = [
  {
    name: 'Change Password',
    icon: lock,
  },
  {
    name: 'Change PIN',
    icon: lock,
  },
  {
    name: 'Logout',
    icon: logout,
  },
]

export const Profile = [
  {
    name: 'Change Password',
    icon: lock,
  },
  {
    name: 'Change PIN',
    icon: lock,
  },
  {
    name: 'FAQ',
    icon: faq,
  },
  {
    name: 'Rewards',
    icon: rewards,
  },
  {
    name: 'Referrals',
    icon: referrals,
  },
  {
    name: 'Logout',
    icon: logout,
  },
]
export const OnboardingData = [
  {
    id: 0,
    name: 'Verify your ID',
  },
  {
    id: 1,
    name: 'Verify Contract',
  },
  {
    id: 2,
    name: 'Verify Assignment ',
  },
  {
    id: 3,
    name: 'Update Bank Details',
  },
  {
    id: 4,
    name: 'Update P45 Starter Details',
  },
  {
    id: 5,
    name: 'Update UTR Number',
  },
  {
    id: 6,
    name: 'Upload Incorporation Document',
  },
  {
    id: 7,
    name: 'Upload VAT Certificate',
  },
  {
    id: 8,
    name: 'Upload Bank Account Proof',
  },

]

export const VerifyAssignment = [
  {
    ID: 963712,
    AgencyID: 1012894,
    AgencyName: 'Bring Brought LIT LTE',
    Amount: '35.00',
    Date: '17-02-2020',
    StatusID: 0,
    StatusMesasge: 'Active',
  },
  {
    ID: 963711,
    AgencyID: 1012893,
    AgencyName: 'Blue tech',
    Amount: '25.00',
    Date: '17-02-2018',
    StatusID: 0,
    StatusMesasge: 'Active',
  },
]

export const AssignmentDetail = {
  ID: 963711,
  AssignmentName: 'On-fly project ',
  AgencyID: 1012893,
  AgencyName: 'Blue tech',
  ProjectReference: 'PO Ref12',
  ClientReference: 'CLI Ref12',
  PONumber: 'PO452',
  StartDate: '17-02-2018',
  EndDate: '',
  Status: 'Active',
  RejectReason: 'CLI Ref12',
  Rates: [
    {
      RateID: 20869,
      Code: 'IN1001-Standard Daily Rate',
      Description: 'Standard Daily Rate',
      Rate: '0.00',
    },
    {
      RateID: 20870,
      Code: 'IN1002-Standard Hourly Rate',
      Description: 'Standard Hourly Rate',
      Rate: '20.00',
    },
    {
      RateID: 20871,
      Code: 'IN1003-Overtime Rate',
      Description: 'Overtime Rate',
      Rate: '5.00',
    },
    {
      RateID: 20872,
      Code: 'IN1004-Weekend & Holiday Rate',
      Description: 'Weekend & Holiday Rate',
      Rate: '0.00',
    },
  ],
}

export const DataSMP = [
  {
    time: '20/11/2019',
    cost: '50.00',
    desc: 'Tax Period : 17/2019',
    status: 'Paid',
  },
  {
    time: '12/10/2019',
    cost: '20.00',
    desc: 'Tax Period : 16/2019',
    status: 'Unpaid',
  },
]

export const AttachmentOrdersData = [
  {
    id: 'A026',
    status: 'FIXED',
    start: '11/11/2019',
    end: '31/01/2020',
    user: 'User Defined',
  },
  {
    id: 'A007',
    status: 'TABLE',
    start: '11/11/2019',
    end: '31/01/2020',
    user: 'CCAEO (Community Charge) Fro…',
  },
]
