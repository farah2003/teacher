import React, { Component } from 'react';
import {createAppContainer,createSwitchNavigator}from 'react-navigation'
import {createMaterialTopTabNavigator,createBottomTabNavigator}from 'react-navigation-tabs'
import {createStackNavigator}from 'react-navigation-stack'
//import Fill  from './screen/Home'
import  AnotherChat from './screen/Chat/anotherChat'
import NorthGazaTabs from './screen/teacher/NorthGaza'
import Chat  from './screen/Chat/chat'
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
          //   style: { backgroundColor: 'powderblue' },
           },},
    masanger: {screen:Chat }
     //   navigationOptions:{
            // this should do the work, but it doesn't
         //
            //tabBarVisible: false
        //  }}

   
    

});

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
/*Masangerpage.navigationOptions = ({ navigation }) => {
    navigationOptions = {
    title: navigation.getParam('Title', ' Gaza'),
    };
    if (navigation.state.routeName === "masanger") {
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyy")
    navigationOptions.tabBarVisible = false;
    }
    return navigationOptions;
    };*/
const Masanger = createStackNavigator({
  
   
    NorthTabs:NorthGazaTabs,
    
    masanger: Chat ,
   
});
const AppNavigatorTop= createMaterialTopTabNavigator(  
    {  
        GAZA:{screen: Masangerpage ,
            navigationOptions: {
               // labelStyle:{backgroundColor:"green"},
                style:{marginTop: 10},
               
               //tabStyle: { width: 100,marginTop: 10,backgroundColor:"black" },
                header: null
                ,
             //   style: { backgroundColor: 'powderblue' },
              },},
       
        NorthGaza:Masanger,  
      Rafah:Tabs,   
      NoGaza:Tabs,  
      NorGaza:Tabs,  
  
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
const HometabStudent = createBottomTabNavigator({
    StudentHome:StudentDetails ,
    Studentprofile:profileStudent,
    Studentmassnger:Fill
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
const HometabTeacher = createBottomTabNavigator({
    TeacherHome:Fill,
    Teacherprofile:profileTeacher,
    Teachermassnger:Fill
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


const App = createAppContainer( StudentDetails);
export default App;


