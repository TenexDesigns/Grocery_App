import { View, Text, Image } from 'react-native'
import React from 'react'
import { Surface } from '@react-native-material/core'

export default function SurfaceCard({imageUrl,title}) {

  return (
<Surface

elevation={3}
category="medium"
style={{
  justifyContent: "center",
  alignItems: "center",
  width: 160,
  height: 160,
  borderRadius:140,
  marginBottom:8,
  marginRight:5
}}

>

<Image
         source={imageUrl}
         style={{  }}
       />

       <Text style={{ paddingTop:9, paddingBottom:9}}>{title}</Text>
</Surface>
  )
}