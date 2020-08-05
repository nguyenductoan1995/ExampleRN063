import { StyleSheet } from 'react-native'
import colors from './colors'
import { setXAxisValue } from './utils'

export default StyleSheet.create({
  textDisplayXlarge: {
    fontSize: setXAxisValue(28),
    color: colors.BLACK,
  },
})
