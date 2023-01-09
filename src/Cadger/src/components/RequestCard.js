/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import { parameters } from '../global/style'
import { ip, port } from '../global/data'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Ionicons';
const RequestCard = ({item, navigation}) => {
  const [info, setInfo] = useState("");
  return (
     <View style={styles.request}>
        <View style={{flexDirection: 'row'}}>
        <Image source={item.img}
        style={styles.avatar}
        />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text>{item.borrower}</Text>
        <View style={{flexDirection: 'row',paddingVertical: 10, alignItems: 'center'}}>
        <Text style={{paddingHorizontal: 5}}>{item.rating?item.rating:0}</Text>
        <Icon  name='star' size={16} color='#F1CF1C'/>
        </View>
        
        </View>
        </View>

        <View style={styles.body}>
            <Text>{item.body}</Text>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Text style={styles.date}>Borrow date: </Text>
                <Text>{item.start_date}</Text>
            </View>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Text style={styles.date}>Return date: </Text>
                <Text>{item.end_date}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'center'}}>
            <TouchableOpacity style={[styles.btn,{  backgroundColor: '#98FB98'}]} onPress={async() => {
              try {
                Promise.all([
                fetch(`http://${ip}:${port}/borrowrequests/deleteByItem/${item.item_id}/${item.request_id}`, {
                method: 'DELETE',
                }),
                fetch(`http://${ip}:${port}/items/getById/${item.item_id}`, {
                method: 'GET',
                }),
                fetch(`http://${ip}:${port}/logs/create`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({item_id: item.item_id, borrower: item.borrower, date: item.start_date})
                })
              ]).then(async allResponses => {
                const r1 = allResponses[0];
                const r2 = allResponses[1];
                const d2 = await r2.json();
                setInfo(d2);
              })
              } catch (err) {
                console.log(err.message);
              }
              if (info != "") {
                try {
                  const r = await fetch(`http://${ip}:${port}/items/updateStatus/${item.item_id}/1/${info.borrow_times}`, {
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
                <Text style={{fontWeight:'bold'}}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,{  backgroundColor: 'lightgrey'}]} onPress={async () => {
              try {
                const r = await fetch(`http://${ip}:${port}/borrowrequests/deleteById/${item.request_id}`, {
                method: 'DELETE',
                });
                const d = await r.json();
                Alert.alert("Declined the borrow request!");
                navigation.navigate("Request");
              } catch (err) {
                console.log(err.message);
              }
            }}>
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