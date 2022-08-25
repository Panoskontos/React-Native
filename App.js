
// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const onPressLearnMore = () =>{
    alert("Click")
  }


  return (
    <View style={styles.appcontainer}>

        <View >
            <Text style={styles.title}>Hello Panos!</Text>
      
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    height:'100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:'white',
    fontSize:24,
  },
});
