import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Title() {
  return (

       <View style={styles.head}>

<Text style={{fontSize:20, fontWeight:600, }}>Grocey Plus</Text>
<Icon name="bell-o" size={20} color="#37474F" />

     </View>
 
  )
}


const styles = StyleSheet.create({
    head:{
        flexDirection:'row',
        justifyContent:'space-between'
      }
    
})