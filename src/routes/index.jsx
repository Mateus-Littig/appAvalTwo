import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SignUp } from '../screens/Auth/SignUp';
import { Login } from '../screens/Auth/Login';
import { DetailProduct } from '../screens/App/DetailProduct';
import { CategoryRender } from '../screens/App/CategoryRender';
import { TabRoutes } from './tab.routes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="CategoryRender" component={CategoryRender} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
