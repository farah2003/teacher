import React, { Component } from 'react';
import {View ,StyleSheet,ScrollView,Image,TouchableOpacity,FlatList,Text, ImageBackground} from 'react-native';
import {Card,  CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
;
export default class garde extends Component {

    subject=()=>{
        this.props.navigation.navigate("subject");}
    
    render(){
     
        return(
            <ScrollView>
                <View
               ></View>


    <TouchableOpacity 
    onPress={()=>this.subject()}>
        <Card style={{height:180}}>

                                                                  
             <ImageBackground source={require("./10.png")} style={{width: '100%', height:'100%'}}>
             </ImageBackground>               
       
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:180}}>
                          
        <ImageBackground source={require("./11.png")} style={{width: '100%', height:'100%'}}>
             </ImageBackground>               

  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:185}}>
                          
                                                                  
        <ImageBackground source={require("./12.png")} style={{width: '100%', height:'100%'}}>
             </ImageBackground>                            
      
  
            </Card>
    </TouchableOpacity> 
    
 
</ScrollView>
            )
        }
    }