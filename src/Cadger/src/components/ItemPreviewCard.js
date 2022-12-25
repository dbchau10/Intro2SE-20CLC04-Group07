import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ItemPreviewCard = ({ item }) => (
    <View style={styles.itemBox}>
    <Image source={item.imagePath}
    style = {{ width: '100%', height: '50%'}}
    />
    <Text style={styles.itemText}>{item.title}</Text>
    </View>
);

export default ItemPreviewCard;

const styles = StyleSheet.create({
      itemBox: {
        height: 0.2*windowHeight,
        width: 0.3*windowWidth,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginRight: 10
      },
      itemText: {
        padding: 10
      }
})