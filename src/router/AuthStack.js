import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginOrRegist,
  LoginRegistOnBoard,
  Login,
  RegisterStep1,
  RegisterStep2,
  RegisterStep3,
  ForgetPassword,
  RegistComplete,
} from '../pages';
const Stack = createStackNavigator();
const AuthStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginRegistOnBoard"
        component={LoginRegistOnBoard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStep1"
        component={RegisterStep1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStep2"
        component={RegisterStep2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterStep3"
        component={RegisterStep3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistComplete"
        component={RegistComplete}
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
