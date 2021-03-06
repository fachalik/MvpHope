import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import colors from '../../assets/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Image style={{width:80,height:80,alignSelf:'center'}} resizeMode='cover' source={item.image}/>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: wp('80%'),
    height: 150,
    backgroundColor: 'white',
    margin: wp('2.5%'),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'center',
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: colors.yellow,
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    width:220,
    textAlign:'justify',
    padding: 10,
    color: 'black',
    fontSize: 12,

    elevation: 5,
  },
});

export default CarouselItem;
