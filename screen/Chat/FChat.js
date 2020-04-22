import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import * as firebase from 'firebase'

export default class Chat extends Component {
    state = {
        messages:[],
        receiverId:"",
        senderId:""
        }
      componentDidMount(){
        let name =this.props.navigation.getParam('appname')
        const db = firebase.firestore();
        db.collection("name").where('name','==',"sarah").get().then((userSnapshot) => {
                
      userSnapshot.docs.map(doc =>{
    
      let uid= doc.data().userId
    
     this.setState({
      receiverId:uid,
    
        
      })
    
        })
       }).then(()=>{
     
        const receiverId =this.state.receiverId
        //console.log("Useridddddddddddddddd",receiverId)
         var user = firebase.auth().currentUser;
        const senderId = user.uid
      
         this.setState({
          senderId:senderId
         })
      
         const id = senderId + "_" + receiverId;
         console.log(id)
    
         firebase.firestore().collection("Chat").doc("tytgfnfgkmrtgfmfgdt").get().then((doc)=>{                   
             let newList =[] 
            let data= doc.data().messages
            /*data.map(item=>{
             newList.push(item)
      
            })*/
     
            this.setState({
             messages:data
               
             })
       })
    
  });
}
onSend=async (m)=>{
    const db = firebase.firestore()
   let masaage={}
 m.map(item=>{
  masaage._id=item._id
  masaage.text=item.text;
  masaage.createdAt= firebase.database.ServerValue.TIMESTAMP,
    
  masaage.user={
    _id :this.state.receiverId
  }

  
  })
  await this.setState((previousState) => ({
    messages: GiftedChat.append(previousState.messages, masaage),

}))
db.collection("Chat").doc("tytgfnfgkmrtgfmfgdt").set({
         
    messages:this.state.messages
 
 })
        /*console.log(masaage)

        const db = firebase.firestore().collection("Chat").doc("tytgfnfgkmrtgfmfgdt")
        return db.update({
         name:FieldValue.arrayUnion("aya")
      });/*/

       /* db.collection("Chat").doc("tytgfnfgkmrtgfmfgdt").set({
         
      
        messages:masaage
    
     
     })/* /.then(()=>{
            
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
