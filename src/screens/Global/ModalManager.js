// @flow
import React, { PureComponent } from 'react'
import { View } from 'react-native'
import RNModal from 'react-native-modal'

let instance
class Modal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      formComponent: null,
      touchBackDropToHide: true,
      presentationStyle: undefined,
      style: null,
    }
    instance = this
  }

  onBackdropPress = () => {
    const { touchBackDropToHide } = this.state
    if (touchBackDropToHide) this.hide()
  };

  hide() {
    this.setState({
      show: false,
      formComponent: null,
    })
  }

  show(formComponent, touchBackDropToHide, presentationStyle, style) {
    const { show } = this.state
    if (!show) {
      this.setState({
        show: true,
        formComponent,
        touchBackDropToHide,
        presentationStyle,
        style,
      })
    }
  }

  render() {
    const { show, formComponent, presentationStyle, style } = this.state
    return (
      <RNModal
        presentationStyle={presentationStyle}
        isVisible={show}
        style={[{ margin: 0 }, style]}
        animationIn="fadeInUp"
        animationOut="fadeOut"
        useNativeDriver
        onBackButtonPress={this.onBackdropPress}
        onBackdropPress={this.onBackdropPress}
      >
        {formComponent || <View />}
      </RNModal>
    )
  }
}

const ModalPage = {
  Component: Modal,
  show(formComponent, touchBackDropToHide = true, presentationStyle = undefined, style) {
    if (instance) {
      instance.show(formComponent, touchBackDropToHide, presentationStyle, style)
    }
  },
  hide() {
    if (instance) {
      instance.hide()
    }
  },
}

export default ModalPage
