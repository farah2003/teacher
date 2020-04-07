import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {View ,TouchableOpacity} from 'react-native';
import { Text } from 'native-base';
import * as firebase from 'firebase'
export default class Chat extends Component{
  static navigationOptions = {
    title: 'farah',
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    headerStyle:{
        backgroundColor:'white',
    },
};
  state = {
    Textmessages: [],
  };

componentWillMount(){
  this.props.navigation.getParam(" appname").then( appname => {
    console.log("appname", appname)
  });
  }

  addMasagees=()=>{
    
    var user = firebase.auth().currentUser;
    const senderId = "bbbdbbb"
    const receiverId = "ffffffffffdf"
    const id = senderId + "_" + receiverId;
  
  
    const db = firebase.firestore();
      
    db.collection("xdg").doc(id).set({
        
      messages:this.state.Textmessages
  
  
  
  
  
    }).then(function (docRef) {
           // console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
    

  
  
  }

  componentWillMount() {



    this.setState({
      Textmessages: [
        {
          
          text: 'Hello developer',
          createdAt: new Date(),
         
        }
      ]
    });
  }
  onSend=(m ) =>{
   this.setState((previousState) => ({
    Textmessages: GiftedChat.append(previousState.Textmessages, m),

   
}))
  
  this.addMasagees()

 

 }

  render() {
    return (
 
      <GiftedChat
      onSend={(m) => this.onSend(m)}
        messages={this.state.Textmessages}
        user={{
          _id: 1,
        }}
        
      />


    );
  }
}
