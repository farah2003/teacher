import React, { Component } from 'react';
import {createSwitchNavigator,createAppContainer}from 'react-navigation'
import Fill  from './screen/Home'

const Switch = createSwitchNavigator({
  FillTech:Fill

})

const App = createAppContainer(Switch);
export default App;


