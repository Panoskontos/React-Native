import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MainNumber(props){
    const styles = StyleSheet.create({
        button: {
          padding:20,
          backgroundColor:"#5ba0e7",
          borderRadius:10,
          marginBottom:10,
          
        },

        textstyle:{
            // fontWeight:0.9,
            fontSize:100,

        }
    })
    return(
        <>
        <View style={styles.button}  >
            <Text style={styles.textstyle}>{props.children}</Text>
        </View>
        </>
    )
}

