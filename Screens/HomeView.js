import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem as setToken, removeItem as removeToken, getItem as getToken} from './storage';
const API_URL = 'https://myworktimetracker.herokuapp.com'
