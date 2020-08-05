import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import { Block } from 'galio-framework'
import { get } from 'lodash'
import colors from 'utils/colors'
import { setValue, getWidth, getHeight } from 'utils/utils'
import { CheckListItem } from '.'

export default class OnboardingCheckList extends React.PureComponent {
  renderItem = ({ item, index }) => {
    const { checkList = [], onPress } = this.props
    const name = get(item, 'name', '')
    const isChecked = checkList.find((value) => value === index + 1)
    const id = get(item, 'id')
    return (
      <CheckListItem
        onPress={() => onPress(id)}
        name={name}
        isChecked={isChecked}
      />
    )
  }

  render() {
    const {
      data = [],
    } = this.props
    return (
      <Block flex={1} style={styles.contain}>
        <Block>
          <Text style={styles.txt1}>THINGS TO COMPLETE</Text>
        </Block>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `${index}`}
          contentContainerStyle={{ paddingBottom: setValue(50) }}
        />
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: colors.WHITE,
  },
  txt1: {
    fontFamily: 'EffraMedium-Regular',
    fontSize: setValue(10),
    color: colors.PRIMARY,
    paddingHorizontal: getWidth(20),
    paddingVertical: getHeight(9),
  },
})
