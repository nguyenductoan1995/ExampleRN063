import React from 'react'
import { Block } from 'galio-framework'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { getHeight, setValue, getWidth } from 'utils/utils'
import colors from 'utils/colors'
import FastImage from 'react-native-fast-image'
import { camera, view, document } from 'assets/images'

/**
 * @param function pressCamera
 * @param function pressGallery
 * @param function pressDocument
 * @param bool documentDisabled hide button PDF
 */

export default class ModalAddDocument extends React.PureComponent {
  render() {
    const {
      pressCamera = () => {},
      pressGallery = () => {},
      pressDocument = () => {},
      documentDisabled = false,
    } = this.props
    return (
      <Block row middle space="around" style={styles.contain}>
        <TouchableOpacity onPress={pressCamera}>
          <Block center>
            <FastImage
              resizeMode="contain"
              style={styles.icon}
              source={camera}
            />
            <Text style={styles.txt}>Camera</Text>
          </Block>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressGallery}>
          <Block center>
            <FastImage
              resizeMode="contain"
              style={styles.icon}
              source={view}
            />
            <Text style={styles.txt}>Gallery</Text>
          </Block>
        </TouchableOpacity>
        {!documentDisabled && (
          <TouchableOpacity onPress={pressDocument}>
            <Block center>
              <FastImage
                resizeMode="contain"
                style={styles.icon}
                source={document}
              />
              <Text style={styles.txt}>Documnet</Text>
            </Block>
          </TouchableOpacity>
        )}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    height: getHeight(172),
    borderTopLeftRadius: setValue(9),
    borderTopRightRadius: setValue(9),
    backgroundColor: colors.WHITE,
  },
  icon: {
    height: getHeight(30),
    width: getWidth(30),
  },
  txt: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: 'rgba(0,0,0,0.87)',
    marginTop: getHeight(10),
  },
})
