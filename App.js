
// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const onPressLearnMore = () =>{
    alert("Click")
  }


  {/* <Text style={styles.title}>Hello Panos!</Text> */}
  return (
    <View style={styles.appcontainer}>
        <View style={styles.box1}>
        </View>
        <View style={styles.box2}>
        </View>
        <View style={styles.box3}>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    height:'100%',
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    color:'white',
    fontSize:24,
  },

  box1:{
    backgroundColor:'darkblue',
    height:40,
    width:'50%',
  },
  box2:{
    backgroundColor:'yellow',
    height:40,
    width:'50%',
  },
  box3:{
    backgroundColor:'red',
    height:40,
    width:'50%',
  },
});
