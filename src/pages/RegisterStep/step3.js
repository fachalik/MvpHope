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
  ActivityIndicator,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
const RegisterStep3 = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertUsername, setAlertUsername] = useState('');
  const [alertEmail, setAlertEmail] = useState('');
  const [alertPassword, setAlertPassword] = useState('');
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    Job: '',
    DailyActivity: '',
    check_TextFirstName: false,
    check_TextLastName: false,
    check_TextJob: false,
    check_TextDailyActivity: false,
    FirstNameIsEmpty: false,
    LastNameIsEmpty: false,
    JobIsEmpty: false,
    DailyActivityIsEmpty: false,
  });

  const {SignUp} = useContext(AuthContext);

  const FirstNameChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        FirstName: val,
        check_TextFirstName: true,
        FirstNameIsEmpty: true,
      });
    } else {
      setData({
        ...data,
        FirstName: val,
        check_TextFirstName: false,
        FirstNameIsEmpty: false,
      });
    }
  };

  const LasttNameChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        LastName: val,
        check_TextLastName: true,
        LastNameIsEmpty: true,
      });
    } else {
      setData({
        ...data,
        LastName: val,
        check_TextLastName: false,
        LastNameIsEmpty: false,
      });
    }
  };

  const JobChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        Job: val,
        check_TextJob: true,
        JobIsEmpty: true,
      });
    } else {
      setData({
        ...data,
        Job: val,
        check_TextJob: false,
        JobIsEmpty: false,
      });
    }
  };

  const DailyActivityChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        DailyActivity: val,
        check_TextDailyActivity: true,
        DailyActivityIsEmpty: true,
      });
    } else {
      setData({
        ...data,
        Job: val,
        check_TextDailyActivity: false,
        DailyActivityIsEmpty: false,
      });
    }
  };

  const RegisterHandle = async (FirstName, LastName, Job, DailyActivity) => {
    setIsLoading(true);
    // console.log(username, email, password, ConfirmPassword);
    // await axios
    //   .post(config.API_URL + 'auth/register/', {
    //     username: username,
    //     email: email,
    //     password1: password,
    //     password2: ConfirmPassword,
    //   })
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error.response.data.username[0]);
    //     console.log(error.response.data.email[0]);
    //     console.log(error.response.data.password1);
    //   });
    // // await SignUp(username, email, password, ConfirmPassword);
    // console.log(config.API_URL);
    await setIsLoading(true);
    setTimeout(async () => {
      try {
        await AsyncStorage.mergeItem(
          'formStep1',
          JSON.stringify({
            FirstName: FirstName,
            LastName: LastName,
            Job: Job,
            DailyActivity: DailyActivity,
          }),
        );
        const jsonValue = await AsyncStorage.getItem('formStep1');
        await console.log(JSON.parse(jsonValue));
      } catch (e) {
        console.log(e);
      }
      await setIsLoading(false);
      navigation.navigate('RegisterStep3');
    }, 1000);
    // GETDATA ASYNCRONUSSTORAGEF
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={styles.wrapper}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Informasi Pribadi</Text>
          <View style={styles.form}>
            {/* // Input Form for FirstName */}
            <View style={styles.TextInput}>
              <Text st>Tinggi Badan</Text>
            </View>
            <View style={styles.ViewInput}>
              <Icon name="user" size={20} color={color.yellow} />
              <TextInput
                style={styles.InputText}
                placeholder="Mohon masukkan tinggi badan anda"
                keyboardType="decimal-pad"
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={val => FirstNameChange(val)}
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

            {/* // Input Form for LastName */}
            <View style={styles.TextInput}>
              <Text st>Berat Badan</Text>
            </View>
            <View style={styles.ViewInput}>
              <Icon name="user" size={20} color={color.yellow} />
              <TextInput
                style={styles.InputText}
                placeholder="Mohon masukkan berat badan anda"
                keyboardType="decimal-pad"
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={val => LasttNameChange(val)}
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

            {/* // Input Form for Job */}
            <View style={styles.TextInput}>
              <Text st>Riwayat Penyakit</Text>
            </View>
            <View style={styles.ViewInput}>
              <Icon name="user" size={20} color={color.yellow} />
              <TextInput
                style={styles.InputText}
                placeholder="Mohon masukkan riwayat penyakit anda"
                placeholderTextColor="grey"
                autoCapitalize="none"
                onChangeText={val => JobChange(val)}
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
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            disabled={
              data.FirstNameIsEmpty &&
              data.LastNameIsEmpty &&
              data.JobIsEmpty &&
              data.DailyActivityIsEmpty
                ? false
                : true
            }
            onPress={() => {
              RegisterHandle(
                data.FirstName,
                data.LastName,
                data.Job,
                data.DailyActivity,
              );
            }}>
            <View
              style={
                data.FirstNameIsEmpty &&
                data.LastNameIsEmpty &&
                data.JobIsEmpty &&
                data.DailyActivityIsEmpty
                  ? styles.buttonMasuk
                  : styles.buttonMasukDisable
              }>
              {isLoading ? (
                <ActivityIndicator color={'white'} size="large" />
              ) : (
                <Text style={styles.buttonTextMasuk}>Buat Akun borderTopLeftRadius</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* {isLoading ? <Loading loading={isLoading} /> : null} */}
    </KeyboardAvoidingView>
  );
};

export default RegisterStep3;
const windowWidth = Dimensions.get('screen').width;
const radius_size = 15;
const button_height = 50;
const width_button = windowWidth - 60;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  wrapper: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  button: {},
  illustrationHeader: {
    alignSelf: 'center',
    height: '40%',
    width: '100%',
  },
  title: {
    marginTop: 30,
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
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
    marginTop: 10,
  },

  InputText: {
    width: 270,
    paddingHorizontal: 10,
    color: color.black,
  },
  buttonMasuk: {
    flex: 1,
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
    flex: 1,
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
