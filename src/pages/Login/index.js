import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import {loginImage} from '../../assets';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={loginImage}/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
})
