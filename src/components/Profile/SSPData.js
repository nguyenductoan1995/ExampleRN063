import React from 'react'
import { FlatList } from 'react-native'
import { get } from 'lodash'
import { RowSSP } from '.'

export default class SSPData extends React.PureComponent {
  renderItem = ({ item }) => {
    const time = get(item, 'time')
    const cost = get(item, 'cost')
    const desc = get(item, 'desc')
    const status = get(item, 'status')
    const { onPress } = this.props
    return (
      <RowSSP
        time={time}
        cost={cost}
        desc={desc}
        status={status}
        onPress={() => onPress()}
      />
    )
  }

  render() {
    const { data = [] } = this.props
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={this.renderItem}
      />
    )
  }
}
