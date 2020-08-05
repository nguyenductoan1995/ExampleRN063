import React from 'react'
import { FlatList } from 'react-native'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { getSMP } from 'store/Profile/actions'
import RowSPP from './RowSPP'


class SPPData extends React.PureComponent {
  componentDidMount() {
    const { doGetData } = this.props
    doGetData({}, this.handleGetData)
  }

  handleGetData = ({ success, errorMessage }) => {
    if (success) {
      //
    } else {
      alert(errorMessage)
    }
  }

  renderItem = ({ item }) => {
    const time = get(item, 'DueDate')
    const cost = get(item, 'Amount')
    const desc = `Tax Period : ${get(item, 'TaxPeriod')}/${get(item, 'TaxYear')}`
    const status = get(item, 'Status')
    const id = get(item, 'ID')
    const { onPress = () => {} } = this.props
    return (
      <RowSPP
        time={time}
        cost={cost}
        desc={desc}
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

const mapStateToProps = ({ profileStore }) => {
  const data = get(profileStore, 'SAP', [])
  return {
    data,
  }
}


const mapDispatchToProps = (dispatch) => ({
  doGetData: (evt, cb) => dispatch(getSMP(evt, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SPPData)
