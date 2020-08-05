import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Block } from 'galio-framework'
import { Screen } from 'lib'
import { getWidth, getHeight, screenWidth, setValue } from 'utils/utils'
import { Input, Button } from 'components/common'
import colors from 'utils/colors'
import { Header } from 'components/common/Header'
import screens from 'navgation/screens'

export default class ForgotPassWord extends Screen {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  goBack= () => {
    const { navigation } = this.props
    navigation.pop()
  }

  onNext = () => {
    this.props.navigation.navigate(screens.SetNewPassWord)
  }

  render() {
    return (
      <Block flex={1} style={styles.contain}>
        <Header onPressLeftIcon={this.goBack} title="Forgot Password" />
        <Block center flex={1}>
          <Block>
            <Text style={styles.txt1}>To reset your password, enter the login id you use to sign in.</Text>
          </Block>
          <Input autoFocus style={styles.userName} placeholder="Username*" />
          <Block style={styles.buttonView}>
            <Button safe backgroundColor={colors.PRIMARY} onPress={this.onNext} style={{ width: screenWidth, height: setValue(50) }} title="SUBMIT" />
          </Block>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: colors.WHITE,
  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: getWidth(30),
    marginTop: getHeight(20),
    marginBottom: getHeight(16),
  },
  userName: {
    width: getWidth(300),
    height: getHeight(52),
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
  },
  btnBottom: {
    fontFamily: 'Effra-Regular',
    textAlign: 'left',
    alignSelf: 'flex-end',
    marginHorizontal: setValue(28),
    marginTop: setValue(19),
    ...Platform.select({
      ios: {
        marginBottom: 100,
      },
    }),
  },
})
