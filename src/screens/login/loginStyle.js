import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { PRIMARYCOLOR } from '../../../assets/colors/colors'

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR
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
    margin: 5,
    borderRadius: 42,
    paddingLeft: 15
  },
  inputContainer: {
    alignItems: 'center',
    width: wp('100%'),
    minHeight: hp('80%'),
    backgroundColor: '#fff',
    borderTopStartRadius: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderTopEndRadius: wp('10%'),
    flex: 1
  },
  forgotWidth: {
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  logo: {
    height: hp('43%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: wp('8%')
  },
  eye :{
position: 'absolute',
right: 20,
top:20,
  },
  firsteye:{
  
      position: 'absolute',
      right: 20,
      top:43,
        },
  
  btn: {
    width: wp('80%')
  },
  welcomeEnsemble:{}
})
