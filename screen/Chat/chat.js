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
    receiverId:"",
    senderId:""
  };

//componentDidMount(){

  //const {appname } = route.params;

 // appname= this.props.navigation.getParam('appname')
  //console.log("appname", appname)

 
  
  
//  }

  addMasagees=(m)=>{
  const db = firebase.firestore();
 
  
  


    //  const receiverId =(this.state.receiverId)
    //  const senderId=(this.state.senderId)
   
   //   const id = senderId + "_" + receiverId;
      
      db.collection("Chat").doc("OZ3cXd2JQTefVFPqVKyaVaLH2xp1_Gg53lJsneWYr6AFfbr2pxHa9w4G2").set({
          messages:m
     //   text:this.state.Textmessages.text,
        //user:this.state.Textmessage.user
    }).then(function (docRef) {
           // console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            //console.error("Error adding document: ", error);
        })
    

  
  
  }
  //  let farah=this.props.navigation.state.getParam('name',"farah")
//console.log("name",farah)

//db.collection("name").where('name','==','raghed').get().then((userSnapshot) => {

      
//  userSnapshot.docs.map(doc =>{
//
//  let uid= doc.data().userId

 /// this.setState({
  //  Userid:uid,
   // Textmessages:m
    
//  })

//})})
//.then(()=>
//{
  //var user = firebase.auth().currentUser;
  //const senderId =user.uid
  //  this.setState({
   // /senderId:senderId
    ///}
  
    //)

    //const receiverId =(this.state.receiverId)
   
    //const id = senderId + "_" + receiverId;

    componentWillMount(){
      console.log("sdxfghjkl;")
    const db = firebase.firestore();
 
    
    firebase.firestore().collection("Chat").doc("OZ3cXd2JQTefVFPqVKyaVaLH2xp1_Gg53lJsneWYr6AFfbr2pxHa9w4G2").get().then((doc)=>{
           
      
            
      let newList =[]


     let data= doc.data()
   
   newList.push(data)
 
     this.setState({
     List:newList
   })

   console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnn",newList)
   newList.map((item)=>{
   this.setState((previousState) => ({
    Textmessages: GiftedChat.append(previousState.Textmessages, item),

   
}))
//  newList.append(item)

}
)


});


}
//)}
 /* onSend=(m ) =>{
   this.setState((previousState) => ({
    Textmessages: GiftedChat.append(previousState.Textmessages, m),

   
}))
  this.addMasagees()

  


 

 }
*/
  render() {
    return (
 
      <GiftedChat
      onSend={(m) => this. addMasagees(m)}
        messages={this.state.Textmessages}
        user={{
          _id: 2,
        }}
        
      />


    );
  }
}
