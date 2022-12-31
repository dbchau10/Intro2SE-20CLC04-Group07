import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { parameters } from '../global/style'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const green = '#98FB98';
import Icon from 'react-native-vector-icons/Ionicons';
const Item = () => {
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.preview}>
    <Image source={require('../../assets/pictures/laptop.jpg')} 
    style={{alignSelf: 'center', height: '100%', width: '100%' }}
    />
    </View>
    <View style={styles.header}>
        <Text style={styles.textHeader}>
            Laptop cũ phục vụ mục đích học tập
            </Text>
            <View style={{flexDirection: 'column', alignItems: 'center', width: "30%"}}>
        <View style={{flexDirection: 'row', position: 'relative',paddingVertical: 10}}>
        <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
        <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
        <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
        <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
        <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
        </View>
        <View style={styles.itemStatusBox}>
                <Text style={styles.itemStatusText}>Available</Text>
            </View>
            </View>
        
    </View>

    <View style={styles.profile}>
    <Image
        style={styles.avatar}
        source={require('../../assets/pictures/avatar.jpg')}
              />
              <View>
            <Text style={styles.username}>alsophanie</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Borrow Now</Text>
            </TouchableOpacity>
        </View>
    </View>

    <View style={styles.profile}>
        <View style={styles.descriptionHeader}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Description</Text>
            <Text style={{fontStyle: 'italic'}}>273 borrowed</Text>
            </View>
    </View>
    <View style={styles.description}>
            <Text>Máy tính tiện lợi giúp bạn chơi đùa cùng deadline và ngồi ở nhà coi wc</Text>
    </View>
    <View style={styles.profile}>
    <View style={styles.descriptionHeader}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Product Ratings</Text>
            <Text style={styles.itemRating}> <Icon name='star' size={16} color='#F1CF1C'/>
             3/5 (20)
            </Text>
    </View>
    </View>
    <View style={styles.description}>
    <Image
        style={styles.avatarComment}
        source={require('../../assets/pictures/avatar.jpg')}
              />
              <View style={{flexDirection: 'column'}}>
                <Text>trexaffvx</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row',paddingVertical: 10, paddingRight: 10}}>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
                </View>
                <View>
                <Text style={{fontStyle: 'italic', fontSize: 12}}>20/12/2022</Text>
                </View>
                </View>
                    <Text>Xài tốt đêí. Cho 5 sao chất lượng !</Text>
              </View>
    </View>
    <View style={styles.description}>
    <Image
        style={styles.avatarComment}
        source={require('../../assets/pictures/avatar.jpg')}
              />
              <View style={{flexDirection: 'column'}}>
                <Text>trexaffvx</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row',paddingVertical: 10, paddingRight: 10}}>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
                </View>
                <View>
                <Text style={{fontStyle: 'italic', fontSize: 12}}>20/12/2022</Text>
                </View>
                </View>
                    <Text>Xài tốt đêí. Cho 5 sao chất lượng !</Text>
              </View>
    </View>
    <View style={styles.description}>
    <Image
        style={styles.avatarComment}
        source={require('../../assets/pictures/avatar.jpg')}
              />
              <View style={{flexDirection: 'column'}}>
                <Text>trexaffvx</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row',paddingVertical: 10, paddingRight: 10}}>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='#F1CF1C'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
                <Icon style={styles.eleIcon} name='star' size={16} color='lightgrey'/>
                </View>
                <View>
                <Text style={{fontStyle: 'italic', fontSize: 12}}>20/12/2022</Text>
                </View>
                </View>
                    <Text>Xài tốt đêí. Cho 5 sao chất lượng !</Text>
              </View>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default Item
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        paddingTop: parameters.statusBarHeight,
        backgroundColor: '#EBEBEB'
      
    },
    preview: {
        height: windowHeight*0.45,
    },
    header: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        flexDirection: 'row',
        backgroundColor: 'white'

    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row'
        
    },
    itemStatusBox: {
        marginHorizontal: 5,
        height: 20,
        width: 100,
        backgroundColor: green,
        borderRadius: 10, 
        
      },
      button: {
        height: 28,
        width: 150,
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 5,
        backgroundColor: green,


      },
      itemStatusText: {
        textAlign: 'center',
        color: 'black',
      },
      profile: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 12

    },
    avatar: {
        marginHorizontal: 30,
        width: 70,
        height: 70,
        borderRadius: 70
      },
      avatarComment: {
        marginHorizontal: 30,
        width: 50,
        height: 50,
        borderRadius: 50
      },
      username: {
        fontSize: 16,
        fontWeight:'bold',
        paddingTop: 10,
        paddingBottom: 5
      },
      description: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 2

    },
    descriptionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    itemRating: {
        textAlign: 'right',
        paddingHorizontal: 10,
      },
      
})