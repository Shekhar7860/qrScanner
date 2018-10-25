import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView ,
ImageBackground,
Dimensions,
TextInput,
TouchableOpacity,
Alert,
StyleSheet,
AsyncStorage
} from 'react-native';
const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height



export class Login extends Component {

  constructor(props){
      super(props)

      AsyncStorage.getItem("signin").then((value) => {

          if (value == "1") {

            this.props.navigation.navigate('HomeScreen' )

          }else {

          }

        }).done();
      this.state = {
        username:'',
        password:''

      };

    }

    skipAction=()=>{

      if (this.state.username != "demo") {
                Alert.alert("Alert","Enter valid username" );

              }else if (this.state.password != "metropolis01") {
                Alert.alert("Alert","Enter valid password" );

              }else{
                AsyncStorage.setItem("signin","1");
              this.props.navigation.navigate('HomeScreen' )
              }
  }

  componentWillMount(){



  }
  render() {
    return (
      <ImageBackground
    source={require('./images/splash_new01.png')}
   style={{width:SCREEN_WIDTH,height: SCREEN_HEIGHT,left: 0,top: 0,justifyContent: 'center',alignItems: 'center'}}>
   <View style={{backgroundColor: "clears",height: 200,width: width-40,flexDirection: 'column',alignItems: 'center',marginTop: 30}}>
     <View style={{backgroundColor: "lightgrey",height: 50,width: width-60,marginTop: 20,justifyContent: 'center',alignItems: 'center',  borderRadius:3,    borderColor: 'white',borderWidth: 1.5}}>
       <TextInput placeholder = "Entez votre nom d'utilisateur"
            onChangeText={username => this.setState({username})}
  placeholderTextColor = 'black'
  returnKeyType = "done"
  autoCorrect={false}
  autoCapitalize = 'none'

  ref = {(input)=> this.passwordInput = input}
  style = {styles.input2} />
     </View>

     <View style={{backgroundColor: "lightgrey",height: 50,width: width-60,marginTop: 20,justifyContent: 'center',alignItems: 'center',  borderRadius:3,    borderColor: 'white',borderWidth: 1.5}}>
       <TextInput placeholder = "Entez votre mot de passe"
            onChangeText={password => this.setState({password})}
     placeholderTextColor = 'black'
     returnKeyType = "done"
     autoCorrect={false}
     autoCapitalize = 'none'
     ref = {(input)=> this.passwordInput = input}
     style = {styles.input2} />
     </View>

     <TouchableOpacity activeOpacity={0.5} onPress={this.skipAction}><View style={{backgroundColor: "#ffbb00",height: 40,width: width-90,marginTop: 20,justifyContent: 'center',alignItems: 'center',  borderRadius:20}}>
       <Text style={{color: 'white',fontWeight: '400',fontSize:16 }}>ENTRER</Text>
     </View></TouchableOpacity>
   </View>
    </ImageBackground>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input2 :{
    height: 42,
    backgroundColor: 'lightgrey',
    color: 'black',
    borderColor: 'white',
    borderRadius: 0 ,
    width: SCREEN_WIDTH-90,
    fontSize: 16
    },
});

export default Login;
