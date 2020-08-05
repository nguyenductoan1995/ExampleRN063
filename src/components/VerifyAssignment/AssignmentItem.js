import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Block } from 'galio-framework'
import { getHeight, getWidth, setValue } from 'utils/utils'
import colors from 'utils/colors'

export default class AssignmentItem extends React.PureComponent {
  get statusView() {
    const { status } = this.props
    switch (status) {
      case 'ACCEPTED':
        return [
          styles.statusView,
          styles.viewAccepted,
        ]
      case 'REJECTED':
        return [
          styles.statusView,
          styles.viewRejected,
        ]
      default:
        return []
    }
  }

  get statusTxt() {
    const { status } = this.props
    switch (status) {
      case 'ACCEPTED':
        return [styles.statusTxt, styles.txtAccepted]
      case 'REJECTED':
        return [styles.statusTxt, styles.txtRejected]
      default:
        return [styles.statusTxt, styles.txtAccepted]
    }
  }

  get status() {
    const { status } = this.props
    switch (status) {
      case 'ACCEPTED':
      case 'REJECTED':
        return status
      default:
        return ''
    }
  }

  render() {
    const { id, name, price, time, onPress = () => {}, status } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
        <Block style={styles.contain}>
          <Block row space="between" style={styles.row1}>
            <Block row middle>
              <Text style={styles.txt1}>
                <Text style={styles.txt2}>ID:</Text>
                {id}
              </Text>
              {status && (
              <Block style={this.statusView}>
                <Text style={this.statusTxt}>{this.status}</Text>
              </Block>
              )}
            </Block>
            <Text style={styles.txt3}>{`£${price}`}</Text>
          </Block>
          <Block space="between" row style={styles.row2}>
            <Text style={styles.txt4}>{name}</Text>
            <Text style={styles.txt5}>{time}</Text>
          </Block>
        </Block>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  contain: {
    height: getHeight(74),
    width: getWidth(348),
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY,
    paddingHorizontal: getWidth(10),
    justifyContent: 'center',
  },
  row1: {
    marginBottom: getHeight(4),
  },
  row2: {
    marginTop: getHeight(4),
  },
  txt1: {
    fontSize: setValue(16),
    color: colors.BLACK,
    fontFamily: 'Effra-Bold',
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    color: 'rgba(0,0,0,0.38)',
  },
  txt3: {

    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: colors.PRIMARY,
  },
  txt4: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: 'rgba(0,0,0,0.38)',
  },
  txt5: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: 'rgba(0,0,0,0.38)',
  },
  statusView: {
    marginLeft: getWidth(10),
    paddingHorizontal: getWidth(6),
    paddingVertical: getHeight(3),
    borderRadius: setValue(2),
  },
  statusTxt: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
  },
  viewAccepted: {
    backgroundColor: 'rgba(38, 148, 120,0.2)',
  },
  viewRejected: {
    backgroundColor: 'rgba(208, 2, 27,0.1)',
  },
  txtAccepted: {
    color: colors.PRIMARY,
  },
  txtRejected: {
    color: '#d0021b',
  },

})
