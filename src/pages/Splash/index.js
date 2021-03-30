import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {SplashBackground} from '../../assets';

const Splash = ({navigation}) => {
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('alreadyLaunched');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    if (_retrieveData == null && _retrieveData == false) {
      setTimeout(() => {
        navigation.replace('OnboardingScreen');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.replace('Login');
      }, 2000);
    }
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
