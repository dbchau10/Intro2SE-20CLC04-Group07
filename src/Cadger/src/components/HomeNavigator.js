import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const HomeStack = createNativeStackNavigator();

import Homepage from '../Screen/Homepage';
import ResultItem from '../Screen/ResultItem';
import Item from '../Screen/Item';
import ItemCard from './ItemCard';
import ItemNavigator from './ItemNavigator';
const HomeNavigator = () => {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Homepage"
          component={Homepage}
          options={{headerShown: false}}
        />
       <HomeStack.Screen
          name="Result"
          component={ItemNavigator}
          options={{headerShown: false}}
        /> 
      </HomeStack.Navigator>
  );
};

export default HomeNavigator;