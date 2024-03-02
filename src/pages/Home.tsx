import { View, Text,TextInput, Image, TouchableOpacity } from "react-native"
import {fontStyles } from "../styles/fontstyle"
import {input} from "../styles/inputstyle"
import lock from "../../assets/images/unlock.png"


export function HomePage({navigation}:any){
  return(
    <View style={{     
      display:"flex",
      flex:1,
      backgroundColor:'black',
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:30 ,   
}}>
       <Text style={{
          color:"white",
          fontFamily:"Poppins-Medium",
          fontSize:35,
          }} >
            welcome Home
        </Text>
</View>
 ) }