import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { parameters } from '../global/style'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ItemData } from '../global/data';
const Request = ({navigation}) => {

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
            {ItemData.map( ({id, imagePath, title}) => 
            (<TouchableOpacity onPress={()=>navigation.navigate('BorrowRequest')}>
            <ImageBackground 
                key={id}
                resizeMode='stretch'
                style={styles.wrap}
                source={imagePath}
                >
                    <View style={styles.banner}>
                            <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
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
            {ItemData.map( ({id, imagePath, title}) => 
            (<TouchableOpacity onPress={()=>navigation.navigate('ReturnRequest')}>
            <ImageBackground 
            key={id}
            resizeMode='stretch'
            style={styles.wrap}
            source={imagePath}
            >
                <View style={styles.banner}>
                        <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
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