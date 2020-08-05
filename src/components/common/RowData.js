import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StatefulComponent } from 'lib'
import colors from 'utils/colors'
import { setYAxisValue, setValue, getHeight } from 'utils/utils'
import { Block } from 'galio-framework'

/**
 * RowData
 * @param string placeholder
 * @param string value
 * @param string noneValue (appear when value null)
 * @param object style
 * @param UI prepend => component under borderBottom Row
 * @param bool incorrect borderBttom change color to Red
 * @param object styleValue
 * @param bool checkValue
 */

export default class
RowData extends StatefulComponent {
  constructor(props) {
    super(props)

    this.state = {
      isFocus: false,
      text: null,
    }
  }


   RenderTitle = () => {
     const { placeholder } = this.props
     return (
       <Text style={styles.title}>{placeholder}</Text>
     )
   }

   render() {
     const { prepend, value, style, incorrect, noneValue = '', styleValue, checkValue = true } = this.props
     return (
       <>
         <View
           style={[
             styles.textArea,
             style,
             checkValue && value && { borderBottomColor: colors.PRIMARY },
             incorrect && { borderBottomColor: colors.RED },
           ]}
         >
           {this.RenderTitle()}
           <Block middle left style={[styles.input]}>
             <Text style={[styles.txt, value && styles.txtValue, value && styleValue]}>{value || noneValue}</Text>
           </Block>
         </View>
         {prepend}
       </>

     )
   }
}

const styles = StyleSheet.create({
  textArea: {
    //   backgroundColor: colors.WHITE,
    borderBottomWidth: getHeight(1),
    borderBottomColor: colors.GREY,
    height: setYAxisValue(48),
  },
  input: {
    flex: 1,
    padding: 0,
    height: setYAxisValue(40),
  },
  disabled: {
  //  backgroundColor: colors.GREY,
  },
  title: {
    fontFamily: 'Effra-Regular',
    fontSize: 12,
    color: 'rgba(58,58,58,0.38)',
    lineHeight: 12,
  },
  txt: {
    fontSize: setValue(14),
    color: 'rgba(0,0,0,0.38)',
    fontWeight: '200',
  },
  txtValue: {
    fontFamily: 'EffraMedium-Regular',
    color: colors.BLACK,
    fontSize: setValue(16),
    fontWeight: 'normal',
  },

})
