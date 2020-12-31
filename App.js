
import React from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FBscreen from './Screens/FBscreen';
import Instascreen from './Screens/InstaScreen';

export default class App extends React.Component {
  render(){
  
    return  <AppContainer/> ;
    }
}



 const TabNavigator = createBottomTabNavigator({
   FB:{screen:FBscreen},
   Insta:{screen:Instascreen}
 });

 const AppContainer = createAppContainer(TabNavigator);