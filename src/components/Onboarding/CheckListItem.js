import React from 'react'
import { Block } from 'galio-framework'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import VectorIcon from 'components/common/VectorIcon'
import { getWidth, getHeight } from 'utils/utils'
import colors from 'utils/colors'

export default class CheckListItem extends React.PureComponent {
  render() {
    const { name, isChecked, onPress = () => {} } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.contain}
      >
        <Block row>
          <VectorIcon
            name="md-checkmark"
            size={16}
            style={styles.check}
            color={isChecked ? colors.PRIMARY : 'transparent'}
          />
          <Text style={styles.name}>{name}</Text>
        </Block>
        <VectorIcon
          type="fa"
          name="angle-right"
          size={16}
          style={styles.icon}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    marginHorizontal: getWidth(20),
    height: getHeight(47),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.19)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Effra-Regular',
    fontSize: 14,
    color: 'rgba(0,0,0,0.87)',
    marginLeft: getWidth(10),
  },
  icon: {
    marginRight: getWidth(10),
  },
})
