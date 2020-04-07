import React, { Component } from 'react';

import {View ,StyleSheet,TextInput,Button,CheckBox,ScrollView,TouchableOpacity,Picker} from 'react-native';


import {Card,  CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';

import * as firebase from "firebase";
import 'firebase/firestore';
import { Text } from 'native-base';
export default class Fill extends Component {
  static navigationOptions = {
    title: 'subject',
    headerStyle: { backgroundColor: 'red',height:'50pxs' },
    headerTitleStyle: { color: 'white' },
  } 
state={
  appName:'',
name:'',
check:false,
age:"",
phone:'',
price:'',
grade:'',
address:'',
classMath:false,
sub:"",
value:""
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
checkboxph=()=>{
  
    this.setState({
        check:!this.state.check,
        classMath:true,
    
    })
   
}

select=(itemValue, itemIndex)=>{

    this.setState({ 
    value: itemValue,
     
      inindex: itemIndex })
  }
addData=()=>{

    const db = firebase.firestore().collection("teacher");
   

    db.add({
        
      appName:this.state.appName,
    Name: this.state.name,
   
   age:this.state.age,
    value:this.state.value
  


       //Phone:this.state.phone,
       // Age:this.state.age,
       // price:this.state.price,
       // grade:this.state.grade,
       // address:this.state.address


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
          <Text style={styles.text}>Add ur information</Text>

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
       placeholder="enter ur age"
       onChangeText={text=>{
           this.setState({age:text})
       }}
       />



<TextInput
       	style={styles.textInput}
       placeholder="enter ur age"
       onChangeText={text=>{
           this.setState({age:text})
       }}
       />



<TextInput
       	style={styles.textInput}
       placeholder="enter ur age"
       onChangeText={text=>{
           this.setState({age:text})
       }}
       />



<TextInput
       	style={styles.textInput}
       placeholder="enter ur age"
       onChangeText={text=>{
           this.setState({age:text})
       }}
       />


       





{/*<CheckBox
 value={this.state.check}
      onChange={()=>this.checkboxph()}/> */}
 <Text style={{paddingLeft:15,color:'#03a9f4',marginBottom:5}}>UR SUB</Text>
<View style={styles.View}>
 
<Picker
style={styles.Picker}
          selectedValue={this.state.value}
 
        
          onValueChange={(itemValue, itemIndex) => {
            this.select(itemValue, itemIndex)
          }
          }>
          <Picker.Item color="gray" label={'Math'} value={'Math'}/>
          <Picker.Item label="Physics" value="Physics" />
          <Picker.Item label="Biology" value="Biology" />
          <Picker.Item label="chemistry" value="chemistry" />
          <Picker.Item label="are" value="word5" />
          <Picker.Item label="you" value="word6" />
        </Picker>
        </View>


        <Text style={{paddingLeft:15,color:'#03a9f4',marginBottom:5}}>UR SUB</Text>
<View style={styles.View}>
 
<Picker
style={styles.Picker}
          selectedValue={this.state.value}
 
        
          onValueChange={(itemValue, itemIndex) => {
            this.select(itemValue, itemIndex)
          }
          }>
          <Picker.Item color="gray" label={'Math'} value={'Math'}/>
          <Picker.Item label="Physics" value="Physics" />
          <Picker.Item label="Biology" value="Biology" />
          <Picker.Item label="chemistry" value="chemistry" />
          <Picker.Item label="are" value="word5" />
          <Picker.Item label="you" value="word6" />
        </Picker>
        </View>

        <Text style={{paddingLeft:15,color:'#03a9f4',marginBottom:5}}>UR SUB</Text>
<View style={styles.View}>
 
<Picker
style={styles.Picker}
          selectedValue={this.state.value}
 
        
          onValueChange={(itemValue, itemIndex) => {
            this.select(itemValue, itemIndex)
          }
          }>
          <Picker.Item color="gray" label={'Math'} value={'Math'}/>
          <Picker.Item label="Physics" value="Physics" />
          <Picker.Item label="Biology" value="Biology" />
          <Picker.Item label="chemistry" value="chemistry" />
          <Picker.Item label="are" value="word5" />
          <Picker.Item label="you" value="word6" />
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