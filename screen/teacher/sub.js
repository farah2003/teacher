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
                          
                                                                  
             <ImageBackground source={{uri:'https://www.for9a.com/images/blog/2019/05/27/638x400-71538985491phpKctLgx.jpeg'}} style={{width: '100%', height: 100}}>
             </ImageBackground>               
         <CardTitle />
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://ichef.bbci.co.uk/images/ic/1920x1080/p074yf06.jpg'}} style={{width: '100%', height: 100}}>
             </ImageBackground>               
         <CardTitle />
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3iHrZPKJDZ4KrDHuvJX3_MQlhbuVAjqENOFu409tbQZryCF_n&usqp=CAU'}} style={{width: '100%', height: 100}}>
             </ImageBackground>               
         <CardTitle   />
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://i2.wp.com/www.healththoroughfare.com/wp-content/uploads/2019/12/physics-student.jpg?fit=960%2C480&ssl=1'}} style={{width: '100%', height: 100}}>
             </ImageBackground>               
         <CardTitle />
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://modo3.com/thumbs/fit630x300/231339/1560014892/%D8%A3%D8%AC%D9%85%D9%84_%D9%85%D8%A7_%D9%82%D9%8A%D9%84_%D8%B9%D9%86_%D8%A7%D9%84%D9%84%D8%BA%D8%A9_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9_%D8%A7%D9%84%D9%81%D8%B5%D8%AD%D9%89.jpg'}} style={{width: '100%', height: 100}}>
             </ImageBackground>               
         <CardTitle/>
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:100}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://i1.wp.com/ritajms.com/wp-content/uploads/2019/11/52351011-english-british-england-language-education-concept.jpg?fit=700%2C516&ssl=1'}} style={{width: '100%', height: 100}}>
             </ImageBackground>               
         <CardTitle/>
  
            </Card>
    </TouchableOpacity> 

 
</ScrollView>
            )
        }
    }