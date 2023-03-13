import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'


const items = [
  {
    item: require("../assets/hungerbounce.png"),
    title: "Pick-Up"
  },
  {
    item: require('../assets/hungerbounce.png'),
    title: 'Soft Drinks'
  },
  {
    item: require("../assets/hungerbounce.png"),
    title: "Bakery Items"
  },
  {
    item: require("../assets/hungerbounce.png"),
    title: "Fast Foods"
  },
  {
    item: require("../assets/hungerbounce.png"),
    title: "Desserts"
  },
];

export default function Categories() {
  return (

    <View style={{
      marginTop:5,
      // backgroundColor:'white',
      paddingLeft:20,
      paddingVertical:10

    }}>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {/* Looping through to give you each item */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image
              source={item.item}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain'
              }} />

            <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}