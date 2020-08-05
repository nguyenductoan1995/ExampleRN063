import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import colors from 'utils/colors'
import { setValue, getHeight, getWidth } from 'utils/utils'
import { Block } from 'galio-framework'

class BubbleSent extends React.PureComponent {
  render() {
    const { text, attach, time } = this.props
    return (
      <View style={[styles.item, styles.itemOut]}>
        <View style={[styles.balloon]}>
          {attach}
          {text ? (<Text style={styles.text}>{text}</Text>) : null}
          {time ? (
            <Block right>
              <Text style={styles.time}>{time}</Text>
            </Block>
          ) : null}
          <View
            style={[
              styles.arrowContainer,
              styles.arrowRightContainer,
            ]}
          >
            <Svg style={styles.arrowRight} width={setValue(15.5)} height={setValue(17.5)} enable-background="new 32.485 17.5 15.515 17.5">
              <Path
                d={`M0 0 L${0} ${15} L${15} 0 Z`}
                fill={colors.BubbleBG}
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

export default BubbleSent

const styles = StyleSheet.create({
  contain: {

  },
  item: {
    marginTop: getHeight(16),
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: getWidth(20),
  },
  balloon: {
    maxWidth: getWidth(304),
    paddingHorizontal: getWidth(8),
    paddingTop: getHeight(5),
    paddingBottom: getHeight(5),
    borderRadius: setValue(5),
    backgroundColor: colors.BubbleBG,
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
  arrowRightContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  arrowRight: {
    right: -13,
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
})
