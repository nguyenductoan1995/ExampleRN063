import { Dimensions } from 'react-native'
import moment from 'moment'

const { width, height } = Dimensions.get('window')
export default (time) => {
  const diff = new Date().getTime() - new Date(time).getTime()
  if (diff > 0) {
    const m = Math.floor((diff / 60000) % 60)
    const h = Math.floor((diff / 3600000) % 24)
    const d = Math.floor(diff / 86400000)
    const w = Math.floor(diff / 604800000)
    const mo = Math.floor(diff / 2678400000)
    if (mo !== 0) {
      return mo === 1 ? 'last month' : `${mo} months ago`
    }
    if (w !== 0) {
      return w === 1 ? 'last week' : `${w} weeks ago`
    }
    if (d !== 0) {
      return d === 1 ? 'yesterday' : `${d} day ago`
    }
    if (h !== 0) {
      return `${h} hours ago`
    }
    return `${m} minutes ago`
  }
  return ''
}

const pivotWidth = 360
const pivotHeight = 640
export const setYAxisValue = (value) => {
  const ratio = height / pivotHeight
  return ratio > 1 ? value : value * ratio
}

export const setValue = (value) => {
  const ratio = (height * width) / (pivotHeight * pivotWidth)
  return ratio >= 1 ? value : value * ratio
}

export const setXAxisValue = (value) => {
  const ratio = width / pivotWidth
  return ratio >= 1 ? value : value * ratio
}

export const screenWidth = Dimensions.get('window').width

export const screenHeight = Dimensions.get('window').height
export const getHeight = (value) => {
  const ratio = value / pivotHeight
  return (pivotHeight * ratio) * (height / pivotHeight)
}
export const getWidth = (value) => {
  const ratio = value / pivotWidth
  return (pivotWidth * ratio) * (width / pivotWidth)
}

export const formatNumber = (value = 0) => parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
export const formatDate = (value = new Date()) => moment(value, 'DD-MM-YYYY').format('DD/MM/YYYY')

export const checkButton = (data = []) => {
  const newdata = []
  data.map((item) => {
    if (item === null || item === '' || !item || item === []) {
      newdata.push(item)
    }
  })
  return newdata.length !== 0
}
