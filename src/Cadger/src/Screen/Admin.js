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
const green = '#98FB98';
import { ip, port } from '../global/data';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
let load = true;
const Admin = ({navigation}) => {
  const [report, setReport] = React.useState("");
  React.useEffect(() => {
      const focusHandler = navigation.addListener('focus', () => {
          load = true;
          loadReport();
      });
      return focusHandler;
  }, [navigation]);
  const Item = ({ item }) => (
    <TouchableOpacity style={styles.itemBox} onPress={() => {
      console.log("Switch to suspend account");
      navigation.navigate('SuspendAccount', {report_id: item.report_id})
    }}>
      <View style={styles.itemContentBox}>
        <Image source = {`${item.avatar}`}
        /* <Image source = {{uri:`${item.avatar}`}} */
        style = {styles.itemImg}
        />  
        <Text style={styles.itemReported}>{item.reported}</Text>
      </View>
      <View style={styles.itemContentBox}>
        <Text style={styles.itemTitle}>Report by:</Text>
        <Text style={styles.itemSender}>{item.sender}</Text>
      </View>
    </TouchableOpacity>
  );
  const loadReport = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/reports`, {
      method: 'GET',
      });
      const d = await r.json();
      setReport(d);
      load = false;
    } catch (err) {
      console.log(err.message);
    }
  }
  if (load) {
    loadReport();
  }
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerName}>Admin</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>List of reported accounts</Text>
          <FlatList
          data={report}
          renderItem={renderItem}
          keyExtractor={item => item.report_id}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnBox} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.btnText}>Log out</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Admin;

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
  headerName: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Changa One',
  },
  body: {
    height: 0.75*windowHeight,
    alignSelf: 'center',
    paddingTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  itemBox: {
    height: 0.15*windowHeight,
    width: 0.75*windowWidth,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
    marginVertical: 7,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1.0,
    shadowRadius: 1.0,
    elevation: 3,
  },
  itemContentBox: {
    width: '50%',
    paddingHorizontal: 5,
    flexDirection: 'column'
  },
  itemImg: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    marginVertical: '6%',
    borderRadius: 70,
    resizeMode: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  itemReported: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 30,
    color: 'black',
    height: 50,
  },
  itemSender: {
    paddingTop: 10,
  },
  btnContainer: {
    height: 0.15*windowHeight,
  },
  btnBox: {
    marginVertical: 30,
    height: 0.07*windowHeight,
    width: 0.6*windowWidth,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  btnText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
})
