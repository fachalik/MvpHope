import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../assets/colors';
const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>asd</Text>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.white,
  },
  wrapper:{
      marginHorizontal:30,
      marginVertical:50,
  }
});
