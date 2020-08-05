import React from 'react'
import { Block } from 'galio-framework'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import VectorIcon from 'components/common/VectorIcon'
import { screenWidth, getHeight, getWidth, setValue } from 'utils/utils'
import colors from 'utils/colors'
import { upperCase } from 'lodash'

/**
 * @param string title
 * @param function onPress return (title)
 * @param object style
 * @param object titleStyle
 */
export default class RowHMRC extends React.PureComponent {
  render() {
    const { title, onPress = () => {}, style, titleStyle, disabled } = this.props
    return (

      <TouchableOpacity disabled={disabled} onPress={() => onPress(title)} style={[styles.contain, style]}>
        <Block flex={1} middle space="between" row style={styles.wrapView}>
          <Text style={[styles.txt, titleStyle]}>{upperCase(title)}</Text>
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
    width: screenWidth,
    borderTopWidth: getHeight(3),
    borderTopColor: '#ebebeb',
    height: getHeight(45),
    paddingHorizontal: getWidth(16),
  },
  wrapView: {
  },
  txt: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(10),
    color: colors.PRIMARY,
  },
})
