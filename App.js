

//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from "react-native"
//import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading"
import * as Location from "expo-location"
import axios from "axios"
import Weather from "./Weather"

const API_KEY = "760de756473d169602ac495a2d41a9b9"

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main : { temp }, 
          weather
        }
      }  = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      )
    //console.log(data)
    this.setState({
      isLoading:false,
      condition: weather[0].main, 
      temp
    })
  }
  
  getLocation = async() => {
    // try 구문에서 오류 생기면 catch로 이동: 에러 출력
    try {
      await Location.requestPermissionsAsync()
      // coords: 좌표
      const { 
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync()
      Alert.alert("found you")
      console.log("found you")
      // latitude: 위도, longitude: 경로
      // console.log(coords.latitude, coords.longitude)
      this.getWeather(latitude, longitude)
      this.setState( { 
        isLoading:false,
        condition: "Clear",
        temp: data.main.temp
      })
      //const location = await Location.getCurrentPositionAsync()
      // console.log(location)
      // Alert.alert("can find you")
      // send to API and get weather
    } catch (error) {
      Alert.alert("Can't find you")
      console.log("Can't find you")
    }      
  }
  componentDidMount(){
    this.getLocation()
  }
  render() {
    const { isLoading, temp, condition } = this.state
    return isLoading ? <Loading /> : <Weather  temp={Math.round(temp)} condition={condition} />
  }
} 
    
  //   (
  //   <View style={styles.container}>
      
  //     <View style = {styles.yellowView}>
  //       <Text>♥ 제제 ♥</Text>
  //     </View>
      
  //     <View style = {styles.blueView} >
  //     <Text>♥ 조아 ♥</Text>
  //     </View>
  //     {/* <StatusBar style="auto" /> */}
  //   </View>
  // );
  
// }

/*
const styles = StyleSheet.create({
  container: {
    // 플렉스 디폴트값이 컬럼이므로 row로 설정하면 일렬로 정렬
    flex: 1,
    //flexDirection: "row", 
    //backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // flex: 1 씩이면 각 색깔별 반씩 차지
  yellowView: {
    flex: 1, // 모든 공간 사용 가능
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
  // 스크린의 2/3을 가짐 
  blueView: {
    flex: 2,
    backgroundColor: "pink",
    alignItems: 'center',
    justifyContent: 'center'
  }
});
*/