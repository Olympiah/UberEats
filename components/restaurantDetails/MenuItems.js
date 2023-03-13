import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
const foods = [
    {
        title: 'Butter Chicken',
        description: 'Amazing Indian delicacy with butter lettuce and ring onions',
        price: '$13.50',
        image: 'https://www.pexels.com/photo/close-up-photo-of-roasted-chicken-wings-2338407/'
    },
    {
        title: 'Pork Ribs',
        description: 'Honey coated pork ',
        price: '$10.99',
        image: 'https://www.pexels.com/photo/pork-spare-ribs-and-french-fries-9650087/'
    },
    {
        title: 'Pork Ribs',
        description: 'Honey coated pork ',
        price: '$10.99',
        image: 'https://www.pexels.com/photo/pork-spare-ribs-and-french-fries-9650087/'
    },
    {
        title: 'Pork Ribs',
        description: 'Honey coated pork ',
        price: '$10.99',
        image: 'https://www.pexels.com/photo/pork-spare-ribs-and-french-fries-9650087/'
    },
 ];



export default function MenuItems({restaurantName}) {

// used to send the info/updates to the redux store
const dispatch= useDispatch();

// actual fn doing the dispaching of the item to store 'onPress'
const selectItem = (item, checkboxValue)=>
   dispatch({
       type:'ADD_TO_CART',
    //    payload:item, before we passed rest'name details to menuitems
       payload:{...item,
                restaurantName:restaurantName,
                checkboxValue:checkboxValue
            },
   });



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food,index)=>{ 
                <View key={index}>
                    <View style={styles.menuItems}>
                        <BouncyCheckbox
                          iconStyle={{borderColor:'lightgray', borderRadius:0}}
                          fillColor='green'
                          onPress={(checkboxValue)=> selectItem(food, checkboxValue)}
                          
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} style={{marginHorizontal:20}}/>
                </View>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    menuItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    }
})


const FoodInfo = (props) => {
    return (
        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 19, fontWeight: '600' }}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const FoodImage = (props) => {
    return (
        <View>
            <Image source={{ uri: props.foods.image }} />
        </View>
    )
}