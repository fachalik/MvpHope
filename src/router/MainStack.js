import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomNavigator} from '../components';
import {Home, Splash, Account, ChatBot, ChatBotScreen, ChatDoctorScreen} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
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
  const route = useRoute();
  return (
    <ChatStack.Navigator initialRouteName="Chatbot">
      <ChatStack.Screen
        name="ChatBot"
        component={ChatBot}
        options={{headerShown: false}}
      />
      <ChatStack.Screen
        name="Konsultasi"
        component={ChatBotScreen}
        options={({route}) => ({
          title: route.name,
          headerShown: true,
        })}
      />
      <ChatStack.Screen
        name="Konsultasi Dokter"
        component={ChatDoctorScreen}
        options={({route}) => ({
          title: route.name,
          headerShown: true,
        })}
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

const MainStack = ({}) => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="ChatBot"
        component={ChatStackScreen}
        options={({route}) => ({
          tabBarVisible: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';

            if (routeName === 'Konsultasi') {
              return false;
            }

            return true;
          })(route),
        })}
      />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Account" component={AccountStackScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
