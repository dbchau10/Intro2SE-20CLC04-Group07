import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const Result: () => Node = () => {
  const [isSelected, setSelection] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerLogo}>Cadger</Text>
            <Text style={styles.headerName}>Result</Text>
        </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
                <Text style={styles.searchContent}>Laptop</Text>
                <View style={styles.searchIcon}>
                    <Icon name='search' size={16} color='black' />
                </View>
            </View>
            <View style={styles.filterBox}>
                <Text style={styles.filterHeader}>Filter:</Text>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                />
                <Text style={styles.filterContent}>Unavailable</Text>
            </View>
        </View>
        <View style={styles.productContainer}>

        </View>
        <View style={styles.navbar}>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='home-outline' size={35} color='black' />
                <Text style={styles.eleText}>Home</Text>
            </View>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='mail-outline' size={35} color='black' />
                <Text style={styles.eleText}>Request</Text>
            </View>
            <View style={styles.eleBox}>
                <View style={[styles.eleIcon,
                {width: 60, height: 60, backgroundColor: '#98FB98', marginBottom: 60, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'white'}]}>
                  <Icon2 styles={styles.eleText} name='plus' size={35} color='white' />
                </View>
            </View>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='notifications-outline' size={35} color='black' />
                <Text style={styles.eleText}>Notification</Text>
            </View>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='person-outline' size={35} color='black' />
                <Text style={styles.eleText}>Account</Text>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  header: {
    height: 0.1*windowHeight,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  headerLogo: {
    flex: 1,
    textAlign: 'left',
    alignSelf: 'center',
    paddingLeft: 20,
    fontSize: 40,
    color: '#98FB98',
    fontWeight: 'bold',
    fontFamily: 'Changa One',
  },
  headerName: {
    flex: 1,
    textAlign: 'right',
    alignSelf: 'center',
    paddingRight: 30,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Changa One',
  },
  searchContainer: {
    height: 0.2*windowHeight,
  },
  searchBox: {
    alignSelf: 'center',
    width: 0.7*windowWidth,
    height: 30,
    marginTop: 30,
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
  },
  searchContent: {
    flex: 1,
    textAlign: 'left',
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  searchIcon: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
    paddingRight: 10,
  },
  filterBox: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  filterHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  filterContent: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
  },
  productContainer: {
    height: 0.6*windowHeight,
  },
  navbar: {
    height: 0.1*windowHeight,
    width: windowWidth,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,
    elevation: 2,
    flexDirection: 'row',
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
  },
})
