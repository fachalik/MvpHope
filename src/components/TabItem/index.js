import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import color from '../../assets/colors';
import {
  IconHomeActive,
  IconHome,
  IconChatActive,
  IconChat,
  IconAccountActive,
  IconAccount,
} from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'ChatBot')
      return isFocused ? <IconChatActive /> : <IconChat />;

    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;

    if (label === 'Account')
      return isFocused ? <IconAccountActive /> : <IconAccount />;

    return <IconChat />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />

      {label != 'ChatBot' ? (
        <Text style={styles.Text(isFocused)}>{label}</Text>
      ) : (
        <Text style={styles.Text(isFocused)}>Tanya Hope</Text>
      )}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color.soft_gray,
  },
  Text: isFocused => ({
    fontSize: 10,
    color: isFocused ? color.yellow : '#B1B1BF',
  }),
});
