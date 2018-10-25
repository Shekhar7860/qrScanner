/* @flow */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  Alert,
  AsyncStorage,
  Dimensions
} from 'react-native';
const {width,height} = Dimensions.get('window')

export default class splash extends Component {

  ShowAlertWithDelay=()=>{

    AsyncStorage.getItem("signin").then((value) => {

      if (value == "1") {

        this.props.navigation.navigate('HomeScreen' )
      }else {
        this.props.navigation.navigate('LoginS')

      }

    }).done();

}
moveToHome=()=>{
  AsyncStorage.getItem("isDocumentUploaded").then((value) => {

    if (value == "1") {
      this.props.navigation.navigate('Item3')

    }else {
      this.props.navigation.navigate('Item2')

    }

  }).done();

}

  render() {

    setTimeout(() => {this.ShowAlertWithDelay()}, 2000)

    return (


      <View style={styles.container}><View style = {{flex:1 ,justifyContent : 'flex-start'}}><Image style = {{width: width,height: height,alignItems: 'center'}} source = {require('/Volumes/My Computer/Anuja Project/ANew/qr/images/tee.png')}/></View>
  <View>
</View>

      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    color: '#0034a8',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
