import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import colors from '../../assets/colors';
import {logo2, Option1, Option2, Option3} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {ConsultationImage} from '../../assets/images';
import {Header} from 'react-native/Libraries/NewAppScreen';
const {width, height} = Dimensions.get('window');
const ChatBot = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.Title}>Konsultasi</Text>
          <Image source={ConsultationImage} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.Text}>
            Konsultasi dengan beberapa pilihan dibawah
          </Text>
          <View style={{marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Konsultasi');
              }}>
              <View style={styles.Box}>
                <Text style={styles.BoxText}>Chat Hope</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Konsultasi Dokter');
              }}>
              <View style={styles.Box}>
                <Text style={styles.BoxText}>Chat Dokter</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

  },
  wrapper: {
    flex:1,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  header: {
    flex: 0.5,
    marginTop: 50,
  },
  footer: {
    flex: 0.5,
  },
  Title: {
    fontFamily: 'Karla-Bold',
    fontSize: 24,
  },
  Text: {
    fontFamily: 'Karla-Regular',
    fontSize: 16,
  },
  Box: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 5,
    borderColor: colors.yellow,
  },
  BoxText: {
    marginVertical: 20,
    fontFamily: 'Karla-Bold',
    color: colors.gray_dark,
  },
  image: {
    width: width,
    height: height / 2.5,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default ChatBot;
