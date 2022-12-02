import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
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
import {style} from './loginStyle';
import {styles} from '../../styles/GeneralStyle';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginFunction } from '../../redux/Actions/AuthAction';

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
    const newObj = {
      email,
      password,
    };
    console.log('workingggg', newObj);

    dispatch(LoginFunction(newObj, navigation, 'name'));
  };

  return (
    <View style={style.container}>
      <View style={style.logo}>
    <Image style={style.logoStyle} resizeMode="contain" source={appLogo} />

      </View>

<ScrollView>
      <View style={style.inputContainer}>
        <View>
<Image  source={yellowLine} />

        </View>
        <Text style={[styles.large, style.heading,{marginTop:10}]}>Welcome To ENSEMBLE</Text>
        <View style={{ height: hp('4%') }} />

        <View style={style.div}>
          <Text style={[styles.small, { color: 'black', marginLeft: 10 }]}>
            Work Email
          </Text>
          <View style={{ height: hp('1%') }} />

          <TextInput
            style={style.inputField}
            onChangeText={setEmail}
            value={email}
            placeholder="michaelscott@papercompany.com"
            keyboardType="email-address"
          />
          <View style={{ height: hp('2%') }} />

          <Text style={[styles.small, { color: 'black', marginLeft: 10 }]}>
            Password
          </Text>
          <View style={{ height: hp('1%') }} />
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
            {rightIcon?<Icon name='eye' size={20}/> : <Icon name='eye-slash' size={20}/>}
  </TouchableOpacity>
          </View>
          <View style={{ height: hp('2%') }} />

          <Text
             onPress={() => navigation.navigate('verifyemail')}
            style={[
              styles.small,
              {
                color: 'black',
                marginLeft: 10,
                textDecorationLine: 'underline'
              }
            ]}>
            Forget Password?
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
    </View>
  );
};

export default Login;
