import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import Workout from './screens/Workout';
import { NavigationContainer } from '@react-navigation/native';
import { View , Text } from "react-native"
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}  />
            <Stack.Screen name="workout" component={Workout} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main