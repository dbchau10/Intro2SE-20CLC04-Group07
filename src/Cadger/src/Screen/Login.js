import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const CryptoJS = require('crypto-js');
import { ip, port } from '../global/data';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const encrypt = (password) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(password));
}

const Login = ({navigation}) => {
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
            secureTextEntry
          />
        </SafeAreaView>
      </View>
      <View style={styles.loginContainerButton}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={async() => {
            let data;
            try {
              const r = await fetch(`http://${ip}:${port}/accounts/${username}`, {
              method: 'GET',
              });
              data = await r.json();
            } catch (err) {
              console.log(err.message);
            }
            console.log(data.password);
            if (data.password === encrypt(password))
              navigation.navigate('Tabs');
            else
              Alert.alert("Login failed!");
          }}>
          <Text style={styles.btnText1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.btnText2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loginContainerLogo: {
    height: 0.3 * windowHeight,
    alignItems: 'center',
  },
  loginContainerInput: {
    height: 0.3 * windowHeight,
  },
  loginContainerButton: {
    windowHeight: 0.4 * windowHeight,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    color: '#98FB98',
    fontWeight: 'bold',
    fontFamily: 'ChangaOne-Regular',
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 80,
    marginVertical: 15,
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
  },
  btnText1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  btn2: {
    marginTop: 30,
    width: 250,
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
  }
});
