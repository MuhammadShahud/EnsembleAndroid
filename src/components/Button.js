import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import  { PRIMARYCOLOR } from '../../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'

const Button = (props) => {
  console.log(props.onPress,"ONnnPRess");
  return (
    <View>
        <TouchableOpacity onPress={props.onPress}>

      <Text style={[styles.button,props.buttonStyle]}>{props.title}</Text>
          {/* <Feather name='plus' size={15}/> */}
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        // backgroundColor:'#2B2F86',
        backgroundColor:PRIMARYCOLOR,
        width:'100%',
        paddingHorizontal:scale(50),
        paddingVertical:verticalScale(12),
        color:'white',
        alignSelf:'center',
        borderRadius:moderateScale(20),
        fontWeight:'bold',
        fontSize:moderateScale(15),
        textAlign:'center'
    }
})