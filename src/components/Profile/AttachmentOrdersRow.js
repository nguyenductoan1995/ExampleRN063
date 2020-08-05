import React from 'react'
import { Block } from 'galio-framework'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { getHeight, getWidth, setValue } from 'utils/utils'
import colors from 'utils/colors'

/**
 * @param string id
 * @param string start
 * @param string end
 * @param string user
 * @param string status
 * @param function onPress
 * @param object style
 * @param  bool disabled
 */
export default class AttachmentOrdersRow extends React.PureComponent {
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
    const { onPress = () => {}, disabled, id, start, end, user, status, style } = this.props
    return (

      <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.contain, style]}>
        <Block row space="between" style={styles.row1}>
          <Block row>
            <Text style={styles.txt1}>
              ID:
              <Text style={styles.txt2}>{id}</Text>
            </Text>
            <Block style={styles.status}>
              <Text style={styles.txt3}>{status}</Text>
            </Block>
          </Block>
          <Text style={styles.txt4}>
            From:
            <Text style={styles.txt5}>{start}</Text>
          </Text>
        </Block>
        <Block row space="between" style={styles.row2}>
          <Block style={styles.wrapDesc}>
            <Text style={styles.txt6}>{user}</Text>
          </Block>
          <Text style={styles.txt4}>
            To:
            <Text style={styles.txt5}>{end}</Text>
          </Text>
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
    height: getHeight(75),
    paddingHorizontal: getWidth(10),
    paddingTop: getHeight(8),
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
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    color: 'rgba(0,0,0,0.38)',
  },
  txt2: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: 'rgba(0,0,0,0.87)',
  },
  status: {
    backgroundColor: 'rgba(38, 148, 120,0.2)',
    borderRadius: setValue(2),
    marginLeft: getWidth(8),
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
    fontSize: setValue(12),
    color: 'rgba(0,0,0,0.38)',
  },
  txt5: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: '#424242',
  },
  txt6: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: '#424242',
    opacity: 0.38,
  },
})
