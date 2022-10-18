import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert} from 'react-native';


export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      username:'',
      password:''
    }
  }

  onLogin () {
    const{username,password} = this.state

    if(!username) {
      Alert.alert("please enter username")
    }

    // Alert.alert('Credentials', `${username} + ${password}`);

    else if(!password) {
      Alert.alert("Please enter password")
    }

    else {

      Alert.alert(`username ${username} password ${password}`)

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
        
        />

      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({password})}
        placeholder={'Password'}
        style={styles.input}
        
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
