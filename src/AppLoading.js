import React from 'react'
import { View, StatusBar, Keyboard, Platform } from 'react-native'
import App from 'navgation'
import { ModalManager, Loading } from 'screens/Global'
import { get } from 'lodash'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import axios from 'axios'

const LoadingAsync = ({ logged, authData }) => {
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    listenKeyboard()
    setTimeout(() => {
      onStart()
    }, 1000)
  }, [])

  const listenKeyboard = () => {
    const isIOS = Platform.OS === 'ios'
    if (isIOS) {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', keyboardWillShow)
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', keyboardWillHide)
    }
  }

  // componentWillUnmount() {
  //   const isIOS = Platform.OS === 'ios'
  //   if (isIOS) {
  //     this.keyboardWillShowSub.remove()
  //     this.keyboardWillHideSub.remove()
  //   }
  // }

  const keyboardWillShow = (event) => {
    const heights = get(event, 'endCoordinates.height')
    setHeight(heights)
  }

  const keyboardWillHide = () => {
    setHeight(0)
  }

  const onStart = () => {
    if (logged) {
      axios.defaults.headers.common.CompanyID = get(logged, 'CompanyID')
      axios.defaults.headers.common.ContractorID = get(logged, 'ContractorID')
    }
    axios.defaults.headers.common.ClientID = get(authData, 'apiclientid')
    axios.defaults.headers.common.ClientSecret = get(authData, 'apiclientsecret')
    SplashScreen.hide()
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <App />
      <Loading.Component />
      <ModalManager.Component />
      <View style={[{ height: 0 }, { height }]} />
    </View>
  )
}


const mapStateToProps = ({ authStore }) => {
  const logged = get(authStore, 'LoginData')
  const authData = get(authStore, 'AuthorisationData')
  return {
    logged,
    authData,
  }
}


export default connect(mapStateToProps)(LoadingAsync)

LoadingAsync.propTypes = {}

LoadingAsync.defaultProps = {}
