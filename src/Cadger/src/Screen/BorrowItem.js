/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import { AuthContext } from '../components/Tabs';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import {parameters} from '../global/style';
import {ip, port} from '../global/data';
const BorrowItem = ({route, navigation}) => {
  const username = useContext(AuthContext);
  const {item_id} = route.params;
  const [reason, onChangeReason] = React.useState("");
  
  const name = 'Laptop cũ phục vụ mục đích học tập';
    const [date, onChangeDate] = useState(new Date());
  
    const [showBorrow, setShowBorrow] = useState(false);
    const [showReturn, setShowReturn] = useState(false);
    const [borrowDate, onChangeBorrowDate] = useState("");
    const [returnDate, onChangeReturnDate] = useState("");

    const onChangeBorrow = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowBorrow(false);
        onChangeDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
        onChangeBorrowDate(fDate);
        
    }

    const onChangeReturn = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowReturn(false);
      onChangeDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
      onChangeReturnDate(fDate);
      
  }

    const showDate = (prop) => {
      if (prop==1)
        setShowBorrow(true);
      else
      setShowReturn(true)
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>Reasons</Text>
          <TextInput 
            multiline
            numberOfLines={5}
            style={styles.box}
            onChangeText={onChangeReason}
            value={reason}
          />
           <Text style={styles.title}>Borrow date</Text>
          <View style={styles.action}>
        <TouchableOpacity onPress={() => showDate(1)}>
        <Icon2 name="calendar-o" size={20} />
        </TouchableOpacity>
            <TextInput 
            value={borrowDate}
            placeholder="e.g. 18/12/2022"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
            {showBorrow && (
                <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeBorrow}
                />
            )}
        </View>
          <Text style={styles.title}>Return date</Text>
          <View style={styles.action}>
        <TouchableOpacity onPress={() => showDate(2)}>
        <Icon2 name="calendar-o" size={20} />
        </TouchableOpacity>
            <TextInput 
            value={returnDate}
            placeholder="e.g. 19/12/2022"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
            {showReturn && (
                <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeReturn}
                />
            )}
        </View>
          <TouchableOpacity
          style={styles.btn}
          onPress={async() => {
            const x = new Date(borrowDate);
            const y = new Date(returnDate);
            if (reason == "") {
              Alert.alert('Reason required!');
            } else if (borrowDate === "" || returnDate === "") {
              Alert.alert('Date required!');
            } else if (x < Date.now() || y < Date.now()) {
              Alert.alert('Date should be after today');
            } 
            else if (y < x) {
              Alert.alert('Return date should be after borrow date!');
            } else {
              try {
                const body = {item_id: item_id, borrower: username, start_date: borrowDate, end_date: returnDate, reason: reason};
                const r = await fetch(`http://${ip}:${port}/borrowrequests/create`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
                });
                let d = await r.json();
                Alert.alert('Sent borrow request!');
                navigation.navigate('HomeNavigator');
              } catch (err) {
                console.log(err.message);
              }
            }
          }}
          >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default BorrowItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
    marginBottom: 50,
    justifyContent: 'center'
  },
  body: {
    height: 0.6*windowHeight,
    alignSelf: 'center',
    paddingHorizontal: 30
  },
  name: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  box: {
    width: 0.8*windowWidth,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 10,
  },
  btn: {
    width: 250,
    height: 50,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  action: {
    flexDirection: 'row',
    marginVertical: 10,
    width: windowWidth*0.8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'center'
},
textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#666666'
}
})
