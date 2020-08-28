import React, { } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Block } from 'galio-framework'
import { get, sortBy, includes, lowerCase } from 'lodash'
import { connect } from 'react-redux'
import { getCovic } from 'store/Covic19/actions'
import { HeaderHome } from 'components/common/Header'
import colors from 'utils/colors'
import { getHeight, formatNumber } from 'utils/utils'
import NewFeedsItem from './NewFeedsItem'

class NewFeeds extends React.PureComponent {
  componentDidMount() {
    const { doGetData } = this.props
    doGetData({
      params: {
        // country: 'Vietnam',
      },
    })
  }

  renderItem = ({ item }) => {
    const {} = this.props
    return (
      <NewFeedsItem
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
    const VietnamData = data.find((item) => item.country === 'Vietnam')
    const WordData = data.find((item) => item.country === 'All')
    return (
      <Block
        flex={1}
        style={styles.contain}
      >
        <HeaderHome
          title="Covid 19"
        />
        <Block style={styles.section}>
          <Text style={styles.country}>Việt Nam</Text>
          <Block row space="around" style={styles.info}>
            <Block center>
              <Text style={[styles.number, { color: colors.GREEN }]}>{formatNumber(get(VietnamData, 'cases.recovered'))}</Text>
              <Text style={styles.sub}>CA PHỤC HỒI</Text>
            </Block>
            <Block center>
              <Text style={[styles.number, { color: colors.RED }]}>{formatNumber(get(VietnamData, 'cases.total'))}</Text>
              <Text style={styles.sub}>CA NHIỄM</Text>
            </Block>
            <Block center>
              <Text style={styles.number}>{formatNumber(get(VietnamData, 'deaths.total'))}</Text>
              <Text style={styles.sub}>CA TỬ VONG</Text>
            </Block>
          </Block>
        </Block>
        <Block flex={1} style={styles.section}>
          <Text style={styles.country}>Thế giới</Text>
          <Block row space="around" style={styles.info}>
            <Block center>
              <Text style={[styles.number, { color: colors.GREEN }]}>{formatNumber(get(WordData, 'cases.recovered'))}</Text>
              <Text style={styles.sub}>CA PHỤC HỒI</Text>
            </Block>
            <Block center>
              <Text style={[styles.number, { color: colors.RED }]}>{formatNumber(get(WordData, 'cases.total'))}</Text>
              <Text style={styles.sub}>CA NHIỄM</Text>
            </Block>
            <Block center>
              <Text style={styles.number}>{formatNumber(get(WordData, 'deaths.total'))}</Text>
              <Text style={styles.sub}>CA TỬ VONG</Text>
            </Block>
          </Block>
        </Block>
        {/* <FlatList
          data={newData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={this.renderItem}
        /> */}
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
  contain: {
    backgroundColor: colors.WHITE,
  },
  section: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY,
  },
  info: {
    paddingTop: getHeight(15),
  },
  country: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontFamily: 'Effra-Bold',
    fontSize: 24,
  },
  number: {
    fontFamily: 'Effra-Bold',
    fontSize: 18,
  },
  sub: {
    paddingTop: 5,
    fontFamily: 'Effra-Regular',
    fontSize: 16,
    color: colors.BLACK54,
  },
})
