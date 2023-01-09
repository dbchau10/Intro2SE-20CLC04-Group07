import { SafeAreaView, StyleSheet,Dimensions, ScrollView, FlatList, View } from 'react-native'
import React, {useState, useContext} from 'react'
import { AuthContext } from '../components/Tabs';
import { parameters } from '../global/style'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { borrowRequest, ip, port } from '../global/data';
import RequestCard from '../components/RequestCard';
const BorrowRequest = ({route, navigation}) => {
  const {item_id} = route.params;
  const username = useContext(AuthContext);
  const [requests, setRequests] = useState("");
  const loadRequest = async () => {
    try {
      const r = await fetch(`http://${ip}:${port}/borrowrequests/readByItem/${item_id}`, {
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
            keyExtractor={item => item.request_id}
            renderItem={({ item }) =>
            <View style={{alignSelf:'center',padding: 10}} >
             <RequestCard item={item} navigation={navigation}/>
             </View>
             }
             style={{width: '100%'}}
          />
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default BorrowRequest

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