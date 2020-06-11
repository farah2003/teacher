import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Image, ImageBackground } from 'react-native';
import {Icon} from 'react-native-elements';
import * as firebase from 'firebase'
class profileTeacher extends Component {
  static navigationOptions = {  
    title: 'profile',  
    
    headerTintColor: '#03a9f4',  
    headerTitleStyle: {  
       fontWeight: 'bold',  
    },  
};  
  state = {
    name:""
     }
 
 
     componentDidMount(){
       const db = firebase.firestore();
  
       var user = firebase.auth().currentUser;
   
       
       db.collection("name").doc(user.uid).get().then((userdoc) =>{
    
           
         console.log("uuuuuuuuuuu",userdoc.data())
         
       var name= (userdoc.data().name)
        console.log("nnnn",name)
    this.setState({
      name:name
        })
       
     })
     }
   render() {
     return (
       <View style={styles.container}>
        
    
   
 
      
            <Image
                style={styles.image}
                source={require("../image.jpg")}
             > 
        
              </Image>  

        <Text style={styles.title1}> Name </Text>
              <Text style={styles.info}> {this.state.name} </Text>


        <Text style={styles.title1}> email </Text>

        <Text style={styles.info}>{this.state.name}@gmsil.com </Text>
        <Text style={styles.title1}> phone </Text>

<Text style={styles.info}>05999999 </Text>
<Text style={styles.title1}> school</Text>

<Text style={styles.info}>Al Karmel High school  </Text>
 
             
            


       <TouchableOpacity
         style={styles.button}
         //onPress={}
       >
         <Text style={styles.title}> Edit profile </Text>
       </TouchableOpacity>

       </View>
     );
   }
 }
 const styles = StyleSheet.create({
 
   container: {
  
   
      backgroundColor:'white'
 

 },
 button:{
  marginLeft:'auto' ,
  marginRight: 'auto',
  marginTop:20,
  marginBottom:40,
     justifyContent:'center',
     alignItems: 'center',
     backgroundColor:"#03a9f4",
    height:50,
     width: 285,
     borderRadius:30,
     borderColor: "white",
     borderWidth:1,
     marginBottom:20,
    shadowColor:"#aaa69d",
    shadowRadius:10,
   },
   title:{

 color: 'white',

 fontSize:24
 
   },
   title1:{
    
     
    color: '#03a9f4',
    fontWeight:"bold",
    marginLeft:'5%',
    fontSize:16,
    
      },
 image:{


  marginLeft:'60%',
marginTop:20,
 
        height: 100,
    width: 100,
    marginBottom:20,
      borderWidth:3,
      borderColor:'#e6f2ff',
       
 
        borderRadius:50,
     
    },

    info:{
      marginLeft:'5%',
    marginTop:5,
      textAlign: 'left',
    
     
      fontSize:18,
      marginBottom: 20,
 
    
    },
  
 })

 export default profileTeacher;
