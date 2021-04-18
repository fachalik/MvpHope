import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  OnboardingScreen,
  LoginOrRegist,
  Login,
  Register,
  ForgetPassword,
} from '../pages';
import AuthStack from '../router/AuthStack';
const Stack = createStackNavigator();
const FirstLaunchStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouterName="OnboardingScreen">
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FirstLaunchStack;

const styles = StyleSheet.create({});
