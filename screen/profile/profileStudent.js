import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import * as firebase from 'firebase'
class profileStudent extends Component {
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
         <Text style={styles.title}> My account settings  </Text>
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
         <Text style={styles.title}> connect us </Text>
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
  marginLeft:'auto' ,
  marginRight: 'auto',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:"white",
   height:50,
    width: 285,
    borderRadius:50,
    borderColor: "#03a9f4",
    borderWidth:2,
    marginBottom:20
    
  },
  title:{
color: '#03a9f4',
  },
image:{
  marginLeft:'auto' ,
  marginRight: 'auto',
       height: 100,
   width: 100,
     
       marginBottom:5,

       margin: 30,
       borderRadius:50
   },
   name:{
    marginLeft:'auto' ,
    marginRight: 'auto',

   
  
     fontSize:20,
   marginBottom:50,
   },

})
export default profileStudent;
