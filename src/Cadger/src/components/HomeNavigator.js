import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const HomeStack = createNativeStackNavigator();

import Homepage from '../Screen/Homepage';
// import ResultItem from '../Screen/ResultItem';
import Item from '../Screen/Item';
import ItemCard from './ItemCard';
import ItemNavigator from './ItemNavigator';
import ResultItem from '../Screen/ResultItem';
import BorrowItem from '../Screen/BorrowItem';
import RatingItem from '../Screen/RatingItem';
import MultiForm from '../Screen/MultiForm';
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
            title: 'Item Detail',
            headerTitleAlign: 'center'
          }}
        /> 
        <HomeStack.Screen
          name="BorrowItem"
          component={BorrowItem}
          options={{
            title: 'Borrow Request',
            headerTitleAlign: 'center'
          }}
        /> 
        <HomeStack.Screen
          name="MultiForm"
          component={MultiForm}
          options={{
            title: 'Return Item',
            headerTitleAlign: 'center'
          }}
        />
        <HomeStack.Screen
          name="RatingItem"
          component={RatingItem}
          options={{
            title: 'Return Item',
            headerTitleAlign: 'center'
          }}
        /> 
      </HomeStack.Navigator>
  );
};

export default HomeNavigator;
