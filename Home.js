import React, { Component } from 'react';
import { View, Text, Button,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import base64 from 'react-native-base64'
const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height
export class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
        plateNumber:'',
        dataNew: [],
      };

  }
moveToResult=()=>{

  this.props.navigation.navigate('vinC');
}

searchPlate=()=>{

if (!this.state.plateNumber) {
  Alert.alert('Enter Plate Number');

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
var url3 = url2 + "/plate";
console.log(url3);
myheaders.append('Authorization', ' Basic ' + base64.encode(username + ":" + password));
fetch(url3, {
method: 'GET',
headers: myheaders
}).then((response) => response.json())
.then((responseJson) => {
//console.log(responseJson);
if (!responseJson.vin) {

  Alert.alert("Enter valid data");

}else {

  this.props.navigation.navigate('resultView',{responseJson});

}


})
.catch((error) => {
console.error(error);
});

}

}


openScanner=()=>{
  this.props.navigation.navigate('ScanViewer' )


}

  render() {
      return (
        <View style={styles.container}>
          <Image source={require('./images/header.jpg')}
            style={{width:SCREEN_WIDTH,height: 170}} />
          <Text style={{fontWeight: 'bold',fontSize: 20,marginLeft: 15,marginTop: 15}}>Bienvenue,Username</Text>
            <Text style={{fontSize: 16,marginTop: 45,marginLeft: 15}}>Enter le numero de plaque</Text>
          <View style={{marginLeft: 15,width: SCREEN_WIDTH-30,height: 50,backgroundColor: 'clear',flexDirection: 'row',marginTop:5}}>
            <View style={{width: "60%",height: 50,backgroundColor: 'white',flexDirection: 'row',borderWidth: 1,borderColor: 'lightgrey',borderRadius: 6}}>

              <TextInput placeholder = "RCX20039"
                   onChangeText={plateNumber => this.setState({plateNumber})}
              placeholderTextColor = 'grey'
              returnKeyType = "done"
              ref = {(input)=> this.passwordInput = input}
              style = {styles.input2} />
              </View>
              <TouchableOpacity activeOpacity={0.5} onPress={this.searchPlate} style={{width: "35%",height: 50,backgroundColor: 'lightblue',flexDirection: 'row',marginLeft: "5%",borderRadius: 6}}><View style={{flexDirection: 'row'}}>
                <Image source={require('./images/search.png')}
                  style={{width:25,height: 25,alignSelf: 'center',marginLeft: 8}} />
                <Text style={{alignSelf: 'center',marginLeft: 10}}>chercher</Text>
              </View></TouchableOpacity>

          </View>
          <View style={{marginLeft: 15,width: SCREEN_WIDTH-30,height: 30,backgroundColor:'clear',marginTop: 20,flexDirection: 'row'}}>
            <Text style={{alignSelf: 'center',width: SCREEN_WIDTH/2 - 30}}>Scannez le vin</Text>
              <Text style={{alignSelf: 'center',left: 30}}>Enter le numero de vin</Text>
          </View>
          <View style={{marginLeft: 15,width: SCREEN_WIDTH-30,height: 50,backgroundColor:'clear',marginTop: 0,flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.5} onPress={this.openScanner} style={{width: "48%",height: 50,backgroundColor: '#ffbb00',flexDirection: 'row',borderWidth: 1,borderColor: 'lightgrey',borderRadius: 6}}><View style={{width: "100%",height: 48,backgroundColor: '#ffbb00',flexDirection: 'row'}}>

              <Image source={require('./images/scanner.png')}
                style={{width:30,height: 30,alignSelf: 'center',marginLeft: 12}} />
              <Text style={{alignSelf: 'center',marginLeft: 10,color: 'white',fontSize: 17}}>Scanner</Text>

            </View></TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} onPress={this.moveToResult} style={{width: "48%",height: 50,backgroundColor: 'black',flexDirection: 'row',borderWidth: 1,borderColor: 'lightgrey',borderRadius: 6,marginLeft: "4%"}}>
            <View style={{width: "100%",height: 50,backgroundColor: 'black',flexDirection: 'row',borderWidth: 1,borderColor: 'lightgrey',borderRadius: 6}}>

            <Image source={require('./images/entrez_gray.png')}
              style={{width:30,height: 30,alignSelf: 'center',marginLeft: 12}} />
            <Text style={{alignSelf: 'center',marginLeft: 10,color: 'white',fontSize: 17}}>Entrez le vin</Text>
          </View></TouchableOpacity>
          </View>
          <View style={{marginLeft: 0,width: SCREEN_WIDTH,height: 45,backgroundColor:'#9b9aac',marginTop: 20,justifyContent: 'center',alignItems: 'center'}}>
              <Text style={{color: 'white',fontSize: 17}}>RECHERCHE RECENTE</Text>
          </View>
          <View style={{marginLeft: 0,width: SCREEN_WIDTH,height: 70,backgroundColor:'clear',marginTop: 0,alignItems: 'center',flexDirection: 'row'}}>
            <Image source={require('./images/dark_scanner.png')}
              style={{width:40,height: 40,marginLeft: 12}} />
              <View style={{marginLeft: 15,width: "50%",height: 70,backgroundColor:'clear',marginTop: 0,justifyContent: 'center',alignItems: 'flex-start',flexDirection: 'column'}}>
              <Text style={{color: 'black',fontSize: 16}}>65071</Text>
              <Text style={{color: 'grey',fontSize: 17,marginTop: 8}}>Vin Number</Text>


              </View>
                <Text style={{color: 'grey',fontSize: 17,marginLeft: 8}}>18/10/2018</Text>

          </View>
          <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>

          <View style={{marginLeft: 0,width: SCREEN_WIDTH,height: 70,backgroundColor:'clear',marginTop: 0,alignItems: 'center',flexDirection: 'row'}}>
            <Image source={require('./images/entrez_darkgray.png')}
              style={{width:40,height: 40,marginLeft: 12}} />
              <View style={{marginLeft: 15,width: "50%",height: 70,backgroundColor:'clear',marginTop: 0,justifyContent: 'center',alignItems: 'flex-start',flexDirection: 'column'}}>
              <Text style={{color: 'black',fontSize: 16}}>RCX20039</Text>
              <Text style={{color: 'grey',fontSize: 17,marginTop: 8}}>Plague</Text>


              </View>
                <Text style={{color: 'grey',fontSize: 17,marginLeft: 8}}>18/10/2018</Text>

          </View>
          <View style={{backgroundColor: 'grey',marginLeft: 0,width: SCREEN_WIDTH,height: 1}}></View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9e9e9'
    },
    input2 :{
      height: 44,
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'white',
      borderRadius: 0 ,
      width: "93%",
      fontSize: 16,
      marginLeft: 8,
      marginTop:2
      },
  });

export default Home;
