import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import color from '../../assets/colors';
import {logo2, Option1, Option2, Option3} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ChatBot = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo2} style={styles.logo} resizeMode="stretch" />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Konsultasi');
          }}>
          <View style={styles.Icon}>
            <Image source={Option3} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Konsultasi');
          }}>
          <View style={styles.Icon}>
            <Image source={Option2} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Konsultasi');
          }}>
          <View style={styles.Icon}>
            <Image source={Option1} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBot;
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;
const height_logo = windowHeight * 0.28;
const widthOption = windowWidth - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  header: {
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.87,
  },
  footer: {
    flex: 0.09,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingTop: 20,
    width: widthOption,
    backgroundColor: '#F4F4F4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  logo: {
    height: height_logo,
    width: height_logo,
  },
});
