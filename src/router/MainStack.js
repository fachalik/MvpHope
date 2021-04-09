import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomNavigator} from '../components';
import {Home, Splash, Account, ChatBot} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeStackScreen = ({navigatio}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const ChatStackScreen = ({navigation}) => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatBot"
        component={ChatBot}
        options={{headerShown: false}}
      />
    </ChatStack.Navigator>
  );
};

const AccountStackScreen = ({navigation}) => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </AccountStack.Navigator>
  );
};

const MainApp = ({navigation}) => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="ChatBot" component={ChatStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Account" component={AccountStackScreen} />
    </Tab.Navigator>
  );
};

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
