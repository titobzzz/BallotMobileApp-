import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {LoginPage} from "./src/pages/login"
import { useFonts } from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';



export default function App() {

  let loaded= useFonts({
    "Poppins-Black":require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-BlackItalic":require("./assets/fonts/Poppins-BlackItalic.ttf"),
    "Poppins-Bold":require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold":require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight":require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light":require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium":require("./assets/fonts/Poppins-Medium.ttf"),
  })

  return (

    <NavigationContainer>
        <View style={styles.container}>
        <LoginPage/>    
      </View>
    </NavigationContainer>
    
  )
}  
const styles = StyleSheet.create({
  container: {
    paddingTop:80,
    padding:10,
    backgroundColor:'black',
    height:"100%", 
  },
});
