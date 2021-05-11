import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Avatar from '../../assets/images';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = ({navigation}) => {
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />
        <View style={styles.headear}>
          <View>
            <Icon name="phone" style={styles.icon} size={32} />
          </View>
          <View>
            <Image source={Avatar}></Image>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <View style={styles.searchBar}></View>
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
  wrapper: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  searchBar: {
    backgroundColor: 'black',
    height: 40,
    width: 310,
    borderRadius: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'center',
  },
});
