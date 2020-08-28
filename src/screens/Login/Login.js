import React from 'react'
import { StyleSheet, Text, Platform, TouchableOpacity, StatusBar } from 'react-native'
import { Block } from 'galio-framework'
import colors from 'utils/colors'
import { getHeight, getWidth, setValue, screenWidth } from 'utils/utils'
import { Input, Button } from 'components/common'
import { ScrollView } from 'react-native-gesture-handler'
import screens from 'navgation/screens'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { AuthContext } from 'navgation/context'
import { login } from 'store/Authorisation/actions'

const Login = ({ doLogin, AuthorisationData, navigation }) => {
  const { mainStack } = React.useContext(AuthContext)

  const [username, setUserName] = React.useState('')
  const [password, setPassWord] = React.useState('')
  const [pin, setPin] = React.useState('')

  const forgotPassword = () => {
    navigation.navigate(screens.ForgotPassWord)
  }

  const onLogin = () => {
    // const clientID = get(AuthorisationData, 'apiclientid')
    // const clientSecret = get(AuthorisationData, 'apiclientsecret')
    doLogin({
      params: {
        // country: 'Vietnam',
      },
      cb: () => { onNext({ success: true }) },
    })
    // onNext({ success: true })
  }

  const onNext = ({ success, errorMessage }) => {
    if (success) {
      return mainStack()
    }
    alert(errorMessage)
  }
  return (
    <Block flex={1} style={{ backgroundColor: colors.WHITE }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY} />
      <Block
        space="between"
        row
        style={styles.header}
      >
        <Block left bottom style={styles.wrapTxt}>
          <Text style={styles.txt1}>Welcome to</Text>
          <Text style={styles.txt2}>Exmample RN0.63 </Text>
        </Block>
      </Block>
      <ScrollView>
        <Block center>
          <Input
            keyboardType="email-address"
            style={styles.input}
            placeholder="Username*"
            onChangeText={(value) => setUserName(value)}
            value={username}
          />
          <Input
            onChangeText={(value) => setPassWord(value)}
            secureTextEntry
              // prepend={<InCorrect message="Incorrect Password" />}
              // incorrect
            style={styles.input}
            placeholder="Password*"
            value={password}
          />
          <Input
            onChangeText={(value) => setPin(value)}
            secureTextEntry
            style={styles.input}
            placeholder="PIN*"
            keyboardType="decimal-pad"
            value={pin}
          />
          <Block bottom>
            <TouchableOpacity style={styles.btnForgot} onPress={forgotPassword}>
              <Text style={styles.txtForgot}>Forgot Password</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </ScrollView>
      <Block style={[styles.btnLogin]}>
        <Button
          // disabled={!isActive}
          safe
          backgroundColor={colors.PRIMARY}
          onPress={onLogin}
          style={{ width: screenWidth }}
          title="LOGIN"
        />
      </Block>
    </Block>
  )
}

const mapStateToProps = ({ authStore }) => {
  const AuthorisationData = get(authStore, 'AuthorisationData')
  return {
    AuthorisationData,
  }
}

const mapDispatchToProps = (dispatch) => ({
  doLogin: (evt, cb) => dispatch(login(evt, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  // header
  header: {
    backgroundColor: colors.PRIMARY,
    height: getHeight(96),
    paddingHorizontal: setValue(10),
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.24,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  wrapTxt: {
    marginBottom: setValue(11),
  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: 'rgba(255,255,255,0.54)',
    marginLeft: 6,
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(20),
    color: '#ffffff',
    marginLeft: 6,
  },
  treeStyle: {
    width: getWidth(110),
    height: getHeight(73),
  },
  // Main
  input: {
    width: getWidth(327),
    height: getHeight(52),
    marginTop: setValue(30),
    borderBottomColor: 'rgba(0,0,0,0.12)',
  },
  btnLogin: { position: 'absolute', bottom: 0 },
  btnForgot: {
    marginTop: setValue(20),
  },
  txtForgot: {
    fontFamily: 'Effra-Regular',
    color: colors.PRIMARY,
    fontSize: setValue(16),
  },
})
