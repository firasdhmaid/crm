import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeroPage from './screens/HeroPage'
import Signin from './screens/Signin'
import SignUp from './screens/Signup'
import Cards from './screens/Cards'
import Dashboard from './screens/Dashboard'




function App() {
  
  return (
   <HeroPage/>
  )
}

export default App;