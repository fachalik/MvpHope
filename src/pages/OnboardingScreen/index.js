import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../../assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Login} from '../../pages';
const slides = [
  {
    title: 'Make Health Better',
    text:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    image: require('../../assets/images/1.png'),
  },
  {
    title: 'Make Soul Better',
    text:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ',
    image: require('../../assets/images/2.png'),
  },
  {
    title: 'Make you safe from unhelthy',
    text:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    image: require('../../assets/images/3.png'),
  },
];

const OnboardingScreen = () => {
  const [alreadylaunch, setAlreadyLaunch] = useState(false);

  _onDone = () => {
    setAlreadyLaunch(true);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.RightButton}>
        <Text style={styles.RightText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.RightButton}>
        <Text style={styles.RightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.LeftButton}>
        <Text style={styles.LeftText}>Prev</Text>
      </View>
    );
  };
  const renderSkipButton = () => {
    return (
      <View style={styles.LeftButton}>
        <Text style={styles.LeftText}>Skip</Text>
      </View>
    );
  };

  if (alreadylaunch) {
    return <Login/>
  } else {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          renderSkipButton={renderSkipButton}
          showPrevButton
          showSkipButton
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          data={slides}
          onDone={_onDone}
        />
      </View>
    );
  }
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Karla-Bold',
    color: colors.black,
    textAlign: 'center',
    marginHorizontal: 60,
    padding: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Karla-Regular',
    color: colors.black,
    textAlign: 'center',
    marginHorizontal: 60,
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
    backgroundColor: colors.blue,
  },
});
