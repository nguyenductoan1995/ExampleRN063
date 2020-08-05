import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Platform, TextInput } from 'react-native'
import colors from 'utils/colors'
import { setXAxisValue, setValue, getHeight, getWidth } from 'utils/utils'
import { Block } from 'galio-framework'
import FastImage from 'react-native-fast-image'
import { homeIcon, message } from 'assets/images'
import { connect } from 'react-redux'
import { inputSearch } from 'store/home/actions'
import VectorIcon from '../VectorIcon'

const LeftIcon = React.memo(({ onPressLeft = () => {} }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPressLeft}
    style={styles.left}
  >
    <FastImage
      resizeMode="contain"
      style={styles.iconLeft}
      source={homeIcon}
    />
  </TouchableOpacity>
))


const Middle = React.memo(({ title }) => (
  title ? (
    <Block middle style={styles.middle}>
      <Text style={styles.title}>{title}</Text>
    </Block>
  ) : <Block />
))

const RightIcon = React.memo(({ onPressRight, newMessage }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPressRight} style={styles.right}>
    <FastImage
      resizeMode="contain"
      style={styles.rightIcon}
      source={message}
    />
    {newMessage && <Block style={styles.newMessage} />}
  </TouchableOpacity>
))

const SearchIcon = React.memo(({ onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.search}>
    <VectorIcon
      name="ios-search"
      size={24}
      color={colors.WHITE}
    />
  </TouchableOpacity>
))
/**
 * @param object style
 * @param string title
 * @param string leftIconName
 * @param function onPressLeft
 * @param string iconColor
 * @param function onPressRight
 * @param component append
 * @param bool shadow
 * @param bool search => show icon search
 */

class HeaderHome extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
    }
  }

onSearch =() => {
  const { isSearch } = this.state
  this.setState({ isSearch: !isSearch })
  const { doInput } = this.props
  doInput('')
}

render() {
  const {
    style,
    title,
    leftIconName = 'arrow-left',
    onPressLeft,
    iconColor,
    onPressRight,
    append,
    shadow = true,
    doInput,
    search = false,
  } = this.props
  const { isSearch } = this.state
  return (
    <Block space="between" safe style={[style, styles.container, shadow && styles.shadow]}>
      {!isSearch ? (
        <>
          <Block row>
            <LeftIcon
              leftIconName={leftIconName}
              onPressLeft={onPressLeft}
              iconColor={iconColor}
            />
            <Middle title={title} />
          </Block>
          <Block row>
            {append}
            {search && (
            <SearchIcon
              onPress={this.onSearch}
            />
            )}
            <RightIcon
              newMessage
              onPressRight={onPressRight}
            />
          </Block>
        </>
      ) : (
        <>
          <Block style={styles.left}>
            <TouchableOpacity onPress={this.onSearch}>
              <VectorIcon
                name="arrow-left"
                type="fe"
                size={setValue(24)}
                color={colors.WHITE}
              />
            </TouchableOpacity>

          </Block>
          <Block flex={1} middle left style={styles.warpInput}>
            <TextInput
              autoFocus
              onChangeText={doInput}
              style={styles.input}
              placeholder="Search"
            />
          </Block>
        </>
      )}
    </Block>
  )
}
}

const mapDispatchToProps = (dispatch) => ({
  doInput: (evt) => dispatch(inputSearch(evt)),
})

export default connect(null, mapDispatchToProps)(HeaderHome)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY,
  },
  shadow: {
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
  iconLeft: {
    width: getWidth(25),
    height: getHeight(25),
  },
  middle: {
    // flex: 1,
  },
  right: {
    width: setXAxisValue(56),
    paddingRight: setXAxisValue(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    width: getWidth(20),
    height: getHeight(20),
  },
  title: {
    fontSize: setValue(18),
    color: colors.WHITE,
    fontFamily: 'Effra-Bold',
  },
  newMessage: {
    width: getHeight(10),
    height: getHeight(10),
    borderRadius: getHeight(5),
    backgroundColor: colors.RED,
    position: 'absolute',
    top: getWidth(48) / 2 - 10,
  },
  search: {
    width: setXAxisValue(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: getHeight(42),
    width: getWidth(302),
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: getWidth(10),
    borderRadius: setValue(2),
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    color: colors.WHITE,
  },
})
