import React from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import colors from '../../assets/colors';
import {logo2, Option1, Option2, Option3} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const ChatBot = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={styles.wrapper}>
        <Text style={styles.Title}>Konsultasi</Text>
        <Text style={styles.Text}>
          Konsultasi dengan beberapa pilihan dibawah
        </Text>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Konsultasi')}}>
            <View style={styles.Box}>
              <Text style={styles.BoxText}>Chat Bot</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Konsultasi')}}>
            <View style={styles.Box}>
              <Text style={styles.BoxText}>Chat Dokter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 34,
  },
  wrapper: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  Title: {
    fontFamily: 'Karla-Bold',
    fontSize: 24,
  },
  Text: {
    fontFamily: 'Karla-Regular',
    fontSize: 16,
  },
  Box: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical:5,
    borderColor:colors.yellow,
  },
  BoxText: {
    marginVertical: 20,
    fontFamily:'Karla-Bold',
    color:colors.gray_dark
  },
});

export default ChatBot;
