import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const ProfileStack = createNativeStackNavigator();

import PersonalPage from '../Screen/PersonalPage';
import EditProfile from '../Screen/EditProfile';
const ProfileNavigator = () => {
  return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="PersonalPage"
          component={PersonalPage}
          options={{headerShown: false}}
        />
       <ProfileStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Edit Profile',
            headerTitleAlign: 'center'
          }}
        /> 
      </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
