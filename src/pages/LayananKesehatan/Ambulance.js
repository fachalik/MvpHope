import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/colors';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
const Ambulance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setIsData] = useState([]);
  const ListAmbulance = () => {
    return data.map(item => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            handleSnap(item);
          }}>
          <View
            style={{
              width: 160,
              height: 160,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'column',
              backgroundColor: colors.soft_gray,
              borderRadius: 10,
              marginVertical: 5,
            }}>
            <Text
              style={{
                fontFamily: 'Karla-Bold',
                fontSize: 10,
                textAlign: 'center',
                width: 100,
              }}>
              {item.name}
            </Text>
            <Image
              source={{uri: item.image}}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />

            <Text style={{fontFamily: 'Karla-Bold', fontSize: 10}}>
              {item.price_range}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  useEffect(async () => {
    setIsLoading(true);
    const userToken = await AsyncStorage.getItem('userToken');
    const RefreshToken = await AsyncStorage.getItem('RefreshToken');
    await console.log(RefreshToken + ' refresh');
    await axios
      .post(config.API_URL + 'auth/login/refresh/', {
        refresh: RefreshToken,
      })
      .then(function (response) {
        // console.log(response.data);
        console.log(response.data);
        AsyncStorage.setItem('userToken', response.data.access);
        userToken = response.data.access;
      })
      .catch(function (error) {
        console.log(error);
      });
    await axios
      .get(config.API_URL + 'ambulance/', {
        headers: {Authorization: 'Bearer ' + userToken},
      })
      .then(function (response) {
        // console.log(response.data);
        setIsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    await setIsLoading(false);
  }, [null]);
  console.log(data);
  return (
    <View>
      {isLoading ? <ActivityIndicator color={'black'} size="large" /> : null}
      <View style={styles.itemAmbulance}>
        {!isLoading ? <ListAmbulance /> : null}
      </View>
    </View>
  );
};

export default Ambulance;

const styles = StyleSheet.create({
  itemAmbulance: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
