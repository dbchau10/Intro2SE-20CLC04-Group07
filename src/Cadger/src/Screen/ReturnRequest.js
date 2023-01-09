import { SafeAreaView, StyleSheet,Dimensions, ScrollView, FlatList, View } from 'react-native'
import React, {useState, useContext} from 'react'
import { AuthContext } from '../components/Tabs';
import { parameters } from '../global/style'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { returnRequest, ip, port } from '../global/data';
import RequestReturn from '../components/RequestReturn';
const ReturnRequest = ({route, navigation}) => {
  const {item_id} = route.params;
  const username = useContext(AuthContext);
  const [requests, setRequests] = useState("");
  const loadRequest = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/returns/readByItem/${item_id}`, {
      method: 'GET',
      });
      const d = await r.json();
      setRequests(d);
    } catch (err) {
      console.log(err.message);
    }
  }
  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
        loadRequest();
    });
    return focusHandler;
}, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={{width: windowWidth}}>
        <View style={{alignItems: 'center'}}>
        <FlatList
            data={requests}
            keyExtractor={item => item.return_id}
            renderItem={({ item }) =>
            <View style={{alignSelf:'center',padding: 10}} >
             <RequestReturn item={item} navigation={navigation}/>
             </View>
             }
             style={{width: '100%'}}
          />
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default ReturnRequest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingBottom: 30,
        paddingTop: parameters.statusBarHeight,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },


})