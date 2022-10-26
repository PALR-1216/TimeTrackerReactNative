import {React, useContext} from 'react';
import {Text, View, StyleSheet, Button, StatusBar, FlatList, SafeAreaView, Dimensions} from 'react-native';
import {AuthContext} from '../context/authContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { FlashList } from '@shopify/flash-list';



const HomePageView = () =>{
  const {userInfo, userName, userData, isLoading, LogOut} = useContext(AuthContext);
  
  return(
    <SafeAreaView style={{ height: 800, width: Dimensions.get("screen").width, margin:10 }}>
    <Spinner visible={isLoading}/>    
    <MyList data={userData}/>
    <Button title="LogOut" color="red" onPress={LogOut}/>
    </SafeAreaView>
  )
}

const MyList = ({data}) =>{
  return (
    <FlashList
      data={data}
      renderItem={({ item }) => <View>
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
});


export default HomePageView;