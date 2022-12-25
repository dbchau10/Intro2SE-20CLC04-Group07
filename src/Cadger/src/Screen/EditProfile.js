import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Dimensions, Image} from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>{}}>
                <View style={{
                    height: 100,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ImageBackground source={
                        require('../../assets/pictures/avatar.jpg')
                    }
                    style={{
                        height: 100,
                        width: 100,
                    }
                    }
                    imageStyle={{borderRadius: 100}}
                   >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon2 name="camera" size={35} color="#fff" 
                        style={{
                            opacity: 0.7,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 100
                        }} />
                    </View>
                   </ImageBackground>
                </View>
            </TouchableOpacity>

            <Text style={{marginTop: 10,fontSize: 18, fontWeight: 'bold'}}>alsophanie</Text>
        </View>

        <View style={styles.action}>
            <Icon3 name="user-o" size={20} />
            <TextInput 
            placeholder="Name"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <View style={styles.action}>
            <TextInput 
            placeholder="Gender"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <View style={styles.action}>
        <Icon3 name="calendar-o" size={20} />
            <TextInput 
            placeholder="DOB"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <View style={styles.action}>
        <Icon3 name="envelope-o" size={20} />
            <TextInput 
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <View style={styles.action}>
        <Icon3 name="phone" size={20} />
            <TextInput 
            placeholder="Tel"
            keyboardType="number-pad"
            placeholderTextColor="#666666"
            style={styles.textInput}
            />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
            <Text style={styles.panelButtonTitle}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#98FB98',
        alignItems: 'center',
        marginTop: 10
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {
            width: -1,
            height: -3
        },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    panelHeader: {
        alignItems: 'center'
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundCOlor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    action: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a'
    }
})