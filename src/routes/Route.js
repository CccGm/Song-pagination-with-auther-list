import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home_screen} from '../screen/Home_screen';
import {Detail_Screen} from '../screen/Detail_Screen';

export const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_Screen">
        <Stack.Screen name="Home_Screen" component={Home_screen} />
        <Stack.Screen name="Details_data" component={Detail_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
