import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  ToastAndroid,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationActions} from '@react-navigation/compat';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './context';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {Splash} from '../pages';
import config from '../../config';
import axios from 'react-native-axios';
import colors from '../assets/colors';
import {RegistComplete} from '../pages';
const Router = ({navigation}) => {
  const [isSplash, setIsSplash] = useState(true);

  const intialLoginState = {
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
    SignIn: async (userName, password) => {
      let userToken;
      userToken = null;
      await axios
        .post(config.API_URL + 'auth/login/', {
          username: userName,
          password: password,
        })
        .then(function (response) {
          console.log(response.data);
          userToken = response.data.key;
          AsyncStorage.setItem('userToken', userToken);
          AsyncStorage.setItem('userName', userName);
          console.log(userToken);
        })
        .catch(function (error) {
          ToastAndroid.show(
            'Username dan Password yang anda masukkan tidak terdaftar',
            ToastAndroid.LONG,
          );
        });
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    SignUp: async (userName, email, password, Confirmpassword) => {
      // if (password == Confirmpassword) {
      //   await axios
      //     .post(config.API_URL + 'auth/register/', {
      //       username: userName,
      //       email: email,
      //       password1: password,
      //       password2: Confirmpassword,
      //     })
      //     .then(function (response) {
      //       console.log(response.data);
      //       ToastAndroid.show(
      //         'Registrasi Berhasil, silahkan menuju ke menu Masuk',
      //         ToastAndroid.LONG,
      //       );
      //     })
      //     .catch(function (error) {
      //       console.log(error.response.data.password1);
      //       if (error.response.data.username) {
      //         console.log(error.response.data.username);
      //         ToastAndroid.show(
      //           error.response.data.username[0],
      //           ToastAndroid.LONG,
      //         );
      //       } else {
      //         console.log('username not error');
      //       }
      //       if (error.response.data.email) {
      //         ToastAndroid.show(
      //           error.response.data.email[0],
      //           ToastAndroid.LONG,
      //         );
      //         console.log(error.response.data.email);
      //       } else {
      //         console.log('email not error');
      //       }
      //       if (error.response.data.password1) {
      //         let pass =
      //           error.response.data.password1[0] +
      //           ' ' +
      //           error.response.data.password1[1];
      //         ToastAndroid.show(pass, ToastAndroid.LONG);
      //         console.log(pass);
      //       } else {
      //         console.log('password not error');
      //       }
      //     });
      // } else {
      //   ToastAndroid.show(
      //     'Kata sandi dan Konfirmasi kata sandi tidak cocok',
      //     ToastAndroid.LONG,
      //   );
      // }

      dispatch({type: 'REGIST', id: userName, token: userToken});
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
    let isUnmount = false;
    if (!isUnmount) {
      setTimeout(() => {
        setIsSplash(false);
      }, 1500);
    }
    return () => {
      isUnmount = true;
    };
  }, []);
  console.log(loginState.userToken);
  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken);
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIVE_TOKEN', token: userToken});
    }, 1000);
  }, []);
  if (isSplash) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null || loginState == undefined ? (
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
