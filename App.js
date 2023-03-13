import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import RootNavigation from './navigation';
// import RestaurantDetail from './screens/RestaurantDetail';


export default function App() {
  return (
    // <Home/>
    // <RestaurantDetail/>
    <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
