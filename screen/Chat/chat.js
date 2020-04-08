import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {View ,TouchableOpacity} from 'react-native';
import { Text } from 'native-base';
import * as firebase from 'firebase'
export default class Chat extends Component{


 // static navigationOptions = {
 //   title: 'farah',
  //  headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
  //  headerStyle:{
    //    backgroundColor:'white',
  //  },
//};
  state = {
    Textmessages: [],
    Userid:""
  };

//componentDidMount(){

  //const {appname } = route.params;

 // appname= this.props.navigation.getParam('appname')
  //console.log("appname", appname)

 
  
  
//  }

  addMasagees=()=>{
    const db = firebase.firestore();
 
    db.collection("name").where('name','==','Ismail').get().then((userSnapshot) => {
   
          
      userSnapshot.docs.map(doc =>{
   
      let uid= doc.data().userId
  
      this.setState({
        Userid:uid
      })
  
    })}).then(()=>{
      var user = firebase.auth().currentUser;
      const senderId =user.uid
  

      const receiverId =(this.state.Userid)
   
      const id = senderId + "_" + receiverId;
      db.collection("Chat").doc(id).set({
          
        messages:this.state.Textmessages
    })}).then(function (docRef) {
           // console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            //console.error("Error adding document: ", error);
        })
    

  
  
  }

  componentWillMount() {
  //  let farah=this.props.navigation.state.getParam('name',"farah")
//console.log("name",farah)
    const db = firebase.firestore();
 
    db.collection("name").where('name','==','Ismail').get().then((userSnapshot) => {
   
          
      userSnapshot.docs.map(doc =>{
   
      let uid= doc.data().userId
   
     this.setState({
      Userid:uid
    })
   
    
    })})
  /*  .then(()=>{
      var user = firebase.auth().currentUser;
      const senderId =user.uid
  

      const receiverId =(this.state.Userid)
   
      const id = senderId + "_" + receiverId;
    
    console.log("iiiiiiiiiiiiid",id)
    
    })*/
  

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
