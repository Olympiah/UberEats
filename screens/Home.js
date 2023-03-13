import { View, Text,SafeAreaView, ScrollView, useWindowDimensions } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'
import { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import BottomsTab from '../components/BottomsTab'


const YELP_API_KEY = ''

// because home is a screen wrapped up inside nav container it has acces to navigation component

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData]= useState(localRestaurants);
  const [city, setCity]= useState('San Francisco');
  const [activeTab, setActiveTab]= useState('Delivery');

  const getRestaurantFromYelp = (navigation)=> {
    // get the real yelp api son
    const yelpUrl= `heksnndndndcd ${city}`
  
    const apiOptions={

      header: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
    }

    return fetch(yelpUrl,apiOptions)
      .then((res)=> res.json())
      .then(json=> setRestaurantData(
        json.businesses.filter((businesss)=> 
          businesss.transactions.includes(activeTab.toLowerCase())  
       )
      ))
  
  }
//  is a reacte hook: it gets the restaurant details n ten updates it per change in the city
//the activetab by default is delivery thus displays restaurants for delivery
  useEffect(()=>{
    getRestaurantFromYelp();
  },[city,activeTab])


  return (
    <SafeAreaView style={{backgroundColor:'orange', flex: 1}}>
     <View  styles={{padding:15}}>
      <HeaderTabs activeTab={activeTab}  setActiveTab={setActiveTab}/>
      <SearchBar cityHandler={setCity}/>
     </View>  
     <ScrollView showsVerticalScrollIndicator={false}>
     <Categories/>
     <RestaurantItem restaurantData={restaurantData} navigation ={navigation} />
     </ScrollView>
     <Divider width={1}/>
     <BottomsTab/>
    </SafeAreaView>
  )
}