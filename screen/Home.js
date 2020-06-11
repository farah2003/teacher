import React, { Component } from 'react';

import {View ,StyleSheet,TextInput,Button,CheckBox,ScrollView,TouchableOpacity,Picker} from 'react-native';


import {Card,  CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';

import * as firebase from "firebase";
import 'firebase/firestore';
import { Text } from 'native-base';
export default class Fill extends Component {
  static navigationOptions = {  
    title: 'Fill in',  
    
    headerTintColor: '#03a9f4',  
    headerTitleStyle: {  
       fontWeight: 'bold',  
    },  
};  
state={
  appName:'',
name:'',
valueGrade:'',
age:"",
phone:'',
price:'',
grade:'',
address:'',
valueArea:"",
valuesub:""
}
componentWillMount(){
  let user=firebase.auth().currentUser;
  firebase.firestore().doc(`name/${user.uid}`).get().then((doc)=>{
           
      
            
  

   let appname= doc.data().name
   console.log("appname",appname)
  
   this.setState({
    appName:appname
   })

});
}


select=(itemValue, itemIndex)=>{

    this.setState({ 
    value: itemValue,
     
      inindex: itemIndex })
  }
addData=()=>{

    const db = firebase.firestore().collection("teacher");
   

    db.add({
        
   
    Name: this.state.name,
   
   age:this.state.age,
   
    valueArea:this.state.valueArea,
    value:this.state.valuesub,
    valueGrade:this.state.valueGrade,
       Phone:this.state.phone,
       Age:this.state.age,
        price:this.state.price,
        address:this.state.address


    }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
    

   
  
  }


  render() {
  const {name}=this.state.name
    return (
      <ScrollView style={styles.container}>
          
       <TextInput
       	style={styles.textInput}
       placeholder="enter ur name"
       onChangeText={t=>{
           this.setState({name:t});
           
       }}
       value={this.state.name}
       ></TextInput>


<TextInput
       	style={styles.textInput}
       placeholder="enter ur age"
       onChangeText={text=>{
           this.setState({age:text})
       }}
       />


<TextInput
       	style={styles.textInput}
       placeholder="enter ur phone"
       onChangeText={text=>{
           this.setState({phone:text})
       }}
       />



<TextInput
       	style={styles.textInput}
       placeholder="enter ur price"
       onChangeText={text=>{
           this.setState({price:text})
       }}
       />



<TextInput
       	style={styles.textInput}
       placeholder="enter ur address"
       onChangeText={text=>{
           this.setState({address:text})
       }}
       />

 <Text style={{paddingLeft:15,color:'#03a9f4',marginBottom:5}}>your subject</Text>
<View style={styles.View}>
 
<Picker
style={styles.Picker}
          selectedValue={this.state.valuesub}
 
          onValueChange={(value) => {
            this.select(value)
             this.setState({valuesub: value});
           
          }}>
          <Picker.Item  label='Math' value='Math'/>
          <Picker.Item label="Physics" value="Physics" />
          <Picker.Item label="Biology" value="Biology" />
          <Picker.Item label="chemistry" value="chemistry" />
          <Picker.Item label="Arabic" value="Arabic" />
          <Picker.Item label="English" value="English" />
        </Picker>
        </View>


        <Text style={{paddingLeft:15,color:'#03a9f4',marginBottom:5}}>your area</Text>
<View style={styles.View}>
 
<Picker
style={styles.Picker}
selectedValue={this.state.valueArea}
 
      onValueChange={(valueA) => {
        this.select(valueA)
         this.setState({valueArea: valueA});
       
      }} >
          <Picker.Item   label='GAZA' value='GAZA'/>
          <Picker.Item label="NorthGaza" value="NorthGaza" />
          <Picker.Item label="Rafah" value="Rafah" />
          <Picker.Item label="westGaza" value="westGaza" />
          <Picker.Item label="Khan Younes" value="Khan Younes" />
       
        </Picker>
        </View>

        <Text style={{paddingLeft:15,color:'#03a9f4',marginBottom:5}}>your grade</Text>
<View style={styles.View}>
 
<Picker
style={styles.Picker}
          selectedValue={this.state.valueGrade}
 
        
          onValueChange={(valueG) => {
            this.select(valueG)
             this.setState({valueGrade: valueG});
           
          }}>
         
          <Picker.Item label="tenth" value="tenth" />
          <Picker.Item label="eleventh" value="eleventh" />
          <Picker.Item label="twelfth" value="twelfth" />
       
        </Picker>
        </View>
      
        <TouchableOpacity
         style={styles.button}
         onPress={()=>this.addData()}
       >
         <Text style={styles.title}> Touch Here </Text>
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
textInput: {
    margin: 24,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    width: 320,
    borderColor: "gray",
    borderRadius:30,
    borderWidth: 1,
    marginLeft:'auto' ,
    marginRight: 'auto',
    height:50,
},
button: {

    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#03a9f4',
   height:50,
    width: 285,
    borderRadius:30,
    borderColor: "#4CAF50",
    marginBottom:20,
    marginLeft:'auto' ,
    marginRight: 'auto',
    
  },
  title:{
color:"white"
  },
  text:{
fontSize:30,
marginRight:15,
color:"#03a9f4",
marginBottom:20,
marginTop:25
  },
Picker:{
  height:50,


},
View:{
  height:50,
  marginBottom:20,
width:340,
   borderColor:'gray',
   borderWidth:1,
   
   marginLeft:10,

}
  })