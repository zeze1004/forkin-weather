import React from "react"
import {StyleSheet, Text, View } from "react-native"

export default function Loading() {
    return ( 
    <View style={styles.container}>
        <Text>제제는 좆간지가 철철 흐르지</Text>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }

})