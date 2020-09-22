import React from 'react'
import { Block } from 'galio-framework'
import { StyleSheet, Text } from 'react-native'
import { get } from 'lodash'
import { setValue, getWidth } from 'utils/utils'
import colors from 'utils/colors'
import screens from 'navigation/screens'
import VectorIcon from './VectorIcon'

export default class IconTabbarCustom extends React.PureComponent {
  get getIcon() {
    const { route } = this.props
    switch (route.name) {
      case screens.NewFeeds:
        return 'virus'
      case screens.VietNam:
        return 'shield-virus'
      default:
        return 'meho'
    }
  }

  get getIconType() {
    const { route } = this.props
    switch (route.name) {
      case screens.NewFeeds:
        return 'mdc'
      case screens.VietNam:
        return 'fa5'
      default:
        return 'ant'
    }
  }

  get getStyleLabel() {
    const { focused } = this.props
    switch (focused) {
      case true:
        return [styles.labelActive]
      default:
        return [styles.labelInActive]
    }
  }

  get sizeIcon() {
    const { route } = this.props
    switch (route.name) {
      case screens.NewFeeds:
        return 20
      case 'Hello':
        return 20
      default:
        return 20
    }
  }

  get colorIcon() {
    const { focused } = this.props
    if (focused) {
      return colors.RED
    }
    return colors.SMOKE
  }

  render() {
    const { focused, size, color, route } = this.props
    const name = get(route, 'name')
    return (
      <Block middle styles={styles.containz}>
        <VectorIcon
          color={this.colorIcon}
          size={this.sizeIcon}
          type={this.getIconType}
          name={this.getIcon}
        />
        <Text style={this.getStyleLabel}>{name}</Text>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: 'rgba(38, 148, 120,0.2)',
  },
  labelInActive: {
    paddingTop: 5,
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: 'rgba(0,0,0,0.38)',
    paddingLeft: getWidth(5),
  },
  labelActive: {
    paddingTop: 5,
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(12),
    color: colors.RED,
    paddingLeft: getWidth(5),
  },
})
