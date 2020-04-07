import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import * as firebase from 'firebase'
export default class AnotherChat extends Component {
    state = {
        Tmessages: [],

        List:[],
        text:""
      };
 
      componentDidMount(){
        const db = firebase.firestore();
   
       
    var user = firebase.auth().currentUser;
    const senderId = "bbbdbbb"
    const receiverId = "ffffffffffdf"
    const id = senderId + "_" + receiverId;
    firebase.firestore().doc(`xdg/${id}`).get().then((doc)=>{
           
      
            
                let newList =[]
  
         
               let data= doc.data().messages
               data.map((data)=>{
                 newList.append(data)

               }
               )
               this.setState({
                List:newList
               })

          });
         
  //console.log("gh gfh")
       //
           
      
         //  console.log("xxxxxxxxx",x)

        //     } );           
  
//   console.log( 'finallist',this.state.List)     
        
 
   
           
   
            this.setState({
              Tmessages: [
              {
             
                 text: this.state.text,
                 createdAt: new Date(),
                 user: {
                  _id: 1,
                   name: 'React Native',
                  avatar: 'https://facebook.github.io/react/img/logo_og.png',
               },
                },
              ],
            });
          }
        
      
      onSend=(m ) =>{
       this.setState((previousState) => ({
          Tmessages: GiftedChat.append(previousState.Tmessages, m),
    
       
    }));
    
     }
    
      render() {
        return (
     
          <GiftedChat
          onSend={(m) => this.onSend(m)}
            messages={this.state.List}
            user={{
              _id: 0,
            }}
            
          />
    
    
        );
      }
}
