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
import { ip, port } from '../global/data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [phone, onChangePhone] = React.useState(null);
  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
        onChangeUsername("");
        onChangePassword("");
        onChangeEmail("");
        onChangePhone("");
    });
    return focusHandler;
  }, [navigation]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.signUpContainerLogo}>
        <View style={styles.bigLogo}>
          <Text style={styles.logoText}>Cadger</Text>
        </View>
      </View>
      <View style={styles.signUpContainerInput}>
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
          <View>
            <Text style={styles.inputText}>Email</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />
          <View>
            <Text style={styles.inputText}>Phone</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhone}
            value={phone}
          />
        </SafeAreaView>
      </View>
      <View style={styles.signUpContainerButton}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={async() => {
            if (username === null) {
              Alert.alert('Username required!');
            } else if (password === null) {
              Alert.alert('Password required!');
            } else if (email === null && phone === null) {
              Alert.alert("Email or phone required!");
            } else {
              try {
                const body = {password, email, phone};
                const r = await fetch(`http://${ip}:${port}/accounts/signup/${username}`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
                });
                try {
                  let d = await r.json();
                  Alert.alert('Signed up successfully!');
                  navigation.navigate('Login');
                } catch (err) {
                  Alert.alert('Username is existed!');
                }
              } catch (err) {
                console.log(err.message);
              }
              
            }
          }}
        >
          <Text style={styles.btnText1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText2}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signUpContainerLogo: {
    height: 0.25*windowHeight,
    alignItems: 'center',
  },
  signUpContainerInput: {
    height: 0.43*windowHeight,
  },
  signUpContainerButton: {
    windowHeight: 0.32*windowHeight,
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
    marginLeft: 80,
    marginVertical: 10,
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
    borderRadius: 20
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
  },
})
