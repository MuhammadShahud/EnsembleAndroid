import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SettingsHeader from '../../components/Header/SettingsHeader'
import { PoppinsBold, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button'
import { ButtonColor } from '../../../assets/colors/colors'
import SuccessModaal from '../../components/Modaal/SuccessModaal'


const ChangePassword = () => {
  const [rightIcon, setRightIcon] = useState(true);
  const [rightIcon1, setRightIcon1] = useState(true);
  const [rightIcon2, setRightIcon2] = useState(true);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [passwordVisibility1, setPasswordVisibility1] = useState(true);
  const [passwordVisibility2, setPasswordVisibility2] = useState(true);
  const [oldPassword, setOldPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

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
  const handlePasswordVisibility2 = () => {
    if (rightIcon2 === true) {
      setRightIcon2(false);
      setPasswordVisibility2(!passwordVisibility2);
    } else if (rightIcon2 === false) {
      setRightIcon2(true);
      setPasswordVisibility2(!passwordVisibility2);
    }
  };

  return (
    <View style={styles.mainView}>
      <View>
        <SettingsHeader />
        <Text style={styles.change}>Change Password</Text>
        <Text style={styles.passwordText}>Enter Old Password</Text>
        <View style={styles.inputFieldView}>

          <TextInput
            style={styles.inputField}
            onChangeText={setOldPassword}
            value={oldPassword}
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
        </View>

        <Text style={styles.passwordText}>Enter New Password</Text>
        <View style={styles.inputFieldView}>

          <TextInput
            style={styles.inputField}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="********************"
            keyboardType="default"
            secureTextEntry={passwordVisibility1}
            name={'Password'}
          />
          <TouchableOpacity
            onPress={handlePasswordVisibility1}
            style={styles.firsteye}>
            {rightIcon1 ? (
              <Icon name="eye" size={20} />
            ) : (
              <Icon name="eye-slash" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.passwordText}>Enter Confirm Password</Text>
        <View style={styles.inputFieldView}>

          <TextInput
            style={styles.inputField}
            onChangeText={setNewPassword}
            value={newPassword}
            placeholder="********************"
            keyboardType="default"
            secureTextEntry={passwordVisibility2}
            name={'Password'}
          />
          <TouchableOpacity
            onPress={handlePasswordVisibility2}
            style={styles.firsteye}>
            {rightIcon2 ? (
              <Icon name="eye" size={20} />
            ) : (
              <Icon name="eye-slash" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Button
          title="Continue"
          onPress={()=>setModalVisible(true)}
          buttonStyle={styles.goalButton}
        />
        <SuccessModaal successText={'Password Updated Successfully'} backgroundButtonColor='#2AB679' buttonTitle={'Go Back To Home'} modalText={styles.modalText} visible={modalVisible} setVisible={setModalVisible} />




      </View>
      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
      </View>

    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  change: {
    color: 'black',
    fontFamily: PoppinsBold,
    fontSize: moderateScale(20),
    marginVertical: verticalScale(20),
    marginHorizontal: scale(20)
  },
  ensemble: {
    // fontWeight:'bold',
    color: '#8C8C8C',
    fontSize: moderateScale(20),
    fontFamily: PoppinsSemiBold
  },
  powered: {
    color: '#8C8C8C',
    fontFamily: PoppinsRegular,
    marginBottom: verticalScale(-5),
  },
  footerView: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(15)
  },
  passwordText: {
    marginHorizontal: scale(20),
    fontFamily: PoppinsRegular,
    color: '#414141',
    fontSize: moderateScale(14),
    marginTop: verticalScale(20)
  },
  inputField: {
    // marginHorizontal: scale(20),
    // backgroundColor: '#F5F5F5',
  },
  inputFieldView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(20),
    justifyContent: 'space-between',
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10)
  },
  goalButton: {


    width: '85%',
    color: 'white',
    backgroundColor: ButtonColor,
    marginTop: verticalScale(30),
    borderRadius: moderateScale(30),
    fontFamily: PoppinsSemiBold
  },
  modalText:{
    color:ButtonColor
  }


})