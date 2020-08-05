import React from 'react'
import { View, StyleSheet, FlatList, Text, StatusBar } from 'react-native'
import Orientation from 'react-native-orientation-locker'
import { get } from 'lodash'
import { screenWidth, screenHeight, setYAxisValue, setXAxisValue } from 'utils/utils'
import colors from 'utils/colors'
import Icon from './VectorIcon'
import ImageItem from './ImageItem'

/**
 * @param array images [{uri}]
 * @param number activeIndex
 * @param function onClose
 */


export default class LightBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeSlide: get(props, 'activeIndex', 0),
      portrait: true,
    }
  }

  componentDidMount() {
    Orientation.unlockAllOrientations()
    Orientation.addOrientationListener(this.onOrientationDidChange)
    setTimeout(() => {
      const firstItem = get(this.props, 'activeIndex', 0)
      if (this.carousel) {
        try {
          this.carousel.scrollToIndex({
            animated: false,
            index: firstItem,
          })
        } catch (error) {
          //
        }
      }
    }, 100)
  }

  componentWillUnmount() {
    Orientation.lockToPortrait()
    Orientation.removeOrientationListener(this.onOrientationDidChange)
  }

  renderItem = ({ item }) => {
    const { portrait } = this.state
    const size = portrait
      ? {
        width: screenWidth,
        height: screenHeight,
      }
      : { height: screenWidth, width: screenHeight }
    return <ImageItem size={size} uri={get(item, 'uri', null)} />
  };

  onOrientationDidChange = (orientation) => {
    this.setState({
      portrait: orientation === 'PORTRAIT',
    })
    const { activeSlide } = this.state
    setTimeout(() => {
      if (this.carousel) {
        this.carousel.scrollToIndex({
          animated: false,
          index: activeSlide,
        })
      }
    }, 100)
  };


  onViewableItemsChanged = ({ viewableItems }) => {
    this.setState({
      activeSlide: get(viewableItems, '[0].index', 0),
    })
  };

  onNext = () => {
    const { activeSlide } = this.state
    const length = get(this.props, 'images.length', 0)
    if (this.carousel && activeSlide + 1 < length) {
      this.carousel.scrollToIndex({
        animated: true,
        index: activeSlide + 1,
      })
    }
  };

  onBack = () => {
    const { activeSlide } = this.state
    if (this.carousel && activeSlide > 0) {
      this.carousel.scrollToIndex({
        animated: true,
        index: activeSlide - 1,
      })
    }
  };

  render() {
    const onClose = get(this.props, 'onClose', () => {})
    const images = get(this.props, 'images', [])
    const { activeSlide, portrait } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          horizontal
          pagingEnabled
          ref={(c) => {
            this.carousel = c
          }}
          data={images}
          keyExtractor={(item, index) => `${index}`}
          renderItem={this.renderItem}
          onViewableItemsChanged={this.onViewableItemsChanged}
          initialScrollIndex={activeSlide}
          getItemLayout={(data, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index,
          })}
          initialNumToRender={1}
        />
        <View style={[styles.header, !portrait && styles.landscapHeader]}>
          <View style={styles.btnClose}>
            <Icon
              name="ios-close"
              color={colors.WHITE}
              onPress={onClose}
              size={40}
            />
          </View>
          <Text style={styles.page}>
            {`${activeSlide + 1} / ${
              images.length
            }`}

          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  header: {
    height: setYAxisValue(64),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: setXAxisValue(10),
    position: 'absolute',
    left: 0,
    backgroundColor: colors.SMOKE,
    top: 0,
    right: 0,
  },
  page: {
    color: colors.WHITE,
    fontStyle: 'italic',
  },
  footer: {
    height: setYAxisValue(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: setXAxisValue(10),
    position: 'absolute',
    left: 0,
    bottom: 30,
    right: 0,
    backgroundColor: colors.SMOKE,
  },
  landscapHeader: {
    backgroundColor: 'transparent',
  },
  landscapFooter: {
    backgroundColor: 'transparent',
    bottom: screenWidth / 2 - setYAxisValue(50),
  },
  btnClose: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
})
