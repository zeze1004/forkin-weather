import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style = {styles.yellowView}>
        <Text>♥ 제제 ♥</Text>
      </View>
      
      <View style = {styles.blueView} >
      <Text>♥ 조아 ♥</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

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
