import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import Routes from './src/routes/auth'
import {NavigationContainer} from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#4262E9"/>
      <Routes/>
    </NavigationContainer>
  );
}
