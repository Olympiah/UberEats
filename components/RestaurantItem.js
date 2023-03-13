import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const localRestaurants = [
  {
    name: 'Hells Kitchen',
    image
      : 'https://i.pinimg.com/474x/01/84/14/01841425cf76c755acae9d82423f509c.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1224,
    rating: 4.5
  },
  {
    name: 'La Cuisine',
    image
      : 'https://i.pinimg.com/474x/73/f6/13/73f6136a490a32ef2fbc5a34cc6cbb55.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 3.9
  },
  {
    name: 'Simba Club',
    image
      : 'https://i.pinimg.com/474x/7f/4b/b6/7f4bb6dbb5c7a054e76afcd53077e74e.jpg',
    categories: ['Ethiopian', 'Bar'],
    price: '$$',
    reviews: 970,
    rating: 4.5
  }
]


export default function RestaurantItem({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity 
           key={index}
           activeOpacity={1} 
           style={{ marginBottom: 30 }}
          //this is how we will receive data from yelp n passed to Restaurant detail screen(the route)
           onPress= {()=> navigation.navigate('RestaurantDetail',{
             name: restaurant.name,
             image: restaurant.image_url,
             price: restaurant.price,
             reviews: restaurant.review_count,
             rating: restaurant.rating,
             categories: restaurant.categories

           })}>
          <View
            
            style={{ marginTop: 10, padding: 15, backgroundColor: '#fff' }}>
            <RestaurantImage image={restaurant.image} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
    
}


const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image
        }}
        style={{ width: '100%', height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
      </TouchableOpacity>
    </>
  )
}

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}> {props.name}</Text>
        <Text style={{ color: "gray", fontSize: 13 }}>30-45 min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: 'center'
        }}>
        <Text>{props.rating}</Text>
      </View>

    </View>
  )
}