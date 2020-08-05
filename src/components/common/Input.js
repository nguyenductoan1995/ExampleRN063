import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { StatefulComponent } from 'lib'
import colors from 'utils/colors'
import { setValue, getHeight } from 'utils/utils'
import { get } from 'lodash'

/**
 * Input
 * @param string placeholder
 * @param function onChangeText
 * @param object style
 * @param bool incorrect
 * @param component prepend
 */

export default class
Input extends StatefulComponent {
  static defaultProps = {
    editable: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      isFocus: false,
      text: get(this.props, 'value'),
    }
  }


   RenderTitle = () => {
     const { placeholder } = this.props
     const { isFocus, text } = this.state
     if (isFocus || text) {
       return (
         <Text style={styles.title}>{placeholder}</Text>
       )
     }
     return null
   }

  focus = () => {
    this.setState({ isFocus: true })
  }

   blur = () => {
     const { text } = this.state
     if (!text) {
       this.setState({ isFocus: false })
     }
   }

  onChangeText = (text) => {
    const onChangeText = get(this.props, 'onChangeText', () => {})
    this.setState({ text })
    onChangeText(text)
  }

  render() {
    const { title, placeholder, icon, append, prepend, editable, style, incorrect, ...props } = this.props

    const { isFocus, text } = this.state
    return (
      <>
        <View
          style={[
            styles.textArea,
            style,
            text && { borderBottomColor: colors.PRIMARY },
            incorrect && { borderBottomColor: colors.RED },
            !editable && styles.disabled,
          ]}
        >
          {this.RenderTitle()}
          <TextInput
            {...props}
            value={text}
            autoCapitalize="none"
            placeholder={!isFocus ? placeholder : null}
            placeholderTextColor={colors.SMOKE}
            style={styles.input}
            editable={editable}
            onFocus={this.focus}
            onBlur={this.blur}
            autoCorrect={false}
            selectionColor={colors.PRIMARY}
            onChangeText={this.onChangeText}
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
    height: getHeight(48),
  },
  input: {
    flex: 1,
    padding: 0,
    color: colors.BLACK,
    height: getHeight(40),
    fontFamily: 'Effra-Regular',
    fontSize: setValue(16),

  },
  disabled: {
    borderBottomColor: colors.GREY,
  },
  title: {
    fontFamily: 'Effra-Regular',
    fontSize: 12,
    color: 'rgba(58,58,58,0.38)',
    lineHeight: 12,
  },

})
