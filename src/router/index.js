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
import {Splash} from '../pages';
import config from '../../config';
import axios from 'react-native-axios';

const Router = ({navigation}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
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
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'REGIST':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    intialLoginState,
  );
  const authContext = React.useMemo(() => ({
    SignIn: async (userName, password, Confirmpassword) => {
      let userToken;
      userToken = null;
      if (password == Confirmpassword) {
        await axios
          .post(config.API_URL + 'auth/login/', {
            username: userName,
            password: password,
          })
          .then(function (response) {
            console.log(response.data.key);
            userToken = response.data.key;
            AsyncStorage.setItem('userToken', userToken);
            console.log(userToken);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    SignUp: async (userName, email, password, Confirmpassword) => {
      let userToken;
      userToken = null;
      console.log(config.API_URL + 'auth/register/');
      if (password == Confirmpassword) {
        await axios
          .post(config.API_URL + 'auth/register/', {
            username: userName,
            email: email,
            password1: password,
            password2: Confirmpassword,
          })
          .then(function (response) {
            console.log(response.data.key);
            userToken = response.data.key;
            AsyncStorage.setItem('userToken', userToken);
            console.log(userToken);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken});
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
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (isSplash) {
    return <Splash />;
  }
  {
    loginState.userToken !== null
      ? console.log('mainStack')
      : console.log('null');
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Router;
const styles = StyleSheet.create({});
