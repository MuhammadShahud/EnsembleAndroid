import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'
import { PoppinsMedium, PoppinsRegular } from '../../../assets/fonts/Fonts'

const OngoingCompleted = (props) => {
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <TouchableOpacity onPress={props.onPress} style={[styles.ongoing , {backgroundColor : props.OngoingbackgroundColor, borderColor: props.ongoingbordercolor}]}>
                    <Text style={[styles.whiteText , {color : props.OngoingtextColor,}]}>Ongoing</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPress} style={[styles.ongoing, {
                    borderBottomRightRadius: 30,
                    borderTopRightRadius: 30, borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,backgroundColor: props.CompletedbackgroundColor,borderColor: props.completedborderColor
                }]}>
                    <Text style={[styles.greyText , {color : props.CompletedtextColor}]}>Completed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OngoingCompleted

const styles = StyleSheet.create({
    view: {
        marginTop: verticalScale(20)
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: scale(20),
    },
    ongoing: {
        backgroundColor: ButtonColor,
        width: '50%',
        alignItems: 'center',
        borderBottomLeftRadius: moderateScale(30),
        borderTopLeftRadius: moderateScale(30),
        borderWidth: 1,
        borderColor: ButtonColor,
    },
    completed: {
        backgroundColor: 'white',
        width: '50%',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomRightRadius: moderateScale(30),
        borderTopRightRadius: moderateScale(30),
        borderLeftColor: ButtonColor,
        // borderColor:'#9F9F9F'






    },
    whiteText: {
        color: 'white',
        paddingVertical: verticalScale(10),
        fontFamily:PoppinsMedium,
        fontSize:moderateScale(9)
    },
    greyText: {
        color: ButtonColor,
        paddingVertical: verticalScale(10),
        color: '#858585',
        fontFamily:PoppinsRegular,
        fontSize:moderateScale(9)




    },
    
})