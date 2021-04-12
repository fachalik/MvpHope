import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

const ChatBotScreen = ({navigation}) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
    </View>
  );
};

export default ChatBotScreen;

const styles = StyleSheet.create({
  container:{
    
  }
});
