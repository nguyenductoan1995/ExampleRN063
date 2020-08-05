import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Platform } from 'react-native'
import { getHeight, getWidth, setValue, screenHeight } from 'utils/utils'
import colors from 'utils/colors'
import { ModalManager } from 'screens/Global'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker'
import { get } from 'lodash'
import { Block } from 'galio-framework'
import VectorIcon from './VectorIcon'
import { DateModal } from '.'

/**
 * @param function onDateSelect
 * @param object style
 * @param string placeholder
 * @param string date
 */
class DatePickers extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      date: get(props, 'date', null) ? moment(get(props, 'date', null), 'DD-MM-YYYY').format('DD/MM/YYYY') : null,
      showPicker: false,
    }
  }

  get timeStyle() {
    const { date } = this.state
    if (date) {
      return [
        styles.datetxt,
      ]
    }
    return [
      styles.txt,
    ]
  }

  get wrapStyle() {
    const { date } = this.state
    if (date) {
      return [
        styles.contain,
        styles.haveValue,
      ]
    }
    return [styles.contain]
  }

  get placeholder() {
    const { date } = this.state
    if (!date) {
      return [
        styles.placeholder,
      ]
    }
    return [
      styles.placeholder,
    ]
  }

  onDateChange = (event, date) => {
    this.setState({ showPicker: false })
    if (date) {
      this.onDateSelect(date)
    }
  }

  onDateSelect = (date) => {
    const { onDateSelect = () => {} } = this.props
    onDateSelect(date)
    ModalManager.hide()
    const dateShow = moment(date).format('DD/MM/YYYY')
    this.setState({ date: dateShow })
  }

  onSelectDate = () => {
    const { date } = this.props
    if (Platform.OS === 'ios') {
      ModalManager.show(
        <DateModal
          date={date}
          onDateSelect={this.onDateSelect}
        />, true, null, { justifyContent: 'flex-end' })
    }
    this.setState({ showPicker: true })
  }

  render() {
    const { placeholder, date: dates, style = {} } = this.props
    const { date, showPicker } = this.state
    return (
      <Block middle style={[style]}>
        <Block top style={styles.wrapPlacholder}>
          <Text style={this.placeholder}>{date && placeholder}</Text>
        </Block>
        <TouchableOpacity
          onPress={this.onSelectDate}
          activeOpacity={0.8}
          style={this.wrapStyle}
        >
          <Text style={this.timeStyle}>{date || placeholder}</Text>
          <VectorIcon
            name="date-range"
            type="md"
            size={setValue(24)}
            color="rgba(51, 51, 51, 0.54)"
          />
        </TouchableOpacity>
        {Platform.OS === 'android' && showPicker && (
        <DateTimePicker
          onChange={this.onDateChange}
          mode="date"
          value={dates ? new Date(moment(dates, 'DD-MM-YYYY')) : new Date()}
          style={{ textColor: colors.BLACK }}
          timeZoneOffsetInMinutes={-7 * 60}
        />
        )}
      </Block>
    )
  }
}

export default DatePickers

const styles = StyleSheet.create({
  contain: {
    height: getHeight(40),
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
  txt: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    color: 'rgba(0,0,0,0.38)',
  },
  datetxt: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
  },
  haveValue: {
    borderBottomColor: colors.PRIMARY,
  },
  placeholder: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: colors.BLACK38,
  },
  wrapPlacholder: {

  },
})
