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
} from '../../assets/images';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = ({navigation}) => {
  const onChangeSearch = query => setSearchQuery(query);
  const LayananUtama = [
    {
      id: 1,
      request: 'Develop',
      title: 'Riwayat Penyatkit',
      image: RiwayatPenyakit,
    },
    {
      id: 2,
      request: 'InfoObat',
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
      request: 'Develop',
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
            navigation.navigate(item.request, {request:item.request});
            // console.log('test')
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
            <Icon
              name="phone"
              style={{marginVertical: 10, color: colors.yellow}}
              size={32}
            />
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
            Hi, Name !
          </Text>
        </View>

        {/* search bar */}
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => {
            navigation.navigate('Search');
          }}></TouchableOpacity>

        {/* slider */}
        <View style={styles.slider}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Karla-Regular',
              fontSize: 20,
            }}>
            Coming Soon !
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Layanan Utama</Text>
        </View>
        <View style={styles.ItemLayananUtama}>{displayLayanan()}</View>
      </View>
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
    backgroundColor: '#ECECEC',
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
  },
});
