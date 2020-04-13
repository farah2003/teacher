import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Image, ImageBackground } from 'react-native';
import {Icon} from 'react-native-elements';
import * as firebase from 'firebase'
class profileTeacher extends Component {
  state = {
    name:""
     }
 
 
     componentDidMount(){
       const db = firebase.firestore();
  
       var user = firebase.auth().currentUser;
       let newList =[]
       let appname="ffff"
   
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
       <View>
        
        <Text style={styles.profile}> Your Profile </Text>
 
      
            <Image
                style={styles.image}
                source={require("../image.jpg")}
             > 
        
              </Image>  
             
              <Text style={styles.name}> {this.state.name} </Text>
              <TouchableOpacity
         style={styles.button}
         //onPress={}
       >
 {/* <ImageBackground source={{uid:'https://image.flaticon.com/icons/png/512/124/124642.png'}} style={{width: '100%', height: '100%'}}></ImageBackground>        */}
<Text style={styles.title}> Al Karmel High school  </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         //onPress={}
       >
         <Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>
         <Text style={styles.title}> Edit Profile </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         //onPress={}
       >
         <Text style={styles.title}> About the app </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         //onPress={}
       >
         <Text style={styles.title}> Phone Number </Text>
       </TouchableOpacity>

       </View>
     );
   }
 }
 const styles = StyleSheet.create({
 
   container: {
   flex: 1,
   
      
 
   backgroundColor: "white"
 },
 button:{
 marginLeft:30,
     justifyContent:'center',
     alignItems: 'center',
     backgroundColor:"white",
    height:50,
     width: 285,
     borderRadius:30,
     borderColor: "#34ace0",
     borderWidth:1,
     marginBottom:20,
    shadowColor:"#aaa69d",
    shadowRadius:10,
   },
   title:{
 color: '#03a9f4',
   },
 image:{
   marginTop:25,
     marginLeft:135,
        height: 100,
    width: 100,
      
        marginBottom:5,
 
        margin: 30,
        borderRadius:50
    },
    name:{
 marginRight:135,
 marginLeft:140,
      fontWeight:"bold",
      color:"red",
      fontSize:25,
    marginBottom:50
    },
    profile:{
     marginRight:140,
     marginTop:50,
     color: '#03a9f4',
     fontSize:16,
     fontWeight:"500"
    }
 })

 export default profileTeacher;
