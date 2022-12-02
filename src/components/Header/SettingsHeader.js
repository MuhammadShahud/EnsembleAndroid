import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { backArrow, ptLogo } from '../../../assets/images/images'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { scale, verticalScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { PoppinsBold } from '../../../assets/fonts/Fonts';

const QuestionHeader = (props) => {
  const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
    <MaterialCommunityIcons
    style={{marginHorizontal:scale(20)}}
      name='keyboard-backspace' size={25} color={'black'} onPress={()=>navigation.goBack()}/>

     
    </View>
  )
}

export default QuestionHeader

const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // marginHorizontal:scale(20),
        marginVertical:verticalScale(20),
        borderBottomColor: '#C6C6C6',
        borderBottomWidth: 1,
        width: '100%',
        height: hp('8%'),


    },
    header:{
        flexDirection:'row',
        alignItems:'center',

    },
    text:{
        fontSize: wp('4%'),
        color:'black',
        // fontWeight:'bold',
        fontFamily: PoppinsBold,
        textAlign: 'center',
        paddingLeft:scale(10)
    }
})