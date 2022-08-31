import React from 'react'
import { StyleSheet, Text, View, Button,TouchableHighlight } from 'react-native';

export default function MyButton(props){
    const styles = StyleSheet.create({
        button: {
          color:'white',
          fontSize:24,
            paddingTop: 10,
            paddingBottom:10,
            paddingLeft:40,
            paddingRight:40,
            marginBottom:5,
            marginTop:10,
          backgroundColor:props.color,
          borderRadius:10,
        }
    })
    return(
        <>
        {/* <TouchableHighlight onPress={()=>alert('you pressed the button')}> */}

        <View style={styles.button}  >
            <Button 
            size="md" 
            title={props.title} 
            type="outline" 
            />
        </View>

            {/* </TouchableHighlight> */}
        </>
    )
}

