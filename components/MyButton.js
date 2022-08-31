import React from 'react'
import { StyleSheet, Text, View, Button,TouchableHighlight } from 'react-native';

export default function MyButton(props){
    const styles = StyleSheet.create({
        button: {
          color:'white',
          fontSize:24,
            paddingTop: 20,
            paddingBottom:20,
            paddingLeft:40,
            paddingRight:40,
            marginBottom:5,
          backgroundColor:props.color,
          borderRadius:10,
        }
    })
    return(
        <>
        <TouchableHighlight onPress={()=>alert('you pressed the button')}>

        <View style={styles.button}  >
            <Button 
            size="md" 
            title={props.title} 
            type="outline" 
            // onPress={()=>alert("Press Button")}
            />
        </View>

            </TouchableHighlight>
        </>
    )
}

