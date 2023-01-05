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
  ScrollView
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import {parameters} from '../global/style';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
const ReturnForm = () => {
  const [reason, onChangeReason] = React.useState(null);
  
  const name = 'Laptop cũ phục vụ mục đích học tập';
    const [date, onChangeDate] = useState(new Date());
  
    const [show, setShow] = useState(false);
    const [returnDate, onChangeReturn] = useState(null);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        onChangeDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
        onChangeReturn(fDate);
        
    }


    const showDate = () => {
        setShow(true);
    }
  return (
    <ScrollView>
      <Text style={styles.title}>Return date</Text>
          <View style={styles.action}>
        <TouchableOpacity onPress={() => showDate(1)}>
        <Icon2 name="calendar-o" size={20} />
        </TouchableOpacity>
            <TextInput 
            value={returnDate}
            style={styles.textInput}
            />
            {show && (
                <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
                />
            )}
        </View>
        <Text style={styles.title}>Return place</Text>
          <TextInput 
            multiline
            numberOfLines={7}
            style={styles.box}
            onChangeText={onChangeReason}
            value={reason}
          />
    </ScrollView>

  )
}

export default ReturnForm;

const styles = StyleSheet.create({
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
