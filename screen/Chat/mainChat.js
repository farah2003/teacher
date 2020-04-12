import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import * as firebase from 'firebase'
class MainChat extends Component {
state = {
    messages:[]
    }
  componentWillMount(){

    firebase.firestore().collection("Chat").doc("yruti6gfjbjtfopiopioyrr9g").get().then((doc)=>{                   
        let newList =[] 
       let data= doc.data().messages
       /*data.map(item=>{
        newList.push(item)
 
       })*/

       this.setState({
        messages:data
          
        })
    console.log("sdftgyhuiuhygtfdr",this.state.messages)
   
      /* this.setState({
       List:newList
     })
  */
 /*list.map((item)=>{
          
          }
          )*/
          
  
  });
   
  }
    onSend=(m)=>{
        const db = firebase.firestore();
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, m),

        }))
        
        //////////////////////////try here to do  then to add the last message
        db.collection("Chat").doc("yruti6gfjbjtfopiopioyrr9g").set({
                messages:this.state.messages
       
          })/*.then(()=>{
            
          //.then(function (docRef) {
                  //console.log("Document written with ID: ", docRef.id);
        // })
              //.catch(function (error) {
                 // console.error("Error adding document: ", error);
             // })

        })*/

         
    }

  render() {
    return (
        <GiftedChat
        onSend={(m) => this.onSend(m)}
          messages={this.state.messages}
          user={{
            _id: 0,
          }}
          
        />

    );
  }
}

export default MainChat;
