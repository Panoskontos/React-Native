
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
    
    
   
  },
  title: {
    color:'white',
    fontSize:24,
  },

  box1:{
    backgroundColor:'darkblue',
    flex:1,
   
  },
  box2:{
    backgroundColor:'yellow',
    flex:4,
  
  },
  box3:{
    backgroundColor:'red',
    flex:3,
    
  },
});
