import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name= "Home" component={HomeScreen}/>
        <Tab.Screen name= "News" component={NewsScreen}/>
        <Tab.Screen name= "Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

