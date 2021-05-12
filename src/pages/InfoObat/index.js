import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InfoObat = ({route, navigation}) => {
  const request = route.params;
  console.log(request.request)
  return (
    <View style={styles.container}>
      <Text>InfoObat</Text>
    </View>
  );
};

export default InfoObat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
