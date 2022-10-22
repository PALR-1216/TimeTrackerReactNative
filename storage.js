import AsyncStorage from '@react-native-async-storage/async-storage';


export async function getItem() {
    try {
        const value = await AsyncStorage.getItem('UserID')
        if(value !== null ) {
            return value ? JSON.parse(value) : null;
        }

    }catch(e) {
        console.log(e)
    }
}


export async function setItem(value) {

    try {
        return AsyncStorage.setItem('UserID', JSON.stringify(value));
        
    } catch (e) {
        console.log(e)
        
    }

}


export async function removeItem() {
    try {
        return AsyncStorage.removeItem('UserID')
        
    } catch (e) {
        console.log(e)
        
    }
}