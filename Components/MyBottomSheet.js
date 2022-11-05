import {React, useState, useContext, useRef} from 'react'
import {View,Text, SafeAreaView, TextInput, StyleSheet, Dimensions, KeyboardAvoidingView, Button, TouchableOpacity, Alert} from'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';


const MyBottomSheet = () =>{
  const [number, setNumber] = useState(null)
  const [breakTime, setBreakTime] = useState(null)
  const [selectedValue, setSelectedValue] = useState("Hours")


  
    return (

      <View style={{ height:Dimensions.get('screen').height}}>
        <TouchableOpacity  onPress={() => {
         if(!number) {
          Alert.alert("Please enter the hours")
         }

         else if (!breakTime) {
          Alert.alert(`Hours ${number} no Break time`)
         }

         else if(breakTime && selectedValue === "Minutes"){
          let min = breakTime / 100
          Alert.alert(`Hours ${number} break time Minutes ${min}`)
         }

         else if(breakTime && selectedValue === "Hours") {
          Alert.alert(`Hours ${number} with Hour Break of ${breakTime}`)
         }

        }}>

          <View style={{ alignSelf:'flex-end', borderRadius:5}}>
          <Ionicons name="add" size={40} color="#1098F7" />
          </View>

        </TouchableOpacity>
        <Text style={{fontWeight:'bold', textAlign:'center', fontSize:30, padding:20}}>Add New Hour</Text>

        <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Enter the total Hours"
        keyboardType="numeric"
      />

      <TextInput
              style={styles.input}
              onChangeText={setBreakTime}
              value={breakTime}
              placeholder="Enter the total Break Time"
              keyboardType="numeric"
            />

      <Picker selectedValue={selectedValue} style={{flex:1}} onValueChange={(itemValue, itemIdex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Hours" value="Hours" />
        <Picker.Item label="Minutes" value="Minutes" />
      </Picker>

      </View>
    );

}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MyBottomSheet;