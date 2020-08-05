import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import colors from 'utils/colors'
import { setXAxisValue, setValue, getHeight, getWidth } from 'utils/utils'
import { Block } from 'galio-framework'
import VectorIcon from '../VectorIcon'

const LeftIcon = React.memo(({ leftIconName = 'arrow-left', onPressLeftIcon, iconColor, typeleft = 'fe' }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPressLeftIcon} style={styles.left}>
    <VectorIcon color={iconColor || colors.WHITE} size={setValue(24)} type={typeleft} name={leftIconName} />
  </TouchableOpacity>
))

const RightIcon = React.memo(({ rightIconName, onPressRightIcon, iconColor, typeright = 'fe' }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPressRightIcon} style={styles.left}>
    <VectorIcon color={iconColor || colors.WHITE} size={setValue(20)} type={typeright} name={rightIconName} />
  </TouchableOpacity>
))


const Middle = React.memo(({ title }) => (
  title ? (
    <View style={styles.middle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  ) : null
))

/**
 * @param string leftIconName
 * @param object style
 * @param title title
 * @param string typeleft
 * @param function onPressLeftIcon
 * @param string iconColor
 * @param string rightIconName
 * @param function onPressRightIcon
 * @param string typeright
 */

export default class Header extends React.PureComponent {
  render() {
    const { style, title, leftIconName = 'arrow-left', onPressLeftIcon, iconColor, rightIconName, typeleft, typeright, onPressRightIcon, rightCommon } = this.props
    return (
      <Block safe style={[style, styles.container]}>
        <LeftIcon
          leftIconName={leftIconName}
          onPressLeftIcon={onPressLeftIcon}
          iconColor={iconColor}
          typeleft={typeleft}
        />
        <Middle title={title} />
        {rightCommon}
        {rightIconName ? (
          <RightIcon
            rightIconName={rightIconName}
            iconColor={iconColor}
            typeright={typeright}
            onPressRightIcon={onPressRightIcon}
          />
        ) : (
          null
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  //  paddingVertical: 19,
  },
  right: {
    width: setXAxisValue(58),
    paddingRight: setXAxisValue(24),
  },
  title: {
    fontSize: setValue(20),
    color: colors.WHITE,
    fontFamily: 'Effra-Regular',
  },
})
