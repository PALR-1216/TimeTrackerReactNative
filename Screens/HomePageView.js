import {React, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Button, StatusBar, FlatList, SafeAreaView, Dimensions} from 'react-native';

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

      </SafeAreaView>
      
    )
  }

  return(
    <SafeAreaView style={{ height: 400, margin:10 }}>
    <Spinner visible={isLoading}/>   

     
    <MyList data={userData}/>
    
    
    <Button title="LogOut" color="red"  onPress={LogOut}/>
    </SafeAreaView>
  )
}

const MyList = ({data}) =>{
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <View style={styles.listView}>
          <Text>Hours </Text>
          <Text>{item.totalHour}</Text>
      </View>}
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

  listView:{
    flexDirection:'row',
    flexWrap:'wrap',
    padding:5,
    backgroundColor:'#E5E4E2',
    borderRadius:5,
    height:35,
    marginBottom:10,
    marginTop:10
  },

  NoDataMsg:{
    fontSize:30,
    fontWeight:'bold'
  }
});


export default HomePageView;