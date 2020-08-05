import React from 'react'
import { Block } from 'galio-framework'
import { StyleSheet, FlatList } from 'react-native'
import { getHeight, setValue } from 'utils/utils'
import colors from 'utils/colors'
import { get } from 'lodash'
import { ListModalItem } from '.'

/**
 * @param function onPress
 * @param array data [{id, name}]
 * @param object style
 * @param string selected  id of object
 */
export default class ListModal extends React.PureComponent {
renderItem=({ item, index }) => {
  const name = get(item, 'name', '')
  const id = get(item, 'id', null)
  const isChecked = get(this.props, 'selected', false) === id
  const { onPress = () => {} } = this.props
  return (
    <ListModalItem
      name={name}
      isChecked={isChecked}
      onPress={() => (index === 0 ? onPress(null) : onPress(item))}
    />
  )
}

render() {
  const { data, style } = this.props
  return (
    <Block safe style={[styles.contain, style]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        data={data}
        renderItem={this.renderItem}
        contentContainerStyle={{ paddingTop: getHeight(11) }}
      />
    </Block>
  )
}
}

const styles = StyleSheet.create({
  contain: {
    height: getHeight(210),
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: setValue(9),
    borderTopRightRadius: setValue(9),
    overflow: 'hidden',
  },
})
