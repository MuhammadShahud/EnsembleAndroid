import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { moderateScale,scale, verticalScale } from 'react-native-size-matters'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { PRIMARYCOLOR } from '../../../assets/colors/colors'
import { FiraSansMedium, FiraSansSemiBold, PoppinsMedium, PoppinsRegular } from '../../../assets/fonts/Fonts'

export const style = StyleSheet.create({
  BackHeaderBG: {
    backgroundColor:'#ffff',
   paddingHorizontal:wp('5%'),
   paddingVertical:hp('4%'),
    borderRadius:moderateScale(16),
    flexWrap:'wrap',
  },
  box:{
      flexDirection:'row'
  },
  imageView:{
      backgroundColor:'#F1F2FF',
      borderRadius:moderateScale(30),
      height:verticalScale(55),
      width:scale(55),
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:scale(13),
      paddingVertical:verticalScale(13),
      marginRight:wp('4%'),
      shadowColor: '#52006A',  
      elevation: 7,  

  },
  text1:{
      fontFamily: FiraSansSemiBold,
      fontSize:moderateScale(20),
      color:'#000000'
  },
  text2:{
      fontFamily: PoppinsRegular,
      fontSize:moderateScale(9),
      color:'#1B1B1B',
      maxWidth:wp('55%'),
      
  }
})
