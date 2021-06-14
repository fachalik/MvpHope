import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Linking,
} from 'react-native';
import {
  Avatar,
  CariDokter,
  InfoObat,
  RiwayatPenyakit,
  LayananKesehatan,
  Teman,
  SOS,
  OrangTua,
  Ambulance,
  TelfonSOS,
} from '../../assets/images';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dummyData} from './Data';
import Carousel from '../../components/CarouselHome/Carousel';
import {Modal, Portal, Provider, Searchbar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import config from '../../../config';
const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const onChangeSearch = query => setSearchQuery(query);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: 300,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignSelf: 'center',
  };
  useEffect(() => {
    navigation.addListener('focus', async () => {
      try {
        console.log('running');
        const jsonValue = await AsyncStorage.getItem('UserProfile');
        await setData(JSON.parse(jsonValue));
        console.log(JSON.parse(jsonValue));
        await setIsLoading(false);
      } catch (e) {
        //   error reading value
        console.log(e);
      }
    });
  }, [null]);
  console.log(data);

  const LayananUtama = [
    {
      id: 1,
      request: 'Develop',
      title: 'Riwayat Penyakit',
      image: RiwayatPenyakit,
    },
    {
      id: 2,
      request: 'Info Obat',
      title: 'Info Obat',
      image: InfoObat,
    },
    {
      id: 3,
      request: 'Develop',
      title: 'Cari Dokter',
      image: CariDokter,
    },
    {
      id: 4,
      request: 'Layanan Kesehatan',
      title: 'Layanan Kesehatan',
      image: LayananKesehatan,
    },
  ];

  // const handleNoteman = val => {
  //   if (val.length < 5) {
  //     setNoTeman({
  //       ...noTeman,
  //       nomer: val,
  //       isEmpty: false,
  //     });
  //   } else {
  //     setNoTeman({
  //       ...noTeman,
  //       nomer: val,
  //       isEmpty: true,
  //     });
  //   }
  // };

  // const handleTeman = async () => {
  //   let nomerTeman;
  //   nomerTeman = null;
  //   try {
  //     nomerTeman = await AsyncStorage.getItem('nomerTeman');
  //     console.log(nomerTeman);
  //     nomerTeman === null ?
  //     (
  //       setNoTeman({...noTeman, isEmpty: false})
  //     ) : (
  //       setNoTeman({...noTeman, isEmpty: true , nomer=nomerTeman}),
  //       Linking.openURL(`tel:${item.phone_number}`)
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const inputNoteman = async (noTeman) => {
  //   try {
  //     await AsyncStorage.setItem('nomerTeman', noTeman)
  //   } catch (e) {
  //   }
  // }
  const displayLayanan = () => {
    return LayananUtama.map(item => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            navigation.navigate(item.request, {request: item.request});
            console.log(item.request);
          }}>
          <View
            style={{
              width: 145,
              height: 145,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'column',
              backgroundColor: colors.soft_gray,
              borderRadius: 10,
              marginVertical: 5,
            }}>
            <Image
              source={item.image}
              style={{width: 60, height: 60, resizeMode: 'contain'}}
            />
            <Text style={{fontFamily: 'Karla-Bold'}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />
        {/* header home */}
        <View style={styles.header}>
          {/* emergency call */}
          <View style={styles.headerItem}>
            <TouchableOpacity onPress={showModal}>
              <Image
                source={TelfonSOS}
                style={{marginVertical: 10, width: 22, height: 40}}
              />
              {/* <Icon
                name="phone"
                style={{marginVertical: 10, color: colors.yellow}}
                size={32}
              /> */}
            </TouchableOpacity>
          </View>
          {/* Avatar */}
          <View style={styles.headerItem}>
            <Image
              source={Avatar}
              style={{alignSelf: 'center', marginVertical: 2}}></Image>
          </View>
          {/* location */}
          <View
            style={{
              height: 50,
              width: 100,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: 'Karla-Regular',
                alignSelf: 'center',
                marginHorizontal: 2,
              }}>
              Mataram
            </Text>
            <Icon
              name="map-marker"
              style={{alignSelf: 'center', color: colors.yellow}}
              size={32}
            />
          </View>
        </View>

        {/* nama pengguna */}
        <View style={{alignSelf: 'center', marginVertical: 10}}>
          <Text style={{fontFamily: 'Karla-Regular', fontSize: 22}}>
            Hi, {data.first_name}!
          </Text>
        </View>

        {/* search bar */}
        {/* <TouchableOpacity
          style={styles.searchBar}
          onPress={() => {
            navigation.navigate('Search');
          }}></TouchableOpacity> */}
        <View style={styles.searchBar}>
          <Searchbar
            style={{backgroundColor: 'white'}}
            inputStyle={{color: 'black', fontSize: 12}}
            value={searchQuery}
            onChangeText={onChangeSearch}
          />
        </View>
        <View style={styles.CaroselHome}>
          <Carousel data={dummyData} />
        </View>
        <View>
          <Text style={styles.title}>Layanan Utama</Text>
        </View>
        <View style={styles.ItemLayananUtama}>{displayLayanan()}</View>
      </View>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${'0811112323'}`);
                }}>
                <Image style={styles.iconEmergency} source={Teman} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${'08123332123'}`);
                }}>
                <Image style={styles.iconEmergency} source={OrangTua} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${'212'}`);
                }}>
                <Image style={styles.iconEmergency} source={Ambulance} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${'020'}`);
                }}>
                <Image style={styles.iconEmergency} source={SOS} />
              </TouchableOpacity>
            </View>
            {/* {noTeman.isEmpty ? null : (
              <View style={styles.form}>
                <View style={styles.TextInput}>
                  <Text style={{fontFamily: 'Karla-Medium'}}>
                    No Telpon Teman
                  </Text>
                </View>
                <View style={styles.ViewInput}>
                  <Icon name="phone" size={20} color={colors.yellow} />
                  <TextInput
                    style={styles.InputText}
                    placeholder="Mohon nomer teman anda"
                    placeholderTextColor="grey"
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    onChangeText={val => {
                      handleNoteman(val);
                    }}
                  />
                </View>
                <TouchableOpacity
                  disabled={noTeman.isEmpty ? true : false}
                  onPress={() => {
                    inputNoteman(noTeman.nomer)
                  }}>
                  <View
                    style={
                      noTeman.isEmpty
                        ? styles.buttonMasukDisable
                        : styles.buttonMasuk
                    }>
                    {isLoading ? (
                      <ActivityIndicator color={'white'} size="large" />
                    ) : (
                      <Text style={styles.buttonTextMasukDisable}>Input</Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            )} */}
          </Modal>
        </Portal>
      </Provider>
    </ScrollView>
  );
};

