
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Block } from 'galio-framework'
import colors from 'utils/colors'
import { setValue } from 'utils/utils'

/**
 * @param string message
 * @param object style
 */

export default class InCorrect extends React.PureComponent {
  render() {
    const { message, style } = this.props
    return (
      message ? (
        <Block top style={[styles.contain, style]}>
          <Text style={styles.txtIncorrect}>{message}</Text>
        </Block>
      ) : null
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    paddingTop: setValue(9),
  },
  txtIncorrect: {
    color: colors.RED,
    fontSize: setValue(12),
  },
})
