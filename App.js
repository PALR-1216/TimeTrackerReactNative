import  {React, useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Navigation from './Screens/Navigation'
import LoginView from './Screens/LoginView';
import {AuthProvider} from './context/authContext'



// or any pure javascript modules available in npm

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
