import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { PoppinsBlack, PoppinsBold, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'

const Questions = (props) => {
  return (
    <View>
     <Text style={[styles.text,props.questionText]}>{props.title}</Text>    
     </View>
  )
}

export default Questions

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: moderateScale(35),
        marginHorizontal: scale(20),
        // fontWeight: 'bold',
        fontFamily:PoppinsSemiBold,
        marginBottom:verticalScale(10)
    },
})