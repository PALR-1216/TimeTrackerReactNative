import React, {createContext, useState} from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
// import BASE_URL from '../src/config'
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = 'https://myworktimetracker.herokuapp.com'

export const AuthContext = createContext();


export const AuthProvider = ({children}) =>{

  const [isLoading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState({})
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [myTotalHours, setTotalHours] = useState(null)
  const [myTotalMoney, setTotalMoney] = useState(null)
  const [showAdd, setShowAdd] = useState(false)


  const Login = (userName, password) => {
    setLoading(true)

    const payload = {
      userName:userName,
      password:password
    }

   fetch(`${API_URL}/apilogin`, {
     method:"POST",
     headers:{
       'Content-Type': 'application/json',
     },
     body:JSON.stringify(payload)
   })
   .then(async res =>{

    let jsonRes = await res.json()
    if(jsonRes.Status === "Error") {
      Alert.alert("User was not found")
      setLoading(false)
    }

    else{
      try {
        let data = jsonRes.User
        console.log(data)
       

        AsyncStorage.setItem('userId', `${data[0].userId}`)
        AsyncStorage.setItem('userName', `${data[0].userName}`)
        AsyncStorage.setItem('userEmail', `${data[0].userEmail}`);    
        setLoading(false)  
        
      } catch (error) {
        console.log(error)
        setLoading(false)
        
      }
    }
   })
  }

  const LogOut = () =>{
    //logout function in api in my website
    try {
      // setLoading(true)
      // AsyncStorage.removeItem('userInfo')
      AsyncStorage.removeItem('userId')
      let id = AsyncStorage.getItem('userId')

    
      AsyncStorage.removeItem('userName')
      AsyncStorage.removeItem('userEmail')
      setUserInfo({})
      setLoading(false)
      console.log("User has been logged off")
      
    } catch (error) {
      console.log(error.message)
      
    }
  }


  const CheckIfUserIsLoggedIn = async() =>{
    try {
      const jsonValue = await AsyncStorage.getItem('userId')
      const name = await AsyncStorage.getItem('userName')
      const email = await AsyncStorage.getItem('userEmail');
      setUserId(jsonValue)
      setUserName(name)
      setUserEmail(email)
      
      // return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }
  }


  //what info should i get from the user?
  //get all hours from user with userId
  //but to make it secure we need to make a jwt with the user id and username
  //but for now just use the userId to test the Api
  //example baseUrl/api/getUserHours/token=token here
  //validate the token and verify its data
  
  //I think i can make a post method to make it more secure, i can post the user id and get the data

  
  const FetchData = (id) =>{
    // fetch(`${API_URL}/api/getUserHours/${id}`).then(res => res.json()).then(data => setUserData(data))
    let payload = {
      'id':Number(id)
    }

    const customHeaders = {
      "Content-Type": "application/json",
  }

    fetch(`${API_URL}/api/GetUserHours`, {
      method: "POST",
      headers:customHeaders,
      body: JSON.stringify(payload),
  })
      .then((response) => response.json())
      .then((data) => {
          setUserData(data.Hours)
          
          setTotalHours(data.TotalHours)
          setTotalMoney(data.TotalMoney)
          // console.log(`Total Hours ${myTotalHours} - Total Money ${myTotalMoney}`)
      });
  }


  

  return(
    <AuthContext.Provider  value={{
      isLoading,
      userInfo,
      userId,
      userName,
      userEmail,
      userData,
      myTotalHours,
      myTotalMoney,
      showAdd,
      Login,
      LogOut,
      CheckIfUserIsLoggedIn,
      FetchData,

      
      

      
      
    }} >{children}</AuthContext.Provider>
  )
}