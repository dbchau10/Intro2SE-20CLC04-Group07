/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
import React, {useEffect, useContext} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../components/Navbar';
import {parameters} from '../global/style';
import { ip, port } from '../global/data';
import ItemCard from '../components/ItemCard';
import { AuthContext } from '../components/Tabs';
const Homepage = ({route, navigation}) => {
  const username = useContext(AuthContext);
  const [keyword, setKeyword] = React.useState("");
  const [items, setItems] = React.useState("");
  const loadItem = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/items/getTopProduct`, {
      method: 'GET',
      });
      const d = await r.json();
      setItems(d);
    } catch (err) {
      console.log(err.message);
    }
  }
  if (items == "") {
    loadItem();
  }
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
      }, [])
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
              <Text style={styles.text1}>Welcome</Text>
              <Text style={styles.text2}>Alice</Text>
              </View>
          </View>
          <View style={styles.searchArea}>
          <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={setKeyword}
            value={keyword}
          />
          <TouchableOpacity style={{padding: 5}} onPress={()=> navigation.navigate('ResultItem', {keyword: keyword})}>
            <Text><Icon name='search' size={14} color='black'/></Text>
      </TouchableOpacity>
      </View>
          </View>
          <View style={styles.view1}>
            <Image
                style={styles.image1}
                source={require('../../assets/pictures/background.png')}
              />
            </View>
          </View>
        

           <View>
            <View style={styles.textHeadingBox}>
            <Text style={styles.textHeading}>Top Products</Text>
            <Text>View All</Text>
            </View>
          <FlatList
            data={items}
            keyExtractor={item => item.item_id}
            renderItem={({ item }) =>
            <TouchableOpacity  onPress={() => navigation.navigate("Item", {item_id: item.item_id})} >
             <ItemCard item={item} />
             </TouchableOpacity>
             }
          />
        </View>
        </ScrollView>
        <StatusBar style="light" backgroundColor="#98FB98" translucent={true} />
    </SafeAreaView>
  );
};
export default Homepage;

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
    height: parameters.headerHeight
  },
  welcome: {
    padding: 20,
    flexDirection: 'row'
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
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  text1: {
    color: "white"
  },
  text2: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  },

  image1: {
    height: 200,
    width: 200,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 0
  },

  view1: {
    flex: 1
  },
  input: {
    width: 200,
    height: 30,
    paddingVertical: 5,
    fontSize: 10
  },
  search: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 20,
    borderWidth: 1,
    width: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  searchArea: {
    alignItems: 'center',
    zIndex: 1
  }
  
})
