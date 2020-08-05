import React from 'react'
import { Block } from 'galio-framework'
import { StyleSheet, Text } from 'react-native'
import { ListDocumnet } from 'components/IncorporationDocument'
import { setValue, getHeight, getWidth } from 'utils/utils'
import colors from 'utils/colors'

/**
 * @param function onPickerSelect([])
 * @param object style
 * @param string placeholder
 */
class UpdateDocument extends React.PureComponent {
  render() {
    const { placeholder, style, onPickerSelect } = this.props
    return (
      <Block flex={1} style={[styles.contain, style]}>
        <Text style={styles.txt}>{placeholder}</Text>
        <ListDocumnet onPickerSelect={onPickerSelect} />
      </Block>
    )
  }
}

export default UpdateDocument

const styles = StyleSheet.create({
  contain: {
    paddingVertical: getHeight(16),
    paddingHorizontal: getWidth(16),
    borderBottomWidth: getHeight(3),
    borderBottomColor: '#ebebeb',
    borderTopWidth: getHeight(3),
    borderTopColor: '#ebebeb',
  },
  txt: {
    fontSize: setValue(14),
    fontFamily: 'Effra-Regular',
    color: colors.BLACK87,
  },
})
