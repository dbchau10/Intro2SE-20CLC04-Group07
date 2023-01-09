import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { parameters } from '../global/style';
import ReturnForm from './ReturnForm';
import RatingForm from './RatingForm';
const MultiForm = ({route, navigation}) => {
  const {item_id} = route.params;
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.name}>Laptop cũ phục vụ mục đích học tập</Text>
    <ProgressSteps
    >
        <ProgressStep label="First Step" nextBtnStyle={{alignItems:'center',width:250}}>
            <View style={{ alignItems: 'center' }}>
                <ReturnForm />
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
              <RatingForm />  
            </View>
        </ProgressStep>
    </ProgressSteps>
    </View>
</SafeAreaView>
  )
}

export default MultiForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingBottom: 30,
        paddingTop: parameters.statusBarHeight,
        justifyContent: 'center'
      },
      body: {
        height: 0.72*windowHeight,
        alignSelf: 'center',
        paddingHorizontal: 30
      },
      name: {
        textAlign: 'center',
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
      },
      btn: {
        width: 250,
        height: 50,
        backgroundColor: '#98FB98',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 50,
      },
      btnText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
      },
})