import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import HeroPage from './screens/HeroPage'

import Signin from './screens/Signin';
import SignUp from './screens/Signup';
import Products from './screens/Products';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HeroPage}
        options={{title: 'HeroPage'}}
      />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;