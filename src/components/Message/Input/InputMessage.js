import React from 'react'
import { Block } from 'galio-framework'
import { TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import colors from 'utils/colors'
import { getWidth, getHeight, setValue } from 'utils/utils'
import VectorIcon from 'components/common/VectorIcon'

/**
 * @param function onPress (text)
 */
class InputMessage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: null,
    }
  }

  render() {
    const { onPress = () => {} } = this.props
    return (
      <Block safe row middle space="between" style={styles.contain}>
        <TextInput
          placeholder="Type a message"
          style={styles.input}
          onChangeText={(text) => this.setState({ text })}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!this.state.text}
          onPress={() => onPress(this.state.text)}
          style={styles.btnSend}
        >
          <VectorIcon
            name="send"
            type="md"
            size={setValue(20)}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      </Block>
    )
  }
}

export default InputMessage

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    position: 'absolute',
    bottom: getHeight(17),
    left: 0,
    right: 0,
    paddingHorizontal: getWidth(8),
  },
  input: {
    flex: 1,
    backgroundColor: colors.WHITE,
    height: getHeight(48),
    borderRadius: setValue(25),
    paddingHorizontal: getWidth(20),
    marginRight: getWidth(7),
  },
  btnSend: {
    width: getWidth(50),
    height: getWidth(50),
    borderRadius: getWidth(25),
    backgroundColor: '#cbcbcb',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.24,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
})
