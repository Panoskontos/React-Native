import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MyBox(props){
    const styles = StyleSheet.create({
        button: {
          width:200,
          backgroundColor:props.color,
          borderRadius:10,
          marginBottom:10,
          display:'flex',
          alignItems:'center',
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

