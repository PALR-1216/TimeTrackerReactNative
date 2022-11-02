import { React, useContext, useEffect , useRef} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { AuthContext } from '../context/authContext';
import Spinner from 'react-native-loading-spinner-overlay';
// import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const MyHeader = ({ hours, money }) => {
    return (
      <View style={{flexDirection:'row', flexWrap:'wrap', backgroundColor:'#FCF8E8',  paddingBottom:40}}>
        <View style={{alignItems:'flex-start', flexDirection:'row'}}>
        <FontAwesome5 name="clock" size={30} color="black" />
          <Text style={{fontWeight:'bold', fontSize:24}}> Total Hours {hours}</Text>
        </View>
  
        <View style={{alignItems:'flex-end', flex:1, flexDirection:'row', paddingLeft:20}}>
        <MaterialIcons name="attach-money" size={25} color="black" />
          <Text style={{fontWeight:'bold', fontSize:24}}>Total Money {money}</Text>
        </View>
  
      </View>
    )
}
  

  export default MyHeader;