//노마드코더 1.1  2분부터 다시 보기

//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native"
//import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading"
import * as Location from "expo-location"


export default class extends React.Component {
  getLocation = async() => {
    // try 구문에서 오류 생기면 catch로 이동: 에러 출력
    try {
      await Location.requestPermissionsAsync()
      const { coords } = await Location.getCurrentPositionAsync()
      console.log(coords.latitude, coords.longitude)
      const location = await Location.getCurrentPositionAsync()
      // console.log(location)
      // Alert.alert("can find you")
    } catch (error) {
      Alert.alert("Can't find you")
    }      
  }
  componentDidMount(){
    this.getLocation()
  }
  render() {
  return <Loading />
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