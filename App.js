import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setItem as setToken, removeItem as removeToken, getItem as getToken} from './storage';
import JWT from 'expo-jwt';

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






class LoginView extends React.Component {
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


class ShowUserData extends React.Component {
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