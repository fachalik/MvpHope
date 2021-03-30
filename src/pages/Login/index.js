import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style="styles.container">
            <Text>Login</Text>
            <Button
            title="Click Here"
            onPress={() => navigation.navigate("MainApp")}>

            </Button>
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
