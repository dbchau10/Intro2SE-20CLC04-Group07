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
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
const EditProfile = ({navigation}) => {
    const bs = React.createRef();
    const fall = new Animated.Value(1);

    const renderInner = () => (
        <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
    )

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>

    )
    const [name, onChangeName] = useState("Chau Dang");
    const [date, onChangeDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dob, onChangeDOB] = useState('14/10/2002')
    const [email, onChangEmail] = useState('dbchau10@gmail.com')
    const [phone, onChangePhone] = useState('+84919236800')

    const [gender,onChangeGender] = useState('female')
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
         <BottomSheet
        ref={bs}
        snapPoints={[330,0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        borderRadius={10}
       // enabledContentTapInteraction={true} 
        callbackNode={fall}
        enabledGestureInteraction={true}
        />
      <Animated.ScrollView style={{margin: 20, marginBottom: 50, 
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>bs.current.snapTo(0)}>
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
            <View style={styles.wrapper}>
                {['female','male'].map(select =>
                <View key={select} style={styles.gender}>
                    
                <TouchableOpacity style={styles.outer}
                onPress={() => onChangeGender(select)}>
                {gender === select &&  <View style={styles.inner} /> }
               
               </TouchableOpacity>
               <Text style={{textTransform: 'capitalize', paddingLeft: 10, color: '#666666'}}>{select}</Text>
               </View>
                    )}
            </View>
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
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
      
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#666666'
    },
    outer: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray'

    },
    inner: {
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 15
    },
    wrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
        
    },
    gender: {
        marginRight:10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
      panelTitle: {
        fontSize: 20,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        width: 250,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        marginVertical: 5,
      },
      panelButtonTitle: {
        fontSize: 16,
        color: 'white',
      },
})