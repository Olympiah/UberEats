import About from '../components/restaurantDetails/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetails/MenuItems'
import { View, Text } from 'react-native'
import ViewCart from '../components/restaurantDetails/ViewCart'


// destructuring the route
export default function RestaurantDetail({route,navigation}) {
  return (
    <View>
      {/* Now about component has access to route */}
        <About route={route}/>
        <Divider width={1.8} style={{ marginVertical:20}}/>
        <MenuItems restaurantName={route.params.name}/>
        <ViewCart navigation={navigation}  restaurantName={route.params.name}/>
    </View>
  )
}