import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Platform } from 'react-native'
import { getHeight, getWidth, setValue, screenHeight } from 'utils/utils'
import colors from 'utils/colors'
import { Block } from 'galio-framework'
import DateTimePicker from '@react-native-community/datetimepicker'
import { get } from 'lodash'
import moment from 'moment'

/**
 * @param function onDateSelect
 * @param string date
 */
class PickerDate extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      date: get(props, 'date', null) ? new Date(moment(props.date, 'DD-MM-YYYY')) : new Date(),
    }
  }


  onDateChange = (event, date) => {
    this.setState({ date })
  }

  onDateSelect = () => {
    const { date } = this.state
    const { onDateSelect = () => {} } = this.props
    onDateSelect(date)
  }

  render() {
    const { style } = this.props
    const { date } = this.state
    return (
      Platform.OS === 'ios' ? (
        <Block safe style={[styles.DatePickerIOS, style]}>
          <Block middle right style={styles.wrap}>
            <TouchableOpacity onPress={this.onDateSelect} style={styles.btnDone}>
              <Text style={styles.txt}>Done</Text>
            </TouchableOpacity>
          </Block>
          <DateTimePicker
            onChange={this.onDateChange}
            mode="date"
            value={date}
            style={{ textColor: colors.BLACK }}
          />
        </Block>
      ) : null
    )
  }
}

export default PickerDate

const styles = StyleSheet.create({
  contain: {
    height: getHeight(52),
    width: getWidth(328),
    borderBottomWidth: getHeight(1),
    borderBottomColor: colors.GREY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: getWidth(10),
  },
  DatePickerIOS: {
    height: screenHeight / 3,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: setValue(20),
    borderTopRightRadius: setValue(20),
  },
  wrap: {
    height: getHeight(40),
    // borderBottomWidth: getHeight(0.5),
    // borderBottomColor: 'rgb(225,225,225)',
  },
  btnDone: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'EffraMedium-Regular',
    color: 'rgb(0, 122, 255)',
    paddingHorizontal: getWidth(16),
    paddingVertical: getHeight(10),
  },
})
