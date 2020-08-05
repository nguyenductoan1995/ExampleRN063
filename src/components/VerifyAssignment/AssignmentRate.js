import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Block } from 'galio-framework'
import { getHeight, setValue, getWidth } from 'utils/utils'
import colors from 'utils/colors'
import VectorIcon from 'components/common/VectorIcon'

/**
 * @param function onPress
 */
export default class AssignmentRate extends React.PureComponent {
  render() {
    const { onPress = () => {} } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Block row middle space="between" style={styles.contain}>
          <Text style={styles.txt}>RATE</Text>
          <VectorIcon
            type="fa"
            name="angle-right"
            size={16}
            style={styles.icon}
          />
        </Block>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  contain: {
    height: getHeight(45),
    borderTopWidth: getHeight(3),
    borderBottomWidth: getHeight(3),
    borderColor: '#ebebeb',
    paddingHorizontal: getWidth(18),
  },
  txt: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(10),
    color: colors.PRIMARY,
  },
})
