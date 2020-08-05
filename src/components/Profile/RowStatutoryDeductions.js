import React from 'react'
import { Block } from 'galio-framework'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import VectorIcon from 'components/common/VectorIcon'
import { getHeight, getWidth, setValue } from 'utils/utils'
import colors from 'utils/colors'
import { upperCase } from 'lodash'

/**
 * @param string title
 * @param function onPress return (title)
 * @param object style
 * @param object titleStyle
 * @param string status
 * @param bool disabled
 */
export default class RowStatutoryDeductions extends React.PureComponent {
  render() {
    const { title, status, onPress = () => {}, style, titleStyle, disabled } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        disabled={disabled}
        onPress={() => onPress(title)}
        style={[styles.contain, style]}
      >
        <Block flex={1} middle space="between" row style={styles.wrapView}>
          <Block style={styles.left}>
            <Text style={[styles.txt1, titleStyle]}>{upperCase(title)}</Text>
            <Text style={[styles.txt2, titleStyle]}>{status}</Text>
          </Block>
          <VectorIcon
            type="fa"
            name="angle-right"
            size={setValue(16)}
            style={styles.icon}
          />
        </Block>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: getWidth(328),
    borderBottomWidth: getHeight(0.5),
    borderTopColor: '#ebebeb',
    height: getHeight(72),
  },
  wrapView: {
  },
  left: {

  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: colors.SMOKE,
    paddingBottom: getHeight(3),
  },
  txt2: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(16),
    color: colors.BLACK,
    paddingTop: getHeight(3),
  },
})
