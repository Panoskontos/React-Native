import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MyButton(){
    return(
        <>
        
        <Button color="primary" size="md" title="Button" type="outline" />
        </>
    )
}

const styles = StyleSheet.create({
    button: {
      color:'white',
      fontSize:24,
      
      
     
    }
})