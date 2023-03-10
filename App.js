import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import HeroPage from './screens/HeroPage'
import AuthPage from './screens/AuthPage';
import Signin from './screens/signin';
import SignUp from './screens/signup';
import Products from './screens/products';


function App() {
  return (
    <View>
      <HeroPage />
      <Products/>
    </View>
  )
}

export default App;