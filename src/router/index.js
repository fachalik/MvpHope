import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './context';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import FirstLaunchStack from './FirstLaunchStack';
import {Splash} from '../pages';
import {act} from 'react-test-renderer';

const Router = ({navigation}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // const [isToken, setIsToken] = useState(null);
  const [isSplash, setIsSplash] = useState(true);

  const intialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        };
      case 'REGIST':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    intialLoginState,
  );
  const authContext = React.useMemo(() => ({
    SignIn: async (userName, password, Confirmpassword) => {
      // setIsToken('asd');
      let userToken;
      userToken = null;
      if (userName == 'user' && password == 'user') {
        if (password == Confirmpassword) {
          try {
            userToken = 'asd';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    SignUp: () => {
      setIsToken('asd');
      AsyncStorage.setItem('_Token', 'asd');
    },
    SignOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
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

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        await AsyncStorage.setItem('alreadyLaunch', 'true');
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'REGIST', token: userToken});
    }, 1000);
  }, []);

  if (isSplash) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isFirstLaunch ? (
          <FirstLaunchStack />
        ) : loginState.userToken === null ? (
          <AuthStack />
        ) : (
          <MainStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Router;
const styles = StyleSheet.create({});
