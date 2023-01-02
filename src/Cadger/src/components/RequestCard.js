/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { parameters } from '../global/style'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Ionicons';
const RequestCard = ({item}) => {
  return (
     <View style={styles.request}>
        <View style={{flexDirection: 'row'}}>
        <Image source={item.imagePath}
        style={styles.avatar}
        />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text>{item.username}</Text>
        <View style={{flexDirection: 'row',paddingVertical: 10, alignItems: 'center'}}>
        <Text style={{paddingHorizontal: 5}}>{item.rating}</Text>
        <Icon  name='star' size={16} color='#F1CF1C'/>
        </View>
        
        </View>
        </View>

        <View style={styles.body}>
            <Text>{item.body}</Text>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Text style={styles.date}>Borrow date: </Text>
                <Text>{item.borrowDate}</Text>
            </View>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Text style={styles.date}>Return date: </Text>
                <Text>{item.returnDate}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'center'}}>
            <TouchableOpacity style={[styles.btn,{  backgroundColor: '#98FB98'}]}>
                <Text style={{fontWeight:'bold'}}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,{  backgroundColor: 'lightgrey'}]}>
                <Text style={{fontWeight:'bold'}}>Decline</Text>
            </TouchableOpacity>
        </View>
     </View>

  )
}

export default RequestCard

const styles = StyleSheet.create({
      request: {
        width: 0.8*windowWidth,
        height: 0.4*windowHeight,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: "gray",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.3,
        elevation: 10,
      },
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 60,
        resizeMode: 'center',
        margin: 10

      },
      body: {
        padding: 20,
        flexDirection: 'column'
      },
      date: {
        paddingRight: 5,
        fontWeight: 'bold',
        fontSize: 16,
      },
      btn: {
      
        width: '45%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 5
      },

})