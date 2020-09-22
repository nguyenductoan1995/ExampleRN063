import React from 'react'
import { Animated, FlatList, Platform, PermissionsAndroid } from 'react-native'

import CameraRoll from '@react-native-community/cameraroll'
import { get } from 'lodash'
import Card from './WalletCard'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
const y = new Animated.Value(0)

const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
  useNativeDriver: true,
})

class FlatListCustom extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      page: null,
    }
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'ReactNativeForYou would like to access your photos!',
        },
      )
      if (result !== 'granted') {
        // console.log('Access to pictures was denied')
        return
      }
    }
    this.getData()
  }

  getData=() => {
    CameraRoll.getPhotos({
      first: 20,
      groupTypes: 'All',
      assetType: 'All',
    })
      .then((r) => {
        this.setState({
          images: get(r, 'edges', {}),
          page: get(r, 'page_info', {}),
        })
      },
      )
      .catch((err) => {
        // Error Loading Images
      })
  }

  LoadMore = () => {
    const { page, images } = this.state
    if (get(page, 'has_next_page')) {
      CameraRoll.getPhotos({
        first: 20,
        groupTypes: 'All',
        after: get(page, 'end_cursor'),
        assetType: 'All',
      })
        .then((r) => {
          this.setState({
            images: [...images, ...get(r, 'edges', [])],
            page: get(r, 'page_info', {}),
          })
        },
        )
        .catch((err) => {
          // Error Loading Images
        })
    }
  }

  render() {
    const { images } = this.state
    return (
      <AnimatedFlatList
        scrollEventThrottle={16}
        // bounces={false}
        data={images}
        onEndReachedThreshold={0.5}
        onEndReached={this.LoadMore()}
        renderItem={({ index, item }) => (
          <Card
            source={{ uri: get(item, 'node.image.uri') }}
            {...{ index, y }}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
        {...{ onScroll }}
      />
    )
  }
}

export default FlatListCustom
