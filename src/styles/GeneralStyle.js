import {StyleSheet} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  BLUEFONTCOLOR,
  GRAYCOLOR,
  PRIMARYCOLOR,
  PURPLECOLOR,
  SECONDARYCOLOR,
} from '../../assets/colors/colors';
import { PoppinsSemiBold } from '../../assets/fonts/Fonts';

export const styles = StyleSheet.create({
 
  large: {
    fontSize: wp('6%'),
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  medium: {
    fontSize: wp('4%'),
    fontFamily: PoppinsSemiBold ,
    // textAlign: 'center',
  },
  spaceHeight: {
    height: hp('2%'),
  },
  small: {
    fontSize: wp('3.5%'),
    fontFamily: 'Poppins',
    textAlign: 'left',
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
 
  smallBtn: {
    backgroundColor: PURPLECOLOR,
    width: wp('16%'),
    alignItems: 'center',
    height: hp('5%'),
    justifyContent: 'center',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
  },
  
  btnBg: {
    width: '100%',
    backgroundColor: SECONDARYCOLOR,
    height: hp('6.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('10%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  btnBgSecondary: {
    width: '100%',
    backgroundColor: SECONDARYCOLOR,
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('10%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

});
