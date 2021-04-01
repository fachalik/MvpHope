import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {SplashBackground} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunch').then(value => {
      if (value == 'true') {
        AsyncStorage.setItem('alreadyLaunch', 'true');
        setTimeout(() => {
          navigation.navigate('OnboardingScreen');
        }, 2000);
      } else if(value == 'false') {
        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000);
      }
    });
  }, [navigation]);


  return (
    <ImageBackground
      source={SplashBackground}
      style={styles.background}></ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
