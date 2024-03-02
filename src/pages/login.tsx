import { View, Text,TextInput, Image, TouchableOpacity, SafeAreaView } from "react-native"
import {fontStyles } from "../styles/fontstyle"
import {input} from "../styles/inputstyle"
import lock from "../../assets/images/unlock.png"
import { useState } from "react"


export function LoginPage({navigation}:any){

  
  const [details, setdetails] =useState({
    email:"",
    password:""
  })




  return (
       <View style={{
          flex:1,
          display:"flex",
          backgroundColor:'black',
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          padding:30 ,   
    }}>
      <View>
        <Text style={{
          color:"white",
          fontFamily:"Poppins-Medium",
          fontSize:35,
          }} >
          <Text style={{
            fontSize:37,
            fontFamily:"Poppins-Bold",
          }}>
            Welcome back!
          </Text>
    <Text> Let’s sign 
      <Text style={fontStyles.green}> you</Text> into your account</Text>
    </Text>
    </View>
    <View style={{
      marginTop:50 ,
      marginBottom:30,
      borderTopWidth:0.5,
      borderTopColor:"grey" 
    }} >
        <View style={input.textinputContainer}>
          <TextInput 
          placeholder="Username" 
          placeholderTextColor={"grey"} 
          style={input.textinput}
          // value={username}
          // onChangeText={setUsername}
          autoCorrect={false}/>          
        </View>
        <View style={input.textinputContainer}>
          <TextInput 
          placeholder="Password" 
          placeholderTextColor={"grey"} 
          // value={password}
          // onChangeText={setUsername}
          style={input.textinput} 
          secureTextEntry={true}/>
          <Image source={lock} style={{
            width:20,
            height:20,
            margin:10,
            opacity:0.5
          }} />
        </View>
      </View>
    
        <TouchableOpacity style={{
            backgroundColor:"white",
            width:280,
            margin:18,
            marginBottom:25,
            padding:15,
            borderRadius:15,
          }}
          onPress={() =>
            navigation.navigate('Home')
          }>
            <Text style={{
              textAlign:"center",
              fontFamily:"Poppins-Bold",
              fontSize:17,
            }}>
                Sign in
            </Text>
          </TouchableOpacity>
               

<Text style={{
          color:"white",
          fontFamily:"Poppins-Medium",
          fontSize:16,
          textAlign: 'center',
          paddingTop:10
          }}>
  Don't have an account? <Text onPress={()=>navigation.navigate('Register')} style={fontStyles.green}> Register</Text>
  </Text>      
    </View>          
  )
}


