
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import MyButton from './components/MyButton.js';
import MyBox from './components/MyBox.js';

export default function App() {
  const onPressLearnMore = () =>{
    alert("Click")
  }


  const [name, setName] = useState('')
  const [lname, setLName] = useState('')


  {/* <Text style={styles.title}>Hello Panos!</Text> */}
  return (
    
    <View style={styles.appcontainer}>
      {/* <ScrollView> */}

       
        <MyBox color='white'>
            <Text style={styles.label}  >
              First Name
            </Text>
            <TextInput style={styles.TextInput} value={name} onChangeText={setName}></TextInput>
            <Text style={styles.label}>
              Last Name
            </Text>
            <TextInput style={styles.TextInput} value={lname} onChangeText={setLName}></TextInput>

            <Button title='submit' onPress={()=>alert('Hello '+name+' '+lname)} />

        </MyBox>

   

      {/* </ScrollView> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'black',
    
    
   
  },

  label: {
    color:'black',
    fontSize:14,
  },

  TextInput:{
    backgroundColor:'lightgrey',
    fontSize:14,
    padding:10,
    borderRadius:10,
    marginTop:10,
    marginBottom:10,
    width:180
  }
  // title: {
  //   color:'white',
  //   fontSize:24,
  // },

  // box1:{
  //   backgroundColor:'darkblue',
  //   flex:1,
   
  // },
  // box2:{
  //   backgroundColor:'yellow',
  //   flex:4,
  
  // },
  // box3:{
  //   backgroundColor:'red',
  //   flex:3,
    
  // },
});
