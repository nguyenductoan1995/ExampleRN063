import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native'
import colors from 'utils/colors'
import { setXAxisValue, setYAxisValue } from 'utils/utils'
import { Block } from 'galio-framework'

/**
 * PrimaryButton
 * @param string title
 * @param object style
 * @param object titleStyle
 * @param bool loading
 * @param string backgroundColor
 * @param string borderColor
 * @param bool disabled
 * @param children icon
 * @param bool safe
 */
export default class PrimaryButton extends React.PureComponent {
  static defaultProps = { block: true, loading: false }

  get containerStyle() {
    const { block, style } = this.props
    return [styles.container, block && { justifyContent: 'center' }, style]
  }

  get titleStyle() {
    const { titleStyle, outline, color } = this.props
    return [
      styles.title, titleStyle,
      this.disabled && { opacity: 0.5 }, outline && { color: colors.PRIMARY }, color && { color }]
  }

  get iconStyle() {
    const { outline } = this.props
    return [styles.icon, this.disabled && { opacity: 0.5 }, outline && { color: colors.PRIMARY }]
  }

  get disabled() {
    const { loading, disabled } = this.props
    return loading || disabled
  }

  get backgroundStyle() {
    const { outline, backgroundColor, borderColor, disabled } = this.props
    return [
      !backgroundColor && styles.background,
      outline && styles.outline,
      backgroundColor && { backgroundColor }, borderColor && { borderColor },
      disabled && { backgroundColor: '#DDDDDD' },
    ]
  }

  get safeViewColor() {
    const {
      backgroundColor,
      loading,
      disabled } = this.props
    return [{ backgroundColor: colors.GREY }, !disabled && !loading && { backgroundColor }]
  }

  renderLoading = () => {
    const { loading } = this.props
    if (!loading) return null
    return <ActivityIndicator style={styles.loading} />
  }


  render() {
    const {
      title,
      onPress,
      outline,
      borderColor,
      icon,
      safe,
      ...rest } = this.props
    return (
      safe ? (
        <Block safe style={this.safeViewColor}>
          <TouchableOpacity
            {...rest}
            style={this.containerStyle}
            onPress={onPress}
            disabled={this.disabled}
          >
            <View
              style={this.backgroundStyle}
            />
            {icon}
            <Text style={this.titleStyle}>{title}</Text>
            {this.renderLoading()}
          </TouchableOpacity>
        </Block>
      ) : (
        <TouchableOpacity
          {...rest}
          style={this.containerStyle}
          onPress={onPress}
          disabled={this.disabled}
        >
          <View
            style={this.backgroundStyle}
          />
          {icon}
          <Text style={this.titleStyle}>{title}</Text>
          {this.renderLoading()}
        </TouchableOpacity>
      )


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: setXAxisValue(20),
    paddingVertical: setYAxisValue(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: setYAxisValue(16),
    marginRight: setXAxisValue(12),
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.PRIMARY,
  },
  outline: {
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    right: 16,
  },
  title: {
    fontFamily: 'Effra-Bold',
    color: colors.WHITE,
    fontSize: 16,
  },
})
