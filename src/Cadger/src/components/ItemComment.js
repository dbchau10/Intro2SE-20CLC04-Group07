import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const ItemComment = ({item}) => {
  return (
    <View style={styles.description}>
    <Image
    source={item.imagePath}
        style={styles.avatarComment}
              />
              <View style={{flexDirection: 'column'}}>
                <Text>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row',paddingVertical: 10, paddingRight: 10}}>
                <Icon name='star' size={16} color='#F1CF1C'/>
                <Icon name='star' size={16} color='#F1CF1C'/>
                <Icon name='star' size={16} color='#F1CF1C'/>
                <Icon name='star' size={16} color='#F1CF1C'/>
                <Icon name='star' size={16} color='#F1CF1C'/>
                </View>
                <View>
                <Text style={{fontStyle: 'italic', fontSize: 12}}>{item.date}</Text>
                </View>
                </View>
                <Text>{item.value}</Text>
              </View>
    </View>
  )
}

export default ItemComment
const styles = StyleSheet.create({
      avatarComment: {
        marginHorizontal: 30,
        width: 50,
        height: 50,
        borderRadius: 50
      },
      description: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 2

    },
      
})