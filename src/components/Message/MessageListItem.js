import React from 'react'
import { Block } from 'galio-framework'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { getWidth, getHeight, setValue } from 'utils/utils'
import colors from 'utils/colors'
import { upperCase } from 'lodash'

class MessageListItem extends React.PureComponent {
  get getStausStyle() {
    const { status } = this.props
    switch (status) {
      case 'PENDING':
        return [
          styles.status,
          { backgroundColor: colors.RED10 },
        ]
      case 'CLOSED':
        return [
          styles.status,
          { backgroundColor: colors.GREEN10 },
        ]
      default:
        return [
          styles.statusPending,
        ]
    }
  }

  get getStausTextStyle() {
    const { status } = this.props
    switch (status) {
      case 'PENDING':
        return [
          styles.txt4,
          { color: colors.RED },
        ]
      case 'CLOSED':
        return [
          styles.txt4,
          { color: colors.PRIMARY },
        ]
      default:
        return [
          styles.txt4,
          { color: colors.RED },
        ]
    }
  }

  render() {
    const { id, name, subject, date, message, status, onPress = () => {} } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.contain}>
        <Block row middle space="between" style={styles.row1}>
          <Text style={styles.txt1}>{name}</Text>
          <Text style={styles.txt2}>{date}</Text>
        </Block>
        <Block row middle space="between" style={styles.row2}>
          <Text style={styles.txt3}>{upperCase(subject)}</Text>
          <Block style={this.getStausStyle}>
            <Text style={this.getStausTextStyle}>{status}</Text>
          </Block>
        </Block>
        <Block style={styles.row3}>
          <Text style={styles.txt5} numberOfLines={2}>{message}</Text>
        </Block>
      </TouchableOpacity>
    )
  }
}

export default MessageListItem

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    // backgroundColor: 'skyblue',
    marginHorizontal: getWidth(16),
    height: getHeight(123),
    justifyContent: 'center',
    borderBottomWidth: getHeight(1),
    borderBottomColor: colors.GREY,
  },
  row1: {
    // backgroundColor: 'skyblue',
    marginBottom: getHeight(7),
  },
  txt1: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(14),
    color: colors.BLACK,
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: colors.BLACK38,
  },
  row2: {
    marginTop: getHeight(7),
    marginBottom: getHeight(3),
  },
  txt3: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(10),
    color: colors.PRIMARY,
  },
  txt4: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    paddingHorizontal: getWidth(6),
    paddingVertical: getHeight(2),
  },
  row3: {
    marginTop: getHeight(2),
  },
  txt5: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: colors.BLACK38,
  },
  status: {
    borderRadius: setValue(2),
  },
})
