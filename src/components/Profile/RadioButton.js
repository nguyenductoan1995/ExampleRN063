import React from 'react'
import { Block } from 'galio-framework'
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native'
import { getHeight, getWidth, setValue, screenWidth } from 'utils/utils'
import VectorIcon from 'components/common/VectorIcon'
import colors from 'utils/colors'
import { get } from 'lodash'


const Item = React.memo(({ onPress = () => {}, isChecked, name }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.item}>
    <Block row>
      <VectorIcon color={colors.PRIMARY} size={24} name={isChecked ? 'md-radio-button-on' : 'md-radio-button-off'} />
      <Text style={styles.txt}>{name}</Text>
    </Block>
  </TouchableOpacity>
))
/**
 * @param array data
 * @param object style
 * @param function onSelect={(item,index)=>{}}
 */
export default class RadioButton extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: get(props, 'selected', 0),
    }
  }

  onCheck = (item, index) => {
    this.setState({ isChecked: index })
    const {
      onSelect = () => {},
    } = this.props
    onSelect(item, index)
  }

  renderItem =({ item, index }) => {
    const name = get(item, 'name')
    const { isChecked } = this.state
    return (
      <Item
        isChecked={isChecked === index}
        name={name}
        onPress={() => this.onCheck(item, index)}
      />
    )
  }

  render() {
    const { style, data = [], title, selected } = this.props
    return (
      <Block>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          bounces={false}
          horizontal
          keyExtractor={(item, index) => `${index}`}
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={[styles.contain, style]}
          extraData={[selected]}
        />
      </Block>
    )
  }
}
const styles = StyleSheet.create({
  contain: {
    height: getHeight(53),
    width: screenWidth,
    paddingHorizontal: getWidth(17),
  },
  title: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: 'rgba(86, 86, 86, 0.38)',
    textAlign: 'left',
    paddingHorizontal: getWidth(17),
    paddingTop: getHeight(17),
  },
  txt: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    lineHeight: setValue(24),
    paddingLeft: setValue(6),
  },
  item: {
    justifyContent: 'center',
    marginRight: getWidth(20),
  },

})
