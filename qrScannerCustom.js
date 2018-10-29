/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert
} from 'react-native';
import {QRscanner} from 'react-native-qr-scanner';
import {QRreader} from 'react-native-qr-scanner';
import ImagePicker from 'react-native-image-picker';
const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
import base64 from 'react-native-base64'

export default class qrScannerCustom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashMode: false,
      zoom: 0.2,
      reader: {
        message: null,
        data: null
      }
    };
  }

  searchPlate=(vinN)=>{



  let username = 'demo';
  let password = 'metropolis01';
  let formdata = new FormData();
  let myheaders = new Headers();

  formdata.append('grant_type','password');
  formdata.append('username','testname');
  formdata.append('password','qawsedrf');
  var url1 = "http://www.makitti.com:81/syscor/api/vehicle/";
  var url2 = url1 + vinN;
  var url3 = url2 + "/vin";
  console.log(url3);
  myheaders.append('Authorization', ' Basic ' + base64.encode(username + ":" + password));
  fetch(url3, {
  method: 'GET',
  headers: myheaders
  }).then((response) => response.json())
  .then((responseJson) => {
  //console.log(responseJson);
  if (!responseJson.vin) {

    Alert.alert(
      'Alert',
      'Not valid Qr Code',
      [
        {text: 'OK', onPress: () => {this.props.navigation.goBack()}},
      ],
      { cancelable: false }
    )

    // Alert.alert('Not valid Qr Code');

  }else {

    this.props.navigation.navigate('resultView',{responseJson});

  }


  })
  .catch((error) => {
  console.error(error);
  });



  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{top: 0,width: SCREEN_WIDTH,height: 70,flexDirection: 'row',backgroundColor: '#427590'}}><TouchableOpacity style={{marginTop: 35,marginLeft: 15}} onPress={()=>{this.props.navigation.goBack()}}><Image style={{width: 25 ,height: 20}} source={require('/Volumes/My Computer/Anuja Project/ANew/qr/images/left-arrow.png')}/>
      </TouchableOpacity>

    </View>
        <QRscanner onRead={this.onRead} renderBottomView={this.bottomView} flashMode={this.state.flashMode} zoom={this.state.zoom} finderY={50}/>
      </View>
    );
  }
  ///this.props.navigation.goBack()
  bottomView = ()=>{
    return(
    <View style={{flex:1,flexDirection:'row',backgroundColor:'#0000004D'}}>
      <TouchableOpacity style={{flex:1,alignItems:'center', justifyContent:'center'}} onPress={()=>this.setState({flashMode:!this.state.flashMode})}>
        <Text style={{color:'#fff'}}>Click to turn on/off the flashlight</Text>
      </TouchableOpacity>
    </View>
    );
  }
onRead = (res) => {
    var a = res.data;
    console.log(a);
    var json = JSON.stringify(eval("(" + a + ")"));
    var dh = JSON.parse(json);
    console.log(dh.VIN);
    this.searchPlate(dh.VIN);

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});
