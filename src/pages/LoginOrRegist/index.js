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

const Login = ({navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <LinearGradient
            colors={['#F9DB7E', '#F4A186']}
            style={styles.textDaftar}>
            <Text style={styles.buttonText}>DAFTAR</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('click')}>
          <View 
            style={styles.textLogin}>
            <Text style={styles.buttonText}>MASUK</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Login;

const windowHeight = Dimensions.get('screen').height;
const height_logo = windowHeight * 0.28;

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
  textDaftar: {
    color: color.white,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 261,
    height: 41,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textLogin:{
    color: color.white,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 261,
    height: 41,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor:'white',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});
