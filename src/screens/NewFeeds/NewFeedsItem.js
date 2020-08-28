import React, { } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { getWidth, getHeight } from 'utils/utils'
import colors from 'utils/colors'
import { Block } from 'galio-framework'

export default class NewFeedsItem extends React.PureComponent {
  render() {
    const {
      country,
      population,
      deaths,
      recovered,
      active,
      total,
    } = this.props
    return (
      <TouchableOpacity style={styles.contain}>
        <Block>
          <Text style={styles.country}>{country}</Text>
        </Block>
        <Block row space="between">
          <Text style={styles.case}>Tổng ca nhiễm: </Text>
          <Text style={styles.number}>{total}</Text>
        </Block>
        <Block row space="between">
          <Text style={styles.case}>Chết: </Text>
          <Text style={[styles.number, { color: colors.RED }]}>{deaths}</Text>
        </Block>
        <Block row space="between">
          <Text style={styles.case}>Đã phục hồi: </Text>
          <Text style={[styles.number, { color: colors.GREEN }]}>{recovered}</Text>
        </Block>
        <Block row space="between">
          <Text style={styles.case}>Đang điều trị: </Text>
          <Text style={[styles.number, { color: colors.ORANGE }]}>{active}</Text>
        </Block>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    paddingHorizontal: getWidth(20),
    paddingVertical: getHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY,
    backgroundColor: colors.WHITE,
  },
  country: {
    fontFamily: 'Effra-Bold',
    fontSize: 18,
  },
  number: {
    fontFamily: 'Effra-Bold',
  },
  case: {
    fontFamily: 'Effra-Regular',
    fontSize: 14,
    color: 'grey',
  },
})
