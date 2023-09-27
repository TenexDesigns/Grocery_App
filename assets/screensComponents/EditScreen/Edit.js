import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from '@expo/vector-icons';


export default function Edit() {
  return (

       <View style={styles.head}>

<AntDesign style={{marginRight:15}} name="arrowleft" size={25} color="#37474F" />


<Text style={{fontSize:20, fontWeight:600, }}>Edit Profile </Text>

     </View>
 
  )
}


const styles = StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
      }
    
})