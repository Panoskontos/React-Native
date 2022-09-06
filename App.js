
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
            
            <View style={styles.button_container}>

                <MyButton title='+' color='aqua' />
                <MyButton title='-' color='aqua' />
            
            </View>

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

  button_container:{
    display:'flex',
    flexDirection:'row'
  }

});
