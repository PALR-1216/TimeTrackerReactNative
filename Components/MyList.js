import { React, useContext, useEffect , useRef} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const MyList = ({ data }) => {
    return (
      <FlatList
        data={data}
        // keyExtractor={data.hourId}
        renderItem={({ item }) =>
  
          <View style={styles.listContainer}>
            <View style={styles.listRow}>
              <FontAwesome5 name="clock" size={24} color="grey" />
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}> {item.totalHour}</Text>
             
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginLeft: 'auto', paddingRight: 30 }}>
                <MaterialIcons name="attach-money" size={24} color="black" />
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{item.TotalEarned}</Text>
  
              </View>
            </View>
  
          </View>
  
  
  
        }
        estimatedItemSize={100}
      />
    );
}
  
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#ecf0f1',
      backgroundColor:'#FEFBF6'
    },
   
  
    listRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 5,
  
      width: '100%',
      // backgroundColor:'#E5E4E2',
      backgroundColor: 'white',
      borderRadius: 10,
      height: 70,
      marginTop: 5,
      // justifyContent:'center',
      shadowOpacity: 0.08,
      //for ios
      shadowOffset: {
        width: 0,
        height: 20
      },
      shadowRadius: 10,
      //for android
      elevation: 5,
      alignItems: 'center',
      paddingTop: 25,
      paddingLeft: 10
  
    },
  
    listContainer: {
      paddingTop: 10,
  
  
      // height:Dimensions.get('screen').height
  
    },

});
  
  
  

export default MyList;