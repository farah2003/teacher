import React, { Component } from 'react';
import {View ,StyleSheet,TextInput,Button,CheckBox,ScrollView,TouchableOpacity,Picker} from 'react-native';
import { Text } from 'native-base';
export default class Main extends Component {
 teacher=()=>{
    this.props.navigation.navigate("Teacher");

  }  
  student=()=>{
    this.props.navigation.navigate("Student");    
}
   
  render() {
   
      return (
        <ScrollView >
    
         
         <TouchableOpacity
           style={styles.button}
           
           onPress={()=>this.teacher()}
         >
           <Text  style={styles.title}> sign as teacher  </Text>
         </TouchableOpacity>
          
         <TouchableOpacity
           style={styles.button1}
           onPress={()=>this.student()}
         >
           <Text  style={styles.title}> sign as student  </Text>
         </TouchableOpacity>
        </ScrollView>
        
      );
    } 
}
const styles = StyleSheet.create({

  container: {
  flex: 1,

     

  backgroundColor: "white"
},

button1: {
  marginTop:25,  
marginLeft:30,
  justifyContent:'center',
  alignItems: 'center',
  backgroundColor: '#03a9f4',
 height:50,
  width: 285,
  borderRadius:30,
  borderColor: "#4CAF50",
  marginBottom:20
  
},
button: {
  marginTop:350,  
marginLeft:30,
  justifyContent:'center',
  alignItems: 'center',
  backgroundColor: '#03a9f4',
 height:50,
  width: 285,
  borderRadius:30,
  borderColor: "#4CAF50",
  marginBottom:20
  
},
title:{
color:"white"
},
text:{
fontSize:30,
marginRight:15,
color:"#03a9f4",
marginBottom:20
},

})