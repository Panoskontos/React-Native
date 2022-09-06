import React from 'react'
import { StyleSheet, Text, View, Button,TouchableHighlight } from 'react-native';

export default function MyButton(props){
    const styles = StyleSheet.create({
        button: {
          
          fontSize:24,
            paddingTop: 10,
            paddingBottom:10,
            paddingLeft:20,
            paddingRight:20,
            margin:5,
            marginBottom:15,
              backgroundColor:props.color,
            borderRadius:10,
        },

        insidebutton:{
            color:'white',
        }
    })
    return(
        <>
        {/* <TouchableHighlight onPress={()=>alert('you pressed the button')}> */}
        <TouchableHighlight onPress={()=>alert("What are you doin stupe?")}>

                    <View style={styles.button}  >
                        <Button 
                        size="md" 
                        title={props.title} 
                        type="outline" 
                        style={styles.insidebutton} 
                        />
                    </View>
            </TouchableHighlight>

            {/* </TouchableHighlight> */}
        </>
    )
}

