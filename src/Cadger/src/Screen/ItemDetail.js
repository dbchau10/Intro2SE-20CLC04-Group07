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

const data = 
  {
    id: 1,
    title: 'Laptop cũ phục vụ học tập',
    status: 1,
    rating: 5.0,
    borrowed: 200,
    desc: 'San pham tuyet voi',
    author: 'Messi',
  };

// const Item = ({ item }) => (
//   <View style={styles.itemBox}>
//     <View style={styles.itemContentBox}>
//       <Image source = {{uri:'https://cdn.pocket-lint.com/r/s/970x/assets/images/149624-laptops-review-hands-on-microsoft-surface-laptop-3-13-5-inch-review-image1-ndijeqz6fw.jpg'}}
//       style = {{ width: '90%', height: '80%', alignSelf: 'center', marginVertical: '8%', borderRadius: 10, resizeMode: 'center'}}
//       />  
//     </View>
//     <View style={styles.itemContentBox}>
//       <Text style={styles.itemTitle}>{item.title}</Text>
//       <View style={styles.itemStatusBox}>
//         <Text style={styles.itemStatusText}>{item.status?'Available':'Unavailable'}</Text>
//       </View>
//       <Text style={styles.itemRating}>{item.rating} <Icon style={styles.eleIcon} name='star' size={16} color='yellow'/></Text>
//       <Text style={styles.itemBorrowed}>{item.borrowed} borrowed</Text>
//     </View>
//   </View>
// );

const ItemDetail =  ({navigation, isLender}) => {
  const [isSelected, setSelection] = React.useState(false);
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerLogo}>Cadger</Text>
            <Text style={styles.headerName}>Item</Text>
        </View>
        <ScrollView style={styles.body}>
          <View style={styles.itemContainer}>
            <Image source = {{uri:'https://cdn.pocket-lint.com/r/s/970x/assets/images/149624-laptops-review-hands-on-microsoft-surface-laptop-3-13-5-inch-review-image1-ndijeqz6fw.jpg'}}
            style = {styles.itemImg}
            />
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Available</Text>
              </View>
              {data.status && <TouchableOpacity
              style={styles.btn}
              onPress={() => Alert.alert("Hello")}
              >
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>}
            </View>
          </View>
          <View style={styles.authorContainer}>

          </View>
          <View style={styles.descContainer}>

          </View>
          <View style={styles.ratingContainer}>

          </View>
        </ScrollView>
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
                {width: 60, height: 60, backgroundColor: green, marginBottom: 60, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: 'white'}]}>
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

export default ItemDetail;

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
  body: {
    height: 0.8*windowHeight,
    backgroundColor: 'lightgray',
  },
  itemContainer: {
    height: 0.45*windowHeight,
    backgroundColor: 'white',
  },
  itemImg: {
    marginVertical: 20,
    height: 0.25*windowHeight,
    width: 0.8*windowWidth,
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    height: 0.07*windowHeight,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  authorContainer: {
    marginVertical: 15,
    height: 0.15*windowHeight,
    backgroundColor: 'white',
  },
  descContainer: {
    minHeight: 0.2*windowHeight,
    backgroundColor: 'white',
  },
  ratingContainer: {
    height: 0.45*windowHeight,
    marginTop: 15,
    backgroundColor: 'white',
  },
  btnContainer: {
    height: 0.08*windowHeight,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 20,
  },
  btn: {
    height: 0.04*windowHeight,
    width: 0.25*windowWidth,
    backgroundColor: green,
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 30,
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
