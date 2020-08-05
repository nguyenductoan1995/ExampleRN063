import React from 'react'
import { FlatList } from 'react-native'
import { get } from 'lodash'
import { AttachmentOrdersRow } from '.'

export default class SSPData extends React.PureComponent {
  renderItem = ({ item }) => {
    const id = get(item, 'id')
    const start = get(item, 'start')
    const end = get(item, 'end')
    const user = get(item, 'user')
    const status = get(item, 'status')
    const { onPress } = this.props
    return (
      <AttachmentOrdersRow
        id={id}
        start={start}
        end={end}
        user={user}
        status={status}
        onPress={() => onPress(id)}
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
