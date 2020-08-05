import React from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { Block } from 'galio-framework'
import { getHeight, setValue, getWidth } from 'utils/utils'
import colors from 'utils/colors'
import FastImage from 'react-native-fast-image'
import { get } from 'lodash'
import { ModalManager } from 'screens/Global'
import { LightBox } from 'components/common'

const DocumentItem = React.memo(({ uri, onPress = () => {} }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.item}>
    <FastImage
      resizeMode="cover"
      style={{
        height: getHeight(96),
        width: getWidth(96),
      }}
      source={{ uri }}
    />
  </TouchableOpacity>
))
/**
 * @param
 */
export default class AssignmentDocument extends React.PureComponent {
  onTapImage = (index, imagesList) => {
    ModalManager.show(
      <LightBox
        images={imagesList}
        activeIndex={index}
        onClose={ModalManager.hide}
      />,
    )
  };

  renderItem=({ item, index, ...rest }) => {
    const uri = get(item, 'uri', null)
    return (
      <DocumentItem
        onPress={() => this.onTapImage(index, rest.images)}
        uri={uri}
      />
    )
  }

  render() {
    const data = [
      { uri: 'https://data2.unhcr.org/images/documents/big_441d7f43ead31df601a2dc864f5d8ec564d2e7ae.jpg' },
      { uri: 'https://data2.unhcr.org/images/documents/big_441d7f43ead31df601a2dc864f5d8ec564d2e7ae.jpg' },
      { uri: 'https://data2.unhcr.org/images/documents/big_441d7f43ead31df601a2dc864f5d8ec564d2e7ae.jpg' },
    ]
    return (
      <Block style={styles.contain}>
        <Block>
          <Text style={styles.txt}>DOCUMENT</Text>
        </Block>
        <Block>
          <FlatList
            horizontal
            keyExtractor={(item, index) => `${index}`}
            data={data}
            renderItem={(param) => this.renderItem({ ...param, images: data })}
            style={styles.listDocument}
            showsHorizontalScrollIndicator={false}
          />
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    height: getHeight(170),
    paddingBottom: getHeight(52),
    paddingTop: getHeight(16),
    paddingHorizontal: getWidth(16),
  },
  txt: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(10),
    color: colors.PRIMARY,
  },
  listDocument: {
    paddingVertical: getHeight(11),
  },
  item: {
    marginRight: getWidth(20),
  },
})
