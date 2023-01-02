import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Request from '../Screen/Request';
import BorrowRequest from '../Screen/BorrowRequest';
const RequestStack = createNativeStackNavigator();


const RequestNavigator = () => {
  return (
      <RequestStack.Navigator>
        <RequestStack.Screen
          name="Request"
          component={Request}
          options={{headerShown: false}}
        />
       <RequestStack.Screen
          name="BorrowRequest"
          component={BorrowRequest}
          options={{
            title: "Laptop cũ phục vụ..."
          }}
        /> 
      </RequestStack.Navigator>
  );
};

export default RequestNavigator;
