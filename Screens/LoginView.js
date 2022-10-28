import { React, useState , useContext} from 'react';
import { Text, View, StyleSheet, TextInput, Button,Alert , StatusBar, KeyboardAvoidingView} from 'react-native';
import LottieView from 'lottie-react-native';
import {AuthContext} from '../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay';


const LoginView = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading ,Login, error} = useContext(AuthContext)
  return (
   
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
    <StatusBar hidden={true}/>
    <Spinner visible={isLoading}/>
    <LottieView
    autoPlay
    style={{width:200, height:200}}
    source={require('../assets/Lottie/78969-money.json')}
    
    />
    <Text style={styles.Logo}>Work Tracker</Text>
      <TextInput
        placeholder="Enter userName"
        style={styles.input}
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(pass) => setPassword(pass)}
      />
      <Button title="Login" style={styles.logInBtn}  onPress={() => {

        if(!userName) {
          Alert.alert("Please enter credentials")
        }

        else if(!password) {
          Alert.alert("Please enter credentials")
        }
       
        else  {
          //Log user here
          Login(userName, password);
        }

        
        
      }}/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    // marginTop:-220
  },
  input: {
    width: 220,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius:5
  },



  Logo:{
    fontSize:40,
    margin:45,
    letterSpacing:2,
    // fontWeight:'bold'
  }
});

export default LoginView;
