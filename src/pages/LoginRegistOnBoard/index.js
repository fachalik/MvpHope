import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import colors from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import {LogoTemp} from '../../assets';
import Carousel from '../../components/Carousel/Carousel';
import dummyData from '../../components/Carousel/DummyData';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />
        <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
          <LogoTemp />
        </View>
        <Carousel data={dummyData} />
      </View>
      <View style={styles.footer}>
        <View style={styles.ViewButton}>
          <TouchableOpacity
            style={styles.buttonfooter}
            onPress={() => navigation.navigate('RegisterStep1')}>
            <View style={styles.textRegist}>
              <Text style={styles.buttonTextLogin}>DAFTAR</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonfooter}
            onPress={() => navigation.navigate('Login')}>
            <View style={styles.textLogin}>
              <Text style={styles.buttonTextRegister}>MASUK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;
const width_button = windowWidth - 40;
const radius_size = 15;
const button_height = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.8,
    marginTop: 50,
    backgroundColor: colors.white,
    height: 100,
  },
  footer: {
    flex: 0.2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  RightButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '900',
  },
  RightText: {
    color: colors.blue,
    fontFamily: 'Karla-SemiBold',
    fontSize: 14,
  },
  LeftButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '900',
  },
  LeftText: {
    color: colors.blue,
    fontFamily: 'Karla-SemiBold',
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.gray,
  },
  activeDotStyle: {
    backgroundColor: colors.yellow,
  },
  titlefooter: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textfooter: {
    color: 'grey',
    marginTop: 5,
  },
  ViewButton: {
    marginTop: windowHeight * 0.02,
  },
  buttonfooter: {
    paddingVertical: 5,
  },
  textLogin: {
    color: colors.white,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: width_button,
    height: button_height,
    borderTopLeftRadius: radius_size,
    borderTopRightRadius: radius_size,
    borderBottomLeftRadius: radius_size,
    borderBottomRightRadius: radius_size,
    borderWidth: 3,
    borderColor: '#F2C94C',
  },

  textRegist: {
    backgroundColor: colors.yellow,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: width_button,
    height: button_height,
    borderTopLeftRadius: radius_size,
    borderTopRightRadius: radius_size,
    borderBottomLeftRadius: radius_size,
    borderBottomRightRadius: radius_size,
    borderColor: '#F2C94C',
  },

  buttonTextRegister: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#F9DB7E',
    // color: colors.white,
  },
  buttonTextLogin: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: colors.white,
    // color: '#F9DB7E',
  },
});
