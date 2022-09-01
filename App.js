
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import MyButton from './components/MyButton.js';
import MyBox from './components/MyBox.js';
import MainNumber from './components/MainNumber.js';


export default function App() {
 
  return (
    
    <View style={styles.appcontainer}>
     
        <MyBox color="#5ba0e7">
            <MainNumber />
            {/* <Text>Counter</Text> */}
            <MyButton title='+' color='aqua' />
            <MyButton title='-' color='aqua' />

        </MyBox>
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

});
