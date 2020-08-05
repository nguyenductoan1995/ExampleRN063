import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import colors from 'utils/colors'
import { setXAxisValue, setValue, getHeight, getWidth } from 'utils/utils'
import { Block } from 'galio-framework'
import VectorIcon from '../VectorIcon'

const LeftIcon = React.memo(({ leftIconName = 'arrow-left', onPressLeft, iconColor, iconSize }) => (
  onPressLeft ? (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressLeft} style={styles.left}>
      <VectorIcon color={iconColor || colors.WHITE} size={iconSize} type="fe" name={leftIconName} />
    </TouchableOpacity>
  ) : <Block style={styles.left} />
))


const Middle = React.memo(({ title }) => (
  title ? (
    <Block middle style={styles.middle}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.whiteView} />
    </Block>
  ) : <Block />
))

const RightIcon = React.memo(({ rightIconName = 'plus', onPressRight, iconColor, iconSize }) => (
  onPressRight ? (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressRight} style={styles.left}>
      <VectorIcon color={iconColor || colors.WHITE} size={iconSize} type="fe" name={rightIconName} />
    </TouchableOpacity>
  ) : <Block style={styles.right} />
))

/**
 * @param string leftIconName
 * @param function onPressLeft
 * @param function onPressRight
 * @param string rightIconName
 * @param object style
 * @param string title
 * @param function leftIconName
 * @param function onPressLeft
 * @param string iconColor
 * @param number iconSize
 * @param function onPressRight
 * @param UI prepend,
 * @param UI append,
 */

export default class HeaderMain extends React.PureComponent {
  render() {
    const {
      style,
      title,
      leftIconName = 'arrow-left',
      onPressLeft,
      iconColor,
      iconSize = 24,
      onPressRight,
      prepend,
      append,
    } = this.props
    return (
      <Block space="between" safe style={[style, styles.container]}>
        {append || (
        <LeftIcon
          leftIconName={leftIconName}
          onPressLeft={onPressLeft}
          iconColor={iconColor}
          iconSize={iconSize}
        />
        )}

        <Middle iconSize={iconSize} title={title} />
        {prepend || (
        <RightIcon
          onPressRight={onPressRight}
          iconSize={iconSize}
        />
        )}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY,
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
  left: {
    width: getWidth(48),
    height: getHeight(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // flex: 1,
  },
  right: {
    width: setXAxisValue(58),
    paddingRight: setXAxisValue(24),
  },
  title: {
    fontSize: setValue(20),
    color: colors.WHITE,
    fontFamily: 'Effra-Regular',
    marginBottom: 5,
  },
  whiteView: {
    width: getWidth(20),
    height: getHeight(3),
    borderRadius: setValue(2),
    backgroundColor: colors.WHITE,
    marginTop: 5,
  },
})
