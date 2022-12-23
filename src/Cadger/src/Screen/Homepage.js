import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {parameters} from '../global/style';
import { ItemData } from '../global/data';
import ItemCard from '../components/ItemCard';
const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView bounces={false}>
        <View style={styles.header}>
          <View style={styles.welcome}>
          <Image
                style={styles.avatar}
                source={require('../../assets/pictures/avatar.jpg')}
              />
              <View style={styles.welcomeText}>
              <Text style={styles.text1}>Welcome</Text>
              <Text style={styles.text2}>Alice</Text>
              </View>
          </View>
          <View style={styles.searchArea}>
          <View style={styles.search}>
          <TextInput
            style={styles.input}
          />
          <TouchableOpacity style={{padding: 5}}>
            <Text><Icon name='search' size={14} color='black'/></Text>
      </TouchableOpacity>
      </View>
          </View>
          <View style={styles.view1}>
            <Image
                style={styles.image1}
                source={require('../../assets/pictures/background.png')}
              />
            </View>
          </View>
        

           <View>
            <View style={styles.textHeadingBox}>
            <Text style={styles.textHeading}>Top Products</Text>
            <Text>View All</Text>
            </View>
          <FlatList
            data={ItemData}
            keyExtractor={item => item.id}
            renderItem={ItemCard}
          />
        </View>
       
        <StatusBar style="light" backgroundColor="#33a333" translucent={true} />
        </ScrollView>
        <View style={styles.navbar}>
            <View style={styles.eleBox}>
                <Icon2 style={styles.eleIcon} name='home-outline' size={35} color='black' />
                <Text style={styles.eleText}>Home</Text>
            </View>
            <View style={styles.eleBox}>
                <Icon2 style={styles.eleIcon} name='mail-outline' size={35} color='black' />
                <Text style={styles.eleText}>Request</Text>
            </View>
            <View style={styles.eleBox}>
                <View style={[styles.eleIcon,
                {width: 60, height: 60, backgroundColor: green, marginBottom: 60, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'white'}]}>
                  <Icon styles={styles.eleText} name='plus' size={35} color='white' />
                </View>
            </View>
            <View style={styles.eleBox}>
                <Icon2 style={styles.eleIcon} name='notifications-outline' size={35} color='black' />
                <Text style={styles.eleText}>Notification</Text>
            </View>
            <View style={styles.eleBox}>
                <Icon2 style={styles.eleIcon} name='person-outline' size={35} color='black' />
                <Text style={styles.eleText}>Account</Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: "#98FB98",
    height: parameters.headerHeight,
  },
  welcome: {
    padding: 20,
    flexDirection: 'row'
  },
  welcomeText: {
   
    justifyContent: 'center',
    flexDirection: 'column',
  },
  avatar: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 50
  },
  textHeadingBox: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  text1: {
    color: "white"
  },
  text2: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  },

  image1: {
    height: 200,
    width: 200,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 0
  },

  view1: {
    flex: 1
  },
  input: {
    width: 200,
    height: 30,
    paddingVertical: 5,
    fontSize: 10
  },
  search: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 20,
    borderWidth: 1,
    width: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  searchArea: {
    alignItems: 'center',
    zIndex: 1
  },
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
  
})
