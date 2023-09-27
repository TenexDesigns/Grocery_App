import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Location() {
  return (
    <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',marginVertical:10}}>
    <View style={{ flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor:'#87DD39', width:50, height:50, borderRadius:50,  marginRight:9}}>
    <Icon name='map-marker' size={20} color='#fff'/>
    </View>
    
    <View style={{flexGrow:1}}>
      <Text style={{fontSize:12}}>Your Location</Text>
      <Text style={{fontSize:18}}>32 Nairobi, kenya </Text>
    </View>
    
    <Icon name='chevron-right' size={20} color='#37474F'/>
    
    
         </View>
  )
}


const styles = StyleSheet.create({
    
})