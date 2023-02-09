import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { PRIMARYCOLOR } from '../../../assets/colors/colors'
import { PoppinsBold } from '../../../assets/fonts/Fonts'

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
  innerView: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    width: wp('70%'),
    height: hp('20%')
  },
  
  inputField: {
    marginHorizontal: 'auto',
    width: wp('90%'),
    backgroundColor: '#F5F5F5',
    marginVertical:verticalScale(5),
    marginHorizontal:scale(5),
    borderRadius: moderateScale(40),
    paddingLeft: scale(15)
  },
  inputContainer: {
    alignItems: 'center',
    width: wp('100%'),
    minHeight: hp('80%'),
    backgroundColor: '#fff',
    borderTopStartRadius: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderTopEndRadius: wp('10%'),
    flex: 1,
    elevation:3,
    zIndex:3
  },
  forgotWidth: {
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  logo: {
    height: hp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontFamily:PoppinsBold,
    fontSize: wp('10%'),
    alignSelf:'flex-start',
    marginHorizontal:scale(20),
  },
  eye :{
position: 'absolute',
right: scale(20),
top:verticalScale(15),
  },
  firsteye:{
  
      position: 'absolute',
      right: scale(20),
      top:verticalScale(43),
        },
  
  btn: {
    width: wp('90%')
  },
  welcomeEnsemble:{}
})
