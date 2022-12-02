import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { PRIMARYCOLOR } from '../../../assets/colors/colors'

export const style = StyleSheet.create({
  BackHeaderBG: {
    backgroundColor:'#ffff',
   paddingHorizontal:wp('5%'),
   paddingVertical:hp('4%'),
    borderRadius:16,
    flexWrap:'wrap',
  },
  box:{
      flexDirection:'row'
  },
  imageView:{
      backgroundColor:'#F1F2FF',
      borderRadius:40,
      padding:13,
      marginRight:wp('4%')

  },
  text1:{
      fontFamily: 'Fira Sans',
      fontSize:23,
      fontWeight:'600',
      color:'#000000'
  },
  text2:{
      fontFamily: 'Poppins',
      fontSize:9,
      fontWeight:'300',
      color:'#1B1B1B',
      maxWidth:wp('55%')
      
  }
})
