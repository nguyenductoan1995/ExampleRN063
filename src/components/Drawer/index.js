// import liraries
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const section = {
  marginVertical: 10,
  borderTopWidth: 1,
  borderColor: '#3c3c3c',
  borderStyle: 'solid',
}

const List = [
  {
    title: 'Home',
    route: 'Home',
  },
]

// create a component
class Drawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: '',
    }
  }

  getStyle = ({ item }) => {
    const { selectedItem } = this.state
    if (item.title === selectedItem) {
      return { view: styles.activeBackgroundColor, txt: styles.activeTintColor }
    }
    return { view: styles.inactiveBackgroundColor, txt: styles.inactiveTintColor }
  }

  changeState = ({ item }) => {
    const { navigation } = this.props
    this.setState({ selectedItem: item.title })
    navigation.navigate(item.route)
  }

  renderItem = ({ item, index }) => {
    const style = this.getStyle({ item })
    const { selectedItem } = this.state
    return (
      <View key={index}>
        {item.style ? (<View style={item.style} />) : (null)}
        <TouchableOpacity
          onPress={() => this.changeState({ item })}
          style={[styles.items, style.view]}
        >
          <Text style={style.txt}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }


   renderDrawerItems = () => List.map((item, index) => this.renderItem({ item, index }))


   render() {
     return (
       <ScrollView style={styles.container}>
         <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
           <View style={styles.info}>
             <TouchableOpacity />
             <View>
               <Text style={styles.name}>Home </Text>
             </View>
           </View>
           {this.renderDrawerItems()}
         </SafeAreaView>
       </ScrollView>
     )
   }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  info: {
    height: 106,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 19,
  },
  name: {
    fontSize: 16,
  },
  items: {
    height: 38,
    paddingHorizontal: 21,
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeTintColor: {
    color: 'black',
  },
  inactiveTintColor: {
    color: 'white',
  },
  activeBackgroundColor: {
    backgroundColor: 'yellow',
  },
  inactiveBackgroundColor: {
    color: 'white',
  },
})

// make this component available to the app
export default Drawer
