import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import colors, { PRIMARYCOLOR } from '../../../assets/colors/colors'
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { appLogo, yellowLine } from '../../../assets/images/images'
import PrimaryButton from '../../components/PrimaryButton'
import { useDispatch } from 'react-redux'
import { LoginFunction } from '../../redux/Actions/AuthAction'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const VerificationCode = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(50);

  //   const {VerifyEmailApi} = useContext(AuthContext);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const onClickNext = () => {
    if (value.length == 4) {
      //    navigation.navigate('changePassowrd');
    } else {
      alert('length must be 4');
    }
  };
  // useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);

console.log("inputCode",value);
const forgetCode = props.route.params;
console.log('code',forgetCode.forgetCode);


  const submitLogin = () => {
    console.log(value,"shahudd",value === forgetCode.forgetCode.toString());
value === forgetCode.forgetCode.toString()?
    navigation.navigate('resetpassword',{email:forgetCode.email}):null
  };

  return (
    <View style={styles.container}>
    <View style={styles.logo}>
      <Image style={styles.logoStyle} resizeMode="contain" source={appLogo} />

    </View>

    <ScrollView>
      <View style={styles.inputContainer}>
        <View>
          <Image source={yellowLine} />
        </View>

        <Text style={styles.verificationCodeText}>Enter Verification Code</Text>
        <Text style={styles.recieveEmailText}>Enter the code that you recieved on your email.</Text>
        <View style={{ height: hp('3%') }} />

        <CodeField
          ref={ref}
          {...prop}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View style={{ height: hp('2%') }} />
        <View style={styles.btn}>
          <PrimaryButton
            title="Confirm"
            backgroundColor="#2B2F86"
            color="white"
            onPress={submitLogin}
          />
        </View>
      </View>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR
  },
  logo: {
    height: hp('53%'),
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
    minHeight: hp('80%'),
    backgroundColor: '#fff',
    borderTopStartRadius: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderTopEndRadius: wp('10%'),
    flex: 1
  },


  cell: {
    width: 50,
    height: 60,
    borderColor: 'black',
    textAlignVertical: 'center',
    fontSize: moderateScale(30),
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginVertical: verticalScale(10),
    marginHorizontal: scale(13),
    fontWeight: 'bold',
    color: 'black'
  },

  focusCell: {
    height: scale(70),
  },
  codeFieldRoot: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    paddingHorizontal: scale(40),
    borderColor: '#505050',
  },
  verificationCodeText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: wp('6%'),
    paddingHorizontal: scale(25),
    marginTop: verticalScale(30)
  },
  recieveEmailText: {


    alignSelf: 'flex-start',
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(10)
  },
  btn: {
    width: wp('80%')
  },


})

export default VerificationCode

