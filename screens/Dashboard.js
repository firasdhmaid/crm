import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/Header'
import Cards from './Cards';

  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  const Tab = createBottomTabNavigator();
const Dashboard = () => {
  return (
   
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Contacts" component={SettingsScreen} />
      <Tab.Screen name="Background" component={SettingsScreen} />
      <Tab.Screen name="Email" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}
const styles = StyleSheet.create({

})
export default Dashboard