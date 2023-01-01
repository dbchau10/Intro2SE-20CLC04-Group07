import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const HomeStack = createNativeStackNavigator();

import Homepage from '../Screen/Homepage';
import ResultItem from '../Screen/ResultItem';
import Item from '../Screen/Item';
import ItemCard from './ItemCard';
import ItemNavigator from './ItemNavigator';
import Result from '../Screen/Result';
import BorrowItem from '../Screen/BorrowItem';
const HomeNavigator = () => {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Homepage"
          component={Homepage}
          options={{headerShown: false}}
        />
       <HomeStack.Screen
          name="ResultItem"
          component={ResultItem}
          options={{headerShown: false}}
        /> 
        <HomeStack.Screen
          name="Item"
          component={Item}
          options={{
            title: 'Item Detail'
          }}
        /> 
        <HomeStack.Screen
          name="BorrowItem"
          component={BorrowItem}
          options={{
            title: 'Borrow Request'
          }}
        /> 
      </HomeStack.Navigator>
  );
};

export default HomeNavigator;
