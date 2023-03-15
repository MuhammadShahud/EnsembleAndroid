import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
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
import { FlashMessage, LoginFunction } from '../../redux/Actions/AuthAction';
import { scale, verticalScale } from 'react-native-size-matters';
import Eyee from '../../../assets/images/eyee'
import EyeeSlash from '../../../assets/images/noteyee'

const Login = () => {
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
    if(email && password){
    const newObj = {
      email,
      password,
    };
    console.log('workingggg', newObj);

    dispatch(LoginFunction(newObj, navigation, 'name'));
  }else{
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

      <ScrollView contentContainerStyle={{height:'150%'}}>
      {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}

        <View style={style.inputContainer}>
          <View>
            <Image source={yellowLine} />

          </View>
          <Text style={[style.heading, { marginTop: verticalScale(15) }]}>Welcome To  </Text>
          <Text style={[style.heading, { marginTop: verticalScale(-20) }]}>ENSEMBLE  </Text>
          <View style={{ height: hp('2%') }} />

          <View style={style.div}>
            <Text style={[styles.small, { color: 'black', marginLeft: scale(10) }]}>
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

            <Text style={[styles.small, { color: 'black', marginLeft: scale(10) }]}>
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
                <View style={{marginTop:verticalScale(5),marginRight:scale(10)}}>
                {rightIcon ? 

<Eyee />

: 

                 <EyeeSlash/>
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
              {/* </KeyboardAwareScrollView> */}
      </ScrollView>
    </View>
  );
};

export default Login;
