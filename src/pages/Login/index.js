import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {loginImage} from '../../assets';
import color from '../../assets/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    ConfirmPassword: '',
    check_TextUsername: false,
    secureTextEntry: true,
    secureTextEntryConfirm: true,
  });

  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_TextUsername: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_TextUsername: false,
      });
    }
  };

  const handlePassword = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPassword = val => {
    setData({
      ...data,
      ConfirmPassword: val,
    });
  };

  const updateSecureTextEntry = val => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateSecureTextEntryConfirm = val => {
    setData({
      ...data,
      secureTextEntryConfirm: !data.secureTextEntryConfirm,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('LoginOrRegist')}>
        <Icon
          style={styles.IconStyle}
          name="arrowleft"
          size={32}
          color={color.yellow}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Selamat Datang!</Text>
      <Text style={styles.text}>
        Masuk dengan menggunakan Username atau salah satu opsi dibawah ini
      </Text>
      <View style={styles.form}>
        {/* // Input Form for Username */}
        <View style={styles.ViewInput}>
          <Icon name="user" size={20} color={color.yellow} />
          <TextInput
            style={styles.InputText}
            placeholder="Username kamu"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />

          {data.check_TextUsername ? (
            <Feather name="check-circle" size={20} color={color.yellow} />
          ) : null}
        </View>

        {/* // Input Form for Password */}
        <View style={styles.ViewInput}>
          <Icon name="lock" size={20} color={color.yellow} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.InputText}
            placeholder="Password kamu"
            placeholderTextColor="grey"
            onChangeText={val => handlePassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" size={20} color="grey" />
            ) : (
              <Feather name="eye" size={20} color={color.yellow} />
            )}
          </TouchableOpacity>
        </View>

        {/* // Input Form for ConfirmPassword */}
        <View style={styles.ViewInput}>
          <Icon name="lock" size={20} color={color.yellow} />
          <TextInput
            secureTextEntry={data.secureTextEntryConfirm ? true : false}
            style={styles.InputText}
            placeholder="Konfirmasi password"
            placeholderTextColor="grey"
            onChangeText={val => handleConfirmPassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntryConfirm}>
            {data.secureTextEntryConfirm ? (
              <Feather name="eye-off" size={20} color="grey" />
            ) : (
              <Feather name="eye" size={20} color={color.yellow} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => alert('login')}>
        <LinearGradient
          colors={['#F2C94C', '#F4A186']}
          style={styles.buttonMasuk}>
          <Text style={styles.buttonTextMasuk}>MASUK</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={{alignSelf: 'center', marginVertical: 10}}>
          Lupa Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 5,
            fontWeight: 'bold',
            marginVertical: 5,
          }}>
          Belum Punya Akun? <Text style={{color: color.yellow}}>Daftar</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const windowWidth = Dimensions.get('screen').width;
const radius_size = 15;
const button_height = 50;
const width_button = windowWidth - 60;
const styles = StyleSheet.create({
  IconStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    height: '100%',
    backgroundColor: color.white,
  },
  illustrationHeader: {
    alignSelf: 'center',
    height: '40%',
    width: '100%',
  },
  title: {
    marginTop: 30,
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.4,
    marginHorizontal: 30,
  },
  form: {
    marginVertical: 10,
  },
  ViewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderWidth: 2,
    marginTop: 10,
    borderColor: color.yellow,
    borderRadius: 23,
    paddingVertical: 2,
  },
  InputText: {
    alignItems: 'center',
    width: 270,
    paddingHorizontal: 10,
    color: color.black,
  },
  buttonMasuk: {
    alignSelf: 'center',
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
  buttonTextMasuk: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: color.white,
  },
});
