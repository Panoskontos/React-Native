
// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './MyButton';


export default function App() {
  const onPressLearnMore = () =>{
    alert("Click")
  }


  {/* <Text style={styles.title}>Hello Panos!</Text> */}
  return (
    <View style={styles.appcontainer}>
       

        <MyButton />
        <MyButton />
        <MyButton />
    
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'black',
    
    
   
  },
  // title: {
  //   color:'white',
  //   fontSize:24,
  // },

  // box1:{
  //   backgroundColor:'darkblue',
  //   flex:1,
   
  // },
  // box2:{
  //   backgroundColor:'yellow',
  //   flex:4,
  
  // },
  // box3:{
  //   backgroundColor:'red',
  //   flex:3,
    
  // },
});
