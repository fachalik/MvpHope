import React, {useState, useContext} from 'react';
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
import color from '../../assets/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../components/BackButton';
import {AuthContext} from '../../router/context';

const Register = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    ConfirmPassword: '',
    check_TextUsername: false,
    check_TextEmail: false,
    secureTextEntry: true,
    secureTextEntryConfirm: true,
  });

  const {SignUp} = useContext(AuthContext);

  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        check_TextUsername: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_TextUsername: false,
      });
    }
  };

  const textInputChangeEmail = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_TextEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_TextEmail: false,
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
      <View style={{marginVertical: 50}}>
        <BackButton navigation={navigation} />
        <Text style={styles.title}>Selamat Datang di Hope!</Text>
        <Text style={styles.text}>
          Buat akun menggunakan email dan username, atau pilih salah satu opsi
          dibawah
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

          {/* // Input Form for Email */}
          <View style={styles.ViewInput}>
            <Icon name="mail" size={20} color={color.yellow} />
            <TextInput
              style={styles.InputText}
              placeholder="Email kamu"
              placeholderTextColor="grey"
              autoCapitalize="none"
              onChangeText={val => textInputChangeEmail(val)}
            />

            {data.check_TextEmail ? (
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
        <TouchableOpacity
          onPress={() => {
            SignUp();
          }}>
          <LinearGradient
            colors={['#F2C94C', '#F4A186']}
            style={styles.buttonMasuk}>
            <Text style={styles.buttonTextMasuk}>Buat akun baru</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
const windowWidth = Dimensions.get('screen').width;
const radius_size = 15;
const button_height = 50;
const width_button = windowWidth - 60;
const styles = StyleSheet.create({
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
