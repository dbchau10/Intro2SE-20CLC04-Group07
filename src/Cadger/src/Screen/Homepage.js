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

import Icon from 'react-native-vector-icons/FontAwesome';
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
           </ScrollView>

           <View>
          <FlatList
            data={ItemData}
            keyExtractor={item => item.id}
            renderItem={ItemCard}
          />
        </View>
        <StatusBar style="light" backgroundColor="#33a333" translucent={true} />
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
  }
  
})
