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
  ChatPsikologScreen,
  Search,
  InfoObat,
  DetailObat,
  Develop,
  EditProfile,
  LayananKesehatan
} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeStackScreen = (props, {navigation}) => {
  console.log(props.route.params);
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        initialParams={props.route.params}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        initialParams={props.route.params}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Info Obat" component={InfoObat} />
      <HomeStack.Screen name="Detail Obat" component={DetailObat} />
      <HomeStack.Screen name="Develop" component={Develop} />
      <HomeStack.Screen name="Layanan Kesehatan" component={LayananKesehatan} />
    </HomeStack.Navigator>
  );
};

const ChatStackScreen = (props, {navigation}) => {
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
      <ChatStack.Screen
        name="Konsultasi Psikolog"
        component={ChatPsikologScreen}
        options={({route}) => ({
          title: route.name,
          headerShown: true,
        })}
      />
    </ChatStack.Navigator>
  );
};

const AccountStackScreen = (props, {navigation}) => {
  return (
    <AccountStack.Navigator initialRouteName="Account">
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </AccountStack.Navigator>
  );
};

const MainStack = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="ChatBot"
        component={ChatStackScreen}
        initialParams={props.data}
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
        initialParams={props.data}
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
