import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'

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
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderWidth: 1,
        borderColor: ButtonColor,
    },
    completed: {
        backgroundColor: 'white',
        width: '50%',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderLeftColor: ButtonColor,
        // borderColor:'#9F9F9F'






    },
    whiteText: {
        color: 'white',
        paddingVertical: verticalScale(10)
    },
    greyText: {
        color: ButtonColor,
        paddingVertical: verticalScale(10),
        color: '#858585'



    },
    
})