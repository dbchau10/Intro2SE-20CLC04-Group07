

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
const ResultItem = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const [oldData, setOldData] = useState([]);
  const [isSelected, setSelection] = React.useState(false);
  onChange = (nativeEvent) => {

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'column'}}>
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
      <View style={styles.filterBox}>
                <Text style={styles.filterHeader}>Filter:</Text>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                />
                <Text style={styles.filterContent}>Unavailable</Text>
            </View>
      </View>
      <View style={{paddingVertical: 20}}>
      {/* <FlatList
            data={ItemData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
            <TouchableOpacity  onPress={() => navigation.navigate("Item")} >
             <ItemCard item={item} />
             </TouchableOpacity>
             }
          /> */}
          <ScrollView
        onScroll = {({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
            {ItemData.map( ({id, imagePath, title, status, rating, borrowed}) => 
            (<TouchableOpacity onPress={()=>navigation.navigate('Item')} style={{width:windowWidth}}>
                <View style={styles.itemBox}>
                  <Image
                key={id}
                resizeMode='cover'
                style={{width: '90%', height: '50%'}}
                source={imagePath}
                >
                </Image>
                <View>
                  <Text style={styles.itemTitle}>{title}</Text>
                  <View style={{flexDirection: 'row',paddingVertical: 10,justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                  <Text style={styles.itemRating}>{rating} <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/></Text>
                  <Text style={styles.itemBorrowed}>{borrowed} borrowed</Text>
                  </View>
                  <View style={status ? [styles.itemStatusBox,{backgroundColor: '#98FB98'}] : [styles.itemStatusBox,{backgroundColor: '#EBEBEB'}]}>
                  <Text style={styles.itemStatusText}>{status?'Available':'Unavailable'}</Text>
                  </View>
                   </View>
                </View>
                </View>
                </TouchableOpacity>
                )
            )}
        </ScrollView>
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
    backgroundColor: '#fff',
    alignItems: 'space-between'
  },
  filterBox: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  filterHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  filterContent: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
  },
  header: {
   flexDirection: 'row',
   paddingHorizontal: 20,
   alignItems: 'center',
   justifyContent: 'space-between',
   width: windowWidth,
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
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: 0.8*windowWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: 50,
    alignItems: 'center'
  },
  itemBox: {
    height: 0.5*windowHeight,
    width: 0.85*windowWidth,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 7,
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1.0,
    shadowRadius: 1.0,
    elevation: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: 'black'
  },
  itemStatusBox: {
    height: 25,
    width: 100,
    padding: 2,
    borderRadius: 10, 
  },
  itemStatusText: {
    textAlign: 'center',
    color: 'black',
  },
  itemRating: {
    textAlign: 'right',
    paddingRight: 5,
  },
  itemBorrowed: {
    textAlign: 'right',
    paddingRight: 5,
  },
}
)
