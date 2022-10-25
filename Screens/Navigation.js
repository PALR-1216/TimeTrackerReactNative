import React, {useContext} from 'react';
import {Text,View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from './LoginView';
import HomePageView from './HomePageView';
import {AuthContext} from '../context/authContext'
const Stack = createNativeStackNavigator();

const Navigation = () =>{

  const {userInfo} = useContext(AuthContext)
  return(
    <NavigationContainer>
    <Stack.Navigator>

    
    {userInfo.id ? (

      <Stack.Screen name='Home' component={HomePageView} options={{headerShown:false}}/>
    ) : (

      <Stack.Screen name='Login' component={LoginView} options={{headerShown:false}}/>
    )}
    
      
    </Stack.Navigator>
      
    </NavigationContainer>

  );

}

export default Navigation;