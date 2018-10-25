/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
export default class resultScreen extends Component {

  constructor(props){
      super(props)


      this.state = {
        username:'',
        password:'',
        data:[],
        make:'',
        opr:'',
        plate:'',
        regis:'',
        vehicle:'',
        vin:'',
        year:''
      };



    }
componentDidMount(){


  if(this.props.navigation.state.params)
     {
      console.log(this.props.navigation.state.params)
      this.setState({data:this.props.navigation.state.params.responseJson})
     }
}
  // AsyncStorage.getItem("make").then((value) => {
  //
  //   this.setState({make:value});
  //
  //   }).done();
    //
    // AsyncStorage.getItem("operational").then((value) => {
    //
    //   this.setState({plate:value});
    //
    //   }).done();
    //
    //
    //   AsyncStorage.getItem("plate").then((value) => {
    //     this.setState({opr:value});
    //
    //     }).done();
    //
    //
    //     AsyncStorage.getItem("registration_status").then((value) => {
    //       this.setState({regis:value});
    //
    //
    //       }).done();
    //
    //
    //
    //       AsyncStorage.getItem("vehicle_model").then((value) => {
    //         this.setState({vehicle:value});
    //
    //
    //         }).done();
    //
    //
    //
    //         AsyncStorage.getItem("vin").then((value) => {
    //
    //           this.setState({vin:value});
    //
    //
    //           }).done();
    //
    //
    //
    //           AsyncStorage.getItem("year").then((value) => {
    //
    //             this.setState({year:value});
    //
    //
    //             }).done();


//{this.data.registration_status === "NOK" ? 'red':'#4dbd09'}
  render() {
    return (
      <View style={styles.container}>
      <View style={{top: 0,width: SCREEN_WIDTH,height: 70,flexDirection: 'row',backgroundColor: 'white'}}><TouchableOpacity style={{marginTop: 35,marginLeft: 15,flexDirection: 'row'}} onPress={()=>{this.props.navigation.goBack()}}><Image style={{width: 25 ,height: 20}} source={require('/Volumes/My Computer/Anuja Project/ANew/qr/images/back.png')}/>
      <Text>Back</Text>
      </TouchableOpacity></View>
    <View style={{backgroundColor: '#4dbd09' ,width: SCREEN_WIDTH-20,marginLeft: 10,top: 15,height: 120,borderRadius: 6,alignItems: 'center',justifyContent: 'center'}}><Text style={{color: 'yellow',fontSize: 20}}>Active</Text></View>
      <View style={{marginLeft: 0,width: SCREEN_WIDTH,height: 45,backgroundColor:'#9b9aac',marginTop: 20,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{color: 'white',fontSize: 17}}>VEHICULE D IDENTIFICATION</Text>
      </View>

      <View style={{width: SCREEN_WIDTH,height: 60,flexDirection: 'row',backgroundColor: '#DFDFDF',alignItems: 'center'}}>
      <Text style={{marginLeft: 10,fontSize: 17}}>Vin</Text>
      <Text style={{marginLeft: SCREEN_WIDTH-100,fontSize: 18}}>{this.state.data.vin}</Text>
      </View>
      <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>
        <View style={{width: SCREEN_WIDTH,height: 60,flexDirection: 'row',backgroundColor: '#DFDFDF',alignItems: 'center'}}>
        <Text style={{marginLeft: 10,fontSize: 17}}>Year</Text>
        <Text style={{marginLeft: SCREEN_WIDTH-100,fontSize: 18}}>{this.state.data.year}</Text>
        </View>
          <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>

          <View style={{width: SCREEN_WIDTH,height: 60,flexDirection: 'row',backgroundColor: '#DFDFDF',alignItems: 'center'}}>
          <Text style={{marginLeft: 10,fontSize: 17}}>Make</Text>
          <Text style={{marginLeft: SCREEN_WIDTH-200,fontSize: 18,width: 130,backgroundColor: 'clear',textAlign: 'right'}}>{this.state.data.make}</Text>
          </View>
            <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>


            <View style={{width: SCREEN_WIDTH,height: 60,flexDirection: 'row',backgroundColor: '#DFDFDF',alignItems: 'center'}}>
            <Text style={{marginLeft: 10,fontSize: 17}}>Model</Text>
            <Text style={{marginLeft: SCREEN_WIDTH-200,fontSize: 18,width: 130,backgroundColor: 'clear',textAlign: 'right'}}>{this.state.data.vehicle_model}</Text>
            </View>
              <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>


              <View style={{width: SCREEN_WIDTH,height: 60,flexDirection: 'row',backgroundColor: '#DFDFDF',alignItems: 'center'}}>
              <Text style={{marginLeft: 10,fontSize: 17}}>Color</Text>
              <Text style={{marginLeft: SCREEN_WIDTH-100,fontSize: 18}}>{this.state.data.color}</Text>
              </View>
                <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>

                <View style={{width: SCREEN_WIDTH,height: 60,flexDirection: 'row',backgroundColor: '#DFDFDF',alignItems: 'center'}}>
                <Text style={{marginLeft: 10,fontSize: 17}}>Plate</Text>
                <Text style={{marginLeft: SCREEN_WIDTH-150,fontSize: 18}}>{this.state.data.plate}</Text>
                </View>
                  <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>

                  <View style={{marginLeft: 0,width: SCREEN_WIDTH,height: 45,backgroundColor:'#9b9aac',marginTop: 0,justifyContent: 'center',alignItems: 'center'}}>
                      <Text style={{color: 'white',fontSize: 17}}>OTHER INFORMATION</Text>
                  </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
