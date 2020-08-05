import React from 'react'
import { FlatList } from 'react-native'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { Nodata } from 'components/common'
import { undrawCompany } from 'assets/images'
import { getMessage } from 'store/Message/actions'
import { formatDate } from 'utils/utils'
import MessageListItem from './MessageListItem'


class MessageList extends React.PureComponent {
  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const { doGetData } = this.props
    doGetData({}, this.getDataCallBack)
  }

  getDataCallBack = ({ success, errorMessage }) => {
    if (success) {
      //
    } else {
      alert(errorMessage)
    }
  }

  renderItem=({ item }) => {
    const id = get(item, 'MessageID')
    const name = get(item, 'Name')
    const subject = get(item, 'Subject')
    const date = get(item, 'Date') ? formatDate(get(item, 'Date')) : ''
    const message = get(item, 'Message')
    const status = get(item, 'StatusText')
    const { onPress = () => {} } = this.props
    return (
      <MessageListItem
        onPress={() => onPress(id)}
        id={id}
        name={name}
        subject={subject}
        date={date}
        message={message}
        status={status}
      />
    )
  }

  render() {
    const { data, filter } = this.props
    // const newData = filter ?  data.filter()
    if (data.length === 0) {
      return (
        <Nodata
          image={undrawCompany}
          title="Not Result Found!"
          desc="Sorry we didn’t find anything."
        />
      )
    }
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={{ marginTop: 4 }}
      />
    )
  }
}

const mapStateToProps = ({ messageStore }) => {
  const data = get(messageStore, 'Message', [])
  return {
    data,
  }
}


const mapDispatchToProps = (dispatch) => ({
  doGetData: (evt, cb) => dispatch(getMessage(evt, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
