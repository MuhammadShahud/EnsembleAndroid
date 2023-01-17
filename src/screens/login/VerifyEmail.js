import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
  Image,
  TextInput,
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { appLogo, yellowLine } from '../../../assets/images/images'
import PrimaryButton from '../../components/PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ForgetPass } from '../../redux/Actions/AuthAction'
import { PRIMARYCOLOR } from '../../../assets/colors/colors'
import { PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const VerifyEmail = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [email, setEmail] = useState('')





  const submitLogin = () => {
    const newObj = {
      email,
    }
    console.log("workingggg", newObj);

    dispatch(ForgetPass(newObj, navigation, 'verificationcode'))

  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoStyle} resizeMode="contain" source={appLogo} />

      </View>

    {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}

      <ScrollView contentContainerStyle={{height:'180%'}}>
        <View style={styles.inputContainer}>

          <View>
            <Image source={yellowLine} />
          </View>
          <Text style={styles.VerifyEmailText}>Verify Email</Text>
          <View style={{ height: hp('2%') }} />

          <View>
            <Text style={styles.verificationProcessText}>
              Enter your email for the verification process.
            </Text>
            <Text style={styles.confirmationCodeText}>
              We will send confirmation code to your email.</Text>
            <View style={{ height: hp('1%') }} />


            <View style={{ height: hp('4%') }} />

            <Text style={styles.workEmailText}>
              Work Email
            </Text>
            <View />
            <View>
              <TextInput
                style={styles.inputField}
                onChangeText={setEmail}
                value={email}
                placeholder="michaelscott@papercompany.com"
                keyboardType="email-address"
                />

            </View>
            <View style={{ height: hp('2%') }} />
          </View>
          <View style={{ height: hp('2%') }} />
          <View style={styles.btn}>
            <PrimaryButton
              title="Continue"
              backgroundColor="#2B2F86"
              color="white"
              onPress={submitLogin}
            />
          </View>
        </View>
      {/* </KeyboardAwareScrollView> */}
      </ScrollView>
    </ScrollView>
  )
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR
  },


  logo: {
    height: hp('43%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    width: wp('70%'),
    height: hp('20%')
  },

  inputContainer: {
    alignItems: 'center',
    width: wp('100%'),
    minHeight: hp('60%'),
    backgroundColor: '#fff',
    borderTopStartRadius: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderTopEndRadius: wp('10%'),
    flex: 1
  },

  VerifyEmailText: {

    color: 'black',
    alignSelf: 'flex-start',
    // fontWeight: 'bold',
    fontFamily: PoppinsSemiBold,
    fontSize: wp('6%'),
    paddingHorizontal: scale(25),
    marginTop: verticalScale(25)

  },

  verificationProcessText: {
    color: '#939393',
    marginLeft: scale(10),
    fontFamily: PoppinsRegular
  },
  confirmationCodeText: {
    color: '#939393',
    marginLeft: scale(10),
    paddingTop: verticalScale(5)
  },
  workEmailText: {
    color: 'black',
    marginLeft: scale(10),
    fontFamily: PoppinsRegular,
  },


  inputField: {
    marginHorizontal: 'auto',
    width: wp('90%'),
    backgroundColor: '#F5F5F5',
    marginHorizontal:scale(5),
    marginVertical:verticalScale(5),
    borderRadius: moderateScale(40),
    paddingLeft: scale(15)
  },
  btn: {
    width: wp('90%')
  },
});
export default VerifyEmail

