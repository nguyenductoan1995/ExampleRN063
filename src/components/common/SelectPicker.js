
import React, { Component } from 'react'
import { Block } from 'galio-framework'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { get } from 'lodash'
import { getHeight, getWidth, setValue, screenWidth } from 'utils/utils'
import VectorIcon from 'components/common/VectorIcon'
import { ModalManager } from 'screens/Global'
import { ListModal } from 'components/ListModal'

/**
 * @param array data [{id, name}]
 * @param string placeholder
 * @param object styleModal
 */
class SelectPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }

onSelect = (selected) => {
  this.setState({ selected })
  ModalManager.hide()
}

  openModal = () => {
    const { data, styleModal } = this.props
    const selected = get(this.state, 'selected.id')
    ModalManager.show(<ListModal
      selected={selected}
      onPress={this.onSelect}
      style={[styles.modal, styleModal]}
      data={data}
    />, true, null, { justifyContent: 'flex-end' })
  }

  render() {
    const { selected } = this.state
    const { placeholder } = this.props
    const valueShow = get(selected, 'name')
    return (
      <TouchableOpacity
        onPress={this.openModal}
        style={styles.contain}
      >
        <Text style={styles.txt1}>{`${valueShow || 'All'} ${placeholder}`}</Text>
        <Block row middle>
          {/* <Text style={styles.txt2}>{valueShow}</Text> */}
          <VectorIcon color="rgba(0,0,0,0.54)" size={10} type="ant" name="caretdown" />
        </Block>
      </TouchableOpacity>
    )
  }
}

export default SelectPicker

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: getHeight(40),
    width: screenWidth,
    backgroundColor: '#eeeeee',
    paddingHorizontal: getWidth(16),
  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: 'rgba(0,0,0,0.54)',
  },
  txt2: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(14),
    color: 'rgba(0,0,0,0.54)',
    marginRight: getWidth(11),
  },
  modal: {
    height: getHeight(258),
  },
})
