import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
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
} from '../../assets/images';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dummyData} from './Data';
import Carousel from '../../components/CarouselHome/Carousel';

import {Modal, Portal, Provider, Searchbar} from 'react-native-paper';
const Home = (props, {navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: 300,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignSelf: 'center',
  };

  const LayananUtama = [
    {
      id: 1,
      request: 'Develop',
      title: 'Riwayat Penyatkit',
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
  const displayLayanan = () => {
    return LayananUtama.map(item => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            props.navigation.navigate(item.request, {request: item.request});
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
              <Icon
                name="phone"
                style={{marginVertical: 10, color: colors.yellow}}
                size={32}
              />
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
            Hi, {props.route.params.first_name}!
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
        <Carousel data={dummyData} />
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
                  alert('teman');
                }}>
                <Image style={styles.iconEmergency} source={Teman} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('teman');
                }}>
                <Image style={styles.iconEmergency} source={OrangTua} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('teman');
                }}>
                <Image style={styles.iconEmergency} source={Ambulance} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('teman');
                }}>
                <Image style={styles.iconEmergency} source={SOS} />
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </ScrollView>
  );
};

export default Home;

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
    width: 330,
    borderRadius: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'center',
    marginVertical: 20,
    flex: 1,
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
    width: 330,
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
});
