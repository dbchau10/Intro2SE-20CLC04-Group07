import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Image} from 'react-native'
import React from 'react'
import { parameters } from '../global/style'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ItemData } from '../global/data';
const Request = () => {

    onChange = (nativeEvent) => {

    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
        onScroll = {({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
            {ItemData.map( ({id, imagePath}) => 
            (<Image 
            key={id}
            resizeMode='stretch'
            style={styles.wrap}
            source={imagePath}
            />)
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
        paddingBottom: 30,
        paddingTop: parameters.statusBarHeight,
        marginBottom: 50
      },
      wrap: {
        width: windowWidth,
        height: windowHeight*0.4,
      }
})