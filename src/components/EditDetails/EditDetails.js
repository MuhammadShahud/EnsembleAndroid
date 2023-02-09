import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'
import { PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'


const EditDetails = (props) => {
    return (
        <View style={{flex:1}}>

            <View
             style={[{ marginTop: verticalScale(20)},props.name? {marginHorizontal: scale(0)} : {marginHorizontal:scale(20)} ]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Image source={props.source} />
                </View>
                <Text style={styles.detail1}>{props.detail1}</Text>
                <Text style={styles.detail2}>{props.detail2}</Text>


            </View>
            {props.name? null : 

                <View style={{ width: '200%', height: '1%', backgroundColor: '#E0E0E0', marginTop: verticalScale(20) }}>{props.line}
                
            </View>
            }
        </View>
    )
}

export default EditDetails

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: moderateScale(20),
        fontFamily:PoppinsSemiBold,
        paddingRight:scale(20)
    },
    detail1: {
        color: 'black',
        fontSize:moderateScale(14),
        fontFamily:PoppinsRegular,
        paddingTop: verticalScale(10),
        paddingRight:scale(30)
    },
    detail2: {
        color: 'black',
        fontSize:moderateScale(14),

        fontFamily:PoppinsRegular

    },
    buttonColor: {
        backgroundColor: ButtonColor
    }

})