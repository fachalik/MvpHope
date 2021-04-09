import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './context';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import FirstLaunchStack from './FirstLaunchStack';
import {Splash} from '../pages';

const Router = ({navigation}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isToken, setIsToken] = useState(null);
  const [isSplash, setIsSplash] = useState(true);

  const authContext = React.useMemo(() => ({
    SignIn: () => {
      setIsToken('asd');
      AsyncStorage.setItem('_Token', 'asd');
    },
    SignUp: () => {
      setIsToken('asd');
      AsyncStorage.setItem('_Token', 'asd');
    },
    SignOut: () => {
      setIsToken(null);
      AsyncStorage.setItem('_Token', null);
    },
  }));

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunch').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunch', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 1500);
  }, []);

  if (isSplash) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isFirstLaunch ? (
          <FirstLaunchStack />
        ) : isToken != null ? (
          <MainStack />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Router;
const styles = StyleSheet.create({});
