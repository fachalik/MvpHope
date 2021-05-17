import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import color from '../../assets/colors';

const BackButton = ({navigation}) => {
  const GoBack = () => {
      navigation.pop();
  };
  return (
    <TouchableOpacity onPress={() => GoBack()}>
      <Icon
        style={styles.IconStyle}
        name="arrowleft"
        size={32}
        color={color.yellow}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  IconStyle: {
    marginTop: 20,
  },
});
