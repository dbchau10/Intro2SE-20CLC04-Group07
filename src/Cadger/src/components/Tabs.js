/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const Tab = createBottomTabNavigator();
import Homepage from '../Screen/Homepage';
import Result from '../Screen/Result';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
const Tabs = () => { 
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { 
        position: 'absolute',
        elevation: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      height: 70,
    ...styles.shadow },
    }}>
      <Tab.Screen name="Home" component={Homepage} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.eleBox}>
            <Icon2 style={{
              alignSelf: 'center',
              color: focused ? '#98FB98' : 'black'
            }
            } name="home-outline" size={35} />
          <Text style={{
            textAlign: 'center',
            color: focused ? '#98FB98' : 'black'
          }}>Home</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Result" component={Result} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  eleIcon: {
    alignSelf: 'center',
  },
  eleText: {
    textAlign: 'center',
    color: 'black',
  },
  eleTextSelect: {
    textAlign: 'center',
    color: '#98FB98',
  }
})