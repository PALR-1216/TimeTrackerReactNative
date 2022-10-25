import {React, useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../context/authContext';
import Spinner from 'react-native-loading-spinner-overlay';



const HomePageView = () =>{
  const {userInfo, isLoading} = useContext(AuthContext);
  return(
    <View style={styles.container}>
    <Spinner visible={isLoading}/>
    <Text>Welcome user {userInfo.userName}</Text>
    <Button title="LogOut" color="red" onPress={() =>{

    }}/>
    </View>
  )
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


export default HomePageView;