import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Block } from 'galio-framework'
import colors from 'utils/colors'
import VectorIcon from 'components/common/VectorIcon'
import { getHeight, getWidth, setValue } from 'utils/utils'
import FastImage from 'react-native-fast-image'
import { touchID, logo, treeGrey } from 'assets/images'
import TouchID from 'react-native-touch-id'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { AuthContext } from 'navgation/context'


const LoginWithTouchID = ({ logged }) => {
  const { loginTouchID, authStackCancel } = React.useContext(AuthContext)

  React.useEffect(() => {
    onPressHandle()
  }, [])

  const onPressHandle = () => {
    TouchID.isSupported()
      .then((biometryType) => {
        if (biometryType === 'FaceID' || biometryType === 'TouchID') {
          TouchIDHandle()
        } else if (biometryType === true) {
      	  TouchIDHandle()
        }
      })
      .catch((error) => {
        authStackCancel()
        // Failure code if the user's device does not have touchID or faceID enabled
        // console.tron.log('support', error)
      })
  }

  const TouchIDHandle = () => {
    const optionalConfigObject = {
      title: 'Authentication Required', // Android
      imageColor: '#e00606', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      //  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      //    unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    }
    TouchID.authenticate('Use fingerprint to log into the application', optionalConfigObject)
      .then((success) => {
        nextScreen()
      })
      .catch((error) => {
        const key = get(error, 'name')
        if (key === 'LAErrorUserCancel') {
          authStackCancel()
        }
        // nextScreen()
      })
  }


  const nextScreen = () => {
    if (logged) {
      loginTouchID()
    }
  }


  return (
    <Block flex={1} style={styles.contain}>
      <Block style={styles.iconLock}>
        <VectorIcon color={colors.PRIMARY} size={35} type="simple" name="lock" />
      </Block>
      <Block>
        <FastImage resizeMode="contain" style={styles.logo} source={logo} />
      </Block>
      <TouchableOpacity onPress={onPressHandle}>
        <FastImage resizeMode="contain" style={styles.touchID} source={touchID} />
      </TouchableOpacity>
      <Text style={styles.txt1}>Touch the fingerprint sensor</Text>
      <Block bottom style={styles.wrapTree}>
        <FastImage
          resizeMode="contain"
          style={styles.tree}
          source={treeGrey}
        />
      </Block>
    </Block>
  )
}

const mapStateToProps = ({ authStore }) => {
  const logged = get(authStore, 'LoginData')
  return {
    logged,
  }
}


export default connect(mapStateToProps)(LoginWithTouchID)

const styles = StyleSheet.create({
  contain: {
    backgroundColor: colors.WHITE,
    alignItems: 'center',
  },
  iconLock: {
    marginTop: getHeight(81),
  },
  logo: {
    height: getHeight(38),
    width: getWidth(207),
    marginTop: getHeight(33),
  },
  touchID: {
    width: getWidth(60),
    height: getHeight(60),
    marginTop: getHeight(95),
  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    lineHeight: setValue(24),
    marginTop: getHeight(18),
  },
  wrapTree: {
    position: 'absolute',
    bottom: 0,
  },
  tree: {
    width: getWidth(110),
    height: getHeight(72),
  },
})
