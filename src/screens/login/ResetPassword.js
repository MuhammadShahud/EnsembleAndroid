import {useNavigation} from '@react-navigation/native';
import React, {useState,useRef,useEffect} from 'react';
import SuccessModaal from '../../components/Modaal/SuccessModaal';
import {
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrimaryButton from '../../components/PrimaryButton';
import {useDispatch} from 'react-redux';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {FlashMessage, ResetPass} from '../../redux/Actions/AuthAction';
import {PRIMARYCOLOR} from '../../../assets/colors/colors';
import {
  appLogo,
  greentick,
  tickLogo,
  yellowLine,
} from '../../../assets/images/images';
import {PoppinsRegular, PoppinsSemiBold} from '../../../assets/fonts/Fonts';
import Eyee from '../../../assets/images/eyee';
import EyeeSlash from '../../../assets/images/noteyee'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RBSheet from "react-native-raw-bottom-sheet";


const ResetPassword = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState(props.route.params.email);
  const [newPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [passwordVisibility1, setPasswordVisibility1] = useState(true);
  const [rightIcon, setRightIcon] = useState(true);
  const [rightIcon1, setRightIcon1] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePasswordVisibility = () => {
    if (rightIcon === true) {
      setRightIcon(false);
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === false) {
      setRightIcon(true);
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handlePasswordVisibility1 = () => {
    if (rightIcon1 === true) {
      setRightIcon1(false);
      setPasswordVisibility1(!passwordVisibility1);
    } else if (rightIcon1 === false) {
      setRightIcon1(true);
      setPasswordVisibility1(!passwordVisibility1);
    }
  };

  const submitLogin = () => {
    if ((email, newPassword, confirmPassword)) {
      const newObj = {
        email,
        newPassword,
        confirmPassword,
      };
      console.log( 'newObj',props);
      props.route.params.firstTime
        ? dispatch(ResetPass(newObj, setModalVisible,true))
        : dispatch(ResetPass(newObj, setModalVisible));
    } else {
      FlashMessage({
        message: 'Must fill all the fields',
        type: 'danger',
      });
    }
  };

  const refRBSheet = useRef();


  useEffect(() => {

    refRBSheet.current.open()

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoStyle} resizeMode="contain" source={appLogo} />
      </View>

        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        closeOnPressBack={false}

        height='550'
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container:{
            borderTopLeftRadius:moderateScale(40),
            borderTopRightRadius:moderateScale(40),


          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >



<ScrollView contentContainerStyle={{height:'150%'}}>
      
        <View style={styles.inputContainer}>
          <View>
            <Image source={yellowLine} />
          </View>
          <Text style={styles.resetPasswordText}>Reset Password</Text>
          <Text style={styles.resetPara}>
            Set the new password for your account so you can login and access
            all the features.
          </Text>
          <View style={{height: hp('4%')}} />

          <View>
            <Text style={styles.confirmPassword}>Password</Text>
            <View />

            <TextInput
              style={styles.inputField}
              onChangeText={setPassword}
              value={newPassword}
              placeholder="*********************"
              keyboardType="default"
              secureTextEntry={passwordVisibility}
              name={'Password'}
            />
            <TouchableOpacity
              onPress={handlePasswordVisibility}
              style={styles.firsteye}>
              <View
                style={{marginTop: verticalScale(5), marginRight: scale(10)}}>
                {rightIcon ? <Eyee /> : <EyeeSlash />}
              </View>
            </TouchableOpacity>
            <View style={{height: hp('4%')}} />

            <Text style={styles.confirmPassword}>Confirm Password</Text>
            <View />
            <View>
              <TextInput
                style={styles.inputField}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="*********************"
                keyboardType="default"
                secureTextEntry={passwordVisibility1}
                name={'Confirm Password'}
              />
              <TouchableOpacity
                onPress={handlePasswordVisibility1}
                style={styles.eye}>
                <View
                  style={{marginTop: verticalScale(5), marginRight: scale(10)}}>
                  {rightIcon1 ? <Eyee /> : <EyeeSlash />}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{height: hp('2%')}} />
          </View>

          <View style={{height: hp('2%')}} />
          <View style={styles.btn}>
            <PrimaryButton
              title="Continue"
              backgroundColor="#2B2F86"
              color="white"
              onPress={submitLogin}
            />
          </View>
        </View>
        <SuccessModaal
          source={tickLogo}
          successText={'Password Changed Successfully'}
          backgroundButtonColor="#2B2F86"
          buttonTitle={'Go Back To Login'}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
        {/* </KeyboardAwareScrollView> */}
      </ScrollView>
      </RBSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
  logo: {
    height: hp('33%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: wp('70%'),
    height: hp('20%'),
  },
  inputContainer: {
    alignItems: 'center',
    width: wp('100%'),
    minHeight: hp('65%'),
    backgroundColor: '#fff',
    borderTopStartRadius: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderTopEndRadius: wp('10%'),
    flex: 1,
  },
  resetPasswordText: {
    alignSelf: 'flex-start',
    // fontWeight: 'bold',
    fontFamily: PoppinsSemiBold,
    color: 'black',
    fontSize: moderateScale(24),
    paddingHorizontal: scale(25),
    marginTop: verticalScale(30),
  },
  resetPara: {
    color: '#939393',
    alignSelf: 'flex-start',
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(10),
    lineHeight: verticalScale(18),
    fontSize:moderateScale(14)
  },
  confirmPassword: {
    color: 'black',
    marginLeft: scale(10),
    fontFamily: PoppinsRegular,
    fontSize: moderateScale(14),
  },

  firsteye: {
    position: 'absolute',
    right: scale(20),
    top: verticalScale(32),
  },

  inputField: {
    marginHorizontal: 'auto',
    width: wp('90%'),
    backgroundColor: '#F5F5F5',
    marginHorizontal: scale(5),
    borderRadius: moderateScale(40),
    paddingLeft: scale(20),
  },

  eye: {
    position: 'absolute',
    right: scale(20),
    top: verticalScale(10),
  },
  btn: {
    width: wp('90%'),
  },
});
export default ResetPassword;
