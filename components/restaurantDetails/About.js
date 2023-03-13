import { View, Image,Text } from 'react-native'


const yelpRestaurantInfo = {
  name:'FarmHouse Kitchen Thai Cuisine',
  image:'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?cs=srgb&dl=pexels-elevate-1267320.jpg&fm=jpg',
  price:'$$',
  reviews:'1520',
  rating: 4.0,
  categories:[{title:'Thai'},{title:'Comfort Food'}],
};

// Desconstructing the yelpRestaurant api info

// const {name,image,price,rating,reviews,categories}= yelpRestaurantInfo;

// Getting the various category titles for each retaurant and sep by a dot
// const formatedCategories= categories.map((cat)=> cat.title).join('.');

// destructuring the route info received from restaurantItem
// this is befowe we passed into the about component
// const description = 
//   `${formatedCategories} . ${price ? '.' +price : ' '} . 💵 . ${rating} ⭐ {${reviews}+}`;

// const image='https://www.pexels.com/photo/chef-preparing-vegetable-dish-on-tree-slab-1267320/'
// const title='FarmHouse Kitchen Thai Cuisine'
// const description='Thai . Comfort Food . $$ . 💵  4⭐ (1520+)'


export default function About(props) {
  // destructuring the data received from restaurant item to an object(below)
  const {name,image,price,rating,reviews,categories}= props.route.params; //the params is obj containing the info

  const formatedCategories= categories.map((cat)=> cat.title).join('.');
  const description = 
      `${formatedCategories} . ${price ? '.' +price : ' '} . 💵 . ${rating} ⭐ {${reviews}+}`;
  


  return (
  
    <View>
      <RestaurantImage image= {image}/>
      <RestaurantName name={name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}



const RestaurantImage= (props)=>{

  return(
    <Image 
      source={{uri: props.image}}
      style={{width:'100%', height:30}}/>
  )
}

const RestaurantName= (props)=>{
  return(
    <Text 
      style={{
        fontSize:29,
        fontWeight:'600',
        marginTop:10,
        marginHorizontal:15
      }}>
        {props.name}</Text>
  )
}


const RestaurantDescription= (props)=>{
  return(
    <Text
      style={{
        marginTop:10,
        marginHorizontal:15,
        fontWeight:'400',
        fontSize: 15.5
      }}>
        {props.description}</Text>
  )
}