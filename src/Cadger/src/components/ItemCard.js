import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';

import Icon from 'react-native-vector-icons/Ionicons';


const ItemCard = ({ item }) => (
  <View style={styles.itemBox}>
    <View style={styles.itemContentBox}>
      <Image source={item.imagePath}
      style = {{ width: '90%', height: '80%', alignSelf: 'center', marginVertical: '8%', borderRadius: 10, resizeMode: 'center'}}
      />  
    </View>
    <View style={styles.itemContentBox}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={item.status ? styles.itemStatusBox1 : styles.itemStatusBox2}>
        <Text style={styles.itemStatusText}>{item.status?'Available':'Unavailable'}</Text>
      </View>
      <View style={styles.itemDescription}>
      <Text style={styles.itemRating}>{item.rating} <Icon style={styles.eleIcon} name='star' size={16} color='yellow'/></Text>
      <Text style={styles.itemBorrowed}>{item.borrowed} borrowed</Text>
      </View>
    </View>
  </View>
);

export default ItemCard;

const styles = StyleSheet.create({
    itemBox: {
        height: 0.15*windowHeight,
        width: 0.9*windowWidth,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 20,
        padding: 5,
        marginVertical: 7,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 1.0,
        shadowRadius: 1.0,
        elevation: 5,
      },
      itemContentBox: {
        width: '50%',
        paddingHorizontal: 5,
        flexDirection: 'column'
     
      },
      itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        color: 'black',
        height: 50,
      },
      itemStatusBox1: {
        marginVertical: 5,
        height: 20,
        width: 100,
        backgroundColor: green,
        borderRadius: 10, 
      },
      itemStatusBox2: {
        marginVertical: 5,
        height: 20,
        width: 100,
        backgroundColor: "#EBEBEB",
        borderRadius: 10, 
      },
      itemStatusText: {
        textAlign: 'center',
        color: 'black',
      },
      itemRating: {
        textAlign: 'right',
        paddingRight: 5,
      },
      itemDescription: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
      },
      itemBorrowed: {
        textAlign: 'right',
        paddingRight: 5,
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