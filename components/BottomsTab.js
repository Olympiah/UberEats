import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { Icon } from 'react-native-elements'

export default function BottomsTab() {
    return (
        <View
            style={{
                margin: 10,
                marginHorizontal: 30,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            <Icon name='home' text='Home'></Icon>
            <Icon name='search' text='Browse'></Icon>
            <Icon name='shopping-bag' text='Grocery'></Icon>
            <Icon name='receipt' text='Orders'></Icon>
            <Icon name='user' text='Account'></Icon>
        </View>
    )
}

//an Icon component for which the bottom sheet is dependent on
// props in this case rep the props passed on the Icon component above in bottomsheet

const Icon = (props) => {
    return (
      <TouchableOpacity>
        <View>
            <FontAwesome5
                name={props.name}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: 'center'
                }}
            />
            <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>  
    )
}