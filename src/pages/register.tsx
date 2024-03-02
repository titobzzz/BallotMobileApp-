import { View, Text,TextInput, Image, Keyboard, TouchableOpacity } from "react-native"
import {fontStyles } from "../styles/fontstyle"
import {input} from "../styles/inputstyle"
import lock from "../../assets/images/unlock.png"
import { useState } from "react"
import axios from 'axios';


export function RegisterPage({navigation}:any){
  const [errors, setErrors] =useState<any>([])
  const [details, setdetails] =useState({
    email:"",
    username:"",
    password:"",
    password2:""
  })

  const handleOnChange =(text:any, input : string)=>{
    setdetails(prevstate=>({...prevstate, [input]:text}))
  }

 const handleErrors= (errormessage:any)=>{
      setErrors((prevErrors:any) => [errormessage, ...prevErrors])
    }
    const register=()=>{
      axios.post("")
    
    }
     

  const validate = ()=>{
    Keyboard.dismiss()
    const valid = true
    if(!details.email){
      handleErrors("Email field cannot be empty")
    }
    if(!details.username){
      handleErrors("username field cannot be empty")
    }
    if(!details.password && !details.password2){
      handleErrors("Please fill all password fields")
    }else if (details.password.length < 5 || details.password.length > 10  ){
      handleErrors("password length cannot be less than 5 or longer than 10")
    }
    if(valid){
    register()
  }
  }
  



  return (
    <View style={{
      flex:1,
      display:"flex",
      backgroundColor:"black",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:30
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
            Welcome!
          </Text>
    <Text> Let’s set up your account with </Text> 
      <Text style={fontStyles.green}> ease</Text>
    </Text>
    </View>
    <View style={{
      marginTop:20 ,
      marginBottom:30,
      borderTopWidth:0.5,
      borderTopColor:"grey" 
    }} >
       <View style={input.textinputContainer}>
          <TextInput placeholder="Email"
           placeholderTextColor={"grey"} 
           onChangeText={(text)=>handleOnChange(text,"email")}   
           style={input.textinput}/>
        </View>
        <View style={input.textinputContainer}>
          <TextInput placeholder="Username" 
          placeholderTextColor={"grey"} 
          onChangeText={(text)=>handleOnChange(text,"username")}   
           style={input.textinput}/>
        </View>
        <View style={input.textinputContainer}>
          <TextInput placeholder="Password" 
          placeholderTextColor={"grey"} 
          style={input.textinput} 
          onChangeText={(text)=>handleOnChange(text,"password")}   
          secureTextEntry={true}/>
          <Image source={lock} style={{
            width:20,
            height:20,
            margin:10,
            opacity:0.5
          }} />
        </View>
        <View style={input.textinputContainer}>
          <TextInput placeholder="ComfirmPassword" 
          placeholderTextColor={"grey"} 
          style={input.textinput}
          onChangeText={(text)=>handleOnChange(text,"password2")}    
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
           
            padding:15,
            borderRadius:15,
          }}
          onPress={() =>
            navigation.navigate('Login')
          }>
            <Text style={{
              textAlign:"center",
              fontFamily:"Poppins-Bold",
              fontSize:17,
              
            }}>
                Register
            </Text>
          </TouchableOpacity>

<Text style={{
          color:"white",
          fontFamily:"Poppins-Medium",
          fontSize:16,
          textAlign: 'center',
          paddingTop:10
          }}>
  Already have an account ? <Text onPress={()=>navigation.navigate('Login')} style={fontStyles.green}>sign in</Text>
  </Text>      
    </View>
  )
}


