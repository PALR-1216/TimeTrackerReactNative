import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem as setToken, removeItem as removeToken, getItem as getToken} from '../storage';
const API_URL = 'https://myworktimetracker.herokuapp.com'


//TODO:Here i want to make the login page an auth user if user is auth then show home if not then show login 





export default class LoginView extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username:'',
        password:'',
        isLogin:false,
        userId:null
      }
    }
  
   
  
  
    onLogin () {
      const{username,password} = this.state
  
      if(!username) {
        Alert.alert("please enter Credentials")
      }
  
      // Alert.alert('Credentials', `${username} + ${password}`);
  
      else if(!password) {
        Alert.alert("Please enter Credentials")
      }
  
      else {
        const payLoad = {
          userName:username,
          password:password
        }
  
        // Alert.alert(`username ${username} password ${password}`)
        
        
        fetch(`${API_URL}/Apilogin`,{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
        },
  
        body:JSON.stringify(payLoad)
        })
        .then(async res =>{
          try{
            let jsonRes = await res.json()
          console.log(jsonRes)
          //store the variables
  
            await setItem(jsonRes[0].userName)
            await setItem(jsonRes[0].userId)
            // await AsyncStorage.setItem('userPassword', JSON.stringify(jsonRes[0].user));
            // let name = await AsyncStorage.getItem('userName')
            
            
  
          }catch(error) {
            Alert.alert(`User was not found`)
           
          }
        })
      }
    }
  
  
    render() {
  
  
  
        return(
          <View style={styles.container}>
            <StatusBar hidden={true}/>
            
    
            
            <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
            placeholder={'Username'}
            style={styles.input}
            autoCorrect={false}
            
            />
    
          <TextInput
            value={this.state.password}
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            placeholder={'Password'}
            style={styles.input}
            autoCorrect={false}
            
            />
    
              <Button
              title={'Login'}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
                
    
            />
          </View>
        )
    }
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });