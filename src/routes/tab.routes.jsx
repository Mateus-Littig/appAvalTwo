import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Tab/Home';
import Bag from '../screens/Tab/Bag';
import Shop from '../screens/Tab/Shop';
import Profile from '../screens/Tab/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarActiveTintColor: '#DB3022',
        tabBarStyle: {
          width: '100%',
          height: 70,
          backgroundColor: '#F2F2F2',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="home"
                  size={30}
                  color={focused ? '#DB3022' : '#DB3022'}
                />
              ) : (
                <Ionicons
                  name="home-outline"
                  size={30}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="cart"
                  size={32}
                  color={focused ? '#DB3022' : '#DB3022'}
                />
              ) : (
                <Ionicons
                  name="cart-outline"
                  size={32}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
             { focused ? (
                <Ionicons
                  name="bag"
                  size={32}
                  color={focused ? '#DB3022' : '#DB3022'}
                />
              ) : (
                <Ionicons
                  name="bag-outline"
                  size={32}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name="person"
                  size={32}
                  color={focused ? '#DB3022' : '#DB3022'}
                />
              ) : (
                <Ionicons
                  name="person-outline"
                  size={32}
                  color={focused ? '#000' : '#828282'}
                />
              )}
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
