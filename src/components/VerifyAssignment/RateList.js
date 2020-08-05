import React from 'react'
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Block } from 'galio-framework'
import { get } from 'lodash'
import { getHeight, getWidth, setValue } from 'utils/utils'
import colors from 'utils/colors'

const RateItem = React.memo(({ code, desc, rate, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
    <Block flex={1} row middle space="between" style={styles.wrapItem}>
      <Block>
        <Text style={styles.txt1}>{code}</Text>
        <Text style={styles.txt2}>{desc}</Text>
      </Block>
      <Block>
        <Text style={styles.txt3}>{`£${rate}`}</Text>
      </Block>
    </Block>
  </TouchableOpacity>
))
/**
 * @param array data
 */
export default class RateList extends React.PureComponent {
  renderItem=({ item }) => {
    const code = get(item, 'Code', null)
    const desc = get(item, 'Description', null)
    const rate = get(item, 'Rate', null)
    return (
      <RateItem
        code={code}
        desc={desc}
        rate={rate}
      />
    )
  }

  render() {
    const { data = [] } = this.props
    return (
      <Block center style={styles.contain}>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          data={data}
          renderItem={this.renderItem}
        />
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    paddingTop: getHeight(5),
  },
  wrapItem: {
    height: getHeight(70),
    width: getWidth(328),
    borderBottomWidth: getHeight(0.5),
    borderBottomColor: colors.SMOKE,
  },
  txt1: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),
    lineHeight: setValue(24),
  },
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(14),
    lineHeight: setValue(16),
    color: 'rgba(0,0,0,0.38)',
  },
  txt3: {
    fontFamily: 'Effra-Bold',
    fontSize: setValue(16),
    color: colors.PRIMARY,
  },
})
