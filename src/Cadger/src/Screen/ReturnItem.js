import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const ReturnItem: () => Node = () => {
  const [name, onChangeName] = React.useState(null);
  const [desc, onChangeDesc] = React.useState(null);
  const [img, onChangeImg] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerLogo}>Cadger</Text>
            <Text style={styles.headerName}>Return item</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Name</Text>
          <TextInput 
            style={styles.box}
            onChangeText={onChangeName}
            value={name}
          />
          <Text style={styles.title}>Description</Text>
          <TextInput 
            style={[styles.box, {height: 200,}]}
            onChangeText={onChangeDesc}
            value={desc}
          />
          <Text style={styles.title}>Image URL</Text>
          <TextInput 
            style={styles.box}
            onChangeText={onChangeImg}
            value={img}
          />
          <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Hello")}
          >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.navbar}>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='home-outline' size={35} color='black' />
                <Text style={styles.eleText}>Home</Text>
            </View>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='mail-outline' size={35} color='black' />
                <Text style={styles.eleText}>Request</Text>
            </View>
            <View style={styles.eleBox}>
                <View style={[styles.eleIcon,
                {width: 60, height: 60, backgroundColor: '#98FB98', marginBottom: 60, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'white'}]}>
                  <Icon2 styles={styles.eleText} name='plus' size={35} color='white' />
                </View>
            </View>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='notifications-outline' size={35} color='black' />
                <Text style={styles.eleText}>Notification</Text>
            </View>
            <View style={styles.eleBox}>
                <Icon style={styles.eleIcon} name='person-outline' size={35} color='black' />
                <Text style={styles.eleText}>Account</Text>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default ReturnItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  header: {
    height: 0.1*windowHeight,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  headerLogo: {
    flex: 1,
    textAlign: 'left',
    alignSelf: 'center',
    paddingLeft: 20,
    fontSize: 40,
    color: '#98FB98',
    fontWeight: 'bold',
    fontFamily: 'Changa One',
  },
  headerName: {
    flex: 1,
    textAlign: 'right',
    alignSelf: 'center',
    paddingRight: 30,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Changa One',
  },
  body: {
    height: 0.8*windowHeight,
    alignSelf: 'center',
    paddingTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  box: {
    height: 35,
    width: 0.8*windowWidth,
    borderWidth: 1,
    color: 'black',
    marginVertical: 10,
  },
  btn: {
    width: 250,
    height: 50,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 50,
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  navbar: {
    height: 0.1*windowHeight,
    width: windowWidth,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,
    elevation: 2,
    flexDirection: 'row',
  },
  eleBox: {
    width: 0.2*windowWidth,
    height: '100%',
    justifyContent: 'center',
  },
  eleIcon: {
    alignSelf: 'center',
  },
  eleText: {
    textAlign: 'center',
    color: 'black',
  },
})
