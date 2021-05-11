import React, {useState, useEffect} from 'react';
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
const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState('');
  const [data, setData] = useState({
    username: '',
    password: '',
    ConfirmPassword: '',
    check_TextUsername: false,
    secureTextEntry: true,
    usernameIsEmpty: false,
    passwordIsEmpty: false,
  });
  const {SignIn} = React.useContext(AuthContext);
  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        username: val,
        usernameIsEmpty: true,
        check_TextUsername: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        usernameIsEmpty: false,
        check_TextUsername: false,
      });
    }
  };

  const handlePassword = val => {
    if (val.length != 0) {
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

  const updateSecureTextEntry = val => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = async (username, password, ConfirmPassword) => {
    setIsLoading(true);
    console.log(username, password, ConfirmPassword);
    await SignIn(username, password, ConfirmPassword);
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={{marginVertical: 50}}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Selamat Datang!</Text>
          <Text style={styles.text}>
            Masuk dengan menggunakan Username atau salah satu opsi dibawah ini
          </Text>
          <View style={styles.form}>
            {/* // Input Form for Username */}
            <View style={styles.TextInput}>
              <Text style={{fontFamily: 'Karla-Medium'}}>Email</Text>
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
          </View>

          <TouchableOpacity
            disabled={
              data.usernameIsEmpty && data.passwordIsEmpty ? false : true
            }
            onPress={() => {
              loginHandle(data.username, data.password, data.ConfirmPassword);
            }}>
            <View
              style={
                data.usernameIsEmpty && data.passwordIsEmpty
                  ? styles.buttonMasuk
                  : styles.buttonMasukDisable
              }>
              <Text style={styles.buttonTextMasukDisable}>MASUK</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
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
              Belum Punya Akun?{' '}
              <Text style={{color: color.yellow}}>Daftar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isLoading ? <Loading loading={isLoading} /> : null}
    </KeyboardAvoidingView>
  );
};

export default Login;
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
    flex: 1,
    alignItems: 'center',
    width: 270,
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
  buttonTextMasukDisable: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: color.white,
  },
});
