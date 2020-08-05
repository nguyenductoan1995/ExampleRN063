import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { StatefulComponent } from 'lib'
import colors from 'utils/colors'
import { setValue, getHeight } from 'utils/utils'
import { get } from 'lodash'
import { Block } from 'galio-framework'

/**
 * Input
 * @param string placeholder
 * @param function onChangeText
 * @param object style
 */

export default class
Inputmultiline extends StatefulComponent {
  static defaultProps = {
    editable: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      isFocus: false,
      text: get(this.props, 'value'),
      height: null,
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
    const { isFocus, text, height } = this.state
    const length = text ? text.length : 0
    return (
      <>
        <View
          style={[
            styles.textArea,
            style,
            text && { borderBottomColor: colors.PRIMARY },
            incorrect && { borderBottomColor: colors.RED },
            !editable && styles.disabled,
            height && { height },
          ]}
        >
          {this.RenderTitle()}
          <TextInput
            {...props}
            value={text}
            autoCapitalize="none"
            placeholder={!isFocus ? placeholder : null}
            placeholderTextColor={colors.SMOKE}
            style={[styles.input, height && { height }]}
            editable={editable}
            onFocus={this.focus}
            onBlur={this.blur}
            autoCorrect={false}
            selectionColor={colors.PRIMARY}
            onChangeText={this.onChangeText}
            multiline
            onContentSizeChange={(e) => {
              this.setState({ height: e.nativeEvent.contentSize.height + getHeight(30) })
            }}
            maxLength={50}
          />
        </View>
        <Block bottom>
          <Text style={styles.txt2}>{`${length}/50`}</Text>
        </Block>
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
    // height: setYAxisValue(48),
  },
  input: {
    flex: 1,
    padding: 0,
    color: colors.BLACK,
    //  height: setYAxisValue(40),
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
  txt2: {
    fontFamily: 'Effra-Regular',
    fontSize: setValue(12),
    color: colors.BLACK38,
    marginTop: getHeight(8),
  },

})
