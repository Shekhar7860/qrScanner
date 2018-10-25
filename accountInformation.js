/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  AsyncStorage
} from 'react-native';
const {width,height} = Dimensions.get('window')
import { DrawerActions } from 'react-navigation';

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
export default class accountInformation extends Component {
  constructor(props){
    super(props)

    this.state={
        editStatus:false,
        fName:"",
        lName:"",
        MobNum:"",
        fsName:"",
        lsName:"",
        userRefString:"",
        userId:"",
        imageUrl:""
    }

  }

  editAction=()=>{

  //  {this.firstName.focus();}
    this.setState({editStatus:this.state.editStatus == false ? true : false})

    if (this.state.editStatus) {
      this.PostDetails();
    }else {

    }

  }
  async PostDetails() {


      var data = {
       firstName: this.state.fName,
       lastName: this.state.lName,
       userRef: this.state.userId,

      };
      try {
       let response = await fetch(
        "http://139.59.80.65/espin_api/users/updateprofile",
        {
          method: "POST",
          headers: {
           "Accept": "application/json",
           "Content-Type": "application/json"
          },
         body: JSON.stringify(data)
       }
      );


       if (response.status >= 200 && response.status < 300) {
         this.setState({tapStatus:false});

         const myArrStr = response._bodyInit;
         const newData = JSON.parse(myArrStr)
         console.log(newData);
         const newData1 = newData.data
         const newData21 = newData1[0]


      }
     } catch (errors) {

       Alert.alert(errors);
      }
  }

  loginAction=()=>{

  //  this.props.navigation.navigate("login")
// this.state.editStatus == false ? {require('/Volumes/My Computer/Anuja Project/ANew/qr/Images/edit.png')} : {require('/Volumes/My Computer/Anuja Project/ANew/qr/Images/save.png')}



  }

  async getDetails() {


      var data = {
       userRef: this.state.userId,

      };
      try {
       let response = await fetch(
        "http://139.59.80.65/espin_api/users/getdata",
        {
          method: "POST",
          headers: {
           "Accept": "application/json",
           "Content-Type": "application/json"
          },
         body: JSON.stringify(data)
       }
      );


       if (response.status >= 200 && response.status < 300) {

         const myArrStr = response._bodyInit;
         const newData = JSON.parse(myArrStr)
         console.log(newData);
         const newData1 = newData.data
         const newData21 = newData1[0]
         if (newData21['firstName'] === null) {
           console.log("false");

         }else {
           console.log("true");
           this.setState({fsName:newData21['firstName'],fName:newData21['firstName']})

         }

         if (newData21['lastName'] === null) {
           console.log("false");

         }else {
           console.log("true");
           this.setState({lsName:newData21['lastName'],lName:newData21['lastName']})

         }

         if (newData21['image'] === null) {

}else {

  this.setState({imageUrl:newData21['image']})

}


}


     } catch (errors) {
       Alert.alert(errors);
      }
  }
  componentDidMount(){
this.getUserRef();
}
getUserRef=()=>{

  AsyncStorage.getItem("userRef").then((value) => {
        console.log({"userRef": value});
        this.setState({userId:value});
        if (!this.state.userId) {

        }else{
        this.getDetails();

        }

      }).done();


}
  render() {
    return (
      <View style={styles.container}>
        <View style={{top: 0,width: SCREEN_WIDTH,height: 70,flexDirection: 'row'}}><TouchableOpacity style={{marginTop: 35,marginLeft: 15}} onPress={()=>{this.props.navigation.dispatch(DrawerActions.openDrawer())}}><Image style={{width: 25 ,height: 20}} source={require('/Volumes/My Computer/Anuja Project/ANew/qr/Images/toggle.png')}/></TouchableOpacity>
        <View style={{width: width-100 ,justifyContent: 'center',alignItems: 'center',marginTop: 20,backgroundColor: 'clear'}}>
          <Text style={{color: 'black',justifyContent: 'center',alignItems: 'center',fontSize: 16,fontWeight: '500'}}>ACCOUNTS INFORMATION</Text>
        </View>

 <TouchableOpacity onPress={this.editAction}><Image style={{width: 25 ,height: 20,top: 32,left: 0}} source = {this.state.editStatus == false ? require('/Volumes/My Computer/Anuja Project/ANew/qr/Images/edit.png'):require('/Volumes/My Computer/Anuja Project/ANew/qr/Images/save.png')}/></TouchableOpacity>
      </View>
      <View style={{width: width,height: 1,backgroundColor: '#dedede',top: 0}}></View>
      <View style={styles.container2}>
    <View style={{top: 60,width: SCREEN_WIDTH-30,height: SCREEN_HEIGHT-150,flexDirection: 'column',left: 15,backgroundColor: 'white'}}>
      <Image
        source = {{uri:this.state.imageUrl}}
        style = {styles.imgStyle}
        onPress={this.loginAction}
        />
      <View style={{top: 0,width: SCREEN_WIDTH-30,height: 70,flexDirection: 'column',left: 0,backgroundColor: 'white'}}>
        <Text style={{left: 4,color: 'grey'}}>First Name</Text>
          <TextInput placeholder = "Enter first name"
            onChangeText={fName => this.setState({fName})}
            editable={this.state.editStatus}
          placeholderTextColor = 'black'
          returnKeyType = "go"
          ref = {(input)=> this.firstName = input}
          value = {this.state.fsName}
          autoFocus = {false}
          style = {styles.input2} />
        <View style={{width: width-30,height: 1,backgroundColor: '#dedede',top: 5}}></View>
      </View>
      <View style={{top: -15,width: SCREEN_WIDTH-30,height: 70,flexDirection: 'column',left: 0,backgroundColor: 'white'}}>
        <Text style={{left: 4,color: 'grey'}}>Last Name</Text>
          <TextInput placeholder = "Enter last name"
          editable={this.state.editStatus}
          onChangeText={lName => this.setState({lName})}
          placeholderTextColor = 'black'
          returnKeyType = "go"
          ref = {(input)=> this.passwordInput = input}
          value = {this.state.lsName}
          style = {styles.input2} />
        <View style={{width: width-30,height: 1,backgroundColor: '#dedede',top: 5}}></View>
      </View>
      <View style={{top: -13,width: SCREEN_WIDTH-30,height: 70,flexDirection: 'column',left: 0,backgroundColor: 'white'}}>
        <Text style={{left: 4,color: 'grey'}}>Phone Number</Text>
          <TextInput placeholder = "9876543210"
          editable = {false}
          placeholderTextColor = 'black'
          returnKeyType = "go"
          ref = {(input)=> this.passwordInput = input}
          style = {styles.input2} />
        <Text style={{left:width-90,top: -40,color: 'green'}}>verified</Text>
        <View style={{width: width-30,height: 1,backgroundColor: '#dedede',top: -15}}></View>
      </View>
    </View>

</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  container2: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  imgStyle:{
    top: 0,
    width:100,
    left: width/2 - 70,
    height:100,
    borderRadius: 50,
  },
  input2 :{
    height: 40,
    backgroundColor: 'white',
    top:0,
    paddingHorizontal: 4,
    color: 'black',
    left:0,
    borderColor: 'white',
    borderRadius: 0 ,
    width: width-120
    }
});
