import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../../../assets/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EditProfile = () => {
  const [choice, setChoice] = useState(true);
  const On = () => {
    setChoice(false);
  };
  const Off = () => {
    setChoice(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.choice}>
          <TouchableOpacity
            onPress={() => {
              {
                choice ? On() : Off();
              }
            }}>
            <View style={choice ? styles.button : styles.buttonOff}>
              <Text style={choice ? styles.titleButton : styles.titleButtonOff}>
                Akun
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              {
                choice ? On() : Off();
              }
            }}>
            <View style={choice ? styles.buttonOff : styles.button}>
              <Text style={choice ? styles.titleButtonOff : styles.titleButton}>
                Biodata
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>{choice ? <Text>Akun</Text> : <Text>Biodata</Text>}</View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginHorizontal: 30,
  },
  choice: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    width: wp('40%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
  },
  buttonOff: {
    width: wp('40%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  titleButton: {
    color: colors.white,
    fontFamily: 'Karla-Bold',
  },
  titleButtonOff: {
    color: colors.black,
    fontFamily: 'Karla-Bold',
  },
  header: {
    backgroundColor: colors.gray,

    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Karla-Bold',
    fontSize: 16,
  },
  contents: {
    fontFamily: 'Karla-Regular',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'justify',
  },
  bigTitle: {
    fontFamily: 'Karla-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: colors.gray,
    paddingTop: 20,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 200,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },
});
