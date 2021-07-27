import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import color from '../../assets/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import BackButton from '../../components/BackButton';
import {AuthContext} from '../../router/context';
import Loading from '../../components/Loading';
import colors from '../../assets/colors';
const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
    ConfirmPassword: '',
    check_TextEmail: false,
    secureTextEntry: true,
    emailIsEmpty: false,
    passwordIsEmpty: false,
  });
  const {SignIn} = React.useContext(AuthContext);
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
  const loginHandle = async (email, password) => {
    await setIsLoading(true);
    console.log(email, password);
    await SignIn(email, password);
    await setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={styles.wrapper}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.text}>
            Masuk dengan menggunakan e-mail atau salah satu opsi dibawah
          </Text>
          <View style={styles.form}>
            {/* // Input Form for Username */}
            <View style={styles.TextInput}>
              <Text style={{fontFamily: 'Karla-Medium'}}>Email</Text>
            </View>
            <View style={styles.ViewInput}>
              <TextInput
                style={styles.InputText}
                placeholder="Mohon masukkan e-mail anda"
                placeholderTextColor="grey"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={val => textInputChangeEmail(val)}
              />

              {data.check_TextEmail ? (
                <Feather name="check-circle" size={20} color={color.yellow} />
              ) : null}
            </View>

            {/* // Input Form for Password */}
            <View style={styles.TextInput}>
              <Text style={{fontFamily: 'Karla-Medium'}}>Kata sandi</Text>
            </View>
            <View style={styles.ViewInput}>
              <TextInput
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.InputText}
                placeholder="Mohon masukkan kata sandi anda"
                placeholderTextColor="grey"
                autoCapitalize="none"
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
            disabled={data.emailIsEmpty && data.passwordIsEmpty ? false : true}
            onPress={() => {
              loginHandle(data.email, data.password);
            }}>
            <View
              style={
                data.emailIsEmpty && data.passwordIsEmpty
                  ? styles.buttonMasuk
                  : styles.buttonMasukDisable
              }>
              <Text style={styles.buttonTextMasukDisable}>MASUK</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.other}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterStep1')}>
              <Text
                style={{
                  fontFamily: 'Karla-Regular',
                  marginVertical: 10,
                }}>
                Belum Punya Akun Hope?{' '}
                <Text
                  style={{color: color.orange, fontFamily: 'Karla-SemiBold'}}>
                  Daftar Sekarang
                </Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text
                style={{
                  fontFamily: 'Karla-SemiBold',
                  color: colors.orange,
                  marginVertical: 10,
                }}>
                Lupa Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {isLoading ? <Loading loading={isLoading} /> : null}
    </KeyboardAvoidingView>
  );
};

export default Login;
const windowWidth = Dimensions.get('screen').width;
const radius_size = 5;
const button_height = 50;
const width_button = windowWidth - 60;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: color.white,
  },
  wrapper: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  illustrationHeader: {
    alignSelf: 'center',
    height: '40%',
    width: '100%',
  },
  title: {
    marginTop: 30,
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
  },
  text: {
    width: 300,
    fontFamily: 'Karla-SemiBold',
    fontSize: 16,
    marginTop: 5,
    opacity: 0.4,
  },
  form: {
    marginVertical: 10,
  },
  ViewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 10,
    borderColor: color.gray,
    borderRadius: 5,
    paddingVertical: 5,
  },
  InputText: {
    flex: 1,
    alignItems: 'center',
    width: 270,
    height: 40,
    paddingHorizontal: 10,
    color: color.black,
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonMasuk: {
    alignSelf: 'center',
    backgroundColor: color.yellow,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: width_button,
    height: button_height,
    borderRadius: radius_size,
  },
  buttonMasukDisable: {
    alignSelf: 'center',
    backgroundColor: color.gray,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: width_button,
    height: button_height,
    borderRadius: radius_size,
  },
  buttonTextMasuk: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: color.white,
  },
  buttonTextMasukDisable: {
    fontSize: 16,
    fontFamily: 'Karla-Bold',
    color: color.white,
  },
  other: {
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
