import React from 'react'
import { FlatList } from 'react-native'
import { Block } from 'galio-framework'
import { get } from 'lodash'
import moment from 'moment'
import { connect } from 'react-redux'
import { getAssignments } from 'store/Assignments/actions'
import { AssignmentsNodata } from 'screens/Activity'
import { AssignmentItem } from '.'

class AssignmentList extends React.PureComponent {
  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const { doGetData } = this.props
    doGetData({}, this.handleSuccess)
  }

  handleSuccess = ({ success, errorMessage }) => {
    if (success) {
      //
    } else {
      alert(errorMessage)
    }
  }

  renderItem=({ item }) => {
    const id = get(item, 'ID', null)
    const name = get(item, 'AgencyName', null)
    const price = get(item, 'Amount', null)
    const time = moment(get(item, 'Date', null), 'DD/MM/YYYY').format('DD/MM/YYYY')
    const status = get(item, 'StatusMesasge', null)
    const { onPress } = this.props
    return (
      <AssignmentItem
        onPress={() => onPress(id)}
        id={id}
        name={name}
        price={price}
        time={time}
        status={status}
      />
    )
  }

  render() {
    const { assignmentsData, field, isLoading } = this.props
    const newData = assignmentsData ? assignmentsData.filter((item) => String(item.ID).match(field)) : []
    if (newData.length === 0) {
      return (
        <AssignmentsNodata />
      )
    }
    return (
      <Block center>
        <FlatList
          onRefresh={this.getData}
          refreshing={isLoading}
          data={newData}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `${index}`}
        />
      </Block>
    )
  }
}

const mapStateToProps = ({ assignmentsStore, homeStore }) => {
  const assignmentsData = get(assignmentsStore, 'AssignmentsData', [])
  const field = get(homeStore, 'field')
  const isLoading = get(assignmentsStore, 'isLoading')
  return {
    assignmentsData,
    field,
    isLoading,
  }
}


const mapDispatchToProps = (dispatch) => ({
  doGetData: (evt, cb) => dispatch(getAssignments(evt, cb)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList)
