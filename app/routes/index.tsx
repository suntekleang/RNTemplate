import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from '../screen/Home/HomeContainer';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  )
}

export default function MyStack() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};