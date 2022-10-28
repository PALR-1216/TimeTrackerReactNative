import {React, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Button, StatusBar, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';

import {AuthContext} from '../context/authContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
const API_URL = 'https://myworktimetracker.herokuapp.com'




const HomePageView = () =>{
  const {userName, userId, userData, isLoading, LogOut, FetchData} = useContext(AuthContext);
  // const [hours, setHours] = useState([])
  // fetch(`${API_URL}/api/getUserHours/${userId}`).then(res => res.json()).then(data => setHours(data))

  FetchData(userId)
  if(userData <= 0) {
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.NoDataMsg}>No Data to display</Text>
        <Button title='LogOut' onPress={() => LogOut}/>

      </SafeAreaView>
      
    )
  }

  return(
    <SafeAreaView style={{ height: Dimensions.get('screen').height, margin:10 }}>
    <Spinner visible={isLoading}/>   

    <MyList data={userData}/>
    
    <TouchableOpacity style={styles.floatingButton} onPress={() => Alert.alert("Pressed")}>
      <Image style={styles.floatinButtonImage}  source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828817.png'}}/>
      
    </TouchableOpacity>
    
    
    {/* <Button title="LogOut" color="red"  onPress={LogOut}/> */}
    </SafeAreaView>
  )
}

const MyList = ({data}) =>{
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => 
      <View style={styles.listContainer}>
        <View style={styles.listRow}>
            <Text>Hours </Text>
            <Text>{item.totalHour}</Text>
           

        </View>
      </View>
      
      }
      estimatedItemSize={200}
    />
  );
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

  listRow:{
    flexDirection:'row',
    flexWrap:'wrap',
    padding:5,
    width:'100%',
    // backgroundColor:'#E5E4E2',
    backgroundColor:'white',
    borderRadius:10,
    height:70,
    marginTop:5,
    // justifyContent:'center',
    shadowOpacity:0.08,
    //for ios
    shadowOffset:{
      width:0,
      height:20
    },
    shadowRadius:10,
    //for android
    elevation:5,
    paddingTop:30
  },

  listContainer:{
    paddingTop:10,
    
 
  },

  floatingButton:{
    position:'absolute',
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    right:30,
    bottom:80
  },

  floatinButtonImage:{
    resizeMode:'contain',
    width:60,
    height:60 
 },

  NoDataMsg:{
    fontSize:30,
    fontWeight:'bold'
  }
});


export default HomePageView;