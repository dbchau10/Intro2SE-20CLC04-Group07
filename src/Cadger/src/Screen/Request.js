import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, ImageBackground, TouchableOpacity} from 'react-native'
import React, {useState, useContext, useEffect} from 'react';
import { AuthContext } from '../components/Tabs';
import { parameters } from '../global/style';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ItemData, ip, port } from '../global/data';
const Request = ({navigation}) => {
  const username = useContext(AuthContext);
  const [borrowRequests, setBorrowRequests] = useState("");
  const [returnRequests, setReturnRequests] = useState("");
  const loadRequest = async () => {
    try {
      Promise.all([
        fetch(`http://${ip}:${port}/items/getByRequest/${username}/1`, {
        method: 'GET',
        }),
        fetch(`http://${ip}:${port}/items/getByRequest/${username}/0`, {
        method: 'GET',
        })
      ]).then(async allResponses => {
        const r1 = allResponses[0];
        const r2 = allResponses[1];
        const d1 = await r1.json();
        const d2 = await r2.json();
        setBorrowRequests(d1);
        setReturnRequests(d2);
      })
    } catch (err) {
      console.log(err.message);
    }
  }
  if (borrowRequests == "") {
    loadRequest();
  }
  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      loadRequest();
    });
    return focusHandler;
    }, [navigation])
    onChange = (nativeEvent) => {

    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginBottom: 50}}>
        <Text style={styles.textHeader}>Borrow Request</Text>
        <ScrollView
        onScroll = {({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
            {borrowRequests && borrowRequests.map( ({item_id, img, name}) => 
            (<TouchableOpacity onPress={()=>navigation.navigate('BorrowRequest', {item_id: item_id})}>
            <ImageBackground 
                key={item_id}
                resizeMode='stretch'
                style={styles.wrap}
                source={img}
                >
                    <View style={styles.banner}>
                            <Text style={{color: 'white', fontSize: 18}}>{name}</Text>
                        </View>
                </ImageBackground>
                </TouchableOpacity>
                )
            )}
        </ScrollView>


        <Text style={styles.textHeader}>Return Request</Text>
        <ScrollView
        onScroll = {({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
            {returnRequests && returnRequests.map( ({item_id, img, name}) => 
            (<TouchableOpacity onPress={()=>navigation.navigate('ReturnRequest', {item_id: item_id})}>
            <ImageBackground 
            key={item_id}
            resizeMode='stretch'
            style={styles.wrap}
            source={img}
            >
                <View style={styles.banner}>
                        <Text style={{color: 'white', fontSize: 18}}>{name}</Text>
                    </View>
            </ImageBackground>
            </TouchableOpacity>
            )
            )}
        </ScrollView>

        
      </View>
    </SafeAreaView>
  )
}

export default Request

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: parameters.statusBarHeight,
        marginBottom: 100
      },
      wrap: {
        width: windowWidth,
        height: windowHeight*0.35,
      },
      textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 13,
        paddingHorizontal: 25
      },
      banner: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
      }
})