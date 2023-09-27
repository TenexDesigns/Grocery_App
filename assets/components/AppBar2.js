import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, usePathname } from 'expo-router';




export default function AppBar2() {
    const path = usePathname();
    const isActive = route => path === route;
    console.log(path)

  return (
    <View  style={styles.container} >


<Link href={'/'} asChild>
<Pressable>
<View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor: isActive('/') ? '#5EC401' : '#FFFFFF', width:50, height:50, borderRadius:50}}>
<Icon name='home' size={20}  color='#37474F'/>
</View>
</Pressable>
</Link>



<Link href={'/category'} asChild>
<Pressable>
<View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor: isActive('/category') ? '#5EC401' : '#FFFFFF', width:50, height:50, borderRadius:50}}>
<Icon name='th' size={20}  color='#37474F'/>
</View>
</Pressable>
</Link>



<Link href={'/cart'} asChild>
<Pressable>
<View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor: isActive('/cart') ? '#5EC401' : '#FFFFFF', width:50, height:50, borderRadius:50}}>
<Icon name='shopping-cart' size={20}  color='#37474F'/>
</View>
</Pressable>
</Link>


<Link href={'/profile'} asChild>
<Pressable>
<View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor: isActive('/profile') ? '#5EC401' : '#FFFFFF', width:50, height:50, borderRadius:50}}>
<Icon name='user' size={20}  color='#37474F'/>
</View>
</Pressable>
</Link>














    </View>
  )
}

const styles = StyleSheet.create({
    container:{
         position: "absolute", start: 0, end: 0, bottom: 0 ,
         height:76,
         backgroundColor:'white', 
         borderTopStartRadius:20,
         borderTopEndRadius:20,
         flexDirection:'row',
         justifyContent:'space-around',
         alignItems:'center'},
    bar:{
        flexDirection:'row',
        justifyContent:'space-around',
       alignItems:'center'
    }
    ,active:{

    }
    
})