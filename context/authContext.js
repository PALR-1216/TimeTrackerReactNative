import React, {createContext, useReducer, useState} from 'react';
// import BASE_URL from '../src/config'
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = 'https://myworktimetracker.herokuapp.com'

export const AuthContext = createContext();


export const AuthProvider = ({children}) =>{

  const [isLoading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState({})
  const [userName, setUserName] = useState('')


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
     try{
       let jsonRes = await res.json()
       let obj;

       for(i in jsonRes) {
         obj ={
           id:jsonRes[i].userId,
           userName:jsonRes[i].userName,
           userEmail:jsonRes[i].userEmail,
           usersWage:jsonRes[i].usersWage,
           usersDeduction:jsonRes[i].usersDeduction,
           usersOvertime:jsonRes[i].usersOvertime
         }
       }
       console.log(obj)
      //  AsyncStorage.setItem('userInfo', JSON.stringify(jsonRes))
       AsyncStorage.setItem('userId', JSON.stringify(obj.id))
       AsyncStorage.setItem('userName', obj.userName)
       setUserInfo(obj)

       
       setLoading(false)

     }catch(e) {
       console.log(e.message)
       setLoading(false)
     }
   })

  }

  const LogOut = () =>{
    //logout function in api in my website
    try {
      setLoading(true)
      AsyncStorage.removeItem('userInfo')
      AsyncStorage.removeItem('userId')
      AsyncStorage.removeItem('userName')
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
      setUserId(jsonValue)
      setUserName(name)
      
      // return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }
  }
  


  return(
    <AuthContext.Provider  value={{
      isLoading,
      userInfo,
      userId,
      userName,
      Login,
      LogOut,
      CheckIfUserIsLoggedIn
      
      
    }} >{children}</AuthContext.Provider>
  )
}