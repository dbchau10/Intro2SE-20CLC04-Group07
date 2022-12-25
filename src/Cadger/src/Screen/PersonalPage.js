/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
import React from 'react'

import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
    Alert
  } from 'react-native';
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const green = '#98FB98';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Navbar from '../components/Navbar';
  import {parameters} from '../global/style';
  import { ItemData } from '../global/data';
import ItemPreviewCard from '../components/ItemPreviewCard';
const PersonalPage = ({navigation}) => {
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
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={styles.textHeading}>Personal Info</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <Icon2 name='account-edit' size={20} color='lightgrey'/>
        </TouchableOpacity>
        </View>
        <View style={styles.fieldFirst}>
            <View style={{flexDirection:'row'}}>
            <Text>Name / </Text>
            <Text>Chau Dang</Text>
            </View>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>Gender / </Text>
            <Text>Female</Text>
            </View>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>DOB / </Text>
            <Text>14/10/2002</Text>
            </View>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>Email / </Text>
            <Text>dbchau10@gmail.com</Text>
            </View>
        </View>
        <View style={styles.fieldLast}>
        <View style={{flexDirection:'row'}}>
            <Text>Tel / </Text>
            <Text>+84919236800</Text>
            </View>
        </View>
      </View>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={styles.textHeading}>Lending List</Text>
        <TouchableOpacity>
        <Text style={{fontStyle: 'italic', padding: 10}}>View All</Text>
        </TouchableOpacity>
        </View>

        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={ItemData}
            keyExtractor={item => item.id}
            renderItem={ItemPreviewCard}
          />
           <TouchableOpacity
          style={styles.btn}>
          <Text style={styles.btnText}>CREATE A NEW POST</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.info}>
            <Text style={styles.textHeading}>Logs</Text>
        <View>
        <View style={styles.logHeading}>
            <Text>Borrowing Logs</Text>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <View style={styles.logItemBox}>
            <View style={styles.logTitle}>
                <Text>No.71</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <Text style={{paddingHorizontal: 5}}>alexxia</Text>
                    <TouchableOpacity>
                    <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.logItem}>
                <Image source={require('../../assets/pictures/laptop.jpg')}
                    style = {{ width: '25%', height: windowHeight*0.1, resizeMode: 'center', borderRadius: 20}}
                 />
                 <View style={styles.logItemDescription}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Laptop cũ phục vụ học tập</Text>
                    <Text>25/12/2022</Text>
                </View>
            </View>
        </View>

        <View style={styles.logHeading}>
            <Text>Lending Logs</Text>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <View style={styles.logItemBox}>
            <View style={styles.logTitle}>
                <Text>No.25</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <Text style={{paddingHorizontal: 5}}>alexxia</Text>
                    <TouchableOpacity>
                    <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.logItem}>
                <Image source={require('../../assets/pictures/camera.jpg')}
                    style = {{ width: '25%', height: windowHeight*0.1, resizeMode: 'center', borderRadius: 20}}
                 />
                 <View style={styles.logItemDescription}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Camera chụp cực nét</Text>
                    <Text>25/12/2022</Text>
                </View>
            </View>
        </View>

        </View>
        </View>
        <View style={{padding: 20}}>
        <TouchableOpacity
          style={styles.btnLogOut}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
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
        marginBottom: 50
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
        padding: 20,
        flexDirection: 'column'
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
      btn: {
        marginVertical: 12,
        width: '100%',
        height: windowHeight*0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        borderRadius: 10
        
      },
      btnText: {
        fontWeight: 'bold'
      },
      btnLogOut: {
            width: '100%',
            height: windowHeight*0.05,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#98FB98',
            borderRadius: 10
      },
      logHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EBEBEB',
        padding: 10,
      },
      logItem: {
        flexDirection: 'row',
        padding: 10
      },
      logItemDescription: {
        flexDirection: 'column',
        padding: 10
      },
      logTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
      },
      logItemBox: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginVertical: 10

      }
})