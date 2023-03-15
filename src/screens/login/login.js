import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import {
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { appLogo, login, yellowLine } from '../../../assets/images/images'
import PrimaryButton from '../../components/PrimaryButton';
import { style } from './loginStyle';
import { styles } from '../../styles/GeneralStyle';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlashMessage, LoginFunction } from '../../redux/Actions/AuthAction';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Button from '../../components/Button';
import Eyee from '../../../assets/images/eyee'
import EyeeSlash from '../../../assets/images/noteyee'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RBSheet from "react-native-raw-bottom-sheet";

const Login = () => {
  const refRBSheet = useRef();


  useEffect(() => {

    refRBSheet.current.open()

  }, [])



  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState(true);

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
    if (email && password) {
      const newObj = {
        email,
        password,
      };
      console.log('workingggg', newObj);

      dispatch(LoginFunction(newObj, navigation, 'name'));
    } else {
      FlashMessage({
        message: "Must fill all the fields",
        type: 'danger',
      });
    }
  };


  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Image style={style.logoStyle} resizeMode="contain" source={appLogo} />

      </View>


      <RBSheet
        ref={refRBSheet}
        height='470'
        closeOnDragDown={false}
        closeOnPressMask={false}
        closeOnPressBack={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          
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
<ScrollView contentContainerStyle={{height:'180%'}}>

        <View style={style.inputContainer}>
          <View>
            <Image source={yellowLine} />

          </View>

          <Text style={[style.heading, { marginTop: verticalScale(15), fontSize: moderateScale(36) }]}>Welcome To  </Text>
          <Text style={[style.heading, { marginTop: verticalScale(-20), fontSize: moderateScale(36) }]}>ENSEMBLE  </Text>
          <View style={{ height: hp('2%') }} />

          <View style={style.div}>
            <Text style={[styles.small, { color: 'black', marginLeft: scale(10), fontSize: moderateScale(14) }]}>
              Work Email
            </Text>
            <View />

            <TextInput
              style={style.inputField}
              onChangeText={setEmail}
              value={email}
              placeholder="michaelscott@papercompany.com"
              keyboardType="email-address"
            />
            <View style={{ height: hp('1%') }} />

            <Text style={[styles.small, { color: 'black', marginLeft: scale(10), fontSize: moderateScale(14) }]}>
              Password
            </Text>
            <View />
            <View>
              <TextInput
                style={style.inputField}
                onChangeText={setPassword}
                value={password}
                placeholder="********************"
                keyboardType="default"
                secureTextEntry={passwordVisibility}
                />
              <TouchableOpacity onPress={handlePasswordVisibility} style={style.eye}>
                <View style={{ marginTop: verticalScale(5), marginRight: scale(10) }}>
                  {rightIcon ?

                    <Eyee />

                    :

                    <EyeeSlash />
                  }
                </View>


              </TouchableOpacity>
            </View>
            <View style={{ height: hp('1%') }} />

            <Text
              onPress={() => navigation.navigate('verifyemail')}
              style={[
                styles.smalls,
                {
                  color: 'black',
                  marginLeft: scale(10),
                  fontSize: moderateScale(10.92),
                  textDecorationLine: 'underline'
                }
              ]}>
              Forgot Password?
            </Text>
          </View>

          <View style={{ height: hp('2%') }} />
          <View style={style.btn}>
            <PrimaryButton
              title="Login"
              backgroundColor="#2B2F86"
              color="white"
              onPress={submitLogin}
            />
          </View>
        </View>
              </ScrollView>
      </RBSheet>

    </View>
  );
};

export default Login;
