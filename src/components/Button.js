import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import  { PRIMARYCOLOR } from '../../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import { PoppinsSemiBold } from '../../assets/fonts/Fonts'

const Button = (props) => {
  console.log(props.onPress,"ONnnPRess");
  return (
    <View>
        <TouchableOpacity onPress={props.onPress}>

      <Text style={[styles.button,props.buttonStyle]}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:PRIMARYCOLOR,
        width:'100%',
        // paddingHorizontal:scale(40),
        paddingVertical:verticalScale(9),
        color:'white',
        alignSelf:'center',
        borderRadius:moderateScale(20),
        fontSize:moderateScale(15),
        textAlign:'center',
        fontFamily:PoppinsSemiBold,
    }
})