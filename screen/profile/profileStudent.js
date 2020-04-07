import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import * as firebase from 'firebase'
class profileStudent extends Component {
 state = {
   name:""
    }


    componentDidMount(){
      const db = firebase.firestore();
 
      var user = firebase.auth().currentUser;
      let newList =[]
      let appname="ffff"
  
      db.collection("namestudent").doc(user.uid).get().then((userdoc) =>{
   
          
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
       
       <Text style={styles.profile}> Touch Here </Text>

     
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
         <Text style={styles.title}> Touch Here </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         //onPress={}
       >
         <Text style={styles.title}> Touch Here </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         //onPress={}
       >
         <Text style={styles.title}> Touch Here </Text>
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
    borderColor: "#4CAF50",
    borderWidth:1,
    marginBottom:20
    
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
     fontWeight:"bold",
     color:"red",
     fontSize:16,
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
export default profileStudent;
