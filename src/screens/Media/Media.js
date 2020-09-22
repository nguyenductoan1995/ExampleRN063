import React, { } from 'react'
import { Block } from 'galio-framework'
import { Text, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { screenWidth } from 'utils/utils'
import colors from 'utils/colors'
import { Header } from 'components/common/Header'
import * as Animatable from 'react-native-animatable'

export default class Media extends React.PureComponent {
  render() {
    return (
      <Block flex={1} style={styles.contain}>
        <Header />
        <Block center middle flex={1}>
          <Animatable.View animation="rotate" iterationCount="infinite" style={{ backgroundColor: 'red' }}>
            <Animatable.Text animation="lightSpeedOut" iterationCount="infinite">❤️</Animatable.Text>
          </Animatable.View>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    // backgroundColor: colors.GREEN,
  },
  image: {
    width: screenWidth,
    height: screenWidth,
  },
})
