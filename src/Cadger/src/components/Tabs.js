/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
const Tab = createBottomTabNavigator();
import Homepage from '../Screen/Homepage';
import Result from '../Screen/Result';
import ResultItem from '../Screen/ResultItem';
import PostItem from '../Screen/PostItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import ItemDetail from '../Screen/ItemDetail';
import PersonalPage from '../Screen/PersonalPage';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import Item from '../Screen/Item';
import BorrowItem from '../Screen/BorrowItem';
import Request from '../Screen/Request';
import ReturnForm from '../Screen/ReturnForm';
import RequestNavigator from './RequestNavigator';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import MultiForm from '../Screen/MultiForm';

import AllBorrowingList from '../Screen/AllBorrowingList';
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={styles.eleBox} onPress= {onPress}>
      {children}
    </TouchableOpacity>
)

export const AuthContext = React.createContext();

const Tabs = ({route}) => {
  const user = route.params;
  console.log(user.username);
  return (
    <AuthContext.Provider value={user.username}>
    <Tab.Navigator
    initialRouteName='PersonalPage'
    screenOptions={{
      headerShown: false,
      tabBarStyle: { 
        position: 'absolute',
        elevation: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      height: 70,
    ...styles.shadow },
    }}>

      <Tab.Screen name="HomeNavigator" component={HomeNavigator}  options={{
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
        ),
        tabBarLabel:() => {return null},
        
      }} />
      <Tab.Screen name="RequestNavigator" component={RequestNavigator}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.eleBox}>
            <Icon2 style={{
              alignSelf: 'center',
              color: focused ? '#98FB98' : 'black'
            }
            } name="mail-outline" size={35} />
          <Text style={{
            textAlign: 'center',
            color: focused ? '#98FB98' : 'black'
          }}>Request</Text>
          </View>
        ),
        tabBarLabel:() => {return null},
        
      }}/>
      <Tab.Screen name="Post" component={PostItem} options={{
        tabBarIcon: ({focused}) => (
          <View style={[styles.eleIcon,
            {width: 60, height: 60, backgroundColor: '#98FB98', marginBottom: 60, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'white'}]}>
              <Icon styles={styles.eleText} name="plus" size={35} color="white" />
            </View>
        ),
        tabBarButton: (props) => (
          <CustomTabBarButton {...props}/>
        ),
        tabBarLabel:() => {return null},
        headerShown: 'true',
        title: "Post Item",
        headerStyle: {
          backgroundColor: '#98FB98',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }} />
      <Tab.Screen name="Notification" component={AllBorrowingList}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.eleBox}>
            <Icon2 style={{
              alignSelf: 'center',
              color: focused ? '#98FB98' : 'black'
            }
            } name="notifications-outline" size={35} />
          <Text style={{
            textAlign: 'center',
            color: focused ? '#98FB98' : 'black'
          }}>Notification</Text>
          </View>
        ),
        tabBarLabel:() => {return null},
        
      }}/>
      <Tab.Screen name="Account" component={ProfileNavigator}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.eleBox}>
            <Icon2 style={{
              alignSelf: 'center',
              color: focused ? '#98FB98' : 'black'
            }
            } name="person-outline" size={35} />
          <Text style={{
            textAlign: 'center',
            color: focused ? '#98FB98' : 'black'
          }}>Account</Text>
          </View>
        ),
        tabBarLabel:() => {return null},
      }}
      initialParams={{username: user}}
      />


    </Tab.Navigator>
    </AuthContext.Provider>
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
  eleBox: {
    width: 0.2*windowWidth,
    height: '100%',
    justifyContent: 'center',
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