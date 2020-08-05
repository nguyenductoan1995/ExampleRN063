import React from 'react'
import { Block } from 'galio-framework'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { getHeight, getWidth, setValue } from 'utils/utils'
import colors from 'utils/colors'

/**
 * @param string time  ,
 * @param string cost
 * @param string desc
 * @param string status
 * @param function onPress
 * @param object style
 * @param object titleStyle
 * @param  bool disabled
 */
export default class RowSPP extends React.PureComponent {
  get status() {
    const { status } = this.props
    switch (status) {
      case 'Paid':
        return [styles.txt4, { color: '#70b900' }]
      case 'Unpaid':
        return [styles.txt4, { color: '#f4ac00' }]
      default:
        return [styles.txt4]
    }
  }

  render() {
    const { onPress = () => {}, disabled, time, cost, desc, status, style } = this.props
    return (

      <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.contain, style]}>
        <Block row space="between" style={styles.row1}>
          <Text style={styles.txt1}>{time}</Text>
          <Text style={styles.txt2}>{`£${cost}`}</Text>
        </Block>
        <Block row space="between" style={styles.row2}>
          <Block style={styles.wrapDesc}>
            <Text style={styles.txt3}>{desc}</Text>
          </Block>
          <Text style={this.status}>{status}</Text>
        </Block>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    width: getWidth(348),
    borderBottomWidth: getHeight(1),
    borderBottomColor: '#ebebeb',
    height: getHeight(77),
    paddingHorizontal: getWidth(10),
  },
  wrapView: {
  },
  row1: {
    paddingBottom: getHeight(4),
  },
  row2: {
    paddingTop: getHeight(4),
  },
  txt1: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: '#424242',
  },
  txt2: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: colors.PRIMARY,
  },
  wrapDesc: {
    backgroundColor: 'rgba(38, 148, 120,0.2)',
    borderRadius: setValue(2),
  },
  txt3: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: colors.PRIMARY,
    paddingHorizontal: getWidth(6),
    paddingVertical: getHeight(3),
  },
  txt4: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
  },
})
