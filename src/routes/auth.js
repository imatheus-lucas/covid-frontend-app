import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
// import { Container } from './styles';
import Routes from './index';

import Step1 from '../pages/splash/step1'
import Step2 from '../pages/splash/step2'

const Stack = createStackNavigator();
const routes = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Step1">
          <Stack.Screen name="Main" component={Routes}/>
          <Stack.Screen name="Step1" component={Step1}/>
          <Stack.Screen name="Step2" component={Step2}/>
      </Stack.Navigator>
  );
}

export default routes;