import React from 'react'
import { Block } from 'galio-framework'
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { setValue, getWidth, getHeight } from 'utils/utils'
import { upperCase } from 'lodash'
import { DetailInfo } from 'utils/mockupData'


const Item = React.memo(({ item, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.txt}>{upperCase(item.name)}</Text>
  </TouchableOpacity>
))

export default class Detail extends React.PureComponent {
  renderItem = ({ item }) => {
    const { onPress } = this.props
    return (
      <Item onPress={() => { onPress(item) }} item={item} />
    )
  }

  render() {
    return (
      <Block middle style={styles.contain}>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          data={DetailInfo}
          renderItem={this.renderItem}
          numColumns={2}
        />
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {

  },
  item: {
    width: getWidth(153),
    height: getHeight(69),
    backgroundColor: 'rgba(38, 148, 120,0.2)',
    borderRadius: setValue(4),
    marginHorizontal: setValue(5),
    marginVertical: setValue(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(10),
  },
})
