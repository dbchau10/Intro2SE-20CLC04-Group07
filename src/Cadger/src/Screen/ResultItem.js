

import React, {useRef, useState} from 'react';
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
import CheckBox from '@react-native-community/checkbox';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { parameters } from '../global/style';
import { ItemData } from '../global/data';
import ItemCard from '../components/ItemCard';
const ResultItem = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const [oldData, setOldData] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.search}>
        <TouchableOpacity style={{padding: 5}}>
            <Text><Icon name='search' size={18} color='black'/></Text>
      </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Laptop?"
            value={search}
            onChangeText={txt => setSearch(txt)}
          />
          {search == '' ? null : (
            <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => {
                searchRef.current.clear();
                setSearch('')
            }}>
                 <Text><Icon2 name='close' size={18} color='black'/></Text>
            </TouchableOpacity>
          )}
          
      </View>
      <TouchableOpacity style={{padding: 5}}>
            <Text><Icon name='sliders' size={18} color='black'/></Text>
      </TouchableOpacity>
      </View>
      <View style={{paddingTop: 100}}>
      <FlatList
            data={ItemData}
            keyExtractor={item => item.id}
            renderItem={ItemCard}
          />
          </View>
    </SafeAreaView>
  )
}

export default ResultItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    paddingTop: parameters.statusBarHeight,
    backgroundColor: '#fff'
  },
  header: {
   flexDirection: 'row',
   padding: 20,
   alignItems: 'center',
   justifyContent: 'space-between',
   width: windowWidth,
   position: 'absolute',
   top: 0,
   left: 0,
   zIndex: 10,
   backgroundColor: '#fff'

  },
  input: {
    width: 0.6*windowWidth,
    height: 30,
    paddingVertical: 5,
    fontSize: 15
  },
  search: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: 0.8*windowWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: 50,
    alignItems: 'center'
  },
})
