/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import Settings from './Settings';
import Home from './Home';
import Login from './Login';
import AppNavigator from './myScreen'
import TabBar from './myScreen';
import splash from './splash';
import resultScreen from './resultScreen';
import vinClass from './vinClass'
//import qrScannerCustom from './qrScannerCustom';
import qrScannerCustom from './qrScannerCustom'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const LoginStack = StackNavigator({
  splashScreen:{screen: splash},

LoginS:{screen: Login,
  navigationOptions: ({navigation}) => ({
  title: 'Home',
  header:null,


})
},
tab:{screen: TabBar},
ScanViewer:{screen: qrScannerCustom},
resultView:{screen: resultScreen},
vinC:{screen: vinClass}



}

,
  { headerMode: 'none' }

);

export default class App extends Component<Props> {
  render() {
    return (
     <LoginStack />
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
