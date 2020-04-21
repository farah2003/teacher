import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {View ,TouchableOpacity} from 'react-native';
import { Text } from 'native-base';
import * as firebase from 'firebase'
export default class Chat extends Component{
  state = {
    messages:[],
    receiverId:"",
    senderId:""
    }
  componentWillMount(){
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
 
    //const receiverId =this.state.receiverId
    //console.log("Useridddddddddddddddd",receiverId)
     //var user = firebase.auth().currentUser;
     //const senderId = user.uid
     const senderId ="bbbbbbbbbbbbbbbb"
     const receiverId ="ffffffffffffffffffff"
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


   
      /* this.setState({
       List:newList
     })
  */
 /*list.map((item)=>{
          
          }
          )*/
          
  
  });
   
  }
    onSend= async (m)=>{
      let masaage={}
      m.map(item=>{
       masaage._id=item._id
       masaage.text=item.text;
       masaage.createdAt=firebase.database.ServerValue.TIMESTAMP,
             
       masaage.user={
        _id :item.user._id
      }
     })
        const db = firebase.firestore();
        await this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, masaage),

        }))
        
        //////////////////////////try here to do  then to add the last message
        db.collection("Chat").doc("tytgfnfgkmrtgfmfgdt").set({
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
    const senderId=this.state
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

 /*// static navigationOptions = {
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
*/

