/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

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
const BorrowItem = () => {
  const [reason, onChangeReason] = React.useState(null);
  
  const name = 'Laptop cũ phục vụ mục đích học tập';
    const [date, onChangeDate] = useState(new Date());
  
    const [showBorrow, setShowBorrow] = useState(false);
    const [showReturn, setShowReturn] = useState(false);
    const [borrowDate, onChangeBorrowDate] = useState(null);
    const [returnDate, onChangeReturnDate] = useState(null);

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
          onPress={() => Alert.alert("Hello")}
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
