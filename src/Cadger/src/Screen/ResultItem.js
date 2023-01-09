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
import CheckBox from '@react-native-community/checkbox';
import ItemCard from '../components/ItemCard';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';
import { ip, port } from '../global/data';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const getItemInPage = (items, page) => {
  return items.slice(5*(page-1), page*5);
}
const ResultItem = ({route, navigation}) => {
  const {keyword} = route.params;
  const ratingFilter = 0;
  const [isSelected, setSelection] = React.useState(false);
  const [items, setItems] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [key, setKey] = React.useState(keyword);

  const loadItem = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/items/search?keyword=${key}&ratingFilter=${ratingFilter}&unavailable=${isSelected?0:1}`, {
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
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
                <TextInput
                style={styles.searchContent}
                onChangeText={setKey}
                value={key}
                />
                <TouchableOpacity style={styles.searchIcon} onPress={loadItem}>
                    <Icon name='search' size={16} color='black' />
                </TouchableOpacity>
            </View>
            <View style={styles.filterBox}>
                <Text style={styles.filterHeader}>Filter:</Text>
                <CheckBox
                value={isSelected}
                onValueChange={loadItem, setSelection}
                />
                <Text style={styles.filterContent}>Unavailable</Text>
            </View>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.productTitle}>Products</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (page > 1)
                setPage(page-1)
            }}
            >
            <Text style={styles.btnText}>Previous</Text>
            </TouchableOpacity>
            <Text style={styles.pageText}>{page}/{parseInt(items.length/5)+1}</Text>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (page < items.length/5)
                setPage(page+1)
            }}
            >
            <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={getItemInPage(items, page)}
            keyExtractor={item => item.item_id}
            renderItem={({ item }) =>
            <TouchableOpacity  onPress={() => navigation.navigate("Item", {item_id: item.item_id})} >
             <ItemCard item={item} />
             </TouchableOpacity>
             }
          />
        </View>
    </SafeAreaView>
  )
}

export default ResultItem;

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
    color: green,
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
  searchContainer: {
    height: 0.14*windowHeight,
  },
  searchBox: {
    alignSelf: 'center',
    width: 0.7*windowWidth,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 30,
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
  },
  searchContent: {
    flex: 1,
    textAlign: 'left',
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  searchIcon: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
    paddingRight: 10,
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
  productContainer: {
    height: 0.68*windowHeight,
    marginBottom: 0.12*windowHeight,
  },
  productTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 20,
    paddingTop: 5,
  },
  btnContainer: {
    height: 0.08*windowHeight,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 20,
  },
  btn: {
    height: 0.035*windowHeight,
    width: 0.2*windowWidth,
    backgroundColor: green,
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  pageText: {
    color: 'black',
    paddingTop: 5,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
})
