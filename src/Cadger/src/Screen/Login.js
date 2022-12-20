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
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login =  ({navigation}) => {
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.loginContainerLogo}>
        <View style={styles.bigLogo}>
          <Text style={styles.logoText}>Cadger</Text>
        </View>
      </View>
      <View style={styles.loginContainerInput}>
        <SafeAreaView>
          <View>
            <Text style={styles.inputText}>Username</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
          />
          <View>
            <Text style={styles.inputText}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
          />
        </SafeAreaView>
      </View>
      <View style={styles.loginContainerButton}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => Alert.alert("Hello")}
        >
          <Text style={styles.btnText1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.btnText2}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginContainerLogo: {
    height: 0.3*windowHeight,
    alignItems: 'center',
  },
  loginContainerInput: {
    height: 0.3*windowHeight,
  },
  loginContainerButton: {
    windowHeight: 0.4*windowHeight,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    color: '#98FB98',
    fontWeight: 'bold',
    fontFamily: 'Changa One',
  },
  bigLogo: {
    marginTop: 100,
  },
  inputText: {
    marginLeft: 80,
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 35,
    marginLeft: 80,
    marginVertical: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 250,
    backgroundColor: '#EBEBEB',
  },
  btn1: {
    width: 250,
    height: 50,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  btnText1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  btn2: {
    marginTop: 60,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  btnText2: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
})
