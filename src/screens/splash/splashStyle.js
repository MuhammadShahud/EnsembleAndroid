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
  },
  imageStyle: {
    margin: wp("0%"),
    width: wp('100%'),
    height: hp('60%'),
  },
  imageStyle2: {
    width: wp('50%'),
    // height: hp('10%'),
    marginTop:verticalScale(20),
    alignSelf:'center'
  },
  btn : {
    width: wp('80%'), 
    alignSelf:'center'  ,
    marginBottom:verticalScale(20),
    marginTop:verticalScale(10) 
  },
  boxView:{
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center',
    backgroundColor: 'rgba(144, 148, 235, 0.1)',
    paddingVertical:verticalScale(17),
    marginVertical:verticalScale(7),
    marginHorizontal:scale(20),
    borderRadius:moderateScale(20),
    borderWidth:1,
    borderColor:'#CACACA'
  },
  setGoals:{
    color:'black',
    fontFamily:PoppinsSemiBold,
    fontSize:moderateScale(18),
    paddingLeft:scale(10)
  },
  monthly:{
    color:'black',
    fontFamily:PoppinsRegular,
    paddingLeft:scale(10),
    fontSize:moderateScale(10),

    

  },
  company:{
    color:'black',
    fontFamily:PoppinsRegular,
    paddingLeft:scale(10),
    fontSize:moderateScale(10),
    marginTop:verticalScale(-2),

  },
  imageView:{
    marginLeft:scale(20),
    marginRight:scale(20)
  },
  flatListCompleted:{
  },
  lootie:{
    marginTop:verticalScale(-170)

  },
  flatlistView:{
    marginTop:verticalScale(170)
  }
})