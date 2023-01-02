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
import { parameters } from '../global/style';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';


const PostItem = () => {
  const [name, onChangeName] = React.useState(null);
  const [desc, onChangeDesc] = React.useState(null);
  const [img, onChangeImg] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>Name</Text>
          <TextInput 
            style={styles.box}
            onChangeText={onChangeName}
            value={name}
          />
          <Text style={styles.title}>Description</Text>
          <TextInput
            multiline
            numberOfLines={10} 
            style={styles.box}
            onChangeText={onChangeDesc}
            value={desc}
          />
          <Text style={styles.title}>Image URL</Text>
          <TouchableOpacity style={[styles.btn,{backgroundColor:'lightgrey'}]}>
            <Text style={{fontSize: 16}}>Choose Image</Text>
          </TouchableOpacity>
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

export default PostItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: parameters.statusBarHeight,
    marginBottom: 50,
    justifyContent: 'center',
  },
  body: {
    height: 0.8*windowHeight,
    alignSelf: 'center',
    paddingTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  box: {
    minHeight: 30,
    width: 0.8*windowWidth,
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'black',
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
    marginTop: 25,
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
})
