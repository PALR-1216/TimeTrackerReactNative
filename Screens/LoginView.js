import { React, useState , useContext} from 'react';
import { Text, View, StyleSheet, TextInput, Button,Alert , StatusBar} from 'react-native';
import {AuthContext} from '../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay';
const LoginView = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, Login} = useContext(AuthContext)
  return (
    <View style={styles.container}>
    <StatusBar hidden={true}/>

    <Spinner visible={isLoading}/>
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
      <Button title="Login" style={styles.input}  onPress={() => {

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
    </View>
  );
};

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

export default LoginView;
