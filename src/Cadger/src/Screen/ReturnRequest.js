import { SafeAreaView, StyleSheet,Dimensions, ScrollView, FlatList, View } from 'react-native'
import React from 'react'
import { parameters } from '../global/style'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { returnRequest } from '../global/data';
import RequestReturn from '../components/RequestReturn';
const ReturnRequest = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={{width: windowWidth}}>
        <View style={{alignItems: 'center'}}>
        <FlatList
            data={returnRequest}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
            <View style={{alignSelf:'center',padding: 10}} >
             <RequestReturn item={item} />
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