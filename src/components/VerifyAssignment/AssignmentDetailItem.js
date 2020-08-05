import React from 'react'
import { Block } from 'galio-framework'
import { Text, StyleSheet } from 'react-native'
import { getHeight, getWidth, setValue } from 'utils/utils'
import colors from 'utils/colors'

export default class AssignmentDetailItem extends React.PureComponent {
  render() {
    const { title, value, style, styleTitle, styleValue } = this.props
    return (
      <Block center middle left style={[styles.contain, style]}>
        <Text style={[styles.title, styleTitle]}>{title}</Text>
        <Text style={[styles.value, styleValue]}>{value}</Text>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    height: getHeight(72),
    width: getWidth(328),
    borderBottomWidth: setValue(0.5),
    borderBottomColor: colors.SMOKE,
  },
  title: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: 'rgba(0,0,0,0.38)',
    marginBottom: getHeight(3),
    lineHeight: setValue(16),
  },
  value: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(16),
    lineHeight: setValue(19),
    marginTop: getHeight(3),
  },
})
