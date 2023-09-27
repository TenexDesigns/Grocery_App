import { IconButton, TextInput } from '@react-native-material/core';
import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Search() {
  return (
  
<View>
<TextInput

     style={{borderRadius:50, backgroundColor:'grey', borderBottomWidth:0, marginVertical:12}}
     placeholder='Search Anything ...'
     variant='outlined'
      
      leading={props => (
        <IconButton icon={props => <Icon size={10} name="search" color='#37474F' {...props} />} {...props} />
      )}
    />

</View>
  )
}


const styles = StyleSheet.create({
    
})