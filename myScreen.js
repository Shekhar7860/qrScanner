import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity, Image
} from 'react-native';

import { StackNavigator, TabNavigator } from "react-navigation";
import Settings from './Settings';
import Home from './Home';
import Login from './Login';


const AppNavigator = TabNavigator({
  HomeScreen: { screen: Home,
    navigationOptions: ({ navigation }) => ({
    				title: "Home",
            tabBarPosition:'bottom',
            tabBarIcon: ({ tintColor }) => (
     <Image
       source={require('./images/gray_home.png')}
       style={[styles.icon,{tintColor: '#f11e4b'}]}
     />
 )
    			})

  },
  SettingScreen: { screen: Settings,
    navigationOptions: ({ navigation }) => ({
    				title: "Settings",
            tabBarIcon: ({ tintColor }) => (
     <Image
       source={require('./images/gray_setting.png')}
       style={[styles.icon]}
     />
 )
    			})

   }
});
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
export default AppNavigator;
