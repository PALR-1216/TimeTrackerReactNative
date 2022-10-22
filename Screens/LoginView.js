import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem as setToken, removeItem as removeToken, getItem as getToken} from '../storage';
const API_URL = 'https://myworktimetracker.herokuapp.com'


//TODO:Here i want to make the login page an auth user if user is auth then show home if not then show login 



export default class LoginView extends React.Component  {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <View>

            </View>
        )
    }
}
