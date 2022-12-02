import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts';

export const styles = StyleSheet.create({
container: {
    backgroundColor: "white",
    height: hp('100%'),
    flex:1,
    justifyContent:'space-between',
  },
  innerView: {
    width: wp('100%'),
justifyContent : 'center',
    // alignItems: 'center',
  },
  imageStyle: {
    margin: wp("0%"),
    width: wp('100%'),
    height: hp('60%'),
  },
  imageStyle2: {
    width: wp('70%'),
    height: hp('20%'),
    alignSelf:'center'
  },
  btn : {
    width: wp('80%'), 
    alignSelf:'center'  ,
    marginBottom:verticalScale(20) 
  },
  boxView:{
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center',
    // alignSelf:'center',
    // width:'100%',
    backgroundColor: 'rgba(144, 148, 235, 0.1)',
    // paddingHorizontal:scale(40),
    paddingVertical:verticalScale(20),
    // borderRadius:moderateScale(20),
    marginVertical:verticalScale(10),
    marginHorizontal:scale(20),
    borderRadius:moderateScale(20)
  },
  setGoals:{
    color:'black',
    fontFamily:PoppinsSemiBold,
    fontSize:moderateScale(18),
    paddingLeft:scale(10)
  },
  monthly:{
    color:'black',
    // fontFamily:PoppinsRegular,
    paddingLeft:scale(10),
    fontSize:moderateScale(10),

    

  },
  company:{
    color:'black',
    // fontFamily:PoppinsRegular,
    paddingLeft:scale(10),
    fontSize:moderateScale(10),

  },
  imageView:{
    marginLeft:scale(20),
    marginRight:scale(20)
  },
  flatListCompleted:{
    // marginBottom:verticalScale(20)
  }
})