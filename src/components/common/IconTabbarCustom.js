import React from 'react'
import { Block } from 'galio-framework'
import { StyleSheet, Text } from 'react-native'
import { get } from 'lodash'
import { setValue, getWidth } from 'utils/utils'
import colors from 'utils/colors'
import VectorIcon from './VectorIcon'


export default class IconTabbarCustom extends React.PureComponent {
  get getIcon() {
    const { route } = this.props
    switch (route.name) {
      case 'Profile':
        return 'person-outline'
      case 'Document':
        return 'file-document-outline'
      case 'Activity':
        return 'pen'
      case 'Dashboard':
        return 'grid'
      default:
        return ''
    }
  }

  get getIconType() {
    const { route } = this.props
    switch (route.name) {
      case 'Profile':
        return 'md'
      case 'Document':
        return 'mdc'
      case 'Activity':
        return 'mdc'
      case 'Dashboard':
        return 'simple'
      default:
        return ''
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
      case 'Profile':
        return 20
      case 'Document':
        return 20
      case 'Activity':
        return 20
      case 'Dashboard':
        return 14
      default:
        return 20
    }
  }

  get colorIcon() {
    const { focused } = this.props
    if (focused) {
      return colors.PRIMARY
    }
    return colors.SMOKE
  }


  render() {
    const { focused, size, color, route } = this.props
    const name = get(route, 'name')
    return (
      <Block row middle styles={styles.containz}>
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
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: 'rgba(0,0,0,0.38)',
    paddingLeft: getWidth(5),
  },
  labelActive: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(12),
    color: colors.PRIMARY,
    paddingLeft: getWidth(5),
  },
})
