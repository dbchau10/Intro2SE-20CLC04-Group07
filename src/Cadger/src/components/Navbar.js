/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Navbar = ({navigation}) => {
    return (
    <View style={styles.navbar}>
    <TouchableOpacity style={styles.eleBox}>
        <Icon2 style={styles.eleIcon} name="home-outline" size={35} color="#98FB98" />
        <Text style={styles.eleTextSelect}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.eleBox}>
        <Icon2 style={styles.eleIcon} name="mail-outline" size={35} color="black" />
        <Text style={styles.eleText}>Request</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.eleBox}>
        <View style={[styles.eleIcon,
        {width: 60, height: 60, backgroundColor: green, marginBottom: 60, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'white'}]}>
          <Icon styles={styles.eleText} name="plus" size={35} color="white" />
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.eleBox}>
        <Icon2 style={styles.eleIcon} name="notifications-outline" size={35} color="black" />
        <Text style={styles.eleText}>Notification</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.eleBox}>
        <Icon2 style={styles.eleIcon} name="person-outline" size={35} color="black" />
        <Text style={styles.eleText}>Account</Text>
    </TouchableOpacity>
</View>
);
};

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        height: 0.1*windowHeight,
        width: windowWidth,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 18,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
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