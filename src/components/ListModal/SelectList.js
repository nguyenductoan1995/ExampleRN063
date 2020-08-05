import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StatefulComponent } from 'lib'
import colors from 'utils/colors'
import { setYAxisValue, getHeight } from 'utils/utils'
import { List } from '.'

const Title = React.memo(({ isFocus = false, placeholder, initValue, selected }) => {
  if (!isFocus && !initValue && !selected) return null
  return (
    <Text style={styles.title}>{placeholder}</Text>
  )
})

/**
 * SelectList
 * @param string placeholder
 * @param function onSelect
 * @param array — data [{id, name}]
 * @param object styleModal
 * @param string selected id of object
 * @param string initValue
 */

export default class
SelectList extends StatefulComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFocus: false,
    }
  }

  onSelect = (item) => {
    const { onSelect = () => {} } = this.props
    if (item) {
      this.setState({ isFocus: true })
    } else {
      this.setState({ isFocus: false })
    }
    onSelect(item)
  }

  render() {
    const { placeholder, prepend, editable, style, incorrect, data, styleModal, initValue, selected } = this.props
    const { isFocus } = this.state
    return (
      <>
        <View
          style={[
            styles.textArea,
            !editable && styles.disabled,
            style,
            isFocus && { borderBottomColor: colors.PRIMARY },
            incorrect && { borderBottomColor: colors.RED },
            initValue && { borderBottomColor: colors.PRIMARY },
            data.find((item) => String(item.id) === String(selected)) && { borderBottomColor: colors.PRIMARY },
          ]}
        >

          <Title
            selected={data.find((item) => String(item.id) === String(selected))}
            initValue={initValue}
            isFocus={isFocus}
            placeholder={placeholder}
          />
          <List
            data={data}
            onSelect={this.onSelect}
            placeholder={!isFocus ? placeholder : null}
            placeholderTextColor={colors.SMOKE}
            style={styleModal}
            selected={selected}
            initValue={initValue}
          />
        </View>
        {prepend}
      </>

    )
  }
}

const styles = StyleSheet.create({
  textArea: {
    // backgroundColor: colors.WHITE,
    borderBottomWidth: getHeight(1),
    borderBottomColor: colors.GREY,
    height: setYAxisValue(48),
  },
  disabled: {
    //   backgroundColor: colors.GREY,
  },
  title: {
    fontFamily: 'Effra-Regular',
    fontSize: 12,
    color: 'rgba(58,58,58,0.38)',
    lineHeight: 12,
    // backgroundColor: colors.WHITE,
  },
})
