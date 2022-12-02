import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { PRIMARYCOLOR } from '../../../assets/colors/colors'

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    width: wp('100%'),
    height:hp('100%'),
    justifyContent: 'center',
    alignItems: 'center'
  }
}
);