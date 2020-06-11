import React, { Component } from 'react';
import {createAppContainer,createSwitchNavigator}from 'react-navigation'
import {createMaterialTopTabNavigator,createBottomTabNavigator}from 'react-navigation-tabs'
import {createStackNavigator}from 'react-navigation-stack'
//import Fill  from './screen/Home'
import MainChat from './screen/Chat/mainChat'

import NorthGazaTabs from './screen/teacher/NorthGaza'
import Chat  from './screen/Chat/FChat'
import sub from "./screen/teacher/sub"; 
import grade from "./screen/teacher/grade";   
import Tabs from "./screen/teacher/Tabs";
import TeacherLog  from "./screen/mainTeacher/teacherlog";
import TeacherSign  from "./screen/mainTeacher/teachersign";
import StudentLog   from "./screen/mainStudent/studentlog";
import  StudentSign from "./screen/mainStudent/studentsign";
import Main from "./screen/Main";
import Fill from "./screen/Home";
import profileTeacher from "./screen/profile/profileTeacher"
import profileStudent from './screen/profile/profileStudent'
import * as firebase from "firebase";
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBLR57CaFRJYGoYcbO84wsGLHj30rO-Hyc",
  authDomain: "findteacher-f3307.firebaseapp.com",
  databaseURL: "https://findteacher-f3307.firebaseio.com",
  projectId: "findteacher-f3307",
  storageBucket: "findteacher-f3307.appspot.com",
  messagingSenderId: "485493686076",
  appId: "1:485493686076:web:7179f0dbfd5b90b4c6a839",
  measurementId: "G-06JP7V7HVD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Masangerpage = createStackNavigator({
    Gaza:{screen :Tabs,
        navigationOptions: {
            //labelStyle: { fontSize: 12 },
             tabStyle: { width: 100 },
             header: null,
       
           },},
    masanger: {screen:MainChat }
     //   navigationOptions:{
            // this should do the work, but it doesn't
         //
            //tabBarVisible: false
        //  }}

   
    

});
const Masanger = createStackNavigator({
    NorthTabs: {screen:NorthGazaTabs, 
        navigationOptions: {
          
            style:{marginTop: 10},
           
          
            header: null
            ,
        
          },},
   
    masanger:MainChat ,
   
});

Masanger.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
   
   if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
     
        if (route.routeName === "masanger") {
          tabBarVisible = false;
         
        } else {
          tabBarVisible = true;
        }
     });
    }
  
    return {
      tabBarVisible
    };
  };
Masangerpage.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
   
   if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
     
        if (route.routeName === "masanger") {
          tabBarVisible = false;
         
        } else {
          tabBarVisible = true;
        }
     });
    }
  
    return {
      tabBarVisible
    };
  };


const AppNavigatorTop= createMaterialTopTabNavigator(  
    {  
        GAZA:{screen: Masanger ,
            navigationOptions: {
              
                style:{marginTop: 10},
               
              
                header: null
                ,
            
              },},
       

 NorthGaza:{screen: Masangerpage ,
                navigationOptions: {
                  
                    style:{marginTop: 10},
                   
                  
                    header: null
                    ,
                
                  },},
        
  Rafah:{screen: Masangerpage ,
                navigationOptions: {
                  
                    style:{marginTop: 10},
                   
                  
                    header: null
                    ,
                
                  },},
     
      janyons:{screen: Masangerpage ,
        navigationOptions: {
          
            style:{marginTop: 10},
           
          
            header: null
            ,
        
          },},
   
          westGaza:{screen: Masangerpage ,
            navigationOptions: {
              
                style:{marginTop: 10},
               
              
                header: null
                ,
            
              },},
  
  } ,
  
  )
const FindTeacherNav = createStackNavigator({
SelectSub:sub ,
    TeacherCard: {screen:AppNavigatorTop,
        navigationOptions: {
            header: null,
          },}
       
});



const StudentDetails = createStackNavigator({
grade: grade,
subject:{screen:FindTeacherNav,
    navigationOptions: {
        header: null,
      }, }
});
const profileStu = createStackNavigator({
    Studentprofile:profileStudent,
    subject:{screen:FindTeacherNav,
        navigationOptions: {
            header: null,
          }, }
    });
    

const HometabStudent = createBottomTabNavigator({
    StudentHome:StudentDetails ,
    Studentprofile:profileStu,
    Chat:Chat
});

const MainStudent = createStackNavigator({
    Studentsignup:StudentSign,
	Studentlogin: StudentLog ,

});
const Switchstudent = createSwitchNavigator({
	MainStudent: 	MainStudent,
	HometabStudent:HometabStudent
});

const MainTeacher = createStackNavigator({
    Teachersignup: TeacherSign,
	Teacherlogin:  TeacherLog,
	
});
const profile = createStackNavigator({
    profile :profileTeacher,
    subject:{screen:FindTeacherNav,
        navigationOptions: {
            header: null,
          }, }
    });
    const fillinfo = createStackNavigator({
        Add :Fill ,
        subject:{screen:FindTeacherNav,
            navigationOptions: {
                header: null,
              }, }
        });
const HometabTeacher = createBottomTabNavigator({
    TeacherHome:fillinfo,
    Teacherprofile:  profile ,
    chat:Chat,
   
});

const SwitchTeacher = createSwitchNavigator({
    MainTeacher:MainTeacher,
	HometabTeacher:HometabTeacher
});

const SwitchScreen = createSwitchNavigator({
    Main:Main,
	Student:  Switchstudent,
	Teacher:SwitchTeacher
});




 
//  const AppNavigatorStudent = createMaterialTopTabNavigator(  
     //   {  
        ///    Find: Tabs,  
        //    Profile: Tabs, 
//    massnger:Tabs, 
      
       /// } ) 


const App = createAppContainer(SwitchScreen);
export default App;

