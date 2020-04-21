import React, { Component } from 'react';
import {View ,StyleSheet,ScrollView,Image,TouchableOpacity,Text} from 'react-native';
import {Card,  CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import * as firebase from "firebase";
import 'firebase/firestore';

;
export default class Tabs extends Component {
  navigationOptions= {
   title:"find"
  }
state={
  list:[],
  appname:""
}

componentDidMount(){
      const db = firebase.firestore();
 
      let newList =[]
      let appname="ffff"
  
      db.collection("teacher").where('value','==','Biology').where('grade','==','11').get().then((userSnapshot) => {
   
          
        userSnapshot.docs.map(doc =>{
     
        let x= doc.data()  
      //  let appname= doc.data().appname
   
        newList.push(x)  
          
           } );           
        this.setState({
          list:newList,
          appname:appname
        
        })
        console.log( 'finallist',this.state.list)     
      
    })
    }

   Masanger=(name)=>{
 console.log("nameChat",name)
      this.props.navigation.navigate("masanger", { appname:name })}
    render(){
      const{list}=this.state
        return(
         
            <ScrollView>
            {list.map(item=>{
              return(
                <View>
                   
   <Card >
                <TouchableOpacity>
           <Image
               style={styles.image}
               source={require("../image.jpg")}
            > 
       
             </Image>  
             </TouchableOpacity>    
       
           

             <CardTitle   subtitle={item.appname}/>
             <CardContent text={item.Name} />
             <CardContent text={item.grade} />
             <CardContent text={item.value}/>
             <CardContent text={item.prise} />
          
           <TouchableOpacity
                 onPress={()=>this.Masanger(item.Name)} >
           <Image
               style={styles.imageMasage}
               source={require("../masage.jpg")}
            > 
     
             </Image>  
             </TouchableOpacity>   
           
             {/* <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="Share"
                  color="#FEB557"
                />
                <CardButton
                  onPress={() => {}}
                  title="Explore"
                  color="#FEB557"
                />
             </CardAction>*/}
            </Card>
      

                
               
                </View>
              )
            })}  
           
            {/*  <Card >
                <TouchableOpacity>
           <Image
               style={styles.image}
               source={require("../image.jpg")}
            > 
       
             </Image>  
             </TouchableOpacity>    
             <CardTitle   subtitle="farah shaqoura"/>

           
             
             <CardContent text="grade 10" />
             <CardContent text="physics" />
             <CardContent text="12$" />
          
             
            <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="Share"
                  color="#FEB557"
                />
                <CardButton
                  onPress={() => {}}
                  title="Explore"
                  color="#FEB557"
                />
             </CardAction>
            </Card>
           {/* <Card >
                <TouchableOpacity>
           <Image
               style={styles.image}
               source={require("../image.jpg")}
             ></Image>  
             </TouchableOpacity>    
             <CardTitle   subtitle="farah shaqoura"/>

           
             
             <CardContent text="grade 10" />
             <CardContent text="physics" />
             <CardContent text="12$" />
          
             
             {/* <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                  onPress={() => {}}
                  title="Share"
                  color="#FEB557"
                />
                <CardButton
                  onPress={() => {}}
                  title="Explore"
                  color="#FEB557"
                />
             </CardAction>
            </Card>*/}
          
          </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    container: {
		flex: 1,
    
        paddingTop:100,
	
		backgroundColor: "white"
	},
textInput: {
    margin: 24,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
   
    borderColor: "gray",
    borderRadius:50,
    borderWidth: 1,
    marginLeft:30,
    height:50,
},
button: {
marginLeft:55,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'green',
   height:50,
    width: 300,
    borderRadius:30,
    borderColor: "#4CAF50",
    
  },
  title:{
color:"white"
  },
  text:{
fontSize:30,
marginRight:15,
color:"green",
marginBottom:20
  },
button1:{
backgroundColor:'white',

borderWidth: 2,
width: 100,
borderRadius:30,

height:300,

marginVertical: 8,
borderBottomColor: '#737373',
paddingTop:100


},

button2:{
    backgroundColor:"#4CAF50",
    color:'black',   
    borderRadius:30
    },
    image:{
     marginLeft:240,
        height: 100,
		width: 100,
        marginTop: 5,
        marginBottom:3,

        margin: 30,
        borderRadius:50
    },

    imageMasage:{
      marginLeft:365,
         height: 35,
     width: 35,
         marginTop:0,
         marginBottom:6,
 
         margin: 30,
         borderRadius:50
     }
  })
