import React from 'react'
import { get } from 'lodash'
import FastImage from 'react-native-fast-image'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ModalManager } from 'screens/Global'
import { LightBox } from 'components/common'
import { getWidth, getHeight } from 'utils/utils'
import { BubbleReceive, BubbleSent } from '../index'

/**
 * @param array data
 * @param bool isSent
 */
class Attachments extends React.PureComponent {
opendImage = (data) => {
  ModalManager.show(
    <LightBox
      images={data}
      activeIndex={0}
      onClose={ModalManager.hide}
    />,
  )
}

render() {
  const { data = [], isSent = false } = this.props
  const item = data.find((items) => items.Extension === 'PNG')
  const uri = get(item, 'URL')
  if (!uri) return null
  return (
    isSent ? (
      <BubbleSent
        attach={(
          <TouchableOpacity disabled={!uri} onPress={() => this.opendImage([{ uri }])}>
            <FastImage resizeMode="contain" source={uri && { uri }} style={{ width: getWidth(150), height: getHeight(150) }} />
          </TouchableOpacity>
      )}
      />
    ) : (
      <BubbleReceive
        attach={(
          <TouchableOpacity disabled={!uri} onPress={() => this.opendImage([{ uri }])}>
            <FastImage resizeMode="contain" source={uri && { uri }} style={{ width: getWidth(150), height: getHeight(150) }} />
          </TouchableOpacity>
      )}
      />
    )

  )
}
}

export default Attachments

const styles = StyleSheet.create({

})
