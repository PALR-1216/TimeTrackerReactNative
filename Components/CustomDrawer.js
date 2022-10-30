import {React, useContext} from 'react';
import {View,Text, Image, Button, TouchableOpacity} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AuthContext } from '../context/authContext';
// import Ionicons from 'react-native-vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons/FontAwesome5';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const CustomDrawer = (props) =>{
    const {userName, LogOut} = useContext(AuthContext);
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#6287f8'}}>
                {/* <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'}} style={{height:80, width:80, borderRadius:40, marginBottom:10, marginLeft:10}}/> */}
                <View style={{flexDirection:'row', display:'flex', flexWrap:'wrap'}}>
                    
                {/* <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'}} style={{height:40, width:40, borderRadius:40, marginBottom:20, marginLeft:10}}/> */}

                    <AntDesign name="user" size={30} color="white" />
                    <Text style={{color:'#fff', fontSize:25,  paddingLeft:10, textAlign:'center'}}>User {userName}</Text>

                </View>
                <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
                <DrawerItemList {...props}/>


                </View>
            </DrawerContentScrollView>
            <View style={{padding:30, borderTopWidth:1, borderTopColor:'#ccc', paddingVertical:10}}>
                <TouchableOpacity onPress={LogOut} style={{paddingVertical:10}}>
                    <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#fff', borderRadius:5, padding:7, width:'50%'}}>
                    <Feather name="log-out" size={24} color="black" />
                    
                    <Text style={{fontSize:20}}>LogOut</Text>


                    </View>

                </TouchableOpacity>
            </View>

        </View>
      

    );


}

export default CustomDrawer;