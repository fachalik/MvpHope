import React from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import colors from '../../assets/colors';
import {logo2, Option1, Option2, Option3} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ChatBot = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={styles.wrapper}>
        <Text style={styles.Title}>Konsultasi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 34,
  },
  wrapper: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  Title: {
    fontFamily: 'Karla-Bold',
    fontSize: 24,
  },
});

export default ChatBot;