export default Home;
const windowWidth = Dimensions.get('screen').width;
const radius_size = 15;
const button_height = 50;
const width_button = windowWidth - 60;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  searchBar: {
    backgroundColor: 'black',
    height: 40,
    width: wp('80%'),
    borderRadius: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'center',
    marginVertical: 20,
    flex: 1,
  },
  CaroselHome: {
    flex: 1,
    alignSelf: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerItem: {
    height: 50,
    width: 100,
  },
  slider: {
    marginVertical: 51,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 150,
    width: wp('80%'),
    backgroundColor: colors.soft_gray,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontFamily: 'Karla-Bold',
    fontSize: 14,
  },
  ItemLayananUtama: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    flexWrap: 'wrap',
    height: 330,
  },
  iconEmergency: {
    width: 50,
    height: 50,
  },
  form: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  ViewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 2,
    marginTop: 10,
    borderColor: colors.yellow,
    borderRadius: 10,
    paddingVertical: 2,
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  InputText: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    color: colors.black,
  },
  buttonMasuk: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: colors.yellow,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: button_height,
    borderTopLeftRadius: radius_size,
    borderTopRightRadius: radius_size,
    borderBottomLeftRadius: radius_size,
    borderBottomRightRadius: radius_size,
  },
  buttonMasukDisable: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: colors.gray,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: button_height,
    borderTopLeftRadius: radius_size,
    borderTopRightRadius: radius_size,
    borderBottomLeftRadius: radius_size,
    borderBottomRightRadius: radius_size,
  },
  buttonTextMasuk: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: colors.white,
  },
  buttonTextMasukDisable: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: colors.white,
  },
  other: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
