import React, { } from 'react'
import { FlatList, Text, StyleSheet, TextInput } from 'react-native'
import { Block } from 'galio-framework'
import { get, sortBy, includes, lowerCase } from 'lodash'
import { connect } from 'react-redux'
import { getCovic } from 'store/Covic19/actions'
import { HeaderHome } from 'components/common/Header'
import colors from 'utils/colors'
import VietNamItem from './VietNamItem'

class NewFeeds extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      filter: null,
    }
  }

  componentDidMount() {
    const { doGetData, data } = this.props
    doGetData({
      params: {
        // country: 'Vietnam',
      },
    })
    console.tron.log(data)
  }

  renderItem = ({ item }) => {
    const {} = this.props
    return (
      <VietNamItem
        country={get(item, 'country')}
        population={get(item, 'population')}
        deaths={get(item, 'deaths.total')}
        recovered={get(item, 'cases.recovered')}
        active={get(item, 'cases.active')}
        total={get(item, 'cases.total')}
      />
    )
  }

  render() {
    const { data } = this.props
    const { filter } = this.state
    const sortData = sortBy(data, (o) => o.country)
    const newData = filter ? sortData.filter((item) => includes(lowerCase(get(item, 'country', '')), lowerCase(filter))) : sortData
    return (
      <Block
        flex={1}
      >
        <HeaderHome
          title={`${get(data, '0.day')}`}
        />
        <Block>
          <TextInput
            placeholder="Tìm kiếm"
            placeholderTextColor={colors.GREY}
            style={styles.input}
            onChangeText={(filters) => this.setState({ filter: filters })}
          />
        </Block>
        <FlatList
          data={newData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={this.renderItem}
        />
      </Block>
    )
  }
}

const mapStateToProps = ({ Covic19Store }) => {
  const data = get(Covic19Store, 'Covic.response', [])
  return { data }
}

const mapDispatchToProps = (dispatch) => ({
  doGetData: (evt, cb) => dispatch(getCovic(evt, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewFeeds)

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Effra-Bold',
    backgroundColor: colors.WHITE,
    height: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY,
  },
})
