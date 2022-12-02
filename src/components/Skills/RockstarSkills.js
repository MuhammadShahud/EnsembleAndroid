import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { communication, management } from '../../../assets/images/images'
import { ButtonColor } from '../../../assets/colors/colors'
import { PoppinsSemiBold } from '../../../assets/fonts/Fonts'
// import communication from '../../../assets/images/communication'

const RockstarSkills = (props) => {
    const [btnState,setBtnState]=useState(false)
    const [btnState1,setBtnState1]=useState(false)
    const [btnTextColor,setBtnTextColor]=useState(false)
    const [btnTextColor1,setBtnTextColor1]=useState(false)
    const changeButtonColor=()=>{
        setBtnState(!btnState)
    }
    const changeButtonColor1=()=>{
        setBtnState1(!btnState1)
    }

    const changeTextColor=()=>{
        setBtnTextColor(!btnTextColor)
    }
    const changeTextColor1=()=>{
        setBtnTextColor1(!btnTextColor1)
    }
    
  return (
    <View style={styles.mainView}>

    <View style={styles.firstView}>
        <TouchableOpacity onPress={changeButtonColor} style={[styles.communicationView,{backgroundColor:btnState ? ButtonColor : 'white'}]}>
            <Image source={props.firstImage}/>
            <Text  style={[styles.text,{color:btnTextColor?'white':'black'}]}>{props.firstTitle}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeButtonColor1}  style={[styles.managementView,{backgroundColor:btnState1? ButtonColor: 'white'}]}>

        <Image source={props.secondImage}/>
        <Text  style={[styles.text,{color:btnTextColor1?'white':'black'}]}>{props.secondTitle}</Text>


        </TouchableOpacity>
    </View>   

    </View>
  )
}

export default RockstarSkills

const styles = StyleSheet.create({
    mainView:{
        marginHorizontal:scale(20),
        marginBottom:verticalScale(5),
        marginTop:verticalScale(8)

    },
    firstView:{
        flexDirection:'row',
        // justifyContent:'space-between',
    },
    communicationView:{
        flexDirection:'row',
        // backgroundColor:'white',
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(7),
        borderRadius:moderateScale(40),
        marginRight:scale(10)
    },
  
    managementView:{
        flexDirection:'row',
        // backgroundColor:'white',
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(7),
        borderRadius:moderateScale(40),
        marginRight:scale(10),


},
text:{
    // color:'yellow',
    // fontWeight:'900',
    fontFamily:PoppinsSemiBold,
    fontSize:moderateScale(12.5)


}
})