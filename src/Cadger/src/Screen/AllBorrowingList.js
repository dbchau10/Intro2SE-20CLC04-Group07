

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { parameters } from '../global/style';
import { ItemData } from '../global/data';
import ItemCard from '../components/ItemCard';
const AllBorrowingList = ({navigation}) => {
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
                style={{width: '90%', height: '30%'}}
                source={imagePath}
                /
                >
               
                <View style={{height: '70%'}}>
                  <Text style={styles.itemTitle}>{title}</Text>
                  <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                  <Text style={styles.itemRating}>{rating} <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/></Text>
                  <Text style={styles.itemBorrowed}>{borrowed} borrowed</Text>
                  </View>
                  <View style={status ? [styles.itemStatusBox,{backgroundColor: '#98FB98'}] : [styles.itemStatusBox,{backgroundColor: '#EBEBEB'}]}>
                  <Text style={styles.itemStatusText}>{status?'Available':'Unavailable'}</Text>
                  </View>
                   </View>
                   <View style={{flexDirection: 'row', height: '50%', padding: 10}}>
                   <View>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <View style={{backgroundColor: '#EBEBEB',width:10,height:10,borderRadius: 10}}></View>
                            <Text style={{marginLeft: 5}}>01/12/2023</Text>
                        </View>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <View style={{height: 100, width: 1, backgroundColor: '#EBEBEB',margin:5}}></View>
                        <View style={{height: '100%', width: '85%', backgroundColor: '#EBEBEB', marginLeft: 10, alignItems: 'center',justifyContent: 'center'}}>
                            <Text>Borrowing</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <View style={{backgroundColor: '#EBEBEB',width:10,height:10,borderRadius: 10}}></View>
                        <Text style={{marginLeft: 5}}>01/12/2023</Text>
                        </View>
                    </View> 
                                
                    </View>
                    <View style={{flexDirection: 'row',justifyContent:'center'}}>
            <TouchableOpacity style={[styles.btn,{  backgroundColor: '#98FB98'}]}>
                <Text style={{fontWeight:'bold'}}>Return</Text>
            </TouchableOpacity>
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

export default AllBorrowingList;

const styles = StyleSheet.create({
    btn: {
      
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        
        
      },
  container: {
    flex: 1,
    marginBottom: 50,
    paddingTop: parameters.statusBarHeight,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  itemBox: {
    height: 0.7*windowHeight,
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
    padding: 20,
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
