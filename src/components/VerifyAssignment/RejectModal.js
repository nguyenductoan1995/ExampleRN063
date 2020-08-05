import React from 'react'
import { Block } from 'galio-framework'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from 'utils/colors'
import { getWidth, setValue, getHeight } from 'utils/utils'
import { Input } from 'components/common'

export default class Reject extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      height: null,
      text: null,
    }
  }

  render() {
    const { height, text } = this.state
    const length = text ? text.length : 0
    const { onPress = () => {} } = this.props
    return (
      <Block center left style={styles.contain}>
        <Block>
          <Text style={styles.txt1}>Why are you rejecting the Assignment?</Text>
        </Block>
        <Block>
          <Input
            onChangeText={(value) => this.setState({ text: value })}
            multiline
            numberOfLines={5}
            style={[styles.input, height && { height }]}
            placeholder="Reason*"
            onContentSizeChange={(e) => {
              this.setState({ height: e.nativeEvent.contentSize.height + 30 })
            }}
            maxLength={50}
          />
        </Block>
        <Block bottom>
          <Text style={styles.txt2}>{`${length}/50`}</Text>
        </Block>
        <Block bottom>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.txt3}>SUBMIT</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    )
  }
}
const styles = StyleSheet.create({
  contain: {
    backgroundColor: colors.WHITE,
    width: getWidth(280),
    paddingHorizontal: getWidth(25),
    borderRadius: setValue(2),
  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    paddingTop: setValue(20),
  },
  input: {
    width: getWidth(231),
    paddingTop: getHeight(4),
    paddingBottom: getHeight(7),
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: 'rgba(0, 0, 0, 0.38)',
    marginTop: getHeight(8),
  },
  txt3: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(14),
    marginTop: getHeight(29),
    right: setValue(-7),
    marginBottom: getHeight(16),
    color: colors.PRIMARY,
  },
})
