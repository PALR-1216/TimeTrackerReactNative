import React, {useContext} from 'react';
import {Text,View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginView from './LoginView';
import HomePageView from './HomePageView';
import {AuthContext} from '../context/authContext'
const Stack = createNativeStackNavigator();




const Navigation =  () =>{

  const {userInfo, userId, CheckIfUserIsLoggedIn } = useContext(AuthContext)
  CheckIfUserIsLoggedIn()
  console.log(userId)


  
  return(
    <NavigationContainer>
    <Stack.Navigator>

    
    {userId ? (

      <Stack.Screen name='Home' component={HomePageView} options={{headerShown:false}}/>
    ) : (

      <Stack.Screen name='Login' component={LoginView} options={{headerShown:false}}/>
    )}
    
      
    </Stack.Navigator>
      
    </NavigationContainer>

  );

}

export default Navigation;