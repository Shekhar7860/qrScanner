import React, { Component } from 'react';
import { View, Text, Button,Image ,Dimensions,Alert,TouchableOpacity,AsyncStorage} from 'react-native';
const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height
export class Settings extends Component {
  logOutAction=()=>{
    AsyncStorage.setItem("signin","0");
    this.props.navigation.navigate('LoginS' )

}
  render() {
    return (
      <View>
      <Image source={require('./images/header.jpg')}
        style={{width:SCREEN_WIDTH,height: 170}} />

      <TouchableOpacity activeOpacity={0.5} onPress={this.logOutAction}><View style={{backgroundColor: 'red',alignSelf: 'center',width: SCREEN_WIDTH-40,height: 50,borderRadius: 6,marginTop: SCREEN_HEIGHT/2 - 170,alignItems: 'center',justifyContent: 'center'}}><Text style={{color: 'white',fontSize: 18}}>Deconnector</Text>
    </View></TouchableOpacity>

      </View>
    )
  }
};
//0.57.3
export default Settings;
