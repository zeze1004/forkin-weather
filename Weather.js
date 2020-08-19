import React from 'react';
import { View, Text, StyleSheet, StatusBar }from "react-native"
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import{ LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
   
    Thunderstorm: {
        iconName:
        gradient:
    },
    Drizzle: {
        iconName:
        gradient:
    },
    Rain: {
        iconName:
        gradient:
    },
    Snow: {
        iconName:
        gradient:
    },
    Atomsphere: {
        iconName:
        gradient:
    },
    Clear: {
        iconName:
        gradient:
    },
    Clouds: {
        iconName:
        gradient:
    },
    Mist: {
        iconName:
        gradient:
    },
    Dust: {
        iconName:
        gradient:
    },
}

export default function Weather({temp,condition}){
    return (
        <LinearGradient
          // Background Linear Gradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
        >
            <StatusBar barStyle="light-content" />
        <View style = {styles.halfContainer}>
            <MaterialCommunityIcons 
                size={200} 
                name= {weatherOptions[condition].iconName}
                color="white"
            />
            <Text style={styles.temp}>{temp}도</Text>
            <Text style={styles.zeze}>제제짱❤</Text>
            </View>
            <View style = {styles.halfContainer} />
          </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain",
        "Snow",
        "Atomsphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 60,
        color:"white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    zeze: {
        fontSize: 20,
        color:"pink"
    }
})