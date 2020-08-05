import React from 'react'
import { FlatList } from 'react-native'
import { get } from 'lodash'
import { connect } from 'react-redux'
import ReferralsItem from './ReferralsItem'

class ReferralsList extends React.PureComponent {
  renderItem = ({ item }) => {
    const id = get(item, 'id')
    const desc = get(item, 'desc')
    const time = get(item, 'time')
    const { onPress } = this.props
    return (
      <ReferralsItem
        id={id}
        desc={desc}
        time={time}
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

const mapStateToProps = ({ profileStore }) => {
  const data = get(profileStore, 'ReferralsList', [
    {
      id: 1,
      desc: 'Hemchandra Chakravorty',
      time: '31/01/2020',
    },
    {
      id: 2,
      desc: 'Alicia Puma',
      time: '31/01/2020',
    },
    {
      id: 3,
      desc: 'Rita Leite',
      time: '31/01/2020',
    },
  ])
  return {
    data,
  }
}


const mapDispatchToProps = (dispatch) => ({
  // doGetData: (evt, cb) => dispatch(getReferrals(evt, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReferralsList)
