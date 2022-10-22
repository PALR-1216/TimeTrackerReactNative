import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem as setToken, removeItem as removeToken, getItem as getToken} from './storage';
import LoginView from './LoginView';
const API_URL = 'https://myworktimetracker.herokuapp.com'
 
export default class ShowUserData extends React.Component {
    constructor(props) {
     super(props)
     
     
 
     this.state = {
       userId:null,
       userPassword:null,
       userName:null
     
     }
   }
 
 
   async checkIfUserExist() {
     console.log(await getItem('userId'))
 
   
   }
 
   render() {
     this.checkIfUserExist()
     return(
       <View>
         
         <Text>Home page</Text>
         <Button 
         title='LogOut' 
         onPress={this.Logout}
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