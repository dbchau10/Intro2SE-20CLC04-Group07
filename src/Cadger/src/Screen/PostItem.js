import React, {useState} from 'react';
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
  FlatList,
  Image,
} from 'react-native';
import { parameters } from '../global/style';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';


const PostItem = () => {
  const [name, onChangeName] = useState(null);
  const [desc, onChangeDesc] = useState(null);
  const [image, setImage] = useState(null);
  const [check,onCheck]=useState(false);
  const bs = React.createRef();
    const fall = new Animated.Value(1);
    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log(image);
        setImage(image.path);
        onCheck(true);
        this.bs.current.snapTo(1);
      });
    }
  
    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log(image);
        onCheck(true);
        setImage(image.path);
        this.bs.current.snapTo(1);
      });
    }
    const renderInner = () => (
        <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
    )

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>

    )

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330,0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        borderRadius={10}
       // enabledContentTapInteraction={true} 
        callbackNode={fall}
        enabledGestureInteraction={true}
        />
      <Animated.View style={{margin: 20, marginBottom: 50, 
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}></Animated.View>
        <ScrollView style={styles.body}>
          <Text style={styles.title}>Name</Text>
          <TextInput 
            style={styles.box}
            onChangeText={onChangeName}
            value={name}
          />
          <Text style={styles.title}>Description</Text>
          <TextInput
            multiline
            numberOfLines={10} 
            style={styles.box}
            onChangeText={onChangeDesc}
            value={desc}
          />
          <Text style={styles.title}>Image URL</Text>
          {!check && (
          <TouchableOpacity style={[styles.btn,{backgroundColor:'lightgrey'}]} onPress={()=>bs.current.snapTo(0)}>
            <Text style={{fontSize: 16}}>Choose Image</Text>
          </TouchableOpacity>
          )}
          {check && (
        <View style={{alignItems: 'center',padding: 20}}>
          <Image width={250} height={250} source={{uri: image}} />
          </View>
          )}
          <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Hello")}
          >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default PostItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: parameters.statusBarHeight,
    paddingBottom: 200,
    justifyContent: 'center',
  },
  body: {
    
    alignSelf: 'center',
   
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  box: {
    minHeight: 30,
    width: 0.8*windowWidth,
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'black',
    marginVertical: 10,
  },
  btn: {
    width: 250,
    height: 50,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 25,
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  panelTitle: {
    fontSize: 20,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    width: 250,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    marginVertical: 5,
  },
  panelButtonTitle: {
    fontSize: 16,
    color: 'white',
  },
})
