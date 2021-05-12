import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomNavigator} from '../components';
import {
  Home,
  Account,
  ChatBot,
  ChatBotScreen,
  ChatDoctorScreen,
  Search,
  InfoObat,
  DetailObat,
  Develop,
} from '../pages';
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
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="InfoObat" component={InfoObat} />
      <HomeStack.Screen name="DetailObat" component={DetailObat} />
      <HomeStack.Screen name="Develop" component={Develop} />
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
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="ChatBot"
        component={ChatStackScreen}
        options={({route}) => ({
          tabBarVisible: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';

            if (
              routeName === 'Konsultasi' ||
              routeName === 'Konsultasi Dokter'
            ) {
              return false;
            }

            return true;
          })(route),
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={({route}) => ({
          tabBarVisible: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';

            if (routeName === 'Search') {
              return false;
            }

            return true;
          })(route),
        })}
      />
      <Tab.Screen name="Account" component={AccountStackScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
