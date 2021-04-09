import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, LoginOrRegist, Login, Register, ForgetPassword} from '../pages';
const Stack = createStackNavigator();
const AuthStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouterName="LoginOrRegist">
      <Stack.Screen
        name="LoginOrRegist"
        component={LoginOrRegist}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
