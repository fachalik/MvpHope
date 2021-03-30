import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Onboarding = ({navigation}) => {
    return (
        <View style="styles.container">
            <Text>Onboarding</Text>
            <Button
            title="Click Here"
            onPress={() => navigation.navigate("Login")}>

            </Button>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
})
