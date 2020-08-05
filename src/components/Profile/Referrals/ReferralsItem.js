import React from 'react'
import { Block } from 'galio-framework'
import { get } from 'lodash'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { getWidth, getHeight, setValue } from 'utils/utils'
import colors from 'utils/colors'

export default class ReferralItem extends React.PureComponent {
  render() {
    const id = get(this.props, 'id')
    const desc = get(this.props, 'desc')
    const time = get(this.props, 'time')
    const { onPress = () => {} } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.contain}>
        <Block row space="between" style={styles.row1}>
          <Text style={styles.txt1}>{id}</Text>
          <Text style={styles.txt2}>Date of Referral</Text>
        </Block>
        <Block row space="between" style={styles.row2}>
          <Text style={styles.txt3}>{desc}</Text>
          <Text style={styles.txt4}>{time}</Text>
        </Block>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: getWidth(348),
    height: getHeight(74),
    justifyContent: 'center',
    borderBottomColor: colors.GREY,
    borderBottomWidth: getHeight(1),
    paddingHorizontal: getWidth(10),
  },
  row1: {
    marginBottom: getHeight(4),
  },
  txt1: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: colors.BLACK87,
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: colors.BLACK38,
  },
  row2: {
    marginTop: getHeight(4),
  },
  txt3: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: colors.BLACK38,
  },
  txt4: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: colors.BLACK87,
  },
})
