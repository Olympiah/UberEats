import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';



export default function ViewCart() {
  //getting acces to the items in state
   const items = useSelector((state)=> state.cartReducer.selectedItems.items)
   const total= items.map((item=> Number(item.price.replace('$', '')))).reduce((prev,curr)=>prev +curr, 0)
  

    return (


      <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'row',
          position:'absolute',
          bottom:130,
        //   zIndex makes sure the button shows up no matter where we are(screenwise)
          zIndex:999 
        }}>
        <View 
          style={{
            flexDirection:'row',
            justifyContent:'center',
            width:'100%'
          }}
          >
            <TouchableOpacity
              style={{
                  marginTop:20,
                  backgroundColor: 'black',
                  alignItems:'center',
                  padding:13,
                  borderRadius:30,
                  width:300,
                  position:'relative'
              }}>
                <Text style={{ color: 'white', fontSize: 16 }}>View Cart</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}