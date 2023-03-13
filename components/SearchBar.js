import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'

// without destructuring: SearchBar(props)
export default function SearchBar({cityHandler}) {
  return (
    <View 
      style={{
          marginTop: 15,
          flexDirection: 'row'
      }}>
        {/* api won't work until you enable billing */}
       <GooglePlacesAutocomplete 
          query={{key:"AIzaSyAQjK_uzIidZzjqokKz5YOQSrmjSOZ7RH0"}}
          onPress={(data,details= null)=>{
            console.log(data.description)
            const city = data.description.split(',')[0]
            // without destructuring: props.setCity(city)
            cityHandler(city);
          }}
          placeholder='Search'
          styles={{
              textInput:{
                backgroundColor:'#eee',
                borderRadius:20,
                fontWeight:'700',
                 marginTop:7
               },
              textInputContainer:{
                   backgroundColor:'#eee',
                   borderRadius:20,
                   flexDirection:'row',
                //    alignItems:'center',
                   marginRight:10,
                   marginLeft:10

               }
            }}
            // renderLeftButton={()=>{}
            //    <View styles={{marginLeft:10}}>
            //         <Ionicons name='location-sharp' size={23}/>
            //     <View/> 
            // }
            
            // renderRightButton= {()=> 
            // <View style={{
              // flexDirection:'row', 
              // magrinRight:8,
              // backgroundColor:'white'
              // padding:9,
              // borderRadius:30
              // alignItems:'center'}}> 
            // <AntDesign name:'clockcirle' size={11} styles={{marginRight:6}}/> 
            // <Text> Search </Text>
            // </View>}
                                    
                             
        />

    </View>    
  );
}  
