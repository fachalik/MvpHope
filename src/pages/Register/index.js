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
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import color from '../../assets/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../components/BackButton';
import {AuthContext} from '../../router/context';
import Loading from '../../components/Loading';
import colors from '../../assets/colors';
import config from '../../../config';
import axios from 'react-native-axios';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
const Register = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertUsername, setAlertUsername] = useState('');
  const [alertEmail, setAlertEmail] = useState('');
  const [alertPassword, setAlertPassword] = useState('');
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    ConfirmPassword: '',
    check_TextUsername: false,
    check_TextEmail: false,
    secureTextEntry: true,
    secureTextEntryConfirm: true,
    usernameIsEmpty: false,
    emailIsEmpty: false,
    passwordIsEmpty: false,
    confirmPasswordIsEmpty: false,
  });

  const {SignUp} = useContext(AuthContext);

  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        check_TextUsername: true,
        usernameIsEmpty: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_TextUsername: false,
        usernameIsEmpty: false,
      });
    }
  };

  const textInputChangeEmail = val => {
    if (val.length != 0) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      );
      if (pattern.test(val)) {
        setData({
          ...data,
          email: val,
          check_TextEmail: true,
          emailIsEmpty: true,
        });
      }
    } else {
      setData({
        ...data,
        email: val,
        check_TextEmail: false,
        emailIsEmpty: false,
      });
    }
  };

  const handlePassword = val => {
    if (val.length > 7) {
      setData({
        ...data,
        password: val,
        passwordIsEmpty: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        passwordIsEmpty: false,
      });
    }
  };

  const handleConfirmPassword = val => {
    if (val.length > 7) {
      setData({
        ...data,
        ConfirmPassword: val,
        confirmPasswordIsEmpty: true,
      });
    } else {
      setData({
        ...data,
        ConfirmPassword: val,
        confirmPasswordIsEmpty: false,
      });
    }
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

  const RegisterHandle = async (username, email, password, ConfirmPassword) => {
    setIsLoading(true);
    // console.log(username, email, password, ConfirmPassword);
    await axios
      .post(config.API_URL + 'auth/register/', {
        username: username,
        email: email,
        password1: password,
        password2: ConfirmPassword,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data.username[0]);
        console.log(error.response.data.email[0]);
        console.log(error.response.data.password1);

      });
    // await SignUp(username, email, password, ConfirmPassword);
    console.log(config.API_URL);
    setIsLoading(false);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={{marginVertical: 50}}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Selamat Datang di Hope!</Text>
          <Text style={styles.text}>
            Buat akun menggunakan email dan username, atau pilih salah satu opsi
            dibawah
          </Text>
          <View style={styles.form}>
            {/* // Input Form for Username */}
            <View style={styles.TextInput}>
              <Text st>Nama Pengguna</Text>
            </View>
            <View style={styles.ViewInput}>
              <Icon name="user" size={20} color={color.yellow} />
              <TextInput
                style={styles.InputText}
                placeholder="Mohon masukkan nama pengguna anda"
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
              />

              {data.check_TextUsername ? (
                <Feather name="check-circle" size={20} color={color.yellow} />
              ) : null}
            </View>
            {alertUsername != '' ? (
              <View style={styles.TextInput}>
                <Text>{alertUsername}</Text>
              </View>
            ) : null}

            {/* // Input Form for Email */}
            <View style={styles.TextInput}>
              <Text style={{fontFamily: 'Karla-Medium'}}>Email</Text>
            </View>
            <View style={styles.ViewInput}>
              <Icon name="mail" size={20} color={color.yellow} />
              <TextInput
                style={styles.InputText}
                placeholder="Mohon masukkan email anda"
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={val => textInputChangeEmail(val)}
              />

              {data.check_TextEmail ? (
                <Feather name="check-circle" size={20} color={color.yellow} />
              ) : null}
            </View>
            {alertEmail != '' ? (
              <View style={styles.TextInput}>
                <Text>{alertEmail}</Text>
              </View>
            ) : null}

            {/* // Input Form for Password */}
            <View style={styles.TextInput}>
              <Text style={{fontFamily: 'Karla-Medium'}}>Kata sandi</Text>
            </View>
            <View style={styles.ViewInput}>
              <Icon name="lock" size={20} color={color.yellow} />
              <TextInput
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.InputText}
                placeholder="Mohon masukkan kata sandi anda"
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
            <View style={styles.TextInput}>
              <Text
                style={{
                  fontFamily: 'Karla-Regular',
                  fontSize: 12,
                  color: colors.gray_dark,
                }}>
                Minimal 8 Karakter dengan huruf besar dan angka
              </Text>
            </View>
            {alertPassword != '' ? (
              <View style={styles.TextInput}>
                <Text>{alertPassword}</Text>
              </View>
            ) : null}

            {/* // Input Form for ConfirmPassword */}
            <View style={styles.TextInput}>
              <Text style={{fontFamily: 'Karla-Medium'}}>
                Konfirmasi kata sandi
              </Text>
            </View>
            <View style={styles.ViewInput}>
              <Icon name="lock" size={20} color={color.yellow} />
              <TextInput
                secureTextEntry={data.secureTextEntryConfirm ? true : false}
                style={styles.InputText}
                placeholder="Mohon masukkan kata sandi anda"
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
            disabled={
              data.usernameIsEmpty &&
              data.passwordIsEmpty &&
              data.emailIsEmpty &&
              data.confirmPasswordIsEmpty
                ? false
                : true
            }
            onPress={() => {
              RegisterHandle(
                data.username,
                data.email,
                data.password,
                data.ConfirmPassword,
              );
            }}>
            <View
              style={
                data.usernameIsEmpty &&
                data.passwordIsEmpty &&
                data.emailIsEmpty &&
                data.confirmPasswordIsEmpty
                  ? styles.buttonMasuk
                  : styles.buttonMasukDisable
              }>
              <Text style={styles.buttonTextMasuk}>Buat akun baru</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isLoading ? <Loading loading={isLoading} /> : null}
    </KeyboardAvoidingView>
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
    borderRadius: 10,
    paddingVertical: 2,
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 10,
  },

  InputText: {
    width: 210,
    paddingHorizontal: 10,
    color: color.black,
  },
  buttonMasuk: {
    alignSelf: 'center',
    backgroundColor: color.yellow,
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
  buttonMasukDisable: {
    alignSelf: 'center',
    backgroundColor: color.gray,
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
