
// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyButton from './components/MyButton.js';
import MyBox from './components/MyBox.js';

export default function App() {
  const onPressLearnMore = () =>{
    alert("Click")
  }


  {/* <Text style={styles.title}>Hello Panos!</Text> */}
  return (
    
    <View style={styles.appcontainer}>
      {/* <ScrollView> */}

       
        <MyBox color='white'>

          <MyButton title="save" color="lightblue"/>
          <MyButton title="reset" color="aqua"/>
          <MyButton title="back" color="pink"/>
        </MyBox>

   

      {/* </ScrollView> */}
    
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
