import React, { Component } from 'react';
import {View ,StyleSheet,TextInput,Button,CheckBox,ScrollView,TouchableOpacity,Picker} from 'react-native';
import { Text } from 'native-base';
import * as firebase from 'firebase'

export default class StudentSign extends Component {
  static navigationOptions = {  
    title: '  Student sign in',  
    
    headerTintColor: '#03a9f4',  
    headerTitleStyle: {  
       fontWeight: 'bold',  
    },  
}; 
  state={
    name:"",
    email:"",
    password:""
  }
   sign=()=>{
      var email=this.state.email
      var password=this.state.password
      var name=this.state.name
      firebase.auth().createUserWithEmailAndPassword(email,
        password).catch(function (error) {
          var errorM = error.code;
        
          console.log('eee',errorM)
             // ...
         }).then(()=>{
          var email=this.state.email
      var password=this.state.password
      var name=this.state.name
         let user=firebase.auth().currentUser;
    
    const db = firebase.firestore()
         db.collection("namestudent").doc(user.uid).set({
            name:name,
           userId:user.uid,
            email:email,
            password:password
    }) 
  }).then(()=>{
      
          
          this.props.navigation.navigate("StudentHome");
         })

   
    
}  
log=()=>{
  this.props.navigation.navigate("Studentlogin");
  
}  

 
 render() {
       
          return (
            <ScrollView >
               <TextInput
       	style={styles.textInput1}
       placeholder="Enter ur name"
       onChangeText={t=>{
           this.setState({name:t});
           
       }}
       value={this.state.name}
       ></TextInput>
                     <TextInput
       	style={styles.textInput}
       placeholder="Enter ur email"
       onChangeText={t=>{
           this.setState({email:t});
           
       }}
       value={this.state.email}
       ></TextInput>
       <TextInput
       	style={styles.textInput}
       placeholder="Enter ur password"
       onChangeText={t=>{
           this.setState({password:t});
           
       }}
       value={this.state.password}
       ></TextInput>
       

<TouchableOpacity
           style={styles.button}
           onPress={()=>this.sign()}
         >
           <Text  style={styles.title}> sign as student  </Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button1}
           onPress={()=>this.log()}
         >
           <Text  style={styles.title1}> have acount </Text>
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
  marginTop:120,
  margin: 15,
 marginLeft:'auto' ,
 marginRight: 'auto',
  fontSize: 18,
  textAlign: "center",
  width: 320,
  borderColor: "gray",
  borderRadius:30,
  borderWidth: 1,
 
  height:50,
},
textInput: {
  margin: 15,
  marginLeft:'auto' ,
 marginRight: 'auto',
  fontSize: 18,
  textAlign: "center",
  width: 320,
  borderColor: "gray",
  borderRadius:30,
  borderWidth: 1,
  marginBottom:20,
  height:50,
},
button: {
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
button1: {
  marginTop:10,

    justifyContent:'center',
    alignItems: 'center',
    marginLeft:'auto' ,
 marginRight: 'auto',
   height:20,
    width: 285,

    
  },
title:{
color:"white"
},

title1:{
  color:"#03a9f4",
  fontSize:20
  },
  

})