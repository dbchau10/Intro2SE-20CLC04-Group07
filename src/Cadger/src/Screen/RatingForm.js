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
const RatingForm = ({route, navigation}) => {
  const [reason, onChangeReason] = React.useState(null);
  const [defaultRating, setDefaultRating]=React.useState(2);
  const [maxRating, setMaxRating]=React.useState([1,2,3,4,5]);

  return (
    <ScrollView>
        <Text style={styles.title}>Rating</Text>
        <View style={{flexDirection: 'row',paddingVertical: 10, paddingRight: 10, alignItems: 'center'}}>
               { maxRating.map((item,key) => {
                return (
                    <TouchableOpacity
                    key={item}
                    onPress={()=>setDefaultRating(item)}
                    >
                        <Icon name='star' size={25} color={item <= defaultRating ? '#F1CF1C' : '#EBEBEB'}/>
                    </TouchableOpacity>
                )
               }
               )}
               <Text style={{paddingHorizontal: 10}}>{defaultRating}/5</Text>
            </View>
        <Text style={styles.title}>Comment</Text>
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

export default RatingForm;

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
