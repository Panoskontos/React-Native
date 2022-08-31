import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MyButton(){
    return(
        <>
        <Text style={styles.button}>
        Button
        </Text>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
      color:'white',
      fontSize:24,
      
      
     
    }
})