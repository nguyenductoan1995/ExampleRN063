import React, { } from 'react'
import { Text } from 'react-native'
import { Block } from 'galio-framework'
import VectorIcon from 'components/common/VectorIcon'

export default class NewFeeds extends React.PureComponent {
  render() {
    return (
      <Block
        flex={1}
        middle
      >
        <VectorIcon
          name="caretright"
          type="ant"
          size={40}
        />
      </Block>
    )
  }
}
