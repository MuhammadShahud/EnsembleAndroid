import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { PoppinsMedium } from '../../assets/fonts/Fonts';
import Editt from '../../assets/images/editt'

const EditProfileButton = (props) => {
  return (
    <View>
        <TouchableOpacity onPress={props.onPress} style={styles.editt}>
        <View style={styles.editPicture}>
    {props.edit? null:  
            <Editt/>
    }
        </View>
        <View>

            <Text style={styles.text}>{props.EditText}</Text>
        </View>
        </TouchableOpacity>
        
        <View style={{ width: '200%', height: '1%', backgroundColor: '#E0E0E0', marginTop: verticalScale(20) }}></View>
    </View>
  )
}

export default EditProfileButton

const styles = StyleSheet.create({
    editt:{
        backgroundColor:'#2AB679',
        marginHorizontal:scale(40),
        borderRadius:moderateScale(50),
        paddingVertical:verticalScale(5),
        marginTop:verticalScale(20),
        marginBottom:verticalScale(10),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        // textAlign:'center',
        fontSize:moderateScale(15),
        fontFamily:PoppinsMedium,
    },
    editPicture:{
        marginRight:scale(10)
    }
})