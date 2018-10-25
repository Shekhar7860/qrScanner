/** @format */

import {AppRegistry,Dimensions} from 'react-native';
import {name as appName} from './app.json';
import { DrawerNavigator } from 'react-navigation';
import qrScannerCustom from './qrScannerCustom';
import App from './App'
import resultScreen from './resultScreen';
import vinClass from './vinClass'

 //AppRegistry.registerComponent('eSpin', () => drawernav);
AppRegistry.registerComponent('eSpin', () => App);
