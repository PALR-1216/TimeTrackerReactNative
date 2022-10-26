import  {React, useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Navigation from './Screens/Navigation'
import LoginView from './Screens/LoginView';
import {AuthProvider} from './context/authContext'



<<<<<<< Updated upstream
// or any pure javascript modules available in npm
=======
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
      userName:getItems('userName')
    }
  }



 render() {

    return(
      <SafeAreaView style={styles.container}>
        <Text>{this.state.userName}</Text>
        {/* <LoginView/> */}
      </SafeAreaView>
    )
>>>>>>> Stashed changes

export default function App() {
  
  return (
    

    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
