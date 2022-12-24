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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 1,
    title: 'Laptop cũ phục vụ học tập',
    status: 1,
    rating: 5.0,
    borrowed: 200,
  },
  {
    id: 2,
    title: 'Second Item',
    status: 1,
    rating: 5.0,
    borrowed: 200,
  },
  {
    id: 3,
    title: 'Third Item',
    status: 1,
    rating: 5.0,
    borrowed: 200,
  },
  {
    id: 4,
    title: 'Fourth Item',
    status: 1,
    rating: 5.0,
    borrowed: 200,
  },
  {
    id: 5,
    title: 'Fifth Item',
    status: 1,
    rating: 5.0,
    borrowed: 200,
  },
  {
    id: 6,
    title: 'Sixth Item',
    status: 1,
    rating: 5.0,
    borrowed: 200,
  },
];

const Item = ({ item }) => (
  <View style={styles.itemBox}>
    <View style={styles.itemContentBox}>
      <Image source = {{uri:'https://cdn.pocket-lint.com/r/s/970x/assets/images/149624-laptops-review-hands-on-microsoft-surface-laptop-3-13-5-inch-review-image1-ndijeqz6fw.jpg'}}
      style = {{ width: '90%', height: '80%', alignSelf: 'center', marginVertical: '8%', borderRadius: 10, resizeMode: 'center'}}
      />  
    </View>
    <View style={styles.itemContentBox}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.itemStatusBox}>
        <Text style={styles.itemStatusText}>{item.status?'Available':'Unavailable'}</Text>
      </View>
      <Text style={styles.itemRating}>{item.rating} <Icon style={styles.eleIcon} name='star' size={16} color='yellow'/></Text>
      <Text style={styles.itemBorrowed}>{item.borrowed} borrowed</Text>
    </View>
  </View>
);

const Result: () => Node = () => {
  const [isSelected, setSelection] = React.useState(false);
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerLogo}>Cadger</Text>
            <Text style={styles.headerName}>Result</Text>
        </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
                <Text style={styles.searchContent}>Laptop</Text>
                <View style={styles.searchIcon}>
                    <Icon name='search' size={16} color='black' />
                </View>
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
        <SafeAreaView style={styles.productContainer}>
          <Text style={styles.productTitle}>Products</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("Hello")}
            >
            <Text style={styles.btnText}>Previous</Text>
            </TouchableOpacity>
            <Text style={styles.pageText}>1/10</Text>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("Hello")}
            >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
          </View>
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
        </SafeAreaView>
    </SafeAreaView>
  )
}

export default Result;

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
    height: 0.12*windowHeight,
  },
  searchBox: {
    alignSelf: 'center',
    width: 0.7*windowWidth,
    height: 30,
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
