import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { screenWidth, screenHeight } from 'utils/utils'

const { width } = Dimensions.get('window')
const ratio = screenWidth / screenHeight
export const CARD_WIDTH = width * 0.9
export const CARD_HEIGHT = CARD_WIDTH * ratio
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
  },
})

export default ({ source }) => (
  <Image
    style={styles.card}
    source={source}
  />
)
