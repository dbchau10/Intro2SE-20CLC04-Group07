/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
import React, {useContext} from 'react'
import { AuthContext } from '../components/Tabs';
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
    Alert
  } from 'react-native';
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const green = '#98FB98';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Navbar from '../components/Navbar';
  import {parameters} from '../global/style';
  import { ip, port } from '../global/data';
import ItemPreviewCard from '../components/ItemPreviewCard';

const BorrowingLogPreviewCard = ({ item }) => (
  <View style={styles.logItemBox}>
    <View style={styles.logTitle}>
        <Text>#{item.log_id}</Text>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text style={{paddingHorizontal: 5}}>{item.lender}</Text>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.logItem}>
        <Image source={require('../../assets/pictures/laptop.jpg')}
            style = {{ width: '25%', height: windowHeight*0.1, resizeMode: 'center', borderRadius: 20}}
          />
          <View style={styles.logItemDescription}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
            <Text>{item.date}</Text>
        </View>
    </View>
  </View>
);

const LendingLogPreviewCard = ({ item }) => (
  <View style={styles.logItemBox}>
    <View style={styles.logTitle}>
        <Text>#{item.log_id}</Text>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text style={{paddingHorizontal: 5}}>{item.borrower}</Text>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.logItem}>
        <Image source={require('../../assets/pictures/laptop.jpg')}
            style = {{ width: '25%', height: windowHeight*0.1, resizeMode: 'center', borderRadius: 20}}
          />
          <View style={styles.logItemDescription}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
            <Text>{item.date}</Text>
        </View>
    </View>
  </View>
);

const PersonalPage = ({route, navigation}) => {
  // const {username} = route.params;
  const username = useContext(AuthContext);
  const [info, setInfo] = React.useState("");
  const [lendingList, setLendingList] = React.useState("");
  const [borrowingLogs, setBorrowingLogs] = React.useState("");
  const [lendingLogs, setLendingLogs] = React.useState("");
  const loadData = async () => {
    try {
      Promise.all([
        fetch(`http://${ip}:${port}/accounts/info/${username}`, {
        method: 'GET',
        }),
        fetch(`http://${ip}:${port}/items/getByLender/${username}`, {
        method: 'GET',
        }),
        fetch(`http://${ip}:${port}/logs/getByBorrower/${username}`, {
        method: 'GET',
        }),
        fetch(`http://${ip}:${port}/logs/getByLender/${username}`, {
        method: 'GET',
        })
      ]).then(async allResponses => {
        const r1 = allResponses[0];
        const r2 = allResponses[1];
        const r3 = allResponses[2];
        const r4 = allResponses[3];
        const d1 = await r1.json();
        const d2 = await r2.json();
        const d3 = await r3.json();
        const d4 = await r4.json();
        setInfo(d1);
        setLendingList(d2);
        setBorrowingLogs(d3);
        setLendingLogs(d4);
      })
    } catch (err) {
      console.log(err.message);
    }
  }
  if (info == "")
    loadData();
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
          <Text style={styles.text1}>{username}</Text>
          {/* <Text style={styles.text2}>Since 2022</Text> */}
          </View>
      </View>
      </View>

      <View style={styles.info}>
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={styles.textHeading}>Personal Info</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <Icon2 name='account-edit' size={20} color='lightgrey'/>
        </TouchableOpacity>
        </View>
        <View style={styles.fieldFirst}>
            <View style={{flexDirection:'row'}}>
            <Text>Name / </Text>
            <Text>{info.name}</Text>
            </View>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>Gender / </Text>
            <Text>{info.gender?(info.gender=="M"?"Male":"Female"):null}</Text>
            </View>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>DOB / </Text>
            <Text>{info.dob}</Text>
            </View>
        </View>
        <View style={styles.field}>
            <View style={{flexDirection:'row'}}>
            <Text>Email / </Text>
            <Text>{info.email}</Text>
            </View>
        </View>
        <View style={styles.fieldLast}>
        <View style={{flexDirection:'row'}}>
            <Text>Tel / </Text>
            <Text>{info.phone}</Text>
            </View>
        </View>
      </View>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={styles.textHeading}>Lending List</Text>
        <TouchableOpacity>
        <Text style={{fontStyle: 'italic', padding: 10}}>View All</Text>
        </TouchableOpacity>
        </View>

        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={lendingList}
            keyExtractor={item => item.id}
            renderItem={ItemPreviewCard}
          />
           <TouchableOpacity
          style={styles.btn} onpress={() => console.log(username)}>
          <Text style={styles.btnText}>CREATE A NEW POST</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.info}>
            <Text style={styles.textHeading}>Logs</Text>
        <View>
        <View style={styles.logHeading}>
            <Text>Borrowing Logs</Text>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={borrowingLogs}
            keyExtractor={item => item.id}
            renderItem={BorrowingLogPreviewCard}
          />
        <View style={styles.logHeading}>
            <Text>Lending Logs</Text>
            <TouchableOpacity>
            <Icon name='keyboard-arrow-right' size={16} color='lightgrey'/>
            </TouchableOpacity>
        </View>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={lendingLogs}
            keyExtractor={item => item.id}
            renderItem={LendingLogPreviewCard}
          />
        </View>
        </View>
        <View style={{padding: 20}}>
        <TouchableOpacity
          style={styles.btnLogOut}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
        </View>
       
    </ScrollView>
    </SafeAreaView>
  )
}

export default PersonalPage;

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
        height: 150
      },
      welcome: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '100%'
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
      text1: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold'
      },
      text2: {
        color: "white",
       
      },

      info: {
        padding: 20,
        flexDirection: 'column'
      },
      fieldFirst: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      field: {
        borderWidth: 1,
        borderBottomWidth: 0,
        padding: 10,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      fieldLast: {
       borderBottomLeftRadius: 10,
       borderBottomRightRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      textHeading: {
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: 'black'
      },
      btn: {
        marginVertical: 12,
        width: '100%',
        height: windowHeight*0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        borderRadius: 10
        
      },
      btnText: {
        fontWeight: 'bold'
      },
      btnLogOut: {
            width: '100%',
            height: windowHeight*0.05,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#98FB98',
            borderRadius: 10
      },
      logHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EBEBEB',
        padding: 10,
      },
      logItem: {
        flexDirection: 'row',
        padding: 10
      },
      logItemDescription: {
        flexDirection: 'column',
        padding: 10
      },
      logTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
      },
      logItemBox: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginVertical: 10

      }
})