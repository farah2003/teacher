import React, { Component } from 'react';
import {View ,StyleSheet,TextInput} from 'react-native';

export default class Fill extends Component {
state={
name:"",
age:""
}
  render() {

    return (
      <View style={styles.container}>

       <TextInput
       	style={styles.textInput}
       placeholder="enter ur name"
       onChange={text=>{
           this.setState({name:text})
       }}
       />

<TextInput
       	style={styles.textInput}
       placeholder="enter ur name"
       onChange={text=>{
           this.setState({name:text})
       }}
       />
       
       <TextInput
       	style={styles.textInput}
       placeholder="enter ur age"
       onChange={text=>{
           this.setState({name:text})
       }}
       />

<TextInput
	style={styles.textInput}
       placeholder="enter ur name"
       onChange={text=>{
           this.setState({name:text})
       }}
       />

<TextInput
	style={styles.textInput}
       placeholder="enter ur name"
       onChange={text=>{
           this.setState({name:text})
       }}
       />

<TextInput
	style={styles.textInput}
       placeholder="enter ur name"
       onChange={text=>{
           this.setState({name:text})
       }}
       />

<TextInput
	style={styles.textInput}
       placeholder="enter ur name"
       onChange={text=>{
           this.setState({name:text})
       }}
       />

<TextInput
	style={styles.textInput}
       placeholder="enter ur name"
       onChange={text=>{
           this.setState({name:text})
       }}
       />
     
      </View>
      
    );
  }
}
const styles = StyleSheet.create({

    container: {
		flex: 1,
        alignItems: "center",
        paddingTop:100,
	
		backgroundColor: "white"
	},
textInput: {
    margin: 24,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    width: 350,
    borderColor: "gray",
    borderWidth: 1
}
});