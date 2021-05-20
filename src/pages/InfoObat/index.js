import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import dummyData from './dummyData';
import colors from '../../assets/colors';
const InfoObat = ({route, navigation}) => {
  console.log(dummyData);
  const request = route.params;
  console.log(request.request);

  const DisplayCategory = () => {
    return dummyData.map(item => {
      return (
        <TouchableOpacity
          key={item.sfMedicinefor}
          onPress={() => {
            navigation.navigate('Detail Obat', {
              request: item.sfMedicinefor,
            });
          }}>
          <View
            style={{
              width: 105,
              height: 105,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'column',
              backgroundColor: colors.soft_gray,
              borderRadius: 10,
              marginVertical: 5,
            }}>
            <Image
              source={item.image}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Text style={{fontFamily: 'Karla-Bold', fontSize:12}}>{item.medicinefor}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{fontFamily: 'Karla-Bold'}}>Cari Penyakitmu!</Text>
        <View style={styles.itemlayanan}>
          <DisplayCategory />
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoObat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
  wrapper: {
    marginHorizontal: 30,
    marginVertical: 50,
  },
  itemlayanan: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
