import React, { Component } from 'react';
import {View ,StyleSheet,ScrollView,Image,TouchableOpacity,FlatList,Text, ImageBackground} from 'react-native';
import {Card,  CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import Constants from "expo-constants";
export default class sub extends Component {
    static navigationOptions = {
        header : null   
     };
     navigationOptions= {
        headerShown: false,
      }
    gard=()=>{
        this.props.navigation.navigate("Gaza");}
    render(){
     
        return(
            
            <ScrollView>


    <TouchableOpacity
       onPress={()=>this.gard()}>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: 100}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
         <CardTitle   subtitle="farah shaqoura"/>
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: 100}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
         <CardTitle   subtitle="farah shaqoura"/>
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: 100}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
         <CardTitle   subtitle="farah shaqoura"/>
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: 100}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
         <CardTitle   subtitle="farah shaqoura"/>
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: 100}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
         <CardTitle   subtitle="farah shaqoura"/>
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{width: '100%', height: 100}}>
                  <Text style={{marginTop:45,marginRight:150}}>Inside</Text>
             </ImageBackground>               
         <CardTitle   subtitle="farah shaqoura"/>
  
            </Card>
    </TouchableOpacity> 

 
</ScrollView>
            )
        }
    }