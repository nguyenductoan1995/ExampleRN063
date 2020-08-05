import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Block } from 'galio-framework'
import colors from 'utils/colors'
import { getHeight, setYAxisValue, setValue } from 'utils/utils'
import VectorIcon from 'components/common/VectorIcon'
import { ModalManager } from 'screens/Global'
import { get } from 'lodash'
import { ListModal } from '.'

/**
 * @param function onSelect
 * @param string placeholderTextColor
 * @param array — data [{id, name}]
 * @param string initValue
 */
export default class List extends React.PureComponent {
  constructor(props) {
    super(props)
    const { data = [], selected } = props
    this.state = {
      isFocus: false,
      text: null,
      selectedItem: data.find((item) => String(item.id) === String(selected)),
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.selected === -1) {
      return {
        selectedItem: null,
        selected: nextProps.selected,
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      // Thục hiện update state
      this.onChangeData()
    }
  }

onChangeData = () => {
  const { onSelect } = this.props
  onSelect(null)
}

  getStyleSelect = () => {
    const { selectedItem } = this.state
    const { placeholderTextColor, initValue } = this.props
    if (selectedItem || initValue) {
      return {
        fontFamily: 'Effra-Regular',
        ...Platform.select({
          ios: {
            fontSize: setValue(16),
          },
          android: {
            fontSize: setValue(14),
          },
        }),
        color: colors.BLACK,
      }
    }
    return [{
      fontFamily: 'Effra-Regular',
      fontSize: setValue(16),
    }, placeholderTextColor && { color: placeholderTextColor }]
  }

  onModalSelected = (selectedItem) => {
    const { onSelect = () => {} } = this.props
    onSelect(selectedItem)
    this.setState({ selectedItem })
    ModalManager.hide()
  }

  onSelect = () => {
    const selected = get(this.state, 'selectedItem.id', null)
    const { data, style } = this.props
    ModalManager.show(<ListModal style={style} data={data} selected={selected} onPress={this.onModalSelected} />, true, null, { justifyContent: 'flex-end' })
  }

  render() {
    const { placeholder, initValue } = this.props
    const { selectedItem } = this.state
    const selected = get(selectedItem, 'name', null)
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.onSelect}
        style={styles.contain}
      >
        <Block middle left style={styles.input}>
          <Text style={this.getStyleSelect()}>{selected || initValue || placeholder}</Text>
        </Block>
        <Block bottom style={styles.buttonDown}>
          <VectorIcon color="rgba(0,0,0,0.54)" size={10} type="ant" name="caretdown" />
        </Block>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: colors.WHITE,
  },
  textArea: {
    // backgroundColor: colors.WHITE,
    borderBottomWidth: getHeight(1),
    borderBottomColor: colors.GREY,
    height: setYAxisValue(48),
  },
  input: {
    flex: 1,
    //  padding: setValue(10),
    padding: 0,
    height: setYAxisValue(40),
  },
  disabled: {
    // backgroundColor: colors.GREY,
  },
  title: {
    fontFamily: 'Effra-Regular',
    fontSize: 12,
    color: 'rgba(58,58,58,0.38)',
    lineHeight: 12,
  },
  buttonDown: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
