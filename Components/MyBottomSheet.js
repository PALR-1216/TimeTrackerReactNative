import {React, useState, useContext} from 'react'
import {View,Text, SafeAreaView, TextInput, StyleSheet, Dimensions, KeyboardAvoidingView} from'react-native';

const MyBottomSheet = () =>{
  const [number, setNumber] = useState(null)

  
    return (

      <SafeAreaView style={{marginBottom:Dimensions.get('screen').height - 200}}>
        
        <Text style={{fontWeight:'bold', textAlign:'center', fontSize:30, padding:40}}>Add new Hour</Text>

        <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </SafeAreaView>
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