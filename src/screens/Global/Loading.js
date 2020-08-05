import React, { PureComponent } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

let instance = null
class Loading extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    instance = this
  }

  componentDidMount() {}

  componentWillUnmount() {}

  hide() {
    this.setState({
      show: false,
    })
  }

  show() {
    const { show } = this.state
    if (!show) {
      this.setState({
        show: true,
      })
    }
  }

  render() {
    const { show } = this.state
    if (!show) {
      return null
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator color="white" size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
  },
})

const PageSearching = {
  Component: Loading,
  show() {
    if (instance !== null) {
      instance.show()
    }
  },
  hide() {
    if (instance !== null) {
      instance.hide()
    }
  },
}

export default PageSearching
