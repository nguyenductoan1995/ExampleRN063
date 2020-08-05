import React from 'react'
import { Block } from 'galio-framework'
import { screenWidth, getWidth, getHeight, setValue } from 'utils/utils'
import { TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'
import VectorIcon from 'components/common/VectorIcon'
// import ImagePicker from 'react-native-image-picker'
import { get, isEmpty } from 'lodash'
import { ModalManager } from 'screens/Global'
import ImagePicker from 'react-native-image-crop-picker'
import DocumentPicker from 'react-native-document-picker'
import RNFS from 'react-native-fs'
import ModalAddDocument from './ModalAddDocument'

/**
 * @param function onPickerSelect
 */
export default class ListDocumnet extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      images: [{ append: true }],
      attachments: [],
    }
  }

  handleGallery = () => {
    const { onPickerSelect = () => {} } = this.props
    const { images, attachments } = this.state
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
          images.pop()
          this.setState({
            images: [...images, { uri }, { append: true }],
            attachments: [...attachments, {
              uri,
              type: get(response, 'type'),
              FileName: get(response, 'filename', '***.jpg'),
              Binary: get(response, 'data'),
              Extension: get(response, 'mime'),
            }],
          }, () => onPickerSelect([...attachments, {
            uri,
            type: get(response, 'type'),
            FileName: get(response, 'filename', '***.jpg'),
            Binary: get(response, 'data'),
            Extension: get(response, 'mime'),
          }]))
        }
      })
  };

  handleCamera = () => {
    const { onPickerSelect = () => {} } = this.props
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
          const { images, attachments } = this.state
          images.pop()
          this.setState({
            images: [...images, { uri }, { append: true }],
            attachments: [...attachments, {
              uri,
              type: get(response, 'type'),
              FileName: get(response, 'filename', '***.jpg'),
              Binary: get(response, 'data'),
              Extension: get(response, 'mime'),
            }],
          }, () => onPickerSelect([...attachments, {
            uri,
            type: get(response, 'type'),
            FileName: get(response, 'filename', '***.jpg'),
            Binary: get(response, 'data'),
            Extension: get(response, 'mime'),
          }]))
        }
      })
  }


  // onDeleteImage = ({ uri }) => () => this.setState(({ images, attachments }) => ({
  //   images: images.filter((item) => item.uri !== uri),
  //   attachments: attachments.filter((item) => item.path !== uri),
  // }))

  onDeleteImage = ({ uri }) => {
    this.setState(({ images, attachments }) => ({
      images: images.filter((item) => item.uri !== uri),
      attachments: attachments.filter((item) => item.uri !== uri),
    }))
    const { onPickerSelect = () => {} } = this.props
    onPickerSelect(this.state.attachments.filter((item) => item.uri !== uri))
  }

  handleDocument = () => {
    const { onPickerSelect = () => {} } = this.props
    DocumentPicker.pick({ type: [DocumentPicker.types.pdf] })
      .then((response) => {
        const uri = get(response, 'uri')
        if (!isEmpty(uri)) {
          RNFS.readFile(uri, 'base64')
            .then((res) => {
              ModalManager.hide()
              const { images, attachments } = this.state
              images.pop()
              this.setState({
                images: [...images, { uri }, { append: true }],
                attachments: [...attachments, {
                  uri,
                  type: get(response, 'type'),
                  FileName: get(response, 'name', '***.jpg'),
                  Binary: res,
                }],
              }, () => onPickerSelect([...attachments, {
                uri,
                type: get(response, 'type'),
                FileName: get(response, 'name', '***.jpg'),
                Binary: res,
              }]))
            })
            .catch(() => {
              ModalManager.hide()
            })
        }
      })
  }

  handleButtonPress = () => {
    ModalManager.show(
      <ModalAddDocument
        pressCamera={this.handleCamera}
        pressGallery={this.handleGallery}
        pressDocument={this.handleDocument}
      />,
      true, null, { justifyContent: 'flex-end' })
  }

  renderItem = ({ item }) => (
    item.append ? (
      <Block style={styles.wrap}>
        <TouchableOpacity
          style={[styles.imageWrap, styles.cameraButton]}
          onPress={this.handleButtonPress}
        >
          <VectorIcon type="ant" name="plus" size={24} />
        </TouchableOpacity>
      </Block>
    ) : (
      <Block source={item} style={styles.wrap}>
        <FastImage
          resizeMode="cover"
          source={item}
          style={styles.imageWrap}
          onLayout={() => this.listRef.scrollToEnd()}
        />
        <TouchableOpacity style={styles.deleteButton} onPress={() => this.onDeleteImage(item)}>
          <VectorIcon color="#646464" size={16} name="closecircle" type="ant" />
        </TouchableOpacity>
      </Block>
    )
  )

  render() {
    const { images } = this.state
    return (
      <Block left style={styles.contain}>
        <FlatList
          ref={(ref) => {
            this.listRef = ref
          }}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          data={images}
          renderItem={this.renderItem}
          style={{ width: screenWidth }}
          showsHorizontalScrollIndicator={false}
        />
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    paddingVertical: getHeight(10),
  },
  wrap: {
    height: getHeight(60),
    width: getHeight(52),
    justifyContent: 'flex-end',
    marginRight: getWidth(26),
  },
  imageWrap: {
    backgroundColor: '#e7e7e7',
    height: getHeight(52),
    width: getHeight(52),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: setValue(1),
    borderWidth: setValue(0.5),
    borderColor: '#b1b1b1',
  },
  deleteButton: {
    position: 'absolute',
    right: getWidth(-8),
    top: 0,
  },
})
