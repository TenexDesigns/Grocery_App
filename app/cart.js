import { View, Text , ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import SurfaceCard from '../assets/components/SurfaceCard'
import AppBar2 from '../assets/components/AppBar2'

export default function cart() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>


      <ScrollView style={styles.container}>

      <View style={styles.container2}>
      <View>
          <Text style={{fontSize:20, fontWeight:600 ,  marginVertical:10, }}>Cart</Text>
        </View>

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