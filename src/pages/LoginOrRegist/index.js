import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import color from '../../assets/colors';
import {logo} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';

const LoginOrRegist = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#F9D976', '#F39F86']}
      style={styles.linearGradient}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoTitle}>Hope</Text>
        <Text style={styles.logoText}>The Complete Health Solution</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Selamat datang di Hope</Text>
        <Text style={styles.text}>
          Personal Asistant Health and Mental Care
        </Text>
        <View style={styles.ViewButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <View style={styles.textLogin}>
              <Text style={styles.buttonTextLogin}>DAFTAR</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            
            <LinearGradient
              colors={['#F2C94C', '#F4A186']}
              style={styles.textDaftar}>
              <Text style={styles.buttonTextRegister}>MASUK</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginOrRegist;

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;
const height_logo = windowHeight * 0.28;
const width_button = windowWidth - 30;
const radius_size = 15;
const button_height = 50;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: color.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  logo: {
    height: height_logo,
    width: height_logo,
  },
  logoTitle: {
    color: color.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 62,
  },
  logoText: {
    color: color.white,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  ViewButton: {
    marginTop: 90,
  },
  button: {
    paddingVertical: 5,
  },
  textDaftar: {
    color: color.white,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: width_button,
    height: button_height,
    borderTopLeftRadius: radius_size,
    borderTopRightRadius: radius_size,
    borderBottomLeftRadius: radius_size,
    borderBottomRightRadius: radius_size,
  },
  textLogin: {
    color: color.white,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: width_button,
    height: button_height,
    borderTopLeftRadius: radius_size,
    borderTopRightRadius: radius_size,
    borderBottomLeftRadius: radius_size,
    borderBottomRightRadius: radius_size,
    borderWidth: 3,
    borderColor: '#F2C94C',
  },
  buttonTextLogin: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#F9DB7E',
  },
    buttonTextRegister: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color:color.white,
  },
});
