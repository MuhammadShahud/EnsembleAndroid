import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

import { PRIMARYCOLOR } from '../../../assets/colors/colors'
import { FiraSansBold, PoppinsBold, PoppinsLight, PoppinsRegular } from '../../../assets/fonts/Fonts'

export const style = StyleSheet.create({
  container: {
    backgroundColor:"#F1F1F1",
    flex: 1,
  },
  innerView: {
    width: wp('100%'),
    height:hp('100%'),
    padding:wp('5%'),
    
  },
  pp:{
    width: scale(65),
    height: verticalScale(65),
    overflow:'hidden',
    borderRadius: moderateScale(33),
  },
 hey: {
  flexDirection:'row',
  alignItems:'center',
  justifyContent: 'space-between'
 },
 morning : {
  fontFamily:PoppinsLight,
  fontSize:30,
  color:'#1B1B1B'
 },
 name: {
  fontFamily:PoppinsBold,
  fontSize:30,
  color:'#1B1B1B',
  fontWeight:'bold',
  marginTop:verticalScale(-10)
 },
 overview : {
  fontFamily:FiraSansBold,
  fontSize:26,
  color:'#1B1B1B',
  fontWeight:'bold'
 },
 position:{
  fontFamily:PoppinsRegular
 }
})
