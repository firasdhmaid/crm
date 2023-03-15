import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeroPage from '../screens/HeroPage';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';




const Navigation = () =>{
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HeroPage} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name ="HeroPage" component={HeroPage}/>
        </Stack.Navigator>
  </NavigationContainer>
 
  
  )
}

export default Navigation;