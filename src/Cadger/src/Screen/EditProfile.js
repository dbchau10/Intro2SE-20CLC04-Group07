/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Dimensions, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView} from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {parameters} from '../global/style';

const EditProfile = ({navigation}) => {
    const [name, onChangeName] = useState("Chau Dang");
    const [date, onChangeDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dob, onChangeDOB] = useState('14/10/2002')
    const [email, onChangEmail] = useState('dbchau10@gmail.com')
    const [phone, onChangePhone] = useState('+84919236800')

    const [male,onChangeMale] = useState(false)
    const [female,onChangeFemale] = useState(true)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        onChangeDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
        onChangeDOB(fDate);
        
    }
    const showDate = () => {
        setShow(true);
    }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>{}}>
                <View style={{
                    height: 100,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ImageBackground source={
                        require('../../assets/pictures/avatar.jpg')
                    }
                    style={{
                        height: 100,
                        width: 100,
                    }
                    }
                    imageStyle={{borderRadius: 100}}
                   >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon2 name="camera" size={35} color="#fff" 
                        style={{
                            opacity: 0.7,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 100
                        }} />
                    </View>
                   </ImageBackground>
                </View>
            </TouchableOpacity>

            <Text style={{marginTop: 10,fontSize: 18, fontWeight: 'bold'}}>alsophanie</Text>
        </View>

        <View style={styles.action}>
            <Icon3 name="user-o" size={20} />
            <TextInput 
            placeholder="Name"
            onChangeText={onChangeName}
            value={name}
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <View style={styles.action}>
            <TextInput 
            placeholder="Gender"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <View style={styles.action}>
        <TouchableOpacity onPress={() => showDate()}>
        <Icon3 name="calendar-o" size={20} />
        </TouchableOpacity>
            <TextInput 
            value={dob}
            placeholder="DOB"
            placeholderTextColor="#666666"
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
        <View style={styles.action}>
            
        <Icon3 name="envelope-o" size={20} />
            <TextInput 
            placeholder="Email"
            onChangeText={onChangEmail}
            keyboardType="email-address"
            value={email}
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <View style={styles.action}>
        <Icon3 name="phone" size={20} />
            <TextInput 
            placeholder="Tel"
            value={phone}
            onChangeText={onChangePhone}
            keyboardType="number-pad"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={()=> navigation.navigate('PersonalPage')}>
            <Text style={{color:'white',fontWeight:'bold'}}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        paddingBottom: 30,
        paddingTop: parameters.statusBarHeight,
    },
    commandButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#98FB98',
        alignItems: 'center',
        marginTop: 10
    },
    action: {
        flexDirection: 'row',
        marginVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10
    }
})