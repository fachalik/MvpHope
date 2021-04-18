import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import {AuthContext} from '../../router/context';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Account = ({navigation}) => {
  const {SignOut} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity
          onPress={() => {
            SignOut();
          }}>
          <View style={{marginVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 30,
                paddingHorizontal: 10,
                marginTop: 10,
                paddingVertical: 2,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 1,
                height: 100,
              }}>
              <View style={{flex: 0.2}}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: colors.gray,
                  }}>
                  <Icon name="logout" style={styles.icon} size={22} />
                </View>
              </View>
              <Text
                style={{
                  flex: 0.8,
                  alignItems: 'center',
                  width: 270,
                  paddingHorizontal: 50,
                  color: colors.black,
                  fontFamily: 'Karla-Bold',
                  fontSize: 16,
                }}>
                Log Out
              </Text>
              <FeatherIcon name="chevron-right" style={styles.icon} size={22} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 30,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Karla-Bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  menuWrapper: {
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
    marginVertical: 8,
    color: colors.black,
  },
});
{
  /* <TouchableOpacity
        onPress={() => {
          SignOut();
        }}>
        <Text style={{fontSize: 20, fontFamily: 'bold'}}>Logout</Text>
      </TouchableOpacity> */
}
