import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../assets/colors';

const Home = ({navigation}) => {
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 50}}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <View style={styles.box}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  box: {backgroundColor: 'black', height: 100, width: 100},
});
