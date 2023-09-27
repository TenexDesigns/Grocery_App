import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Order() {
  return (
    <View>
      

      <View styles={{flexDirection:'row'}}>
      <Icon name='th' size={20}  color='#37474F'/>


        <Text> Order #345</Text>
      </View>
      
    </View>
  )
}