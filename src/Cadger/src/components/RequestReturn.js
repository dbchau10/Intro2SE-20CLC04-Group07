/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { parameters } from '../global/style';
import {ip, port} from '../global/data';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Ionicons';
const RequestReturn = ({item, navigation}) => {
  const [info, setInfo] = useState("");
  const [ratings, setRating] = useState("");
  const [total, setTotal] = useState(0);
  const getTotalRating = (i) => {
    setTotal(total + i.point);
  }
  return (
     <View style={styles.request}>
        <View style={{flexDirection: 'row'}}>
        <Image source={item.img}
        style={styles.avatar}
        />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text>{item.borrower}</Text>
        <View style={{flexDirection: 'row',paddingVertical: 10, alignItems: 'center'}}>
        <Text style={{paddingHorizontal: 5}}>{item.rating}</Text>
        <Icon  name='star' size={16} color='#F1CF1C'/>
        </View>
        
        </View>
        </View>

        <View style={styles.body}>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Text style={styles.date}>Return date: </Text>
                <Text>{item.date}</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.date}>Return place: </Text>
                <Text>{item.contact}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'center'}}>
            <TouchableOpacity style={[styles.btn,{  backgroundColor: '#98FB98'}]} onPress={async () => {
              try {
                Promise.all([
                  fetch(`http://${ip}:${port}/returns/delete/${item.return_id}`, {
                  method: 'DELETE',
                  }),
                  fetch(`http://${ip}:${port}/items/getById/${item.item_id}`, {
                  method: 'GET',
                  }),
                  fetch(`http://${ip}:${port}/items/updateStatus/${item.item_id}/0/0`, {
                  method: 'PUT',
                  }),
                  fetch(`http://${ip}:${port}/ratings/readItemRating/${item.item_id}`, {
                  method: 'GET',
                  }),
                ]).then(async allResponses => {
                  const r1 = allResponses[0];
                  const r2 = allResponses[1];
                  const r3 = allResponses[2];
                  const r4 = allResponses[3];
                  const d1 = await r1.json();
                  const d2 = await r2.json();
                  const d3 = await r3.json();
                  const d4 = await r4.json();
                  setInfo(d2);
                  setRating(d4);
                })
              } catch (err) {
                console.log(err.message);
              }
              // Update rating point
              if (info != "") {
                
                const point = ratings.forEach(getTotalRating)/ratings.length;
                try {
                  const r = await fetch(`http://${ip}:${port}/items/updateRating/${item.item_id}/${point}`, {
                  method: 'PUT',
                  });
                  const d = await r.json();
                  Alert.alert("Accepted the request!");
                  navigation.navigate("Request");
                } catch ( err ) {
                  console.log(err.message);
                }
              }
            }}>
                <Text style={{fontWeight:'bold'}}>Confirm</Text>
            </TouchableOpacity>
        </View>
     </View>

  )
}

export default RequestReturn

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
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center'
      },
      date: {
        paddingRight: 5,
        fontWeight: 'bold',
        fontSize: 16,
      },
      btn: {
      
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        
      },

})