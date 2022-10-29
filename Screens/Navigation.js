import React, { useEffect, useState, useCallback, useContext} from 'react';
import {Button, Text,View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import LoginView from './LoginView';
import HomePageView from './HomePageView';
import ProfileView from './ProfileView'
import {AuthContext} from '../context/authContext'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const DrawerRoutes = () =>{
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomePageView} />
      {/* <Drawer.Screen name="ProfileView" component={ProfileView} /> */}
     
    </Drawer.Navigator>
  );
}


const Navigation =  () =>{

  const { userName, userId, CheckIfUserIsLoggedIn , LogOut} = useContext(AuthContext)
  
  CheckIfUserIsLoggedIn()
  // console.log(userId)



  if(userId) {
    return(
      <NavigationContainer>
          <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomePageView} options={{ title:`Home`, headerTitleStyle:{fontSize:23, fontWeight:'bold'}}} />
        {/* <Drawer.Screen name="ProfileView" component={ProfileView} /> */}
      
      </Drawer.Navigator>

      </NavigationContainer>
      

      
     
    );
    
  }

  else{
    return(
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen name='Login' component={LoginView} options={{headerShown:false}}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  
  // return(
  //   <NavigationContainer>
  //   <Stack.Navigator>


    
  //   {userId ? (

  //     <Stack.Screen name='Home' component={HomePageView} options={{title: `Welcome ${userName}`, headerLargeTitle:true}} />
  //   ) : (

  //     <Stack.Screen name='Login' component={LoginView} options={{headerShown:false}}/>
  //   )}
    
      
  //   </Stack.Navigator>
      
  //   </NavigationContainer>

  // );


  // <NavigationContainer>
  // <Stack.Navigator>
  
  //   <Stack.Screen name='Home' component={DrawerRoutes} options={{}} />
    
    
  
  // </Stack.Navigator>
  // </NavigationContainer>


}

export default Navigation;