import React, { Component } from 'react';
import {createAppContainer,createSwitchNavigator}from 'react-navigation'
import {createMaterialTopTabNavigator,createBottomTabNavigator}from 'react-navigation-tabs'
import {createStackNavigator}from 'react-navigation-stack'
//import Fill  from './screen/Home'
import  AnotherChat from './screen/Chat/anotherChat'

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
    Gaza:Tabs,
    masanger: Chat ,

    

});
const AppNavigatorTop= createMaterialTopTabNavigator(  
    {  
        Gaza:Chat,  
        NorthGaza:Tabs,  
      Rafah:Tabs,   
      NoGaza:Tabs,  
      NorGaza:Tabs,  
  
  } )
const FindTeacherNav = createSwitchNavigator({
SelectSub:sub ,
	TeacherCard: AppNavigatorTop
});
  


const StudentDetails = createStackNavigator({
grade: grade,
subject:{screen:FindTeacherNav}
});
const HometabStudent = createBottomTabNavigator({
    StudentHome:StudentDetails ,
    Studentprofile:Fill,
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
    Teacherprofile:Fill,
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


const App = createAppContainer(AppNavigatorTop);
export default App;


