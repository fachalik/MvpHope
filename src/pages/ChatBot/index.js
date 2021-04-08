import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import color from '../../assets/colors';

const ChatBot = () => {
    return (
        <View style={styles.container}>
            <Text style={{alignSelf:'center'}}>ChatBot</Text>
        </View>
    )
}

export default ChatBot

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:color.white,
    }
})
