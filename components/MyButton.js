import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MyButton(){
    return(
        <>
        <View style={styles.button}  >
            <Button size="md" title="Button" type="outline" />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
      color:'white',
      fontSize:24,
        paddingTop: 20,
        paddingBottom:20,
        paddingLeft:40,
        paddingRight:40,
      backgroundColor:'white',
      borderRadius:10,
      
      
     
    }
})