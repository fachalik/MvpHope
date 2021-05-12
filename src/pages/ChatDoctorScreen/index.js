import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';
import {color} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {logo2} from '../../assets';
const ChatDoctorScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const BOT = {
    _id: 2,
    name: 'Hope',
    avatar: logo2,
  };
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Halo, ada yang bisa saya bantu?',
        createdAt: new Date(),
        user: BOT,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };
  const renderInputToolbar = props => {
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <Icon
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        textInputStyle={{color: colors.black}}
        placeholderTextColor={Colors.gray}
      />
    </View>
  );
};

export default ChatDoctorScreen;

const styles = StyleSheet.create({
  container: {},
  inputToolbar: {
    color: colors.yellow,
  },
});
