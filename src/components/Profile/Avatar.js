import React from 'react'
import { Block } from 'galio-framework'
import { TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { getHeight, setValue, screenWidth } from 'utils/utils'
import FastImage from 'react-native-fast-image'
import { avatar } from 'assets/images'
import VectorIcon from 'components/common/VectorIcon'
import colors from 'utils/colors'
import ImagePicker from 'react-native-image-crop-picker'
import { isEmpty, get } from 'lodash'
import { ModalManager } from 'screens/Global'
import { ModalAddDocument } from 'components/IncorporationDocument'


export default class Avatar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = () => {
    ModalManager.show(
      <ModalAddDocument
        pressCamera={this.handleCamera}
        pressGallery={this.handleGallery}
        documentDisabled
      />,
      true, null, { justifyContent: 'flex-end' })
  }

  handleCamera = () => {
    const options = {
      cropping: true,
      includeBase64: true,
      avoidEmptySpaceAroundImage: false,
    }
    ImagePicker.openCamera(options)
      .then((response) => {
        const uri = response.path
        if (!isEmpty(uri)) {
          ModalManager.hide()
          this.setState({
            uri,
          })
        }
      })
    const { onPickerSelect = () => {} } = this.props
    const { attachments } = this.state
    onPickerSelect(attachments)
  }

  handleGallery = () => {
    // const { } = this.props
    const options = {
      cropping: true,
      includeBase64: true,
      avoidEmptySpaceAroundImage: false,
    }
    ImagePicker.openPicker(options)
      .then((response) => {
        const uri = response.path
        if (!isEmpty(uri)) {
          ModalManager.hide()
          this.setState({
            uri,
          })
        }
      })
  };

  render() {
    const { uri } = this.state
    return (
      <Block middle style={styles.contain}>
        <Block style={styles.wrap}>
          <FastImage
            style={styles.avatar}
            source={uri ? { uri } : avatar}
          />
        </Block>
        <TouchableOpacity
          onPress={this.handleChange}
          style={styles.btnChangeAvatar}
        >
          <VectorIcon
            color={colors.WHITE}
            size={setValue(16)}
            type="ent"
            name="plus"
          />
        </TouchableOpacity>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    paddingTop: getHeight(29),
    paddingBottom: getHeight(16),
  },
  wrap: {
    width: getHeight(100),
    height: getHeight(100),
    backgroundColor: '#d8d8d8',
    borderRadius: getHeight(50),
  },
  avatar: {
    width: getHeight(100),
    height: getHeight(100),
    borderRadius: getHeight(50),
  },
  btnChangeAvatar: {
    width: getHeight(24),
    height: getHeight(24),
    borderRadius: getHeight(12),
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: getHeight(18),
    right: screenWidth / 2 - getHeight(45),
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 4,
      },
    }),
  },
})
