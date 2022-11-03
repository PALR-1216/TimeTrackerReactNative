import { React, useContext, useEffect , useRef} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { AuthContext } from '../context/authContext';
import Spinner from 'react-native-loading-spinner-overlay';
// import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const MyHeader = ({ hours, money }) => {
    return (
      <View style={{backgroundColor:'white', flex:.2, alignItems:'flex-start', justifyContent:'center', borderRadius:15}}>
        <Text style={{fontWeight:'bold', marginLeft:10, fontSize:30}}>Total Money - <MaterialCommunityIcons name="cash" size={24} color="grey" />{money}</Text>
        <Text style={{fontWeight:'bold', marginLeft:10, fontSize:30}}>Total Hours - <MaterialCommunityIcons name="clock-time-four-outline" size={24} color="grey" /> {hours}</Text>
      </View>
    )
}
  

  export default MyHeader;