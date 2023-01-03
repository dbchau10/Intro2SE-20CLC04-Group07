import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Admin from '../Screen/Admin';
import SuspendAccount from '../Screen/SuspendAccount';
import Result from '../Screen/Result';
import Homepage from '../Screen/Homepage';
import HomeNavigator from './HomeNavigator';
import Tabs from './Tabs';
const Navigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Admin"
          component={Admin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuspendAccount"
          component={SuspendAccount}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default Navigation;
