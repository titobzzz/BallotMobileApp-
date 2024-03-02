 import React from "react"
 import { View, Text,TextInput, Image, TouchableOpacity, StyleSheet, useWindowDimensions, ActivityIndicator } from "react-native"
 

 const Loader = ({visible=false})=>{
    const {height, width} = useWindowDimensions();
        return visible && (
        <View style={{...style.container,height, width}}> 
            <View style={style.loader}>
                <ActivityIndicator size="large" color="#07EEC4"/>
                <Text style={{ marginRight:10, fontSize:16, color:'#07EEC4'}}>Creating Account</Text>
           </View>
         </View>
         )}


 const style = StyleSheet.create({
    container:{
        position:"absolute", 
        zIndex:10,
        backgroundColor:'grey',
        justifyContent:'center'
    },
    loader:{
            height:70,
            backgroundColor:'white',
            marginHorizontal:50,
            borderRadius:5,
            flexDirection:'row',
            alignItems: 'center',
            paddingHorizontal:20,
    }
 });

 export default Loader