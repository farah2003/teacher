import React, { Component } from 'react';
import {View ,StyleSheet,TextInput,Button,CheckBox,ScrollView,TouchableOpacity,Picker} from 'react-native';
import { Text } from 'native-base';
import * as firebase from 'firebase'
export default class StudentLog extends Component {
  static navigationOptions = {
    header : null   
 };
  state={
   email:"",
   password:""
  }
    log=()=>{
      var email=this.state.email
      var password=this.state.password
        
        firebase.auth().signInWithEmailAndPassword(email,
          password).catch(function (error) {
             // Handle Errors here.
             var errorM = error.code;
             console.log(errorM)
             // ...
         }).catch(function (error) {
                 console.error("Error adding document: ", error);
             }).then(()=>{this.props.navigation.navigate("StudentHome");

             }
             )
    
      }  
    
       
      render() {
       
        return (
          <ScrollView >
             <TextInput
       style={styles.textInput1}
     placeholder="enter ur email"
     onChangeText={t=>{
         this.setState({email:t});
         
     }}
     value={this.state.email}
     ></TextInput>
     <TextInput
       style={styles.textInput}
     placeholder="enter ur password"
     onChangeText={t=>{
         this.setState({password:t});
         
     }}
     value={this.state.password}
     ></TextInput>
     

<TouchableOpacity
         style={styles.button}
         onPress={()=>this.log()}
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
textInput1: {
marginTop:220,
margin: 24,
padding: 10,
fontSize: 18,
textAlign: "center",
width: 320,
borderColor: "gray",
borderRadius:30,
borderWidth: 1,
marginLeft:20,
height:50,
},
textInput: {
margin: 24,
padding: 10,
fontSize: 18,
textAlign: "center",
width: 320,
borderColor: "gray",
borderRadius:30,
borderWidth: 1,
marginLeft:20,
height:50,
},
button: {
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


})