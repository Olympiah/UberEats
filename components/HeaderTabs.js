import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs(props) {

  return (
    <View style={{flexDirection:'row', alignSelf:'center', marginTop:10}}>
      <HeaderButton 
         text='🚚Delivery' 
         btnColor='black' 
         txtColor='white'
         activeTab={props.activeTab}
         setActiveTab={props.setActiveTab}
      />
      <HeaderButton 
         text='Pickup'
         btnColor='white' 
         txtColor='black'
         activeTab={props.activeTab}
         setActiveTab={props.setActiveTab}
       />
    </View>
  )
}

const HeaderButton = (props)=>
  
  <TouchableOpacity 
    style={{
      backgroundColor: props.activeTab== props.text? 'black': 'white',
      paddingHorizontal:6,
      paddingVertical:16,
      borderRadius:30
    }}
    onPress={()=> props.setActiveTab(props.text)}>
    <Text style={{
      color: props.activeTab == props.text? 'white': 'black', 
      fontSize:16,
      fontWeight:'800'
      }}>
         {props.text} 
    </Text>
  </TouchableOpacity>
     