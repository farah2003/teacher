import React, { Component } from 'react';
import {View ,StyleSheet,TextInput,Button,CheckBox,ScrollView,TouchableOpacity,Picker,Image} from 'react-native';
import { Text } from 'native-base';
import { auth } from 'firebase';
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
    <Image 
    style={styles.image}
      source={require("./image1.jpg")}></Image>
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
  marginLeft:'auto' ,
  marginRight: 'auto',
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
  marginTop:80,  
  marginLeft:'auto' ,
  marginRight: 'auto',
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
image:{
  marginLeft:'auto' ,
  marginRight: 'auto',
  marginTop:120,
    
       height: 200,
   width: 200,
     
       marginBottom:5,

       
       borderRadius:50
   }

})