import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Block } from 'galio-framework'
import { getHeight, setValue, getWidth, screenWidth } from 'utils/utils'
import colors from 'utils/colors'
import { Button } from 'components/common'

/**
 * @param function onPress
 */
export default class ModalGetStarted extends React.PureComponent {
  render() {
    const { onPress = () => {} } = this.props
    return (
      <Block>
        <Block style={styles.wrapModal}>
          <Block middle left style={styles.wrapTxt}>
            <Text style={styles.txt1}>Congratulations!</Text>
            <Text style={styles.txt2}>Your onboarding is complete. You can now access the entire app</Text>
          </Block>
          <Block style={{ position: 'absolute', bottom: 0 }}>
            <Button safe backgroundColor={colors.PRIMARY} onPress={onPress} style={{ height: 50, width: screenWidth }} title="GET STARTED" />
          </Block>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  // modal
  wrapModal: {
    height: getHeight(201),
    backgroundColor: colors.WHITE,
    overflow: 'hidden',
    borderTopLeftRadius: setValue(9),
    borderTopRightRadius: setValue(9),
  },
  wrapTxt: {
    height: getHeight(151),
    paddingHorizontal: getWidth(26),
  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(20),
    marginBottom: getHeight(5),
  },
  txt2: {
    marginTop: getHeight(5),
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
  },
})
