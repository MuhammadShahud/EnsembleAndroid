import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { ButtonColor } from '../../../assets/colors/colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { PoppinsBold, PoppinsSemiBold } from '../../../assets/fonts/Fonts'


const GoalButton = (props) => {
  return (
    <TouchableOpacity style={[styles.mainView,props.buttonViewStyle]} onPress={props.onPress}>
        <Entypo name='plus' size={18} color='white'/>
        <Text style={[styles.setText,props.buttonTextStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default GoalButton

const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        backgroundColor:ButtonColor,
        alignItems:'center',
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(9),
        borderRadius:moderateScale(30)

    },
    setText:{
        color:'white',
        fontSize:moderateScale(11),
        // fontWeight:'bold',
        fontFamily:PoppinsSemiBold,

paddingHorizontal:scale(5)    }
})