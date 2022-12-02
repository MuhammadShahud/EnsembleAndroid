import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import {scale, verticalScale} from 'react-native-size-matters';
import {ResetPass} from '../../redux/Actions/AuthAction';
import {PRIMARYCOLOR} from '../../../assets/colors/colors';
import {appLogo, yellowLine} from '../../../assets/images/images';

const ResetPassword = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('shahud@plumtreegroup.net');
  const [newPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState(true);
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

  const submitLogin = () => {
    const newObj = {
      email,
      newPassword,
      confirmPassword,
    };
    console.log(newObj, 'newObj');
    dispatch(ResetPass(newObj, setModalVisible));
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
          <Text style={styles.resetPasswordText}>Reset Password</Text>
          <Text style={styles.resetPara}>
            Set the new password for your account so you can login and access
            all the features.
          </Text>
          <View style={{height: hp('4%')}} />

          <View>
            <Text style={styles.confirmPassword}>Password</Text>
            <View style={{height: hp('1%')}} />

            <TextInput
              style={styles.inputField}
              onChangeText={setPassword}
              value={newPassword}
              placeholder="********************"
              keyboardType="default"
              secureTextEntry={passwordVisibility}
              name={'Password'}
            />
            <TouchableOpacity
              onPress={handlePasswordVisibility}
              style={styles.firsteye}>
              {rightIcon ? (
                <Icon name="eye" size={20} />
              ) : (
                <Icon name="eye-slash" size={20} />
              )}
            </TouchableOpacity>
            <View style={{height: hp('4%')}} />

            <Text style={styles.confirmPassword}>Confirm Password</Text>
            <View style={{height: hp('1%')}} />
            <View>
              <TextInput
                style={styles.inputField}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="********************"
                keyboardType="default"
                secureTextEntry={passwordVisibility}
                name={'Confirm Password'}
              />
              <TouchableOpacity
                onPress={handlePasswordVisibility}
                style={styles.eye}>
                {rightIcon ? (
                  <Icon name="eye" size={20} />
                ) : (
                  <Icon name="eye-slash" size={20} />
                )}
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
        <SuccessModaal successText={'Password Changed Successfully'} backgroundButtonColor='#2B2F86' buttonTitle={'Go Back To Login'}  visible={modalVisible} setVisible={setModalVisible} />
      </ScrollView>
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
    minHeight: hp('80%'),
    backgroundColor: '#fff',
    borderTopStartRadius: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderTopEndRadius: wp('10%'),
    flex: 1,
  },
  resetPasswordText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: 'black',
    fontSize: wp('6%'),
    paddingHorizontal: scale(25),
    marginTop: verticalScale(30),
  },
  resetPara: {
    color: '#939393',
    alignSelf: 'flex-start',
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(10),
    lineHeight: verticalScale(18),
  },
  confirmPassword: {
    color: 'black',
    marginLeft: 10,
  },

  firsteye: {
    position: 'absolute',
    right: 20,
    top: 43,
  },

  inputField: {
    marginHorizontal: 'auto',
    width: wp('90%'),
    backgroundColor: '#F5F5F5',
    margin: 5,
    borderRadius: 42,
    paddingLeft: 15,
  },

  eye: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  btn: {
    width: wp('80%'),
  },
});
export default ResetPassword;
