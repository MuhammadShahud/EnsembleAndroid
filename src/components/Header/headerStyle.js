import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { PRIMARYCOLOR } from '../../../assets/colors/colors'

export const style = StyleSheet.create({
  BackHeaderBG: {
    width: wp('100%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: hp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 1,
    paddingRight:wp('3%'),
    paddingLeft:wp('3%')
  },
  companyName: {
    color: 'black',
    fontSize:wp('4%'),
    fontWeight:'700',
    textAlign:'left',
    
  },
  halfHeader: {
flexDirection:'row',
alignItems:'center',
  }
})
