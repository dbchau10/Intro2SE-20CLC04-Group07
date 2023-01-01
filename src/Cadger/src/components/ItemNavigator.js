import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const ItemStack = createNativeStackNavigator();
import ResultItem from '../Screen/ResultItem';
import Item from '../Screen/Item';
const ItemNavigator = () => {
  return (
      <ItemStack.Navigator>
       <ItemStack.Screen
          name="Result"
          component={ResultItem}
          options={{headerShown: false}}
        /> 
        <ItemStack.Screen
          name="Item"
          component={Item}
        /> 
      </ItemStack.Navigator>
  );
};

export default ItemNavigator;
