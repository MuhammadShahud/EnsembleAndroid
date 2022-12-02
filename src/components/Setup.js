import { StyleSheet, Text, View ,Image, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { notification, right } from '../../assets/images/images'
import { PoppinsMedium } from '../../assets/fonts/Fonts'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Setup = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{marginHorizontal:scale(20),marginTop:verticalScale(30)}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

        <View style={{flexDirection:'row',}}>

      <Image source={props.source}/>
      <Text style={styles.text}>{props.title}</Text>
        </View>
        <View>
            <Image source={props.rightImage}/>
            
        </View>
        </View>
    </TouchableOpacity>
  )
}

export default Setup

const styles = StyleSheet.create({
    text:{
        color:'black',
        fontFamily:PoppinsMedium,
        fontSize:moderateScale(16),
        paddingLeft:scale(10)
    }
})