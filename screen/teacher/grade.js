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
                          
                                                                  
             <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttt11jU4sg0-irFt7K2CCSpFZr2Gxh7y3wJfPQbFxxSYgLY1xvoVJP-X_&s'}} style={{width: '100%', height:'100%'}}>
             </ImageBackground>               
       
  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:180}}>
                          
                                                                  
             <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6Cte7B_EqyJJQ7sULF9TnnqpF9KI3_5bVtpNNdAh4_oLXywkswLcQM9t&s'}} style={{width: '100%', height: '100%'}}>
             </ImageBackground>               

  
            </Card>
    </TouchableOpacity> 
    <TouchableOpacity>
        <Card style={{height:185}}>
                          
                                                                  
             <ImageBackground source={{uri:'http://clipart-library.com/data_images/241732.png'}} style={{width: '100%', height: '100%'}}>
             </ImageBackground>               
      
  
            </Card>
    </TouchableOpacity> 
    
 
</ScrollView>
            )
        }
    }