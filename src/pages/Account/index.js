import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Title, Caption, TouchableRipple} from 'react-native-paper';
import {Avatar} from '../../assets';
import {AuthContext} from '../../router/context';
import Loading from '../../components/Loading';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {color} from 'react-native-reanimated';
import {LogoTemp} from '../../assets';

const Account = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const {SignOut} = useContext(AuthContext);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('UserProfile');
        await setData(JSON.parse(jsonValue));
        console.log(JSON.parse(jsonValue));
        await setIsLoading(false);
      } catch (e) {
        //   error reading value
        console.log(e);
      }
    }, 1000);
  }, [null]);
  console.log(data);

  const logOutHandle = async () => {
    setIsLoading(true);
    await setTimeout(() => {
      SignOut();
    }, 2000);
    await setIsLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{marginVertical:20, alignItems:'center'}}>
            <LogoTemp/>
        </View>
        <View
          style={{
            borderBottomColor: '#dddddd',
            borderBottomWidth: 1,
          }}></View>
        <View style={styles.userInfoSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical:20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Avatar} size={80} />
              <View style={{marginLeft: 20, flexDirection: 'column'}}>
                <Text style={{color: colors.gray_dark}}>Selamat Datang</Text>
                <Title style={[styles.title]}>
                  {data.first_name === undefined && data.last_name === undefined
                    ? null
                    : data.first_name + ' ' + data.last_name}
                </Title>
              </View>
            </View>
            <TouchableOpacity
              style={{justifyContent:'center'}}
              onPress={() => {
                logOutHandle();
              }}>
              <Icon name="logout" style={styles.icon} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#dddddd',
            borderBottomWidth: 1,
          }}></View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit Profile');
            }}>
            <View style={{marginTop: 10}}>
              <View style={styles.menu}>
                  <Ionicons name="settings" style={styles.icon} size={24} />
                <Text
                  style={{
                    flex: 0.8,
                    alignItems: 'center',
                    width: 270,
                    color: colors.black,
                    fontFamily: 'Karla-Bold',
                    fontSize: 16,
                  }}>
                  Edit Profile
                </Text>
                <FeatherIcon
                  name="chevron-right"
                  style={styles.icon}
                  size={22}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? <Loading loading={isLoading} /> : null}
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 10,
  },
  wrapper: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  userInfoSection: {
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Karla-Bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  menu: {
    justifyContent:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 11,
    marginVertical: 8,
    color: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIcon: {
    height: 45,
    width: 45,
    backgroundColor: colors.gray,
    borderRadius: 12,
    marginRight: 30,
  },
});
{
  /* <TouchableOpacity
        onPress={() => {
          SignOut();
        }}>
        <Text style={{fontSize: 20, fontFamily: 'bold'}}>Logout</Text>
      </TouchableOpacity> */
}
