import { React, useContext, useEffect , useRef} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { AuthContext } from '../context/authContext';
import Spinner from 'react-native-loading-spinner-overlay';
// import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import MyBottomSheet from '../Components/MyBottomSheet';
import BottomSheet from 'react-native-simple-bottom-sheet';
import MyHeader from '../Components/MyHeader';
import MyList from '../Components/MyList';


const API_URL = 'https://myworktimetracker.herokuapp.com'

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Navigation.navigate('Add')

const HomePageView = () => {
  const { userName, userId, userData, myTotalHours, myTotalMoney, isLoading, LogOut, FetchData } = useContext(AuthContext);
  const [showComponent, setShowComponent] = useState(false)
  const Navigation = useNavigation()
  const panelRef = useRef(null);

  // fetch(`${API_URL}/api/getUserHours/${userId}`).then(res => res.json()).then(data => setHours(data))

  FetchData(userId)

  //Load a timeOut to wait 4 seconds in my app to wait for data to load


  useEffect(() =>{
    setInterval(() =>{
      setShowComponent(true)

    }, 3500)
  }, [])


  // if (userData <= 0) {
  if (userData == 0) {  
    return (
      <SafeAreaView style={styles.container}>

        <LottieView
          autoPlay
          style={{ width: 400, height: 400, paddingBottom: 500 }}
          source={require('../assets/Lottie/106964-shake-a-empty-box.json')}

        />
        <Text style={styles.NoDataMsg}>No Data to display</Text>
        <Text style={{fontWeight:'bold'}}>Please enter Some Data</Text>

        {/* <Button title='LogOut' onPress={LogOut}/> */}

        <TouchableOpacity style={styles.floatingButton} onPress={() => console.log("pressed")}>
          <Image style={styles.floatinButtonImage} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png' }} />

        </TouchableOpacity>

      </SafeAreaView>

    )
  }

  else if(showComponent == false) {
    return (
      <SafeAreaView style={styles.container}>

        <LottieView
          autoPlay
          style={{ width: 400, height: 400, paddingBottom: 500 }}
          source={require('../assets/Lottie/106964-shake-a-empty-box.json')}

        />
        <Text style={styles.NoDataMsg}>Fetching Data</Text>
        
        {/* <TouchableOpacity style={styles.floatingButton} onPress={() => console.log("pressed")}>
          <Image style={styles.floatinButtonImage} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png' }} />

        </TouchableOpacity> */}

      </SafeAreaView>

    )

  }

  else{
   
    return (
      <SafeAreaView style={{ margin: 10, height: Dimensions.get('screen').height - 100 }}>
        <Spinner visible={isLoading} />

        {/* Components */}
        <MyHeader hours={myTotalHours} money={myTotalMoney}/>
        <MyList data={userData} />
         {/* Components */}
         {/* <Button title='LogOut' onPress={LogOut}/> */}

        <TouchableOpacity style={styles.floatingButton} onPress={() => panelRef.current.togglePanel()}>
          <Image style={styles.floatinButtonImage} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png' }} />

        </TouchableOpacity>

        <BottomSheet
          ref={(ref) => (panelRef.current = ref)}
          isOpen={false}
          sliderMaxHeight={Dimensions.get('window').height - 100}
          sliderMinHeight={0}>
            {/* here put the component for ading the data */}
          <MyBottomSheet/>
        </BottomSheet>

   

        {/* <Button title="LogOut" color="red"  onPress={LogOut}/> */}
      </SafeAreaView>
    )

  }

}



const mySheet = ({show}) => {
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    backgroundColor:'#FEFBF6'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },

  floatingButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 60
  },

  floatinButtonImage: {
    resizeMode: 'contain',
    width: 60,
    height: 60
  },

  NoDataMsg: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});


export default HomePageView;