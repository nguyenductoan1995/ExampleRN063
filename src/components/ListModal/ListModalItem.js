import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Block } from 'galio-framework'
import colors from 'utils/colors'
import VectorIcon from 'components/common/VectorIcon'
import { getHeight, getWidth, setValue } from 'utils/utils'

/**
 * @param function onPress
 */
export default class ListModalItem extends React.PureComponent {
  onCheck = () => {
    const { onPress = () => {} } = this.props
    onPress()
  }

  render() {
    const {
      name,
      isChecked,
    } = this.props

    return (
      <TouchableOpacity onPress={this.onCheck} style={styles.contain}>
        <Block middle row style={styles.wrap}>
          <VectorIcon
            name="md-checkmark"
            size={16}
            style={styles.check}
            color={isChecked ? colors.PRIMARY : 'transparent'}
          />
          <Text style={styles.name}>{name}</Text>
        </Block>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: getWidth(16),
  },
  wrap: {
    backgroundColor: colors.WHITE,
    height: getHeight(47),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.19)',
    justifyContent: 'flex-start',
  },
  check: {
    marginRight: getWidth(12),
  },
  name: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    lineHeight: setValue(14),
  },
})
