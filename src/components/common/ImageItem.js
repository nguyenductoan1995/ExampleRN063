import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'
import { screenWidth, screenHeight } from 'utils/utils'
import { Block } from 'galio-framework'

export default class ImageItem extends React.PureComponent {
  state = { loaded: false };

  render() {
    const { uri, size } = this.props
    const { loaded } = this.state
    return (
      <View style={styles.imageWrap}>
        <FastImage
          source={
            uri
              ? { uri }
              : { uri: 'https://via.placeholder.com/360x920?text=No image' }
          }
          style={[styles.imageWrap, size]}
          onLoadStart={() => this.setState({ loaded: false })}
          onLoadEnd={() => this.setState({ loaded: true })}
        />
        {!loaded ? (
          <Block style={styles.loading}>
            <ActivityIndicator />
          </Block>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageWrap: {
    resizeMode: 'contain',
  },
  loading: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
