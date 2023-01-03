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

const SuspendAccount = ({route, navigation}) => {
  const {report_id} = route.params;
  const [report, setReport] = React.useState("");
  const [reporter, setReporter] = React.useState("");
  const [reported, setReported] = React.useState("");
  const loadReport = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/reports/${report_id}`, {
      method: 'GET',
      });
      const d = await r.json();
      setReport(d);
    } catch (err) {
      console.log(err.message);
    }
  }
  const loadReporter = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/accounts/reportinfo/${report.sender}`, {
      method: 'GET',
      });
      const d = await r.json();
      setReporter(d);
    } catch (err) {
      console.log(err.message);
    }
  }
  const loadReported = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/accounts/reportinfo/${report.reported}`, {
      method: 'GET',
      });
      const d = await r.json();
      setReported(d);
    } catch (err) {
      console.log(err.message);
    }
  }
  if (report == "")
    loadReport();
  if (reporter == "")
    loadReporter();
  if (reported == "")
    loadReported();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerLogo}>Cadger</Text>
            <Text style={styles.headerName}>Suspend Account</Text>
        </View>
        <TouchableOpacity style={styles.backContainer} onPress={() => navigation.navigate("Admin")}>
            <Icon style={styles.backIcon} name='arrow-back' size={35} color='black'/>
            <Text style={styles.backText}>Go back</Text>
          </TouchableOpacity>
        <View style={styles.reporterContainer}>
          <View style={styles.reporterInfo}>
            <Image source = {{uri:'https://media.discordapp.net/attachments/910154517046255656/1055499894166667304/image.png'}}
            style = {styles.reporterImg}
            />  
            <View style={styles.reporterContent}>
              <Text style={styles.reporterTitle}>Report by:</Text>
              <Text style={styles.reporterName}>{report.sender}</Text>
            </View>
          </View>
          <View style={styles.reporterBox}>
            <Text style={styles.reporterText}>{report.reason}</Text>
          </View>
        </View>
        <View style={styles.reportedContainer}>
          <Text style={styles.reportedTitle}>Reported Account:</Text>
          <View style={styles.reportedBox}>
            <View style={styles.reportedInfo}>
              <Image source = {{uri:'https://media.discordapp.net/attachments/910154517046255656/1055499894166667304/image.png'}}
              style = {styles.reportedImg}
              />  
              <View style={styles.reportedContent}>
                <Text style={styles.reportedTitle}>Username:</Text>
                <Text style={styles.reportedName}>{reported.username}</Text>
              </View>
            </View>
            <View style={styles.reportedDetail}>
              <Text style={styles.reportedTitle}>Email:</Text>
              <Text style={styles.reportedText}>{reported.email}</Text>
            </View>
            <View style={styles.reportedDetail}>
              <Text style={styles.reportedTitle}>Phone:</Text>
              <Text style={styles.reportedText}>{reported.phone}</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnBox} onPress={() => console.log("logout")}>
                <Text style={styles.btnText}>Suspend this account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => console.log("delete")}>
                <Text style={styles.btn2Text}>Delete this report</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default SuspendAccount;

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
    color: '#98FB98',
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
  backContainer: {
    paddingTop: 10,
    width: 0.32*windowWidth,
    height: 0.08*windowHeight,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  backText: {
    paddingTop: 4,
    color: 'black',
    fontSize: 22,
    justifyContent: 'center',
  },
  reporterContainer: {
    height: 0.32*windowHeight,
  },
  reporterInfo: {
    flexDirection: 'row',
    height: 0.05*windowHeight,
    marginLeft: 0.1*windowWidth,
  },
  reporterImg: {
    width: 60,
    height: 60,
    borderRadius: 60,

  },
  reporterContent: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  reporterTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  reporterName: {
    color: 'black',
    fontSize: 16,
  },
  reporterBox: {
    marginTop: 35,
    alignSelf: 'center',
    width: 0.8*windowWidth,
    borderWidth: 1,
    height: 0.20*windowHeight,
    padding: 20,
  },
  reporterText: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 16,
  },
  reportedContainer: {
    height: 0.50*windowHeight,
    backgroundColor: green,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 25,
    borderWidth: 1,
  },
  reportedTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  reportedBox: {
    height: 0.22*windowHeight,
    backgroundColor: 'white',
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,
    elevation: 5,
    marginVertical: 10,
  },
  reportedInfo: {
    padding: 10,
    flexDirection: 'row',
  },
  reportedImg: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  reportedContent: {
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  reportedName: {
    color: 'black',
    fontSize: 25,
  },
  reportedDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  reportedText: {
    color: 'black',
    fontSize: 18,
    justifyContent: 'center',
  },
  btnContainer: {
    height: 0.1*windowHeight,
  },
  btnBox: {
    marginVertical: 20,
    height: 0.05*windowHeight,
    width: 0.6*windowWidth,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  btnText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
  btn2: {
    alignSelf: 'center',
  },
  btn2Text: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
