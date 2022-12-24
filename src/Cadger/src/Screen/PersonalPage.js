/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
import React from 'react'

import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
    LogBox
  } from 'react-native';
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const green = '#98FB98';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Navbar from '../components/Navbar';
  import {parameters} from '../global/style';
  import { ItemData } from '../global/data';
const PersonalPage = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView 
    bounces={false}>
    <View style={styles.header}>
      <View style={styles.welcome}>
      <Image
            style={styles.avatar}
            source={require('../../assets/pictures/avatar.jpg')}
          />
          <View style={styles.welcomeText}>
          <Text style={styles.text1}>alsophanie</Text>
          <Text style={styles.text2}>Since 2022</Text>
          </View>
      </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.textHeading}>Personal Info</Text>
        <View style={styles.fieldFirst}>
            <View style={{flexDirection:'row'}}>
            <Text>Name / </Text>
            <Text>Chau Dang</Text>
            </View>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>Gender / </Text>
            <Text>Female</Text>
            </View>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>DOB / </Text>
            <Text>14/10/2002</Text>
            </View>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>Email / </Text>
            <Text>dbchau10@gmail.com</Text>
            </View>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <View style={styles.fieldLast}>
        <View style={{flexDirection:'row'}}>
            <Text>Tel / </Text>
            <Text>+84919236800</Text>
            </View>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.textHeading}>Logs</Text>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default PersonalPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingBottom: 30,
        paddingTop: parameters.statusBarHeight,
      },
      header: {
        backgroundColor: "#98FB98",
        height: 150
      },
      welcome: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '100%'
      },
      welcomeText: {
       
        justifyContent: 'center',
        flexDirection: 'column',
      },
      avatar: {
        marginHorizontal: 10,
        width: 50,
        height: 50,
        borderRadius: 50
      },
      textHeadingBox: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      text1: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold'
      },
      text2: {
        color: "white",
       
      },

      info: {
        padding: 20
      },
      fieldFirst: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      field: {
        borderWidth: 1,
        borderBottomWidth: 0,
        padding: 10,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      fieldLast: {
       borderBottomLeftRadius: 10,
       borderBottomRightRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      textHeading: {
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: 'black'
      },
})