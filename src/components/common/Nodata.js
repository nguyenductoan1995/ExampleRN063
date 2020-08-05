import React from 'react'
import { Block } from 'galio-framework'
import FastImage from 'react-native-fast-image'
import { undrawEmpty } from 'assets/images'
import { StyleSheet, Text } from 'react-native'
import { getWidth, getHeight, setValue } from 'utils/utils'
import { Button } from 'components/common'
import colors from 'utils/colors'

/**
 * @param string title
 * @param string desc
 * @param string buttonText
 * @param object styleButton
 * @param object style
 * @param function onPress
 * @param imgae image
 */
export default class Nodata extends React.PureComponent {
  render() {
    const { title, desc, buttonText, styleButton, style, onPress = () => {}, image } = this.props
    return (
      <Block middle flex={1} style={[styles.contain, style]}>
        <FastImage
          resizeMode="contain"
          style={styles.image}
          source={image || undrawEmpty}
        />
        <Text style={styles.txt1}>{title}</Text>
        <Text style={styles.txt2}>{desc}</Text>
        {buttonText && (
        <Block style={[styles.Wrapbtn, styleButton]}>
          <Button onPress={onPress} style={styles.btn} title={buttonText} />
        </Block>
        )}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
  },
  image: {
    width: getWidth(128),
    height: getHeight(90),
  },
  txt1: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: colors.BLACK87,
    marginTop: getHeight(14),
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    color: colors.BLACK38,
    marginTop: getHeight(2),
  },
  Wrapbtn: {
    width: getWidth(180),
    height: getHeight(50),
    borderRadius: setValue(50),
    overflow: 'hidden',
    marginTop: getHeight(18),
  },
  btn: {
    borderRadius: setValue(25),
  },
})
