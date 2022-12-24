import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Result from '../Screen/Result';
import Homepage from '../Screen/Homepage';
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
      </Stack.Navigator>
  );
};

export default Navigation;
