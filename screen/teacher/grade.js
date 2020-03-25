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
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height:'100%'}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
       
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:180}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: '100%'}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               

  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:185}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: '100%'}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
      
  
            </Card>
    </TouchableOpacity> 
    
 
</ScrollView>
            )
        }
    }