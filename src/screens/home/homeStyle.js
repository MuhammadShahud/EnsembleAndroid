import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { FiraSansBold, PoppinsBold, PoppinsLight, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'

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
  fontSize:moderateScale(30),
  color:'#1B1B1B'
 },
 name: {
  fontFamily:PoppinsBold,
  fontSize:moderateScale(25),
  color:'#1B1B1B',
  width:scale(258),
  marginTop:verticalScale(-10),
 },
 overview : {
  fontFamily:FiraSansBold,
  fontSize:moderateScale(26),
  color:'#1B1B1B',
 },
 position:{
  fontFamily:PoppinsRegular,
  color:'#1B1B1B',
  fontSize:moderateScale(12)
 },
 footerView: {
  marginHorizontal: scale(5),
  marginVertical: verticalScale(15),
  marginBottom: verticalScale(40),
  marginTop:verticalScale(30)
},
powered: {
  color: 'black',
  fontFamily: PoppinsRegular,
},
ensemble: {
  color: 'black',
  fontSize: moderateScale(20),
  fontFamily: PoppinsSemiBold,
  marginTop: verticalScale(-3),
},
});
