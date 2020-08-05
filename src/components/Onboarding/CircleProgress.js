import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Block } from 'galio-framework'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { floor } from 'lodash'
import colors from 'utils/colors'
import { setValue } from 'utils/utils'


const Info = React.memo(({ fill }) => (
  <Block center>
    <Text style={styles.txt1}>
      {`${floor(fill)}%` }
    </Text>
    <Text style={styles.txt2}>Completed</Text>
  </Block>
))

/**
 * @param number value
 * @param object style
 * @param number size
 * @param number width
 * @param number backgroundWidth
 * @param string tintColor
 * @param string backgroundColor
 * @param number arcSweepAngle
 * @param number rotation
 * @param string lineCap [ butt, round, square]
 */

export default class CircleProgress extends React.PureComponent {
  render() {
    const {
      value = 0,
      style,
      size,
      width,
      backgroundWidth,
      tintColor,
      backgroundColor,
      arcSweepAngle,
      rotation,
      lineCap,
      ...props
    } = this.props
    return (
      <Block style={[styles.contain, style]} middle>
        <AnimatedCircularProgress
          size={size || 100}
          width={width || 5}
          backgroundWidth={backgroundWidth || 3}
          fill={value}
          tintColor={tintColor || colors.PRIMARY}
          backgroundColor={backgroundColor || colors.GREY}
          arcSweepAngle={arcSweepAngle || 250}
          rotation={rotation || 235}
          lineCap={lineCap || 'round'}
          {...props}
        >
          {
    (fill) => (
      <Info fill={fill} />
    )
  }
        </AnimatedCircularProgress>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: colors.WHITE,
  },
  txt1: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: colors.BLACK,
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: 'rgba(51, 51, 51,0.38)',
  },
})
