import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Button,IconButton, Surface, TextInput } from '@react-native-material/core'
import { Link } from 'expo-router'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import SurfaceCard from '../assets/components/SurfaceCard'
import AppBar2 from '../assets/components/AppBar2'
import Title from '../assets/screensComponents/IndexScreen/Title'
import Location from '../assets/screensComponents/IndexScreen/Location'
import Search from '../assets/screensComponents/IndexScreen/Search'


export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
       
<ScrollView style={styles.container}>
<View style={styles.container2}>
<Title/>
<Location/>
<Search/>


<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap:2, paddingTop:24 }}>
<SurfaceCard imageUrl={require('../assets/img/ova.png')} title={'Fruits & Vegetables'}/>
<SurfaceCard imageUrl={require('../assets/img/cake.png')} title={'Break fast'}/>
<SurfaceCard imageUrl={require('../assets/img/bottle.png')} title={'Beverages'}/>
<SurfaceCard imageUrl={require('../assets/img/fish.png')} title={'Meat & Fish'}/>
<SurfaceCard imageUrl={require('../assets/img/snacks.png')} title={'Snacks'}/>
<SurfaceCard imageUrl={require('../assets/img/milk.png')} title={'Dairy'}/>
<SurfaceCard imageUrl={require('../assets/img/ova.png')} title={'Fruits & Vegetables'}/>
<SurfaceCard imageUrl={require('../assets/img/cake.png')} title={'Break fast'}/>
<SurfaceCard imageUrl={require('../assets/img/bottle.png')} title={'Beverages'}/>
<SurfaceCard imageUrl={require('../assets/img/fish.png')} title={'Meat & Fish'}/>
<SurfaceCard imageUrl={require('../assets/img/snacks.png')} title={'Snacks'}/>
<SurfaceCard imageUrl={require('../assets/img/milk.png')} title={'Dairy'}/>

</View>



<View style={{height:80,}}/>

  

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

  container2:{
    padding:9
    ,margin:5

  }

})