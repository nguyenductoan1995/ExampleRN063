import React from 'react'
import { Block } from 'galio-framework'
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { setValue, getWidth, getHeight } from 'utils/utils'
import VectorIcon from 'components/common/VectorIcon'
import FastImage from 'react-native-fast-image'
import { Profile } from 'utils/mockupData'

const Item = React.memo(({ item, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Block flex={1} middle row space="between">
      <Block center row>
        <FastImage
          source={item.icon}
          style={styles.icon}
        />
        <Text style={styles.txt}>{item.name}</Text>
      </Block>
      <Block>
        {item.name !== 'Logout' && (
        <VectorIcon
          type="fa"
          name="angle-right"
          size={16}
          style={styles.icon}
        />
        )}
      </Block>
    </Block>
  </TouchableOpacity>
))

/**
 * @param array data
 */
export default class Function extends React.PureComponent {
  renderItem = ({ item }) => {
    const { onPress = () => {} } = this.props
    return (
      <Item onPress={() => onPress(item)} item={item} />
    )
  }

  render() {
    const { data } = this.props
    return (
      <Block center style={styles.contain}>
        <FlatList
          bounces={false}
          keyExtractor={(item, index) => `${index}`}
          data={data || Profile}
          renderItem={this.renderItem}
        />
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {

  },
  item: {
    height: getHeight(50),
    width: getWidth(320),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.19)',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    lineHeight: setValue(19),
    color: 'rgba(0,0,0,0.87)',
    paddingLeft: setValue(7),
  },
  icon: {
    width: getWidth(20),
    height: getHeight(20),
  },
})
