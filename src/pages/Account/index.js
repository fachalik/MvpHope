import React,{useContext}from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../router/context';

const Account = ({navigation}) => {
  const {SignOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <TouchableOpacity onPress={() => {SignOut()}}>
        <Text style={{fontSize: 20, fontFamily: 'bold'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
