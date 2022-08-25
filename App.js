
// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const onPressLearnMore = () =>{
    alert("Click")
  }


  return (
    <View >
        <View style={styles.appcontainer}>
            <Text>Hello Panos!</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
  },
});
