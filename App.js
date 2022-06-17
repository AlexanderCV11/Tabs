import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'

import{Platform} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const { createNavigator} = Platform.select({
  ios: {createNavigator: Drawer},
  android: {createNavigator: Tab},
})

export default function App() {
  return (
    <NavigationContainer>
      <createNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          }else if (route.name === 'Settings') {
            iconName = focused ? 'list' : 'list-outline';
          }else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }else if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <createNavigator.Screen name="Home" component={HomeScreen}/>
        <createNavigator.Screen name="News" component={NewsScreen}/>
        <createNavigator.Screen name="Settings" component={SettingsScreen}/>
        
      </createNavigator.Navigator>
    </NavigationContainer>
  );
}

