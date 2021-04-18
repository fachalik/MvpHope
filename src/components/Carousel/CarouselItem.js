import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import colors from '../../assets/colors';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />
      <View style={{}}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: width,
    height: height,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  image: {
    width: width,
    height: height / 2,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent:'center',
    alignSelf:'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Karla-Bold',
    color: colors.black,
    textAlign: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Karla-Regular',
    color: colors.black,
    textAlign: 'center',
    marginHorizontal:30,
  },
});

export default CarouselItem;
