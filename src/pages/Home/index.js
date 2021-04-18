import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../assets/colors';
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <Text style={{fontFamily:'Karla-Bold', fontSize:24, textAlign:'center', marginHorizontal:50}}>Tidak dapat menampilkan halaman ini</Text>
      <Text style={{fontFamily:'Karla-regular', fontSize:16, textAlign:'center', marginHorizontal:10}}>Dalam masa pengembangan</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.white,
  },
});
