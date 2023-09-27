import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ScrollView , ImageBackground,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../assets/screensComponents/IndexScreen/Title';
import Edit from '../assets/screensComponents/EditScreen/Edit';
import { Avatar, TextInput } from '@react-native-material/core';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AppBar2 from '../assets/components/AppBar2';

export default function reviews() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>


    <ScrollView style={styles.container}>

    <View style={styles.container2}>

      <Edit/>

      <View style={styles.pic}>


 
      <Avatar label="Kent Dodds" size={172}  />



      </View>


      <View style={{ flex:1,flexDirection:'column', justifyContent:'spaceBetween'}}>

      <View style={{flexDirection:'column', gap:6}}>

      <TextInput
      placeholder="Full Name"
      variant="outlined"
      leading={props => <Icon name="user" {...props} />}
    />


    
<TextInput
      placeholder="Password"
      variant="outlined"
      
      leading={props =><EvilIcons name="lock" size={30} {...props} />}
      trailing={props => <AntDesign name="eyeo" {...props} />}
    />

    
<TextInput
      placeholder="Phone Nmber"
      variant="outlined"
      leading={props => <FontAwesome name="phone" size={24} color="black" />}
      
    />


  </View>

   





<View style={{ backgroundColor:'#5EC401', marginTop:'30%',padding:12, flexDirection:'row', justifyContent:'center'}}>

  <Text style={{ color:'white', fontSize:20}}> Save</Text>
</View>

</View>



    </View>
    
  </ScrollView>

  <AppBar2/>
    
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#d1ded4',
   
    },
    containerImage: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    

  container2:{
    padding:9
    ,margin:5

  },
  head:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  pic:{
    width:'100%',
    height:240,
    alignItems:'center',
    justifyContent:'center'
  },

  
})