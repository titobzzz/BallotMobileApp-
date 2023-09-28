import { View, Text,TextInput, Image, TouchableOpacity } from "react-native"
import {fontStyles } from "../styles/fontstyle"
import {input} from "../styles/inputstyle"
import lock from "../../assets/images/unlock.png"


export function LoginPage({navigation}:any){
  return (
    <View style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      margin:30 ,  
    }}>
      <View>
        <Text style={{
          color:"white",
          fontFamily:"Poppins-Light",
          fontSize:35,
          }} >
          <Text style={{
            fontSize:37,
             fontWeight: 'bold', 
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
          <TextInput placeholder="Username" placeholderTextColor={"grey"} style={input.textinput}/>
        </View>
        <View style={input.textinputContainer}>
          <TextInput placeholder="Password" placeholderTextColor={"grey"} style={input.textinput} secureTextEntry={true}/>
          <Image source={lock} style={{
            width:20,
            height:20,
            margin:10,
            opacity:0.5
          }} />
        </View>
          <TouchableOpacity style={{
            backgroundColor:"white",
            width:280,
            marginTop:50,
            padding:15,
            borderRadius:15,
          }}
          onPress={() =>
            navigation.navigate('Register')
          }>
            <Text style={{
              textAlign:"center",
              fontFamily:"Poppins-Light",
              fontSize:17,
              fontWeight:"bold"
            }}>
                Sign in
            </Text>
          </TouchableOpacity>

      </View>

<Text style={{
          color:"white",
          fontFamily:"Poppins-Light",
          fontSize:16,
          textAlign: 'center',
          paddingTop:10
          }}>
  Don't have an account? <Text style={fontStyles.green}> Register</Text>
  </Text>      
    </View>
  )
}


