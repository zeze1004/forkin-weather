import React from "react"
import {StyleSheet, Text, View, StatusBar } from "react-native"

export default function Loading() {
    return ( 
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style ={styles.text} >학습공동체 자기개발서 팀 화이팅</Text>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "pink"
    },
    text :{
        color: "white",
        fontSize: 30
    }

})