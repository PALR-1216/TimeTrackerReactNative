import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem as setToken, removeItem as removeToken, getItem as getToken} from './storage';

const API_URL = 'https://myworktimetracker.herokuapp.com'



export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      password:'',
      isLogin:false,
      userId:null
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

  async storeData(data) {
    try {
      return AsyncStorage.setItem(data, JSON.stringify(data));
      
  } catch (e) {
      console.log(e)
      
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
          // console.log(jsonRes)
          // this.setState({isLogin:true})
          // Alert.alert(`User ${jsonRes[0].userName} Found`)
          // Alert.alert(`User id ${jsonRes[0].userId}`)
          await setToken(jsonRes[0].userId)
          await this.storeData(jsonRes[0].userPassword)
          
          let result = await getToken()
          this.setState({
            userId:result,
            username:jsonRes[0].userName
          })
          

        }catch(error) {
          Alert.alert(`User was not found`)
        }
      })
    }
  }

  async Logout() {
    await removeToken('UserID')
    Alert.alert("token removed")



  }


  render() {

    if(this.state.userId) {
      return(
        <View style={styles.container}>
          <ShowUserData/>
          
          {/* <Text>hello {this.state.username}</Text>
          <Text>{this.state.userId}</Text> */}
        </View>
      )
    } 

    else{

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
}


class ShowUserData extends React.Component {
   constructor(props) {
    super(props)

    this.state = {
      userId:null,
      userPassword:null
    
    }
  }

  async storedData(data) {
      try {
        const value = await AsyncStorage.getItem(data)
        if(value !== null ) {
            return value ? JSON.parse(value) : null;
        }

    }catch(e) {
        console.log(e)
    }

  }

  async checkIfUserExist() {
    let result =  await this.storedData('UserID')
    if(result) {
      console.log(result)
    }
    else{
      return null
    }
  }

  render() {
    this.checkIfUserExist()
    return(
      <View>
        <Text>Home page</Text>
        
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


