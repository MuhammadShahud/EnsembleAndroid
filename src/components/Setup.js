import { StyleSheet, Text, View ,Image, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { notification, right } from '../../assets/images/images'
import { PoppinsMedium } from '../../assets/fonts/Fonts'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Notification from '../../assets/images/Notification'
import Help from '../../assets/images/Help'
import Privacy from '../../assets/images/Privacy'
import Terms from '../../assets/images/Terms'
import Change from '../../assets/images/Change'
import Access from '../../assets/images/Access'
import Right from '../../assets/images/Right'

const Setup = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{marginHorizontal:scale(20),marginTop:verticalScale(30)}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

        <View style={{flexDirection:'row',}}>

      {/* <Image source={props.source}/> */}
      {props.noti?<Notification/>:null}
      {props.help?<Help/>:null}
      {props.privacy?<Privacy/>:null}
      {props.access?<Access/>:null}
      {props.terms?<Terms/>:null}
      {props.change?<Change/>:null}
      <Text style={styles.text}>{props.title}</Text>
        </View>
        <View>
           {props.rightImage?<Right/>:null}
            
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