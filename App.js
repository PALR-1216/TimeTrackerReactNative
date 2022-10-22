import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setItem as setToken, removeItem as removeToken, getItem as getToken} from './storage';
import JWT from 'expo-jwt';
import LoginView from './Screens/LoginView';
import ShowUserData from './Screens/showUserData';

const API_URL = 'https://myworktimetracker.herokuapp.com'


async function getItems(Item) {
  try {
    const value = await AsyncStorage.getItem(Item)
    if(value !== null ) {
        return value ? JSON.parse(value) : null;
    }

}catch(e) {
    console.log(e)
}
}


export default class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      userId:null,
      userName:null
    }
  }



 render() {

    return(
      <SafeAreaView style={styles.container}>
        <LoginView/>
      </SafeAreaView>
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






async function setItem(item) {
    try {
      return AsyncStorage.setItem(`${item}`, JSON.stringify(item));
      
  } catch (e) {
      console.log(e)
      
  }
}


async function getItem(item) {
    try {
      const value = await AsyncStorage.getItem(item)
      if(value !== null ) {
          return value ? JSON.parse(value) : null;
      }

  }catch(e) {
      console.log(e)
  }

}


async function removeItem(item) {
  try{
    await AsyncStorage.removeItem(item)

  }catch(e) {
    console.log(e)
  }
}