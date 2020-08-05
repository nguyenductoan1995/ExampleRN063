import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import colors from 'utils/colors'
import { setValue, getWidth, getHeight } from 'utils/utils'
import { Block } from 'galio-framework'

class BubbleReceive extends React.PureComponent {
  render() {
    const { user, text, attach, time } = this.props
    return (
      <View style={[styles.item, styles.itemIn]}>
        <View style={[styles.balloon]}>
          {attach}
          {user ? (<Text style={styles.user}>{user}</Text>) : null}
          {text ? (<Text style={styles.text}>{text}</Text>) : null}
          {time ? (
            <Block right>
              <Text style={styles.time}>{time}</Text>
            </Block>
          ) : null}
          <View
            style={[
              styles.arrowContainer,
              styles.arrowLeftContainer,
            ]}
          >

            <Svg style={styles.arrowLeft} width={setValue(15.5)} height={setValue(17.5)} enable-background="new 32.485 17.5 15.515 17.5">
              <Path
                d={`M0 0 L${15} ${15} L${15} 0 Z`}
                fill={colors.WHITE}
                x="0"
                y="0"
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  }
}

export default BubbleReceive

const styles = StyleSheet.create({
  contain: {

  },
  item: {
    marginTop: getHeight(16),
  },
  itemIn: {
    marginLeft: getWidth(20),
    alignSelf: 'flex-start',
  },
  balloon: {
    maxWidth: getWidth(304),
    paddingHorizontal: getWidth(8),
    paddingTop: getHeight(5),
    paddingBottom: getHeight(5),
    borderRadius: setValue(5),
    backgroundColor: colors.WHITE,
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  arrowLeft: {
    left: -13,
  },

  text: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: colors.BLACK87,
  },
  time: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(8),
    color: colors.BLACK87,
    marginTop: getHeight(4),
  },
  user: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(10),
    color: colors.PRIMARY,
    marginBottom: getHeight(4),
    textAlign: 'left',
  },
})
