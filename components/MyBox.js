import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MyBox(props){
    const styles = StyleSheet.create({
        button: {
          padding:20,
          backgroundColor:props.color,
          borderRadius:10,
          marginBottom:10
        }
    })
    return(
        <>
        <View style={styles.button}  >
            {props.children}
        </View>
        </>
    )
}

