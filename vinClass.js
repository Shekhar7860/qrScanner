/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native';
import base64 from 'react-native-base64'

const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height
export default class vinClass extends Component {


    constructor(props){
      super(props)

      this.state = {
          plateNumber:'',
          dataNew: [],
        };

    }


        searchVin=()=>{

        if (!this.state.plateNumber) {
          Alert.alert('Enter Vin Number');

        }else {

        let username = 'demo';
        let password = 'metropolis01';
        let formdata = new FormData();
        let myheaders = new Headers();

        formdata.append('grant_type','password');
        formdata.append('username','testname');
        formdata.append('password','qawsedrf');
        var url1 = "http://www.makitti.com:81/syscor/api/vehicle/";
        var url2 = url1 + this.state.plateNumber;
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

          Alert.alert('Enter valid data');

        }else {

         this.props.navigation.navigate('resultView',{responseJson});

        }


        })
        .catch((error) => {
        console.error(error);
        });

        }

        }

  render(){
    return (
      <View style={styles.container}>
      <View style={{top: 0,width: SCREEN_WIDTH,height: 70,flexDirection: 'row',backgroundColor: '#427590'}}><TouchableOpacity style={{marginTop: 35,marginLeft: 15,flexDirection: 'row'}} onPress={()=>{this.props.navigation.goBack()}}><Image style={{width: 25 ,height: 20,tintColor: 'white'}} source={require('/Volumes/My Computer/Anuja Project/ANew/qr/images/back.png')}/>
      <Text style={{color: 'white'}}>Back</Text>
      </TouchableOpacity></View>
      <View style={{backgroundColor: 'lightgrey',width: SCREEN_WIDTH-20,height: 150, marginTop: 20,marginLeft: 10}}>
      <Text style={{alignSelf: 'center',marginTop: 10}}>Entrez le vin</Text>
      <TextInput placeholder = "65071"
           onChangeText={plateNumber => this.setState({plateNumber})}
      placeholderTextColor = 'grey'
      returnKeyType = "done"
      ref = {(input)=> this.passwordInput = input}
      style = {styles.input2} />
      <TouchableOpacity style={{marginTop: 15,flexDirection: 'row',width: "50%",height: 40,alignSelf: 'center',backgroundColor: '#427590',alignItems: 'center',justifyContent: 'center'}} onPress={this.searchVin}><Text style={{color: 'white'}}>Submit</Text></TouchableOpacity>
      </View>
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input2 :{
    height: 44,
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'white',
    borderRadius: 0 ,
    width: "93%",
    fontSize: 16,
    marginLeft: 10,
    marginTop:15
    },
});
