/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/Screen/Login';
import SignUp from './src/Screen/SignUp';
import Result from './src/Screen/Result';
import PostItem from './src/Screen/PostItem';
import ReturnItem from './src/Screen/ReturnItem';
import RatingItem from './src/Screen/RatingItem';
import BorrowItem from './src/Screen/BorrowItem';
import ItemDetail from './src/Screen/ItemDetail';
import Navigation from './src/components/Navigation';
import Homepage from './src/Screen/Homepage';
import Tabs from './src/components/Tabs';
import SuspendAccount from './src/Screen/SuspendAccount';
const App = () => {
  return (
  //  <NavigationContainer>
  //   <Navigation />
  //  </NavigationContainer>
  // <Navigation />
  // <Homepage />
  <SuspendAccount />
  );
};

const styles = StyleSheet.create({
  
});

export default App;
